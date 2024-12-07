const input = document.getElementById("input");

const btn = document.getElementById("submit");

const select = document.getElementById("select");

btn.onclick = ()=>{
  let url = input.value.trim();
  let varURL;
  if (url.length == 59){
    window.open(url);
  }else if(select.value == 1){
    let i = 0;
    const URLinterval = setInterval(()=>{
      if (i == 9){
        clearInterval(URLinterval);
      }
      let top = (i%3) * 350;
      let left = Math.floor(i/3) * 500;
      window.open(url + `${i}`, `battle ${i}`, `width=500,height=350,left=${left},top=${top}`);
      i++;
    },500)
  }else if(select.value == 2){
    let n = 0;
    const URLinterval2 = setInterval(() => {
      if (n == 25){
        clearInterval(URLinterval2);
      }
      let chr = String.fromCharCode(97 + n);
      let top = (n%5) * 180;
      let left = Math.floor(n/5) * 250;
      window.open(url + `${chr}`, `battle ${n}`, `width=250,height=180,left=${left},top=${top}`);
      n++;
    },700);
  }else{
    alert("NOT SUPPORTED YET")
  }
}