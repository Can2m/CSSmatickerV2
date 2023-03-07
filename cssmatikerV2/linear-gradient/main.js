var btn = document.getElementById('btn');
var box = document.getElementById('box');
var color1 = document.getElementById('clr1');
var color2 = document.getElementById('clr2');
var color3 = document.getElementById('clr3');

var renkArttır = document.getElementById('renk-arttır');
var renkAzalt = document.getElementById('renk-azalt');

var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var button5 = document.getElementById('button5');
var button6 = document.getElementById('button6');
var button7 = document.getElementById('button7');
var button8 = document.getElementById('button8');

var codeText = document.getElementById('code-text');

var btncontrol = 0;

var renkcontrol = 0;

var kapat = false;

console.log(renkcontrol)
renkArttır.addEventListener('click', function () {

    if (renkcontrol == 1) {
        document.getElementById('artı-renkler1').style.display = "inline-block";
        document.getElementById('rang3').style.display = "block";
    }

    if (renkcontrol == 2) {
        document.getElementById('artı-renkler2').style.display = "inline-block";
        document.getElementById('rang4').style.display = "block";
    }

    renkcontrol = renkcontrol + 1;

    if (renkcontrol >= 2) {
        renkcontrol = 2;
    }

    console.log(renkcontrol)

});

renkAzalt.addEventListener('click', function () {

    if (renkcontrol == 2) {
        document.getElementById('artı-renkler2').style.display = "none";
        document.getElementById('rang3').style.display = "none";
    }

    if (renkcontrol == 1) {
        document.getElementById('artı-renkler1').style.display = "none";
        document.getElementById('rang4').style.display = "none";
    }

    renkcontrol--;

    if (renkcontrol <= 0) {
        renkcontrol = 0;
    }

    console.log(renkcontrol)

});

color1.oninput = function () {
    box.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ")"
}

color2.oninput = function () {
    box.style.background = "linear-gradient(" + color1.value + ", " + color2.value + ")"
}

rang.oninput = function () {

    if (btncontrol == "1") {
        box.style.background = "linear-gradient(to top left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "2") {
        box.style.background = "linear-gradient(to top, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "3") {
        box.style.background = "linear-gradient(to top right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "4") {
        box.style.background = "linear-gradient(to left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "5") {
        box.style.background = "linear-gradient(to right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "6") {
        box.style.background = "linear-gradient(to bottom left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "7") {
        box.style.background = "linear-gradient(to bottom, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "8") {
        box.style.background = "linear-gradient(to bottom right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }
}

rang2.oninput = function () {

    if (btncontrol == "1") {
        box.style.background = "linear-gradient(to top left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "2") {
        box.style.background = "linear-gradient(to top, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "3") {
        box.style.background = "linear-gradient(to top right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "4") {
        box.style.background = "linear-gradient(to left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "5") {
        box.style.background = "linear-gradient(to right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "6") {
        box.style.background = "linear-gradient(to bottom left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "7") {
        box.style.background = "linear-gradient(to bottom, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }

    if (btncontrol == "8") {
        box.style.background = "linear-gradient(to bottom right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
    }
}


button1.addEventListener('click', function () {
    btncontrol = 1;
    box.style.background = "linear-gradient(to top left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
});

button2.addEventListener('click', function () {
    btncontrol = 2;
    box.style.background = "linear-gradient(to top, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
});

button3.addEventListener('click', function () {
    btncontrol = 3;
    box.style.background = "linear-gradient(to top right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
});

button4.addEventListener('click', function () {
    btncontrol = 4;
    box.style.background = "linear-gradient(to left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
});

button5.addEventListener('click', function () {
    btncontrol = 5;
    box.style.background = "linear-gradient(to right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%)"
});

button6.addEventListener('click', function () {
    btncontrol = 6;
    box.style.background = "linear-gradient(to bottom left, " + color1.value + " " + rang.value + "%, " + color2.value + ")"
});

button7.addEventListener('click', function () {
    btncontrol = 7;
    box.style.background = "linear-gradient(to bottom, " + color1.value + " " + rang.value + "%, " + color2.value + ")"
});

button8.addEventListener('click', function () {
    btncontrol = 8;
    box.style.background = "linear-gradient(to bottom right, " + color1.value + " " + rang.value + "%, " + color2.value + ")"
});




btn.addEventListener('click', function(){
    if(kapat == false){
        document.getElementById('code-page').classList.add('goster');
        kapat = !kapat;
    }
    
    if(kapat == true){
        setInterval(function() {
            document.getElementById('code-page').classList.remove('goster');
            kapat = !kapat;
        },5000);
    }

    if(btncontrol == 1){
        codeText.innerHTML = "background: linear-gradient(to top left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "2") {
        codeText.innerHTML = "background: linear-gradient(to top, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "3") {
        codeText.innerHTML = "background: linear-gradient(to top right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "4") {
        codeText.innerHTML = "background: linear-gradient(to left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "5") {
        codeText.innerHTML = "background: linear-gradient(to right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "6") {
        codeText.innerHTML = "background: linear-gradient(to bottom left, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "7") {
        codeText.innerHTML = "background: linear-gradient(to bottom, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

    if (btncontrol == "8") {
        codeText.innerHTML = "background: linear-gradient(to bottom right, " + color1.value + " " + rang.value + "%, " + color2.value + " " + rang2.value + "%);"
    }

});
