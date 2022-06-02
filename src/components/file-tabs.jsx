import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function FileTab(props) {
  let resolved = useResolvedPath(props.file.href);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="d-flex" style={{ backgroundColor: "#262335" }}>
      <Link
        style={{ textDecoration: "none" }}
        to={props.file.href}
        key={props.file.name}
        className="px-2 py-1 d-flex align-items-center"
      >
        <span className="pe-2" style={{ color: match ? "white" : "#495fba" }}>
          {props.file.name}
        </span>
      </Link>
      <button
        className="btn"
        onClick={(_) => props.removeFile(props.file.name)}
      >
        <FontAwesomeIcon icon={faClose} color="white" />
      </button>
    </div>
  );
}

function FileTabs(props) {
  return (
    <div
      className="d-flex flex-row"
      style={{ backgroundColor: "#241b2f", overflow: "hidden" }}
    >
      {props.files.map((file) => (
        <FileTab key={file.name} file={file} removeFile={props.removeFile} />
      ))}
    </div>
  );
}

export default FileTabs;
