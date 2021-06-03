import React, {useEffect, useState} from 'react';
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Styles.css';
import sirBlue from "assets/img/module1/blue_tiles.svg";
import SPath from "assets/img/module1/S-path.svg";
import IPath from "assets/img/module1/I-path.svg";
import RPath from "assets/img/module1/R-path.svg";
import { interpolate } from "flubber";
import * as d3 from "d3";

export default function Module1() {

  const headerS = "S: Susceptible";
  const headerI = "I: Infectious";
  const headerR = "R: Removed";
  const textS = "The number of susceptible individuals. When a susceptible and an infectious individual come into \"infectious contact\", the susceptible individual contracts the disease and transitions to the infectious compartment. ";
  const textI = "The number of infectious individuals. These are individuals who have been infected and are capable of infecting susceptible individuals.";
  const textR = "The number of removed (and immune) or deceased individuals. These are individuals who have been infected and have either recovered from the disease and entered the removed compartment, or died. It is assumed that the number of deaths is negligible with respect to the total population. This compartment may also be called \"recovered\" or \"resistant\". ";
  const [stepSIR, setSIR] = useState(sirBlue);

  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);

    ScrollTrigger.refresh();

    // gsap.set("#person", {x:40 , y:0})
    gsap.to("#init_scene", {scaleX: 2.6, scaleY: 2.6, x:40, y: 150});

    var legs_walking_tl = gsap.timeline({repeat: -1,});
    legs_walking_tl.pause();
    legs_walking_tl.addLabel("move_legs_1")
      .to(".left_leg_group", {duration:0.3, rotation:15}, "move_legs_1")
      .to(".right_leg_group", {duration:0.3, rotation:-15}, "move_legs_1")
      // .to(".left_arm", {duration:0.3, rotation:10}, "move_legs_1")
      // .to(".right_arm", {duration:0.3, rotation:-10}, "move_legs_1");

    legs_walking_tl.addLabel("move_legs_2")
      .to(".left_leg_group", {duration:0.3, rotation:-15}, "move_legs2")
      .to(".right_leg_group", {duration:0.3, rotation:15 }, "move_legs2")
      // .to(".left_arm", {duration:0.3, rotation:-10}, "move_legs_2")
      // .to(".right_arm", {duration:0.3, rotation:10}, "move_legs_2");

    legs_walking_tl.addLabel("move_legs_0")
      .to(".left_leg_group", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      .to(".right_leg_group", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      // .to(".left_arm", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      // .to(".right_arm", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0");

    var master_tl = gsap.timeline();
    
    gsap.to('.full_person', {
      scrollTrigger: {
        trigger: "#module1-1",
        start: "top 180",
        end: "+=2000",
        onEnter: ()=>{legs_walking_tl.play(); master_tl.add(legs_walking_tl);},
        onLeave: ()=>{legs_walking_tl.pause();},
        onEnterBack: ()=>{legs_walking_tl.play();},
        onLeaveBack: ()=>{legs_walking_tl.pause();},
        scrub: true,
        pin: true,
        markers: true,
      },
      x:450,
      y:260,
      ease: "none"
    });

    gsap.to("#module1-1", {
      scrollTrigger: {
        trigger: "#module1-1",
        start: "top 180",
        end: "+=2000",
        onUpdate: () => {
          const currScroll = window.scrollY + 160;
          const step_1 = document.querySelector("#step_s");
          const step_2 = document.querySelector("#step_i");
          const step_3 = document.querySelector("#step_r");

          legs_walking_tl.play();
          if(currScroll >= step_1.offsetTop && currScroll < step_2.offsetTop) {
            setSIR(SPath);
            // setSick(notSick); 
            determineSIR("susceptible")

            document.querySelector("#scrollText").textContent = textS;
            document.querySelector("#scrollHeader").textContent = headerS;
            legs_walking_tl.pause();

          } else if (currScroll >= step_2.offsetTop && currScroll < step_3.offsetTop) {
            setSIR(IPath);
            determineSIR("infectious")

            document.querySelector("#scrollText").textContent = textI;
            document.querySelector("#scrollHeader").textContent = headerI;
            legs_walking_tl.pause();

            // setSick(isSick);

          } else if (currScroll >= step_3.offsetTop) {
            setSIR(RPath);
            // setSick(recoveredSick);
            determineSIR("recovered")

            document.querySelector("#scrollText").textContent = textR;
            document.querySelector("#scrollHeader").textContent = headerR;
            legs_walking_tl.pause();
          }
          else if(currScroll < step_1.offsetTop) {
            setSIR(sirBlue);
            determineSIR("susceptible")
            // setSick(notSick);
            legs_walking_tl.pause();
          }
        },
        scrub: true,
        pin: true,
        markers: true,
        //pinSpacing: false
      },
    });
    
  }, []);


  return (<>
  <div className="mainContainer">
    <h1>
      Module 1: What is SIR?
    </h1>
    <div className="textContainer">
      <p>We will begin this section by learning how  to break up a disease’s natural history into discrete steps. </p>
      <p>The SIR model is one of the simplest compartmental models, and many models are derivatives of this basic form. The model consists of three compartments: </p>
    </div> {/* closes textContainer */}
    <div className="scrollingContainer">
      <svg id="module1-1" width={600} height={400} viewBox="0 0 2000 1600">
        <image x="-60" y="800" width="1900" height="800" href={stepSIR}></image>
        <g id="init_scene">
          <g className="full_person">
          <image href="https://raw.githubusercontent.com/Coldstream-Louis/homework8/master/spotlight.png" height="200" width="200" x="-60" y="-100"/>
            <g id="person">
              <g id="legs">
                <g className="right_leg_group">
                  <line id="right_foot" className="st0" x1="32.4" y1="155.4" x2="32.4" y2="213.8"/>
                  <path id="right_foot" className="st1" d="M36.7,217.5l-3.6-2.1c-1-0.6-1.3-1.8-0.8-2.8l0.1-0.1c0.6-1,1.8-1.3,2.8-0.8l3.6,2.1
                    c1,0.6,1.3,1.8,0.8,2.8l-0.1,0.1C39,217.7,37.7,218,36.7,217.5z"/>
                </g>
                <g className="left_leg_group">
                  <line id="left_leg" className="st0" x1="71.9" y1="156.7" x2="71.9" y2="215.2"/>
                  <path id="left_foot" className="st1" d="M75.9,217.1l-4.4-2.5c-1-0.6-1.3-1.8-0.8-2.8l0.1-0.1c0.6-1,1.8-1.3,2.8-0.8l4.4,2.5
                    c1,0.6,1.3,1.8,0.8,2.8l-0.1,0.1C78.2,217.4,76.9,217.7,75.9,217.1z"/>
                </g>
              </g>
              <g id="infected">
                <path id="infLArmUpper" className="leftarm st2" d="M92.4,118.9c-1.3,0-2.6-0.7-3.4-1.8l-17.9-28c-1.2-1.9-0.6-4.3,1.2-5.5
                  c1.9-1.2,4.3-0.6,5.5,1.2l17.9,28c1.2,1.9,0.6,4.3-1.2,5.5C93.9,118.7,93.1,118.9,92.4,118.9z"/>
                <path id="infBody" className="st3" d="M97.4,79c1.9,12.1-12.7,15.5-16.1,33.1c-3.7,19.2,7.9,26.8,2.3,40.1c-5.2,12-21.7,15.6-36.4,12.7
                  c-18.5-3.6-32.5-18.7-34.1-40.5c-1.3-7.5-2.9-24,5.5-41.2c3.2-6.6,8.5-17.2,20.8-23.4c14.8-7.4,29.4-2.9,33.1-1.7
                  C75.5,59.2,95.1,65.7,97.4,79z"/>
                <path id="infLArmLower" className="leftarm st2" d="M72.4,126.5c-1.6,0-3-0.9-3.7-2.4c-0.9-2,0.1-4.4,2.1-5.2l19.9-8.4c2-0.9,4.4,0.1,5.2,2.1
                  c0.9,2-0.1,4.4-2.1,5.2L74,126.2C73.4,126.4,72.9,126.5,72.4,126.5z"/>
                <path id="infRArm" className="rightarm st2" d="M58.9,131c-0.3,0-0.6,0-0.9-0.1l-28-6.2c-1.6-0.3-2.9-1.4-3.3-3l-9.4-25.2
                  c-0.8-2.1,0.3-4.4,2.3-5.1c2.1-0.8,4.4,0.3,5.1,2.3l8.8,23.5l26.2,5.8c2.2,0.5,3.5,2.6,3,4.8C62.4,129.8,60.7,131,58.9,131z"/>
                <polygon id="lightening_4" className="st4" points="125.5,98.6 121.9,95.7 132.3,92.1 129.2,87 114,94.5 116.6,96.9 108.8,102.2 	"/>
                <polygon id="lightening_3" className="st4" points="-7.6,77.6 -9.3,82.3 -16.6,73 -20.7,77.9 -7.9,90.8 -6.3,87.3 1.8,93.5 	"/>
                <polygon id="lightening_2" className="st4" points="111.6,143 112,138.5 120.8,144.9 123.1,139.5 108.5,131.2 107.9,134.7 99.2,131.2 	
                  "/>
                <polygon id="lightening_1" className="st4" points="-4,144.2 -0.5,147.2 -10.9,150.5 -7.9,155.7 7.5,148.7 4.8,146.1 12.9,141.1 	"/>
                <g id="infHead">
                  <path id="infFace" className="st5" d="M95.5,28.9c-2.5-0.5-3.2,2.1-7.8,2.8c-5.2,0.9-9.7-1.3-11.4-2.2c-5-2.5-5-4.9-7.6-4.9
                    c-5.5,0-8.6,10.4-11.4,9.7c-2.2-0.5-1.8-7.8-3.3-7.9c-0.7,0-1.2,2.1-3,5.6c-1.7,3.3-4.2,7.2-4.9,6.9c-1.1-0.5,2.6-10.5,1.1-11.2
                    c-1.4-0.7-6.4,7.7-7.6,7.1c-0.1,0-0.1-0.1-0.1-0.1l-1.3,5c-1.8,7.9,0.3,16.2,6,22c4,4.6,10,8.4,16.8,10.3c0.5,0.3,1,0.3,1.6,0.5
                    c6.1,1.5,12.5,1.6,18.6,0.2c9.8-2.2,16.6-8.6,19.1-17.8l3-12.1C101.8,42.2,100.7,30,95.5,28.9z M70.6,59.6c2-4.9,7-7.6,11.6-6.8
                    c3.8,0.7,6.9,3.5,8,7.2L70.6,59.6z"/>
                  <path id="infHair" className="st6" d="M104.1,32.8c-1.8-10-10.5-19.1-21.4-23.8c-15.3-6.3-29.6,0-36.9,9.4c-1.7,2.2-3,4.6-3.9,7.1
                    c0,0.1-0.1,0.2-0.1,0.3c-1.4,3.6-2.9,8-2.3,8.9c0,0.1,0.1,0.1,0.1,0.1c1.2,0.6,6.2-7.8,7.6-7.1c1.5,0.7-2.2,10.7-1.1,11.2
                    c0.7,0.3,3.2-3.6,4.9-6.9c1.8-3.5,2.3-5.6,3-5.6c1.5,0.1,1.1,7.4,3.3,7.9c2.8,0.7,5.9-9.7,11.4-9.7c2.6,0,2.6,2.4,7.6,4.9
                    c1.7,0.9,6.2,3.1,11.4,2.2c4.6-0.7,5.3-3.3,7.8-2.8c5.2,1.1,6.3,13.3,7.8,13.9c0,0,0.1,0,0.1,0C104.2,42.8,105.1,37.9,104.1,32.8z
                    "/>
                  <path id="infMouth" className="st7" d="M82.2,52.8c-4.6-0.8-9.6,1.9-11.6,6.8L90.2,60C89.1,56.3,86,53.5,82.2,52.8z"/>
                </g>
              </g>
              <g id="recovered">
                <path id="recLArm" className="leftarm st8" d="M78.1,86.5c-1.4,0-2.8-0.8-3.6-2.2c-1-2-0.2-4.4,1.7-5.4l27-14l5-28.9c0.4-2.2,2.4-3.6,4.6-3.3
                  c2.2,0.4,3.6,2.4,3.3,4.6l-5.6,32.9L79.9,86.1C79.3,86.4,78.7,86.5,78.1,86.5z"/>
                <path id="recBody" className="st9" d="M64.3,55c31.4,22.7,49.3,86.1,11.6,111.7c-31.4,22.6-76.8-1.2-76.3-43.1C0,97.2,15.4,65.4,33.7,54.3
                  C41.8,48.4,55.8,48.5,64.3,55"/>
                <path id="recRArm" className="rightarm st8" d="M15.5,96.1c-1,0-1.9-0.3-2.7-1L-8.6,75.5l-7.8-29c-0.6-2.1,0.7-4.3,2.8-4.9
                  c2.1-0.6,4.3,0.7,4.9,2.8l7.2,26.8l19.7,18c1.6,1.5,1.7,4,0.3,5.7C17.7,95.7,16.6,96.1,15.5,96.1z"/>
                <g id="recHead">
                  <path id="recFace" className="st8" d="M67.2,15.7c-2.6,0.1-2.7,2.8-7,4.7c-4.8,2.1-9.8,1-11.7,0.6c-5.6-1.2-6.3-3.5-8.8-2.9
                    c-5.3,1.3-5.8,12.4-8.8,12.3c-2.5,0-3.8-7.3-5.3-7c-0.8,0.1-0.7,2.3-1.6,6.2c-0.8,3.5-2.3,8-3.1,7.9c-1.2-0.1-0.1-10.9-1.7-11.2
                    c-1.6-0.3-4.5,9.1-5.8,8.8v5.1c0.1,8.2,4.3,15.9,11.3,20.3c5.6,3.8,12.3,5.8,19.1,6c0.5,0,1.1,0,1.7,0c6.4,0,12.7-1.4,18.4-4.3
                    C73,57.5,78.2,49.6,78.3,40V27.4C77,27.9,72.8,15.5,67.2,15.7z M59.2,54.9c-5.1-0.4-9.6-3.6-11.7-8.3l26-2.4
                    C71.5,50.9,65.5,55.3,59.2,54.9z"/>
                  <path id="recHair" className="st10" d="M76.7,17.3C72.5,8,61.5,1,49.7-0.8C29.2-3.9,14.8,11.6,13.3,25.4c-0.4,4.2-1,9.5,0,9.7
                    c1.3,0.3,4.2-9.1,5.8-8.8c1.6,0.3,0.5,11.1,1.7,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
                    c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.3-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
                    C79.2,27.2,78.8,22.1,76.7,17.3z"/>
                  <path id="recMouth" className="st11" d="M59.2,54.9c6.3,0.4,12.4-4,14.3-10.7l-26,2.4C49.5,51.3,54,54.5,59.2,54.9z"/>
                </g>
              </g>
              <g id="susceptible">
                <path id="susLArm" className=" leftarm st8" d="M107.6,136.7c-1.3,0-2.5-0.6-3.3-1.7L91,115.6L72.8,87.3c-1.2-1.9-0.7-4.3,1.2-5.5
                  c1.9-1.2,4.3-0.7,5.5,1.2l18.2,28.3l13.2,19.3c1.2,1.8,0.8,4.3-1,5.6C109.2,136.5,108.4,136.7,107.6,136.7z"/>
                <path id="susBody" className="st9" d="M64.8,54.9c31.4,22.7,49.3,86.1,11.5,111.7C45,189.2-0.5,165.4,0,123.5
                  c0.4-26.4,15.7-58.2,34.1-69.3C42.3,48.3,56.3,48.4,64.8,54.9"/>
                <path id="susRArm" className="rightarm st8" d="M53.7,138.2c-0.8,0-1.5-0.2-2.2-0.7l-23.2-15.6L16.2,95.1c-0.9-2,0-4.4,2-5.3
                  c2-0.9,4.4,0,5.3,2l11.1,24.8l21.4,14.4c1.8,1.2,2.3,3.7,1.1,5.6C56.2,137.6,55,138.2,53.7,138.2z"/>
                <g id="susHead">
                  <path id="susFace" className="st8" d="M67.5,15.6c-2.6,0.1-2.6,2.8-7,4.7c-4.8,2.1-9.8,1-11.7,0.6c-5.6-1.2-6.3-3.5-8.8-2.9
                    c-5.3,1.3-5.8,12.4-8.8,12.3c-2.5,0-3.8-7.3-5.3-7c-0.8,0.1-0.7,2.3-1.6,6.2c-0.8,3.5-2.3,8-3.1,7.9c-1.1-0.1,0-10.9-1.6-11.2
                    c-1.6-0.3-4.5,9.1-5.8,8.8v5.1c0.1,8.2,4.3,15.9,11.3,20.3c5.7,3.8,12.3,5.8,19.2,6c0.5,0,1.1,0,1.7,0c6.4,0,12.7-1.4,18.4-4.3
                    c9.1-4.7,14.2-12.6,14.4-22.2V27.3c0,0-0.1,0-0.1,0.1C77.3,27.8,73.1,15.4,67.5,15.6z"/>
                  <path id="susHair" className="st10" d="M77.1,17.2C72.9,7.9,62,1,50.1-0.9C29.6-4,15.2,11.5,13.8,25.3c-0.4,4.2-1,9.5,0,9.7
                    c1.3,0.3,4.2-9.1,5.8-8.8c1.6,0.3,0.5,11.1,1.6,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
                    c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.4-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
                    c0,0,0.1,0,0.1-0.1C79.7,26.8,79.2,21.9,77.1,17.2z"/>
                </g>
              </g>
              <g id="base">
                <path id="baseLArm" className=" leftarm st8" d="M107.6,136.7c-1.3,0-2.5-0.6-3.3-1.7L91,115.6L72.8,87.3c-1.2-1.9-0.7-4.3,1.2-5.5
                  c1.9-1.2,4.3-0.7,5.5,1.2l18.2,28.3l13.2,19.3c1.2,1.8,0.8,4.3-1,5.6C109.2,136.5,108.4,136.7,107.6,136.7z"/>
                <path id="baseBody" className="st9" d="M64.8,54.9c31.4,22.7,49.3,86.1,11.5,111.7C45,189.2-0.5,165.4,0,123.5
                  c0.4-26.4,15.7-58.2,34.1-69.3C42.3,48.3,56.3,48.4,64.8,54.9"/>
                <path id="baseRArm" className="rightarm st8" d="M53.7,138.2c-0.8,0-1.5-0.2-2.2-0.7l-23.2-15.6L16.2,95.1c-0.9-2,0-4.4,2-5.3
                  c2-0.9,4.4,0,5.3,2l11.1,24.8l21.4,14.4c1.8,1.2,2.3,3.7,1.1,5.6C56.2,137.6,55,138.2,53.7,138.2z"/>
                <g id="baseHead">
                  <path id="baseFace" className="st8" d="M67.5,15.6c-2.6,0.1-2.6,2.8-7,4.7c-4.8,2.1-9.8,1-11.7,0.6c-5.6-1.2-6.3-3.5-8.8-2.9
                    c-5.3,1.3-5.8,12.4-8.8,12.3c-2.5,0-3.8-7.3-5.3-7c-0.8,0.1-0.7,2.3-1.6,6.2c-0.8,3.5-2.3,8-3.1,7.9c-1.1-0.1,0-10.9-1.6-11.2
                    c-1.6-0.3-4.5,9.1-5.8,8.8v5.1c0.1,8.2,4.3,15.9,11.3,20.3c5.7,3.8,12.3,5.8,19.2,6c0.5,0,1.1,0,1.7,0c6.4,0,12.7-1.4,18.4-4.3
                    c9.1-4.7,14.2-12.6,14.4-22.2V27.3c0,0-0.1,0-0.1,0.1C77.3,27.8,73.1,15.4,67.5,15.6z"/>
                  <path id="baseHair" className="st10" d="M77.1,17.2C72.9,7.9,62,1,50.1-0.9C29.6-4,15.2,11.5,13.8,25.3c-0.4,4.2-1,9.5,0,9.7
                    c1.3,0.3,4.2-9.1,5.8-8.8c1.6,0.3,0.5,11.1,1.6,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
                    c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.4-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
                    c0,0,0.1,0,0.1-0.1C79.7,26.8,79.2,21.9,77.1,17.2z"/>
                  <path id="baseMouth" className="st7"d ="M59.2,54.9c6.3,0.4,12.4-4,14.3-10.7l-26,2.4"/>                    
                </g>
              </g>
            </g>
            {/* {sickNot} */}
            {/* <g id="person">
              <polyline className="st0 right_arm" points="75.4,87.9 93.6,116.2 106.8,135.5 		"/>

              <g className="left_leg_group">
                <polyline id="left_leg" className="st2" points="71,158.5 71,183.7 71,205.9 		"/>
                <ellipse id="left_foot" className="st1" cx="73.2" cy="205" rx="3.2" ry="1.2"
                        transform="rotate(30, 73, 205)"/>
              </g>

              <g className="right_leg_group">
                <polyline id="right_legt" className="st2" points="40,168.5 40,193.7 40.1,215.9 		"/>
                <ellipse id="right_foot" className="st1" cx="43" cy="216" rx="3.2" ry="1.2"
                        transform="rotate(30, 43, 216)"/>
              </g>


              <g id="belly_1_">
                <g>
                  <path className="st3" d="M64,57.7c31.4,22.7,49.3,86.1,11.5,111.7C44.2,192-1.3,168.2-0.8,126.3C-0.4,99.9,14.9,68.1,33.3,57
                                  C41.5,51.1,55.5,51.2,64,57.7"/>
                </g>
              </g>
              <g id="head_1_">
                <path className="st4" d="M78,42.7c-0.2,9.6-5.3,17.5-14.4,22.2c-5.7,2.9-12,4.3-18.4,4.3c-0.6,0-1.2,0-1.7,0C36.6,69,30,67,24.3,63.2
                              c-7-4.4-11.2-12.1-11.3-20.3l0,0V30c0.2-9.4,5.2-17.2,13.9-22c11.6-6.3,27.8-6,38.5,0.7C73.1,13.3,78,21.6,78,29.8L78,42.7z"/>
              </g>
              <path className="st0 left_arm" d="M19,96.2L30.6,122l0,0l22.3,15"/>
              <path id="Hair_1_" className="st5" d="M76.3,20c-4.2-9.3-15.1-16.2-27-18.1C28.8-1.2,14.4,14.3,13,28.1c-0.4,4.2-1,9.5,0,9.7
                          c1.3,0.3,4.2-9.1,5.8-8.8s0.5,11.1,1.6,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
                          c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.4-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
                          C78.9,29.9,78.5,24.8,76.3,20z"/>
            </g> */}
            {/* <g id="sick">
              <line id="left_arm_upper" className="st0" x1="133.2" y1="97.9" x2="155.2" y2="132.4"/>
              <line id="right_leg" className="st2" x1="90.3" y1="189.6" x2="90.3" y2="260.8"/>
              <line id="left_leg" className="st2" x1="124.9" y1="182.7" x2="124.9" y2="253.9"/>
              <path id="right_foot" className="st1" d="M91.2,262.7l4.1,2.4c1.2,0.7,2.8,0.3,3.6-0.9l0,0l0,0c0.7-1.2,0.3-2.8-0.9-3.6l-4.2-2.5
                c-1.2-0.7-2.8-0.3-3.6,0.9l0,0C89.6,260.3,89.9,261.9,91.2,262.7L91.2,262.7z"/>
              <path id="left_foot" className="st1" d="M127.2,248.7l5.2,3c1.2,0.7,1.7,2.3,0.9,3.6l0,0c-0.7,1.2-2.3,1.7-3.6,0.9l0,0l0,0l-5.2-3
                c-1.2-0.7-1.6-2.3-0.9-3.6l0,0C124.3,248.4,125.9,248,127.2,248.7L127.2,248.7z"/>
              <g id="belly">
                <path className="st3" d="M161.4,88.2c2.4,14.9-15.6,19.1-19.9,40.8c-4.6,23.7,9.8,33.1,2.8,49.4c-6.4,14.8-26.8,19.2-44.9,15.7
                  c-22.8-4.4-40.1-23-42.1-49.9c-1.6-9.2-3.6-29.6,6.8-50.8c4-8.1,10.5-21.2,25.6-28.8c18.3-9.1,36.3-3.6,40.8-2.1
                  C134.4,63.8,158.6,71.8,161.4,88.2z"/>
              </g>
              <line id="left_arm_lower" className="st0" x1="130.6" y1="141.8" x2="155.1" y2="131.5"/>
              <path id="right_arm" className="st0" d="M67.2,108.1l11.7,31.3c0,0.1,0.1,0.2,0.2,0.2l34.8,7.7"/>
              <path id="head" className="st4" d="M88.4,39.7L88.4,39.7l3.8-15.2c3-11,11.2-18.8,22.8-21.9c15.5-4.1,34.5,0.9,45.1,12.1
                c7.7,7.6,11,18.8,8.5,28.6l-3.7,15.2c-3.1,11.3-11.5,19.2-23.5,22c-7.5,1.7-15.4,1.6-22.9-0.3c-0.7-0.2-1.3-0.3-2-0.6
                c-8.4-2.4-15.8-7-20.7-12.7C88.8,59.7,86.2,49.5,88.4,39.7z"/>
              <path id="mouth" className="st5" d="M128.4,64.3c2.5-6,8.6-9.4,14.3-8.4c4.7,0.9,8.5,4.3,9.9,8.9"/>
              <g id="sick_face" className="st6">
                <path className="st4" d="M88.8,40.5l3.7-15.2c3-11.1,11.2-18.8,22.8-21.9c15.6-4.1,34.5,1,45.1,12.1c7.6,7.6,11,18.8,8.5,28.6
                  l-3.7,15.2l0,0c-3.1,11.3-11.4,19.2-23.5,22.1c-7.5,1.7-15.4,1.6-22.9-0.3c-0.7-0.2-1.3-0.4-2-0.6c-8.4-2.5-15.8-7-20.7-12.7
                  C89.2,60.5,86.4,50.3,88.8,40.5z"/>
              </g>
              <path id="hair" className="st8" d="M169.6,31.2c-2.2-12.3-13-23.6-26.4-29.3c-23.2-9.7-44.6,4.4-50.3,20.3c-1.8,4.8-4,10.9-2.8,11.5
                c1.5,0.8,7.6-9.6,9.4-8.7s-2.7,13.2-1.4,13.8c0.9,0.4,4-4.5,6-8.5c2.2-4.3,2.8-6.9,3.7-6.9c1.8,0.1,1.3,9.1,4.1,9.8
                c3.5,0.9,7.3-12,14-12c3.2,0,3.2,3,9.4,6c2.1,1.1,7.6,3.8,14,2.7c5.7-0.9,6.5-4.1,9.6-3.5c6.7,1.4,7.9,17.4,9.7,17.1
                C169.8,43.6,170.9,37.5,169.6,31.2z"/>
              <polygon id="lightening_4" className="st9" points="196.1,112.4 191.6,108.8 204.4,104.3 200.6,98.1 181.9,107.3 185.1,110.3 
                175.4,116.8 "/>
              <polygon id="lightening_3" className="st9" points="31.9,86.5 29.8,92.2 20.8,80.8 15.8,86.8 31.5,102.7 33.5,98.4 43.5,106.1 "/>
              <polygon id="lightening_2" className="st9" points="178.9,167.1 179.4,161.5 190.2,169.4 193.1,162.8 175.1,152.5 174.4,156.9 
                163.6,152.6 "/>
              <polygon id="lightening_1" className="st9" points="36.3,168.6 40.7,172.3 27.9,176.4 31.5,182.7 50.5,174.1 47.2,170.9 57.2,164.7 "/>
          </g> */}
          </g>
        </g>
      </svg>
      <div className="scrollTextContainer">
        <h2 id="scrollHeader">{headerS}</h2>
        <p id="scrollText">{textS}</p>
      </div> {/* closes scrollingTextContainer */}
      <div className="markers" style={{height: "200vh"}}>
        <div className="marker" id="step_s" style={{height: "75vh"}}></div>
        <div className="marker" id="step_i" style={{height: "75vh"}}></div>
        <div className="marker" id="step_r" style={{height: "75vh"}}></div>
      </div> {/* closes marker */}
    </div> {/* closes scrollingContainer */}
  </div> {/* closes mainContainer */}
  </>);
}


