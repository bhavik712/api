const showCountryNames = (countryNames)=>{
    document.querySelector('#country-data').innerHTML = ''
    countryNames.forEach((countryName)=>{
        const nameEle = document.createElement('h3');
        nameEle.textContent = countryName.name.common;
        document.querySelector('#country-data').appendChild(nameEle);

    })
}


const getCountries = async (regionName) =>{
    let response = await fetch(`https://restcountries.com/v3.1/region/${regionName}?fields=name`)
    const countryNames = await response.json();
    // console.log(countryNames);
    showCountryNames(countryNames);
}

document.querySelector('#get-country-names').addEventListener('click',(e)=>{
    getCountries(e.target.value);
}) 

const searchCountryCapital = async (searchText) =>{
    response = await fetch('https://restcountries.com/v3.1/all?fields=name,capital')
    response = await response.json();
    const countries = response.filter((item)=>item.name.common.toLowerCase().includes(searchText.toLowerCase()))
    document.querySelector('#country-data').innerHTML ='';

    for (let country of countries){
        const countryNameEle = document.createElement('h3');
        countryNameEle.textContent = country.name.common;
        document.querySelector('#country-data').appendChild(countryNameEle);

        const capitalNameEle = document.createElement('h4');
        capitalNameEle.textContent = country.capital;
        document.querySelector('#country-data').appendChild(capitalNameEle);

    }
}
document.querySelector('#search-capital').addEventListener('input', (e)=>{
    searchCountryCapital(e.target.value);
})

