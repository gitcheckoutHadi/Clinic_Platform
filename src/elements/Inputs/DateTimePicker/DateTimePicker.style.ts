import styled from "styled-components";
interface Styles {
  errorValue?: string;
  disabled?: boolean;
}
export const MainDatePickerContainer = styled.div<Styles>`
  display: flex;
  flex: 1;
  width: 100%; /* Ensures the container takes full width */
  min-width: 30rem; /* Minimum width for the container */
  position: relative;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  &:focus-within {
    border-color: ${(props) =>
      props.disabled ? "#ccc" : "#231d46"} !important;
    box-shadow: 0 0 4px #231d4670;
  }

  .custom-datepicker-input {
    border: none !important;
    margin-left: 0.4rem;
  }
  .react-datepicker__input-container {
    display: flex !important;
    width: 100% !important; /* Ensure the input container takes full width */
    background: transparent; /* Optional for debugging */
    height: 2.75rem !important;
    min-width: 30rem;
    border-right: none !important;
  }

  .custom-datepicker-input {
    width: 100%; /* Full width of the parent container */

    font-size: 14px;

    background: white;
    box-sizing: border-box; /* Ensure padding doesn't affect the width */

    &:dir(ltr) {
      padding: 0.5rem 0.5rem;
    }
    &:dir(rtl) {
      padding: 0.5rem 0.85rem;
    }
  }

  .custom-datepicker-input:focus {
    outline: none;
  }
  .react-datepicker__header {
    background: #231d46 !important;
  }
  .react-datepicker__current-month {
    color: white !important;
  }
  .react-datepicker__day-names {
  }
  .react-datepicker__day-name {
    color: white !important;
  }
  .react-datepicker__navigation-icon
    .react-datepicker__navigation-icon--previous {
    color: white !important;
    fill: white !important;
    stroke: white !important;
  }
  .react-datepicker__day
    /* .react-datepicker__day--016 */
    .react-datepicker__day--selected {
    background-color: #231d46 !important;
    border-radius: 50%;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
  }
  .react-datepicker__triangle {
    display: none;
  }
`;

export const TitleDatePickerContainer = styled.div`
  position: absolute;
  background: #fff;
  z-index: 3;
  padding: 0;
  top: -0.5rem;

  &:dir(ltr) {
    left: 0.94rem;
  }
  &:dir(rtl) {
    right: 0.94rem;
  }
`;
