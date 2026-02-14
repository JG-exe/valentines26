const didShe = JSON.parse(localStorage.getItem("didShe"));
const validation = JSON.parse(sessionStorage.getItem("ok"));

if(!validation) window.location = "./"
if(!didShe) window.location = "./question"
