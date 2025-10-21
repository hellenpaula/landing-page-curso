
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.add('active');
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('active');
}

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior:'smooth'
            });
        }
        document.querySelector('.sidebar').classList.remove('active');
    })
});

const filterButtons = document.querySelectorAll('.filterBtn');
const cursos = document.querySelectorAll('.curso');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('activeBtn'));
        button.classList.add('activeBtn');

        const filter = button.getAttribute('data-filter');

        cursos.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || filter === category) {
            card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        });
    });



const btnAssinar = document.querySelector('.btnAssinar');
let email = document.querySelector('input');
// texto@texto.com
let regex = /^[^\s]+@[^\s]+\.[^\s]+$/;
btnAssinar.addEventListener('click', checkInputEmail);

function checkInputEmail() {
    let emailValue = email.value;

    if (emailValue === '') {
        errorMessage(email, 'Digite um email.' );
    } else if (!regex.test(emailValue)) {
        errorMessage(email, 'Digite um email válido.' );
    } else {
        const inputItem = email.parentElement;
        const tagMessage = inputItem.querySelector('span');
        tagMessage.className = 'item';
    }
};

function errorMessage(input, message) {
    const inputItem = input.parentElement;
    const tagMessage = inputItem.querySelector('span');
    tagMessage.className = 'errorMessage';
    tagMessage.innerText = message;
}