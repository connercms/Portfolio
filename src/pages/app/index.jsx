import { Col, Row, Container } from "react-bootstrap";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../../components/header";
import FileExplorer from "../../components/file-explorer";
import React, { useEffect, useRef } from "react";
import FileTabs from "../../components/file-tabs";
import "./app.scss";

function App() {
  const navigate = useNavigate();
  const [files, setFiles] = React.useState([]);

  const removeFile = (name) => {
    const indexOfFile = files.findIndex((x) => x.name == name);

    const newFileState = files.filter((file) => file.name !== name);
    setFiles([...newFileState]);

    // TODO: IMPORTANT if currently being viewed file not file being closed, make sure this is the file that remains open
    // instead of switching to a new file
    if (newFileState.length > 0)
      navigate(newFileState[0].href, { replace: true });
    else navigate("/");
  };

  // On load only
  useEffect(() => {
    const storedFiles = JSON.parse(sessionStorage.getItem("files"));
    if (storedFiles) setFiles(storedFiles);
  }, []);

  // On files change only
  // This will be called twice: On initial render (in which it will just return out), and
  // after the parsed files are stored
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }

    sessionStorage.setItem("files", JSON.stringify(files));
  }, [files]);

  return (
    <Container className="main" fluid>
      <Header />
      <Row className="g-0 main-row">
        <Col sm={3} className="fe-col">
          <FileExplorer files={files} setFiles={setFiles} />
        </Col>
        <Col sm={9} className="editor-col">
          <FileTabs files={files} removeFile={removeFile} />
          <div className="outlet-container text-white">
            <Outlet context={[files, setFiles]} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
