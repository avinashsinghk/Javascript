// The idea here is compare number with it's nearest base which equal to or grater than 
//Base values are 1,4,5,9,10,40,50,90,100,400,500,900,1000.
//divide with nearset base value unless remainder is 0. Here quotient* correspondingROman value will give digit.
//for Example 42 
// nearest base is 40 , divide by 40 quotient = 4 remander is 2 , Roman numeral for 40 is -XL and 2 -> corrspondiing roman numeral is II 
//so final value is XLii


function convertIntegerToRoman(value){
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let rom = ["I","IV","V","IX","X","XL", "L","XC","C","XD","D","XM","X"]
    let i = 12
    let emstring = "";
    while (value>0){
    let quo = Math.floor(value/num[i])
    value =  value%num[i]
    while(quo--){
      emstring = emstring +   rom[i]
    }
   i--
    }
    
     return emstring


}
console.log("Roman Value",convertIntegerToRoman(99))
