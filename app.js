var xoro = true;
var win = false;
var winx = false;
var computer = false;
var mov = 0;
var lastmov = [0, 0];
var center = false;
var px = 0;
var po = 0;
var xorofor = false;
var x = null;
var count = 0;
var positioned = true;
var yourturn = false;
var name1 = "";
var name2 = "";
var arraygrid = [
    ["gridnic", "gridena", "griddva"],
    ["gridtri", "gridstiri", "gridpet"],
    ["gridsest", "gridsedem", "gridosem"]
];
var grid = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];
var gridNoControlcolumn = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];
var gridNoControlrow = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
];
var gridNoControl = ["1", "andres", "3", "2", "chang", "5", "3", "mendel", "5"];
var moves = 0;

function play(clicked_id) {
    if (positioned) {
        if (document.getElementById("s1").checked) {
            onevsone(clicked_id);
        } else if (document.getElementById("s2").checked || document.getElementById("s3").checked) {
            onevscomputer(clicked_id);
        } else if (document.getElementById("s4").checked) {
            online(clicked_id);
        }
    }

}

function change() {
    myFunctiontri();
    if (document.getElementById("s4").checked) {
        serverX();
    } else if (document.getElementById("s2").checked){
        name1 = prompt("Please enter your name:", "");
        alert(name1);
    }
}

function onevsone(clicked_id) {
    var stanje = document.getElementById(clicked_id);
    var containena = stanje.innerHTML.indexOf('×') !== -1;
    var containdva = stanje.innerHTML.indexOf('○') !== -1;
    /*alert(stanje.innerHTML);*/
    if ((containena || containdva) || win) {
        return;
    }
    if (xoro) {
        stanje.innerHTML = "×";
        xoro = false;
        stanje.classList.add("x");
        control("×", clicked_id);
    } else {
        stanje.innerHTML = "○";
        xoro = true;
        stanje.classList.add("o");
        control("○", clicked_id);
    }
    functionWinorLose();
}


function control(sign, clicked_id) {
    for (var i = 0; i < 3; i++) {
        var position = arraygrid[i].indexOf(clicked_id);
        if (position > -1) {
            if (sign == '×') {
                grid[i][position] = 1;
            } else if (sign == '○') {
                grid[i][position] = 0;
            }
        }
    }
    /*console.table(grid);*/
}

function functionWinorLose() {
    for (var i = 0; i < 3; i++) {
        if (grid[i][0] == 1 && grid[i][1] == 1 && grid[i][2] == 1) {
            win = true;
            winx = true;
            /*alert("Win X");*/
            px++;
            document.getElementById("spanx").innerHTML = px;
            document.getElementById("scorex").classList.add("scoreWinx");
            document.getElementById("gridtwo").classList.add("win" + (6 + i));
        } else if (grid[i][0] == 0 && grid[i][1] == 0 && grid[i][2] == 0) {
            win = true;
            po++;
            document.getElementById("spano").innerHTML = po;
            document.getElementById("scoreo").classList.add("scoreWino");
            document.getElementById("gridtwo").classList.add("win" + (14 + i));
        } else if (grid[0][i] == 1 && grid[1][i] == 1 && grid[2][i] == 1) {
            win = true;
            winx = true;
            px++;
            document.getElementById("spanx").innerHTML = px;
            document.getElementById("scorex").classList.add("scoreWinx");
            document.getElementById("gridtwo").classList.add("win" + (3 + i));
        } else if (grid[0][i] == 0 && grid[1][i] == 0 && grid[2][i] == 0) {
            win = true;
            po++;
            document.getElementById("spano").innerHTML = po;
            document.getElementById("scoreo").classList.add("scoreWino");
            document.getElementById("gridtwo").classList.add("win" + (11 + i));
        }
    }
    if (grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == 1) {
        win = true;
        winx = true;
        px++;
        document.getElementById("spanx").innerHTML = px;
        document.getElementById("scorex").classList.add("scoreWinx");
        document.getElementById("gridtwo").classList.add("win2");
    }
    if (grid[0][0] == 0 && grid[1][1] == 0 && grid[2][2] == 0) {
        win = true;
        po++;
        document.getElementById("spano").innerHTML = po;
        document.getElementById("scoreo").classList.add("scoreWino");
        document.getElementById("gridtwo").classList.add("win10");
    }
    if (grid[2][0] == 1 && grid[1][1] == 1 && grid[0][2] == 1) {
        win = true;
        winx = true;
        px++;
        document.getElementById("spanx").innerHTML = px;
        document.getElementById("scorex").classList.add("scoreWinx");
        document.getElementById("gridtwo").classList.add("win1");
    }
    if (grid[2][0] == 0 && grid[1][1] == 0 && grid[0][2] == 0) {
        win = true;
        po++;
        document.getElementById("spano").innerHTML = po;
        document.getElementById("scoreo").classList.add("scoreWino");
        document.getElementById("gridtwo").classList.add("win9");
    }
    if (winx && document.getElementById("s2").checked) {
        zapisi();
    }
}




