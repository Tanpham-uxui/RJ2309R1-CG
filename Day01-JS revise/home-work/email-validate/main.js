regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
function isEmailLegit(str) {
    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/
    if (regexp.test(str)){
        return `${str} is an email`;
    } 
    return `${str} is not an email`;
}
console.log(isEmailLegit('a@gmail.com'));
console.log(isEmailLegit('ab@yahoo.com'));
console.log(isEmailLegit('abc@hotmail.com'));
console.log(isEmailLegit('@gmail.com'));
console.log(isEmailLegit('ab@gmail.'));
console.log(isEmailLegit('@#abc@gmail.com'));
