


// clear output
function clear() {
    document.getElementById('output').innerHTML = ''
}








// if else
function ifElseStatement() {
    let now = new Date();
    let today = now.getDay();
    if (today === 0) {
        alert('It is a Sunday');
    }

    else if (today === 1) {
        alert('It is a Monday');
    }

    else if (today === 2) {
        alert('It is a Tuseday');
    }
    else if (today === 3) {
        alert('It is a Wednesday');
    }
    else if (today === 4) {
        alert('It is a Thursday');
    }
    else if (today === 5) {
        alert('It is a Friday');
    }
    else if (today === 6) {
        alert('It is a Saturday');
    }

}

// switchButton

function switchButton() {
    let now = new Date();
    let today = now.getDay();

    switch (today) {
        case 0:
            alert("It's a Sunday")
            break;
        case 1:
            alert("It's a Monday")
            break;
        case 2:
            alert("It's a Tuesday")
            break;
        case 3:
            alert("It's a Wednesday")
            break;
        case 4:
            alert("It's a  Thursday")
            break; 
        default:
            alert('It is an other day')
        

    }

}
// for(let i = 0; i<=3; i++){
// console.log(i)
// }

// while loop ------------------------------------------------

// var i = 1;
// while(i<=5){
//     console.log(i);
//     i++

// }

// var a = 2
// do{
//     console.log(a);
//     a++
// }while(a<4)

// asking name--------------------------------------------

function keepAsking(){

    // var name = prompt('Enter Your Name!')
    // // console.log(name)

    do{
        var name = prompt('Enter Your Name!')
        console.log(name)
        
    }while(name===null || name===''|| name.length<3)



}