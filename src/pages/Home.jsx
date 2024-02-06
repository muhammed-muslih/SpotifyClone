import { CardSection } from "../components";
import { playlist1, playlist2 } from "../data/playlists";
import useUser from "../contexts/user";

const Home = () => {
  const { isUserLiggedIn } = useUser();
  return (
    <>
      <CardSection playlist={playlist1} playlistTitle={"Spotify Playlists"} />
      {isUserLiggedIn && (
        <CardSection playlist={playlist2} playlistTitle={"fresh new music"} />
      )}
    </>
  );
};
export default Home;
