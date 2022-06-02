import { faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./file-explorer.scss";

function File(props) {
  const index = props.index || 1;

  let resolved = useResolvedPath(props.href);
  let match = useMatch({ path: resolved.pathname, end: true });

  const matchedStyle = match ? { backgroundColor: "#40394a" } : {};

  const openFile = () => {
    if (!props.files.find((x) => x.name === props.name))
      props.setFiles([...props.files, { href: props.href, name: props.name }]);
  };

  return (
    <Link
      className="link d-flex align-items-center"
      style={{ paddingLeft: index * 24, ...matchedStyle }}
      to={props.href}
      onClick={openFile}
    >
      <FontAwesomeIcon icon={faReact} size="xs" />
      <span className="mx-2">{props.name}</span>
    </Link>
  );
}

export default File;
