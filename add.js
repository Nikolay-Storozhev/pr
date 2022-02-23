let form = document.getElementById('back');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementById('name');

    let tx = document.getElementById('tx');
    tx.insertAdjacentHTML('beforeend', '<div class="taxt">'+input.value+'</div>');

    input.value = ''
})
