const userInp = document.querySelector('input');
const form = document.getElementById('myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchKey = userInp.value;
    axios.get('https://api.unsplash.com/search/photos?page=10&query=${searchKey}&client_id=qYv3cjnECpaACl6AVCaZVaDZMODyA42Kbp7TsYQ4Vbk')
        .then(function(response){
            console.log(response);
        })
})