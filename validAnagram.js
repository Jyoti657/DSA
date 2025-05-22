// qestion valid Aangram 
// An agram  os word or phrase formed by the rearriging the letter of a different word or pharase , using all the original letter exaclity once 
//   example input (s=anagram),(t=nagram); output -true
// example input (s=car),(t=rat)=false;

const anagramfunction=(s,t)=>{
    s=s.split("").sort().join("");
    t=t.split("").sort().join("");
    return s=== t

}
const result =(anagramfunction("angram","nagram"))
console.log(result)