// import React useEffect and useState (useState currently not used)
import React, {useEffect, useState, useRef} from 'react';

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

// import GSAP and necessary plugins
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import styles (svg)
import './Mod1Styles.css';
// @material-ui/core components
// make styles
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/mod1styles.js";

// import compartmental model svg
import SvgImg from './svgImg.js'

// import three functions: determineSIR, addTiles, and determineTileColor from external JS sources
import {determineSIR} from 'utilityfunctions/determineSIR.js'
import {addTiles} from 'utilityfunctions/addTiles.js'
import {determineTileColor} from "utilityfunctions/determineTileColor.js"

const useStyles = makeStyles(styles);

export default function Module1() {
  // classes = styles; each style called by using {classes._classname_}
  const classes = useStyles();
  // useState to set if figure is on S, I, or R
  // const [stepSIR, setSIR] = useState(sirBase);

  // useRef to make sure each page loads its own content
  const ref = useRef(null)

  useEffect(() => {
    // bump position to top of page
    window.scrollTo(0, 0)
    // the plugins to be used:
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(CSSPlugin);

    // refresh scrolltrigger (supposedly helps prevent funkiness)
    ScrollTrigger.refresh();

    // grab the current content
    const elem = ref.current

    // place entire scene in correct position:
    gsap.to(elem.querySelector("#init_scene"), {scaleX: 2.6, scaleY: 2.6, x:40, y: 0});

    // add tiles to SVG so there are 3 total tiles
    addTiles("moduleSvg", 3)
    let allTiles = gsap.utils.toArray(".tile")

    // programmatically set each tile the correct distance apart
    for (let i=0; i < allTiles.length; i++){
      let myX = 0
      let myY = 360
      let scale = 2.5
      let xIncrement = 90 * 1.5 * scale
      let yIncrement = 50 * 1.5 * scale
      gsap.set(allTiles[i],{
        x: myX + xIncrement*i,
        y: myY + yIncrement*i,
        scaleX: scale,
        scaleY: scale,
      })
    }    

    // place things in the correct position and scale them if needed:
    // the tiles are moved:
    gsap.set(elem.querySelector(".tilegroup"),{x:60, y: 400})
    // the spotlight is moved and scaled:
    gsap.set(elem.querySelector("#spotlight"), {x:-50 , y:-150, scaleX:.9, scaleY:.9})
    // the spotlight and person are moved:
    gsap.set(elem.querySelector(".full_person"),{x:-80, y: 10})



    var make_focal_leg_timeline = (rep) => {
      let focal_legs = gsap.timeline({
        repeat: rep, 
        smoothChildTiming: true,
      })
  
      focal_legs.addLabel("move_legs_1")
        .to(".left_leg_group", {
          // duration:15, 
          rotation:15}, "move_legs_1")
        .to(".right_leg_group", {
          // duration:15, 
          rotation:-15}, "move_legs_1")
  
      focal_legs.addLabel("move_legs_2")
        .to(".left_leg_group", {
          // duration:15, 
          rotation:-15}, "move_legs2")
        .to(".right_leg_group", {
          // duration:15, 
          rotation:15 }, "move_legs2")
  
      focal_legs.addLabel("move_legs_0")
        .to(".left_leg_group", {
          // duration:5, 
          rotation:0, ease: "none"}, "move_legs_0")
        .to(".right_leg_group", {
          // duration:5, 
          rotation:0, ease: "none"}, "move_legs_0")
      
      focal_legs.immediateRender = false;
      focal_legs.timeScale(2)
      return focal_legs;
    }
    
    // ### To S ###
    var to_s = gsap.timeline({scrollTrigger: {
      trigger: elem.querySelector(".pre_s"),
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
      toggleActions: "reverse none none reset", 
      markers: true,
    }});

    var focal_to_s = gsap.timeline();
    focal_to_s.to(elem.querySelector('.full_person'), {
      x: -15,
      y: 45,
      duration: 2,
      ease: "none",
      immediateRender: false,
    });
    to_s.add(focal_to_s, "<");
    to_s.add(make_focal_leg_timeline(2), "<");

    ScrollTrigger.create( {
      trigger: elem.querySelector(".step_s"),
      start: "top 20%",
      end: "bottom top",
      onEnter: self => {
        determineTileColor("#tile1", "susceptible");
      },
      onLeaveBack: self => {
        determineTileColor("#tile1", "");
      }
    });

    // ### To I ###
    var to_i = gsap.timeline({scrollTrigger: {
      trigger: elem.querySelector(".step_s"),
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
      toggleActions: "reverse none none reset", 
      markers: true,
    }});

    var focal_to_i = gsap.timeline();
    focal_to_i.to(elem.querySelector('.full_person'), {
      x: 115, 
      y: 114,
      duration: 2,
      ease: "none",
      immediateRender: false,
    });
    to_i.add(focal_to_i, "<");
    to_i.add(make_focal_leg_timeline(2), "<");

    ScrollTrigger.create( {
      trigger: elem.querySelector(".step_i"),
      start: "top 20%",
      end: "bottom top",
      onEnter: self => {
        determineSIR("mod1","infectious");
        determineTileColor("#tile2", "infected");
      },
      onLeaveBack: self => {
        determineSIR("mod1","susceptible");
        determineTileColor("#tile2", "");
      }
    });

     // ### To R ######
     var to_r = gsap.timeline({scrollTrigger: {
      trigger: elem.querySelector(".step_i"),
      start: "top 20%",
      end: "bottom top",
      scrub: 1,
      toggleActions: "reverse none none reset", 
      markers: true,
    }});

    var focal_to_r = gsap.timeline();
    focal_to_r.to(elem.querySelector('.full_person'), {
      x: 235, 
      y: 186,
      duration: 2,
      ease: "none",
      immediateRender: false,
    });
    to_r.add(focal_to_r, "<");
    to_r.add(make_focal_leg_timeline(2), "<");

    ScrollTrigger.create( {
      trigger: elem.querySelector(".step_r"),
      start: "top 20%",
      end: "bottom top",
      onEnter: self => {
        determineSIR("mod1","recovered");
        determineTileColor("#tile3", "recovered");
      },
      onLeaveBack: self => {
        determineSIR("mod1","infectious");
        determineTileColor("#tile3", "");
      }
    });



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
      Module 1: What is SIR?
    </h1>
    <div className={classes.textContainer}>
      <p>We will begin this section by learning how  to break up a disease’s natural history into discrete steps. </p>
      <p>Broadly, we can think of existing in one of three states:</p>
    </div> {/* closes textContainer */}
    <div id = "moduleSvgDiv" className={classes.scrollingContainer}>
      <svg id="moduleSvg" width="70%" height="50%" viewBox="0 0 2000 1600">
        <g className="tilegroup">
        </g> 
        <g id="init_scene">
          <g className="full_person">
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
                <path id="infRArmLower" className="rightarm st2" d="M59.6,131.2c-0.3,0-0.6,0-0.9-0.1L29,123.9c-2.1-0.5-3.5-2.7-2.9-4.8
                    c0.5-2.1,2.7-3.5,4.8-2.9l29.6,7.2c2.1,0.5,3.5,2.7,2.9,4.8C63,130,61.4,131.2,59.6,131.2z"/>
                  <path id="infRArmUpper" className="rightarm st2" d="M30,124c-1.6,0-3.1-1-3.7-2.6l-9.2-24.3c-0.8-2.1,0.3-4.4,2.3-5.2
                    c2.1-0.8,4.4,0.3,5.2,2.3l9.2,24.3c0.8,2.1-0.3,4.4-2.3,5.2C30.9,124,30.4,124,30,124z"/>
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
                <path id="recLArmUpper" className="leftarm st8" d="M106.6,71.5c-0.2,0-0.4,0-0.7-0.1c-2.2-0.4-3.7-2.4-3.3-4.6l5-30
                  c0.4-2.2,2.4-3.7,4.6-3.3c2.2,0.4,3.7,2.4,3.3,4.6l-5,30C110.3,70.1,108.6,71.5,106.6,71.5z"/>
                <path id="recLArmLower" className="leftarm st8" d="M78.1,86.5c-1.4,0-2.8-0.8-3.6-2.2c-1-2-0.2-4.4,1.7-5.4l27-14l5-28.9c0.4-2.2,2.4-3.6,4.6-3.3
                  c2.2,0.4,3.6,2.4,3.3,4.6l-5.6,32.9L79.9,86.1C79.3,86.4,78.7,86.5,78.1,86.5z"/>
                <path id="recBody" className="st9" d="M64.3,55c31.4,22.7,49.3,86.1,11.6,111.7c-31.4,22.6-76.8-1.2-76.3-43.1C0,97.2,15.4,65.4,33.7,54.3
                  C41.8,48.4,55.8,48.5,64.3,55"/>
                <path id="recRArmLower" className="rightarm st8" d="M15.2,95.9c-1,0-2-0.4-2.8-1.2L-8.1,74.3c-1.6-1.6-1.6-4.1,0-5.7
                  c1.6-1.6,4.1-1.6,5.7,0L18,89.1c1.6,1.6,1.6,4.1,0,5.7C17.3,95.5,16.2,95.9,15.2,95.9z"/>
                <path id="recRArmUpper" className="rightarm st8" d="M-5.3,75.5c-1.7,0-3.3-1.1-3.8-2.8L-17,46.9c-0.7-2.1,0.5-4.4,2.6-5
                  c2.1-0.7,4.4,0.5,5,2.6l7.9,25.7c0.7,2.1-0.5,4.4-2.6,5C-4.5,75.4-4.9,75.5-5.3,75.5z"/>
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
                <path id="susLArmUpper" className="leftarm st8" d="M92.2,110.7c-1.4,0-2.7-0.7-3.4-1.9l-16.2-27c-1.1-1.9-0.5-4.4,1.4-5.5
                    c1.9-1.1,4.4-0.5,5.5,1.4l16.2,27c1.1,1.9,0.5,4.4-1.4,5.5C93.6,110.5,92.9,110.7,92.2,110.7z"/>
                <path id="susBody" className="st9" d="M64.8,54.9c31.4,22.7,49.3,86.1,11.5,111.7C45,189.2-0.5,165.4,0,123.5
                  c0.4-26.4,15.7-58.2,34.1-69.3C42.3,48.3,56.3,48.4,64.8,54.9"/>
                <path id="susLArmLower" className="leftarm st8" d="M107.8,136.6c-1.4,0-2.7-0.7-3.4-1.9l-15.6-25.9c-1.1-1.9-0.5-4.4,1.4-5.5
                  c1.9-1.1,4.3-0.5,5.5,1.4l15.6,26c1.1,1.9,0.5,4.4-1.4,5.5C109.2,136.4,108.5,136.6,107.8,136.6z"/>
                <path id="susRArmUpper" className="rightarm st8" d="M30.2,121.9c-1.6,0-3-0.9-3.7-2.4l-9.8-22.9c-0.9-2,0.1-4.4,2.1-5.2
                  c2-0.9,4.4,0.1,5.2,2.1l9.8,22.9c0.9,2-0.1,4.4-2.1,5.2C31.3,121.8,30.7,121.9,30.2,121.9z"/>
                <path id="susRArmLower" className="rightarm st8" d="M54,138.4c-0.8,0-1.6-0.2-2.3-0.7l-23.8-16.5c-1.8-1.3-2.3-3.7-1-5.6
                  c1.3-1.8,3.7-2.3,5.6-1l23.8,16.5c1.8,1.3,2.3,3.7,1,5.6C56.6,137.8,55.3,138.4,54,138.4z"/>
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
                <path id="baseLArmLower" className="leftarm st8" d="M107.8,136.6c-1.4,0-2.7-0.7-3.4-1.9l-15.6-25.9c-1.1-1.9-0.5-4.4,1.4-5.5
                  c1.9-1.1,4.3-0.5,5.5,1.4l15.6,26c1.1,1.9,0.5,4.4-1.4,5.5C109.2,136.4,108.5,136.6,107.8,136.6z"/>
                <path id="baseLArmUpper" className="leftarm st8" d="M92.2,110.7c-1.4,0-2.7-0.7-3.4-1.9l-16.2-27c-1.1-1.9-0.5-4.4,1.4-5.5
                  c1.9-1.1,4.4-0.5,5.5,1.4l16.2,27c1.1,1.9,0.5,4.4-1.4,5.5C93.6,110.5,92.9,110.7,92.2,110.7z"/>
                <path id="baseBody" className="st9" d="M64.8,54.9c31.4,22.7,49.3,86.1,11.5,111.7C45,189.2-0.5,165.4,0,123.5
                  c0.4-26.4,15.7-58.2,34.1-69.3C42.3,48.3,56.3,48.4,64.8,54.9"/>
                <path id="baseRArmUpper" className="rightarm st8" d="M30.2,121.9c-1.6,0-3-0.9-3.7-2.4l-9.8-22.9c-0.9-2,0.1-4.4,2.1-5.2
                  c2-0.9,4.4,0.1,5.2,2.1l9.8,22.9c0.9,2-0.1,4.4-2.1,5.2C31.3,121.8,30.7,121.9,30.2,121.9z"/>
                <path id="baseRArmLower" className="rightarm st8" d="M54,138.4c-0.8,0-1.6-0.2-2.3-0.7l-23.8-16.5c-1.8-1.3-2.3-3.7-1-5.6
                  c1.3-1.8,3.7-2.3,5.6-1l23.8,16.5c1.8,1.3,2.3,3.7,1,5.6C56.6,137.8,55.3,138.4,54,138.4z"/>
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
            <linearGradient id="lightbeam_1_" gradientUnits="userSpaceOnUse" x1="108.5714" y1="388.7064" x2="108.5714" y2="12.6929">
                <stop  offset="0" id="lightstop1" />
                <stop  offset="1" id="lightstop2" />
              </linearGradient>
              <path id="lightbeam" className="lightbeam_st" d="M163.9,402.5H53.3C5,402.5-12.7,310.4,9.4,235L78,0h61.2l68.6,235
                C229.8,310.4,212.2,402.5,163.9,402.5z"/>
            </g> {/* closes spotlight group */}
          </g>  {/* closes full_person group */}
        </g>  {/* closes init_scene group */}
      </svg>

      <div className="" id="" >

        <div style={{height: "25vh"}} className="pre_s"></div>

        <div className="step_s" id="" style={{height: "60vh", width:"40vw"}}>
          <Card className={classes.card}>
            <CardHeader className={classes.stepHeader}>
              <h2 className={classes.stepH2}>S: Susceptible</h2>
            </CardHeader>
            <CardBody>
            <p className={classes.stepP}><b>Susceptible (S)</b> to an infection.</p>
            </CardBody>
          </Card>
        </div>

        <div className="step_i" id="" style={{height: "60vh", width:"40vw"}}>
          <Card className={classes.card}>
            <CardHeader className={classes.stepHeader}>
              <h2 className={classes.stepH2}>I: Infectious</h2>
            </CardHeader>
            <CardBody>
            <p className={classes.stepP}>Being <b>infected</b> and <b>infectious (I)</b>.</p>
            </CardBody>
          </Card>
        </div>

        <div className="step_r" id="" style={{height: "60vh", width:"40vw"}}>
          <Card className={classes.card}>
              <CardHeader className={classes.stepHeader}>
                <h2 className={classes.stepH2}>R: Removed</h2>
              </CardHeader>
              <CardBody>
              <p className={classes.stepP}>And <b>recovered</b> from the infection and <b>removed (R)</b> from the group of people who are susceptible to the illness.</p>
              </CardBody>
            </Card>          
        </div>

        <div style={{height: "75vh", width:"40vw"}}>

        </div>
      </div> {/* closes marker */}
    </div> {/* closes scrollingContainer */}
    <p className={classes.moduleText}>We will discuss situations in which this isn't always the case later, but for our purposes now, these three categories are sufficient.</p>
    <p className={classes.moduleText}>This type of categorization is the foundation of a type of models called a <b>compartmental model</b>.</p>
    <SvgImg/>
    <p className={classes.moduleText}>These models are handy because they are easily adapted to simulate different transmission scenarios.</p>
    <p className={classes.moduleText}>The model type most often used is a <b>Susceptible, Infected, Recovered</b> Model or an <b>SIR Model</b>.</p>
    
    {/* <Link to="/Module2" className={classes.navLink}> */}
        <Button component={Link} to ="/Module2" size="lg" round>
          Go to Module 2 &#8594;
        </Button>
    {/* </Link> */}
  </div> {/* closes mainContainer */}
  </div>
  </>);
}