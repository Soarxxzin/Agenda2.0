const usuarios = [
    { nome: 'Admin', senha: 'admin' },
];



function login() {
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;

    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    let usuarioValido = usuarios.find(u => u.nome === usuario && u.senha === senha);

    if (usuarioValido) {
        
        window.location.href = './home.html';

    } else {
        alert('Usuário ou senha inválidos. Tente novamente.');
    }


}