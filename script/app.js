const steps = [
    {
        src: "./asset/image/image1.png",
        text1: `Comme souvent, cette histoire commence dans une auberge...`,
        text2: `Celle-ci est miteuse, inquiétante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers.`,
    },
    {
        src: "./asset/image/image2.webp",
        text1: `La crypte se cachait au fond de la cave et d'inquiétants murmures s'en échappaient.`,
        text2: `Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires.`,
    },
    {
        src: "./asset/image/image3.webp",
        text1: `La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien.`,
        text2: `Le combat allait être sans merci!`,
    }
];

// Références des éléments
const adventureImage = document.getElementById('adventure-image');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const nextButton = document.getElementById('next-button');

let currentStep = 0;

// Fonction pour mettre à jour le contenu
function updateContent() {
    currentStep = (currentStep < steps.length) ? (adventureImage.src = steps[currentStep].src, 
        text1.textContent = steps[currentStep].text1,
        text2.textContent = steps[currentStep++].text2, currentStep) : 0;
}

// Écouteur pour le bouton "Suivant"
nextButton.addEventListener('click', updateContent);
