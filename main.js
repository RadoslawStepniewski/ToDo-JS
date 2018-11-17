const li = document.querySelectorAll('li');

const removeLi = (e) => {
    e.target.remove()
}

li.forEach(e => e.addEventListener('click', removeLi))