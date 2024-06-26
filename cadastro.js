document.addEventListener('DOMContentLoaded', () => {
    const nomeInput = document.getElementById('nome');
    const sobrenomeInput = document.getElementById('sobrenome');
    const enderecoInput = document.getElementById('endereco');
    const telefoneInput = document.getElementById('telefone');

    const incluirBtn = document.querySelector('.incluir');
    const editarBtn = document.querySelector('.editar');
    const salvarBtn = document.querySelector('.salvar');
    const cancelarBtn = document.querySelector('.cancelar');
    const excluirBtn = document.querySelector('.excluir');
    const primeiroBtn = document.querySelector('.primeiro');
    const anteriorBtn = document.querySelector('.anterior');
    const proximoBtn = document.querySelector('.proximo');
    const ultimoBtn = document.querySelector('.ultimo');

    let contatos = [];
    let contatoAtualIndex = -1;
    let editando = false;

    const atualizarFormulario = () => {
        if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
            const contatoAtual = contatos[contatoAtualIndex];
            nomeInput.value = contatoAtual.nome;
            sobrenomeInput.value = contatoAtual.sobrenome;
            enderecoInput.value = contatoAtual.endereco;
            telefoneInput.value = contatoAtual.telefone;
        } else {
            limparFormulario();
        }
    };

    const limparFormulario = () => {
        nomeInput.value = '';
        sobrenomeInput.value = '';
        enderecoInput.value = '';
        telefoneInput.value = '';
    };

    const habilitarFormulario = (habilitar) => {
        nomeInput.disabled = !habilitar;
        sobrenomeInput.disabled = !habilitar;
        enderecoInput.disabled = !habilitar;
        telefoneInput.disabled = !habilitar;
    };

    incluirBtn.addEventListener('click', () => {
        if (editando) {
            alert('Finalize a edição antes de incluir um novo contato.');
            return;
        }
        habilitarFormulario(true);
        limparFormulario();
        salvarBtn.disabled = false;
        cancelarBtn.disabled = false;
        incluirBtn.disabled = true;
        editarBtn.disabled = true;
        excluirBtn.disabled = true;
    });

    editarBtn.addEventListener('click', () => {
        if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
            editando = true;
            habilitarFormulario(true);
            salvarBtn.disabled = false;
            cancelarBtn.disabled = false;
            incluirBtn.disabled = true;
            editarBtn.disabled = true;
            excluirBtn.disabled = true;
            alert('Edite os campos e clique em "Salvar".');
        } else {
            alert('Nenhum contato selecionado para editar.');
        }
    });

    salvarBtn.addEventListener('click', () => {
        if (editando) {
            contatos[contatoAtualIndex] = {
                nome: nomeInput.value,
                sobrenome: sobrenomeInput.value,
                endereco: enderecoInput.value,
                telefone: telefoneInput.value,
            };
            editando = false;
            alert('Contato salvo com sucesso!');
        } else {
            const novoContato = {
                nome: nomeInput.value,
                sobrenome: sobrenomeInput.value,
                endereco: enderecoInput.value,
                telefone: telefoneInput.value,
            };
            contatos.push(novoContato);
            contatoAtualIndex = contatos.length - 1;
            alert('Contato incluído com sucesso!');
        }
        habilitarFormulario(false);
        salvarBtn.disabled = true;
        cancelarBtn.disabled = true;
        incluirBtn.disabled = false;
        editarBtn.disabled = false;
        excluirBtn.disabled = false;
        atualizarFormulario();
    });

    cancelarBtn.addEventListener('click', () => {
        if (editando) {
            atualizarFormulario();
            editando = false;
        } else {
            limparFormulario();
        }
        habilitarFormulario(false);
        salvarBtn.disabled = true;
        cancelarBtn.disabled = true;
        incluirBtn.disabled = false;
        editarBtn.disabled = false;
        excluirBtn.disabled = false;
        alert('Operação cancelada.');
    });

    excluirBtn.addEventListener('click', () => {
        if (contatoAtualIndex >= 0 && contatoAtualIndex < contatos.length) {
            contatos.splice(contatoAtualIndex, 1);
            contatoAtualIndex = contatos.length > 0 ? 0 : -1;
            atualizarFormulario();
            alert('Contato excluído com sucesso!');
        } else {
            alert('Nenhum contato selecionado para excluir.');
        }
    });

    primeiroBtn.addEventListener('click', () => {
        if (contatos.length > 0) {
            contatoAtualIndex = 0;
            atualizarFormulario();
        } else {
            alert('Nenhum contato cadastrado.');
        }
    });

    anteriorBtn.addEventListener('click', () => {
        if (contatoAtualIndex > 0) {
            contatoAtualIndex--;
            atualizarFormulario();
        } else {
            alert('Este é o primeiro contato.');
        }
    });

    proximoBtn.addEventListener('click', () => {
        if (contatoAtualIndex < contatos.length - 1) {
            contatoAtualIndex++;
            atualizarFormulario();
        } else {
            alert('Este é o último contato.');
        }
    });

    ultimoBtn.addEventListener('click', () => {
        if (contatos.length > 0) {
            contatoAtualIndex = contatos.length - 1;
            atualizarFormulario();
        } else {
            alert('Nenhum contato cadastrado.');
        }
    });

    atualizarFormulario();
    habilitarFormulario(false);
});

