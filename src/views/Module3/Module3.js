// import React useEffect and useState (useState currently not used)
import React, {useEffect, useState, useRef} from 'react';

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

// import GSAP and necessary plugins
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import styles
import './Mod3Styles.css';

// import video
import Video from './output.mp4'
export default function Module3() {
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
        trigger: elem.querySelector('.scrollingContainerM3'),
        start: "top top",
        end: "bottom top",
        pin: true,
        markers: true,
        onUpdate: () =>{
          var video = elem.querySelector('#video'),
          videoLength = video.duration,
          scrollPosition = window.scrollY-81; //scrollY triggered at 81 down from top, so subtracted this
          let vidDiv = elem.querySelector('.markers').clientHeight
          // console.log('video length', videoLength)
          // console.log('scrollPosition', window.scrollY)
          // console.log('vidDiv height', vidDiv )

          if (0<=scrollPosition <= vidDiv){
            // percent of scroll down the vidDiv
            let myPercent = scrollPosition / vidDiv
            if (myPercent <=1){
              // if percent is between 0 and 100%, nav the video to the timestamp at that percent
              video.currentTime = myPercent * videoLength
            }
          }


          // video.currentTime = (scrollPosition / (elem.querySelector('.markers').clientHeight - window.cleintHeight)) * videoLength;
          // video.currentTime = myTime
        },
        onEnter: () => {
          console.log("enter")
          var video = elem.querySelector('.vidDiv')
          video.style.position="fixed"
          video.style.top='70px'
          video.style.left= 0
          video.style.right= 0
          video.style.padding = '15px'
        },
        onEnterBack: () => {
          console.log("enterback")
          var video = elem.querySelector('.vidDiv')
          video.style.position="fixed"
          video.style.top='70px'
          video.style.left= 0
          video.style.right= 0
          video.style.padding = '15px'
          // var markers = elem.querySelector("#module3markers")
          // markers.style.height = "1250vh"
        },
        onLeave: () => {
          console.log("leave")
          var video = elem.querySelector('.vidDiv')
          video.style.position= 'relative'
          video.style.padding = 0
          // var markers = elem.querySelector("#module3markers")
          // markers.style.height = 0
        },
        onLeaveBack: () => {
          console.log("leaveback")
          var video = elem.querySelector('.vidDiv')
          video.style.position= 'relative'
          video.style.padding = 0
          // var markers = elem.querySelector("#module3marker")
          // markers.style.height = 0
        },
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
<div className="mainContainer fixedParent">
    <h1 className = "sectionTitle">
      Module 2: Walking Through the SIR Model
    </h1>
    <div className="textContainer">
      <p>Let’s take a step by step walk through an SIR model.</p>
    </div> {/* closes textContainer */}
    <div className="scrollingContainerM3">
    <div className="vidDiv">
      <video id="video" src={Video} playsInline={true} webkit-playsinline="true" preload="auto" muted="muted" className="video-background" >
      </video>      

      </div>
      <div className="scrollTextContainer">

      </div> {/* closes scrollingTextContainer */}
      <div className="markers" id="module3markers" >
          <div className="marker" id="step_10" style={{height: "250vh"}}></div>
          <div className="marker" id="step_11" style={{height: "250vh"}}></div>
          <div className="marker" id="step_12" style={{height: "250vh"}}></div>
          <div className="marker" id="step_13" style={{height: "250vh"}}></div>
          <div className="marker" id="step_14" style={{height: "250vh"}}></div>            
      </div>
      

    </div> {/* closes scrollingContainer */}
  {/* <div className="mainContainer fixedParent">
      <h1 className = "sectionTitle">
        Module 3: Video
      </h1>
      <div className="textContainer">
        <p>Video stuff</p>
      </div> */}


    <Button component={Link} to ="/Module2" size="lg" round>
    &#8592; Go back to Module 2
    </Button>
    </div>
  </div> {/* closes ref div */}
  </>);
}