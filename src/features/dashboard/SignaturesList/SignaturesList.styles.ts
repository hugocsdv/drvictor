"use client";

import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  padding: 32px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  width: 100%;
  overflow-x: scroll;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  margin-bottom: 24px;
`;

export const ControlsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FilterSelect = styled.select`
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const Th = styled.th`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
  padding: 18px 24px;
  min-width: 180px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Td = styled.td`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.text};
  padding: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  vertical-align: middle;

  min-width: 180px;
`;

export const SurgeryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SurgeryBadge = styled.span`
  font-size: 12px;
  opacity: 0.8;
`;

export const StatusBadge = styled.span<{ $status: "signed" | "pending" | "partial" }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  ${({ $status }) =>
    $status === "signed" &&
    `
      background: rgba(46, 133, 64, 0.12);
      color: #2e8540;
    `}

  ${({ $status }) =>
    $status === "pending" &&
    `
      background: rgba(229, 62, 62, 0.12);
      color: #e53e3e;
    `}

  ${({ $status }) =>
    $status === "partial" &&
    `
      background: rgba(221, 107, 32, 0.12);
      color: #dd6b20;
    `}
`;

export const ActionButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.default};

  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;