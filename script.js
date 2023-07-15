const btn = document.getElementById('btn');
const links = document.getElementById('social-links');

btn.addEventListener('click' , () =>  {
    links.classList.toggle('active')
})