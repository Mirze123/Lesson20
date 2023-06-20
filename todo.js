const btnAdd = document.getElementById('btnAdd');
const cardBody = document.querySelector('.card-body');
const txtSearch = document.getElementById('txtSearch');
let todoDatas = [];

document.addEventListener('DOMContentLoaded', addAllEvents);

function addAllEvents() {
    btnAdd.addEventListener('click', addTodo);
    txtSearch.addEventListener('keyup', onFlySearch);
}

function addTodo() {
    let todo = prompt('Write your todo here');

    if (todo === "") {
        alert('Cannot insert null todo to app');
        return;
    }

    if (todo === null) {
        return;
    }

    todoDatas.push({
        name: todo
    });

    initTodos(todoDatas);



}

function initTodos(data) {
    cardBody.innerHTML = '';

    for (let item of data) {

        let divMainRow = document.createElement('div');
        divMainRow.className = 'row mt-4';
        let divMainCol12 = document.createElement('div');
        divMainCol12.className = 'col-12 mx-1 shadow-lg';
        let divChildRow = document.createElement('div');
        divChildRow.className = 'row';
        let divChildCol8 = document.createElement('div');
        divChildCol8.className = 'col-8';
        let p = document.createElement('p');
        p.textContent = item.name;
        let divChildCol4 = document.createElement('div');
        divChildCol4.className = 'col-4';
        let btnEdit = document.createElement('a');
        btnEdit.href = "#";
        btnEdit.className = 'btn btn-success';
        btnEdit.textContent = 'Edit';
        let btnRemove = document.createElement('a');
        btnRemove.href = "#";
        btnRemove.className = 'btn btn-danger';
        btnRemove.textContent = 'Delete';
        btnRemove.addEventListener('click', deleteTodo);

        divMainRow.appendChild(divMainCol12);
        divMainCol12.appendChild(divChildRow);
        divChildRow.appendChild(divChildCol8);
        divChildCol8.appendChild(p);
        divChildRow.appendChild(divChildCol4);
        divChildCol4.appendChild(btnEdit);
        divChildCol4.appendChild(btnRemove);

        cardBody.appendChild(divMainRow);

    }



}

function onFlySearch() {

    let searchValue = txtSearch.value;

    let filteredDatas = todoDatas.filter(x => x.name.includes(searchValue));

    initTodos(filteredDatas);

}

function deleteTodo(e) {
    // arrayin ozundende silinmelidir

    let name = e.target.parentNode.parentNode.querySelector('.col-8').getElementsByTagName('p')[0].textContent;
    console.log(name);
    todoDatas = todoDatas.filter(x => x.name !== name);

    e.target.parentNode.parentNode.parentNode.parentNode.remove();
}