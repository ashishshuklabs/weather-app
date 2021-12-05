import React from "react";
import styled from "styled-components";
import { designVariables } from "./styles/globalVariables";
import { Landing } from "./views";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./state/store/store";
export const App = () => {
  return (
    <ReduxProvider store={store}>
      <PageContainer>
        <Landing />
      </PageContainer>
    </ReduxProvider>
  );
};
const PageContainer = styled.div`
  max-width: 120rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.2);
  background: ${designVariables.colorBodyBg};
  overflow: hidden;
`;
