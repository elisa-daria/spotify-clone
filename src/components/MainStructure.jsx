import Row from "react-bootstrap/Row";
import Anchor from "react-bootstrap/Anchor";
import SingleArtist from "./SingleArtist";

const MainStructure = () => {
  return (
    <>
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <Anchor href="#">TRENDING</Anchor>
          <Anchor href="#">PODCAST</Anchor>
          <Anchor href="#">MOODS AND GENRES</Anchor>
          <Anchor href="#">NEW RELEASES</Anchor>
          <Anchor href="#">DISCOVER</Anchor>
        </div>
      </Row>
      {/* questa row va ad abbracciare il component SingleArtist ogni volta che lo si vuole importare */}
      <Row className="mt-5">
        <SingleArtist query="big thief" genre="Indie" />
      </Row>
      <Row>
        <SingleArtist query="gflip" genre="Queer" />
      </Row>
      <Row>
        <SingleArtist query="girli" genre="Pop" />
      </Row>
    </>
  );
};
export default MainStructure;
