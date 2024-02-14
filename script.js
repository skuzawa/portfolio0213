const checkbox = document.getElementById('switch');
checkbox.addEventListener('click', () => {
        const switch2 = document.querySelector('.switch2');
        switch2.textContent = checkbox.checked ? '通常モード' : 'ナイトモード';
});