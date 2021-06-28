const mod1Style = {
  mainContainer:{
    margin: '15px',
    backgroundColor: '#1c2530',
    color: 'white',
    textAlign: 'center',
  },
  fixedParent:{
      paddingTop: '80px',
  },
  scrollingContainer :{
      margin: '15px auto',
      width: '100%',
      height: '100%',
      color: 'white',
      padding: '40px',
      display: 'flex',
  },
  stickyContainer:{
      position: 'sticky',
      top:0,
  },
  textContainer:{ 
      '& p':{
        fontSize: '18px',
        margin: '15px',
      }
  },
  moduleSvg:{
      /* backgroundColor: white, */
      position: 'sticky',
      /* position: fixed, */
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
      verticalAlign: 'middle',
  },
  sectionTitle:{
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
      width: '1vh',
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

}

export default mod1Style;