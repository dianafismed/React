import config from "../config.json"

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

function Header() { 
  return(
    <div>
      <img src="banner" />
      <img src={`https://github.com/`} />
      {config.name}
      {config.job}
    </div>
  )
}

function TimeLine() { 
  return(
    <div>
      TimeLine
    </div>
  )
}