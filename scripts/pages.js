d = document
just_name = d.getElementById('just-name')
core_area = d.getElementsByClassName('core-area')
nav_bar_item = d.getElementsByClassName('nav-bar-item')


just_name.addEventListener('click', ()=>{
    window.location.href = '../index.html'
})

try{d.getElementById('contact-card-launcher').addEventListener('click', ()=>{window.location.href = 'en-contact.html'})}catch{}
try{core_area[0].addEventListener('click', ()=>{window.location.href = 'en-review.html'})}catch{}
try{core_area[1].addEventListener('click', ()=>{window.location.href = 'en-achievements.html'})}catch{}
try{core_area[2].addEventListener('click', ()=>{window.location.href = 'en-skills.html'})}catch{}
try{core_area[3].addEventListener('click', ()=>{window.location.href = 'en-background.html'})}catch{}
try{core_area[4].addEventListener('click', ()=>{window.location.href = 'en-training.html'})}catch{}
try{core_area[5].addEventListener('click', ()=>{window.location.href = 'en-references.html'})}catch{}

nav_bar_item[0].addEventListener('click', ()=>{window.location.href = 'en-dedicated-section.html'})
nav_bar_item[1].addEventListener('click', ()=>{window.location.href = 'en-home.html'})
nav_bar_item[2].addEventListener('click', ()=>{window.location.href = 'en-contact.html'})
nav_bar_item[3].addEventListener('click', ()=>{print('en-contact.html')})