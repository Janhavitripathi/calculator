let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screeValue ='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
     buttonText =e.target.innerText;
     console.log('Button text is',buttonText);
      if(buttonText =='X')
      {
        buttonText ='*';
        screeValue += buttonText ;
        screen.value =screeValue ;
      }
      else if(buttonText=='C'){
          screen.value = " " ;
          screen.value =screeValue ;
      }
      else if(buttonText=='='){
        screen.value = eval(screeValue) ;
    }
    else{
        screeValue += buttonText ;
        screen.value =screeValue ;
    }
    })
}
