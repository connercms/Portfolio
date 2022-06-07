import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LinkIcon(props) {
  return (
    <a href={props.href}>
      <FontAwesomeIcon
        icon={props.icon}
        size="lg"
        className="px-2 text-white"
      />
    </a>
  );
}

export default LinkIcon;
