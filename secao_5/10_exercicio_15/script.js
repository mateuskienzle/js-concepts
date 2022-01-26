let numero = 103;
let contador = 0;

for(let i = 0; i <= numero; i++){
    if (numero > 1 && numero%i == 0 ){
        contador++;
    }
}

if(contador == 2){
    console.log(`O número ${numero} é primo`);
}
else {
    console.log(`O número ${numero} não é primo`);
}