export function determineSIR(sirState){
    let susBody = d3.select("#susBody").attr('d'),
        infBody = d3.select("#infBody").attr('d'),
        recBody = d3.select("#recBody").attr('d'),
        baseBody = d3.select("#baseBody").attr('d');

    let susFace = d3.select("#susFace").attr('d'),
        infFace = d3.select("#infFace").attr('d'),
        recFace = d3.select("#recFace").attr('d'),
        baseFace = d3.select("#baseFace").attr('d');

    let susHair = d3.select("#susHair").attr('d'),
        infHair = d3.select("#infHair").attr('d'),
        recHair = d3.select("#recHair").attr('d'),
        baseHair = d3.select("#baseHair").attr('d');

    let susMouth = [[0,0], [1,1],[2,2]],
        infMouth = d3.select("#infMouth").attr("d"),
        recMouth = d3.select("#recMouth").attr('d'),
        baseMouth = d3.select("#baseMouth").attr('d');

    let t = d3.transition()
            .duration(400)
            .ease(d3.easeLinear)


    if (sirState === "infectious"){
        toInf()
    }
     else if (sirState === "recovered"){
        toRec()
    } else {
        toSus()
    }

    function toRec(){
      console.log("toRec")
        d3.select("#baseFace")
          .transition(t)
          .attrTween("d", () => {
            // console.log("face to rec")
            return interpolate(baseFace, recFace)})
        d3.select("#baseBody")
          .transition(t)
          .attrTween("d", () => {
            // console.log("body to rec")
            return interpolate(baseBody, recBody)})
        d3.select("#baseHair")
          .transition(t)
          .attrTween("d", () => {
            // console.log("hair to rec")
            return interpolate(baseHair, recHair)})
        d3.select("#baseMouth")
          .transition(t)
          .attrTween("d", () => {
            // console.log("mouth to rec")
            return interpolate(baseMouth, recMouth)})
            .style("opacity", 1)       
    }

    function toInf(){
      console.log("toInf")
        d3.select("#baseFace")
          .transition(t)
          .attrTween("d", () => {
            // console.log("face to inf")
            return interpolate(baseFace, infFace)})
        d3.select("#baseBody")
          .transition(t)
          .attrTween("d", () => {
            // console.log("body to inf")
            return interpolate(baseBody, infBody)})
        d3.select("#baseHair")
          .transition(t)
          .attrTween("d", () => {
            // console.log("hair to inf")
            return interpolate(baseHair, infHair)})
        d3.select("#baseMouth")
          .transition(t)
          .attrTween("d", () => {
            // console.log("mouth to inf")
            return interpolate(baseMouth, infMouth)})
            // .style("opacity", 1) 
    }

    function toSus(){
      console.log("toSus")
      d3.select("#baseFace")
        .transition(t)
        .attrTween("d", () => {
          // console.log("face to sus")
          return interpolate(baseFace, susFace)})
      d3.select("#baseBody")
        .transition(t)
        .attrTween("d", () => {
          // console.log("body to sus")
          return interpolate(baseBody, susBody)})
      d3.select("#baseHair")
        .transition(t)
        .attrTween("d", () => {
          // console.log("hair to sus")
          return interpolate(baseHair, susHair)})
      d3.select("#baseMouth")
        .transition(t)
        .attrTween("d", () => {
          // console.log("mouth to sus")
          return interpolate(baseMouth, susMouth)})
          .style("opacity", 1)    
    }
       
}
