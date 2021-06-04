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

  let susMouth = d3.select("#susMouth").attr('d'),
      infMouth = d3.select("#infMouth").attr("d"),
      recMouth = d3.select("#recMouth").attr('d'),
      baseMouth = d3.select("#baseMouth").attr('d');

  let t = d3.transition()
          .duration(400)
          .ease(d3.easeCircleOut)
  
  let t2 = d3.transition()
             .duration(200)
             .ease(d3.easeLinear)

  let lightnings = d3.select("#lightnings")
  lightnings.style("opacity", 0)

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