function lockedProfile() {
    const profilesElements = document.getElementsByClassName('profile');

    if (profilesElements == null) {
        throw new Error('Missing DOM Elements!');
    }

    const showOrHideMap = {
        true: (elem, btn, _) => {
            elem.style.display = 'block';
            btn.textContent = 'Hide it';
        },
        false: (elem, btn, radios) => {
            if (radios[1].checked) {
                elem.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }

    function clickHandler(e) {
        const radios = e.target.parentElement.querySelectorAll('input[type="radio"]');
        if (radios == null) {
            throw new Error('Missing radio buttons!');
        }

        if (radios[1].checked) {
            const hiddenElement = e.target.parentElement.querySelector('div');
            if (hiddenElement == null) {
                throw new Error('Missing hidden profile info!');
            }

            showOrHideMap[hiddenElement.style.display !== 'block'](hiddenElement, e.target, radios)
        }
    }

    for (const profile of Array.from(profilesElements)) {
        const btn = profile.querySelector('button');
        if (btn == null) {
            throw new Error('Missing Button!');
        }
        btn.addEventListener('click', clickHandler);
    }
}