import { faChevronDown, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "./file";
import "./file-explorer.scss";
import Folder from "./folder";
const items = require("./files.json");

function FileExplorer(props) {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center p-2">
        <span className="text-secondary">
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xs"
            className="me-2"
            color="#241b2f"
          />
          EXPLORER
        </span>

        <FontAwesomeIcon
          icon={faEllipsisH}
          color="gray"
          size="xs"
          className="me-2"
        />
      </div>
      {/* <span className="d-block text-white px-2">
        <FontAwesomeIcon icon={faChevronDown} size="xs" className="me-2" />
        <span>PORTFOLIO</span>
      </span> */}
      {items.map((item) =>
        item.isFolder ? (
          <Folder
            key={item.name}
            name={item.name}
            items={item.items}
            files={props.files}
            setFiles={props.setFiles}
          />
        ) : (
          <File
            key={item.name}
            name={item.name}
            href={item.href}
            files={props.files}
            setFiles={props.setFiles}
          />
        )
      )}
    </>
  );
}

export default FileExplorer;
