import React, {useEffect, useState} from 'react';
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Styles.css';
import sirBlue from "assets/img/module1/blue_tiles.svg";
import SPath from "assets/img/module1/S-path.svg";
import IPath from "assets/img/module1/I-path.svg";
import RPath from "assets/img/module1/R-path.svg";

export default function Module1() {
  const notSick = <g id="person">
      <polyline id="right_arm" className="right_arm st8" points="75.4,87.9 93.6,116.2 106.8,135.5 	"/>
      <g className="right_leg_group st9">
          <polyline id="left_leg_2_" className="st1" points="29.7,158.3 30,194.5 30.7,216.7 			"/>
          <path id="left_foot_2_" className="st2" d="M35.1,219.4l-4.3-2.4c-1-0.6-1.4-1.9-0.8-2.9l0,0c0.6-1,1.9-1.4,2.9-0.8l4.3,2.5
            c1,0.6,1.4,1.9,0.8,2.9l0,0C37.4,219.7,36.1,220,35.1,219.4z"/>
      </g>
      <g className="left_leg_group st9">
        <polyline id="left_leg_3_" className="st1" points="68.1,158.3 68.4,194.5 69.1,216.7 		"/>
        <path id="left_foot_1_" className="st2" d="M74.3,219.4L70,217c-1-0.6-1.4-1.9-0.8-2.9l0,0c0.6-1,1.9-1.4,2.9-0.8l4.3,2.5
          c1,0.6,1.4,1.9,0.8,2.9l0,0C76.6,219.7,75.3,220,74.3,219.4z"/>
      </g>
      <g id="belly_1_" className="st9">
          <path className="st3" d="M64,57.7c31.4,22.7,49.3,86.1,11.5,111.7C44.2,192-1.3,168.2-0.8,126.3C-0.4,99.9,14.9,68.1,33.3,57
            C41.5,51.1,55.5,51.2,64,57.7"/>
      </g>
      <g id="head_1_" className="st9">
        <path className="st4" d="M78,42.7c-0.2,9.6-5.3,17.5-14.4,22.2c-5.7,2.9-12,4.3-18.4,4.3c-0.6,0-1.2,0-1.7,0C36.6,69,30,67,24.3,63.2
          c-7-4.4-11.2-12.1-11.3-20.3l0,0V30c0.2-9.4,5.2-17.2,13.9-22c11.6-6.3,27.8-6,38.5,0.7C73.1,13.3,78,21.6,78,29.8V42.7z"/>
      </g>
      <path id="left_arm" className="left_arm st8" d="M19,96.2L30.6,122l0,0l22.3,15"/>
      <path id="Hair_1_" className="st10" d="M76.3,20c-4.2-9.3-15.1-16.2-27-18.1C28.8-1.2,14.4,14.3,13,28.1c-0.4,4.2-1,9.5,0,9.7
        c1.3,0.3,4.2-9.1,5.8-8.8s0.5,11.1,1.6,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
        c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.4-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
        C78.9,29.9,78.5,24.8,76.3,20z"/>
    </g>
  const isSick = <g id="person">
    <line id="l_arm" className="st11" x1="71.6" y1="88.9" x2="89.5" y2="116.9"/>

    <g className="right_leg_group st9">
      <line id="right_leg_1_" className="st12" x1="30.8" y1="158.2" x2="30.8" y2="216"/>
      <path id="right_foot_1_" className="st2" d="M31.6,217.5l3.3,1.9c1,0.6,2.3,0.2,2.9-0.7l0,0l0,0c0.6-1,0.2-2.3-0.7-2.9l-3.4-2
        c-1-0.6-2.3-0.2-2.9,0.7l0,0C30.3,215.6,30.5,216.9,31.6,217.5L31.6,217.5z"/>
    </g>
    <g className="left_leg_group st9">
      <line id="left_leg" className="st12" x1="68.9" y1="158.8" x2="68.9" y2="216.6"/>
      <path id="left_foot" className="st2" d="M70.8,212.4l4.2,2.4c1,0.6,1.4,1.9,0.7,2.9l0,0c-0.6,1-1.9,1.4-2.9,0.7l0,0l0,0l-4.2-2.4
        c-1-0.6-1.3-1.9-0.7-2.9l0,0C68.4,212.1,69.7,211.8,70.8,212.4L70.8,212.4z"/>
    </g>
    <g id="belly" className="st9">
      <path className="st13" d="M94.5,81c1.9,12.1-12.7,15.5-16.1,33.1c-3.7,19.2,7.9,26.8,2.3,40.1c-5.2,12-21.7,15.6-36.4,12.7
        c-18.5-3.6-32.5-18.7-34.1-40.5c-1.3-7.5-2.9-24,5.5-41.2c3.2-6.6,8.5-17.2,20.8-23.4c14.8-7.4,29.4-2.9,33.1-1.7
        C72.6,61.2,92.2,67.7,94.5,81z"/>
    </g>
    <line id="l_arm_lower" className="st11" x1="69.5" y1="124.5" x2="89.4" y2="116.1"/>
    <path id="r_arm" className="st11" d="M18.1,97.2l9.5,25.4c0,0.1,0.1,0.2,0.2,0.2l28.2,6.2"/>
    <path id="head" className="st14" d="M35.3,41.7L35.3,41.7l3.1-12.3c2.4-8.9,9.1-15.2,18.5-17.8c12.6-3.3,28,0.7,36.6,9.8
      c6.2,6.2,8.9,15.2,6.9,23.2l-3,12.3c-2.5,9.2-9.3,15.6-19.1,17.8c-6.1,1.4-12.5,1.3-18.6-0.2c-0.6-0.2-1.1-0.2-1.6-0.5
      c-6.8-1.9-12.8-5.7-16.8-10.3C35.6,57.9,33.5,49.6,35.3,41.7z"/>
    <path id="mouth" className="st15" d="M67.7,61.6c2-4.9,7-7.6,11.6-6.8c3.8,0.7,6.9,3.5,8,7.2"/>
    <g id="sick_face" className="st16">
      <path className="st17" d="M35.6,42.3l3-12.3c2.4-9,9.1-15.2,18.5-17.8c12.7-3.3,28,0.8,36.6,9.8c6.2,6.2,8.9,15.2,6.9,23.2l-3,12.3
        l0,0c-2.5,9.2-9.2,15.6-19.1,17.9C72.4,76.9,66,76.8,60,75.3c-0.6-0.2-1.1-0.3-1.6-0.5c-6.8-2-12.8-5.7-16.8-10.3
        C36,58.6,33.7,50.3,35.6,42.3z"/>
    </g>
    <path id="hair" className="st18" d="M101.2,34.8c-1.8-10-10.5-19.1-21.4-23.8C60.9,3.2,43.6,14.6,39,27.5c-1.5,3.9-3.2,8.8-2.3,9.3
      c1.2,0.6,6.2-7.8,7.6-7.1c1.5,0.7-2.2,10.7-1.1,11.2c0.7,0.3,3.2-3.6,4.9-6.9c1.8-3.5,2.3-5.6,3-5.6c1.5,0.1,1.1,7.4,3.3,7.9
      c2.8,0.7,5.9-9.7,11.4-9.7c2.6,0,2.6,2.4,7.6,4.9c1.7,0.9,6.2,3.1,11.4,2.2c4.6-0.7,5.3-3.3,7.8-2.8c5.4,1.1,6.4,14.1,7.9,13.9
      C101.3,44.8,102.2,39.9,101.2,34.8z"/>
    <polygon id="lightening_4" className="st19" points="122.6,100.6 119,97.7 129.4,94.1 126.3,89 111.1,96.5 113.7,98.9 105.9,104.2 	"/>
    <polygon id="lightening_3" className="st19" points="-10.5,79.6 -12.2,84.3 -19.5,75 -23.6,79.9 -10.8,92.8 -9.2,89.3 -1.1,95.5 	"/>
    <polygon id="lightening_2" className="st19" points="108.7,145 109.1,140.5 117.9,146.9 120.2,141.5 105.6,133.2 105,136.7 96.3,133.2 
        "/>
    <polygon id="lightening_1" className="st19" points="-6.9,146.2 -3.4,149.2 -13.8,152.5 -10.8,157.7 4.6,150.7 1.9,148.1 10,143.1 	"/>
</g>
  const recoveredSick = <g id="person">
    <polyline id="l_arm_2" className="st0" points="76.3,84.5 105.1,69.6 110.4,38.7 	"/>
    <g className="right_leg_group">
      <line id="right_foot_2_" className="st1" x1="30.6" y1="157.4" x2="30.6" y2="215.8"/>
      <path id="right_foot" className="st2" d="M34.9,219.5l-3.6-2.1c-1-0.6-1.3-1.8-0.8-2.8l0.1-0.1c0.6-1,1.8-1.3,2.8-0.8l3.6,2.1
        c1,0.6,1.3,1.8,0.8,2.8l-0.1,0.1C37.2,219.7,35.9,220,34.9,219.5z"/>
    </g>
    <g className="left_leg_group">
      <line id="left_leg_1_" className="st1" x1="70.2" y1="158.7" x2="70.2" y2="217.2"/>
      <path id="left_foot_3_" className="st2" d="M74.2,219.1l-4.4-2.5c-1-0.6-1.3-1.8-0.8-2.8l0.1-0.1c0.6-1,1.8-1.3,2.8-0.8l4.4,2.5
        c1,0.6,1.3,1.8,0.8,2.8l-0.1,0.1C76.5,219.4,75.2,219.7,74.2,219.1z"/>
    </g>
    <path id="body" className="st3" d="M62.6,57c31.4,22.7,49.3,86.1,11.6,111.7c-31.4,22.6-76.8-1.2-76.3-43.1
      c0.4-26.4,15.8-58.2,34.1-69.3C40.1,50.4,54.1,50.5,62.6,57"/>
    <path id="head_2_" className="st4" d="M76.6,42c-0.2,9.6-5.3,17.5-14.5,22.2c-5.7,2.9-12,4.3-18.4,4.3c-0.6,0-1.2,0-1.7,0
      c-6.8-0.2-13.5-2.2-19.1-6c-7-4.4-11.2-12.1-11.3-20.3l0,0V29.3c0.2-9.4,5.2-17.2,13.9-22C37.1,1,53.3,1.3,64,8
      c7.7,4.6,12.6,12.8,12.6,21.1L76.6,42z"/>
    <polyline id="r_arm_2" className="st0" points="13.8,94.1 -6.8,75.3 -14.3,47.4 	"/>
    <path id="mouth_1_" className="st5" d="M71.7,46.2c-1.9,6.7-8,11.1-14.3,10.7c-5.1-0.4-9.6-3.6-11.7-8.3"/>
    <path id="hair_1_" className="st6" d="M74.9,19.3C70.7,10,59.8,3,47.9,1.2C27.4-1.9,13,13.6,11.6,27.4c-0.4,4.2-1,9.5,0,9.7
      c1.3,0.3,4.2-9.1,5.8-8.8s0.5,11.1,1.7,11.2c0.8,0.1,2.3-4.4,3.1-7.9c0.9-3.9,0.8-6.1,1.6-6.2c1.5-0.3,2.8,7,5.3,7
      c3,0.1,3.5-11,8.8-12.3c2.5-0.6,3.2,1.7,8.8,2.9c1.9,0.4,6.9,1.5,11.7-0.6c4.3-1.9,4.4-4.6,7-4.7c5.6-0.2,9.8,12.2,11.2,11.7
      C77.5,29.2,77.1,24.1,74.9,19.3z"/>
  </g>
  const headerS = "S: Susceptible";
  const headerI = "I: Infectious";
  const headerR = "R: Removed";
  const textS = "The number of susceptible individuals. When a susceptible and an infectious individual come into \"infectious contact\", the susceptible individual contracts the disease and transitions to the infectious compartment. ";
  const textI = "The number of infectious individuals. These are individuals who have been infected and are capable of infecting susceptible individuals.";
  const textR = "The number of removed (and immune) or deceased individuals. These are individuals who have been infected and have either recovered from the disease and entered the removed compartment, or died. It is assumed that the number of deaths is negligible with respect to the total population. This compartment may also be called \"recovered\" or \"resistant\". ";
  const [stepSIR, setSIR] = useState(sirBlue);
  const [sickNot, setSick] = useState(notSick);

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
      .to(".left_arm", {duration:0.3, rotation:10}, "move_legs_1")
      .to(".right_arm", {duration:0.3, rotation:-10}, "move_legs_1");

    legs_walking_tl.addLabel("move_legs_2")
      .to(".left_leg_group", {duration:0.3, rotation:-15}, "move_legs2")
      .to(".right_leg_group", {duration:0.3, rotation:15 }, "move_legs2")
      .to(".left_arm", {duration:0.3, rotation:-10}, "move_legs_2")
      .to(".right_arm", {duration:0.3, rotation:10}, "move_legs_2");

    legs_walking_tl.addLabel("move_legs_0")
      .to(".left_leg_group", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      .to(".right_leg_group", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      .to(".left_arm", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0")
      .to(".right_arm", {duration:0.1, rotation:0, ease: "none"}, "move_legs_0");

  
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
            setSick(notSick);
            document.querySelector("#scrollText").textContent = textS;
            document.querySelector("#scrollHeader").textContent = headerS;
            legs_walking_tl.pause();
          }
          else if(currScroll >= step_2.offsetTop && currScroll < step_3.offsetTop) {
            setSIR(IPath);
            document.querySelector("#scrollText").textContent = textI;
            document.querySelector("#scrollHeader").textContent = headerI;
            legs_walking_tl.pause();
            setSick(isSick);
          }
          else if(currScroll >= step_3.offsetTop) {
            setSIR(RPath);
            setSick(recoveredSick);
            document.querySelector("#scrollText").textContent = textR;
            document.querySelector("#scrollHeader").textContent = headerR;
            legs_walking_tl.pause();
          }
          else if(currScroll < step_1.offsetTop) {
            setSIR(sirBlue);
            setSick(notSick);
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
            {sickNot}
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
