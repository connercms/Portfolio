import { Col, Row, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import './app.css'
import FileExplorer from '../components/file-explorer';

function App() {
  return (
    <>
      <Container className="container px-0" fluid>
        <Header />
        <Row className="g-0">
          <Col sm={3} className="p-1" style={{ backgroundColor: '#241b2f' }}>
            <FileExplorer />
          </Col>
          <Col sm={9} className="p-1">
            <Outlet />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>

  );
}

export default App;
