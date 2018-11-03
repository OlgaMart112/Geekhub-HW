let number = 5;

let str1 = `switch (n) {`;
for(let i = 1; i < number-1; i++) {
    str1 +=  `case ${i}: res = ${i}; break;`
}
str1 +=`}`

const switchСase = new Function('n', str1);

let str2 = `if(n === 0){}`;
for (let i =0; i < number-1; i++){
 str2 +=`else if(n === ${i}){}`;
}
 str2 += `else{}`;

const switchIf = new Function('n', str2);
console.time('Switch')
for (let n = 0; n < number; n++){
 switchСase(n)
}
console.timeEnd('Switch');

console.time('If')
for (let n = 0; n < number; n++){
 switchIf(n)
}
console.timeEnd('If');