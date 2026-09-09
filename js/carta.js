function verificarSenha() {
    const entrada = document
        .getElementById("senha")
        .value
        .trim()
        .toUpperCase();

    const mensagem = document.getElementById("mensagem");
    const cadeado = document.getElementById("cadeado");
    const container = document.querySelector(".container");

    const codigo = [
        72, 65, 80, 80, 89
    ];

    let senha = "";

    codigo.forEach(numero => {
        senha += String.fromCharCode(numero);
    });

    if (entrada === senha) {

        mensagem.textContent = "Senha correta...";
        mensagem.style.color = "#9fd69f";

        cadeado.textContent = "🔓";

        container.classList.add("desbloqueando");

        setTimeout(() => {
            window.location.href = "./carta.html";
        }, 1500);

    } else {

        mensagem.textContent = "Senha incorreta.";
        mensagem.style.color = "#d98d8d";

        container.classList.add("erro");

        setTimeout(() => {
            container.classList.remove("erro");
        }, 500);
    }
}
