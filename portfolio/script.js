const sliderContainer = document.createElement("div"); //création balise div
sliderContainer.classList.add("slider");

const imgArray = [ //array des iamges
    "img/profile-pic1.jpg", 
    "img/profile-pic2.jpg", 
    "img/profile-pic3.jpg", 
    "img/profile-pic4.jpg"
]

const imgElement = document.createElement("img") //création balise img
imgElement.src = imgArray[0];

sliderContainer.appendChild(imgElement) // insertion d'img dans la div

const prevBtn = document.createElement("button"); //création previous btn
prevBtn.textContent = "</"
prevBtn.classList.add("prev")

const nextBtn = document.createElement("button"); //création next btn
nextBtn.textContent = ">"
nextBtn.classList.add("next")

sliderContainer.appendChild(prevBtn); //insertion des btn dans la div
sliderContainer.appendChild(nextBtn);

borderHTML = document.querySelector("#border-pic"); //insertion de la div dans le HTML
borderHTML.appendChild(sliderContainer);

//fonctionnalité du carousel
let index = 0

function showImg(i){
    index = (i + imgArray.length) % imgArray.length;
    imgElement.src = imgArray[index];
}

prevBtn.addEventListener("click", () => {
    showImg(index - 1); 
    console.log(imgElement.src)
})

nextBtn.addEventListener("click", () => showImg(index + 1));

setInterval(() => showImg(index + 1), 6000);