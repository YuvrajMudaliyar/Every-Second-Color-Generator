let code = document.querySelector("#code");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

function colorCode() {
  const hex = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let interval;
const startChange = function (){
    if (!interval) {
            interval = setInterval(() => {
                document.body.style.backgroundColor = `${colorCode()}`
                code.textContent = colorCode()
            }, 1000);
        
    }
}
const stopChange = function (){
        clearInterval(interval)
        interval = null
}

reset.addEventListener('click', () => {
    document.body.style.backgroundColor = `#FFFFFF`
    code.textContent = "#FFFFFF";
    stopChange()
})

start.addEventListener('click', startChange)
stop.addEventListener('click', stopChange)
