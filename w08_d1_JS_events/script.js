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

// Fonctionnalité 3 : texte rouge bouton Edit First Card définitif suaf si on charge la page
let firstCard = document.getElementsByClassName('card')[0];
let firstEditBtn = firstCard.getElementsByTagName('button')[1];
firstEditBtn.addEventListener('click', function() {
  firstCard.style.color = 'red'
});

//Fonctionnalité 4 : texte vert Btn Edit Second Card - change à chaque clic
let secondCard = document.getElementsByClassName('card')[1];
let secondEditBtn = secondCard.getElementsByTagName('button')[1];
secondEditBtn.addEventListener('click', function() {
  if (secondCard.style.color === 'green') {
    secondCard.style.color = '';
  }
  else if (secondCard.style.color === '') {
    secondCard.style.color = 'green';
  };
});

//Fonctionnalité 5 : 