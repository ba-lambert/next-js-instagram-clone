"use client";

import { useParams } from "next/navigation";

export default function Project() {
  const params = useParams();
  const id = params.id;
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p className="text-2xl font-bold text-blue-900">Project {id}</p>
    </div>
  );
}
