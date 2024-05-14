import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-800">404</h1>
      <p className="text-2xl text-gray-600 font-semibold">Page Not Found</p>
      <Link to="/" className="mt-6 inline-block text-blue-500 hover:underline">
        Go back to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
