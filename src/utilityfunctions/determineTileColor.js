import * as d3 from "d3";

export function determineTileColor(tileID, status){
    // letters on top of tiles
  // base = no letter
  const sirBase= ""

  // The attribute 'd' for SVG path that forms the letter S on top of a tile
  const sirS = "M156.1,37.3c-7.8-4.6-16.6-7.4-25.7-8c-8.8-0.5-16.7,1.2-23.6,5.2c-5.5,3.2-8.6,6.8-9.4,10.8 c-0.8,4,1,9.1,5.6,15.3c4.4,5.9,6.7,10.2,6.9,12.8c0.2,2.6-1.2,4.8-4.3,6.6c-3.7,2-7.8,2.9-12,2.5c-4.6-0.3-9.5-2-14.9-5.1 c-3.7-2.2-7.2-4.8-10.3-7.7c-3-2.8-5.6-5.9-7.9-9.3l-12.7,7.4c3.1,5.1,9.3,10.4,18.7,15.8c8.6,5.2,18.3,8.3,28.2,9.1 c9.5,0.7,17.9-1.1,25.2-5.4c3.7-2.2,6.3-4.4,7.7-6.8c1.4-2.4,1.8-5.2,1.1-7.9c-0.7-2.9-2.8-6.8-6.3-11.8c-3.2-4.4-5.1-7.6-5.9-9.6 c-0.7-1.6-0.8-3.4-0.2-5.1c0.9-1.7,2.4-3.1,4.1-4c3.3-1.9,7.1-2.7,10.9-2.4c4.5,0.3,8.9,1.7,12.8,4.1c6,3.5,11.1,8.3,15.1,14.1 l15.3-3.9C169.7,47.1,163.4,41.4,156.1,37.3"

  // The attribute 'points' for SVG polyline that forms the letter S on top of a tile
  const sirI = "154.3,39.7 140.8,31.9 58.5,79.7 72.1,87.5 154.3,39.7 	"

  // The attribute 'd' for SVG path that forms the letter R on top of a tile
  const sirR = "M100.9,53.9l26.9-15.6l9,5.2c6.2,3.6,9.7,6.8,10.8,9.7c1,2.9-0.8,5.8-5.4,8.5  c-4.4,2.6-9.5,3.9-14.6,3.6c-5.1-0.3-10.9-2.2-17.2-5.9L100.9,53.9 M149,37.3l-23.4-13.5L43.4,71.6l13.5,7.8l32.9-19.1l13.4,7.7  l-13,30.5l15.4,8.9l13-34.7c15.1,3.7,27.7,2.5,38-3.4c8-4.7,11.4-9.6,10.3-14.9C165.7,49.2,159.8,43.5,149,37.3"
  
  if (status == "susceptible"){
      d3.selectAll(`${tileID} > .letterR`).remove()
      d3.selectAll(`${tileID} > .letterI`).remove()
      d3.select(`${tileID}`).append("path").attr("d", sirS).attr('class','letterS')

      // update the tile colors
      d3.select(`${tileID} .topFace`).classed('susTileTop', true)
      d3.select(`${tileID} .sideProfile`).classed('susTileSide', true)
      d3.select(`${tileID} .topFace`).classed('infTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('infTileSide', false)
      d3.select(`${tileID} .topFace`).classed('recTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('recTileSide', false)
  } else if (status == "infected"){
      // console.log("Infected Tiles: ", tileID)
      // console.log(tileD3)
      d3.selectAll(`${tileID} > .letterS`).remove()
      d3.selectAll(`${tileID} > .letterR`).remove()
      d3.select(`${tileID}`).append("polyline").attr("points", sirI).attr('class','letterI')

      // update the tile colors
      d3.select(`${tileID} .topFace`).classed('infTileTop', true)
      d3.select(`${tileID} .sideProfile`).classed('infTileSide', true)
      d3.select(`${tileID} .topFace`).classed('susTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('susTileSide', false)
      d3.select(`${tileID} .topFace`).classed('recTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('recTileSide', false)

  } else if (status == "recovered"){
      // console.log("Recovered tiles: ", tileID)
      d3.selectAll(`${tileID} > .letterS`).remove()
      d3.selectAll(`${tileID} > .letterI`).remove()
      d3.select(`${tileID}`).append("path").attr("d", sirR).attr('class','letterR')

      // update the tile colors
      d3.select(`${tileID} .topFace`).classed('recTileTop', true)
      d3.select(`${tileID} .sideProfile`).classed('recTileSide', true)
      d3.select(`${tileID} .topFace`).classed('susTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('susTileSide', false)
      d3.select(`${tileID} .topFace`).classed('infTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('infTileSide', false)
  } else if (status == "") {
      // console.log("tiles are not S, I, or R")
      d3.selectAll(`${tileID} > .letterS`).remove()
      d3.selectAll(`${tileID} > .letterI`).remove()
      d3.selectAll(`${tileID} > .letterR`).remove()
     
      d3.select(`${tileID} .topFace`).classed('susTileTop', true)
      d3.select(`${tileID} .sideProfile`).classed('susTileSide', true)
      d3.select(`${tileID} .topFace`).classed('infTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('infTileSide', false)
      d3.select(`${tileID} .topFace`).classed('recTileTop', false)
      d3.select(`${tileID} .sideProfile`).classed('recTileSide', false)
  }

}
