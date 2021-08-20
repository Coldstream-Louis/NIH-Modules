const mod1Style = {
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
  // medium size
  '@media only screen and (min-width: 768px)': {
    moduleText: {
      fontSize: '18px',
    },
    stepH2: {
      fontSize: "24px",
      // color:"teal"
    },
    stepP: {
      fontSize: "18px",
    },
    sectionTitle: {
      fontSize: "32px",
    },
    textContainer:{
      '& p': {
        fontSize: "18px",
      },
    },
  },
  // large size
  '@media only screen and (min-width: 992px)': {
    moduleText: {
      fontSize: '18px',
    },
    stepH2: {
      fontSize: "28px",
      // color:"magenta"
    },
    stepP: {
      fontSize: "18px",
    },
    sectionTitle: {
      fontSize: "32px",
    },
    textContainer:{
      '& p': {
        fontSize: "18px",
      },
    },
  },  


}

export default mod1Style;