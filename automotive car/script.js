const li = document.querySelectorAll('.tab');
const visit = document.getElementById('visit-card');
const LS = JSON.parse(localStorage.getItem('links'));

setFirstLink(LS);
function setFirstLink(LS) {
    removeSelected();
    li.forEach(li => {
        const text = li.children[0].innerHTML;
        if (text === LS) {
            li.classList.add('selected');
            addMain(text);
        }
    });
}

li.forEach(li => {
    li.addEventListener('click', () => {
        removeSelected();
        li.classList.add('selected');
        const text = li.querySelector('a').innerHTML;
        setItemLS(text)
        addMain(text);
    });
});

function removeSelected() {
    li.forEach(li => {
        li.classList.remove('selected');
    });
}

function addMain(text) {
    visit.querySelector('a').innerText = text;
}

function setItemLS(item) {
    localStorage.setItem('links', JSON.stringify(item));
}