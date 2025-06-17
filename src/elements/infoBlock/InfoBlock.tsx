import React from 'react'
import { InfoBlockStyle, InfoDetail, InfoLabel } from './InfoBlock.style'
import { Typography } from '../textElement/fonts/Fonts';
interface InfoBlockInterface {
    data: {
        label: string;
        detail: string;
    }
}
const InfoBlock = ({ data }: InfoBlockInterface) => {
    return (
        <InfoBlockStyle>
            <Typography text={data.label} opacity='0.5' />
            <Typography text={data.detail} fontSize='0.875rem' />
        </InfoBlockStyle>

    )
}

export default InfoBlock