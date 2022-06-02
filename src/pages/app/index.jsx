import { Col, Row, Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import FileExplorer from "../../components/file-explorer";
import React from "react";
import FileTabs from "../../components/file-tabs";
import "./app.scss";

function App() {
  const navigate = useNavigate();
  const [files, setFiles] = React.useState([{ href: "/", name: "README.md" }]);
  const removeFile = (name) => {
    const newFileState = files.filter((file) => file.name !== name);
    setFiles([...newFileState]);

    if (newFileState.length > 0)
      navigate(newFileState[0].href, { replace: true });
    else navigate("/");
  };

  return (
    <Container className="main" fluid>
      <Header />
      <Row className="g-0 main-row">
        <Col sm={3} className="fe-col">
          <FileExplorer files={files} setFiles={setFiles} />
        </Col>
        <Col className="editor-col">
          <FileTabs files={files} removeFile={removeFile} />
          <div className="outlet-container">
            <Outlet context={[files, setFiles]} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
