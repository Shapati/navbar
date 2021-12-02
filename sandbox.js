
const harm = document.querySelector('img');
const nav = document.querySelector('nav')
const pop = document.querySelector('.popup')
const another = document.querySelector('.neww')
const ul = document.querySelector('ul')

harm.addEventListener('click', ()=>{
    harm.style.display='none'
    pop.style.display='block'
})

const click = document.querySelector('.click')

click.addEventListener('click',()=>{
    pop.style.display='none'
    harm.style.display='block'
    
})
gsap.from('.popup',{duration: 1,y: '-100%', delay: 0.6})   

gsap.from('li', {duration: 2,opacity: 0, delay: 1})

   
