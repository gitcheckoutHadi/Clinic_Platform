import styled from "styled-components";

const ViewportContainer = styled.div`
  height: 100vh;
  width: auto;
  aspect-ratio: 390 / 680; /* Original SVG aspect ratio */
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const StyledSVG = styled.svg.attrs({
  viewBox: "0 0 390 680",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
})`
  height: 100%;
  width: auto;
  flex-shrink: 0;
`;

const ShapePath = styled.path.attrs({
  fillRule: "evenodd",
  clipRule: "evenodd",
  d: "M389.998 0H0V334.766V679.658H389.998V679.552C389.999 679.588 389.999 679.623 390 679.658V0C389.999 0.0331548 389.999 0.0663042 389.998 0.099448V0ZM389.998 0.099448C388.783 62.6288 340.249 105.544 277.498 110.655L213.12 115.893C201.524 116.834 189.964 118.385 178.547 120.664C170.661 122.243 162.828 124.171 155.122 126.49C73.4118 151.074 0 229.143 0 334.766C0 431.203 59.6471 511.38 140.874 539.391C164.173 547.423 188.565 551.841 213.102 554.011L278.359 559.787C340.767 565.31 388.853 617.079 389.998 679.552V0.099448Z",
})`
  fill: #6a0dad;
`;

const FullHeightShape = () => (
  <ViewportContainer>
    <StyledSVG>
      <ShapePath />
    </StyledSVG>
  </ViewportContainer>
);

export default FullHeightShape;