function myFunctiontri() {
    xoro = true;
    winx = false;
    document.getElementById("scorex").classList.remove("scoreWinx");
    document.getElementById("scoreo").classList.remove("scoreWino");
    document.getElementById("gridtwo").classList.remove("win1");
    document.getElementById("gridtwo").classList.remove("win2");
    document.getElementById("gridtwo").classList.remove("win9");
    document.getElementById("gridtwo").classList.remove("win10");
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.getElementById(arraygrid[i][j]).innerHTML = '';
            document.getElementById(arraygrid[i][j]).classList.remove("x");
            document.getElementById(arraygrid[i][j]).classList.remove("o");
            document.getElementById("gridtwo").classList.remove("win" + (3 + i));
            document.getElementById("gridtwo").classList.remove("win" + (6 + i));
            document.getElementById("gridtwo").classList.remove("win" + (11 + i));
            document.getElementById("gridtwo").classList.remove("win" + (14 + i));
            grid[i][j] = -1;
            mov = 0;
            gridNoControlcolumn[i][j] = -1;
            gridNoControlrow[i][j] = -1;
            center = false;
            if (win) {
                setTimeout(pobrisi, 3000);
                win = false;
            } else {
                win = false;
            }
        }
    }

    function pobrisi() {
        document.getElementById("addBack").classList.remove("victoryO");
        document.getElementById("addBack").classList.remove("victoryX");
    }
}




function onevscomputer(clicked_id) {
    var stanje = document.getElementById(clicked_id);
    var containena = stanje.innerHTML.indexOf('×') !== -1;
    var containdva = stanje.innerHTML.indexOf('○') !== -1;
    /*alert(stanje.innerHTML);*/
    if ((containena || containdva) || win) {
        return;
    } else {
        stanje.innerHTML = "×";
        stanje.classList.add("x");
        control("×", clicked_id);
        mov++;
        if (clicked_id == arraygrid[1][1]) {
            center = true;
        }
        functionWinorLose();
    }
    positioned = false;
    if (center && mov < 2) {
        setTimeout(computerVsone([2, 0]), 500);
    } else if (mov < 2) {
        setTimeout(computerVsone([1, 1]), 500);
    } else {
        if (document.getElementById("s2").checked) {
            setTimeout(computerVsimpossible, 500);
        } else {
            setTimeout(impossible, 500);
        }
    }
}

