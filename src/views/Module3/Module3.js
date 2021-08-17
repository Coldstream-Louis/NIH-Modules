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


    ScrollTrigger.create({  
      trigger: elem.querySelector('.biggerScrollingContainer'),
      start: "top 10%",
      end: self => elem.querySelector('#scrollingContainer').clientHeight + elem.querySelector('#scrollingContainer').offsetTop,
      // pin: true,
      markers: false,
      scrub:true,
      onEnter: ()=>{
        ScrollTrigger.create({
          trigger: elem.querySelector("#video"),
          start:"top 10%",
          end: self => elem.querySelector('#scrollingContainer').clientHeight + elem.querySelector('#scrollingContainer').offsetTop,
          pin: true,
          markers: false,
          onUpdate: () =>{
            let video = elem.querySelector('#video')
            let videoLength = video.duration
            let offsetTopDiv = elem.querySelector('#scrollingContainer').offsetTop
            let scrollPosition = window.scrollY 
            // - offsetTopDiv //scrollY 
            // - 189; 
            let vidDiv = elem.querySelector('#scrollingContainer').clientHeight
    
    
            // console.log(offsetTopDiv)
            // console.log('video length', videoLength)
            // console.log('scrollPosition', window.scrollY)
            // console.log('vidDiv height', vidDiv )
    
            if (0 <= scrollPosition <= vidDiv){
              // percent of scroll down the vidDiv
              let myPercent = scrollPosition / vidDiv
              if (myPercent <=1 && !isNaN(videoLength)){
              
                console.log("my percent", myPercent)
                // if percent is between 0 and 100%, nav the video to the timestamp at that percent
                video.currentTime = myPercent * videoLength
              } else {
                video.currentTime = 0
              }
            }
    
    
            // video.currentTime = (scrollPosition / (elem.querySelector('.markers').clientHeight - window.cleintHeight)) * videoLength;
            // video.currentTime = myTime
          },
        })
        // console.log("scroll position on enter",window.scrollY)

      },
      onLeaveBack: () => {

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
      <p>In Module 2, we took a look at what the SIR model looks like on an <b>individual</b> level.</p>
      <p>Now, let's see what the SIR model looks like at a larger scale — at the <b>population</b> level.</p>
    </div> {/* closes textContainer */}
    <div className="biggerScrollingContainer">
      <div className={classes.scrollingContainer} id="scrollingContainer">
        <div className={classes.vidDiv} id="vidDiv">
          {/* <div className="topBuffer" style={{height: "10vh", border: "3px solid blue"}}></div> */}
          <video id="video" src={Video} playsInline={true} webkit-playsinline="true" preload="auto" muted="muted" width="90%" height="auto" valign="top">
          </video> 
          {/* <div className="bottomBuffer" style={{height: "120vh", border: "3px solid green"}}></div>      */}
        </div>
        <div className={classes.cardsDiv}>
        <div className="stepBuff" style={{height: '40vh'}}></div>
          <div className="text1div" id="" style={{height: "180vh", width:"20vw"}}>
            <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                  <h2 className={classes.stepH2}>Someone Introduces Infection</h2>
                </CardHeader>              
              <CardBody>
                <p className={classes.stepP}>Someone in the community is infected.</p>
              </CardBody>
            </Card>
          </div>
          <div className="text2div" id="" style={{height: "90vh", width:"20vw"}}>
          <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                  <h2 className={classes.stepH2}>A Transmission Event Occurs</h2>
                </CardHeader>              
              <CardBody>
                <p className={classes.stepP}>The infected person comes in contact with a susceptible person.</p>
              </CardBody>
            </Card>
          </div>
          <div className="text3div" id="" style={{height: "240vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>A Susceptible Person becomes Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>The susceptible person becomes infected due to this encounter.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text4div" id="" style={{height: "90vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>One Transmission Event Occurs</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Another transmission event occurs. Luckily for one of the infected people, they do not transmit their disease to someone else.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text5div" id="" style={{height: "100vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Another Person is Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Another person is added to the pool of infected people.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text6div" id="" style={{height: "150vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Time Passes</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>As time passes, the days left in which a person is infectious decrease.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text7div" id="" style={{height: "90vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Transmission Events Occur</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Two transmission events occur. The more infectious people there are moving about in a population, the more chances there are of a transmission event occuring.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text8div" id="" style={{height: "180vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Many People are Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Now most of our population has been infected.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text9div" id="" style={{height: "80vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>No Transmissions</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Luckily, there were no transmission events this round.</p>
                </CardBody>
            </Card>
          </div> 
          <div className="text9div" id="" style={{height: "10vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>The First Infected Person Recovers</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>The first infected person recovers from their illness and is no longer infectious.</p>
                </CardBody>
            </Card>
          </div>          
          <div className="stepBuff" style={{height: '150vh'}}></div>
      </div>
      </div> {/* closes scrollingContainer */}
    </div>

    <div className="bottomBufferDiv" style={{height: "120vh"}}></div>
    <Button component={Link} to ="/Module2" size="lg" round>
    &#8592; Go back to Module 2
    </Button>
    </div>
  </div> {/* closes ref div */}
  </>);
}