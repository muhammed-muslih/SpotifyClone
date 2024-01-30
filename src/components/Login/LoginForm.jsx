const LoginForm = () => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor="emailoruserName"
        className="text-white font-semibold text-sm pb-2"
      >
        Email or username
      </label>
      <input
        type="text"
        className="border border-gray-500 p-3 rounded-md bg-transparent text-white focus:ring-2 ring-white placeholder:font-normal hover:border-white outline-none"
        placeholder="Email or username"
      />
    </div>
  );
};
export default LoginForm;
