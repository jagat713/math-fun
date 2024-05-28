let title = document.getElementById("heading");
let arr=[];
let container = document.getElementById("container");
let inputElement = document.createElement('input');
inputElement.type = 'text'; 
inputElement.placeholder = 'Enter the numbers'; 
inputElement.id = 'array';



let inputElementNumber = document.createElement('input');
inputElementNumber.type = 'number'; 
inputElementNumber.placeholder = 'Enter the numbers'; 
inputElementNumber.id = 'number';

let saveButton = document.createElement('button');
saveButton.innerHTML = 'Save';
saveButton.onclick = save;
saveButton.id = 'save';

let checkButton = document.createElement('button');
checkButton.innerHTML = 'Check';
checkButton.onclick = primeCheck;
checkButton.id = 'check';

let palindromeNumbercheckButton = document.createElement('button');
palindromeNumbercheckButton.innerHTML = 'Check';
palindromeNumbercheckButton.onclick = palindromeCheck;
palindromeNumbercheckButton.id = 'checkpalindrome';

let factorialButton = document.createElement('button');
factorialButton.innerHTML = 'Calculate';
factorialButton.onclick = factorial;
factorialButton.id = 'factorial';

let armstrongButton = document.createElement('button');
armstrongButton.innerHTML = 'Check';
armstrongButton.onclick = armstrong;
armstrongButton.id = 'armstrong';

let countButton = document.createElement('button');
countButton.innerHTML = 'Count';
countButton.onclick = count;
countButton.id = 'count';

let countEOButton = document.createElement('button');
countEOButton.innerHTML = 'Count';
countEOButton.onclick = countOddEven;
countEOButton.id = 'countEO';

let addEvenButton = document.createElement('button');
addEvenButton.innerHTML = 'Add';
addEvenButton.onclick = addEven;
addEvenButton.id = 'addEven';

let fibonacciButton = document.createElement('button');
fibonacciButton.innerHTML = 'display series';
fibonacciButton.onclick = fibonacci;
fibonacciButton.id = 'fibonacci';

let searchInput = document.createElement('input');
searchInput.type = 'number'; 
searchInput.placeholder = 'Enter the number to search'; 
searchInput.id = 'searchInput';

let searchButton=document.createElement('button');
searchButton.innerHTML='Search';
searchButton.onclick=linear;
searchButton.id='searchButton';

let result=document.createElement('h3');
result.id='result';

