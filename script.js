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
      window.open(url + `${i}`);
      i++;
    },1000)
  }
}