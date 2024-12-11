// Tableau des images et légendes
const images = [
    "./asset/image/image1.png",
    "./asset/image/image2.webp",
    "./asset/image/image3.webp"
];

const captions = [
    "Comme souvent, cette histoire commence dans une auberge...<br>Celle-ci est miteuse, inquiètante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers.",
    "La crypte se cachait au fond de la cave et d'inquiétants murmures s'en échappaient.<br>Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires.",
    "La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien.<br>Le combat allait être sans merci!"
];

// Sélection des éléments dans le DOM
const imageElement = document.getElementById("adventureImage");
const captionElement = document.getElementById("adventureCaption");
const nextButton = document.getElementById("nextButton");

// Index actuel
let currentIndex = 0;

// Fonction pour mettre à jour l'image et la légende
function updateContent() {
    imageElement.src = images[currentIndex];
    captionElement.innerHTML = `<p>${captions[currentIndex]}</p>`;
}

// Événement pour le bouton "Suivant"
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Avance à la suivante, revient à 0 si dépassement
    updateContent();
});

// Initialisation
updateContent();
