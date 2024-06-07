const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const btnDisLike1 = document.getElementById("btnDisLike1")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")
const countDisLike1 = document.getElementById("countDisLike1")
const countDisLike2 = document.getElementById("countDisLike2")


function hitLikes1() {
  let totalLikes1 = parseInt(countLike1.value) + 1
 countLikes1.textContent = totalLike1.toString()
}
function hitDisLike1() {
  let totalDislike1 = parseInt(countDisLike1.value) + 1
 countDisLike1.textContent = totalDisLike1.toString()
 }
function hitLikes2() {
  let totalLikes2 = parseInt(countLike2.value) + 1
 countLikes2.textContent = totalLike2.toString()
}
function hitDisLike2() {
  let totalDislike2 = parseInt(countDisLike2.value) + 1
 countDisLike2.textContent = totalDisLike2.toString()
}

btnLike1.addEventListener("click",hitLike1)
btnLike2.addEventListener("click",hitLike2)
btnDisLike1.addEventListener("click",hitDisLike1)
btnDisLike2.addEventListener("click",hitDisLike2)
  
