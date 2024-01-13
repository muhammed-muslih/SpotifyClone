import { useState } from "react";
import Card from "../components/card/Card";
import { playlists } from "../data/playlists";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(7);

  const cards = playlists.map((item, index) => (
    <div key={index} className={`${index < visibleCards ? "block" : "hidden"}`}>
      <Card img={item.img} title={item.title} description={item.description} />
    </div>
  ));

  return (
    <div className="px-8 bg-[rgb(18,18,18)] py-2 pb-20 rounded-t-lg">
      
      <div className="flex justify-between text-white">
        <h1 className="text-white font-semibold text-2xl hover:underline cursor-pointer">
          Spotify Playlists
        </h1>
        <h3
          className={`text-white/50 text-sm font-bold cursor-pointer hover:underline ${
            visibleCards === playlists.length && "hidden"
          }`}
          onClick={() => setVisibleCards(playlists.length)}
        >
          Show all
        </h3>
      </div>
      <div className="flex flex-wrap gap-4  pt-4">{cards}</div>
    </div>
  );
};
export default Home;
