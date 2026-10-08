
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  font-family: Verdana, sans-serif;
  background: #f8f6f3;
  min-height: 100%;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Header = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #222222;
  margin: 0 0 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;
`;

export const TableWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tbody tr:hover {
    background: #faf8f6;
  }
`;

export const Th = styled.th`
  text-align: left;
  padding: 18px 20px;
  background: #faf8f6;
  color: #6b7280;
  font-size: 12px;
  border-bottom: 1px solid #e5e7eb;
`;

export const Td = styled.td`
  padding: 18px 20px;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
`;

export const PatientName = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #222222;
  margin-bottom: 5px;
`;

export const SurgeryName = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

export const ViewButton = styled.button`
  background: #b48263;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #996a4e;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  font-size: 14px;
  color: #6b7280;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 780px;
  max-height: 90vh;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: Verdana, sans-serif;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  padding: 24px;
  border-bottom: 1px solid #e5e7eb;
`;

export const ModalTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 20px;
  color: #222222;
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  color: #6b7280;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 28px;
  color: #6b7280;
  cursor: pointer;
  line-height: 1;

  &:hover {
    color: #222222;
  }
`;

export const ModalContent = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;
`;

export const DetailSection = styled.section`
  margin-bottom: 28px;
`;

export const DetailTitle = styled.h3`
  font-size: 15px;
  color: #b48263;
  margin: 0 0 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e7eb;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
`;

export const DetailLabel = styled.span`
  font-size: 12px;
  color: #6b7280;
`;

export const DetailValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #222222;
  overflow-wrap: anywhere;
  white-space: pre-wrap;
`;

export const PaymentBox = styled.div<{
  $selected: boolean;
}>`
  padding: 18px;
  border: 1px solid
    ${({ $selected }) =>
      $selected ? "#b48263" : "#e5e7eb"};
  background: ${({ $selected }) =>
    $selected ? "#faf5f0" : "#ffffff"};
  border-radius: 10px;
  margin: 16px 0;
`;

export const PaymentHeading = styled.h4`
  margin: 0 0 14px;
  color: #222222;
  font-size: 14px;
`;

export const TotalBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 20px;
  margin-top: 12px;
  border-radius: 10px;
  background: #f8f6f3;
  font-size: 15px;
  color: #222222;

  strong {
    font-size: 20px;
    color: #b48263;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 18px 24px;
  border-top: 1px solid #e5e7eb;
`;

export const FooterButton = styled.button`
  background: #b48263;
  color: #ffffff;
  padding: 11px 24px;
  border: none;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
`;
export const PrintButton = styled.button`
  background: #ffffff;
  color: #b48263;
  border: 1px solid #b48263;
  border-radius: 8px;
  padding: 10px 18px;
  font-family: Verdana, sans-serif;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #faf5f0;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;