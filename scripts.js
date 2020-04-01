const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cardReceita');


for (let cardReceita of cards){
    cardReceita.addEventListener("click", function(){
               
        modalOverlay.classList.add('active')

        modalOverlay.querySelector("img").src = cardReceita.querySelector("img").src
        modalOverlay.querySelector("img").alt = cardReceita.querySelector("img").alt
        modalOverlay.querySelector("h2").innerText = cardReceita.querySelector("h3").innerText
        modalOverlay.querySelector("p").innerText = cardReceita.querySelector("p").innerText

    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    
});