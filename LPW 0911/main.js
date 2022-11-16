let resul = 0;
let valor = 0;
let operacao=0;

function atribuiValor(x){
    valor=x;
}
function realiza(op){
    operacao=op;
}
function r(){
   
    if (operacao=="mais"){
        resul+=valor;
        
    }
  
    document.querySelector("#res").innerHTML = resul;
}