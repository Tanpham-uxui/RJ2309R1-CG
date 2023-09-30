regexp = /^[_a-z0-9]{6,}$/
function isAccountLegit(str) {
    regexp = /^[_a-z0-9]{6,}$/
    if (regexp.test(str)){
        return `${str} this acount name is match our term`;
    } 
    return `sorry you have to do it again, ${str} is not match our term`;
}
console.log(isAccountLegit('123abc_'));
console.log(isAccountLegit('_abc123'));
console.log(isAccountLegit('______'));
console.log(isAccountLegit('123456'));
console.log(isAccountLegit('.@'));
console.log(isAccountLegit('12345'));
console.log(isAccountLegit('1234_'));
console.log(isAccountLegit('abcde '));