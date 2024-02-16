import Row from "react-bootstrap/Row";
import Anchor from "react-bootstrap/Anchor";

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
      <Row></Row>
    </>
  );
};
export default MainStructure;
