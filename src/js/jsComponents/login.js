const NAME = import.meta.env.VITE_NAME;
const PW = import.meta.env.VITE_PW;
const form = document.getElementById("login");
const feedback = document.getElementById("feedback");

document.getElementById("login").addEventListener("submit", (e) => {
  e.preventDefault();
  login(
    document.getElementById("name").value,
    document.getElementById("pw").value,
  );
});

document
  .getElementById("close")
  .addEventListener("click", (e) => feedback.close());

function login(name, pw) {
  if (name === NAME && pw === PW) {
    console.log("ok");
  } else {
    feedback.show();
  }
}
