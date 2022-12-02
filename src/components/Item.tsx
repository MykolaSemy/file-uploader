import { useEffect, useState } from "react";
import { setPreviewIcon } from "../utils/setPreviewIcon";

interface ItemProps {
  file: File;
  style?: string;
  dragOverlay?: boolean;
}

const Item: React.FC<ItemProps> = ({ file, dragOverlay, style }) => {
  const [preview, setPreview] = useState<any>();

  useEffect(() => {
    const objectURL = URL.createObjectURL(file);
    setPreviewIcon(file, setPreview, objectURL);
    return () => URL.revokeObjectURL(objectURL);
  }, [file]);

  return (
    <div
      className={`${
        dragOverlay ? "cursor-grabbing " : "grab "
      }" item "${style}`}
    >
      {preview}
      <p className="overflow-ellipsis w-full whitespace-nowrap overflow-hidden">
        {file.name}
      </p>
    </div>
  );
};

export default Item;
