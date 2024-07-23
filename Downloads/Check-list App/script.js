const inputBox = document.getElementById('input-box')
const lstContainer = document.getElementById('listCont')

function addItem(){
    if (inputBox.value === ''){
        alert('Write a task')
    }
    else{
        li = document.createElement('li')
        li.innerHTML = inputBox.value
        lstContainer.appendChild(li)
        span = document.createElement('span')
        span.innerHTML = 'x'
        li.append(span)
        inputBox.value = ''
        saveTask()
    }
}

lstContainer.addEventListener('click',function(e){
    if (e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
    }
    saveTask()
})

function saveTask(){
    localStorage.setItem('Data',lstContainer.innerHTML)
}

function showTask(){
    lstContainer.innerHTML = localStorage.getItem('Data')
}

showTask()
