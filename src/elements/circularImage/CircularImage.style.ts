import styled from "styled-components";
interface StyleImageCircular {
  width: string;
  height: string;
  boxShadow?: boolean;
}
export const ImageCircular = styled.img<StyleImageCircular>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.boxShadow ? "0px 4px 14px 0px rgba(185, 185, 185, 0.25)" : ""};
  object-fit: cover;
  background: rgba(172, 174, 229, 0.2);
`;
