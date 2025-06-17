import React, { useEffect } from "react";
import {
  DeletePopUpContainer,
  DeletePopUpMainContainer,
  DeletePopUpRowButtons,
} from "./DeletePopUp.style";
import { Typography } from "../../../elements/textElement/fonts/Fonts";
import Button from "../../../elements/Buttons/Button/Button";
import CancelButton from "../../../elements/Buttons/Button/CancelButton/CancelButton";
import SaveButton from "../../../elements/Buttons/SaveButton/SaveButton";
import useClickOutside from "../../../hooks/useClickOutside";

interface DeletePopUpInterface {
  title?: string;
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  DeleteClick?: () => void;
}

const DeletePopUp = ({
  title,
  showPopUp,
  setShowPopUp,
  DeleteClick,
}: DeletePopUpInterface) => {
  // Effect to lock/unlock scrolling based on `showPopUp`
  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup to ensure scrolling is restored when the component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopUp]);

  return (
    <>
      {showPopUp && (
        <DeletePopUpMainContainer>
          <DeletePopUpContainer>
            <Typography
              text={title || "Delete"}
              fontSize="1.125rem"
              lineHeight="1.75rem"
              fontWeight="700"
            />
            <DeletePopUpRowButtons>
              <CancelButton
                onClick={() => {
                  setShowPopUp(!showPopUp);
                }}
              />
              <SaveButton text="Delete" onClick={DeleteClick} />
            </DeletePopUpRowButtons>
          </DeletePopUpContainer>
        </DeletePopUpMainContainer>
      )}
    </>
  );
};

export default DeletePopUp;
