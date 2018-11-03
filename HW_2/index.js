function test (str) {
    var stack = [];
    var last;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == '[' || str[i] == '(' || str[i] == '{' || str[i] == '"' && !stack.includes('"') || str[i] == '\'' && !stack.includes('\'') ) { 
            stack.push(str[i]);
        } else if (str[i] == ']' || str[i] == ')' || str[i] == '}' || str[i] == '"' && stack.includes('"') || str[i] == '\'' && stack.includes('\'') ) { 
            if (stack.length) { 
                last = stack[stack.length - 1]; 
                if ((last == '[' && str[i] == ']') || (last == '(' && str[i] == ')') ||
                    (last == '{' && str[i] == '}') || (last == '"' && str[i] == '"') ||
                    (last == '\'' && str[i] == '\'')) {
                    stack.pop(); 
                }
            } else return false; 
        }
    }
    return (!stack.length); 
}

const input = document.querySelector('input[type=text]');
const form = document.querySelector('form');
const resultField = document.querySelector('.result');
form.addEventListener('submit', formSubmit);

function formSubmit(evt){
evt.preventDefault();
const inputValue = input.value;
let res = test(inputValue);
resultField.innerHTML += res;
form.reset();

}
