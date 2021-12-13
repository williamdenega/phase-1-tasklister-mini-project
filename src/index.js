document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(e.target.new_todo.value)
    buildToDo(e.target.new_todo.value)
    form.reset()
  })
});


function buildToDo(todo){
  let li = document.createElement('li')
  li.setAttribute('id','todo')
  let btn = document.createElement('button')
  let btn2 = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn2.addEventListener('click',handleEdit)
  btn2.textContent = 'EDIT '
  btn.textContent = 'X'
  li.textContent= `${todo} `
  li.appendChild(btn2)
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)

}



function handleDelete(e){
  e.target.parentNode.remove()
}


function handleEdit(e){
  console.log(e.target.parentNode)

}