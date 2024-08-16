const Form= document.querySelector("#form");
const InputText= document.querySelector("#text");
const InputNumber= document.querySelector("#number");
const Select= document.querySelectorAll('#tipo');//# id .classe
const Data= document.querySelectorAll('#tipo');
//-------------------------------------------------------
let DataAtual=new Data();
//-------------------------------------------------------
console.log(Form)
console.log(InputText)
console.log(InputNumber)
console.log(Select)
//-------------------------------------------------------
if(Select.value=="outro"){//if de teste
    alert("Escolha");
   // return; 
}
//-------------------------------------------------------
