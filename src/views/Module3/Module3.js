// import React useEffect and useState (useState currently not used)
import React, {useEffect, useState, useRef} from 'react';

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

// import GSAP and necessary plugins
import {gsap, CSSPlugin} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function Module2() {


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
      Module 3: Video
    </h1>
    <div className="textContainer">
      <p>Video stuff</p>
    </div> {/* closes textContainer */}
  <Button component={Link} to ="/Module2" size="lg" round>
  &#8592; Go back to Module 2
  </Button>
  </div> {/* closes mainContainer */}
  </div>
  </>);
}