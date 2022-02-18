function _clear(){
    const input = document.getElementById ('name').value = '';
}

let form = document.getElementById('back');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementById ('name').value = '';
})

let input = document.getElementById('tx');
input.insertAdjacentHTML('afterend', '<div class="taxt">rrr</div>');


console.log(input) 