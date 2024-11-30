import Link from 'next/link';
import Image from 'next/image';
export default function UnderConstruction() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center">
        <Image src="https://i.pinimg.com/originals/b4/32/48/b4324850a88409aaf33ac2528ec7d55b.gif" alt="Under Construction" width={400} height={400} className='w-full h-full' />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          This Page is Under Construction
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This page is under construction && we are not serious it's just a playing with code😁😄😂
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Please note that some features may not yet be available as we it's not an official platform.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
