function lockedProfile() {
    let profilesElements = document.getElementsByClassName('profile');

    if (profilesElements == null) {
        throw new Error('Missing DOM Elements!');
    }

    function clickHandler(e) {
        let radios = e.target.parentElement.querySelectorAll('input[type="radio"]');
        if (radios == null) {
            throw new Error('Missing radio buttons!');
        }

        if (radios[1].checked) {
            let hiddenElement = e.target.parentElement.querySelector('div');
            if (hiddenElement == null) {
                throw new Error('Missing hidden profile info!');
            }

            showOrHideMap[hiddenElement.style.display !== 'block'](hiddenElement, e.target, radios)
        }
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

    for (const profile of Array.from(profilesElements)) {
        let btn = profile.querySelector('button');
        if (btn == null) {
            throw new Error('Missing Button!');
        }
        btn.addEventListener('click', clickHandler);
    }
}