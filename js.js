const boxWidth = 32;
const boxHeight = 32;
let windowWidth = 1536;
let windowHeight = 864;
let isDown = false;
let k = 4;

/*
$(document).on('keydown',keyDown)
.on('keyup',keyUp);
function keyDown(e){
    isDown = true;
    k = e.keyCode;
}
function keyUp(e){
    isDown = false;
    k = e.keyCode;
}
*/

$(function() {
    const numberOfBoxes = Math.floor(windowWidth / boxWidth) * Math.floor(windowHeight / boxHeight);

    for (var i = 0; i < numberOfBoxes; i++) {
        let $box = $('<div></div>');
        $box.addClass('overlayBox');
        $box.width(`${boxWidth}px`);
        $box.height(`${boxHeight}px`);
        $box.on('mouseover', hoverFunction);
        $box.on('click', clickFunction);
        $('#overlay').append($box);
    }
    drawMap();
})

function hoverFunction(e){
    if(isDown){
        colorMap[$('#overlay').children().index(e.currentTarget)] = k;
        drawMap();
    }
}

function clickFunction(e){
    colorMap[$('#overlay').children().index(e.currentTarget)] = 5;
    drawMap();
}

const canvasEl = document.getElementById('canvas')

function drawMap(){
    canvasEl.width = windowWidth;
	canvasEl.height = windowHeight;
    let ctx = document.querySelector('canvas').getContext('2d');
    ctx.imageSmoothingEnabled = false;

    for (var i = 0; i < colorMap.length; i++) {
        let y = Math.floor(i * boxWidth/windowWidth) * boxHeight;
        let x = Math.floor((i * boxWidth) % windowWidth);

        ctx.fillStyle = 'hsla(' + colorMap[i]*60 + ',100%,50%,0.9)';
        ctx.fillRect(x,y,boxWidth,boxHeight);
    }

    ctx.fillStyle = 'black'
    ctx.font = "12px Arial"
    relationDatabase.forEach(country => {
        ctx.fillText(`${country.id}-${country.name} ${country.owner.name}(${country.troops})`, country.x, country.y);
    })
}

//console.log relations
relationDatabase.forEach(country => {
    let naboArray = []
    country.relations.forEach(nabo => {
        naboArray.push(relationDatabase[nabo].name)
    })
    console.log(country.name, naboArray)
})

//GAME

const players = 4;
const startTropper = 12;
let turn = 0;

class Player{
    constructor(name){
        this.name = name;
        this.countries = [];
        this.disposableTroops = startTropper;
    }
}

const names = [
    'Garry Chess',
    'Hans',
    'Hitler',
    'Ghandi',
    'Joe Biden',
    'Trump',
    'Magnus Carlsen',
    'FNs fredsbevarende styrker',
    'Han Solo',
    'Zevs',
    'Lege i alt',
    'Franklin'
]

const countriesPerPlayer = Math.ceil(relationDatabase.length/players)

let playersArray = [];

//lager alle spillere
for(let i = 0; i< players; i++){
    let player = new Player(names[Math.floor(Math.random()*names.length)]);
    playersArray.push(player)
}

//legger til land til hver spiller
relationDatabase.forEach(country => {
    //velger spiller som skal få landet
    let selectedPlayer = playersArray[Math.floor(Math.random()*players)];
    while(selectedPlayer.countries.length >= countriesPerPlayer){
        selectedPlayer = playersArray[Math.floor(Math.random()*players)];
    }

    //gir spilleren landet
    selectedPlayer.countries.push(country.id);
    selectedPlayer.disposableTroops -= 1;
    relationDatabase[relationDatabase.indexOf(country)].owner = selectedPlayer;
    relationDatabase[relationDatabase.indexOf(country)].troops += 1;
})

//alle landene til en player
function namesOfCountries(player){
    let cArray = []
    player.countries.forEach(c => {
        cArray.push(relationDatabase[c].name)
    })
    return cArray;
}
playersArray.forEach(player => {
    console.log(player, namesOfCountries(player))
})

let playerTurn = 0;
let p = playersArray[playerTurn];

$('.modal').toggle();

placeTroopMenu()
function placeTroopMenu(){
    let num = 0;
    playersArray.forEach(p => {
        num += p.disposableTroops;
    })
    if(num == 0){
        turn1()
    }else if(p.disposableTroops == 0){
        if(playerTurn == players - 1){
            playerTurn = 0;
            turn++;
        } else {
            playerTurn++;
        }
        p = playersArray[playerTurn];
        drawMap();
        placeTroopMenu();
    } else {
        //skriver hvem det er sin tur
        let text = `<h2>Nå er det ${p.name} sin tur</h2>`;
        //array med navnene på territoriene
        let text2 = `<p>Du har territoriene ${namesOfCountries(p)}`;

        let text3 = `<p>Hvor vil du putte din tropp? Du har ${p.disposableTroops} tropper igjen å plassere.`;
        $('.modal').html(text + text2 + text3)

        namesOfCountries(p).forEach((country,i) => {
            let $btn = $(`<button>${country}(${relationDatabase[p.countries[i]].troops})</button>`);
            $btn.on('click', placeTroop)
            $('.modal').append($btn);
        })
    }
}

function placeTroop(e){
    p.disposableTroops -= 1;
    relationDatabase[p.countries[$('button').index(e.currentTarget)]].troops += 1;
    if(playerTurn == players - 1){
        playerTurn = 0;
        turn++;
    } else {
        playerTurn++;
    }
    p = playersArray[playerTurn];
    drawMap();
    placeTroopMenu();
}

function turn1() {
    playerTurn = 0;
    p = playersArray[playerTurn];
    //skriver hvem det er sin tur
    let text = `<h2>Nå er det ${p.name} sin tur</h2>`;
    //array med navnene på territoriene
    let text2 = `<p>Du har territoriene ${namesOfCountries(p)}`;

    let text3 = `<p>Hvor vil du angripe fra?</p>`;
    $('.modal').html(text + text2 + text3)

    namesOfCountries(p).forEach((country,i) => {
        if(relationDatabase[p.countries[i]].troops > 1){
            let $btn = $(`<button>${country}(${relationDatabase[p.countries[i]].troops})</button>`);
            $btn.on('click', );
            $('.modal').append($btn);
        }
    })
}

function turn1From(player){

}

function turn1To(player){
    
}