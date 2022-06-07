import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./file-explorer.scss";

function FileIcon(name) {
  var rgx = /\.[0-9a-z]+$/i;
  var matches = rgx.exec(name);

  if (!matches.length) return null;

  switch (matches[0]) {
    case ".jsx":
      return faReact;
    case ".md":
      return faInfoCircle;
    default:
      return null;
  }
}

function File(props) {
  const index = props.index || 1;

  let resolved = useResolvedPath(props.href);
  let match = useMatch({ path: resolved.pathname, end: true });

  const matchedStyle = match ? { backgroundColor: "#40394a" } : {};

  const openFile = () => {
    if (!props.files.find((x) => x.name === props.name))
      props.setFiles([{ href: props.href, name: props.name }, ...props.files]);
  };

  FileIcon(props.name);
  return (
    <Link
      className="link d-flex align-items-center"
      style={{
        paddingLeft: index * 16,
        ...matchedStyle,
      }}
      to={props.href}
      onClick={openFile}
    >
      <FontAwesomeIcon icon={FileIcon(props.name)} size="xs" />
      <span className="mx-2">{props.name}</span>
    </Link>
  );
}

export default File;
