const card = document.querySelector('.grid');
console.log(card);


document.addEventListener("DOMContentLoaded", () => {
    fetchData();
})

const fetchData = async () =>{
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json();
    console.log(data);
    printarBandeira(data);
}

const printarBandeira = data => {
    let criaCard = ''
    data.forEach(item => {    
    
    criaCard += ` <article class="card">
    <div class="card-header">
        <img src="${item.flag}" alt="" srcset="">
    </div>
    <div class="card-body">
        <p><strong>População: </strong>206135893</p>
        <p><strong>Região: </strong>Americas</p>
        <p><strong>Capital: </strong>Brasília</p>
    </div>
</article>`
 
});
card.innerHTML = criaCard;
  
}