
const suitSelect = document.getElementById("suit");
const rankSelect = document.getElementById("rank");
var prevBlock = null;
var prevLi = null;

function getReading() {
  // Hide previous blocks
  if(prevBlock != null){
    prevBlock.style.display = "none";
    prevLi.style.display = "none";
  }

  // Unhide new blocks
  var block = document.getElementById(suitSelect.value + "Block");
  block.style.display = "block";
  var li = block.getElementsByTagName("li")[rankSelect.value];
  li.style.display = "block";

  // Save the used blocks
  prevBlock = block;
  prevLi = li;
}
