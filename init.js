const auth = new Auth();

document.querySelector(".logout").addEventListener("click", (e) => {
	auth.logOut();
});


const n = localStorage.getItem('nm')
if (n) {
	document.querySelector('.text-center').textContent += ' ' + n;
}