function computerVsone(positionCom) {
    positioned = true;
    if (grid[positionCom[0]][positionCom[1]] == -1 && !win) {
        document.getElementById(arraygrid[positionCom[0]][positionCom[1]]).innerHTML = '○';
        document.getElementById(arraygrid[positionCom[0]][positionCom[1]]).classList.add("o");
        control('○', arraygrid[positionCom[0]][positionCom[1]]);
        lastmov = positionCom;
        functionWinorLose();
    } else if (!win) {
        computerVsone([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
    }
}

function uncheckTableRow() {
    for (var i = 0; i < 3; i++) {
        if (grid[i][0] != -1 && grid[i][1] != -1 && grid[i][2] != -1) {
            gridNoControlrow[i][0] = 0;
            gridNoControlrow[i][1] = 0;
            gridNoControlrow[i][2] = 0;
        }
        if (grid[i][0] == 0 && grid[i][1] == 0 && grid[i][2] == 0) {
            gridNoControlrow[i][0] = 0;
            gridNoControlrow[i][1] = 0;
            gridNoControlrow[i][2] = 0;
        }
    }
}

function uncheckTableColumn() {
    for (var i = 0; i < 3; i++) {
        if (grid[0][i] != -1 && grid[1][i] != -1 && grid[2][i] != -1) {
            gridNoControlcolumn[0][i] = 0;
            gridNoControlcolumn[0][i] = 0;
            gridNoControlcolumn[0][i] = 0;
        }
        if (grid[0][i] == 0 && grid[1][i] == 0 && grid[2][i] == 0) {
            gridNoControlrow[i][0] = 0;
            gridNoControlrow[i][1] = 0;
            gridNoControlrow[i][2] = 0;
        }
    }
}


function computerVsimpossible() {
    var modified = false;
    uncheckTableRow();
    uncheckTableColumn();
    console.log(grid);
    console.log(gridNoControlrow);
    console.log(gridNoControlcolumn);
    for (var i = 0; i < 3; i++) {
        if ((grid[i][0] == 1 && grid[i][1] == 1 || grid[i][0] == 1 && grid[i][2] == 1 ||
                grid[i][1] == 1 && grid[i][2] == 1) &&
            (gridNoControlrow[i][0] == -1 && gridNoControlrow[i][1] == -1 && gridNoControlrow[i][2] == -1)) {
            var indexod = grid[i].indexOf(-1);
            modified = true;
            computerVsone([i, indexod]);
            break;
        } else if ((grid[0][i] == 1 && grid[1][i] == 1 || grid[0][i] == 1 && grid[2][i] == 1 ||
                grid[1][i] == 1 && grid[2][i] == 1) &&
            (gridNoControlcolumn[0][i] == -1 && gridNoControlcolumn[0][i] == -1 && gridNoControlcolumn[0][i] == -1)) {
            var indexod;
            for (var j = 0; j < 3; j++) {
                if (grid[j][i] == -1) {
                    indexod = j;
                    break;
                }
            }
            computerVsone([indexod, i]);
            /*alert([indexod, i]);*/
            modified = true;
            break;
        }
    }
    if (!modified && grid[2][0] == 1 && grid[1][1] == 1 && grid[0][2] == -1) {
        computerVsone([0, 2]);
    } else if (!modified && grid[1][1] == 1 && grid[0][2] == 1 && grid[2][0] == -1) {
        computerVsone([2, 0]);
    } else if (!modified && grid[2][0] == 1 && grid[0][2] == 1 && grid[1][1] == -1) {
        computerVsone([1, 1]);
    } else if (!modified && grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == -1) {
        computerVsone([2, 2]);
    } else if (!modified && grid[1][1] == 1 && grid[2][2] == 1 && grid[0][0] == -1) {
        computerVsone([0, 0]);
    } else if (!modified && grid[0][0] == 1 && grid[2][2] == 1 && grid[1][1] == -1) {
        computerVsone([1, 1]);
    } else if (!modified && grid[0][0] == 1 && grid[2][2] == 1 && grid[1][1] == -1) {
        computerVsone([1, 1]);
    } else if (!modified) {
        if (grid[0][0] == 1 && grid[2][2] == 1 && grid[1][0] == -1) {
            computerVsone([1, 0]);
        } else if (grid[2][0] == 1 && grid[0][2] == 1 && grid[1][2] == -1) {
            computerVsone([1, 2]);
        } else if (grid[0][0] == 1 && grid[1][2] == 1 && grid[0][2] == -1) {
            computerVsone([0, 2]);
        } else if (grid[2][1] == 1 && grid[0][2] == 1 && grid[2][2] == -1) {
            computerVsone([2, 2]);
        } else if (grid[2][0] == 1 && grid[0][1] == 1 && grid[1][0] == -1) {
            computerVsone([1, 0]);
        } else if (grid[1][0] == 1 && grid[2][2] == 1 && grid[2][1] == -1) {
            computerVsone([2, 1]);
        } else if (center == true && grid[0][0] == -1 && grid[0][0] == -1) {
            computerVsone([0, 0]);
        } else if (center == true && grid[2][0] == -1 && grid[2][0] == -1) {
            computerVsone([2, 0]);
        } else if (center == true && grid[0][2] == -1 && grid[0][2] == -1) {
            computerVsone([0, 2]);
        } else if (center == true && grid[2][2] == -1 && grid[2][2] == -1) {
            computerVsone([2, 2]);
        } else {
            computerVsone([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
        }
    }


}


function impossible() {
    var modified = false;
    ifwin();
    uncheckTableRow();
    uncheckTableColumn();
    console.log(grid);
    console.log(gridNoControlrow);
    console.log(gridNoControlcolumn);
    if (!win) {
        for (var i = 0; i < 3; i++) {
            if ((grid[i][0] == 1 && grid[i][1] == 1 || grid[i][0] == 1 && grid[i][2] == 1 ||
                    grid[i][1] == 1 && grid[i][2] == 1) &&
                (gridNoControlrow[i][0] == -1 && gridNoControlrow[i][1] == -1 && gridNoControlrow[i][2] == -1)) {
                var indexod = grid[i].indexOf(-1);
                modified = true;
                computerVsone([i, indexod]);
                break;
            } else if ((grid[0][i] == 1 && grid[1][i] == 1 || grid[0][i] == 1 && grid[2][i] == 1 ||
                    grid[1][i] == 1 && grid[2][i] == 1) &&
                (gridNoControlcolumn[0][i] == -1 && gridNoControlcolumn[0][i] == -1 && gridNoControlcolumn[0][i] == -1)) {
                var indexod;
                for (var j = 0; j < 3; j++) {
                    if (grid[j][i] == -1) {
                        indexod = j;
                        break;
                    }
                }
                computerVsone([indexod, i]);
                /*alert([indexod, i]);*/
                modified = true;
                break;
            }
        }
        if (!modified && grid[2][0] == 1 && grid[1][1] == 1 && grid[0][2] == -1) {
            computerVsone([0, 2]);
        } else if (!modified && grid[1][1] == 1 && grid[0][2] == 1 && grid[2][0] == -1) {
            computerVsone([2, 0]);
        } else if (!modified && grid[1][0] == 1 && grid[0][1] == 1 && grid[0][0] == -1) {
            computerVsone([0, 0]);
        } else if (!modified && grid[1][0] == 1 && grid[2][1] == 1 && grid[2][0] == -1) {
            computerVsone([2, 0]);
        } else if (!modified && grid[2][1] == 1 && grid[1][2] == 1 && grid[2][2] == -1) {
            computerVsone([2, 2]);
        } else if (!modified && grid[1][2] == 1 && grid[0][1] == 1 && grid[0][2] == -1) {
            computerVsone([0, 2]);
        } else if (!modified && grid[2][0] == 1 && grid[0][2] == 1 && grid[1][1] == -1) {
            computerVsone([1, 1]);
        } else if (!modified && grid[0][0] == 1 && grid[1][1] == 1 && grid[2][2] == -1) {
            computerVsone([2, 2]);
        } else if (!modified && grid[1][1] == 1 && grid[2][2] == 1 && grid[0][0] == -1) {
            computerVsone([0, 0]);
        } else if (!modified && grid[0][0] == 1 && grid[2][2] == 1 && grid[1][1] == -1) {
            computerVsone([1, 1]);
        } else if (!modified && grid[0][0] == 1 && grid[2][2] == 1 && grid[1][1] == -1) {
            computerVsone([1, 1]);
        } else if (!modified) {
            if (grid[0][0] == 1 && grid[2][2] == 1 && grid[1][0] == -1) {
                computerVsone([1, 0]);
            } else if (grid[2][0] == 1 && grid[0][2] == 1 && grid[1][2] == -1) {
                computerVsone([1, 2]);
            } else if (grid[0][0] == 1 && grid[1][2] == 1 && grid[0][2] == -1) {
                computerVsone([0, 2]);
            } else if (grid[2][1] == 1 && grid[0][2] == 1 && grid[2][2] == -1) {
                computerVsone([2, 2]);
            } else if (grid[2][0] == 1 && grid[0][1] == 1 && grid[1][0] == -1) {
                computerVsone([1, 0]);
            } else if (grid[1][0] == 1 && grid[2][2] == 1 && grid[2][1] == -1) {
                computerVsone([2, 1]);
            } else if (center == true && grid[0][0] == -1 && grid[0][0] == -1) {
                computerVsone([0, 0]);
            } else if (center == true && grid[2][0] == -1 && grid[2][0] == -1) {
                computerVsone([2, 0]);
            } else if (center == true && grid[0][2] == -1 && grid[0][2] == -1) {
                computerVsone([0, 2]);
            } else if (center == true && grid[2][2] == -1 && grid[2][2] == -1) {
                computerVsone([2, 2]);
            } else {
                computerVsone([Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)]);
            }
        }
    }


}

function ifwin() {
    for (var i = 0; i < 3; i++) {
        if ((grid[i][0] == 0 && grid[i][1] == 0 || grid[i][0] == 0 && grid[i][2] == 0 ||
                grid[i][1] == 0 && grid[i][2] == 0) &&
            (grid[i][0] == -1 || grid[i][1] == -1 || grid[i][2] == -1)) {
            var indexod = grid[i].indexOf(-1);
            computerVsone([i, indexod]);
            break;
        } else if ((grid[0][i] == 0 && grid[1][i] == 0 || grid[0][i] == 0 && grid[2][i] == 0 ||
                grid[1][i] == 0 && grid[2][i] == 0) &&
            (grid[0][i] == -1 || grid[0][i] == -1 || grid[0][i] == -1)) {
            var indexod;
            for (var j = 0; j < 3; j++) {
                if (grid[j][i] == -1) {
                    indexod = j;
                    break;
                }
            }
            computerVsone([indexod, i]);
            break;
        }
    }
    if (grid[2][0] == 0 && grid[1][1] == 0 && grid[0][2] == -1) {
        computerVsone([0, 2]);
    } else if (grid[2][0] == 0 && grid[0][2] == 0 && grid[1][1] == -1) {
        computerVsone([1, 1]);
    } else if (grid[1][1] == 0 && grid[0][2] == 0 && grid[2][0] == -1) {
        computerVsone([0, 2]);
    } else if (grid[2][2] == 0 && grid[1][1] == 0 && grid[0][0] == -1) {
        computerVsone([0, 0]);
    } else if (grid[0][0] == 0 && grid[1][1] == 0 && grid[2][2] == -1) {
        computerVsone([2, 2]);
    } else if (grid[0][0] == 0 && grid[2][2] == 0 && grid[1][1] == -1) {
        computerVsone([1, 1]);
    }
}



function online(clicked_id) {
    if (yourturn) {
        var element = document.getElementById(clicked_id);
        var containena = element.innerHTML.indexOf('×') !== -1;
        var containdva = element.innerHTML.indexOf('○') !== -1;
        /*alert(stanje.innerHTML);*/
        if ((containena || containdva) || win) {
            return;
        }
        if (xorofor) {
            element.innerHTML = "×";
            element.classList.add("x");
            control("×", clicked_id);
            console.log(grid);
            moves++;
            functionWinorLose();
        } else {
            element.innerHTML = "○";
            element.classList.add("o");
            control("○", clicked_id);
            console.log(grid);
            moves++;
            functionWinorLose();
        }
        x = clicked_id;
        serverPlay();
        yourturn = !yourturn;
    } else {
        return;
    }
}

function serverPlay() {
    xhttp = new XMLHttpRequest(); //AJAX object
    xhttp.onreadystatechange = moveReceived;
    xhttp.open("GET", x + xorofor, true);
    xhttp.send();
}

function serverX() {
    xhttp = new XMLHttpRequest(); //AJAX object
    xhttp.onreadystatechange = xorfor;
    xhttp.open("GET", "xoro", true);
    xhttp.send();
}

function xorfor() {
    if (xhttp.responseText == "true") {
        xorofor = true;
        yourturn = true;
    } else if (xhttp.responseText == "false") {
        serverFirst();
    }
}

function moveReceived() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        if (xhttp.responseText == "null") {
            setTimeout(serverPlay, 350);
        } else {
            var element = document.getElementById(xhttp.responseText);
            if (!xorofor) {
                element.innerHTML = "×";
                element.classList.add("x");
                control("×", xhttp.responseText);
                yourturn = !yourturn;
                functionWinorLose();
            } else {
                element.innerHTML = "○";
                element.classList.add("o");
                control("○", xhttp.responseText);
                yourturn = !yourturn;
                functionWinorLose();
            }
        }
    }
}

function serverFirst() {
    xhttp = new XMLHttpRequest(); //AJAX object
    xhttp.onreadystatechange = first;
    xhttp.open("GET", "first", true);
    xhttp.send();
}

function first() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        if (xhttp.responseText == "null") {
            setTimeout(serverFirst, 350);
        } else {
            var element = document.getElementById(xhttp.responseText);
            if (!xorofor) {
                element.innerHTML = "×";
                element.classList.add("x");
                control("×", xhttp.responseText);
                moves++;
                yourturn = !yourturn;
            } else {
                element.innerHTML = "○";
                element.classList.add("o");
                control("○", xhttp.responseText);
                moves++;
                yourturn = !yourturn;
            }
        }
    }
}

