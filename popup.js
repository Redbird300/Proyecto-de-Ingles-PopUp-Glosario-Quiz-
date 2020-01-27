
var btnOpen = document.getElementById("btn-abrir-popup"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrar = document.getElementById("btn-cerrar-popup");

btnOpen.addEventListener("click", function(){
overlay.classList.add("active");
popup.classList.add("active");
});

btnCerrar.addEventListener("click", function(){
    overlay.classList.remove("active");
    popup.classList.remove("active");
    })


  