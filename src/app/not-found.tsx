import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-slate-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        className="px-6 py-3 bg-cyan-600 text-white rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75"
        href="/"
      >
        Go Back Home
      </Link>
    </div>
  );
}
