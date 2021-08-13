const mod3Style = {
  mainContainer:{
    margin: '15px',
    color: '#1c2530',
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: '80px',
    // overflowY: 'visible',
  },
  scrollingContainer :{
    width: '100%',
    height: '100%',
    color: 'white',
    // backgroundColor: "yellowgreen",
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:"flex-start",
    // border: "3px solid red",
    // overflowY: "visible"
    // paddingBottom: "50px"
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
      backgroundColor: "#282f36",
  },
  stepP:{
    fontSize:"18px",
  },
  stepH2:{
    fontWeight: "700",
    fontSize: "24px",
  },
  moduleText:{
      fontSize:'18px',
  },
  markers:{
    width: "35vw",
  },
  vidDiv:{
    // position: 'sticky',
    // top: 45,
    // backgroundColor: "orange",
    padding: '15px',
    // width: "100%",
    width: "80vw",
    height: "100%",
    // border: "3px solid yellow"
  },
  cardsDiv:{
    width: "20vw",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    // border:"3px solid magenta",
  }
}

export default mod3Style;