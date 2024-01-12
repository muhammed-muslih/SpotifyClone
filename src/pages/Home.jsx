import { useState } from "react";
import Card from "../components/card/Card";
const Home = () => {
  const [visibleCards, setVisibleCards] = useState(7);
  const playlists = [
    {
      img: "https://pub-static.fotor.com/assets/projects/pages/c7d9749a29fc44a5a54da2bba21165af/gradient-cool-new-bullet-e52b9cac8825471981dc12dd343176da.jpg",
      title: "Today's Top Hits",
      description: " Noah Kahan is on top of the Hottest 50! ",
    },
    {
      img: "https://d2rd7etdn93tqb.cloudfront.net/wp-content/uploads/2022/03/spotify-playlist-cover-woman-listeningt-to-headphones-purple-music-032322.jpg",
      title: "Mood Booster",
      description: "Get happy with today's dose of feel-good songs!",
    },
    {
      img: "https://pics.craiyon.com/2023-10-27/34a5e38e8bb94198b1283b98ebb0b937.webp",
      title: "Rock Classic",
      description:
        "Rock legends & epic songs that continue to inspire generations. Cover: Foo Fighters",
    },
    {
      img: "https://cms-fym.imgix.net/ox_Yn_AX_Da_R2_Cw_Rrnhv_Eal_515f388034.png?auto=compress,format&fit=fillmax&ch=Save-Data&w=1200&max-h=1200",
      title: "Chill Hits",
      description: "Kick back to the best new and recent chill hits.",
    },
    {
      img: "https://i.scdn.co/image/ab67706f000000029158da3ba5a85f1d6b72512b",
      title: "mega mix",
      description: "A mega mix of 75 favorites from the last few years!",
    },
    {
      img: "https://i.scdn.co/image/ab67706f000000024887bcc008e0dad5275de257",
      title: "Peaceful piano ",
      description: "Peaceful piano to help you slow down, breathe, and relax.",
    },
    {
      img: "https://i.scdn.co/image/ab67706f0000000251548f92c40cd454d0e16fd7",
      title: "rise",
      description: "Positive and uplifting ambient instrumental tracks.",
    },
    {
      img: "https://i.scdn.co/image/ab67706f000000029a301b01b8ececc2159108eb",
      title: "pop picks",
      description:
        "Discover the freshest pop picks, curated for your listening pleasure.",
    },
    {
      img: "https://i.scdn.co/image/ab67706f00000002efc309cb3bb23e8654001612",
      title:"oos pop",
      description: "Catchiest hooks and hottest beats to get your groove on.",
    },
    {
      img: "https://i.scdn.co/image/ab67706f00000002a8739d71eecfbac63f2ce0ab",
      title: "all out 2020s",
      description:
        "The biggest songs of the 2020s.",
    },
  ];

  const cards = playlists.map((item, index) => (
    <div key={index} className={`${index < visibleCards ? "block" : "hidden"}`}>
      <Card img={item.img} title={item.title} description={item.description} />
    </div>
  ));

  return (
    <div className="px-7 bg-[rgb(18,18,18)] py-2 pb-20 ">
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
      <div className="flex flex-wrap gap-4 pt-4">{cards}</div>
    </div>
  );
};
export default Home;
