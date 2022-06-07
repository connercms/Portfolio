import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./file-tabs.scss";

function FileTab(props) {
  let resolved = useResolvedPath(props.file.href);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className={`ft ${match ? "ft-active" : ""}`}>
      <Link to={props.file.href} key={props.file.name} className="ft-link">
        <span className="pe-2" style={{ color: match ? "white" : "#495fba" }}>
          {props.file.name}
        </span>
      </Link>
      <button
        className="btn ft-btn"
        onClick={(_) => props.removeFile(props.file.name)}
      >
        <FontAwesomeIcon icon={faClose} color="white" />
      </button>
    </div>
  );
}

export default FileTab;
