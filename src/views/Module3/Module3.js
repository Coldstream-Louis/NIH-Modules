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

    document.addEventListener("scroll", () => {
      let video = elem.querySelector('#video')

      // offset from top of the page without needing any parents. gBCR = distance from viewport
      // add scrollY to get position from top of the page. window scroll = top of page + viewport
      let stepbufftop_y = elem.querySelector(".stepBuffTop").getBoundingClientRect().top + window.scrollY
      let card1_y = elem.querySelector(".text1div").getBoundingClientRect().top + window.scrollY
      let card2_y = elem.querySelector(".text2div").getBoundingClientRect().top + window.scrollY
      let card3_y = elem.querySelector(".text3div").getBoundingClientRect().top + window.scrollY
      let card4_y = elem.querySelector(".text4div").getBoundingClientRect().top + window.scrollY
      let card5_y = elem.querySelector(".text5div").getBoundingClientRect().top + window.scrollY
      let card6_y = elem.querySelector(".text6div").getBoundingClientRect().top + window.scrollY
      let card7_y = elem.querySelector(".text7div").getBoundingClientRect().top + window.scrollY
      let card8_y = elem.querySelector(".text8div").getBoundingClientRect().top + window.scrollY
      let card9_y = elem.querySelector(".text9div").getBoundingClientRect().top + window.scrollY
      let card10_y = elem.querySelector(".text10div").getBoundingClientRect().top + window.scrollY
      let stepbuffbottom_y = elem.querySelector(".stepBuffBottom").getBoundingClientRect().top + window.scrollY

      // if within cards:
      if (window.scrollY >= stepbufftop_y && window.scrollY < stepbuffbottom_y) {
          //if it's stepbuff
          if (window.scrollY < card1_y) {
              console.log("stepbufftop");
      
              // set video start and end times
              let start = 0;
              let end = 4;
      
              // timestamp takes scroll position, subtracts the position of card that you're in (current active card).
              // this is how far you've advanced through the current card
              // divide by the next card subtracted from the card you're in.
              // this is the total possible distance you can go in the current card
              // multiply by how many seconds it needs to fill (duration you want to move the video forward)
              // add to start time to move the video by how much you've progressed through the card
              let timestamp = (window.scrollY - stepbufftop_y) / (card1_y - stepbufftop_y) * (end - start) + start

              // set video time to timestamp
              video.currentTime = timestamp
              console.log("top buff time", timestamp)
          } else if (window.scrollY < card2_y) {
            let start = 5;
            let end = 12;
    
            
            let timestamp = (window.scrollY - card1_y) / (card2_y - card1_y) * (end - start) + start
            video.currentTime = timestamp
            console.log("card1 time", timestamp)


          } else if (window.scrollY < card3_y) {
            let start = 13;
            let end = 15;
    
            
            let timestamp = (window.scrollY - card2_y) / (card3_y - card2_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card2 time", timestamp)

          } else if (window.scrollY < card4_y) {
            let start = 16;
            let end = 24;
    
            
            let timestamp = (window.scrollY - card3_y) / (card4_y - card3_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card3 time", timestamp)
          } else if (window.scrollY < card5_y) {
            let start = 25;
            let end = 28;
    
            
            let timestamp = (window.scrollY - card4_y) / (card5_y - card4_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card4 time", timestamp)
          } else if (window.scrollY < card6_y) {
            let start = 29;
            let end = 31;
    
            
            let timestamp = (window.scrollY - card5_y) / (card6_y - card5_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card5 time", timestamp)
      
          } else if (window.scrollY < card7_y) {
            let start = 32;
            let end = 36;
    
            
            let timestamp = (window.scrollY - card6_y) / (card7_y - card6_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card6 time", timestamp)
          } else if (window.scrollY < card8_y) {
            let start = 37;
            let end = 40;
    
            
            let timestamp = (window.scrollY - card7_y) / (card8_y - card7_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card7 time", timestamp)      
          } else if (window.scrollY < card9_y) {
            let start = 41;
            let end = 48;
    
            
            let timestamp = (window.scrollY - card8_y) / (card9_y - card8_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card8 time", timestamp)         
          } else if (window.scrollY < card10_y) {
            let start = 49;
            let end = 54;
    
            
            let timestamp = (window.scrollY - card9_y) / (card10_y - card9_y) * (end - start) + start
            video.currentTime = timestamp

            console.log("card9 time", timestamp)
          } else {
              // card 10 case (final case)
          }    
        }
    })

    ScrollTrigger.create({  
      trigger: elem.querySelector('.biggerScrollingContainer'),
      start: "top 10%",
      end: self => elem.querySelector('#scrollingContainer').clientHeight + elem.querySelector('#scrollingContainer').offsetTop,
      // pin: true,
      // markers: true,
      scrub:true,
      onEnter: ()=>{
        ScrollTrigger.create({
          trigger: elem.querySelector("#video"),
          start:"top 10%",
          end: self => elem.querySelector('#scrollingContainer').clientHeight + elem.querySelector('#scrollingContainer').offsetTop,
          pin: true,
          // markers: true,
        })
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
        <div className={classes.cardsDiv} id="cardsDiv">
        <div className="stepBuffTop" style={{height: '120vh', width:"20vw"}}></div>
          <div className="text1div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                  <h2 className={classes.stepH2}>Someone Introduces Infection</h2>
                </CardHeader>              
              <CardBody>
                <p className={classes.stepP}>Someone in the community is infected.</p>
              </CardBody>
            </Card>
          </div>
          <div className="text2div" id="" style={{height: "120vh", width:"20vw"}}>
          <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                  <h2 className={classes.stepH2}>A Transmission Event Occurs</h2>
                </CardHeader>              
              <CardBody>
                <p className={classes.stepP}>The infected person comes in contact with a susceptible person.</p>
              </CardBody>
            </Card>
          </div>
          <div className="text3div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>A Susceptible Person becomes Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>The susceptible person becomes infected due to this encounter.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text4div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>One Transmission Event Occurs</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Another transmission event occurs. Luckily for one of the infected people, they do not transmit their disease to someone else.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text5div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Another Person is Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Another person is added to the pool of infected people.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text6div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Time Passes</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>As time passes, the days left in which a person is infectious decrease.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text7div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Transmission Events Occur</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Two transmission events occur. The more infectious people there are moving about in a population, the more chances there are of a transmission event occuring.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text8div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>Many People are Infected</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Now most of our population has been infected.</p>
                </CardBody>
            </Card>
          </div>
          <div className="text9div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>No Transmissions</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>Luckily, there were no transmission events this round.</p>
                </CardBody>
            </Card>
          </div> 
          <div className="text10div" id="" style={{height: "120vh", width:"20vw"}}>
            <Card className={classes.card}>
                <CardHeader className={classes.stepHeader}>
                    <h2 className={classes.stepH2}>The First Infected Person Recovers</h2>
                  </CardHeader>              
                <CardBody>
                  <p className={classes.stepP}>The first infected person recovers from their illness and is no longer infectious.</p>
                </CardBody>
            </Card>
          </div>          
          <div className="stepBuffBottom" style={{height: '120vh'}}></div>
      </div>
      </div> {/* closes scrollingContainer */}
    </div>

    <div className="bottomBufferDiv" style={{height: "20vh"}}></div>
    <Button component={Link} to ="/Module2" size="lg" round>
    &#8592; Go back to Module 2
    </Button>
    </div>
  </div> {/* closes ref div */}
  </>);
}