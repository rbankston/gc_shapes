function getAreaOfCircle(radius){
    return Math.PI * radius ** 2;
}
function getCircumferenceOfCircle(radius){
    return 2 * Math.PI * radius;
}
function getAreaOfSquare(side) {
    return side * side;
}
function getAreaOfTriangle(height, base) {
    return .5 * height * base;
}

console.log(getAreaOfCircle(5));
console.log(getAreaOfTriangle(5, 2));
console.log(getAreaOfSquare(4));
console.log(getCircumferenceOfCircle(6));