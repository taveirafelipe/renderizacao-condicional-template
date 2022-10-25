import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {
  const [tela, setTela] = useState(1)

  // const trocaTela = () => {
  //   if(tela === true){
  //     setTela(false)
  //     return
  //   }
  //   if(tela === false){
  //     setTela(true)
  //     return
  //   }
  // }

  const trocaTela = (tela) => {
    setTela(tela)
  }

  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {tela?<TelaLogin trocaTela={trocaTela}/>:<TelaCadastro trocaTela={trocaTela}/>}
  //     {/* <TelaLogin trocaTela={trocaTela}/> */}
  //   </MainContainer>
  // );
  switch(tela){
    case 1: 
      return (
      <MainContainer >
        <GlobalStyled />
          <TelaLogin trocaTela={trocaTela}/>
      </MainContainer>
    );
    case 2: 
      return (
      <MainContainer >
        <GlobalStyled />
        <TelaCadastro trocaTela={trocaTela}/>
      </MainContainer>
    );
    case 3: 
      return (
      <MainContainer >
        <GlobalStyled />
        <TelaUsuarioCadastrado trocaTela={trocaTela}/>
      </MainContainer>
    );
  
  }
}

export default App;