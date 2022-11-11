import config from "../config.json";
import styled from "styled-components";

function HomePage() {
  const estiloEscrita = {color:"red"}
  return(
    <div style={estiloEscrita}>
      <Menu></Menu>
      <Header />
      <TimeLine />
    </div>
  ); 
}

export default HomePage

function Menu() { 
  return(
    <div>
      Menu
    </div>
  )
}


const StyledHeader = styled.div`
  img{
    width: 80px;
    height: 80px;
    border-radius: 20px;
  }
`
function Header() { 
  return(
    <StyledHeader>
      <div>
        <img src="banner" />
        <img src={`https://github.com/${config.github}.png`} />
        {config.name}
        {config.job}
      </div>
    </StyledHeader>
  )
}

function TimeLine() { 
  return(
    <div>
      TimeLine
    </div>
  )
}