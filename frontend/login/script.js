
function limparCalc() {
    document.querySelector(".senha").innerHTML = ""
    document.querySelector(".delete").classList.add("block")
    senha = ""
}

var senha = ""

function addSenha(e) {

    senha = senha + e.id

    document.querySelector(".senha").innerHTML = "*".repeat(senha.length)

    if (senha.length > 5) {
        document.querySelector(".delete").disabled = false
        document.querySelector(".delete").classList.remove("block")
    } else {
        document.querySelector(".alert").classList.add("model")
        document.querySelector(".delete").disabled = true
    }

}

function login() {

    const dataAtual = new Date();

    const diaAtual = dataAtual.getDate();

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "senha": senha
        })
    };

    fetch('http://localhost:3000/usuarios/login', options)
        .then(response => response.json())
        .then(user => {
            if (user !== false) {
                console.log(user[0].id_perfil);
                localStorage.setItem("userID", user[0].id)
                localStorage.setItem("userIDPerfil", user[0].id_perfil)
                localStorage.setItem("dayAcess", diaAtual)
                window.location.href = "../home/index.html"
            } else {
                document.querySelector(".alert").classList.remove("model")
                document.querySelector(".delete").classList.add("block")
                senha = ""
                document.querySelector(".senha").innerHTML = ""
            }
        })
}