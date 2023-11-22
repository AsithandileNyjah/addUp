let addNums = [2, 4, 8, 16, 32,, 5]

let display = document.querySelector('[view]')

let btn = document.querySelector('[addUpp]')

btn.addEventListener('click', add)

function add(){
    let addNums = [2, 4, 8, 16, 32, 5]
    let total = addNums.reduce((acc, current) => acc + current, 0);
    console.log(total);
    display.value = total
}