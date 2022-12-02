import { DndContext, DragOverlay } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable";
import { useState } from "react";
import { useAllSensors } from "../hooks/useAllSensors";
import {
  handleDragCancel,
  handleDragEnd,
  handleDragStart,
} from "../utils/dragHandlers";
import FileComponent from "./FileComponent";
import Item from "./Item";

interface FilesListProps {
  files: File[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

const FilesList: React.FC<FilesListProps> = ({ files, setFiles }) => {
  const [activeFile, setActiveFile] = useState<File | null>(null);
  const sensors = useAllSensors();

  return (
    <DndContext
      sensors={sensors}
      onDragStart={(e) => handleDragStart(e, files, setActiveFile)}
      onDragCancel={() => handleDragCancel(setActiveFile)}
      onDragEnd={(e) => handleDragEnd(e, setActiveFile, files, setFiles)}
    >
      <SortableContext
        strategy={rectSortingStrategy}
        items={files.map((file) => file.name)}
      >
        <div className=" file-list">
          {files.map((file, id) => (
            <FileComponent file={file} id={id} key={file.name} />
          ))}
        </div>
      </SortableContext>
      <DragOverlay>
        {activeFile ? <Item file={activeFile} dragOverlay /> : null}
      </DragOverlay>
    </DndContext>
  );
};

export default FilesList;
