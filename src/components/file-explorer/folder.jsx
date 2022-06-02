import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import File from "./file";
import "./file-explorer.scss";

function Folder(props) {
  const index = props.index || 1;

  return (
    <div>
      <div className="folder">
        <span style={{ color: "#4fe4b8", marginLeft: index * 16 }}>
          <FontAwesomeIcon icon={faChevronDown} size="xs" /> {props.name}
        </span>
      </div>
      {props.items.map((item) =>
        item.isFolder ? (
          <Folder
            key={item.name}
            index={index + 1}
            name={item.name}
            items={item.items}
            files={props.files}
            setFiles={props.setFiles}
          />
        ) : (
          <File
            key={item.name}
            index={index}
            name={item.name}
            href={item.href}
            files={props.files}
            setFiles={props.setFiles}
          />
        )
      )}
    </div>
  );
}

export default Folder;
