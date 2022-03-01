"use strict";
//SUPPRIMER UN CONTAINER QUAND ON CLIQUE SUR SUPPRIMER(BOUTTON CROIX)
const itemsContainer = document.querySelectorAll('.items-container');
//QUAND ON CLIQUE  SUR LE BOUTTON "Add an item" CACHER CE BOUTTON ET AFFICHER A LA PLACE PUIS AFFICHER LE FORMULAIRE D'AJOUT ITEM
//Variable dynamique pour que quand on clique dessus, ça sélectionne le formulaire de ce container(input, label etc...)
//je démarre ces variables à undefined
let actualContainer, actualBtn, actualUL, actualForm, actualTextInput, actualValidation;
//une fonction pour tous les eventListener(quand on click sur les boutons, supprime, drag and drop etc...) de tous les container
//tous les container passent dans cette fonction pourqu'on les rajoute des EventListener
function addContainerListners(currentContainer) {
    //Récupérer le boutton qui doit recevoir un EventListener
    const currentContainerDeletionBtn = currentContainer.querySelector('.delete-container-btn');
    //ajouter boutton "add an item"
    const currentAddItemBtn = currentContainer.querySelector('.add-item-btn');
    //Supprimer quand on clique sur le boutton supprimer de l'input qui est ajouté
    const currentCloseFormBtn = currentContainer.querySelector('.close-form-btn');
    //Ajouter la liste(ul) du container (les chose à faires, to-do liste ect...)
    const currentForm = currentContainer.querySelector('form');
    //ajouter son EventListener
    deleteBtnListeners(currentContainerDeletionBtn);
    //ajouter son EventListener
    addItemBtnListeners(currentAddItemBtn);
    //ajouter son EventListener
    closingFormBtnListeners(currentCloseFormBtn);
    //ajouter son EventListener
    addFormSubmitListeners(currentForm);
}
//rajouter addContainerListners pour chaque container(itemsContainer)
itemsContainer.forEach((container) => {
    addContainerListners(container);
});
//Rajouter un EventListener à ce boutton recupéré
function deleteBtnListeners(btn) {
    btn.addEventListener('click', handleContainerDeletion);
}
//Rajouter un EventListener à ce boutton recupéré pour Add
function addItemBtnListeners(btn) {
    btn.addEventListener('click', handleAddItem);
}
//Rajouter un EventListener à ce boutton recupéré pour close
function closingFormBtnListeners(btn) {
    //on envoie une fonction anonyme pour fermer ce boutton avec false pour toggle
    btn.addEventListener('click', () => toggleForm(actualBtn, actualForm, false));
}
//function qui va géré le submit du formulaire
function addFormSubmitListeners(form) {
    form.addEventListener('submit', createNewItem);
}
//function de suppression du boutton recupéré, vu qu'on a choisi un EventListener de suppression quand on click sur ce boutton
function handleContainerDeletion(e) {
    //connaitre la cible sur la quelle on vient de cliquer
    const btn = e.target;
    //récuperer tous les bouttons qui servent à fermer les container
    //un tableau avec tous les bouttons du DOM
    const btnsArray = [...document.querySelectorAll('.delete-container-btn')];
    //un tableau avec tous les container du DOM
    const containers = [...document.querySelectorAll('.items-container')];
    //remove permet de supprimer un élément du DOM, donc on prend l'index de notre tableau, puis on supprime avec remove
    containers[btnsArray.indexOf(btn)].remove();
}
//toggle (qui prend en paremetre un boutton, form qu'on a envie de toggle et une action true ou false)
function toggleForm(btn, form, action) {
    if (!action) {
        form.style.display = "none";
        btn.style.display = "block";
    }
    else if (action) {
        form.style.display = "block";
        btn.style.display = "none";
    }
}
//function de suppression de l'item du boutton recupéré, vu qu'on a choisi un EventListener de suppression quand on click sur ce boutton
function handleAddItem(e) {
    //connaitre la cible sur la quelle on vient de cliquer(ici c'est le boutton "add an item")
    const btn = e.target;
    //Faire un toggle par container, mais pas deux en même temps, donc vérifier si un container est déjà ouvert
    if (actualContainer)
        toggleForm(actualBtn, actualForm, false); //pour chaque nouvel container cliqué,il le toggle et il le ferme 
    //SetContainerItems pour modifier avec les variables dynamiques créees pour le formulaire de chaque container 
    setContainerItems(btn);
    //appeler le toogle
    toggleForm(actualBtn, actualForm, true);
}
//fonction SetContainerItems pour modifier avec les variables dynamiques créees pour le formulaire de chaque container 
function setContainerItems(btn) {
    actualBtn = btn;
    actualContainer = btn.parentElement; //parceque le parent de btn c'est le container
    actualUL = actualContainer.querySelector('ul'); //la liste du container
    actualForm = actualContainer.querySelector('form'); //formulaire du container, si on veut submit par exple
    actualTextInput = actualContainer.querySelector('input'); //input du container
    actualValidation = actualContainer.querySelector('.validation-msg'); //message de validation du container
}
//fonction pour la création du nouvel item
function createNewItem(e) {
    //pour éviter que ça fasse un refresh de la page
    e.preventDefault();
    //Vérifier si mon input n'a pas au moins 1 caractère, m'envoyer erreur quand on clique sur submit
    if (actualTextInput.value.length === 0) {
        actualValidation.textContent = "Must be at least 1 character long";
        //une fois qu'on envoie l'erreur, on return on a pas envie d'exécuter la suite
        return;
    }
    else {
        //on enlève texte, s'il a été affiché
        actualValidation.textContent = "";
    }
    //création item quand on click sur submit
    const itemContent = actualTextInput.value; //le contenu de l'item qui est ajouté quand on ajoute 
    const li = `<li class="item" draggable="true">
        <p>${itemContent}</p>
        <button>X</button>
        </li>`;
    //remplir la liste
    //on utilise insertAdjacentHTML, car on insère du html en chaine de caractère
    /*beforend veut dire qu'on rajoute l'élément tout à la fin mais pas en dehors de l'élément, juste avant la fin de la fermeture,
    en second argument, mettre ce qu'on lui passe (li ici)*/
    actualUL.insertAdjacentHTML('beforeend', li);
    //fermer le nouveau item crée
    //récupérer le dernier élément qui a été ajouté
    const item = actualUL.lastElementChild;
    //récupérer le boutton du li qui a été ajoute
    const liBtn = item.querySelector('button');
    //supprimer ce li, lui rajouter EventListener pour supprimer
    htmlItemDeletion(liBtn);
    //vider l'input
    actualTextInput.value = "";
}
//fonction de suppresion du li qui a été ajouté
function htmlItemDeletion(btn) {
    //on envoie une fonction anonyme, pas besoin de l'Event e
    btn.addEventListener('click', () => {
        //on récupére le parent du boutton, qui est l'item
        const elToRemove = btn.parentElement;
        //on remove cet parent qui est l'item
        elToRemove.remove();
    });
}
//ADD  NEW CONTAINER
//le bouton sur le quel on va cliquer pour ajouter
const addContainerBtn = document.querySelector('.add-container-btn');
//le nouveau container
const addContainerForm = document.querySelector('.add-new-container form');
//l'input
const addContainerFormInput = document.querySelector('.add-new-container input');
//validation (le message qui s'affiche)
const validationNewContainer = document.querySelector('.add-new-container .validation-msg');
//pour fermer le container
const addContainerCloseBtn = document.querySelector('.close-add-list');
//le container 
const addNewContainer = document.querySelector('.add-new-container');
//la liste de tous les container
const containersList = document.querySelector('.main-content');
//ouvrir le formulaire
addContainerBtn.addEventListener('click', () => {
    //j'ouvre le formulaire avec true
    toggleForm(addContainerBtn, addContainerForm, true);
});
//fermer le formulaire
addContainerCloseBtn.addEventListener('click', () => {
    //je ferme le formulaire avec false
    toggleForm(addContainerBtn, addContainerForm, false);
});
//submit quand on écrit quelque chose dans le input du nouveau container
addContainerForm.addEventListener('submit', createNewContainer);
//fonction de création du nouveau container
function createNewContainer(e) {
    e.preventDefault();
    //Vérifier si le formulaire n'a pas au moins 1 caractère, m'envoyer erreur quand on clique sur submit
    if (addContainerFormInput.value.length === 0) {
        validationNewContainer.textContent = "Must be at least 1 character long";
        //une fois qu'on envoie l'erreur, on return on a pas envie d'exécuter la suite
        return;
    }
    else {
        //on enlève texte, s'il a été affiché
        validationNewContainer.textContent = "";
    }
    //créer le container
    const itemsContainer = document.querySelector('.items-container');
    //on clone ce container(itemsContainer)
    const newContainer = itemsContainer.cloneNode();
    //on remplie le container cloné (newContainer) avec la valeur de ce qu'on aura dans l'input
    const newContainerContent = `
        <div class="top-container">
            <h2>${addContainerFormInput.value}</h2>
            <button class="delete-container-btn">X</button>
        </div>
        <ul></ul>
        <button class="add-item-btn">Add an item</button>
        <form autocomplete="off">
            <div class="top-form-container">
                <label for="item">Add a new item</label>
                <button class="close-form-btn">X</button>
            </div>
            <input type="text" id="item">
            <span class="validation-msg"></span>
            <button type="submit">Submit</button>
        </form>`;
    //remplir newContainer
    newContainer.innerHTML = newContainerContent;
    //ajouter le nouveau container
    containersList.insertBefore(newContainer, addNewContainer);
    //vider l'input pour éviter les caractères qui vont rester
    addContainerFormInput.value = "";
    //Rajouter tous les eventListener qu'on avait au début pour un container
    addContainerListners(newContainer);
}
