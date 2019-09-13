let menuBurguer = document.querySelector('.burguer');
let nav = document.querySelector('nav');

function mostrarMenu(){
    // nav.style.display = 'block';
    // nav.classList.add('visivel');
//     if (nav.classList.contains('visivel')){
//         nav.classList.remove('visivel');
//     }else{
//         nav.classList.add('visivel');
//     }
// }

nav.classList.toggle('visivel');
menuBurguer.classList.toggle('ativo');

}

menuBurguer.onclick = mostrarMenu;

