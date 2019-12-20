var body = document.getElementById("body");
var table = document.createElement("table");
var Vmodal = document.getElementById("Vmodal");
var Lmodal = document.getElementById("Lmodal");
var Vspan = document.getElementsByClassName("close")[0];
var Lspan = document.getElementsByClassName("close")[1];

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
    e.target.setAttribute("class", "flipped");
    e.target.setAttribute("onclick", "");
    if(cardsF == 0)
    {
        if(e.target.textContent == 0)
        {
            score = 0;
            cardsF = 0;
            difficultLvl = 1;
            ScoreUpadte();
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
            score = 0;
            cardsF = 0;
            difficultLvl = 1;
            ScoreUpadte();
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
        for (let n = 0; n < 5; n++)
        {
            let sum = 0;
            let Zcount = 0;
            let td = document.createElement("td");
            td.setAttribute("class", "aux");
            td.setAttribute("id",n);

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
            txt2 = document.createTextNode(" / ");
            txt3 = document.createTextNode(Zcount);
            td.appendChild(txt);
            td.appendChild(txt2);
            td.appendChild(txt3);

            tr.appendChild(td);
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
                td.setAttribute("class", "aux");
                td.setAttribute("id",n);
                txt = document.createTextNode(sum);
                txt2 = document.createTextNode(" / ");
                txt3 = document.createTextNode(Zcount);
                td.appendChild(txt);
                td.appendChild(txt2);
                td.appendChild(txt3);
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