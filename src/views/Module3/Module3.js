// import React useEffect and useState (useState currently not used)
import React, {useEffect, useState, useRef} from 'react';

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

// import GSAP and necessary plugins
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import video
import Video from './output.mp4'

// @material-ui/core components
// make styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mod3styles.js";

const useStyles = makeStyles(styles);
export default function Module3() {
   // classes = styles; each style called by using {classes._classname_}
   const classes = useStyles();

  // useRef to make sure each page loads its own content
  const ref = useRef(null)
  
  useEffect(() => {
    // // bump position to top of page
    window.scrollTo(0, 0)

    // the plugins to be used:
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);

    // refresh scrolltrigger (supposedly helps prevent funkiness)
    ScrollTrigger.refresh();

    // grab the current content
    const elem = ref.current

    gsap.to(elem.querySelector('#video'),
    {
      scrollTrigger:{      
        trigger: elem.querySelector('#scrollingContainer'),
        start: "top 10%",
        end: "bottom top",
        // pin: true,
        markers: true,
        scrub:true,
        onUpdate: () =>{
          var video = elem.querySelector('#video'),
          videoLength = video.duration,
          scrollPosition = window.scrollY - 279; //scrollY 
          let vidDiv = elem.querySelector('#scrollingContainer').clientHeight
          // console.log('video length', videoLength)
          // console.log('scrollPosition', window.scrollY)
          // console.log('vidDiv height', vidDiv )

          if (0 <= scrollPosition <= vidDiv){
            // percent of scroll down the vidDiv
            let myPercent = scrollPosition / vidDiv
            if (myPercent <=1){
              console.log("my percent", myPercent)
              // if percent is between 0 and 100%, nav the video to the timestamp at that percent
              video.currentTime = myPercent * videoLength
            }
          }


          // video.currentTime = (scrollPosition / (elem.querySelector('.markers').clientHeight - window.cleintHeight)) * videoLength;
          // video.currentTime = myTime
        },
        onEnter: ()=>{
          console.log("scroll position on enter",window.scrollY)
        }
      }
    })


  }, []);

  // what is rendered:
  return (<>
  <div ref={ref}>
    <Header
            brand="COVID-19 Modules"
            color="dark"
            fixed          
            // routes={dashboardRoutes}
            rightLinks={<HeaderLinks />}
        />
<div className={classes.mainContainer}>
    <h1 className = {classes.sectionTitle}>
      Module 3: SIR on a Larger Scale
    </h1>
    <div className={classes.textContainer}>
      <p>Let's see what the SIR model looks like at a larger scale.</p>
    </div> {/* closes textContainer */}
    <div className={classes.scrollingContainer} id="scrollingContainer">
      <div className={classes.vidDiv} id="vidDiv">
        {/* <div className="topBuffer" style={{height: "10vh", border: "3px solid blue"}}></div> */}
        <video id="video" src={Video} playsInline={true} webkit-playsinline="true" preload="auto" muted="muted" width="90%" height="auto" valign="top">
        </video> 
        {/* <div className="bottomBuffer" style={{height: "120vh", border: "3px solid green"}}></div>      */}
      </div>
    </div> {/* closes scrollingContainer */}
    <div className={classes.cardsDiv}>
        <div className="text1div" id="" style={{height: "60vh", width:"40vw"}}>
          <Card className={classes.card}>
            <CardHeader className={classes.stepHeader}>
                <h2 className={classes.stepH2}>Card 1</h2>
              </CardHeader>              
            <CardBody>
              <p className={classes.stepP}>Card 1 text.</p>
            </CardBody>
          </Card>
        </div>
        <div className="text2div" id="" style={{height: "60vh", width:"40vw"}}>
        <Card className={classes.card}>
            <CardHeader className={classes.stepHeader}>
                <h2 className={classes.stepH2}>Card 2</h2>
              </CardHeader>              
            <CardBody>
              <p className={classes.stepP}>Card 2 text.</p>
            </CardBody>
          </Card>
        </div>
        <div className="text3div" id="" style={{height: "60vh", width:"40vw"}}>
          <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                  <h2 className={classes.stepH2}>Card 3</h2>
                </CardHeader>              
              <CardBody>
                <p className={classes.stepP}>Card 3 text.</p>
              </CardBody>
          </Card>
        </div>
    </div>
    <Button component={Link} to ="/Module2" size="lg" round>
    &#8592; Go back to Module 2
    </Button>
    </div>
  </div> {/* closes ref div */}
  </>);
}