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
  // CONSTANTS //
  // headers and text descriptions:
  const headerS = "S: Susceptible";
  const headerI = "I: Infectious";
  const headerR = "R: Removed";
  const textS = "The number of susceptible individuals. When a susceptible and an infectious individual come into \"infectious contact\", the susceptible individual contracts the disease and transitions to the infectious compartment. ";
  const textI = "The number of infectious individuals. These are individuals who have been infected and are capable of infecting susceptible individuals.";
  const textR = "The number of removed (and immune) or deceased individuals. These are individuals who have been infected and have either recovered from the disease and entered the removed compartment, or died. It is assumed that the number of deaths is negligible with respect to the total population. This compartment may also be called \"recovered\" or \"resistant\". ";

  // letters on top of tiles
  const sirS = <path className="letterS" d="M156.1,37.3c-7.8-4.6-16.6-7.4-25.7-8c-8.8-0.5-16.7,1.2-23.6,5.2c-5.5,3.2-8.6,6.8-9.4,10.8
		c-0.8,4,1,9.1,5.6,15.3c4.4,5.9,6.7,10.2,6.9,12.8c0.2,2.6-1.2,4.8-4.3,6.6c-3.7,2-7.8,2.9-12,2.5c-4.6-0.3-9.5-2-14.9-5.1
		c-3.7-2.2-7.2-4.8-10.3-7.7c-3-2.8-5.6-5.9-7.9-9.3l-12.7,7.4c3.1,5.1,9.3,10.4,18.7,15.8c8.6,5.2,18.3,8.3,28.2,9.1
		c9.5,0.7,17.9-1.1,25.2-5.4c3.7-2.2,6.3-4.4,7.7-6.8c1.4-2.4,1.8-5.2,1.1-7.9c-0.7-2.9-2.8-6.8-6.3-11.8c-3.2-4.4-5.1-7.6-5.9-9.6
		c-0.7-1.6-0.8-3.4-0.2-5.1c0.9-1.7,2.4-3.1,4.1-4c3.3-1.9,7.1-2.7,10.9-2.4c4.5,0.3,8.9,1.7,12.8,4.1c6,3.5,11.1,8.3,15.1,14.1
		l15.3-3.9C169.7,47.1,163.4,41.4,156.1,37.3"/>

  const sirI = <polyline class="letterI" points="154.3,39.7 140.8,31.9 58.5,79.7 72.1,87.5 154.3,39.7 	"/>

  const sirR = <path className="letterR" d="M100.9,53.9l26.9-15.6l9,5.2c6.2,3.6,9.7,6.8,10.8,9.7c1,2.9-0.8,5.8-5.4,8.5
  c-4.4,2.6-9.5,3.9-14.6,3.6c-5.1-0.3-10.9-2.2-17.2-5.9L100.9,53.9 M149,37.3l-23.4-13.5L43.4,71.6l13.5,7.8l32.9-19.1l13.4,7.7
  l-13,30.5l15.4,8.9l13-34.7c15.1,3.7,27.7,2.5,38-3.4c8-4.7,11.4-9.6,10.3-14.9C165.7,49.2,159.8,43.5,149,37.3"/>

  // useState to set if figure is on S, I, or R
  const [stepSIR, setSIR] = useState(sirBlue);

  useEffect(() => {
    // the plugins to be used:
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);

    // make sure scroll is at top of page
    window.onbeforeunload = function () {
      window.scrollTo(0,0);
    };

    // refresh scrolltrigger (supposedly helps prevent funkiness)
    ScrollTrigger.refresh();

    // add tiles to SVG so there are 3
    // addTiles(3)
    // let allTiles = gsap.utils.toArray(".tile")

    // // programmatically set each tile the correct distance apart
    // for (let i=0; i < allTiles.length; i++){
    //   let myX = 0
    //   let myY = 360
    //   let scale = 2.5
    //   let xIncrement = 90 * 1.5 * scale
    //   let yIncrement = 50 * 1.5 * scale
    //   gsap.set(allTiles[i],{
    //     x: myX + xIncrement*i,
    //     y: myY + yIncrement*i,
    //     scaleX: scale,
    //     scaleY: scale,
    //   })
    // }


    // gsap.set(".tilegroup",{x:60, y: 400})
    // gsap.set(".full_person",{x:-80, y: 0})
    // place spotlight in correct position:
    gsap.set("#spotlight", {x:-50 , y:-150, scaleX:.9, scaleY:.9})

    // place entire scene in correct position:
    gsap.to("#init_scene", {scaleX: 2.6, scaleY: 2.6, x:40, y: 0});

    // create a timeline that moves the legs:
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

    // initialize a mater timeline to add other tweens and timelines to:
    var master_tl = gsap.timeline();
    
    // create a tween that moves the person and spotlight (full person) 
    // to the correct end position
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

    // create a tween that updates the text based on scroll position
    // this tween also pauses and plays the legs walking
    // it also updates the SVG for the person depending on SIR state
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


          } else if (currScroll >= step_3.offsetTop) {
            setSIR(RPath);

            determineSIR("recovered")

            document.querySelector("#scrollText").textContent = textR;
            document.querySelector("#scrollHeader").textContent = headerR;
            legs_walking_tl.pause();
          }
          else if(currScroll < step_1.offsetTop) {
            setSIR(sirBlue);
            determineSIR("susceptible")

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

  // what is rendered:
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
        {/* <g className="tilegroup">
          <g className="tile">
          <path className="topFace" d="M211.3,59c4.7,2.7,4.7,7.1,0.1,9.8l-92.3,53.6c-4.6,2.7-12.3,2.7-17,0l-98.6-57
              c-4.7-2.7-4.7-7.1,0-9.8L95.7,2c4.6-2.7,12.3-2.7,17,0L211.3,59z"/>
            <path className="sideProfile"d="M212.4,68.2c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.3,0.2-0.4,0.3v0l-0.4,0.2v0.1l-92.2,53.6
              c-0.4,0.1-0.7,0.3-1,0.5c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.2-0.6,0.3c-0.3,0.1-0.6,0.2-1,0.2c-3.4,1.1-7.5,1.2-10.9,0.2
              c0,0-0.1,0-0.1,0c-0.5-0.1-1-0.3-1.5-0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-0.9-0.4-1.3-0.7l-98.7-57C1.2,64.2,0,62.4,0,60.6v0.1v8
              v0.1c0,1.7,1.1,3.5,3.5,4.9l98.7,56.9c0.4,0.2,0.9,0.5,1.3,0.6c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,0.9,0.3,1.4,0.5c0.1,0,0.2,0,0.3,0.1
              c1.1,0.3,2.3,0.5,3.4,0.6c0,0,0,0,0.1,0c3.3,0.3,6.7-0.2,9.3-1.5c0.3-0.1,0.5-0.3,0.8-0.4L211.4,77c0.1-0.1,0.3-0.2,0.4-0.3v0.1
              c0.4-0.3,0.8-0.5,1.1-0.8s0.6-0.6,0.9-0.9c0.3-0.4,0.5-0.8,0.7-1.2c0.3-0.5,0.4-1.2,0.4-1.8V64C214.9,65.4,214.1,66.9,212.4,68.2z"
              />
          </g> 
        </g>  */}
        <g id="init_scene">
          <g className="full_person">
          {/* <image href="https://raw.githubusercontent.com/Coldstream-Louis/homework8/master/spotlight.png" height="200" width="200" x="-60" y="-100"/> */}
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
                  <path id="susMouth" className="st7" d="M51.2,52.7c-6.4,0-9.8-3.4-9.9-3.4l-1.4,1.4c0.2,0.2,4,4,11.3,4c8.2,0,11.2-3.9,11.4-4.1
                    L61,49.4C60.9,49.5,58.4,52.7,51.2,52.7z"/>
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
                  <path id="baseMouth" className="st7" d="M51.2,52.7c-6.4,0-9.8-3.4-9.9-3.4l-1.4,1.4c0.2,0.2,4,4,11.3,4c8.2,0,11.2-3.9,11.4-4.1
                    L61,49.4C60.9,49.5,58.4,52.7,51.2,52.7z"/>                 
                </g>
              </g>
            </g>
            <g id="lightnings">
              <polygon id="lightening_4" className="lightning st4" points="125.5,98.6 121.9,95.7 132.3,92.1 129.2,87 114,94.5 116.6,96.9 108.8,102.2 	"/>
              <polygon id="lightening_3" className="lightning st4" points="-7.6,77.6 -9.3,82.3 -16.6,73 -20.7,77.9 -7.9,90.8 -6.3,87.3 1.8,93.5 	"/>
              <polygon id="lightening_2" className="lightning st4" points="111.6,143 112,138.5 120.8,144.9 123.1,139.5 108.5,131.2 107.9,134.7 99.2,131.2 	
                "/>
              <polygon id="lightening_1" className="lightening st4" points="-4,144.2 -0.5,147.2 -10.9,150.5 -7.9,155.7 7.5,148.7 4.8,146.1 12.9,141.1 	"/>
            </g> {/* closes person group */}
            <g id="spotlight">
              <defs>
                <linearGradient id="a" x1="106.0809" x2="106.0809" y2="353.0612" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#fff"/>
                  <stop offset="0.1244" stopColor="#fff" stopOpacity="0.8137"/>
                  <stop offset="0.3042" stopColor="#fff" stopOpacity="0.5696"/><stop offset="0.4768" stopColor="#fff" stopOpacity="0.3661"/>
                  <stop offset="0.6372" stopColor="#fff" stopOpacity="0.2075"/>
                  <stop offset="0.7827" stopColor="#fff" stopOpacity="0.0937"/>
                  <stop offset="0.9084" stopColor="#fff" stopOpacity="0.0245"/>
                  <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path id="spotlightpath" d="M106.0809,0,6.0487,243.3674C-15.45,295.6717,23.0093,353.0612,79.56,353.0612h53.0427c56.55,0,95.01-57.3895,73.5108-109.6938Z"/>
            </g> {/* closes spotlight group */}
          </g>  {/* closes full_person group */}
        </g>  {/* closes init_scene group */}
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

// a function to change the person SVG depending on SIR state:
export function determineSIR(sirState){
    // find the correct body parts:
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

    let susMouth = d3.select("#susMouth").attr('d'),
        infMouth = d3.select("#infMouth").attr("d"),
        recMouth = d3.select("#recMouth").attr('d'),
        baseMouth = d3.select("#baseMouth").attr('d');

    // transitions: this one is a slower one with circle-based velocity
    let t = d3.transition()
            .duration(400)
            .ease(d3.easeCircleOut)
    
    // this one is shorter and moves with linear velocity
    let t2 = d3.transition()
               .duration(200)
               .ease(d3.easeLinear)

    // lightnings. make sure they aren't visible by turning off the opacity
    let lightnings = d3.select("#lightnings")
    lightnings.style("opacity", 0)

    // conditional loops to toggle SIR state AND lightning visibility
    if (sirState === "infectious"){
        toInf()
        lightnings.transition(t2).style("opacity", 1)   
    }
     else if (sirState === "recovered"){
        lightnings.transition(t2).style("opacity", 0)
        toRec()
    } else {
        lightnings.transition(t2).style("opacity", 0)
        toSus()
    }

    // individual functions to interpolate and 
    // transition between different SVGs:
    function toRec(){
      // console.log("toRec")
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
    }

    function toInf(){
      // console.log("toInf")
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
      // console.log("toSus")
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
    }
       
}

// add the number of tiles desired
export function addTiles(number){
  let tilegroup = document.querySelector(".tilegroup")

  let tile = document.querySelector(".tile")
  tile.id="tile1"    
  
  for (let i=1; i < number; i++){
    let nextTile = tile.cloneNode(true)
    nextTile.id = "tile"+ number
    tilegroup.appendChild(nextTile)
  }
}