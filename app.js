const input = document.querySelector('.entered-list');
const add = document.querySelector('.add-list');
const tasks = document.querySelector('.tasks');

input.addEventListener('keyup', () => {
    if (input.value.trim() !== '') {
        add.classList.add('active');
    } else {
        add.classList.remove('active');
    }
});

add.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `
            <p>${input.value}</p>
            <div class="item-btn">
                <i class="fa-solid fa-square-plus"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
        `;
        tasks.appendChild(newItem);
        input.value = '';
        add.classList.remove('active');
    } else {
        alert('Please enter a task');
    }
});

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-square-plus')) {
        e.target.parentElement.parentElement.classList.toggle('completed');
    } else if (e.target.classList.contains('fa-trash')) {
        e.target.parentElement.parentElement.remove();
    }
});
