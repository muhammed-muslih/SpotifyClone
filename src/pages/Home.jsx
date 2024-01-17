import { useEffect, useState } from "react";
import { Card } from "../components";
import { playlists } from "../data/playlists";
import useColor from "../contexts/color";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(7);
  const {updateColor,updateTopBarColor} = useColor()

  const cards = playlists.map((item, index) => (
    <div key={index} className={`${index < visibleCards ? "block" : "hidden"}`}>
      <Card img={item.img} title={item.title} description={item.description} id={item.id}/>
    </div>
  ));

  const changeColor = (newColor) => {
    updateColor(newColor)
  }
  const changeTopBarColor = (newTopBarColor) => {
    updateTopBarColor(newTopBarColor)
  }
  useEffect(() => {
    changeColor('bg-[rgb(12,12,12)]')
    changeTopBarColor('bg-[rgb(12,12,12)]')

  },[])

  return (
    <div className="px-9 bg-[rgb(18,18,18)] py-2 pb-20 h-auto">
      
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
