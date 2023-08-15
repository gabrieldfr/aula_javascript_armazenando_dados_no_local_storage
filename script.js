//LISTA DE USUÁRIOS
let listadados = [];
//CRIANDO A BASE(CONSTRUTOR)
function Campos(campo1, campo2){
    this.campo1 = campo1
    this.campo2 = campo2
}

//DISPARA O BOTÃO COM DOM
const btnEnviar = document.querySelector('#btnSubmit')

//EVENTO DO CLICK
btnEnviar.addEventListener('click', ()=>{
    const inputCampo1 = document.querySelector('#campo1');
    const inputCampo2 = document.querySelector('#campo2');

    //INSTANCIANDO O OBJETO PARA RECEBER NO CAMPO
    let info= new Campos(inputCampo1.value, inputCampo2.value)
   

    //PEGA TUDO QUE ESTIVER DENTRO DO LISTA DADOS
    listadados.push(info);

    //ARMAZENA TUDO O QUE FOR ADICIONADO NA LISTA DADOS CONVERTIDO COM JSON
    localStorage.setItem("dados", JSON.stringify(listadados))
})
