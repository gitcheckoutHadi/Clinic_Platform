import React, { useEffect } from "react";
import {
  ClosePopUp,
  PopUpPaBoxContent,
  PopUpPaBoxFooter,
  PopUpPaBoxHeader,
  PopUpPaBoxHeaderTitle,
  PopUpPageBox,
  PopUpPageContainerAbs,
  PopUpPaSaveBtn,
} from "./PopUp.style";
import {
  MediumTypography,
  Typography,
} from "../../../elements/textElement/fonts/Fonts";
import { PointerContainer } from "../../../globalStyles";
import { SvgCloseIcon } from "../../../elements/Icons";
import useClickOutside from "../../../hooks/useClickOutside";

interface PopUpInterface {
  showPopUp: boolean;
  setShowPopUp: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
  submit?: () => void;
  closeClick?: () => void;
  minheight?: string;
  minWidth?: string;
  contentwidth?: string;
  btnWidth?: string;
  btnheight?: string;
  ShowActions?: boolean;
}

const PopUp = ({
  btnheight,
  btnWidth,
  minWidth,
  contentwidth,
  minheight,
  title,
  showPopUp,
  setShowPopUp,
  submit,
  Icon,
  content,
  closeClick,
  ShowActions,
}: PopUpInterface) => {
  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on unmount or when popup is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopUp]);

  const handleClose = () => {
    if (closeClick) {
      closeClick();
    } else {
      setShowPopUp(false);
    }
  };

  const handleSubmit = () => {
    if (submit) submit(); // Call submit function if defined
    handleClose(); // Close popup after submission
  };

  return (
    <>
      {showPopUp && (
        <PopUpPageContainerAbs>
          <PopUpPageBox
            minwidth={minWidth}
            width={contentwidth}
            // ref={containerRef}
          >
            <PopUpPaBoxHeader>
              <PopUpPaBoxHeaderTitle>
                {Icon && <Icon />}
                <Typography
                  text={title}
                  fontSize="1.125rem"
                  fontWeight="700"
                  lineHeight="1.75rem"
                />
              </PopUpPaBoxHeaderTitle>
              <ClosePopUp onClick={handleClose}>
                <SvgCloseIcon className="IconClose" />
              </ClosePopUp>
            </PopUpPaBoxHeader>
            <PopUpPaBoxContent minheight={minheight}>
              {content}
            </PopUpPaBoxContent>
            {ShowActions && (
              <PopUpPaBoxFooter>
                <PopUpPaSaveBtn
                  onClick={handleSubmit}
                  btnwidth={btnWidth}
                  btnheight={btnheight}
                >
                  <MediumTypography
                    text="Save"
                    fontWeight="500"
                    lineHeight="1.25rem"
                    letter_spacing="0.00625rem"
                    color="inherit"
                    cursor="pointer"
                  />
                </PopUpPaSaveBtn>
              </PopUpPaBoxFooter>
            )}
          </PopUpPageBox>
        </PopUpPageContainerAbs>
      )}
    </>
  );
};

export default PopUp;
