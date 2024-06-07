const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const btnDisLike1 = document.getElementById("btnDisLike1")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countLike1 = document.getElementById("countLike1")
const countLike2 = document.getElementById("countLike2")
const countDisLike1 = document.getElementById("countDisLike1")
const countDisLike2 = document.getElementById("countDisLike2")


function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
 countLikes1.textContent = totalLikes1.toString()
}
function hitDisLikes1() {
  let totalDislikes1 = parseInt(countDisLikes1.value) + 1
 countDisLikes1.textContent = totalDisLikes1.toString()
 }
function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
 countLikes2.textContent = totalLikes2.toString()
}
function hitDisLikes2() {
  let totalDislikes2 = parseInt(countDisLikes2.value) + 1
 countDisLikes2.textContent = totalDisLikes2.toString()
}

btnLike1.addEventListener("click",hitLikes1)
btnLike2.addEventListener("click",hitLikes2)
btnDisLikes1.addEventListener("click",hitDisLikes1)
btnDisLikes2.addEventListener("click",hitDisLikes2)
  
