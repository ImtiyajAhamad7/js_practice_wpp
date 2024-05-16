const range = () => {
    let random = Math.floor((Math.random()*10))+1;
    console.log(random)
    const inputNum  = document.querySelector('.input').value;
    console.log(inputNum);
    if(inputNum > 10){
        alert('please enter number less than or = to 10')
        return;
    }

    if(inputNum == random){
        alert('you win')
    }else{
        alert('you lose')
    }

}