import React, { useEffect, useState } from "react";
import {
  LogoAndNameProfileMain,
  MainProfileMainClickContainer,
} from "./ProfileMainClickStyle";
import CircularImage from "../../../../elements/circularImage/CircularImage";
import { FirstIVF } from "../../../../constants/Pics/Pics";
import ColoredButton from "../../../../elements/Buttons/ColoredButton/ColoredButton";
import StyledSelect from "../../../../elements/Inputs/StyledSelect/StyledSelect";
import DeletePopUp from "../../../../components/PupUps/DeletePopUp/DeletePopUp";
interface ProfileMainClickInterface {
  selectedFile: FileList | null;
  setSelectedFile: React.Dispatch<React.SetStateAction<FileList | null>>;
}
const ProfileMainClick = ({
  selectedFile,
  setSelectedFile,
}: ProfileMainClickInterface) => {
  const [ShowDelete, setShowDelete] = useState(false);

  const handleFileChange = (files: FileList | null) => {
    setSelectedFile(files);
    if (files) {
      console.log("Selected file:", files[0].name);
    } else {
      console.log("No file selected");
    }
  };
  useEffect(() => {
    console.log("selectedFile is :::", selectedFile);
  }, [selectedFile]);

  return (
    <>
      <DeletePopUp
        showPopUp={ShowDelete}
        setShowPopUp={setShowDelete}
        title="Are you Sure You want to delete Clinic profile"
        DeleteClick={() => setSelectedFile(null)}
      />
      <MainProfileMainClickContainer>
        <LogoAndNameProfileMain>
          <CircularImage src={FirstIVF} size="2.5rem" />
        </LogoAndNameProfileMain>
        <LogoAndNameProfileMain>
          <ColoredButton
            text="Delete picture"
            onClick={() => setShowDelete(!ShowDelete)}
            borderRadius="6.25rem"
          />
          <StyledSelect
            onChange={handleFileChange}
            title="Upload new picture"
            acceptedFileTypes=".png,.jpg,.jpeg,.pdf"
          />

          {/* {selectedFile && <p>Selected File: {selectedFile[0]?.name}</p>} */}
        </LogoAndNameProfileMain>
      </MainProfileMainClickContainer>
    </>
  );
};

export default ProfileMainClick;
