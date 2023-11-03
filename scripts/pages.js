d = document
just_name = d.getElementById('just-name')
core_area = d.getElementsByClassName('core-area')
nav_bar_item = d.getElementsByClassName('nav-bar-item')

just_name.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})

try{
    core_area[0].addEventListener('click', ()=>{
        window.location.href = 'en-review.html'
    })
}catch(err){
    console.log(err)
}

nav_bar_item[0].addEventListener('click', ()=>{
    window.location.href = 'en-process-autom.html'
})

nav_bar_item[1].addEventListener('click', ()=>{
    window.location.href = 'en-home.html'
})