var paragrafo = document.getElementById('paragrafo')
var valores = document.querySelectorAll(".valores")


function clicouSAIR(){
    document.querySelector('#part2').style.display = 'none'
    document.querySelector('.materia').style.background = "#011F5F"
   
}


function clicouPT(){
    document.querySelector('#part2').style.display = 'block'
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Português"
        
        
}

function clicouLI(){
    document.querySelector('#part2').style.display = 'block'
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Inglês"
        
}

function clicouESP(){
    document.querySelector('#part2').style.display = 'block'
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Espanhol"
        
}

function clicouART(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Artes"
        
}

function clicouEDF(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Educação-física"
        
}

function clicouFIL(){
    document.querySelector('#part2').style.display = 'block'
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Filosofia"
        
}

function clicouGEO(){
    document.querySelector('#part2').style.display = 'block'    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Geografia"
        
}

function clicouHIS(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "História"
        
}

function clicouSOC(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Sociologia"
        
}

function clicouFIS(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Física"
        
}

function clicouQUI(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Química"
        
}

function clicouMAT(){
    document.querySelector('#part2').style.display = 'block'
    
        for(var x=0; x < valores.length; x++){
            valores[x].value = 0
        }
        paragrafo.innerHTML = "Matemática"
        
}


const btn = document.querySelector("#btn");

btn.addEventListener("click", function(e){
    e.preventDefault();
    
    
    var nota1 = document.getElementById('nota1').value
    var nota2 = document.getElementById('nota2').value
    var nota3 = document.getElementById('nota3').value
    var nota4 = document.getElementById('nota4').value
    var media1 = document.querySelector('#span1')
    var divisao1 = 4
    
    if (nota4 == 0) {
        divisao1 = 3
    }
    
    media1.innerHTML = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/divisao1
    
    var nota5 = document.getElementById('nota5').value
    var nota6 = document.getElementById('nota6').value
    var nota7 = document.getElementById('nota7').value
    var nota8 = document.getElementById('nota8').value
    var media2 = document.querySelector('#span2')
    var divisao2 = 4
    
    if (nota8 == 0) {
        divisao2 = 3
    }
    
    media2.innerHTML = (parseFloat(nota5) + parseFloat(nota6) + parseFloat(nota7) + parseFloat(nota8))/divisao2
    
    var nota9 = document.getElementById('nota9').value
    var nota10 = document.getElementById('nota10').value
    var nota11 = document.getElementById('nota11').value
    var nota12 = document.getElementById('nota12').value
    var media3 = document.querySelector('#span3')
    var divisao3 = 4
    
    if (nota12 == 0) {
        divisao3 = 3
    }
    
    media3.innerHTML = (parseFloat(nota9) + parseFloat(nota10) + parseFloat(nota11) + parseFloat(nota12))/divisao3
    
    var nota13 = document.getElementById('nota13').value
    var nota14 = document.getElementById('nota14').value
    var nota15 = document.getElementById('nota15').value
    var nota16 = document.getElementById('nota16').value
    var media4 = document.querySelector('#span4')
    var divisao4 = 4
    
    if (nota16 == 0) {
        divisao4 = 3
    }
    
    media4.innerHTML = (parseFloat(nota13) + parseFloat(nota14) + parseFloat(nota15) + parseFloat(nota16))/divisao4
    
    var materia = document.querySelectorAll('.materia')
    
    var mediaPT=0
    var mediaLI=0
    var mediaESP=0
    var mediaART=0
    var mediaED=0
    var mediaFIL=0
    var mediaGEO=0
    var mediaHIS=0
    var mediaSOC=0
    var mediaFIS=0
    var mediaQUI=0
    var mediaMAT=0
    var resmedia = document.getElementById('resmedia')
    resmedia.innerHTML = 0
    switch (paragrafo.innerHTML) {
        case "Português":
            
            var mediaPT = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaPT
            if (mediaPT > 7) {
                materia[0].style.background = "#008b02"
            }
            
            else{
                materia[0].style.background = "#c81121c6"
            }
            
            break;
            
        case "Inglês":
            
            mediaLI = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaLI
            if (mediaLI > 7) {
                materia[1].style.background = "#008b02"
            }
            
            else{
                materia[1].style.background = "#c81121c6"
            }
            break;
        
        case "Espanhol":
            
            mediaESP = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaESP
            if (mediaESP > 7) {
                materia[2].style.background = "#008b02"
            }
            
            else{
                materia[2].style.background = "#c81121c6"
            }
            break;
    
        case "Artes":
            
            mediaART = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaART
            if (mediaART > 7) {
                materia[3].style.background = "#008b02"
            }
            
            else{
                materia[3].style.background = "#c81121c6"
            }
            break;
        
        case "Educação-física":
            
            mediaED = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaED
            if (mediaED > 7) {
                materia[4].style.background = "#008b02"
            }
            
            else{
                materia[4].style.background = "#c81121c6"
            }
            break;
        
        case "Filosofia":
            
            mediaFIL = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaFIL
            if (mediaFIL > 7) {
                materia[5].style.background = "#008b02"
            }
            
            else{
                materia[5].style.background = "#c81121c6"
            }
            break;
            
        case "Geografia":
            
            mediaGEO = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaGEO
            if (mediaGEO > 7) {
                materia[6].style.background = "#008b02"
            }
            
            else{
                materia[6].style.background = "#c81121c6"
            }
            break;
        
        case "História":
            
            mediaHIS = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaHIS
            if (mediaHIS > 7) {
                materia[7].style.background = "#008b02"
            }
            
            else{
                materia[7].style.background = "#c81121c6"
            }
            break;
            
        case "Sociologia":
            
            mediaSOC = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaSOC
            if (mediaSOC > 7) {
                materia[8].style.background = "#008b02"
            }
            
            else{
                materia[8].style.background = "#c81121c6"
            }
            break;
            
        case "Física":
            
            mediaFIS = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaFIS
            if (mediaFIS > 7) {
                materia[9].style.background = "#008b02"
            }
            
            else{
                materia[9].style.background = "#c81121c6"
            }
            break;
            
        case "Química":
            
            mediaQUI = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaQUI
            if (mediaQUI > 7) {
                materia[10].style.background = "#008b02"
            }
            
            else{
                materia[10].style.background = "#c81121c6"
            }
            break;
            
        case "Matemática":
            
            mediaMAT = (parseFloat(media1.innerHTML) + parseFloat(media2.innerHTML) + parseFloat(media3.innerHTML) + parseFloat(media4.innerHTML))/4
            resmedia.innerHTML = mediaMAT
            if (mediaMAT > 7) {
                materia[11].style.background = "#008b02"
            }
            
            else{
                materia[11].style.background = "#c81121c6"
            }
            break;
    }
    
    
    
    
    
    
});

