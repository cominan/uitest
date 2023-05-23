const head = document.getElementById('header')
const openList = document.getElementById('list-header')

window.addEventListener('click', (e) => {
    if (head.contains(e.target)) {
        openList.classList.toggle('hidden')
    } else {
        openList.classList.add('hidden')
    }
})