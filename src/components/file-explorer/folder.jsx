import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import File from "./file";
import "./file-explorer.scss";

function Folder(props) {
  const [closed, setClosed] = useState(false);
  const index = props.index || 1;

  const toggle = () => setClosed(!closed);

  return (
    <div>
      <div className="folder" onClick={toggle}>
        <span style={{ marginLeft: index * 16 }}>
          <FontAwesomeIcon
            icon={closed ? faChevronRight : faChevronDown}
            size="xs"
          />{" "}
          {props.name}
        </span>
      </div>
      {!closed && (
        <>
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
                index={index + 1}
                name={item.name}
                href={item.href}
                files={props.files}
                setFiles={props.setFiles}
              />
            )
          )}
        </>
      )}
    </div>
  );
}

export default Folder;
