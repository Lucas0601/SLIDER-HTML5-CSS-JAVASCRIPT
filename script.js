let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImagem();
}, 5000)

function nextImagem(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}