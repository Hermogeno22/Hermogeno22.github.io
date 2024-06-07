const btnLike1 = document.getElementById("btnLike1")
const btnLike2 = document.getElementById("btnLike2")
const btndisLike1 = document.getElementById("btndisLike1")
const btndisLike2 = document.getElementById("btndisLike2")
const countLikes1 = document.getElementById("countLikes1")
const countLikes2 = document.getElementById("countLikes2")
const countdislikes1 = document.getElementById("countdisLikes1")
const countdislikes2 = document.getElementById("countdisLikes2")


function hitLikes1() {
  let totalLikes1 = parseInt(countLikes1.value) + 1
 countLikes1.textContent = totalLikes1.toString()
  let totaldislikes1 = parseInt(countdisLikes1.value) + 1
 countDisLikes1.textContent = totaldisLikes1.toString()
 }
function hitLikes2() {
  let totalLikes2 = parseInt(countLikes2.value) + 1
 countLikes2.textContent = totalLikes2.toString()
  let totaldislikes2 = parseInt(countdisLikes2.value) + 1
 countdisLikes2.textContent = totaldisLikes2.toString()
}

btnLike1.addEventListener("click",hitLikes1)
btnLike2.addEventListener("click",hitLikes2)
btndisLike1.addEventListener("click",hitdisLikes1)
btndisLike2.addEventListener("click",hitdisLikes2)
  
