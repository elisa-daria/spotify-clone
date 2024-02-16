import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToFavAction,
  AddToPlayerAction,
  RemoveFavAction,
} from "../redux/actions";
import Button from "react-bootstrap/Button";

const SingleArtist = ({ query, genre }) => {
  const [artist, setArtist] = useState([]);
  const myUrl = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favorites.list);
  const isFav = favourites.singleSong;
  const handleTrash = (index) => {
    dispatch(RemoveFavAction(index));
  };

  const gettingMusic = async () => {
    try {
      let response = await fetch(myUrl + query);
      if (response.ok) {
        let { data } = await response.json();

        setArtist(data);
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      alert("Error:" + error);
    }
  };
  useEffect(() => {
    gettingMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="col-10">
      <div id={genre}>
        <h2 className="text-light">{genre} Classics</h2>
        <div
          className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
          id="rockSection"
        >
          {artist.slice(0, 8).map((singleSong, index) => (
            <div key={index} className="col text-center">
              <img
                className="img-fluid"
                src={singleSong.album.cover_medium}
                alt="track"
                onClick={() => {
                  dispatch(AddToPlayerAction(singleSong));
                }}
              />

              {isFav ? (
                <>
                  <Button
                    className="bg-transparent border-0 fs-5"
                    onClick={() => dispatch(handleTrash(index))}
                  >
                    Track: {`${singleSong.title}`}
                  </Button>
                  <p>
                    <i className="bi bi-heart-fill fs-4 text-white"></i>
                  </p>
                </>
              ) : (
                <>
                  <Button
                    className="bg-transparent border-0"
                    onClick={() => dispatch(AddToFavAction(singleSong))}
                  >
                    Track: {`${singleSong.title}`}
                  </Button>
                  <p>
                    <i className="bi bi-heart fs-4 text-white"></i>
                  </p>
                </>
              )}
              <p>Artist: {singleSong.artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SingleArtist;
