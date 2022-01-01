window.onload = function () {
    const okButton = document.getElementById("ok");
    const passwordField = document.getElementById("password");
    const checkboxes = document.querySelectorAll('.checkbox');
    const ranges = document.querySelectorAll('.range');
    const launchButton = document.querySelector('.launch');
    const rocket = document.getElementById("rocket");

    okButton.addEventListener('click', function () {
        if (passwordField.value === 'TrustNo1') {
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].disabled = false;
            }
            for (let i = 0; i < ranges.length; i++) {
                ranges[i].disabled = false;
            }
            const passwordField = document.querySelector('.password');
            passwordField.disabled = true;
            okButton.disabled = true;
        }
    });

    launchButton.addEventListener('click', function () {
        let x = 10;
        let timer = setInterval(function () {
                rocket.style.top = x + "%";
                x--;
                if (x == 0) clearInterval(timer);
            },
            20);
    });
}

function checkInputs() {
    const launchButton = document.querySelector('.launch');
    const checkboxes = document.querySelectorAll('.checkbox');
    const ranges = document.querySelectorAll('.range');
    let validated = true;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === false) {
            validated = false;
        }
    }
    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i].value !== "100") {
            validated = false;
        }
    }
    if (validated) {
        launchButton.disabled = false;
    }
}