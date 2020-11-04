const links = document.querySelectorAll('.link');
const LS = JSON.parse(localStorage.getItem('currentLink'));

function setFirstLink() {
    links.forEach(link => {
        const text = LS;
        if (link.text === LS) {
            setLink(link);
        }
    });
}
links.forEach(link => {
    link.style.transition = `.2s all`;
    if (LS) {
        removeSelected();
        setFirstLink();
    }
    link.addEventListener('click', () => {
        removeSelected();
        setLink(link);
    });
});

function removeSelected() {
    links.forEach(link => {
        link.classList.remove('blue');
    });
}

function setLink(link) {
    link.classList.add('blue');
    setLinkLS(link.text);
}

function setLinkLS(text) {
    localStorage.setItem('currentLink', JSON.stringify(text));
}
