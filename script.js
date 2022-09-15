const startButton = document.querySelector('.start-button');
const textField = document.querySelector('.fizz-buzz');

function fizzBuzz() {
    let i = 0;

    let input = prompt('Enter a number')
    while (i < input) {
        i++;
        let newElement = document.createElement('p');
        if (i % 15 === 0) {
            console.log('FizzBuzz');
            let textNode = document.createTextNode('FizzBuzz');
            newElement.appendChild(textNode);
            document.body.appendChild(newElement);
        }
        else if (i % 3 === 0) {
            console.log('Fizz');
            let textNode = document.createTextNode('Fizz');
            newElement.appendChild(textNode);
            document.body.appendChild(newElement);
        }
        else if ( i % 5 === 0) {
            console.log('Buzz');
            let textNode = document.createTextNode('Buzz');
            newElement.appendChild(textNode);
            document.body.appendChild(newElement);
        }
        else {
            console.log(i);
            let textNode = document.createTextNode(i);
            newElement.appendChild(textNode);
            document.body.appendChild(newElement);
        };
    };
};

startButton.addEventListener('click', () => {
    fizzBuzz();
});

