let myBtns = document.querySelector(".buttons")




// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`) fonctionne pour info en général
//ici on teste avec info - ça marche
// aussi testé avec ma playlist plaisir coupable - playlist/8248370362 - ça marche



function sortMusic(music){  //attribute correspondra au data-attribute en argument qui sera dans le eventListener

  fetch(`https://deezerdevs-deezer.p.rapidapi.com/${music}?rapidapi-key=6e9b5b7007msh37e933091d37056p1da7e9jsnb8a274dd7b51&redirect_uri=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data);





  })
  
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
  })

}

myBtns.addEventListener('click', function(e){
  if(e.target.classList.contains("btn")){  //pour vérifier si on est bien sur un bouton avec la classList btn
  sortMusic(e.target.getAttribute("data-music"))

  }
})

//scroll au menu
let navbar = document.querySelector(".navbar")
let lastScrollay = 0

function handleScroll(){
  if (window.innerWidth > 1000){
    let dejaScrollay = Math.max(window.scrollY, 0)
    if (dejaScrollay > lastScrollay){
      navbar.classList.add("slide")
      
    } else {
      navbar.classList.remove("slide")
    }
    lastScrollay = dejaScrollay
    
  }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

//Dark and Pink Mode
// let body = document.querySelector("body")
// let buttonChangeColor = document.querySelector("#colorButton")

// function changeBodyColor(color){
//   body.style.backgroundColor = color;
// }

// if (localStorage.getItem('bodyColor')){
//   changeBodyColor(localStorage.getItem('bodyColor'));
//   buttonChangeColor.textContent = 'Dark Mode'
//   buttonChangeColor.style.backgroundColor = 'black'
//   buttonChangeColor.style.color = 'white'
// }

// buttonChangeColor.addEventListener('click', function(){
//   if (body.style.backgroundColor === 'pink'){
//     changeBodyColor('grey');
//     localStorage.removeItem('bodyColor')
//     this.textContent = 'Pink Mode'
//     buttonChangeColor.style.backgroundColor = 'pink'
//     buttonChangeColor.style.color = 'black'
//   } else {
//     changeBodyColor('pink');
//     localStorage.setItem('bodyColor', 'pink')
//     this.textContent = 'Dark Mode'
//     buttonChangeColor.style.backgroundColor = 'black'
//     buttonChangeColor.style.color = 'white'
//   }

// })

let body = document.querySelector("body");
let buttonChangeColor = document.querySelector("#colorButton");
let isPinkMode = false; // Variable pour stocker l'état actuel du mode (sombre ou rose)
const buttonszone = document.querySelector(".buttonszone")
const ligne = document.querySelector(".ligne")
const genreLinks = document.querySelectorAll(".genre-link");
const footer = document.querySelector("footer")
const footerLinks = document.querySelectorAll(".footer_link");
const footerdiv = document.querySelectorAll(".footer_div");
const footerp= document.querySelector(".footer_p")

function changeBodyColor(color) {
  body.style.backgroundColor = color;
}

// Vérifie si le mode rose est déjà activé dans le localStorage lors du chargement de la page
if (localStorage.getItem('bodyColor')) {
  isPinkMode = localStorage.getItem('bodyColor') === '#fadee2';
  changeBodyColor(isPinkMode ? '#fadee2' : 'grey');
  buttonChangeColor.textContent = isPinkMode ? 'Dark Mode' : 'Pink Rose';
  buttonChangeColor.style.backgroundColor = isPinkMode ? 'black' : '#fadee2';
  buttonChangeColor.style.color = isPinkMode ? 'white' : 'black';
  buttonszone.style.backgroundColor = isPinkMode ? 'pink' : 'black';
  ligne.style.border = isPinkMode ? '1px solid #9951b3' : '1px solid white'
  genreLinks.forEach(function(link) {
    link.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
    link.style.color = isPinkMode ? 'lightpink' : 'white';
  });
  footer.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
  footerLinks.forEach(function(link) {
    link.style.color = isPinkMode ? 'pink' : 'white';
  });
  footerdiv.forEach(function(link) {
    link.style.color = isPinkMode ? 'black' : 'white';
  });
  footerp.style.color = isPinkMode ? '#741b1e' : 'grey'
}

buttonChangeColor.addEventListener('click', function() {
  // Met à jour l'état du mode et la couleur en conséquence
  isPinkMode = !isPinkMode;
  changeBodyColor(isPinkMode ? '#fadee2' : 'grey');
  localStorage.setItem('bodyColor', isPinkMode ? '#fadee2' : 'grey');
  // Met à jour le texte et les styles du bouton
  this.textContent = isPinkMode ? 'Dark Mode' : 'Pink Mode';
  this.style.backgroundColor = isPinkMode ? 'black' : '#fadee2';
  this.style.color = isPinkMode ? 'white' : 'black';
  //buttonszone
  buttonszone.style.backgroundColor = isPinkMode ? 'pink' : 'black';
  //ligne
  ligne.style.border = isPinkMode ? '1px solid #9951b3' : '1px solid white'
  // Parcours chaque lien et change sa couleur de fond
  genreLinks.forEach(function(link) {
    link.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
    link.style.color = isPinkMode ? 'lightpink' : 'white';
  });
  //footer
  footer.style.backgroundColor = isPinkMode ? '#9951b3' : 'black';
  //footer links
  footerLinks.forEach(function(link) {
    link.style.color = isPinkMode ? 'pink' : 'white';
  });
  footerdiv.forEach(function(link) {
    link.style.color = isPinkMode ? 'black' : 'white';
  });
  footerp.style.color = isPinkMode ? '#741b1e' : 'grey'
});





 





// fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
    
//   })
//   .catch(error => {console.log("Erreur lors de la récup des données :", error);
// })