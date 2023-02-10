const n = localStorage.getItem('nm')
if (n) {
	document.querySelector('.span').textContent = n
}

let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e)=>{
   let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
   arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
 
  let q5 = document.querySelector('.q5');
  let q1 = document.querySelector('.q1');
  let res = document.querySelector('.res')
  let q2 = document.querySelector('.q2');

  let btn = document.querySelector('.btn')
console.log(q1)

function test() {
  if(q5.value < 70) {
    console.log('test')
    q1.classList.toggle('block')
    res.classList.toggle('non')
  } 
  if (q5.value > 70) {
    q2.classList.toggle('block')
    res.classList.toggle('non')

  }
}

