const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.cardReceita');

for (let cardReceita of cards){
    cardReceita.addEventListener("click", function(){
        /* const videoId = cardReceita.getAttribute("id") */
        modalOverlay.classList.add('active')
        
    });
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    
});