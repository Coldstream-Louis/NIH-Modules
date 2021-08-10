const mod3Style = {
  mainContainer:{
    margin: '15px',
    backgroundColor: '#1c2530',
    color: 'white',
    textAlign: 'center',
    paddingTop: '80px',
  },
  scrollingContainer :{
      width: '100%',
      color: 'white',
      padding: '15px',
      display: 'flex',
      flexDirection:"column",
      justifyContent: 'center',
      alignItems:"flex-start"
  },
  scrollingTextContainer: {
    minWidth:"45%",
    maxWidth: "45%",
    position: "fixed",
    right: 0,
    alignSelf: "flex-start",
    padding: '15px',
    verticalAlign: "middle",
  },
  textContainer:{ 
      '& p':{
        fontSize: '18px',
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
  vidDiv:{
    width: '55% !important',
    backgroundColor: "beige",
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'flex-start',
    padding: 0,
  },
}

export default mod3Style;