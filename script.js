const input = document.getElementById("input");

const btn = document.getElementById("submit");

btn.onclick = ()=>{
  let url = input.value.trim();
  let varURL;
  if (url.length == 59){
    window.open(url);
  }else{
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
  }
}