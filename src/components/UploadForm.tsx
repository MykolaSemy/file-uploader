import { useRef } from "react";
import Button from "./Button";
import FilesList from "./FilesList";

interface UploadFormProps {
  selectedFiles: File[];
  setSelectedFiles: React.Dispatch<React.SetStateAction<File[]>>;
  buttonStyle: string;
  handleInputFiles: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UploadForm: React.FC<UploadFormProps> = ({
  handleInputFiles,
  selectedFiles,
  setSelectedFiles,
  buttonStyle,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isFiles = !!selectedFiles.length;
  return (
    <div
      className={`" uploadForm "${
        isFiles ? " uploadForm-dirty " : " uploadForm-empty "
      }`}
    >
      {!isFiles ? (
        <div>
          <Button
            handleClick={() => fileInputRef.current?.click()}
            title={"Add file"}
            style={buttonStyle}
            isLoading={false}
          />
          <p className="text-center description opacity-50 text-sm">
            2-5 files
          </p>
        </div>
      ) : (
        <FilesList files={selectedFiles} setFiles={setSelectedFiles} />
      )}
      <input
        multiple
        hidden
        type="file"
        ref={fileInputRef}
        onChange={handleInputFiles}
      />
    </div>
  );
};

export default UploadForm;
