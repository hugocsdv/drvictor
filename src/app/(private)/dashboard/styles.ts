"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: radial-gradient(circle at top right, rgba(0,0,0,0.02), transparent);
`;

export const Main = styled.main`
  flex: 1;
  padding: 40px;
  overflow-y: auto;
`;