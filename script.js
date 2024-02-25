function calcular(){
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const soma = nota1 + nota2 + nota3;

    const resultado = document.getElementById("resultado");

    if(soma >= 180){
        resultado.innerHTML = 'resultado correto';
    }else{
        resultado.innerHTML = 'resultado errado';
    }
}
