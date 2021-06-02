const detalheName = new URLSearchParams(document.location.search)
const nome = detalheName.get("name");
const detalheBandeira = document.querySelector('.detalhes')

document.addEventListener('DOMContentLoaded', () => {
    detalheApi()
})

const detalheApi = async () => {
    /*const res = await fetch(`https://restcountries.eu/rest/v2/name/${nome}`)*/
    const res = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await res.json()
    const apiFiltrada = data.filter(item => item.name === nome)
    detalheCard(apiFiltrada)
    console.log(apiFiltrada)

}

const detalheCard = apiFiltrada => {
        let criaDetalheBandeira = ""
        for (let [index, item] of apiFiltrada.entries()){
        criaDetalheBandeira += `<section>
        <img src="${item.flag}" alt="" srcset="">
    </section>
    <section>
        <div class="detalhe-name">
            <h2>${item.name}</h2>
        </div>
        <div class="detalhes-info">
            <div class="detalhes-info-item">
                <p><strong>Native Name:</strong> ${item.nativeName}</p>
                <p><strong>Population:</strong> ${item.population}</p>
                <p><strong>Region:</strong> ${item.region}</p>
                <p><strong>Sub Region:</strong> ${item.subregion}</p>
                <p><strong>Capital:</strong> ${item.capital}</p>
            </div>
            <div class="detalhes-info-item">
                <p><strong>Top Level Domain:</strong> ${item.topLevelDomain[0]}</p>
                <p><strong>Currencies:</strong> ${item.currencies[0].name} ${item.currencies[0].symbol}</p>
                <p><strong>Languages:</strong> ${item.languages[0].name}</p>
            </div>
        </div>
        <div class="detalhes-footer">
            <h3>Border Countries: </h3>
            <button class="btn">Fazer</button>
            <button class="btn">Fazer</button>
            <button class="btn">Fazer</button>
        </div>
    </section>`
        }
    detalheBandeira.innerHTML = criaDetalheBandeira
}