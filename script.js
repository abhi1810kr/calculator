let string = "";
let buttonValue = document.querySelectorAll('.buttons');
Array.from(buttonValue).forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        if (e.target.innerHTML == 'Calculate'){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'Clear'){
            string = "";
            document.querySelector('input').value = string;
        }

        
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})