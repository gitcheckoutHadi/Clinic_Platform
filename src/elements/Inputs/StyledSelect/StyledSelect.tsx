import React, { useRef, useState } from "react";
import {
  FileInputButtonIcon,
  FileInputButton,
  HiddenInput,
  FlexDiv,
} from "./StyledSelect.style";
import { FileInputProps } from "./StyledSelectInterface";
import { SvgCloseIcon } from "../../Icons";
import { MediumTypography } from "../../textElement/fonts/Fonts";

const StyledSelect = ({
  onChange,
  title,
  acceptedFileTypes,
  icon: IconComponent,
  disabled,
  StopHoverAction = false,
  ShowBorder = true,
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const selectedFile = files && files[0];

    if (selectedFile) {
      const fileExtension = selectedFile.name.split(".").pop();
      if (!acceptedFileTypes.includes(`.${fileExtension}`)) {
        setError("Invalid file type. Please select a valid file.");
        setSelectedFiles(null);
        onChange(null);
        return;
      }

      setSelectedFiles(files);
      onChange(files);
      setError(null);
    } else {
      // If no file is selected, clear the selected files and reset the error.
      setSelectedFiles(null);
      setError(null);
      if (inputRef.current) {
        inputRef.current.value = ""; // Clear the input field value
      }
    }
  };

  const handleRemoveClick = () => {
    setSelectedFiles(null);
    if (inputRef.current) {
      inputRef.current.value = ""; // Clear the input field value
    }
  };

  return (
    <div>
      <FlexDiv>
        <FileInputButton
          stophoveraction={StopHoverAction.toString()}
          showborder={ShowBorder.toString()}
        >
          <>
            <FileInputButtonIcon>
              {IconComponent && <IconComponent />}
            </FileInputButtonIcon>
            <div
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <MediumTypography
                text={selectedFiles ? selectedFiles[0]?.name : title}
                fontSize="0.875rem"
                fontWeight="700"
                whiteSpace="nowap"
              />
            </div>
          </>
          <HiddenInput
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            accept={acceptedFileTypes}
            disabled={disabled}
          />
        </FileInputButton>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {selectedFiles && (
          <SvgCloseIcon
            color="#5DD3B3"
            onClick={handleRemoveClick}
            style={{ cursor: "pointer" }}
          />
        )}
      </FlexDiv>
    </div>
  );
};

export default StyledSelect;
