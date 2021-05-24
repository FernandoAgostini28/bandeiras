const card = document.querySelector('.grid');
const form = document.getElementById('idForm');
const input = document.getElementById('idInput');



document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    
})

const fetchData = async () =>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json();   
    printarBandeira(data);
    cardFiltrado(data);
    selecionado(data);
    
}

const printarBandeira = data => {
    let criaCard = ''
    data.forEach(item => {    
    
    criaCard += ` <article class="card">
    <div class="card-header">
        <img src="${item.flag}" alt="" srcset="">
    </div>
    <div class="card-body">
        <h3><strong>País: </strong>${item.name}</h3>
        <p><strong>População: </strong>${item.population}</p>
        <p><strong>Região: </strong>${item.region}</p>
        <p><strong>Capital: </strong>${item.capital}</p>
        <span><a href="./detalhes.html?name=${item.name}"><strong>Conheça ${item.name}</strong></a></span>
    </div>
</article>`
 
});
card.innerHTML = criaCard;
  
}

const cardFiltrado = data =>{
    form.addEventListener('keyup', (e)=>{
        e.preventDefault();

        const minusculaTextInput = input.value.toLowerCase();
        

        const arryFiltrado = data.filter(item =>{
            const textoApi = item.name.toLowerCase();
            
           if(textoApi.indexOf(minusculaTextInput)!== -1){
            return item
           }
           
        })            
        printarBandeira(arryFiltrado);
    })
}