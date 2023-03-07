var btn = document.getElementById('btn');
var box = document.getElementById('box');
var cikti = document.getElementById('cikti');
var code = document.getElementById('code-text');

var kapat = false;

range.oninput=function(){

    box.style.borderRadius = document.getElementById('range').value + "px";
    cikti.innerHTML = document.getElementById('range').value + "px";

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

    code.innerHTML="border-radius: " + document.getElementById('range').value + "px;";


});

