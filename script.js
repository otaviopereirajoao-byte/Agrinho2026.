function atualizarDados() {
    const temperatura = Math.floor(Math.random() * 15) + 20;
    const umidade = Math.floor(Math.random() * 40) + 40;

    document.getElementById("temp").textContent = temperatura;
    document.getElementById("umidade").textContent = umidade;
}
