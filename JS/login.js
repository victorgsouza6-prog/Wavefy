// ==========================
// ELEMENTOS
// ==========================

const campoNome =
    document.getElementById("campoNome");

const campoConfirmarSenha =
    document.getElementById("campoConfirmarSenha");

const nomeInput =
    document.getElementById("nome");

const emailInput =
    document.getElementById("email");

const senhaInput =
    document.getElementById("senha");

const confirmarSenhaInput =
    document.getElementById("confirmarSenha");

const btnEntrar =
    document.getElementById("btnEntrar");

const btnCriarConta =
    document.getElementById("btnCriarConta");

const btnVoltarLogin =
    document.getElementById("btnVoltarLogin");

const mostrarSenha =
    document.getElementById("mostrarSenha");

const mensagem =
    document.getElementById("mensagem");

const textoLogin =
    document.getElementById("textoLogin");

let modoCadastro = false;


// ==========================
// MENSAGEM
// ==========================

function exibirMensagem(texto, tipo) {

    mensagem.textContent = texto;
    mensagem.className = `mensagem ${tipo}`;

}

function limparMensagem() {

    mensagem.textContent = "";
    mensagem.className = "mensagem";

}


// ==========================
// ABRIR CADASTRO
// ==========================

function abrirCadastro() {

    modoCadastro = true;

    campoNome.classList.remove("oculto");
    campoConfirmarSenha.classList.remove("oculto");

    btnEntrar.textContent = "Cadastrar";

    btnCriarConta.classList.add("oculto");
    btnVoltarLogin.classList.remove("oculto");

    textoLogin.textContent =
        "Crie sua conta no Wavefy.";

    senhaInput.autocomplete =
        "new-password";

    limparMensagem();

}


// ==========================
// VOLTAR PARA LOGIN
// ==========================

function voltarLogin() {

    modoCadastro = false;

    campoNome.classList.add("oculto");
    campoConfirmarSenha.classList.add("oculto");

    btnEntrar.textContent = "Entrar";

    btnCriarConta.classList.remove("oculto");
    btnVoltarLogin.classList.add("oculto");

    textoLogin.textContent =
        "A música do seu jeito.";

    senhaInput.autocomplete =
        "current-password";

    nomeInput.value = "";
    confirmarSenhaInput.value = "";

    limparMensagem();

}


// ==========================
// CRIAR CONTA
// ==========================

function criarConta() {

    const nome =
        nomeInput.value.trim();

    const email =
        emailInput.value.trim().toLowerCase();

    const senha =
        senhaInput.value;

    const confirmarSenha =
        confirmarSenhaInput.value;

    if (
        nome === "" ||
        email === "" ||
        senha === "" ||
        confirmarSenha === ""
    ) {

        exibirMensagem(
            "Preencha todos os campos.",
            "erro"
        );

        return;

    }

    if (!email.includes("@")) {

        exibirMensagem(
            "Digite um e-mail válido.",
            "erro"
        );

        return;

    }

    if (senha.length < 6) {

        exibirMensagem(
            "A senha precisa ter pelo menos 6 caracteres.",
            "erro"
        );

        return;

    }

    if (senha !== confirmarSenha) {

        exibirMensagem(
            "As senhas não são iguais.",
            "erro"
        );

        return;

    }

    const contaExistente =
        localStorage.getItem("wavefyConta");

    if (contaExistente) {

        exibirMensagem(
            "Já existe uma conta cadastrada neste navegador.",
            "erro"
        );

        return;

    }

    const conta = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem(
        "wavefyConta",
        JSON.stringify(conta)
    );

    exibirMensagem(
        "Conta criada! Agora entre com seu e-mail e senha.",
        "sucesso"
    );

    setTimeout(() => {

        voltarLogin();

        emailInput.value = email;
        senhaInput.value = "";

    }, 1200);

}


// ==========================
// ENTRAR
// ==========================

function fazerLogin() {

    const email =
        emailInput.value.trim().toLowerCase();

    const senha =
        senhaInput.value;

    if (email === "" || senha === "") {

        exibirMensagem(
            "Digite seu e-mail e sua senha.",
            "erro"
        );

        return;

    }

    const contaSalva =
        localStorage.getItem("wavefyConta");

    if (!contaSalva) {

        exibirMensagem(
            "Nenhuma conta foi criada. Clique em Criar conta.",
            "erro"
        );

        return;

    }

    let conta;

    try {

        conta = JSON.parse(contaSalva);

    } catch (erro) {

        console.error(
            "Erro ao carregar a conta:",
            erro
        );

        exibirMensagem(
            "Erro ao carregar a conta.",
            "erro"
        );

        return;

    }

    if (email !== conta.email) {

        exibirMensagem(
            "E-mail incorreto.",
            "erro"
        );

        return;

    }

    if (senha !== conta.senha) {

        exibirMensagem(
            "Senha incorreta.",
            "erro"
        );

        return;

    }

    // Login válido apenas durante a sessão atual
    sessionStorage.setItem(
        "wavefyLogado",
        "true"
    );

    sessionStorage.setItem(
        "wavefyUsuario",
        conta.nome
    );

    // Apaga um login antigo salvo no localStorage
    localStorage.removeItem(
        "wavefyLogado"
    );

    localStorage.removeItem(
        "wavefyUsuario"
    );

    exibirMensagem(
        "Login realizado com sucesso!",
        "sucesso"
    );

    setTimeout(() => {

        window.location.replace(
            "index.html"
        );

    }, 700);

}


// ==========================
// BOTÕES
// ==========================

if (btnCriarConta) {

    btnCriarConta.addEventListener(
        "click",
        abrirCadastro
    );

}

if (btnVoltarLogin) {

    btnVoltarLogin.addEventListener(
        "click",
        voltarLogin
    );

}

if (btnEntrar) {

    btnEntrar.addEventListener(
        "click",
        function () {

            limparMensagem();

            if (modoCadastro) {

                criarConta();

            } else {

                fazerLogin();

            }

        }
    );

}


// ==========================
// MOSTRAR SENHA
// ==========================

if (mostrarSenha) {

    mostrarSenha.addEventListener(
        "click",
        function () {

            const senhaVisivel =
                senhaInput.type === "text";

            senhaInput.type =
                senhaVisivel
                    ? "password"
                    : "text";

            mostrarSenha.innerHTML =
                senhaVisivel
                    ? '<i class="fa-solid fa-eye"></i>'
                    : '<i class="fa-solid fa-eye-slash"></i>';

        }
    );

}


// ==========================
// TECLA ENTER
// ==========================

document.addEventListener(
    "keydown",
    function (evento) {

        if (
            evento.key === "Enter" &&
            btnEntrar
        ) {

            evento.preventDefault();
            btnEntrar.click();

        }

    }
);