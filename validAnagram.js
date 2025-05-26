// qestion valid Aangram
// An agram  os word or phrase formed by the rearriging the letter of a different word or pharase , using all the original letter exaclity once
//   example input (s=anagram),(t=nagram); output -true
// example input (s=car),(t=rat)=false;
// this 1 Approach
const anagramfunction = (s, t) => {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");
  return s === t;
};
const result = anagramfunction("angram", "nagram");
console.log(result);
// 2 approach
const anagramobj = (s, t) => {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[s[i]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};
const result2 = anagramobj("aas", "saa");
console.log(result2);
