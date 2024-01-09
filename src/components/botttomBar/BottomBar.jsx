const BottomBar = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 w-full mt-2 px-6 py-2 flex justify-between">
      <div className="text-white">
        <h2 className="font-bold text-sm">Preview of Spotify</h2>
        <h2 className="font-semibold">
          Sign up to get unlimted songs and podcasts with occasional ads. No
          credit card needed.
        </h2>
      </div>
      <button className="bg-white rounded-full text-black px-8 py-3 font-bold hover:scale-105 transition-all duration-300">
        Sign up free
      </button>
    </div>
  );
};
export default BottomBar;