function removeAllChildren() {
    const container = document.getElementById('container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function linearsearch() {
    removeAllChildren();
    title.innerHTML = "Linear Search";
    container.appendChild(inputElement);
    container.appendChild(saveButton);
}

function save() {
    removeAllChildren();
    title.innerHTML = "Linear Search";
    let inputValue = inputElement.value;
    array = inputValue.split(',').map(item => item.trim());
    array = array.map(item => Number(item));
    console.log(array);
    container.appendChild(searchInput);
    container.appendChild(searchButton);
}

function linear() {
    let searchValue = Number(document.getElementById('searchInput').value);
    let index = array.indexOf(searchValue);
    if (index != -1) {
        result.innerHTML = "Number " + searchValue + " is present at index No. " + index+".";
    } else {
        result.innerHTML = "Number " + searchValue + " is not present in the array.";
    }
    container.appendChild(result);
}

//Prime number

function primeNumber() {
    removeAllChildren();
    title.innerHTML = "Prime Number";
    container.appendChild(inputElement);
    container.appendChild(checkButton);
}

function primeCheck()
{
    let num=Number(inputElement.value);
    let count=0;
    for(i=1;i<=num;i++)
    {
        let calc=num%i;
        if(calc==0)
        {
            count++;
        }
    }
    if(count<3)
    {
        result.innerHTML=num+" is a Prime Number.";
    }
    else
    {
        result.innerHTML=num+" is not a Prime Number!";
    }
    container.appendChild(result);
}

//palindrome Number
function palindromeNumber()
{
    removeAllChildren();
    title.innerHTML = "Palindrome Number";
    container.appendChild(inputElement);
    container.appendChild(palindromeNumbercheckButton);
}

function palindromeCheck()
{
    let num=Number(inputElement.value);
    let reverse=0;
    let temp=num;
    while (temp > 0) { 
        reverse = reverse * 10 + temp % 10; 
        temp = Math.floor(temp / 10);
    } 
    if(num==reverse)
    {
        result.innerHTML=num+" is a Palindrome Number.";
    }
    else
    {
        result.innerHTML=num+" is not a Palindrome Number.";
    }    
    container.appendChild(result);
}

function factorialNumber()
{
    removeAllChildren();
    title.innerHTML = "Factorial";
    container.appendChild(inputElement);
    container.appendChild(factorialButton);
}

function factorial()
{
    let num=Number(inputElement.value);
    let product=1;
    for(let i=num;i>0;i--)
    {
        product=i*product;
        console.log(product);
    }
    result.innerHTML="The Factorial of "+num+" is "+product+".";
    container.appendChild(result);
}

function armstrongNumber()
{
    removeAllChildren();
    title.innerHTML = "Armstrong Number";
    container.appendChild(inputElement);
    container.appendChild(armstrongButton);
}

function armstrong()
{
    let num = Number(inputElement.value);
    let originalNum = num;
    let output = 0;

    while (originalNum != 0)
    {
        let remainder = originalNum % 10;
        output += Math.pow(remainder, 3);
        originalNum = Math.floor(originalNum / 10);
    }
    if (output == num) {
        result.textContent=num+" is a Armstrong Number.";
    } else {
        result.textContent=num+" is not a Armstrong Number.";
    }
    container.appendChild(result);
}

function countDigits()
{
    removeAllChildren();
    title.innerHTML = "Digits Counter";
    container.appendChild(inputElementNumber);
    container.appendChild(countButton);
}
function count()
{
    let num =inputElementNumber.value.toString();
    let count=num.length;
    console.log(count);
    result.textContent=num+" has "+count+" digits."
    container.appendChild(result);
}

function countEO()
{
    removeAllChildren();
    title.innerHTML = "Even Odd Counter";
    container.appendChild(inputElementNumber);
    container.appendChild(countEOButton);
}

function countOddEven()
{
    let input =inputElementNumber.value.toString();
    let evenCount=0;
    let oddCount=0;
    for(let i=0;i<input.length;i++)
    {
        let num=Number(input[i]);
        let calc=num%2;
        if(calc==0)
        {
            evenCount++;
        }
        else
        {
            oddCount++;
        }
    }
    result.textContent=input+" has "+evenCount+" Even Number and "+oddCount+" Odd Numbers.";
    container.appendChild(result);
}

function evenAdd()
{
    removeAllChildren();
    title.innerHTML = "Adding Even Number";
    container.appendChild(inputElementNumber);
    container.appendChild(addEvenButton);
}

function addEven()
{
    let input =inputElementNumber.value.toString();
    let evenSum=0;
    let evenCount=0;
    for(let i=0;i<input.length;i++)
    {
        let num=Number(input[i]);
        let calc=num%2;
        if(calc==0)
        {
            evenSum=evenSum+num;
            evenCount++;
        }
    }
    result.textContent=input+" has "+evenCount+" Even Numbers and their sum is = "+evenSum;
    container.appendChild(result);
}
function fibonacciSeries()
{
    removeAllChildren();
    title.innerHTML = "Fibonacci Series";
    container.appendChild(inputElement);
    container.appendChild(fibonacciButton);
    let lineBreak = document.createElement('br');
    container.appendChild(lineBreak);
}

function fibonacci()
{
    let range = Number(inputElement.value);
    let a=0,b=1,c;
    for(let i=1;i<=range;i++)
    {
        // result.textContent=a+" ";
        // container.appendChild(result);
        
        let result = document.createElement('span');
        result.textContent = a + " ";
        container.appendChild(result);
        c=a+b;
        a=b;
        b=c;
    }
}