import {
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";

function Circle(props) {
  const size = 15;
  return (
    <div
      style={{
        display: "inline-block",
        height: size,
        maxHeight: size,
        width: size,
        maxWidth: size,
        borderRadius: size / 2,
        backgroundColor: props.color,
      }}
      className="m-1 m-sm-2"
    ></div>
  );
}

function Actions() {
  return (
    <>
      <Circle color={"#ff5f56"} />
      <Circle color={"#ffbd2e"} />
      <Circle color={"#27c93f"} />
    </>
  );
}

function Header() {
  return (
    <Row
      className="align-items-center px-2 py-1"
      style={{ backgroundColor: "#241b2f" }}
    >
      <Col xs={{ span: 6, order: 1 }} sm={{ span: 4, order: 1 }}>
        <Actions />
      </Col>
      <Col
        xs={{ span: 12, order: 3 }}
        sm={{ span: 4, order: 2 }}
        className="d-flex justify-content-center"
      >
        <span className="text-center text-white">
          Conner Shannon - Portfolio
        </span>
      </Col>
      <Col
        xs={{ span: 6, order: 2 }}
        sm={{ span: 4, order: 3 }}
        className="d-flex justify-content-end"
      >
        <FontAwesomeIcon
          icon={faEnvelope}
          size="lg"
          className="px-1 text-white"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          size="lg"
          className="px-1 text-white"
        />
        <FontAwesomeIcon
          icon={faStackOverflow}
          size="lg"
          className="px-1 text-white"
        />
      </Col>
    </Row>
  );
}

export default Header;
