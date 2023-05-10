let options= document.querySelectorAll('.options')
let turn='X'
console.log(options)
let win= false
options.forEach((e) => {
    e.addEventListener('click',() => {
        if(turn=='X'){
            if(!e.innerText){
            e.innerText=turn
            turn='O'
        }
    }
        else if (turn=='O')
        {
            if(!e.innerText){
                e.innerText=turn
                turn='X'
            }
        }
   })
})
function update(){
    if(options[0].innerText=='X' && options[1].innerText=='X' && options[2].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    
    else if(options[3].innerText=='X' && options[4].innerText=='X' && options[5].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[6].innerText=='X' && options[7].innerText=='X' && options[8].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[0].innerText=='X' && options[4].innerText=='X' && options[8].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[0].innerText=='X' && options[3].innerText=='X' && options[6].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[1].innerText=='X' && options[4].innerText=='X' && options[7].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[2].innerText=='X' && options[4].innerText=='X' && options[6].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[2].innerText=='X' && options[8].innerText=='X' && options[5].innerText=='X')
    {
        alert('X win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else
    { if (options[0].innerText=='O' && options[1].innerText=='O' && options[2].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[3].innerText=='O' && options[4].innerText=='O' && options[5].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[6].innerText=='O' && options[7].innerText=='O' && options[8].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[0].innerText=='O' && options[4].innerText=='O' && options[8].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[0].innerText=='O' && options[3].innerText=='O' && options[6].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[1].innerText=='O' && options[4].innerText=='O' && options[7].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[2].innerText=='O' && options[4].innerText=='O' && options[6].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
    else if(options[2].innerText=='O' && options[8].innerText=='O' && options[5].innerText=='O')
    {
        alert('O win')
        options[0].innerText=''
        options[1].innerText=''
        options[2].innerText=''
        options[3].innerText=''
        options[4].innerText=''
        options[5].innerText=''
        options[6].innerText=''
        options[7].innerText=''
        options[8].innerText=''
    }
}
    requestAnimationFrame(update)
}
requestAnimationFrame(update)