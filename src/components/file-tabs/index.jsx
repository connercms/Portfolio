import FileTab from "./file-tab";

function FileTabs(props) {
  return (
    <div className="ft-container">
      {props.files.map((file) => (
        <FileTab key={file.name} file={file} removeFile={props.removeFile} />
      ))}
    </div>
  );
}

export default FileTabs;
