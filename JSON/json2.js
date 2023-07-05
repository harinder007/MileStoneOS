//Create JSON for the company
let employee1={
    name : 'harinder',
    dept : 'tech',
    designation: 'manager',
    salary: 4000,
    raise: true
}
let employee2={
    name : 'vikash',
    dept : 'finance',
    designation: 'trainee',
    salary: 5000,
    raise: true
}

let employee3={
    name : 'Bill',
    dept : 'HR',
    designation: 'executive',
    salary: 3000,
    raise: false
}
console.log(employee1)
console.log(employee2)
console.log(employee3)

const empArray=[employee1,employee2,employee3];
let company={
    companyName : 'Tech Stars',
    wesite :'www.hy.com',
    employees :empArray
}
console.log(company);

//Update JSON with new employee
let employee4={
    name : 'Anna',
    dept : 'HR',
    designation: 'executive',
    salary: 3000,
    raise: false
}
company.employees.push(employee4)
console.log(company)

//task 1 (4)
//Calculate total salary bill

function computeSalary(compJson){
    let empArray=compJson.employees;
    let total=0;
    for(let i=0;i<empArray.length;i++){
        let emp=empArray[i];
        total=total +emp.salary;
    }
    return total;
}
let totalSalary=computeSalary(company);
console.log("total salary is ",totalSalary);

//Revise salariesof employees

function processRaise(compJson){
    let empArray=compJson.employees;
    for(let i=0;i<empArray.length;i++){
        let emp=empArray[i];
        if(emp.raise){
            emp.salary=emp.salary*1.10;
            emp.raise=false;
        }
}}

processRaise(company);
console.log(company);


// check the name is from work from home or not
const wfhemp=['Anna','Harinder'];
function addwfh(compJson,wfhemp){
    let empArray=compJson.employees;
    for(let i=0;i<empArray.length;i++){
        let emp = empArray[i];
        emp.wfh=checkInArray(emp.name,wfhemp);
    }
}

function checkInArray(value,arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value){
            return true;
        }
    }
    return false;
}
addwfh(company.wfhemp);
console.log(company);
console.log("harinderjbjk")