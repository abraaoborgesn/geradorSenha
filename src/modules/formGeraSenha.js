import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const chkMaiusculas = document.querySelector('.chk-maiusculas')
const chkMinusculas = document.querySelector('.chk-minusculas')
const chkNumeros = document.querySelector('.chk-numeros')
const chkSimbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')

export default () => {

    gerarSenha.addEventListener('click', () => {
        // if(qtdCaracteres.length = 0) {
        //     senhaGerada.innerHTML = 'Digite uma quantidade de caracteres válida'
        // } 
        senhaGerada.innerHTML = gera()
    })
}

// function gera() {
//     const senha = geraSenha(qtdCaracteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked)


//     return senha || 'Nada selecionado.'
// }

function gera() {
    const senha = geraSenha(qtdCaracteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked)

    if (qtdCaracteres.value > 25) return 'Por favor, digite uma Quantidade de caracteres menor que 10.'
  
    if (qtdCaracteres.value === '' || qtdCaracteres.value === '0') return 'Digite uma quantidade de caracteres válida.'

    return senha.split('').sort(() => { return 0.5 - Math.random() }).join('') || 'Nada selecionado'

}