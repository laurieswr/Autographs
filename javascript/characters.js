const ACTORS = [{firstname: "Caterina", lastname: "Scorsone", 
    image: "./caterina.jpg", serie: "Grey's Anatomy", character: "Amelia Sheperd", convention: "Dreamit"},
    {firstname: "Danielle", lastname: "Savre", image: "./danielle.jpg", serie: "Station 19", character: "Maya Deluca-Bishop", convention:"Dreamit"},
    {firstname: "Stefania", lastname: "Spampinato", image: "./stefania.jpg", serie: "Station 19", character: "Carina Deluca-Bishop", convention:"Dreamit"},
    {firstname: "Grey", lastname: "Damon", image: "./grey.jpg", serie: "Station 19", character: "Jack Gibson", convention:"Dreamit"},
    {firstname: "Peter", lastname: "Paige", image: "./peter.jpg", serie: "Station 19", character: "Productor", convention:"Dreamit"},
    {firstname: "Danielle", lastname: "Savre", image: "./Danielle-Savre-To-The-Rescue-Guest.jpg", serie: "Station 19", character: "Maya Deluca-Bishop", convention:"FanfusionUk"},
    {firstname: "Stefania", lastname: "Spampinato", image: "./Stefania-Spampinato-To-the-Rescue-Guest.png", serie: "Station 19", character: "Carina Deluca-Bishop", convention:"FanfusionUk"},
    {firstname: "Jake", lastname: "Borelli", image: "./Jake-Borelli-To-the-Rescue-Guest.jpg", serie: "Grey's Anatomy", character: "Levi Shmit", convention:"FanfusionUk"},
    {firstname: "Jay", lastname: "Hayden", image: "./Jay-Hayden-To-the-Rescue-Guest.png", serie: "Station 19", character: "Travis Montgomery", convention:"FanfusionUk"},
    {firstname: "Jaicy", lastname: "Elliot", image: "./jaicyelliot.jpg", serie: "Grey's Anatomy", character: "Taryn Helm", convention:"FanfusionUk"},
    {firstname: "Sarah", lastname: "Drew", image: "./sarah-cancel.jpg", serie: "Grey's Anatomy", character: "April Kepner", convention:"FanfusionUk"}
];

const MAIN = document.querySelector('.container');

const  DIV_DREAMIT = document.createElement('div');
DIV_DREAMIT.id = "dreamit";
MAIN.appendChild(DIV_DREAMIT);

const DIV_FANFUSIONUK = document.createElement('div');
DIV_FANFUSIONUK.id = "fanfusionuk";
MAIN.appendChild(DIV_FANFUSIONUK);

createCards(ACTORS);

function createCards(characters) {
    characters.forEach(character => {
        const card = createCard(character);
        if (character.convention === "Dreamit") {
            DIV_DREAMIT.appendChild(card);
        } else if (character.convention === "FanfusionUk") {
            DIV_FANFUSIONUK.appendChild(card);
        }
    });
}
                

function createCard(character) {
    const CARD = document.createElement('div');
    CARD.id = "card";
    
    const IMG_CARD = document.createElement('img');
    IMG_CARD.id = "chara";
    IMG_CARD.src = './images/' + character.image;
    IMG_CARD.alt = `Photo de ${character.firstname} ${character.lastname}`;
    
    const NAME_CHARACTER = document.createElement('h2');
    NAME_CHARACTER.id = 'actor';
    NAME_CHARACTER.textContent = `${character.firstname} ${character.lastname} ${character.convention}`;
    
    CARD.append(IMG_CARD, NAME_CHARACTER);
    
    return CARD;
    
}