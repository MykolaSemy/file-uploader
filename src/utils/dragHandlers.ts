import { DragStartEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

export const handleDragStart = (
  { active }: DragStartEvent,
  files: File[],
  setActiveFile: React.Dispatch<React.SetStateAction<File | null>>
) => {
  let index = active.data.current?.sortable.index;
  setActiveFile(files[index]);
};

export const handleDragCancel = (
  setActiveFile: React.Dispatch<React.SetStateAction<File | null>>
) => setActiveFile(null);

export const handleDragEnd = (
  { active, over }: any,
  setActiveFile: React.Dispatch<React.SetStateAction<File | null>>,
  files: File[],
  setFiles: React.Dispatch<React.SetStateAction<File[]>>
) => {
  if (!over) {
    setActiveFile(null);
    return;
  }

  if (active.id !== over.id) {
    const activeIndex = active.data.current.sortable.index;
    const overIndex = over.data.current.sortable.index;
    setFiles(arrayMove(files, activeIndex, overIndex));
  }

  setActiveFile(null);
};
