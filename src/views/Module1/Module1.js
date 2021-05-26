import React, {useRef, useEffect, useState} from 'react';
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Styles.css';
import sirBlue from "assets/img/module1/blue_tiles.svg";
import SPath from "assets/img/module1/S-path.svg";
import IPath from "assets/img/module1/I-path.svg";
import RPath from "assets/img/module1/R-path.svg";

export default function Module1(props) {
  const headerS = "S: Susceptible";
  const headerI = "I: Infectious";
  const headerR = "R: Removed";
  const textS = "The number of susceptible individuals. When a susceptible and an infectious individual come into \"infectious contact\", the susceptible individual contracts the disease and transitions to the infectious compartment. ";
  const textI = "The number of infectious individuals. These are individuals who have been infected and are capable of infecting susceptible individuals.";
  const textR = "the number of removed (and immune) or deceased individuals. These are individuals who have been infected and have either recovered from the disease and entered the removed compartment, or died. It is assumed that the number of deaths is negligible with respect to the total population. This compartment may also be called \"recovered\" or \"resistant\". ";

  const [stepSIR, setSIR] = useState(sirBlue);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);
    gsap.to("#init_scene", {scaleX: 2.6, scaleY: 2.6, x:40, y: 150});

    var legs_walking_tl = gsap.timeline({repeat: -1});
    legs_walking_tl.pause();
    legs_walking_tl.addLabel("move_legs_1")
      .to(".left_leg_group", {duration:0.5, rotation:15}, "move_legs_1")
      .to(".right_leg_group", {duration:0.5, rotation:-15}, "move_legs_1")
      .to(".left_arm", {duration:0.5, rotation:10}, "move_legs_1")
      .to(".right_arm", {duration:0.5, rotation:-10}, "move_legs_1");

    legs_walking_tl.addLabel("move_legs_2")
      .to(".left_leg_group", {duration:0.5, rotation:-15}, "move_legs2")
      .to(".right_leg_group", {duration:0.5, rotation:15 }, "move_legs2")
      .to(".left_arm", {duration:0.5, rotation:-10}, "move_legs_2")
      .to(".right_arm", {duration:0.5, rotation:10}, "move_legs_2");

    legs_walking_tl.addLabel("move_legs_0")
      .to(".left_leg_group", {duration:0.15, rotation:0, ease: "none"}, "move_legs_0")
      .to(".right_leg_group", {duration:0.15, rotation:0, ease: "none"}, "move_legs_0")
      .to(".left_arm", {duration:0.15, rotation:0, ease: "none"}, "move_legs_0")
      .to(".right_arm", {duration:0.15, rotation:0, ease: "none"}, "move_legs_0");

    var master_tl = gsap.timeline();
    //master_tl.add(legs_walking_tl);

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
          if(currScroll > step_1.offsetTop && currScroll < step_2.offsetTop) {
            setSIR(SPath);
            document.querySelector("#scrollText").textContent = textS;
            document.querySelector("#scrollHeader").textContent = headerS;
            legs_walking_tl.pause();
          }
          else if(currScroll > step_2.offsetTop && currScroll < step_3.offsetTop) {
            setSIR(IPath);
            document.querySelector("#scrollText").textContent = textI;
            document.querySelector("#scrollHeader").textContent = headerI;
            legs_walking_tl.pause();
          }
          else if(currScroll > step_3.offsetTop) {
            setSIR(RPath);
            document.querySelector("#scrollText").textContent = textR;
            document.querySelector("#scrollHeader").textContent = headerR;
            legs_walking_tl.pause();
          }
          else if(currScroll < step_1.offsetTop) {
            setSIR(sirBlue);
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
  <div class="mainContainer">
    <h1>
      Module 1: What is SIR?
    </h1>
    <div className="textContainer">
      <p>We will begin this section by learning how to break up a disease’s natural history into discrete steps. </p>
      <p>The SIR model is one of the simplest compartmental models, and many models are derivatives of this basic form. The model consists of three compartments: </p>
    </div>
    <div className="scrollingContainer">
      <svg id="module1-1" width={600} height={400} viewBox="0 0 2000 1600">
        <image x="-60" y="800" width="1900" height="800" href={stepSIR}></image>

        <g id="init_scene">
          <g className="full_person">
          <image href="https://raw.githubusercontent.com/Coldstream-Louis/homework8/master/spotlight.png" height="200" width="200" x="-60" y="-100"/>

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

          </g>
        </g>
      </svg>
      <div className="scrollTextContainer">
        <h2 id="scrollHeader">{headerS}</h2>
        <p id="scrollText">{textS}</p>
      </div>

      <div className="markers" style={{height: "200vh"}}>
        <div className="marker" id="step_s" style={{height: "75vh"}}></div>
        <div className="marker" id="step_i" style={{height: "75vh"}}></div>
        <div className="marker" id="step_r" style={{height: "75vh"}}></div>
      </div>

    </div>
    </div>
  </>);
}