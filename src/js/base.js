let scale = 1;
let uhohClicks = 0;
const uhohMessages = ["why? :(", "I thought you loved meeee","Why would you? :((", "nooooo", "But I love you so much, why?"];
addListeners();

function addListeners() {
  const no = document.getElementById("n");
  const yes = document.getElementById("y")
  const uhoh = document.getElementById("uhoh");

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
    document.getElementById("uhohTxt").innerText = uhohMessages[uhohClicks]
    uhoh.showModal();
    uhohClicks++
    if(uhohMessages.length <= uhohClicks){
      uhohClicks = 0;
    }
  });

  yes.addEventListener("click", (e) => {
    console.log("yes");
    localStorage.setItem("didShe", JSON.stringify(1))
    window.location = "./yay"
  });

  uhoh.addEventListener("click", () => uhoh.close())
}
