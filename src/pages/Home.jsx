import { CardSection } from "../components";
import { playlist1,playlist2} from "../data/playlists";

const Home = () => {
  return (
    <>
      <CardSection playlist={playlist1} playlistTitle={"Spotify Playlists"} />
      <CardSection playlist={playlist2} playlistTitle={"fresh new music"} />

    </>
  );
};
export default Home;
