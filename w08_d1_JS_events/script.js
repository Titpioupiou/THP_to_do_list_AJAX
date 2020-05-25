//Fonctionnalité 1 : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher le mot "clique" en console.
//Avec le bonus
{
  let footer = document.getElementsByTagName('footer');
  let clickNumber = 1;
  footer[0].addEventListener('click', function(){
    console.log('clic numéro ' + clickNumber);
    clickNumber++;
  });
};

//Fonctionnalité 2 : Hamburger menu
{
  let menuBtn = document.getElementsByClassName('navbar-toggler');
  let hamburgerMenu = document.getElementById('navbarHeader');
  menuBtn[0].addEventListener('click', function(){
      hamburgerMenu.classList.toggle('collapse');
  });
};

// Fonctionnalité 3 : texte rouge bouton Edit First Card définitif suaf si on charge la page
{
  let firstCard = document.getElementsByClassName('card')[0];
  let firstEditBtn = firstCard.getElementsByTagName('button')[1];
  firstEditBtn.addEventListener('click', function() {
    firstCard.style.color = 'red'
  });
};

//Fonctionnalité 4 : texte vert Btn Edit Second Card - change à chaque clic
{
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
};

//Fonctionnalité 5 : Faire disparaitre Bootstrap en double-cliquant sur la navbar
{
  let navbar = document.getElementsByClassName('navbar')[0];
  let bootstrapLink = document.getElementsByTagName('link')[0];
  navbar.addEventListener('dblclick', function() {
    if (bootstrapLink.classList.value === 'disabled') {
      bootstrapLink.disabled = false;
      bootstrapLink.setAttribute('class', '');
    } else {
      bootstrapLink.disabled = true;
      bootstrapLink.classList.add('disabled');
    };
  });
};

//Fonctionnalité 6 : 
/*si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire.
Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine
et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !*/
{
  let anyCard = document.getElementsByClassName('card');

  for(let i = 0; i < anyCard.length; i++) {
    let anyCardViewBtn = anyCard[i].getElementsByTagName('button')[0];
    let anyCardText = anyCard[i].getElementsByClassName('card-text')[0];
    let anyCardImg = anyCard[i].getElementsByClassName('card-img-top')[0];

    anyCardViewBtn.addEventListener('mouseenter', function(){
      if (anyCardImg.style.width === '') {
        anyCardText.classList.toggle('collapse');
        anyCardImg.style.width = '20%';
      } else {
        anyCardText.classList.toggle('collapse');
        anyCardImg.style.width = '';
      };
    });
  };
};


//Fonctionnalité 7 :
/*si un utilisateur clique sur le bouton gris ==>,
la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !*/
{
  let greyBtn = document.getElementsByClassName('btn btn-secondary my-2')[0];

  greyBtn.addEventListener('click', function() {
    let allCards = document.querySelectorAll(".col-md-4");
    let parent = allCards[0].parentNode;

    //parentElement.insertBefore(newElement, theFirstChild);
    parent.insertBefore(allCards[5], allCards[0]);
  });

};

//Fonctionnalité 8 :
/*Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi.
Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier.*/

{
  let blueBtn = document.getElementsByClassName('btn btn-primary my-2')[0];
  
  blueBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let allCards = document.querySelectorAll(".col-md-4");
    let parent = allCards[0].parentNode;
    let lastCard = allCards[5];
    let nextSibling = lastCard.nextSibling;

    //parentElement.insertBefore(newElement, theFirstChild);
    parent.insertBefore(allCards[0], nextSibling);
  });

};