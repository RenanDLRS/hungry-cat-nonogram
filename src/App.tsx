import React from "react";

import GlobalStyle from "./styles/global";
import GameBoard from "./components/gameBoard/gameBoard";
import PageContainer from "./components/PageContainer/pageContainer";

function App() {
  return (
    <PageContainer>
      <GameBoard />
      <GlobalStyle />
    </PageContainer>
  );
}

export default App;
