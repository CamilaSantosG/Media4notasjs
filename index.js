/*Oi camila ^^*/

alert('-----Média-----');
let n1 = parseFloat(prompt('Nota 1:'));
let n2 = parseFloat(prompt('Nota 2:'));
let n3 = parseFloat(prompt('Nota 3:'));
let n4 = parseFloat(prompt('Nota 4:'));
// function resultado(n1,n2,n3,n4){
//     return 
// }
const resultado = (n1+n2+n3+n4)/4;
 alert (`Sua média foi: ${resultado}`); 



if (resultado >= 6)
{
    alert('Parabéns você foi aprovado🥳');
}
else 
{
    alert('Reprovado');
}
