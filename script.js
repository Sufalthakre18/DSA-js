
let input = document.querySelector('input')
let addBtn = document.querySelector('.addBtn')

addBtn.addEventListener('click', function (dtl) {
    dtl.preventDefault()
    let task = input.value.trim()
    if (task == '') {
        alert('please enter a task')
        return
    }

    let li = document.createElement('li')
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    h1.textContent = task
    let delBtn = document.createElement('button')
    delBtn.className = 'delBtn'
    delBtn.textContent = '❌'

    div.appendChild(h1)
    div.appendChild(delBtn)
    li.appendChild(div)
    let ul = document.querySelector('ul')
    ul.appendChild(li)
    input.value = ''

    
    delBtn.addEventListener('click', function (e) {
        // ul.removeChild(li)
        li.remove()

    })

    
})

