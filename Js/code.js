var body = document.getElementById("body");
var placar = document.createElement("div");
var Tmodal = document.getElementById("Tmodal");
var Vmodal = document.getElementById("Vmodal");
var Lmodal = document.getElementById("Lmodal");
var Mmodal = document.getElementById("Mmodal");
var Vspan = document.getElementsByClassName("close")[0];
var Lspan = document.getElementsByClassName("close")[1];
var Mspan = document.getElementsByClassName("close")[2];
var musicCheck = document.getElementById("music");
var sfxCheck = document.getElementById("sfx");
var markBox;
var markBoxV = false;
let difficultLvl = 1;
let grid;
let cardsF = 0;
let score = 0;
let OneCount = 0;
let TwoCount = 0;
let ThreeCount = 0;
var ExplosionSFXog = new Audio;
var FlipSFXog = document.createElement('audio');

FlipSFXog.src = "./Sounds/Flip.mp3";
ExplosionSFXog.src = "./Sounds/Explosion.mp3";

placar.setAttribute("class", "placar");
var text = document.createTextNode(score);
placar.appendChild(text);

function sound(type)
{
    if(type == "sfxF" && sfxCheck.checked == true)
    {
        let FlipSFX = FlipSFXog.cloneNode();
        FlipSFX.play();
    }
    if(type == "sfxE" && sfxCheck.checked == true)
    {
        let ExplosionSFX = ExplosionSFXog.cloneNode();
        ExplosionSFX.play();
    }
    if(type == "music" && musicCheck.checked == true)
    {
        let FlipSFX = FlipSFXog.cloneNode();
        FlipSFX.play();
    }
}

function difficultCheck()
{
    if(difficultLvl < 5)
    {
        grid = 6;
    }
    if(difficultLvl > 4 && difficultLvl < 7)
    {
        grid = 8;
    }
    if(difficultLvl > 6)
    {
        body.style.fontSize = "115%";
        grid = 11;
    }
}

function tmodalShow()
{
    Tmodal.style.display = "block";
}

function tmodalClose()
{
    Tmodal.style.display = "none";
}

Vspan.onclick = function()
{
    Vmodal.style.display = "none";
    difficultLvl += 1;
    difficultCheck();
    tableRemove();
}

Lspan.onclick = function()
{
    Lmodal.style.display = "none";
    difficultLvl = 1;
    OneCount = 0;
    ScoreUpadte();
    TwoCount = 0;
    ThreeCount = 0;
    difficultCheck();
    tableRemove();
}

Mspan.onclick = function()
{
    Mmodal.style.display = "none";
}

function ScoreUpadte()
{
    placar.removeChild(placar.firstChild)
    var text = document.createTextNode(score);
    placar.appendChild(text);
    if(ThreeCount == 0 && TwoCount == 0)
    {
        Vmodal.style.display = "block";
    }
}

