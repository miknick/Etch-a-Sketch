
let div=document.querySelector("#grid")
let reset=document.querySelector("#reset")
let newGrid=document.querySelector("#newGrid")
let black=document.querySelector("#black")
let rainbow=document.querySelector("#rainbow")
let backgroundColor=document.querySelector("#backgroundColor")
function get_random_color() 
{
    var r = function () { return Math.floor(Math.random()*256) };
    return "rgb(" + r() + "," + r() + "," + r() + ")";
}
let createGrid=function(rowNumber=16){
  for(let i=0;i<(rowNumber**2);i++){
  let littleDiv=document.createElement("div")
  littleDiv.style.border="1px solid black"
  littleDiv.style.backgroundColor="white"  
  littleDiv.classList.add("littlediv")
  reset.addEventListener("click",()=>{
    if(littleDiv.style.backgroundColor!=="white")
      littleDiv.style.backgroundColor="white"
  })
  let color="black"
  black.addEventListener("click",()=>{
    color="black"
  })
  rainbow.addEventListener("click",()=>{
    color=get_random_color()
  })
  littleDiv.addEventListener("mouseover",()=>littleDiv.style.backgroundColor=`${color}`)
  div.appendChild(littleDiv)
}
}
newGrid.addEventListener("click",()=>{
  let newRowNumber=prompt("How many squares per side?(16-64)",16)
  if(newRowNumber!==null)
  { 
  let littleDivs=document.querySelectorAll(".littlediv")
  for(let i=0;i<littleDivs.length;i++){
      littleDivs[i].remove()
    }
  
  div.style="grid-template-columns:repeat("+newRowNumber+",1fr)"
  createGrid(newRowNumber)
  }
})
createGrid()
