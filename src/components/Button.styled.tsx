import styled, { css } from "styled-components";

type StyledBtnPropsType = {
  color?: string;
  fontSize?: string;
  btnType : "primary" | "outlined";
  active?: boolean
}

export const StyledBtn = styled.button<StyledBtnPropsType>`
  border-radius: 10px;
  font-size: ${(props) => props.fontSize || "2rem"};
  font-weight: bold;
  border: none;
  padding: 10px;

  ${(props) =>
    props.btnType === 'outlined' &&
    css<StyledBtnPropsType>`
      border: 2px solid ${(props) => props.color || "#e005a6"};
      color: ${(props) => props.color || "#e005a6"};
      background-color: transparent;

      &:hover {
        border-color: #291ba2;
        color: #291ba2;
        background-color: transparent;
      }
    `}

  ${(props) =>
    props.btnType === 'primary' &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#e005a6"};
      color: #fefafd;

      &:hover {
        background-color: #291ba2;
      }
    `}

    ${(props) =>
    props.active &&
    css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(40, 36, 68, 0.583);
    `}
`;
