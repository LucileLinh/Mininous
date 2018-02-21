/* Code by NGUYEN Lucile My-Linh
 *
 *
 */

var biblioImg;
biblioImg = ['IMGauthor/FRUITS/amande.png', 'IMGauthor/FRUITS/carotte.png', 'IMGauthor/FRUITS/citron.png', 'IMGauthor/FRUITS/pasteque.png', 'IMGauthor/FRUITS/petitpois.png', 'IMGauthor/FRUITS/poire.png', 'IMGauthor/FRUITS/pomme.png', 'IMGauthor/FRUITS/pommedeterre.png', 'IMGauthor/FRUITS/pommeM.png', 'IMGauthor/FRUITS/poireM.png', 'IMGauthor/FRUITS/citronM.png', 'IMGauthor/SAVANE/singe.jpg', 'IMGauthor/SAVANE/zebre.jpg', 'IMGauthor/SAVANE/girafe.jpg', 'IMGauthor/SAVANE/lion.jpg', 'IMGauthor/SAVANE/crocodile.jpg'];
var biblioAudio;
biblioAudio = ['audio/FRUITS/almond.mp3', 'audio/FRUITS/carrot.mp3', 'audio/FRUITS/lemon.mp3', 'audio/FRUITS/watermelon.mp3', 'audio/FRUITS/bean.mp3', 'audio/FRUITS/pear.mp3', 'audio/FRUITS/apple.mp3', 'audio/FRUITS/potatoes.mp3', 'audio/FRUITS/apple.mp3', 'audio/FRUITS/pear.mp3', 'audio/FRUITS/lemon.mp3', 'audio/SAVANE/chimpanze.mp3', 'audio/SAVANE/zebra.mp3', 'audio/SAVANE/giraffe.mp3', 'audio/SAVANE/lion.mp3', 'audio/SAVANE/crocodile.mp3'];
var num = 6;
var cardDim = 'L';
var tabCardsVal = new Array(num);
var flippedCardId = [];
var flippedCardAlt = [];
var imgFound = 0;

function getTransformPropretyIndex() {
    'use strict';
    var browser = navigator.userAgent;
    if (browser.search("Chrome") >= 0 || browser.search("Safari") >= 0 || browser.search("Opera") >= 0) {
        return 1;
    } else if (browser.search("Mozilla") >= 0 || browser.search("MSIE") >= 0) {
        return 2;
    }
}

//prototype cards shuffle:
Array.prototype.card_shuffle = function () {
    var i = this.length;
    var j;
    var temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i + 1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};

function selectTheme(url, id) { //return an array of Object
    var data = [];
    var xmlhttp = new XMLHttpRequest();
    console.log(this);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            data = JSON.parse(xmlhttp.responseText);
            var i;
            biblioImg = [];
            biblioAudio = [];
            for (i = 0; i < data.length; i++) {
                biblioImg[i] = data[i].source;
                biblioAudio[i] = data[i].audioSrc;

            }
            genTab();
        }
        document.getElementById('img-theme1').style.border = "0";
        document.getElementById('img-theme2').style.border = "0";
        document.getElementById('img-theme3').style.border = "0";
        document.getElementById(id).style.border = '4px solid orange';
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

//set and cards number and num:
function setSize(el, x, w) {
    num = x;
    cardDim = w;
    document.getElementById('b1').style.backgroundColor = "white";
    document.getElementById('b2').style.backgroundColor = "white";
    document.getElementById('b3').style.backgroundColor = "white";
    document.getElementById(el).style.backgroundColor = "orange";
    restartGame();
}

//generer un jeu: 
function genTab() {
    tabCardsVal = new Array(num);
    resetGame();
    //generer le tableau des valeurs des carte aleatoirement: 
    var i, j;
    for (i = 0; i < num; i += 2) {
        do {
            var x = Math.floor(Math.random() * biblioImg.length);
        } while (tabCardsVal.indexOf(x) >= 0);
        tabCardsVal[i] = tabCardsVal[i + 1] = x;
    }
    tabCardsVal.card_shuffle();
    //generer les div pour les cartes:
    var parent = document.getElementById("memory_board");
    for (j = 0; j < tabCardsVal.length; j++) {
        var cardDiv = document.createElement("div");
        var backCard = document.createElement("IMG");
        var frontCard = document.createElement("IMG");
        var soundCard = document.createElement("audio");
        //cree attributes pour div de carte
        cardDiv.setAttribute("class", "flip3D_" + cardDim);
        cardDiv.setAttribute("id", "Card_" + j);
        //cree attribute pour le dos de la carte:
        backCard.setAttribute("class", "backCard");
        backCard.setAttribute("id", "backCard_" + j);
        backCard.setAttribute("onclick", "flipOn(this)");
        backCard.setAttribute("src", "Images/dos.png");
        //cree attribute pour la face de la carte:
        frontCard.setAttribute("class", "frontCard");
        frontCard.setAttribute("id", "frontCard_" + j);
        frontCard.setAttribute("src", "" + biblioImg[tabCardsVal[j]]);
        frontCard.setAttribute("alt", "" + tabCardsVal[j]);
        //cree son audio
        soundCard.setAttribute("src", "" + biblioAudio[tabCardsVal[j]]);

        parent.appendChild(cardDiv);
        cardDiv.appendChild(frontCard);
        cardDiv.appendChild(backCard);
        cardDiv.appendChild(soundCard);
    }
};

