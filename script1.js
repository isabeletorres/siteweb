document.getElementById('loginForm').addEventListener('submit', function(event) {
    var emailField = document.getElementById('email');
    var emailValue = emailField.value;

    // Verifica se o campo de e-mail está vazio
    if (emailValue.trim() === "") {
        alert("Por favor, preencha o campo de e-mail.");
        emailField.focus();
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Expressão regular para validar o e-mail
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailValue)) {
        alert("Por favor, insira um e-mail válido.");
        emailField.focus();
        event.preventDefault(); // Impede o envio do formulário
        return;
    }

    // Se a validação for bem-sucedida, redireciona para outra página
    window.location.href = "outrapag.html";
    event.preventDefault(); // Evita o envio do formulário para o backend
});