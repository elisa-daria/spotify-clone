import Anchor from "react-bootstrap/Anchor";
import Next from "../assets/playerbuttons/next.png";
import Shuffle from "../assets/playerbuttons/shuffle.png";
import Prev from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Repeat from "../assets/playerbuttons/repeat.png";

const Player = () => {
  return (
    <div className="row h-100">
      <div className="col-lg-10 offset-lg-2">
        <div className="row h-100 flex-column justify-content-center align-items-center">
          <div className="col-6 col-md-4 playerControls">
            <div className="d-flex">
              <Anchor href="#">
                <img src={Shuffle} alt="shuffle" />
              </Anchor>
              <Anchor href="#">
                <img src={Prev} alt="prev" />
              </Anchor>
              <Anchor href="#">
                <img src={Play} alt="play" />
              </Anchor>
              <Anchor href="#">
                <img src={Next} alt="next" />
              </Anchor>
              <Anchor href="#">
                <img src={Repeat} alt="repeat" />
              </Anchor>
            </div>
            <div className="progress mt-3">
              <div role="progressbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Player;
