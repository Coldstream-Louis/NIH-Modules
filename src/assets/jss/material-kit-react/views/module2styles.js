const module2Style = {
  mainContainer:{
    margin: "15px",
    backgroundColor: '#1c2530',
    color: 'white',
    textAlign: 'center',
    paddingTop: '80px',
  },
  fixedParent:{

  },
  scrollingContainer: {
      margin: '15px auto',
      width: '100%',
      height: '100%',
      color: 'white',
      padding: '40px 40px',
      display: 'flex',
  },
  stickyContainer:{
      position: 'sticky',
      top:0,
  },
  textContainer:{
      padding: '15px',
      '& p': {
      fontSize: '18px',
      margin: '15px',
      },
  },
  svg:{
      /* backgroundColor: white, */
      position: 'sticky',
      /* position: fixed !important, */
      top: 10,
  },
  scrollTextContainer:{
      maxWidth: '45%',
      /* position: -webkit-sticky, */
      position: 'fixed',
      right: 0,
      /* top: 0, */
      overflow: "visible",
      /* height: 200px, */
      alignSelf: 'flex-start',
      padding: '15px',
      marginTop:'30px',
      verticalAlign: 'middle',
  },
  sectionTitle: {
      padding: '15px 0px',
  },
  moduleText:{
      fontSize:'18px',
  },
  scrollText:{
      fontSize: '18px',
      padding: '15px',
  },
  scrollHeader:{
      fontWeight: 'bold',
      margin: 0,
  },
  markers:{
      display: 'block',
      width:'1vh',
  },
  marker:{
      width: '100%',
      color: '#00e5ff',
      height: '100%',
  },
  step_s:{
      backgroundColor: 'blue',
  },
  step_i:{
      backgroundColor: 'greenyellow',
  },
  step_r:{
      backgroundColor: 'green',
  },
  step_buffer:{
      backgroundColor: 'pink',
  },
  step_5:{
      backgroundColor: 'red',
  },
  step_6:{
      backgroundColor: 'yellow',
  },
  step_7:{
      backgroundColor: 'teal',
  },
  step_8:{
      backgroundColor: 'orange',
  }
}

export default module2Style;