import React from "react";
import styled from "styled-components";
import {
  MediumTypography,
  Typography,
} from "../../elements/textElement/fonts/Fonts";

interface TitleTextInfoInterface {
  title: string;
  text: string;
}
const TitleTextInfoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  flex: 1;
  min-width: 8rem;
`;
const TitleTextInfo = ({ title, text }: TitleTextInfoInterface) => {
  return (
    <TitleTextInfoMainContainer>
      <MediumTypography text={title} color="#A6A6A6" fontSize="0.875rem" />
      <Typography text={text} fontSize="0.875rem" fontWeight="700" />
    </TitleTextInfoMainContainer>
  );
};

export default TitleTextInfo;
