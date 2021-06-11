// import d3
import * as d3 from "d3";

// add the number of tiles desired
export function addTiles(module, number){
    d3.selectAll(".tile").remove()
    let tilegroup = document.querySelector(`#${module} .tilegroup`)
    
    let d3Tile = d3.select(".tilegroup").append("g")
      .attr('class', "tile")
    d3Tile.append("path")
        .attr("class", "topFace")
        .attr("d", "M211.3,59c4.7,2.7,4.7,7.1,0.1,9.8l-92.3,53.6c-4.6,2.7-12.3,2.7-17,0l-98.6-57c-4.7-2.7-4.7-7.1,0-9.8L95.7,2c4.6-2.7,12.3-2.7,17,0L211.3,59z")
    d3Tile.append("path")
        .attr("class", "sideProfile")
        .attr("d", "M212.4,68.2c-0.1,0-0.1,0.1-0.2,0.2c-0.1,0.1-0.3,0.2-0.4,0.3v0l-0.4,0.2v0.1l-92.2,53.6 c-0.4,0.1-0.7,0.3-1,0.5c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.2-0.6,0.3c-0.3,0.1-0.6,0.2-1,0.2c-3.4,1.1-7.5,1.2-10.9,0.2c0,0-0.1,0-0.1,0c-0.5-0.1-1-0.3-1.5-0.5c-0.1,0-0.2-0.1-0.3-0.1c-0.5-0.2-0.9-0.4-1.3-0.7l-98.7-57C1.2,64.2,0,62.4,0,60.6v0.1v8v0.1c0,1.7,1.1,3.5,3.5,4.9l98.7,56.9c0.4,0.2,0.9,0.5,1.3,0.6c0.1,0,0.2,0.1,0.3,0.1c0.5,0.2,0.9,0.3,1.4,0.5c0.1,0,0.2,0,0.3,0.1c1.1,0.3,2.3,0.5,3.4,0.6c0,0,0,0,0.1,0c3.3,0.3,6.7-0.2,9.3-1.5c0.3-0.1,0.5-0.3,0.8-0.4L211.4,77c0.1-0.1,0.3-0.2,0.4-0.3v0.1c0.4-0.3,0.8-0.5,1.1-0.8s0.6-0.6,0.9-0.9c0.3-0.4,0.5-0.8,0.7-1.2c0.3-0.5,0.4-1.2,0.4-1.8V64C214.9,65.4,214.1,66.9,212.4,68.2z")

    let tile = document.querySelector(".tile")
    tile.id="tile1"    
  
    for (let i=1; i < number; i++){
      let nextTile = tile.cloneNode(true)
      nextTile.id = "tile"+ (i+1)
      tilegroup.appendChild(nextTile)
    }
  }
  