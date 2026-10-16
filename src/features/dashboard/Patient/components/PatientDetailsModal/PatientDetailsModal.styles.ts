
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 520px;
  max-height: 90vh;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const Title = styled.h2`
  margin: 0;
  color: #222222;
  font-size: 20px;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 28px;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: #222222;
  font-size: 13px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #ffffff;
  color: #222222;
  font-family: inherit;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #b48263;
  }

  &:disabled {
    background: #f8f6f3;
    color: #6b7280;
    cursor: default;
  }
`;

export const Info = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
  line-height: 1.6;

  strong {
    color: #222222;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  padding: 20px 24px;
  border-top: 1px solid #e5e7eb;
  flex-wrap: wrap;
`;

const BaseButton = styled.button`
  padding: 11px 18px;
  border-radius: 8px;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const EditButton = styled(BaseButton)`
  background: #b48263;
  border: 1px solid #b48263;
  color: #ffffff;
`;

export const SaveButton = styled(EditButton)``;

export const CancelButton = styled(BaseButton)`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #222222;
`;

export const DeleteButton = styled(BaseButton)`
  background: #ffffff;
  border: 1px solid #dc2626;
  color: #dc2626;
`;
