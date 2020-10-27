const li = document.querySelectorAll('.tab');
const a = document.getElementById('selected');

li.forEach(li => {
    console.log(li);
    li.addEventListener('click', () => {
        removeSelected();
        li.classList.add('selected');
        addSelected(li.children[0].innerHTML);
    });
});

function removeSelected() {
    li.forEach(li => {
        li.classList.remove('selected');
    });
}

function addSelected(text) {
    a.innerHTML = text;
}