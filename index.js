const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const btnDisLike1 = document.getElementById("btnDisLike1")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")
const countDisLike1 = document.getElementById("countDisLike1")
const countDisLike2 = document.getElementById("countDisLike2")


function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
 countLikes1.textContent = totalLikes1.toString()
}
function hitDisLike1() {
  let totalDislike1 = parseInt(countDisLike1.value) + 1
 countDisLike1.textContent = totalDisLike1.toString()
 }
function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
 countLikes2.textContent = totalLikes2.toString()
}
function hitDisLike2() {
  let totalDislike2 = parseInt(countDisLike2.value) + 1
 countDisLike2.textContent = totalDisLike2.toString()
}

btnLikes1.addEventListener("click",hitLikes1)
btnLikes2.addEventListener("click",hitLikes2)
btnDisLike1.addEventListener("click",hitDisLike1)
btnDisLike2.addEventListener("click",hitDisLike2)
  