//appel function addCredit.php sans refresh:
function addCredit() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "PHP/includes/addCredit.php", true);
    xmlhttp.send();
}

//tourner les cards:
function flipOn(t) {
    //find the right transform for browser
    var browserIndex = getTransformPropretyIndex();
    var flippedOn;
    if (browserIndex == 1) {
        flippedOn = (t.style.WebkitTransform).search("rotateY(-180deg)");
    } else if (browserIndex == 2) {
        flippedOn = (t.style.transform).search("rotateY(-180deg)");
    }

    if (flippedOn < 0 && flippedCardId.length < 2) {
        var card = t.parentElement;
        var cardId = t.parentElement.id;
        var front = document.getElementById("front" + cardId);
        t.style.WebkitTransform = "perspective(600px) rotateY(-180deg)";
        t.style.msTransform = "perspective(600px) rotateY(-180deg)";
        t.style.transform = "perspective(600px) rotateY(-180deg)";
        front.style.WebkitTransform = "perspective(600px) rotateY(0deg)";
        front.style.msTransform = "perspective(600px) rotateY(0deg)";
        front.style.transform = "perspective(600px) rotateY(0deg)";
        playAudioId(card);
        if (flippedCardId.length == 0) {
            flippedCardId.push(cardId);
            flippedCardAlt.push(front.alt);
        } else if (flippedCardId.length == 1) {
            flippedCardId.push(cardId);
            flippedCardAlt.push(front.alt);
            //cards match:
            if (flippedCardAlt[0] == flippedCardAlt[1]) {
                imgFound += 2;
                flippedCardId = [];
                flippedCardAlt = [];
                //test fin de jeu:
                if (imgFound == tabCardsVal.length) {
                    addCredit();
                    setTimeout(showMsg, 500);
                    playAudioCheering();
                }
            } else {
                function flipOff() {
                    var frontCard1 = document.getElementById("" + flippedCardId[0]).childNodes[0];
                    var backCard1 = document.getElementById("" + flippedCardId[0]).childNodes[1];
                    var frontCard2 = document.getElementById("" + flippedCardId[1]).childNodes[0];
                    var backCard2 = document.getElementById("" + flippedCardId[1]).childNodes[1];
                    //retourner card1
                    backCard1.style.WebkitTransform = "perspective(600px) rotateY(0deg)";
                    backCard1.style.msTransform = "perspective(600px) rotateY(0deg)";
                    backCard1.style.transform = "perspective(600px) rotateY(0deg)";
                    frontCard1.style.WebkitTransform = "perspective(600px) rotateY(180deg)";
                    frontCard1.style.msTransform = "perspective(600px) rotateY(180deg)";
                    frontCard1.style.transform = "perspective(600px) rotateY(180deg)";
                    //retourner card2	
                    backCard2.style.WebkitTransform = "perspective(600px) rotateY(0deg)";
                    backCard2.style.msTransform = "perspective(600px) rotateY(0deg)";
                    backCard2.style.transform = "perspective(600px) rotateY(0deg)";
                    frontCard2.style.WebkitTransform = "perspective(600px) rotateY(180deg)";
                    frontCard2.style.msTransform = "perspective(600px) rotateY(180deg)";
                    frontCard2.style.transform = "perspective(600px) rotateY(180deg)";
                    flippedCardId = [];
                    flippedCardAlt = [];
                }
                setTimeout(flipOff, 1000);
            }
        }
    }
};

function resetGame() {
    document.getElementById('memory_board').innerHTML = "";
    imgFound = 0;
    cardFlipped = [];
    flippedCardId = [];
}

function showMsg() {
    var x = document.getElementById("boxMsg");
    x.style.visibility = "visible";
    x.style.zIndex = "99";
}

function hideById(id) { //hide element by Id using visibility
    document.getElementById(id).style.visibility = "hidden";
}

function restartGame() {
    hideById('boxMsg');
    genTab();
}

function playAudioId(el) {
    el.getElementsByTagName("audio")[0].play();
}

function playAudioCheering() {
    cheeringAudio.play();
}