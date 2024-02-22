let header = document.querySelector("header")
let newScrollay = 0

window.addEventListener('scroll', function(){
    let dejaScrollay = window.scrollY
    if (dejaScrollay > newScrollay){
        nav.classList.add("slide")
    } else {
        nav.classList.remove("slide")
    }
    newScrollay = dejaScrollay   
})

//Faire apparaître/disparaitre le menu en fonction du scroll (rajouter classe sticky à la nav pour que ça fonctionne)

fetch(`https://deezerdevs-deezer.p.rapidapi.com/infos?rapidapi-key=19b3d652a3msh4937caeed36c230p1b3c54jsn1da2ad719459&rapidapi-host=deezerdevs-deezer.p.rapidapi.com`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
  })
  .catch(error => {console.log("Erreur lors de la récup des données :", error);
})

