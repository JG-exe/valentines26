const NAME = import.meta.env.VITE_NAME;
const PW = import.meta.env.VITE_PW;

export function login(name, pw) {
  if (name === NAME && pw === Number(PW)) {
    console.log("ok");
  }
}
