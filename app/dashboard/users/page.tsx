import { Suspense } from 'react';

type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

type GameIndex = {
  game_index: number;
  version: {
    name: string;
    url: string;
  };
};

type Cry = {
  latest: string;
  legacy: string;
};

type Form = {
  name: string;
  url: string;
};

type Pokemon = {
  abilities: Ability[];
  base_experience: number;
  cries: Cry;
  forms: Form[];
  game_indices: GameIndex[];
};

async function getUsers() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {
    cache: 'no-store',
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }
  
  return res.json();
}

function UsersList({ users }: { users: Pokemon }) {
  return (
    <div className="space-y-6">
      {/* Base Experience */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Base Experience</h2>
        <p className="text-3xl font-bold text-blue-600">{users.base_experience}</p>
      </div>

      {/* Abilities */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Abilities</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {users.abilities.map((ability, index) => (
            <div 
              key={index} 
              className="p-4 border rounded-lg hover:border-blue-500 transition-colors"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-medium capitalize">{ability.ability.name}</h3>
                {ability.is_hidden && (
                  <span className="px-2 py-1 text-xs bg-purple-100 text-purple-800 rounded-full">
                    Hidden
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mt-1">Slot: {ability.slot}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Forms */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Forms</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {users.forms.map((form, index) => (
            <div 
              key={index}
              className="p-4 border rounded-lg hover:bg-gray-50"
            >
              <p className="font-medium capitalize">{form.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Game Indices */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Game Appearances</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.game_indices.map((game, index) => (
            <div 
              key={index}
              className="p-4 border rounded-lg"
            >
              <h3 className="font-medium capitalize">{game.version.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Index: {game.game_index}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Cries */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Cries</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Latest</h3>
            <audio controls src={users.cries.latest} className="w-full" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Legacy</h3>
            <audio controls src={users.cries.legacy} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Users() {
  const users = await getUsers();

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Pokemon Details</h1>
      <Suspense fallback={<LoadingSkeleton />}>
        <UsersList users={users} />
      </Suspense>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-white p-6 rounded-lg shadow animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
}