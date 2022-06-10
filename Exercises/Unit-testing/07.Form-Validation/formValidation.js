function validate() {
    let usernameElem = document.getElementById('username');
    let emailElem = document.getElementById('email');
    let passwordElem = document.getElementById('password');
    let confirmPassElem = document.getElementById('confirm-password');
    let isCompanyCheckboxElem = document.getElementById('company');
    let companyFieldset = document.getElementById('companyInfo');
    let companyNumberElem = document.getElementById('companyNumber');
    let btn = document.getElementById('submit');
    let validatorElem = document.getElementById('valid');

    let usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
    let passwordsPattern = /^\w{5,15}$/;
    let emailPattern = /.*@.*\..*/;
    let companyPattern = /^(100[0-9]|10[1-9][0-9]|1[1-9][0-9]{2}|[2-9][0-9]{3})$/;

    isCompanyCheckboxElem.addEventListener('change', function toggleCompanyInfo(e) {
        if (e.currentTarget.checked == true) {
            companyFieldset.style.display = 'block';
        } else {
            companyFieldset.style.display = 'none';
        }
    });

    function generalValidator(pattern, elem, elem2) {
        if (elem2 === undefined) {
            if (elem.value.match(pattern) == null) {
                elem.style.border = '2px solid red';
            } else {
                elem.style.border = 'none';
            }

        } else {
            if (elem2.type == 'checkbox') {
                if (elem2.checked == true) {
                    if (elem.value.match(pattern) == null) {
                        elem.style.border = '2px solid red';
                    } else {
                        elem.style.border = 'none';
                    }
                } else {
                    elem.style.border = 'none';
                }

            } else {
                if (elem.value.match(pattern) == null || elem2.value.match(pattern) == null || elem.value != elem2.value) {
                    elem.style.border = '2px solid red';
                    elem2.style.border = '2px solid red';
                } else {
                    elem.style.border = 'none';
                    elem2.style.border = 'none';
                }
            }
        }
    }

    function isFormValid() {
        let usernameValidator = generalValidator.bind(this, usernamePattern, usernameElem);
        let emailValidator = generalValidator.bind(this, emailPattern, emailElem);
        let passValidator = generalValidator.bind(this, passwordsPattern, passwordElem, confirmPassElem);
        let companyValidator = generalValidator.bind(this, companyPattern, companyNumberElem, isCompanyCheckboxElem);
        usernameValidator();
        emailValidator();
        passValidator();
        companyValidator();

        let inputs = document.querySelectorAll('input');

        if (Array.from(inputs).filter(e => e.type != 'checkbox').map(e => e.style.border).includes('2px solid red')) {
            return false;
        }
        return true;
    }

    function validatorHandler(e) {
        e.preventDefault();
        if (isFormValid() == true) {
            validatorElem.style.display = 'block';
        } else {
            validatorElem.style.display = 'none';
        }
    }
    btn.addEventListener('click', validatorHandler);
}