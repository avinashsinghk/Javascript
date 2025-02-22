function verifyIsomorphic(str1, str2){
//to store count of each unique alphabets
let mapStr1 ={} , mapStr2={}
// For isomorphic both string should of equal length and each characted should be one to one uniquely between two strings
if(str1.length  === str2.length){
    for (let i=0; i<str1.length ;i++){

        if(!mapStr1[str1[i]]){
            mapStr1[str1[i]] = i 
        }
        if(!mapStr2[str2[i]]){
            mapStr2[str2[i]] = i 
        }

        if(mapStr2[str2[i]] !== mapStr1[str1[i]] ){
            return false
        }

    }
}else{
    return false
}
return true


}
console.log(verifyIsomorphic("foo","bar"))
