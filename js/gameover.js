let playerResult = sessionStorage.getItem("result") ?? "loser";
let playerName = sessionStorage.getItem("player") ?? "JUGADOR/A";
if (playerResult === "loser") {
    document.getElementById("finalMessage").innerText = `LO SIENTO\n ${playerName}\n ¡HAS PERDIDO!`
    document.getElementById("buttonPlayAgain").innerText = `TRY AGAIN`
}
else {
    document.getElementById("finalMessage").innerText = `ENHORABUENA\n  ${playerName}\n  ¡HAS GANADO!`
    document.getElementById("buttonPlayAgain").innerText = `PLAY AGAIN`
}