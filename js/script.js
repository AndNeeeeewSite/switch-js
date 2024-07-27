//                   id
selectjs = document.getElementById('selectjs');
inputdays = document.getElementById('inputdays');
buttondays = document.getElementById('buttondays');
inputmot = document.getElementById('inputmot');
buttonmot = document.getElementById('buttonmot');
inputmot2 = document.getElementById('inputmot2');
buttonmot2 = document.getElementById('buttonmot2');
inputcolor = document.getElementById('inputcolor');
buttoncolor = document.getElementById('buttoncolor');
inputmath1 = document.getElementById('inputmath1');
inputmath2 = document.getElementById('inputmath2');
selectmath = document.getElementById('selectmath');
textid = document.getElementById('textid');


//            1.
list = " "
function onchangeselect(){
    list = selectjs.value
    switch(list){
        case'coffee':
           console.log("Обрана кава")
           break;
        case'tea':
           console.log("Обраний чай")
           break;   
        case'juice':
           console.log("Обраний сік")
           break;      
    }
}
//            2.
listdays = ""
buttondays.addEventListener("click", function() {
    listdays = inputdays.value
    switch(listdays){
        case'понеділок':
           console.log("Це робочий день")
           break;
        case'вівторок':
            console.log("Це робочий день")
            break;
        case'середа':
            console.log("Це робочий день")
            break;
        case'четвер':
            console.log("Це робочий день")
            break;
        case"п'ятниця":
            console.log("Це робочий день")
            break;    
        case'субота':
            console.log("Це вихідний день")
            break;
        case'неділя':
            console.log("Це вихідний день")
            break;
        default:
            console.log("Це не день тижня")
    }
});

//            3.
listmot = ""
buttonmot.addEventListener("click", function() {
    listmot = inputmot2.value
    switch(listmot){
        case'1':
           console.log("Зима")
           break;
        case'2':
           console.log("Зима")
           break;
        case'3':
           console.log("Весна")
           break;
        case'4':
           console.log("Весна")
           break;
        case'5':
           console.log("Осінь")
           break;
        case'6':
           console.log("Літо")
           break;
        case'7':
           console.log("Літо")
           break;
        case'8':
           console.log("Літо")
        case'9':
           console.log("Осінь")
           break;
        case'10':
           console.log("Осінь")
           break;
        case'11':
           console.log("Осінь")
           break;
        case'12':
           console.log("Зима")
           break;                      
        default:
            console.log("Це не цифра місяця")
    }
});

//            4.
listmot2 = ""
buttonmot2.addEventListener("click", function() {
    listmot2 = inputmot2.value
    switch(listmot2){

        case'1':
           console.log("31 днів")
           break;
        case'2':
           console.log("28 днів")
           break;
        case'3':
           console.log("31 днів")
           break;
        case'4':
           console.log("30 днів")
           break;
        case'5':
           console.log("31 днів")
           break;
        case'6':
           console.log("30 днів")
           break;
        case'7':
           console.log("31 днів")
           break;
        case'8':
           console.log("31 днів")
           break;
        case'9':
           console.log("31 днів")
           break;
        case'10':
           console.log("30 днів")
           break;
        case'11':
           console.log("31 днів")
           break;
        case'12':
           console.log("30 днів")
           break;                      
        default:
            console.log("Це не цифра місяця")
    }
});
//            5.
listcolor = ""
buttoncolor.addEventListener("click", function() {
   listcolor = inputcolor.value
   switch(listcolor){  
      case'червоний':
         console.log("стоп") 
         break;  
      case'зелений':
         console.log("йти") 
         break;   
      case'жовтий':
         console.log("чекати") 
         break;                
       default:
           console.log("Це не колір")
   }
});
//              6.
function calculator(){
   textinput1 = inputmath1.value;
   textinput2 = inputmath2.value;
   textinput1num = Number.parseFloat(textinput1)
   Nancheck1 = Number.isNaN(textinput1num)
   textinput2num = Number.parseFloat(textinput2)
   Nancheck2 = Number.isNaN(textinput2num)
   if(Nancheck1 == true || Nancheck2 == true){
      console.log("Its not number")
      textinput1num = 0
      textinput2num = 0 
   }
   else{
      versionmath = selectmath.value
      switch(versionmath){
         case'+':
            textid.textContent = textinput1num+textinput2num
            break;
         case'-':
            textid.textContent = textinput1num-textinput2num
            break;
         case'*':
            textid.textContent = textinput1num*textinput2num
            break;
         case'/':
            textid.textContent = textinput1num/textinput2num
            break;
      }

   }
}
