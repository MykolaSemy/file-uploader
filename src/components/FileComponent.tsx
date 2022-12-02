import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Item from "./Item";

interface FileComponentProps {
  file: File;
  id: number;
}

const FileComponent: React.FC<FileComponentProps> = ({ file }) => {
  const { name: id } = file;
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      className={`" flex justify-end items-center h-full "${
        isDragging ? " shadow-inner bg-green rounded bg-opacity-10 " : ""
      }`}
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
    >
      <Item file={file} style={isDragging ? " opacity-0 " : ""} />
    </div>
  );
};

export default FileComponent;
