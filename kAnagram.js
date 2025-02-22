function findKAnagrams(s, t, k) {

    let mapS = {};
    if (s.length === t.length) {
        for (let i = 0; i < s.length; i++) {
            if (!mapS[s[i]]) {
                mapS[s[i]] = 1;
    
            } else {
    
                mapS[s[i]] = mapS[s[i]] + 1;
            }
        }
        for (let i = 0; i < t.length; i++) {
            if (mapS[t[i]]) {
                mapS[t[i]] = mapS[t[i]] - 1
            }
        }
        let sum = 0
        for (val in mapS) {
            sum = sum + mapS[val]
    
        }
        console.log(sum)
        if (sum <= k)
            return true;
        else {
            return false;
        }
    }else{
        return false
    }
    
}
console.log(findKAnagrams("geeks", "eggkf", 1))