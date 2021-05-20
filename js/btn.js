const btn = document.getElementById('btn-toggle')
btn.addEventListener('click', () =>{
    document.body.classList.toggle('dark');  
    console.log(document.body.className);

    if(document.body.className === 'dark'){
        btn.innerHTML = `<i class="fas fa-sun"></i>Ligth Mode`
    } else{ 
         btn.innerHTML = `<i class="fas fa-moon"></i> Dark Mode`
    }
    
})