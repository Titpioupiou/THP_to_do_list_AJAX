//Fonctionnalité 1 : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher le mot "clique" en console.
//Avec le bonus
let footer = document.getElementsByTagName('footer');
let clickNumber = 1;
footer[0].addEventListener('click', function(){
  console.log('clic numéro ' + clickNumber);
  clickNumber++;
});

//Fonctionnalité 2 : Hamburger menu
let menuBtn = document.getElementsByClassName('navbar-toggler');
let hamburgerMenu = document.getElementById('navbarHeader');
menuBtn[0].addEventListener('click', function(){
    hamburgerMenu.classList.toggle('collapse');
});

// Fonctionnalité 3 : texte rouge bouton Edit First Card
let firstCard = document.getElementsByClassName('card')[0];
let editBtn = firstCard.getElementsByTagName('button')[1];
editBtn.addEventListener('click', function() {
  editBtn.style.color = 'red'
});

//Fonctionnalité 4 : 