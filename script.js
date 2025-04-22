async function fetchCovidData() {
    const response = await fetch('https://api.rootnet.in/covid19-in/stats/latest'); 
    const data = await response.json();
    return data.data.regional; 
}
  
async function populateTable() {
    const regionalData = await fetchCovidData();
    const tableBody = document.querySelector('#covid-table tbody');
  
    regionalData.forEach((region, index) => {
        const totalCases = region.confirmedCasesIndian + region.confirmedCasesForeign;
  
        const row = `
        <tr>
            <td>${index + 1}</td>
            <td>${region.loc}</td>
            <td>${region.confirmedCasesIndian}</td>
            <td>${region.confirmedCasesForeign}</td>
            <td>${region.discharged}</td>
            <td>${region.deaths}</td>
            <td>${totalCases}</td>
        </tr>
      `
        tableBody.insertAdjacentHTML('beforeend', row);
    });
}
  
populateTable();


