//Insert Angular, React and Node after Javascript
const techs=['c','python','javascript'];

for(let i=0;i<techs.length;i++){
    if(techs[i]=='javascript'){
        techs.splice(i+1,0,'Angular','React','Node');
        break;
    }
}
console.log(techs);