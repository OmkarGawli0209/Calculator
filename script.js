let exp = ""; // this will store expressions
let lastAns = ""; // store the last evaluated answer
const vaildKeys= [...'0123456789.+-*/%=','Enter','%','Backspace','Delete'];

let userInput = document.querySelectorAll("button");

for (let element of userInput) {
  element.addEventListener("click", (e) => {
    let ip = e.target;
    handleInput(ip.innerText); // send the text (like "1", "+", "=") to the handler
  });
}
document.addEventListener("keydown",(e)=>{
let key = e.key;
if(vaildKeys.includes(key)){
  if(key === 'Enter' || key === '='){
     handleInput('=');
  }
  else if(key === 'Backspace'){
    handleInput('DEL');
  }
  else if(key ==='Delete'){
    handleInput('AC');
  }
  else {
    handleInput(key);
  }


}



});







function handleInput(input) {
  

  if (input === "AC") {
    exp = ""; // clear the entire expression
    display(); // show blinking cursor
  }

  else if (input === "DEL") {
    exp = exp.slice(0, -1); // remove the last character from expression
    if (exp === "") {
      // if expression is empty, show only blinking bar
      display();
    } else {
      // else show current expression with blinking bar
      display();
    }
  }

  else if (input === "=") {
    try {
      
      lastAns = math.evaluate(exp);

      // lastAns =math.eval(exp); // store the result

      exp = lastAns.toString(); // convert result to string and update expression
  
    } catch (error) {
      exp = "Error"; // in case of invalid expression
      console.log(error); // show error in console
    }
    display(); // update screen
  }

   else if(input === "ANS"){
    exp+=lastAns.toString();
   display(); // show it on screen


   }

  




  else {
    const operator = ['+','-','*','/'];
    const lastChar = exp.slice(0,-1);//this will store the lastentred character 
    if(operator.includes(lastChar) && operator.includes(input)){ // lets assume we have lastcharter as - and and second last as + so it will cut -sign 
      exp = exp.slice(0, -1);

    }
    else{
      exp += input; 
     
    }
    // any other input (like 1, +, etc.)
   // add input to existing expression i.e 
   display();
    //disp.innerHTML = exp + '<span class="blinking">|</span>'; // show it on screen
  }


}

function display(){
  let disp = document.querySelector(".screen"); // selecting the display screen
  disp.innerHTML = exp + '<span class="blinking">|</span>'; // show it on screen
}  