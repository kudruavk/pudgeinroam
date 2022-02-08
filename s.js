let smallBlock =  document.querySelector('.kvad')
let divTop = 0 
let divLeft = 0 
function moveBot () {
    divTop=divTop + 50
    if(divTop>=550){
        alert('Вы выходите за границы блока без удостоверения личности , это вне закона')
    }
    else{
        smallBlock.style.top = divTop + 'px'
    }
    
}
function moveTop() {
    divTop=divTop - 50
    if(divTop<0){
        alert('Вы выходите за границы блока без удостоверения личности , это вне закона')
    }
    else{
        smallBlock.style.top = divTop + 'px'
    }
    
}
function moveRight(){
    divLeft=divLeft + 50
    if(divLeft>=850){
        alert('Вы выходите за границы блока без удостоверения личности , это вне закона')
    }
    else{
        smallBlock.style.left = divLeft + 'px'
    }
}
function moveLeft() {
    divLeft=divLeft - 50
    if(divLeft<0){
        alert('Вы выходите за границы блока без удостоверения личности , это вне закона')
    }
    else{
        smallBlock.style.left = divLeft + 'px'
    }
    
}