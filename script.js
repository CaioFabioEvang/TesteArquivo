function calcular(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const soma = nota1 + nota2 + nota3;

    if(soma >= 180){
        console.log('calculo correto!');
    }else{
        console.log('calculo deu errado!');
    }
}