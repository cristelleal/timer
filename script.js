// Déclaration des variables

let sp, btnStart, btnStop, t, ms, mn, h

// Initialisation des variables au chargement de la page

window.onload = function (){
    sp = document.getElementsByTagName('span');
    btnStart = document.getElementById('start');
    btnStop = document.getElementById('stop');
    t;
    ms = 0, s = 0, mn = 0, h = 0;
}

// Mise en place du compteur

function updateChrono (){
    ms += 1;
    if (ms == 10){
        ms = 1;
        s += 1
    }
    if (s == 60){
        s = 0;
        mn += 1;
    }
    if (mn == 60){
        mn = 0;
        h += 1
    }
    
// Insertion des valeurs dans les spans
    
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Mise en place de la fonction start

function start(){
    t = setInterval(updateChrono, 100);
    btnStart.disabled = true
}

// Mise en place de la fonction stop

function stop(){
    clearInterval(t);
    btnStart.disabled = false;
}

// Mise en place fonction reset

function reset(){
    clearInterval(t);
    btnStart.disabled = false;
    ms = 0, s = 0, mn = 0, h = 0;

    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = mn + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