function zapisi() {
    if (mov < parseInt(gridNoControl[2])) {
        gridNoControl[1] = name1;
        gridNoControl[2] = mov;
    } else if (mov < parseInt(gridNoControl[5])) {
        gridNoControl[4] = name1;
        gridNoControl[5] = mov;
    } else if (mov < parseInt(gridNoControl[8])) {
        gridNoControl[7] = name1;
        gridNoControl[8] = mov;
    }
    loadTableRank();
    save();
}



function loadTableRank() {
    document.getElementById("name1").innerHTML = gridNoControl[1];
    document.getElementById("score1").innerHTML = gridNoControl[2];
    document.getElementById("name2").innerHTML = gridNoControl[4];
    document.getElementById("score2").innerHTML = gridNoControl[5];
    document.getElementById("name3").innerHTML = gridNoControl[7];
    document.getElementById("score3").innerHTML = gridNoControl[8];
}


function load() {
    xhttp = new XMLHttpRequest(); // AJAX object
    xhttp.onreadystatechange = loadtabledva;
    xhttp.open("GET", "loadtable.txt", true);
    xhttp.send();
}

function loadtabledva() {
    if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            gridNoControl = xhttp.responseText.split(",");
            loadTableRank();
        } else {
            window.alert("Server communication error!");
        }
        xhttp = null;
    }
}



function save() {
    xhttp = new XMLHttpRequest(); // AJAX object
    xhttp.onreadystatechange = savetabledva;
    xhttp.open("GET", "savetable.txt?" + gridNoControl.toString(), true);
    xhttp.send();
}


function savetabledva() {
    if (xhttp.readyState == 4) {
        if (xhttp.status == 200) {
            /*alert("ok");*/
        } else {
            window.alert("Server communication error!");
        }
        xhttp = null;
    }
}
