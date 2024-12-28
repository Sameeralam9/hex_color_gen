const color = document.querySelector('.color');
const code = document.querySelector('.code');
const code1 = document.querySelector('.code1');
const btn = document.querySelector('.btn')
let input = document.querySelector('.number')

let hex = ["#"]

let colorArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']

btn.addEventListener('click',()=>{

let inputVal = input.value
if (inputVal.length <5|| inputVal.length >11|| inputVal == '') {
code.innerText = "please enter a valid RGB"
}
else{
input.value = ''
let el = eval('[' + inputVal + ']')

let redVal1 = Math.floor(el[0] / 16)
let redVal2  = el[0] - (redVal1*16)

let greenVal1 = Math.floor(el[1] / 16)
let greenVal2 = el[1] - (greenVal1 * 16)

let blueVal1 = Math.floor(el[2] / 16)
let blueVal2 = el[2] - (blueVal1 * 16)

function hexGen(value){

for(let i = 0; i < colorArr.length; i++){

 if (value == i){
	hex.push( colorArr[i]) 
 }
}
}
	hexGen(redVal1);
	hexGen(redVal2);
	hexGen(greenVal1);
	hexGen(greenVal2);
	hexGen(blueVal1);
	hexGen(blueVal2);
	
joindeHex = hex.join('')
code.innerText = joindeHex
code1.innerText = 'rgb ' +'(' + el + ')'
	color.style.backgroundColor = `${joindeHex}`
}
})

