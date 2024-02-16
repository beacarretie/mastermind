const nameSave = () => {
    let valor = document.getElementById("fname").value;
    if (!valor) {
        valor = "JUGADOR/A";
    }
    sessionStorage.setItem("player", valor);
    window.location.href = "./playboard.html";
};