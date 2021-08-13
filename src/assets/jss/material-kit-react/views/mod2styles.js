const mod2Style = {
  mainContainer:{
    margin: '15px',
    backgroundColor: '#1c2530',
    color: 'white',
    textAlign: 'center',
    paddingTop: '80px',
  },
  scrollingContainer :{
      width: '100%',
      height: '100%',
      color: 'white',
      padding: '15px',
      display: 'flex',
      justifyContent: 'space-between',
  },
  textContainer:{ 
      '& p':{
        fontSize: '20px',
        margin: '15px',
      }
  },
  sectionTitle:{
      padding: '15px 0px',
  },
  card: {
    color: "white",
    backgroundColor:"#323a42"
  },
  stepHeader:{
      backgroundColor: "#282f36"
  },
  stepP:{
    fontSize:"18px",
  },
  stepH2:{
    fontWeight: "700",
  },
  moduleText:{
      fontSize:'18px',
  },
  markers:{
    width: "35vw",
  },
  toMod3Buffer: {
    display: "flex",
    flexDirection:"column",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    // backgroundImage:"linear-gradient(180deg, rgba(28, 37, 48,1), rgba(0,0,0,0)) !important"
  },
  toM3Other:{
    display: "flex",
    flexDirection:"column",
    //justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "white",
    // backgroundImage:"linear-gradient(180deg, rgba(28, 37, 48,1), rgba(0,0,0,0)) !important"
    '& p':{
      padding: '0px 90px',
      color:'#1c2530'
    },
  },
  vidImg: {
    width:"60%",
    padding: "20px",
  },
  whiteTransitionDiv:{
    height: "20vh",
    width: "100%",
    // border: "2px solid red",
  }
}

export default mod2Style;