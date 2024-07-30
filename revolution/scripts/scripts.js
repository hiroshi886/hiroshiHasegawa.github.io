
let btn = document.querySelector('button');
btn.addEventListener('click', () =>{
  let ipt = document.querySelector('input');
  if(ipt.value == mon[qnum][5]){
    window.alert(`${ipt.value}おめでとう`);
  } else{
    window.alert(`${ipt.value}ざんねん`);
  }  
} )

let showMidasi = (mida) => {
  let hajime = document.querySelector('h1');
  hajime.innerHTML = `<h1>${mida}</h1>`;
}
showMidasi(midasi[qnum]);   

let showMon = (dai) => {
  let mondai = document.querySelector('div');
  mondai.innerHTML = `<h2>${dai}</h2>`;
}
showMon(mon[qnum][0]);

let showMessage = (mes) => {
  let list = document.querySelector('div');
  list.innerHTML += `<h3>${mes}</h3>`;
}
showMessage(mon[qnum][1]);
showMessage(mon[qnum][2]);
showMessage(mon[qnum][3]);
showMessage(mon[qnum][4]);








