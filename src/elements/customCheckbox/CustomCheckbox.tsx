import React from 'react'
import { CustomCheckboxContainer, HiddenCheckbox, StyledCheckbox } from './CustomCheckbox.style';
interface CustomCheckboxProps {
    checked: boolean;
    onChange: () => void;
}
const CustomCheckbox = ({ checked, onChange }: CustomCheckboxProps) => {
    return (
        <CustomCheckboxContainer>
            <HiddenCheckbox checked={checked} onChange={onChange} />
            <StyledCheckbox checked={checked} onClick={onChange} >
                <svg viewBox="0 0 24 24">
                    <path d="M9 16.2l-3.5-3.5 1.4-1.4 2.1 2.1 5.2-5.2 1.4 1.4-6.6 6.6z" />
                </svg>
            </StyledCheckbox>
        </CustomCheckboxContainer>
    )
}

export default CustomCheckbox
