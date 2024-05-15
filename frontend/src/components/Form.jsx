const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-2xl border shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-dark-yellow">
          {label}
        </h2>
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-[16px] font-medium text-gray-900"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="w-full bg-gray-200 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-[16px] font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="w-full bg-gray-200 border border-gray-300 text-gray-900 text-md p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-dark-yellow hover:bg-yellow text-white text-[16px] font-medium py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            {label}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
