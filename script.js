/* Les évènements */

// Comment on écoute un évènement ?
// 1 : Qui ? div, button, a, p ... élément HTML
// 2 : Quoi ? Quel type d'évènement



const back = document.querySelector('.bodyb')
const button = document.querySelector('.my-button')

// Qui.addEventListener(Quoi, function)
button.addEventListener('click', function(){
    //le code de ma fonction
    console.log('click')
    back.classList.remove("brouge");
    back.classList.remove("bjaune");
    back.classList.remove("bbleu");
    back.classList.add("bblanc");


})








/* EXERCICE 4 - 15 minutes

Créer 3 boutons et pour chacun faire un écouter d'évènement 
qui change la couleur de ma page lorsque je clique dessus.

*/

const Redbutton = document.querySelector('.Rbutton')

// Qui.addEventListener(Quoi, function)
Redbutton.addEventListener('click', function(){
    //le code de ma fonction
    console.log('Rouge')
    back.classList.remove("bblanc");
    back.classList.remove("bjaune");
    back.classList.remove("bbleu");
    back.classList.add("brouge");

})

const Bluebutton = document.querySelector('.Bbutton')

// Qui.addEventListener(Quoi, function)
Bluebutton.addEventListener('click', function(){
    //le code de ma fonction
    console.log('Bleu')
    back.classList.remove("bblanc");
    back.classList.remove("bjaune");
    back.classList.remove("brouge");
    back.classList.add("bbleu");

})

const Yelbutton = document.querySelector('.Ybutton')

// Qui.addEventListener(Quoi, function)
Yelbutton.addEventListener('click', function(){
    //le code de ma fonction
    console.log('Jaune')
    back.classList.remove("bblanc");
    back.classList.remove("brouge");
    back.classList.remove("bbleu");
    back.classList.add("bjaune");

})

