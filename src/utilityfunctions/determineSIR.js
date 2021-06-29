import * as d3 from "d3";
import { interpolate } from "flubber";

// a function to change the person SVG depending on SIR state:
export function determineSIR(sirState){
  // let bodyParts = ["Body", "Face", "Hair", "Mouth", "RArmUpper", "RArmLower", "LArmUpper", "LArmLower"]
  // let stagesOfSir = ["sus", "inf", "rec", "base"]
  // let allParts = []
  // for (let i in stagesOfSir){
  //   let stage = stagesOfSir[i];
  //   for (let p of bodyParts){
  //     let renderedElement = `#${stage}${p}`
  //     allParts.push(renderedElement)
  //   }
  // }
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

    let susRArmUpper = d3.select("#susRArmUpper").attr('d'),
        infRArmUpper = d3.select("#infRArmUpper").attr("d"),
        recRArmUpper = d3.select("#recRArmUpper").attr('d'),
        baseRArmUpper = d3.select("#baseRArmUpper").attr('d');
    
    let susRArmLower = d3.select("#susRArmLower").attr('d'),
        infRArmLower = d3.select("#infRArmLower").attr("d"),
        recRArmLower = d3.select("#recRArmLower").attr('d'),
        baseRArmLower = d3.select("#baseRArmLower").attr('d');

    let susLArmUpper = d3.select("#susLArmUpper").attr('d'),
        infLArmUpper = d3.select("#infLArmUpper").attr("d"),
        recLArmUpper = d3.select("#recLArmUpper").attr('d'),
        baseLArmUpper = d3.select("#baseLArmUpper").attr('d');
    
    let susLArmLower = d3.select("#susLArmLower").attr('d'),
        infLArmLower = d3.select("#infLArmLower").attr("d"),
        recLArmLower = d3.select("#recLArmLower").attr('d'),
        baseLArmLower = d3.select("#baseLArmLower").attr('d');

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
              return interpolate(baseFace, recFace)})
          d3.select("#baseBody")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseBody, recBody)})
          d3.select("#baseHair")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseHair, recHair)})
          d3.select("#baseMouth")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseMouth, recMouth)}) 
          d3.select("#baseRArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmUpper, recRArmUpper)}) 
          d3.select("#baseRArmLower")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmLower, recRArmLower)})
          d3.select("#baseLArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmUpper, recLArmUpper)}) 
          d3.select("#baseLArmLower")
          .lower()
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmLower, recLArmLower)})                                  
    }

    function toInf(){
        // console.log("toInf")
          d3.select("#baseFace")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseFace, infFace)})
          d3.select("#baseBody")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseBody, infBody)})
          d3.select("#baseHair")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseHair, infHair)})
          d3.select("#baseMouth")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseMouth, infMouth)})
          d3.select("#baseRArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmUpper, infRArmUpper)}) 
          d3.select("#baseRArmLower")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmLower, infRArmLower)})
          d3.select("#baseLArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmUpper, infLArmUpper)}) 
          d3.select("#baseLArmLower")
          .raise()
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmLower, infLArmLower)})      
    }

    function toSus(){
        // console.log("toSus")
        d3.select("#baseFace")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseFace, susFace)})
        d3.select("#baseBody")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseBody, susBody)})
        d3.select("#baseHair")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseHair, susHair)})
        d3.select("#baseMouth")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseMouth, susMouth)})
        d3.select("#baseRArmUpper")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseRArmUpper, susRArmUpper)}) 
        d3.select("#baseRArmLower")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseRArmLower, susRArmLower)})
        d3.select("#baseLArmUpper")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseLArmUpper, susLArmUpper)}) 
        d3.select("#baseLArmLower")
        .lower()
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseLArmLower,susLArmLower)})       
    }
}

