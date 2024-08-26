// script.js
function validateForm(event) {
    event.preventDefault(); // Evita o envio automático do formulário

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (name === "") {
        alert("Por favor, preencha o campo nome.");
        return false;
    }

    if (email === "" || !validateEmail(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("As senhas não coincidem. Por favor, verifique e tente novamente.");
        return false;
    }
    const existingEmails = JSON.parse(localStorage.getItem("registeredEmails")) || [];
    if (existingEmails.includes(email)) {
        alert("Este e-mail já está cadastrado. Por favor, utilize outro e-mail.");
        return false;
    }

    // Adiciona o novo e-mail à lista de e-mails cadastrados
    existingEmails.push(email);
    localStorage.setItem("registeredEmails", JSON.stringify(existingEmails)); 
    // Se todas as validações passarem, redireciona para a página principal
    window.location.href = "index.html"; // Substitua pelo nome correto da página
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}




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
    event.preventDefault(); // Impede o envio do formulário
});