function flip(e)
{
    if(markBoxV == true)
    {
        let verif = true;

        if(markBox.textContent == 0)
        {          
            for (let i = 0; i < e.target.childNodes.length; i++)
            {
                if(e.target.childNodes[i].className == "mb")
                {
                    e.target.removeChild(e.target.childNodes[i]);
                    i = -1;
                    verif = false;
                }
            }
            if(verif == true)
            {
                let div = document.createElement("div");
                div.appendChild(document.createTextNode(markBox.textContent));
                div.setAttribute("class", "mb");
                e.target.setAttribute("class", "box");
                e.target.appendChild(div);
            }
        }
        if(markBox.textContent == 1)
        {          
            for (let i = 0; i < e.target.childNodes.length; i++)
            {
                if(e.target.childNodes[i].className == "m1")
                {
                    e.target.removeChild(e.target.childNodes[i]);
                    i = -1;
                    verif = false;
                }
            }
            if(verif == true)
            {
                let div = document.createElement("div");
                div.appendChild(document.createTextNode(markBox.textContent));
                div.setAttribute("class", "m1");
                e.target.setAttribute("class", "box");
                e.target.appendChild(div);
            }
        }
        if(markBox.textContent == 2)
        {          
            for (let i = 0; i < e.target.childNodes.length; i++)
            {
                if(e.target.childNodes[i].className == "m2")
                {
                    e.target.removeChild(e.target.childNodes[i]);
                    i = -1;
                    verif = false;
                }
            }
            if(verif == true)
            {
                let div = document.createElement("div");
                div.appendChild(document.createTextNode(markBox.textContent));
                div.setAttribute("class", "m2");
                e.target.setAttribute("class", "box");
                e.target.appendChild(div);
            }
        }
        if(markBox.textContent == 3)
        {          
            for (let i = 0; i < e.target.childNodes.length; i++)
            {
                if(e.target.childNodes[i].className == "m3")
                {
                    e.target.removeChild(e.target.childNodes[i]);
                    i = -1;
                    verif = false;
                }
            }
            if(verif == true)
            {
                let div = document.createElement("div");
                div.appendChild(document.createTextNode(markBox.textContent));
                div.setAttribute("class", "m3");
                e.target.setAttribute("class", "box");
                e.target.appendChild(div);
            }
        }
    }
    else
    {
        let backup = e.target.firstChild;
        while(e.target.hasChildNodes())
        {
            e.target.removeChild(e.target.firstChild);
        }
        e.target.appendChild(backup);
        e.target.setAttribute("class", "flipped");
        e.target.setAttribute("onclick", "");
        if(cardsF == 0)
        {
            if(e.target.textContent == 0)
            {
                e.target.setAttribute("class", "Fbomb");
                score = 0;
                cardsF = 0;
                difficultLvl = 1;
                Lmodal.style.display = "block";
                sound("sfxE");
            }
            if(e.target.textContent == 1)
            {
                sound("sfxF");
                score += 1;
                cardsF += 1;
                OneCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 2)
            {
                sound("sfxF");
                score += 2;
                cardsF += 1;
                TwoCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 3)
            {
                sound("sfxF");
                score += 3;
                cardsF += 1;
                ThreeCount -= 1;
                ScoreUpadte();
            }
        }
        else
        {
            if(e.target.textContent == 0)
            {
                e.target.setAttribute("class", "Fbomb");
                score = 0;
                cardsF = 0;
                difficultLvl = 1;
                Lmodal.style.display = "block";
                sound("sfxE");
            }
            if(e.target.textContent == 1)
            {
                sound("sfxF");
                score *= 1;
                OneCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 2)
            {
                sound("sfxF");
                score += 2;
                cardsF += 1;
                TwoCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 3)
            {
                sound("sfxF");
                score += 3;
                cardsF += 1;
                ThreeCount -= 1;
                ScoreUpadte();
            }
        }
    }
}

function markWindow(e)
{
    markBox = e.target;
    if(markBoxV == true)
    {
        markBox.removeChild(markBox.firstChild)
        markBox.setAttribute("class", "mark");
        markBoxV = false;
    }
    else
    {
        Mmodal.style.display = "block";
    }
}

function mark(e)
{
    Mmodal.style.display = "none";
    let text = document.createTextNode(e.target.textContent);
    markBox.appendChild(text);
    if(e.target.textContent == 0)
    {
        markBox.setAttribute("class", "markSelcted Mbomb");
    }
    else
    {
        markBox.setAttribute("class", "markSelcted");
    }
    markBoxV = true;
}

function valueCalc(Zcount)
{
    let value; 
    if(difficultLvl == 1)
    {
        if(Zcount == 1)
        {
            value = Math.floor(Math.random() * 1.2) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 2.2);
        }
    }
    if(difficultLvl == 2)
    {
        if(Zcount == 1)
        {
            value = Math.floor(Math.random() * 1.5) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 2.5);
        }
    }
    if(difficultLvl == 3)
    {
        if(Zcount == 2)
        {
            value = Math.floor(Math.random() * 2.2) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 3.2);
        }
    }
    if(difficultLvl == 4)
    {
        if(Zcount == 3)
        {
            value = Math.floor(Math.random() * 2.5) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 3.5);
        }
    }
    if(difficultLvl == 5)
    {
        if(Zcount == 5)
        {
            value = Math.floor(Math.random() * 2.5) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 3.5);
        }
    }
    if(difficultLvl == 6)
    {
        if(Zcount < 4)
        {
            value = Math.floor(Math.random() * 1.5);
        }
        else
        {
            value = Math.floor(Math.random() * 3.5);
        }
    }
    if(difficultLvl == 7)
    {
        if(Zcount == 7)
        {
            value = Math.floor(Math.random() * 2.5) + 1;
        }
        else
        {
            value = Math.floor(Math.random() * 3.5);
        }
    }
    if(difficultLvl == 8)
    {
        if(Zcount == 8)
        {
            value = Math.floor(Math.random() * 1.2) + 2;
        }
        else
        {
            value = Math.floor(Math.random() * 3.5);
            if(value == 1)
            {
                value = 0;
            }
        }
    }
    if(difficultLvl == 9)
    {
        value = Math.floor(Math.random() * 3.5);
        if(value == 1)
        {
            value = 0;
        }
    }
    if(difficultLvl == 10)
    {
        value = Math.floor(Math.random() * 3.5);
        if(value == 1)
        {
            value = 0;
        }
    }
    return value;
}

