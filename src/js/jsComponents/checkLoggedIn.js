const validation = JSON.parse(sessionStorage.getItem("ok"));
const didShe = JSON.parse(localStorage.getItem("didShe"));

console.log(didShe);

if(!validation) window.location = "./"
if(didShe) window.location = "./yay"