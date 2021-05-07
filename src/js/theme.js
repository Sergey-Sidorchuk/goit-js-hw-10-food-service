const refs = {
    body: document.querySelector('body'),
    switcher: document.querySelector('#theme-swith-toggle'),
};

const theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.switcher.addEventListener('change', switchBox);

if (localStorage.getItem('theme')) {
    refs.body.classList.add(localStorage.getItem('theme'));
} else {
    refs.body.classList.add(theme.LIGHT);
};