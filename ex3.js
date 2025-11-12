var soma = 0;
var continuar = true;

while(continuar){
    var numero = parseFloat(prompt("Digite um número:"));
    soma+=numero;
    var resposta = prompt("Deseja continuar? Deseja continuar? (S) para SIM  \n (N) para NÃO");
    if(resposta.toLowerCase()!=='s'){
        continuar=false;
    }
}

document.write("Soma total: "+soma);
