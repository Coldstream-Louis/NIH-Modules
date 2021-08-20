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
      fontSize: "14px",
      margin: '15px',
    },
  },
  sectionTitle:{
    padding: '15px 0px',
    fontSize: "20px",
    fontWeight: "bold", 
  },
  card: {
    color: "white",
    backgroundColor:"#323a42"
  },
  stepHeader:{
      backgroundColor: "#282f36",
  },
  stepP:{
    fontSize:"14px",
  },
  stepH2:{
    fontWeight: "700",
    fontSize: "18px",
  },
  moduleText:{
    fontSize:"14px",
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
  },
      // medium size
      '@media only screen and (min-width: 768px)': {
        moduleText: {
          fontSize: '20px',
        },
        stepH2: {
          fontSize: "24px",
          // color:"teal"
        },
        stepP: {
          fontSize: "20px",
        },
        sectionTitle: {
          fontSize: "32px",
        },
        textContainer:{
          '& p': {
            fontSize: "20px",
          },
        },
      },
      // large size
      '@media only screen and (min-width: 992px)': {
        moduleText: {
          fontSize: '24px',
        },
        stepH2: {
          fontSize: "28px",
          // color:"magenta"
        },
        stepP: {
          fontSize: "20px",
        },
        sectionTitle: {
          fontSize: "32px",
        },
        textContainer:{
          '& p': {
            fontSize: "20px",
          },
        },
      },  
}

export default mod3Style;