const ACTORS = [{firstname: "Caterina", lastname: "Scorsone", 
    image: "./caterina.jpg", serie: "Grey's Anatomy", character: "Amelia Sheperd"},
    {firstname: "Danielle", lastname: "Savre", image: "./danielle.jpg", serie: "Station 19", character: "Maya Deluca-Bishop"},
    {firstname: "Stefania", lastname: "Spampinato", image: "./stefania.jpg", serie: "Station 19", character: "Carina Deluca-Bishop"},
    {firstname: "Grey", lastname: "Damon", image: "./grey.jpg", serie: "Station 19", character: "Jack Gibson"},
    {firstname: "Peter", lastname: "Paige", image: "./peter.jpg", serie: "Station 19", character: "Productor"}, 
    {firstname: "Camilla", lastname: "Luddington", image: "./camilla.jpg", serie: "Grey's Anatomy", character:"Jo Wilson"},
    {firstname: "Kim", lastname: "Raver", image: "./kim.jpg", serie: "Grey's Anatomy", character: "Teddy Altman-Hunt"},
    {firstname: "Alberto", lastname: "Frezza", image: "./alberto.jpg", serie: "Station 19", character: "Ryan Tanner"},
    {firstname: "Jessica", lastname: "Capshauw", image: "./jessica.jpg", serie: "Grey's Anatomy", character: "Arizona Robbins"},
    {firstname: "Adelaïde", lastname: "Kane", image: "./adelaide.jpg", serie: "Grey's Anatomy", character: "Jules Millins"}

]

const MAIN = document.querySelector('.container');

createCards(MAIN, ACTORS);

function createCards(refElement, characters) {
    characters.forEach(character => {
        refElement.append(createCard(character));
    });
}

function createCard(character) {

    const CHARACTERS_CARD = document.createElement('div');
    CHARACTERS_CARD.classList = 'Characters';

    
    const IMG_CARD = document.createElement('img');
    IMG_CARD.id = "chara";
    IMG_CARD.src = './images/' + character.image;
    IMG_CARD.alt = `Photo de ${character.firstname}, ${character.lastname}`;
    
    const BUTTON_CARD = document.createElement('button');
    BUTTON_CARD.classList = 'buttonchar';
    BUTTON_CARD.textContent = '!';
    
    const NAME_CHARACTER = document.createElement('h2');
    NAME_CHARACTER.id = 'actor';
    NAME_CHARACTER.textContent = character.firstname + " " + character.lastname;
    NAME_CHARACTER.appendChild(BUTTON_CARD);

    CHARACTERS_CARD.append(IMG_CARD, NAME_CHARACTER)

    return CHARACTERS_CARD;
}