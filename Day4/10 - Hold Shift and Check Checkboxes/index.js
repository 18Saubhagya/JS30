const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let flagCheck;

function checkBox(e) {
    let between = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === flagCheck)
                between = !between;
            if (between)
                checkbox.checked = true;
        });
    }
    flagCheck = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkBox));