import React from 'react'
import { ButtonStyled } from './StyledButton.style'
import TextElement from '../textElement/TextElement';
import { useRecoilValue } from 'recoil';
import { MainColorSelector } from '../../recoil/ThemeSelectors';

interface StyledButtonProps {
    text: string;
    handleClick?: () => void;
}

function StyledButton({ text, handleClick }: StyledButtonProps) {
    const { secondaryColor } = useRecoilValue(MainColorSelector);

    return (
        <ButtonStyled onClick={handleClick} bgcolor={secondaryColor}>
            <TextElement text={text} fontSize='0.875rem' fontFamily="Primary Font" tag={'p'} color='#fff' cursor="pointer" />
        </ButtonStyled>
    )
}

export default StyledButton