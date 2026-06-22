const display = document.getElementById('display');

let expression = '';

const buttons  = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        switch (value) {

            case 'C':
                expression = '';
                display.value = '';
                break;

                case 'CE':
                expression = expression.slice(0, -1);
                display.value = expression;
                break;

            case '=':
                try {
                    expression = eval(expression);
                    display.value = expression;
                } catch (error) {
                    display.value = 'Error';
                    expression = '';
                }
                break;

                case"%":
                try {
                    expression = eval(expression) / 100;
                    display.value = expression;
                }

                catch (error) {
                    display.value = 'Error';
                    expression = '';
                }

                break;

            default:

            if(
                display.value === "0" &&
                !isNaN(value) &&
                value !== "."
                
            )

else {                expression += value;
                display.value = expression;
            }

        })
    });

    


