import styled, { css } from "styled-components";
import Select from "react-select";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

export const Title = styled.span`
  color: rgb(40, 42, 55);
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: GilroyBold, sans-serif;
`;

export const Form = styled.div`
  padding: 64px 78px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex: none;
  gap: 30px;
  box-sizing: border-box;
`;

export const InputGrp = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  box-sizing: border-box;
`;

export const Label = styled.span`
  color: rgb(40, 42, 55);
  text-overflow: ellipsis;
  font-size: 16px;
  font-family: GilroyRegular, sans-serif;
`;

export const Input = styled.input`
  padding: 12px 12px;
  width: 100%;
  font-family: GilroyRegular, sans-serif;
  font-size: 16px;
  border: solid 1px rgba(115, 112, 113, 0.37);
  border-radius: 15px;
  display: flex;
  align-items: center;
`;

export const BranchSelect = styled.div`
  width: 802px;
  height: 69px;
  border: solid 1px rgba(115, 112, 113, 0.37);
  border-radius: 15px;
`;

export const PrimaryBtn = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: rgb(236, 232, 86);
  box-sizing: border-box;
  padding: 16px 60px;
  color: rgb(40, 42, 55);
  border: none;
  text-overflow: ellipsis;
  font-size: 20px;
  font-family: GilroyBold, sans-serif;
  cursor: pointer;
  ${(props) =>
    props.skelaton &&
    css`
      background: #ffffff;
      border: 1px solid #939baf;
      border-radius: 15px;
      font-family: GilroyMedium;
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: rgb(228, 228, 228);
      color: rgba(115, 112, 113, 0.37);
      cursor: not-allowed;
    `}
`;

export const DeleteBtn = styled.span`
  font-size: 20px;
  border: none;
  background-color: transparent;
  font-family: GilroyBold, sans-serif;
  color: #ff3a33;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* padding: 1rem; */
  cursor: pointer;
`;
export const SSelect = styled(Select)`
  /* width: 100%; */
  font-family: GilroyRegular, sans-serif;
    /* color: black; */
  &.select-filter {
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
      `}}
    /* width: 100%; */
    .filter-opt__control {
      border-radius: 15px;
      padding: 8px 1rem;
      font-size: 14px;
      /* width: 100%; */
      /* color: #939baf; */
      border: none;
      min-width: 298px;
      border: solid 1px rgba(115, 112, 113, 0.37);
      border-radius: 15px;
    }
    .filter-opt__menu {
      /* padding: 8px 0.2rem; */
      font-size: 18px;
      margin-top: 10px;
    }
  
`;

export const SPhoneInput = styled(PhoneInput)`
  /* background-color: red;   */
  padding: 12px 12px;
  width: 100%;
  font-family: GilroyRegular, sans-serif;
  font-size: 16px;
  border: solid 1px rgba(115, 112, 113, 0.37);
  border-radius: 15px;

  .PhoneInput {
    /* This is done to stretch the contents of this component. */
    display: flex;
    align-items: center;
    /* justify-content: center; */
  }

  .PhoneInputInput {
    border: none;
    flex: 1;
    padding: 12px 12px;
    min-width: 0;
    font-family: GilroyRegular, sans-serif;
  }
`;

export const NewBtn = styled.button`
  font-family: GilroySemiBold;
  font-size: 18px;
  color: #0d99ff;
  cursor: pointer;
  background: none;
  border: none;
  height: 18px;
  min-width: 240px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 176px;
  border: solid 1px rgba(115, 112, 113, 0.37);
  border-radius: 15px;
  padding: 16px;
  font-family: GilroyRegular, sans-serif;
`;

export const HelperText = styled(Link)`
  font-family: "GilroySemiBold";
  font-size: 22px;
  line-height: 28px;
  text-decoration: none;
  color: #0d99ff;
`;
