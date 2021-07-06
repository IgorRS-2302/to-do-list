function addTasks () {
    let newTask = document.getElementById('description').value
    let listContainer = document.getElementsByClassName('list-container')[0]
    let description = document.createElement('p')

    description.innerText = newTask
    listContainer.appendChild(description)
}