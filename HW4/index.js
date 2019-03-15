function tableCreate(){
    var body = document.body,
        tbl  = document.createElement('table');
       
    tbl.style.width  = '100px';
    tbl.classList.add('table');
    tbl.style.border = '1px solid black';
    var val = 1;
  
    for(var i = 0; i <3; i++){
        var tr = tbl.insertRow();
        for(var j = 0; j < 3; j++){
            if(i == 3 && j == 2){
                break;
            } else {
                var td = tr.insertCell();
                td.setAttribute('id', val++)
                td.style.height = '30px';
                td.style.width = '30px';
                td.appendChild(document.createTextNode(''));
                td.style.border = '1px solid black';
            }
        }
    }
    body.appendChild(tbl);
}

tableCreate();

let player = 'X';
let winner = undefined;
let stepCount = 0;

let button = document.querySelector('.start-btn');
button.addEventListener('click', reStart);

const message = document.querySelector('.message');

const cellsTd = document.getElementsByTagName('td');
for (let i =0; i < cellsTd.length; i++){
    cellsTd[i].addEventListener('click', step);
}

function reStart (){
    for (let i =0; i < cellsTd.length; i++){
         cellsTd[i].innerHTML = "";
        cellsTd[i].addEventListener('click', step); 
        message.innerHTML = `Ходит игрок ${player} `;     
    }    
}

function step (evt){
    evt.preventDefault();
    evt.target.innerText = player;
   changePlayer();
   stepCount++;
   stepCount === 9 ? message.innerText = 'Ничья': message.innerText = `Ходит игрок  ${player}`;
   checkWin();
   if (winner !== undefined) {
      stepCount = 0;
      message.innerHTML = `Победили ${winner} `;
      player = "X";
      for (let i =0; i < cellsTd.length; i++){
        cellsTd[i].removeEventListener('click', step);
        winner = undefined;
    }
   }
}

function changePlayer(){
    player === "X"? player = "0": player = "X"
}

function checkWin() {
    cells = document.getElementsByTagName('td');  
 if (
    (cells[0].innerHTML=='X' && cells[1].innerHTML=='X' && cells[2].innerHTML=='X') ||
     (cells[0].innerHTML=='X' && cells[4].innerHTML=='X' && cells[8].innerHTML=='X') ||
     (cells[0].innerHTML=='X' && cells[3].innerHTML=='X' && cells[6].innerHTML=='X') ||
     (cells[1].innerHTML=='X' && cells[4].innerHTML=='X' && cells[7].innerHTML=='X') ||
     (cells[2].innerHTML==='X' && cells[5].innerHTML=='X' && cells[8].innerHTML=='X') ||
     (cells[3].innerHTML=='X' && cells[4].innerHTML=='X' && cells[5].innerHTML=='X') ||
     (cells[6].innerHTML=='X' && cells[7].innerHTML=='X' && cells[8].innerHTML=='X') ||
     (cells[6].innerHTML=='X' && cells[4].innerHTML=='X' && cells[2].innerHTML=='X')) {
         winner = "X";
        
     }
    else if(
     (cells[0].innerHTML=='0' && cells[1].innerHTML=='0' && cells[2].innerHTML=='0') ||
     (cells[0].innerHTML=='0' && cells[3].innerHTML=='0' && cells[6].innerHTML=='0') ||
     (cells[0].innerHTML=='0' && cells[4].innerHTML=='0' && cells[8].innerHTML=='0') ||
     (cells[1].innerHTML=='0' && cells[4].innerHTML=='0' && cells[7].innerHTML=='0') ||
     (cells[2].innerHTML=='0' && cells[4].innerHTML=='0' && cells[6].innerHTML=='0') ||
     (cells[2].innerHTML==='0' && cells[5].innerHTML=='0' && cells[8].innerHTML=='0') ||
     (cells[3].innerHTML=='0' && cells[4].innerHTML=='0' && cells[5].innerHTML=='0') ||
     (cells[6].innerHTML=='0' && cells[7].innerHTML=='0' && cells[8].innerHTML=='0')
    ){
        winner = "0" 
    } 
}

