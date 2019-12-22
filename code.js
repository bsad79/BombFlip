var body = document.getElementById("body");
var table = document.createElement("table");
var Vmodal = document.getElementById("Vmodal");
var Lmodal = document.getElementById("Lmodal");
var Mmodal = document.getElementById("Mmodal");
var Vspan = document.getElementsByClassName("close")[0];
var Lspan = document.getElementsByClassName("close")[1];
var Mspan = document.getElementsByClassName("close")[2];
var markBox;
var markBoxV = false;

var placar = document.createElement("div");
placar.setAttribute("class", "placar");

let difficultLvl = 1;
let cardsF = 0;
let score = 0;
let OneCount = 0;
let TwoCount = 0;
let ThreeCount = 0;

var text = document.createTextNode(score);
placar.appendChild(text);

Vspan.onclick = function()
{
    Vmodal.style.display = "none";
    document.location.reload(true)
}

Lspan.onclick = function()
{
    Lmodal.style.display = "none";
    document.location.reload(true)
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
        difficultLvl += 1;
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
            }
            if(e.target.textContent == 1)
            {
                score += 1;
                cardsF += 1;
                OneCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 2)
            {
                score += 2;
                cardsF += 1;
                TwoCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 3)
            {
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
            }
            if(e.target.textContent == 1)
            {
                score *= 1;
                OneCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 2)
            {
                score *= 2;
                TwoCount -= 1;
                ScoreUpadte();
            }
            if(e.target.textContent == 3)
            {
                score *= 3;
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
        var text = document.createTextNode("Mark");
        markBox.appendChild(text);
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
    markBox.removeChild(markBox.firstChild)
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

function valueCalc()
{
    let value; 
    if(difficultLvl == 1)
    {
        value = Math.floor(Math.random() * 3);
    }
    else
    {
        value = Math.round(Math.random() * 3);
    }
    return value;
}

//table creation
for (let i = 0; i < 6; i++)
{
    let tr = document.createElement("tr");
    tr.setAttribute("id", i);

    if(i==5)
    {
        for (let n = 0; n < 6; n++)
        {
            if(n==5)
            {
                let td = document.createElement("td");
                txt = document.createTextNode("Mark");
                td.setAttribute("class", "mark");
                td.setAttribute("onclick", "markWindow(event)");
                td.appendChild(txt);
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
        for (let n = 0; n < 6; n++)
        {
            if(n==5)
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
                var value = valueCalc();
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

body.appendChild(placar);
body.appendChild(table);