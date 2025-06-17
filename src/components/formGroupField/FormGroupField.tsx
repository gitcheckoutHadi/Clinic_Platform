import React from 'react'
import { FormGroup, InputStyle, LabelStyle } from './FormGroupField.style';
import TextElement from '../../elements/textElement/TextElement';

interface FormGroupFieldProps {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FormGroupField: React.FC<FormGroupFieldProps> = ({ label, placeholder, onChange, type = "text", onBlur }) => (
    <FormGroup>
        <LabelStyle>
            <TextElement tag="p" text={label} fontSize="0.75rem" fontFamily="Primary Font" />
        </LabelStyle>
        <InputStyle type={type} placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
    </FormGroup>
);

export default FormGroupField