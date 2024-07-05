"use strict"
var nota1, nota2, nota3, nota4, media
nota1=parseFloat(prompt("Escreva a nota do seu primeiro trimestre"))
nota2=parseFloat(prompt("Escreva a nota do seu segundo trimestre"))
nota3=parseFloat(prompt("Escreva a nota do seu terceiro trimestre"))
media = ((nota1+nota2+nota3)/3)
if (media>=60){window.alert("Você foi aprovado sua média é " + media )}
else if (media<60){window.alert("Você foi reprovado sua média é " + media )}