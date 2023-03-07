var btn = document.getElementById('btn');
var box = document.getElementById('box');
var cikti1 = document.getElementById('cikti1');
var cikti2 = document.getElementById('cikti2');
var cikti3 = document.getElementById('cikti3');
var cikti4 = document.getElementById('cikti4');
var code = document.getElementById('code-text');

var kapat = false;


range1.oninput = function () {
    box.style.textShadow = document.getElementById('range1').value + "px " + document.getElementById('range2').value + "px " + document.getElementById('range3').value + "px";    
    cikti1.innerHTML = document.getElementById('range1').value + "px";
}

range2.oninput = function () {
    box.style.textShadow = document.getElementById('range1').value + "px " + document.getElementById('range2').value + "px " + document.getElementById('range3').value + "px";    
    cikti2.innerHTML = document.getElementById('range2').value + "px";
}

range3.oninput = function () {
    box.style.textShadow = document.getElementById('range1').value + "px " + document.getElementById('range2').value + "px " + document.getElementById('range3').value + "px";   
    cikti3.innerHTML = document.getElementById('range3').value + "px";
}

btn.addEventListener('click', function(){
    if(kapat == false){
        document.getElementById('code-page').classList.add('goster');
        kapat = !kapat;
    }
    
    if(kapat == true){
        setInterval(function() {
            document.getElementById('code-page').classList.remove('goster');
            kapat = !kapat;
        },5000);
    }
    code.innerHTML =  "text-shadow: " + document.getElementById('range1').value + "px " + document.getElementById('range2').value + "px " + document.getElementById('range3').value + "px";
});
