fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
  .then(response => response.json())
  .then(data => {
    // Sort data based on NRR value in ascending order
    data.sort((a, b) => parseFloat(a.NRR) - parseFloat(b.NRR));

    // Get table body element
    const tbody = document.querySelector("tbody");

    // Loop through the sorted data and create table rows
    data.forEach((team, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${team.Team}</td>
        <td>${team.Matches}</td>
        <td>${team.Won}</td>
        <td>${team.Lost}</td>
        <td>${team.Tied}</td>
        <td>${team.NRR}</td>
        <td>${team.Points}</td>
      `;
      tbody.appendChild(row);
    });
  })
  .catch(error => console.error("Error fetching data:", error));
