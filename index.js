const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const btnDisLike1 = document.getElementById("btnDisLike1")
const btnDisLike2 = document.getElementById("btnDisLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")
const countDisLikes1 = document.getElementById("countDisLikes1")
const countDisLikes2 = document.getElementById("countDisLikes2")


function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
 countLikes1.textContent = totalLikes1.toString()
  let totalDisLikes1 = parseInt(countDisLikes1.value) + 0
 countDisLikes1.textContent = totalDisLikes1.toString()
 }
function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
 countLikes2.textContent = totalLikes2.toString()
function hitLikes2() {
  let totalDisLikes2 = parseInt(countDisLikes2.value) + 0
 countDisLikes2.textContent = totalDisLikes2.toString()
}

btnLike1.addEventListener("click",hitLikes1)
btnLike2.addEventListener("click",hitLikes2)
  btnDisLike1.addEventListener("click",hitDisLikes1)
  btnDisLike2.addEventListener("click",hitDisLikes2)
  
