var divideString = function(s, k, fill) {
     
const result=[];
let i=0;
 while(i<s.length){
    let  group="";
    for(let i=0; i<k;i++){
        if(i<s.length){
            group+=s[i++];
        }
        else{
            group+=fill;
        }
    }
    result.push(group);
 }
    
};
console.log(divideString("abcdefghi", 3, "x")); 