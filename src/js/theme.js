const themes = document.querySelector('.js-theme-group');

(function () {
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme) {
        //select all radio buttons
        const options = document.querySelectorAll('.js-theme__input-option');
        //append selected theme as class on body element
        document.body.className = `${selectedTheme}`;
        const currentBtn = [...options].filter(
            (option) => option.value === selectedTheme
        );
        currentBtn[0].checked = true;
    }

})();

//add event listener to radio button group 
themes.addEventListener('change', (e) => {
    e.preventDefault();
    let currentTheme = e.target.value;
    document.body.className = `${currentTheme}`;
    currentTheme = localStorage.setItem("theme", currentTheme);
})

