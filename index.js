function scuberGreetingForFeet(feet){
 let greeting; 
 if (feet <= 400) {
  greeting = 'This one is on me!';
 } 
 else if (feet > 400 && feet <= 2000){
  greeting = 'That will be twenty bucks.';
 }
 else if (feet > 2000 && feet <= 2500){
  greeting = 'I will gladly take your thirty bucks.';
 }
 else if (feet > 2500){
  greeting = 'No can do.';
 }
 return greeting;
}

function ternaryCheckCity(name){
  let greeting; 
  greeting = name === 'NYC' ? 'Ok, sounds good.': 'No go.';
  return greeting;

 
}

function switchOnCharmFromTip(tip){
  let charm;    
  
  switch (tip) {
    case 'generous':
      charm = 'Thank you so much.';
      break; 

    case 'not as generous':
      charm = 'Thank you.';
      break;

    default:
      charm = 'Bye.';
  }

  return charm;
}