function tableMake()
{
    var table = document.createElement("table");
    table.setAttribute("id", "table");

    for (let i = 0; i < grid; i++)
    {
        let tr = document.createElement("tr");
        tr.setAttribute("id", i);

        if(i==(grid-1))
        {
            for (let n = 0; n < grid; n++)
            {
                if(n==(grid-1))
                {
                    let td = document.createElement("td");
                    td.setAttribute("class", "mark");
                    td.setAttribute("onclick", "markWindow(event)");
                    tr.appendChild(td);
                }
                else
                {
                    let sum = 0;
                    let Zcount = 0;
                    let td = document.createElement("td");

                    let SubTable = document.createElement("table");
                    let SubTable2 = document.createElement("table");
                    let trSUM = document.createElement("tr");
                    let tdBomb = document.createElement("td");
                    let tdBomb2 = document.createElement("td");

                    td.setAttribute("class", "aux");
                    td.setAttribute("id",n);
                    SubTable.setAttribute("class", "subT");
                    SubTable2.setAttribute("class", "subT");
                    trSUM.setAttribute("class", "subTLine");
                    tdBomb.setAttribute("class", "bomb");
                    tdBomb2.setAttribute("style", "padding: 0;");

                    let trc = table.childNodes;
                    for (let q = 0; q < trc.length; q++)
                    {
                        var value = parseInt(trc[q].childNodes[n].textContent)
                        if(value == 0)
                        {
                            Zcount += 1;
                        }
                        else
                        {
                            sum += value;
                        }
                    }
                    txt = document.createTextNode(sum);
                    txt2 = document.createTextNode(Zcount);
                    trSUM.appendChild(txt);
                    tdBomb2.appendChild(txt2);
                    SubTable.appendChild(trSUM);
                    SubTable2.appendChild(tdBomb);
                    SubTable2.appendChild(tdBomb2);

                    td.appendChild(SubTable);
                    td.appendChild(SubTable2);

                    tr.appendChild(td);
                }
            }
        }
        else
        {
            let Zcount = 0;
            let sum = 0;
            for (let n = 0; n < grid; n++)
            {
                if(n==(grid-1))
                {
                    let td = document.createElement("td");
                    let SubTable = document.createElement("table");
                    let SubTable2 = document.createElement("table");
                    let trSUM = document.createElement("tr");
                    let tdBomb = document.createElement("td");
                    let tdBomb2 = document.createElement("td");

                    td.setAttribute("class", "aux");
                    td.setAttribute("id",n);
                    SubTable.setAttribute("class", "subT");
                    SubTable2.setAttribute("class", "subT");
                    trSUM.setAttribute("class", "subTLine");
                    tdBomb.setAttribute("class", "bomb");
                    tdBomb2.setAttribute("style", "padding: 0;");

                    txt = document.createTextNode(sum);
                    txt2 = document.createTextNode(Zcount);
                    trSUM.appendChild(txt);
                    tdBomb2.appendChild(txt2);
                    SubTable.appendChild(trSUM);
                    SubTable2.appendChild(tdBomb);
                    SubTable2.appendChild(tdBomb2);

                    td.appendChild(SubTable);
                    td.appendChild(SubTable2);

                    tr.appendChild(td);
                    sum = 0;
                }
                else
                {
                    let td = document.createElement("td");
                    td.setAttribute("class", "box");
                    td.setAttribute("id", n);
                    var value = valueCalc(Zcount);
                    let txt = document.createTextNode(value);
                    if(value == 0)
                    {
                        Zcount += 1;
                    }
                    if(value == 1)
                    {
                        OneCount += 1;
                        sum += value;
                    }
                    if(value == 2)
                    {
                        TwoCount += 1;
                        sum += value;
                    }
                    if(value == 3)
                    {
                        ThreeCount += 1;
                        sum += value;
                    }
                    td.appendChild(txt);
                    td.setAttribute("onclick", "flip(event)");
                    tr.appendChild(td);
                } 
            }
        }

        table.appendChild(tr);
    }
    body.appendChild(table);
}

function tableRemove()
{
    table.parentNode.removeChild(table);
    tableMake();
}

function gameStart()
{
    let menu = document.getElementById("menu");
    menu.parentNode.removeChild(menu);
    body.appendChild(placar);

    difficultCheck();
    tableMake();
}