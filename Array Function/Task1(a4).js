//Employees withdept and city
const emps=[
    {name:'jack',city:'Delhi',dept:'tech'},
    {name:'Ana',city:'London',dept:'HR'},
    {name:'Sam',city:'Delhi',dept:'HR'},
    {name:'Hari',city:'Delhi',dept:'HR'}
];

let city='Delhi';
let dept='HR';
let emp1=emps.find(function(emp){
    return emp.city==city && emp.dept==dept;
})
console.log(emp1);

//find index
let emp2=emps.findIndex(function(emp){
    return emp.city==city && emp.dept==dept;
});
console.log(emp2);

// finde filter
let emp3=emps.filter(function(emp){
    return emp.city==city && emp.dept==dept;
})
console.log(emp3)
