function _clear(){
    const input = document.getElementById ('name').value = '';

    console.log('el1')
}

let form = document.getElementById('back');
form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementById ('name').value = '';
    console.log('el2')
})