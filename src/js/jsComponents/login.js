const NAME = import.meta.env.VITE_NAME;
const PW = import.meta.env.VITE_PW;
const form = document.getElementById("login");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
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
    sessionStorage.setItem("ok", JSON.stringify(1))
    window.location = "./question";
  } else {
    feedback.show();
  }
}
