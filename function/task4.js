//Define a function that takes 3 numbers as parameters. If the three numbers can form a right angled triangle, it returnstrue otherwise false.
function triangle(n1,n2,n3){
    if(n1*n1==n2*n2+n3*n3 || n2*n2==n1*n1+n3*n3 || n3*n3==n1*n1+n2*n2){
        return true;
    }
    else {
        return false;
    }

}
console.log(triangle(10,14,16));
