let scale = 1;

addListeners();

function addListeners() {
  const no = document.getElementById("n");
  const yes = document.getElementById("y")

  document.addEventListener("mousemove", (e) => {

    if (e.clientX > rect.left && deltaX < (rect.left + rect.width)){
  }
  });

  no.addEventListener("mouseenter", (e) => {
    scale = scale - scale / 10;
    no.style.transform = `scale(${scale})`;

    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX =   centerX - e.clientX;
    const deltaY =  centerY - e.clientY;
    no.style.transform = 
    `translate(${deltaX}px, ${deltaY}px) scale(${scale})`;

  });

  no.addEventListener("click", (e) => {
    console.log("click");
  });

  yes.addEventListener("click", (e) => {
    console.log("yes");
  });

  yes.addEventListener("hover", (e)=>{
  })
}
