const validation = JSON.parse(sessionStorage.getItem("ok"));

if(!validation){
    window.location = "/"
}