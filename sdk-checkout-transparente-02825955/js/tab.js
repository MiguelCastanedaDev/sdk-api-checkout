document.addEventListener('DOMContentLoaded', function() {
    const input1 = document.getElementById('card');
    const input2 = document.getElementById('cash');
    const div1 = document.getElementById('checkout-container');
    const div2 = document.getElementById('cash-container');

    div1.style.display = 'block';
    div2.style.display = 'none';

    input1.addEventListener('change', function() {
        if (input1.checked) {
            div1.style.display = 'block';
            div2.style.display = 'none';
        }
    });

    input2.addEventListener('change', function() {
        if (input2.checked) {
            div2.style.display = 'block';
            div1.style.display = 'none';
        }
    });
});
