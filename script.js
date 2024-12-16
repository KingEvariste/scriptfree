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
    },300)
  }else if(select.value == 2){
    let n = 0;
    let URLinterval2 = setInterval(() => {
      if (n == 5 || stopped == true){
        clearInterval(URLinterval2);
        stopped = false;
      }
      let chr = String.fromCharCode(97 + n);
      let top = (n%5) * 180;
      let left = Math.floor(n/5) * 250;
      window.open(url + `${chr}`, `battle ${n}`, `width=250,height=180,left=${left},top=${top},titlebar=no`);
      n++;
    },300);
  }else{
    alert("NOT SUPPORTED YET")
  }
}