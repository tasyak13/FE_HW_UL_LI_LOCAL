"use strict";

const saveNamesJson = window.localStorage.getItem('names');

const saveNames = JSON.parse(saveNamesJson);

const arrNames = [] || saveNames;
saveNames.forEach(element => {
    let liLast = document.createElement('li');
    liLast.innerHTML = element;
    listOfNames.append(liLast);
});


function addLi() {
    let newNamed = document.getElementById('newName').value;
    let liLast = document.createElement('li');
    liLast.innerHTML = newNamed;
    listOfNames.append(liLast);

    arrNames.push(newName.value);
    console.log(arrNames);
    window.localStorage.setItem('names', JSON.stringify(arrNames));
};