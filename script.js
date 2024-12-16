const input = document.getElementById("input");
const btn = document.getElementById("submit");
const select = document.getElementById("select");
const btn2 = document.getElementById("stopper");

let stopped = false;

function stop(){
  stopped = true;
}

btn.onclick = ()=>{
  let url = input.value.trim().replace(/ /gi,"");
  if (url.length == 59){
    window.open(url);
  }else if(select.value == 1){
    let i = 0;
    let URLinterval = setInterval(()=>{
      if (i == 9 || stopped == true){
        clearInterval(URLinterval);
        stopped = false;
      }
      let top = (i%3) * 350;
      let left = Math.floor(i/3) * 500;
      window.open(url + `${i}`, `battle ${i}`, `width=500,height=350,left=${left},top=${top},titlebar=no`);
      i++;
    },400)
  }else if(select.value == 2){
    let n = 0;
    let URLinterval2 = setInterval(() => {
      if (n == 7 || stopped == true){
        clearInterval(URLinterval2);
        stopped = false;
      }
      let chr = String.fromCharCode(97 + n);
      let top = (n%2) * 450;
      let left = Math.floor(n/2) * 700;
      window.open(url + `${chr}`, `battle ${n}`, `width=700,height=450,left=${left},top=${top},titlebar=no`);
      n++;
    },400);
  }else{
    alert("NOT SUPPORTED YET")
  }
}