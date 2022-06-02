import { Container } from "react-bootstrap";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import StackedIcon from "./stacked-icon";

function Footer() {
  return (
    <Container>
      <h1>Footer</h1>
      <StackedIcon icon={faLinkedinIn} />
    </Container>
  );
}

export default Footer;
