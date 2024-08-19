(function() {

    const form = document.querySelector('.login-form');

    function reset() {
        form.elements.email.value = '';
        form.elements.password.value = '';
    }


    function submitEvent(e) {
        e.preventDefault();
        if(!(form.elements.email.value.trim()) || !(form.elements.password.value.trim()) ) {
            alert('All form fields must be filled in')
        } else {
            const formData = {
                email: form.elements.email.value,
                password: form.elements.password.value
            }
    
            console.log(formData);
        }        

        reset();
    }
    
    form.addEventListener('submit', submitEvent);

})();