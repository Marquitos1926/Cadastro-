//Função para validar o formulário
function validateFrom() {
    //obtem os valores dos campos de input poelo ID
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('comfirmPassword').value;

    // Obtem o elemento para exibir mensagem de erro
    let erroMessage = document.getElementById('error-message');

    // Verifiqa se o campo "Nome" está vazio
    if (name === ''){
        // Exibe uma mensagem de erro e interrrompe o envio do formulário
        erroMessage.textContent = 'Por favor, insira seu nome.';
        return false; // Retorna false para impedir o envio do formulário
    }

    // verificar se o campo "E-mail" está vazio
    if (email === '') {
        // Exibe uma mensagem de erro e interrrompe o envio do formulário
        erroMessage.textContent = 'Por favor, insira seu e-mail.';
        return false;
    } 

    // verificar se o campo "Senha" está vazio
    if (password === '') {
        // Exibe uma mensagem de erro e interrrompe o envio do formulário
        erroMessage.textContent = 'Por favor, insira sua senha.';
        return false;
    }
    // verificar se o campo "Senha" está vazio
    if (password !== confirmPassword) {
        // Exibe uma mensagem de erro e interrrompe o envio do formulário
        erroMessage.textContent = 'as senhas não coincidem!';
        return false;
    }

    // Se todas as verificações forem bem-sucedidad, o formulário pode ser enviado
    return true; // Permite o envio do formulário

}