function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++;
        console.log(count);
    }
    return innerFunction;
}
const counter = outerFunction(); 
counter(); // 1
counter(); // 2
counter(); // 3

