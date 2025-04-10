const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const resultDiv = document.getElementById('result');
const input = document.getElementById('conditionInput')
function searchCountries() {
    const input2 = input.value.toLowerCase();
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        const countries = data.countriess.find(item => item.name.toLowerCase() === input2);

        if (countries) {
        //   const australia = countries.australia.join(', ');
        //   const japan = countries.japan.join(', ');
        //   const brazil = countries.brazil;

          resultDiv.innerHTML += `<h2>${countries.name},${countries.cities[0].name}</h2>`;
          resultDiv.innerHTML += `<img src="${countries.imagesrc}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${countries.cities[0].description}</p><br>`;

          resultDiv.innerHTML += `<h2>${countries.name},${countries.cities[1].name}</h2>`;
          resultDiv.innerHTML += `<img src="${countries.imagesrc}" alt="hjh">`;
          resultDiv.innerHTML += `<p>${countries.cities[1].description}</p>`;

        //   resultDiv.innerHTML += `<p><strong>australia:</strong> ${australia}</p>`;
        //   resultDiv.innerHTML += `<p><strong>japan:</strong> ${japan}</p>`;
        //   resultDiv.innerHTML += `<p><strong>brazil:</strong> ${brazil}</p>`;
        } else {
          resultDiv.innerHTML = 'countries not found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchCountries);

    function clear() {
        resultDiv.innerHTML = '';
        input.value = '';
    }
    btnClear.addEventListener('click', clear);