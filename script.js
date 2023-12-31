
let myKeys = document.querySelectorAll('.key');

for(let x = 0; x < myKeys.length ; x++){
    myKeys[x].addEventListener('click', function(){
       
palySound(myKeys[x].innerHTML);


    })
}



function palySound(key){
    switch(key){
        case 'C':
        var audio = new Audio('doremi/do.mp3');
        audio.play();
            break;
        case 'D':
         var audio = new Audio('doremi/re.mp3');
         audio.play();
            break;
            case 'E':
        audio = new Audio('doremi/mi.mp3');
        audio.play();
            break;
            case 'F':
        audio = new Audio('doremi/fa.mp3');
        audio.play();
            break;
            case 'G':
        audio = new Audio('doremi/sol.mp3');
        audio.play();
            break;
            case 'A':
        audio = new Audio('doremi/la.mp3');
        audio.play();
            break;
            case 'B':
         audio = new Audio('doremi/ti.mp3');
        audio.play();
            break;
            case 'K':
        audio = new Audio('doremi/doh.mp3');
        audio.play();
            break;   
    }
    

}




