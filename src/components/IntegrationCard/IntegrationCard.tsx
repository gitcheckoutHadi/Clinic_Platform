import React from "react";
import {
  ColumnTextIntegrationCardContainer,
  IconCirclesIntegrationCardContainer,
  MainIntegrationCardContainer,
  RowTextIntegrationCardContainer,
} from "./IntegrationCardStyle";
import { MediumTypography } from "../../elements/textElement/fonts/Fonts";

interface IntegrationCardInterface {
  data: {
    title: string;
    value: string | number;
    totalValue?: number | string;
    IconBgColor: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  };
}
const IntegrationCard = ({ data }: IntegrationCardInterface) => {
  return (
    <MainIntegrationCardContainer>
      <ColumnTextIntegrationCardContainer>
        <MediumTypography text={data.title} color="#A6A6A6" fontWeight="400" />
        <RowTextIntegrationCardContainer>
          <MediumTypography
            text={data.value}
            fontSize=" 2.25rem"
            color="#000"
            fontWeight="700"
            lineHeight="120%"
          />
          <div style={{ marginBottom: "0.41rem" }}>
            {data.totalValue && (
              <MediumTypography
                text={`/ ${data.totalValue}`}
                color="#000"
                fontWeight="700"
                lineHeight="120%"
              />
            )}
          </div>
        </RowTextIntegrationCardContainer>
      </ColumnTextIntegrationCardContainer>
      <IconCirclesIntegrationCardContainer bgcolor={data.IconBgColor}>
        <data.Icon />
      </IconCirclesIntegrationCardContainer>
    </MainIntegrationCardContainer>
  );
};

export default IntegrationCard;