// a function to change the perpendicular person SVG depending on SIR state:
export function determineSIRPerp(sirState){
    // find the correct body parts:
    let susBody = d3.select("#wgSusBody").attr('d'),
        infBody = d3.select("#wgInfBody").attr('d'),
        // recBody = d3.select("#wgRecBody").attr('d'),
        baseBody = d3.select("#wgBaseBody").attr('d');

    let susFace = d3.select("#wgSusFace").attr('d'),
        infFace = d3.select("#wgInfFace").attr('d'),
        // recFace = d3.select("#wgRecFace").attr('d'),
        baseFace = d3.select("#wgBaseFace").attr('d');

    let susHair = d3.select("#wgSusHair").attr('d'),
        infHair = d3.select("#wgInfHair").attr('d'),
        // recHair = d3.select("#wgRecHair").attr('d'),
        baseHair = d3.select("#wgBaseHair").attr('d');

    let susMouth = d3.select("#wgSusMouth").attr('d'),
        infMouth = d3.select("#wgInfMouth").attr("d"),
        // recMouth = d3.select("#wgRecMouth").attr('d'),
        baseMouth = d3.select("#wgBaseMouth").attr('d');

    let susRArmUpper = d3.select("#wgSusRArmUpper").attr('d'),
        infRArmUpper = d3.select("#wgInfRArmUpper").attr("d"),
        // recRArmUpper = d3.select("#wgRecRArmUpper").attr('d'),
        baseRArmUpper = d3.select("#wgBaseRArmUpper").attr('d');
    
    let susRArmLower = d3.select("#wgSusRArmLower").attr('d'),
        infRArmLower = d3.select("#wgInfRArmLower").attr("d"),
        // recRArmLower = d3.select("#wgRecRArmLower").attr('d'),
        baseRArmLower = d3.select("#wgBaseRArmLower").attr('d');

    let susLArmUpper = d3.select("#wgSusLArmUpper").attr('d'),
        infLArmUpper = d3.select("#wgInfLArmUpper").attr("d"),
        // recLArmUpper = d3.select("#wgRecLArmUpper").attr('d'),
        baseLArmUpper = d3.select("#wgBaseLArmUpper").attr('d');
    
    let susLArmLower = d3.select("#wgSusLArmLower").attr('d'),
        infLArmLower = d3.select("#wgInfLArmLower").attr("d"),
        // recLArmLower = d3.select("#wgRecLArmLower").attr('d'),
        baseLArmLower = d3.select("#wgBaseLArmLower").attr('d');

    // transitions: this one is a slower one with circle-based velocity
    let t = d3.transition()
            .duration(400)
            .ease(d3.easeCircleOut)
    
    // this one is shorter and moves with linear velocity
    let t2 = d3.transition()
              .duration(200)
              .ease(d3.easeLinear)

    // lightnings. make sure they aren't visible by turning off the opacity
    let lightnings = d3.select("#wglightning")
    lightnings.style("opacity", 0)

    // conditional loops to toggle SIR state AND lightning visibility
    if (sirState === "infectious"){
        toInf()
        lightnings.transition(t2).style("opacity", 1)   
    }
    else if (sirState === "recovered"){
        lightnings.transition(t2).style("opacity", 0)
        // toRec()
        toSus() //<- temporary
    } else {
        lightnings.transition(t2).style("opacity", 0)
        toSus()
    }

    // individual functions to interpolate and 
    // transition between different SVGs:
    // function toRec(){
    //     // console.log("toRec")
    //       d3.select("#wgBaseFace")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseFace, recFace)})
    //       d3.select("#wgBaseBody")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseBody, recBody)})
    //       d3.select("#wgBaseHair")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseHair, recHair)})
    //       d3.select("#wgBaseMouth")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseMouth, recMouth)}) 
    //       d3.select("#wgBaseRArmUpper")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseRArmUpper, recRArmUpper)}) 
    //       d3.select("#wgBaseRArmLower")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseRArmLower, recRArmLower)})
    //       d3.select("#wgBaseLArmUpper")
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseLArmUpper, recLArmUpper)}) 
    //       d3.select("#wgBaseLArmLower")
    //       .lower()
    //         .transition(t)
    //         .attrTween("d", () => {
    //           return interpolate(baseLArmLower, recLArmLower)})                                  
    // }

    function toInf(){
        // console.log("toInf")
          d3.select("#wgBaseFace")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseFace, infFace)})
          d3.select("#wgBaseBody")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseBody, infBody)})
          d3.select("#wgBaseHair")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseHair, infHair)})
          d3.select("#wgBaseMouth")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseMouth, infMouth)})
          d3.select("#wgBaseRArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmUpper, infRArmUpper)}) 
          d3.select("#wgBaseRArmLower")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseRArmLower, infRArmLower)})
          d3.select("#wgBaseLArmUpper")
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmUpper, infLArmUpper)}) 
          d3.select("#wgBaseLArmLower")
          .raise()
            .transition(t)
            .attrTween("d", () => {
              return interpolate(baseLArmLower, infLArmLower)})      
    }

    function toSus(){
        // console.log("toSus")
        d3.select("#wgBaseFace")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseFace, susFace)})
        d3.select("#wgBaseBody")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseBody, susBody)})
        d3.select("#wgBaseHair")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseHair, susHair)})
        d3.select("#wgBaseMouth")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseMouth, susMouth)})
        d3.select("#wgBaseRArmUpper")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseRArmUpper, susRArmUpper)}) 
        d3.select("#wgBaseRArmLower")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseRArmLower, susRArmLower)})
        d3.select("#wgBaseLArmUpper")
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseLArmUpper, susLArmUpper)}) 
        d3.select("#wgBaseLArmLower")
        .lower()
          .transition(t)
          .attrTween("d", () => {
            return interpolate(baseLArmLower,susLArmLower)})       
    }
}