function dragover(ev) {
    ev.preventDefault();
    console.log('ondragover')
}

function drag(ev) {
    console.log('drag')
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    console.log('drop')
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

function dragenter(ev) {
    console.log('ondragenter')
}

function dragleave(ev) {
    console.log('ondragleave')
}

function dragend(ev) {
    console.log('ondragend')
}

console.log('i am run')