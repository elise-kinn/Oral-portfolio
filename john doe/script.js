//toggle menue

const openBtn = document.querySelector('.menu-toggle.open');
const closeBtn = document.querySelector('.menu-toggle.close');
const navLinks = document.querySelector('.nav-links');

openBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  openBtn.setAttribute('aria-expanded', 'true');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  openBtn.setAttribute('aria-expanded', 'false');
});

document.querySelectorAll(".nav-links a").forEach(link => {
	link.addEventListener("click", () => {
	  navLinks.classList.toggle("active");
	});
});

//modal1



const contactBtn = document.querySelector("#anim-6"); 
const closeContactBtn = document.querySelector("#modal-close-1"); 
const dialog = document.querySelector("#dialog-1");

contactBtn.addEventListener('click', () => {
	dialog.showModal();
})

closeContactBtn.addEventListener('click', () => {
	dialog.close();
})

//modal2

const contactBtn2 = document.querySelector("#contact-btn"); 
const closeContactBtn2 = document.querySelector("#modal-close-2"); 
const dialog2 = document.querySelector("#dialog-2");

contactBtn2.addEventListener('click', () => {
	dialog2.showModal();
})

closeContactBtn2.addEventListener('click', () => {
	dialog2.close();
})

