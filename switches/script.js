 // switcgh can be an efficient replacement to many else if statements

 let day = 1;

 switch(day){
    case 1:
        console.log("It is Monday");
        break;
    case 2:
        console.log("It is Tuesday");
        break;    
    case 3:
        console.log("It is Wednesday");
        break;        
   case 4:
        console.log("It is Thursday");
        break;   
    case 5:
        console.log("It is Friday");
        break;    
   case 6:
        console.log("It is Saturday");
        break;    
    case 7:
        console.log("It is Sunday");
        break;
    default:
        console.log(`${day} is not a day`);              
 }

 /*
 let testScore = 92;
 let letterGrade;
 
 switch(true){
 case testScore >= 90:
    letterGrade = "A";
 case testScore >= 80:
    letterGrade = "B";   
    
 } */