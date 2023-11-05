d = document
foo = d.getElementById('foo')
dt = new Date();
info_bar = d.getElementById('info-bar')
info_datetime = d.getElementById('info-datetime')
search_field = d.getElementById('search-field')
search_options = d.getElementById('search-options')
info_bar = d.getElementById('info-bar')
search_shortcut = d.getElementsByClassName('search-shortcut')
google_resume = d.getElementById('google-resume')
google_contact = d.getElementById('google-contact')

var hms = ''

function setTime(){
    tt = new Date();
    hms = `${tt.getHours()}:${tt.getMinutes()}:${tt.getSeconds()}H`
}

function updateDT(){
    setInterval(()=>{
        setTime()
        info_datetime.innerHTML = `${hms} ${dt.getDate()}/${dt.getMonth()+1}/${dt.getFullYear()}`;
    }, 1000)
}

search_field.addEventListener('focusout', ()=>{
    search_field.style = 'border-radius: 1.5em;'
    if(search_field.value == '/'){
        search_field.value = ''
    }
    search_options.style = 'display: block; opacity: 0; transition: .35s;'
    setTimeout(()=>{
        search_options.style = 'display: none;'
    }, 350)
})

search_field.addEventListener('focusin', ()=>{
    search_options.style = 'display: block;'
    search_field.style = 'border-radius: 1.5em 1.5em 0 0;'
})

function usingSearchingBar(){
    searchx = search_field.value.toLowerCase()
    if(searchx == ''){
        search_field.value = '/'
        searchx = '/'
    }
    searchx = searchx.split('/')
    searchx = searchx[1]
    if(searchx == '' || searchx == '/'){
        for(i=0; i<search_shortcut.length; i++){
            search_shortcut[i].style = 'display: block;'
        }
    }else{
        for(i=0; i<search_shortcut.length; i++){
            text = search_shortcut[i].innerHTML.toLowerCase()
            check = text.includes(searchx)
            if(check){
                search_shortcut[i].style = 'display: block;'
            }else{
                search_shortcut[i].style = 'display: none;'
            }
        }
    }
}

search_field.addEventListener('keyup', ()=>{usingSearchingBar()})

search_field.addEventListener('click', ()=>{
    if(search_field.value == ''){search_field.value = '/'}
    usingSearchingBar()
})

d.addEventListener('keydown', (event)=>{
    if(event.key == '/'){
        search_field.focus()
    }else if(event.key == 'Escape'){
        search_field.blur()
        search_field.value = ''
    }
})

d.addEventListener('mousemove', (event)=>{
    x = event.target.id
    y = event.target.classList[0]
    z = event.target.innerHTML
    if(x != '' && x != undefined){
        if(x == 'owner-img'){
            info_bar.innerHTML = `🎈 The owner's site`
        }else if(x == 'google-resume'){
            info_bar.innerHTML = '⭐ See a summary of all sections'
        }else if(x == 'google-contact'){
            info_bar.innerHTML = '📶 This takes you straight to my contact information!'
        }else if(x == 'search-field'){
            info_bar.innerHTML = '📌 From here you can visit a specific section'
        }
    }else if(y != '' && y != undefined){
        if(y == 'lang' || y == 'a-lang'){
            info_bar.innerHTML = '🌎 You can select the language in which you want to view this site'
        }else if(z != '' && z != undefined && z.length < 200){
            if(z == 'Software development skills'){
                info_bar.innerHTML = '✨ This takes you straight to what you might be most interested in!'
            }else if(z == `I'm feeling lucky`){
                info_bar.innerHTML = '🔮 Go to a random section'
            }
        }
    }else{
        info_bar.innerHTML = 'Welcome!'
    }
})

google_resume.addEventListener('click', ()=>{window.location.href = 'html/en-home.html'})
google_contact.addEventListener('click', ()=>{window.location.href = 'html/en-contact.html'})

window.onload = ()=>{setTimeout(()=>{d.getElementById('foo').style = 'display: inline-block;'},1300)}

updateDT()