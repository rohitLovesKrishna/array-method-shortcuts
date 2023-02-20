const {universalFilter,DELETE} = require('array-method-shortcuts')
const mainData = [
    { id: 0, title: 'Rohit', age: 25, message: 'Hello' },
    { id: 1, title: 'Rahul', age: 27, message: 'Hello' },
    { id: 2, title: 'Komal', age: 25, message: 'Hello' },
    { id: 3, title: 'Krishna', age: 100, message: 'Hello' },
    { id: 4, title: 'Rahul', age: 77, message: 'Hello' },
    { id: 5, title: 'Komal', age: 45, message: 'Hello' },
    { id: 6, title: 'Krishna', age: 10, message: 'Hello' },
]

console.log(universalFilter(mainData,'age > 25'));
console.log(DELETE(mainData, 3));


