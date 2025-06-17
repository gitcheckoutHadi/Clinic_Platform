import React from "react";
import SaveButton from "../../elements/Buttons/SaveButton/SaveButton";
import { useNavigate } from "react-router-dom";
import CancelButton from "../../elements/Buttons/Button/CancelButton/CancelButton";
interface FormActionsInterface {
  onSubmit?: () => void;
  onCancel?: () => void;
}
const FormActions = ({ onSubmit, onCancel }: FormActionsInterface) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      navigate(-1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "flex-end",
        gap: "0.62rem",
      }}
    >
      <CancelButton onClick={handleCancel} />
      <SaveButton onClick={onSubmit} />
    </div>
  );
};

export default FormActions;
