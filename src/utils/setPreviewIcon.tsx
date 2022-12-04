import { RxFile } from "react-icons/rx";

export const setPreviewIcon = (
  file: File,
  setPreview: React.Dispatch<any>,
  objectURL: string
) => {
  const preview =
    file.type.split("/")[1] !== "jpeg" && file.type.split("/")[1] !== "png" ? (
      <div className="h-5/6">
        <RxFile className="h-full w-auto" />
      </div>
    ) : (
      <img src={objectURL} alt="" className=" w-5/6 h-auto mx-auto " />
    );
  setPreview(preview);
};
