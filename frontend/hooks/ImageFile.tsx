import { ChangeEventHandler, useState } from "react";

const useImageFile = () => {
  const [image, setImage] = useState("");

  const handleChangeFile: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { files } = e.target;
    files && setImage(window.URL.createObjectURL(files[0]));
  };
  return { image, setImage, handleChangeFile };
};

export default useImageFile;
