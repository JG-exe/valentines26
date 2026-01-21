let scale = 1;

addListeners();

function addListeners() {
  const no = document.getElementById("n");
  no.addEventListener("mousemove", (e) => {
    const rect = e.target.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = centerX - e.clientX;
    const deltaY = centerY - e.clientY;

    no.style.transform = `translate(${deltaX * 0.9}px, ${
      deltaY * 0.9
    }px) scale(${scale})`;
  });

  no.addEventListener("mouseenter", (e) => {
    scale = scale - scale / 10;
    no.style.transform = `scale(${scale})`;
    console.log(scale);
  });

  no.addEventListener("click", (e) => {
    console.log("click");
  });

  document.getElementById("y").addEventListener("click", (e) => {
    console.log("yes");
  });
}
