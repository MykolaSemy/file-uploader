import { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import UploadForm from "./components/UploadForm";

const App = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleCloseModal = () => setIsModalActive(false);
  const handleOpenModal = () => setIsModalActive(true);

  const handleInputFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files: any = event.target.files;
    if (!files?.length) return;
    if (files?.length < 2 || files?.length > 5) {
      return handleOpenModal();
    } else {
      setSelectedFiles([...files]);
    }
  };

  return (
    <div className="app">
      <h1 className="title my-8">Test</h1>
      <UploadForm
        setSelectedFiles={setSelectedFiles}
        selectedFiles={selectedFiles}
        buttonStyle={" green-button "}
        handleInputFiles={handleInputFiles}
      />
      <Modal
        buttonStyle={" blue-button "}
        onCloseModal={handleCloseModal}
        isOpen={isModalActive}
      />
      {!!selectedFiles.length && (
        <Button
          title={"Clear Files"}
          handleClick={() => setSelectedFiles([])}
          style={" green-button "}
        />
      )}
    </div>
  );
};

export default App;
