import {
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import ActionCircle from "./action-circle";
import LinkIcon from "./link-icon";
import "./header.scss";

function Actions() {
  return (
    <>
      <ActionCircle color={"#ff5f56"} />
      <ActionCircle color={"#ffbd2e"} />
      <ActionCircle color={"#27c93f"} />
    </>
  );
}

function Header() {
  return (
    <Row className="header">
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
        <LinkIcon icon={faEnvelope} href="mailto:test@gmail.com" />
        <LinkIcon
          href="https://www.linkedin.com/in/conner-shannon/"
          icon={faLinkedin}
        />
        <LinkIcon icon={faStackOverflow} />
      </Col>
    </Row>
  );
}

export default Header;
