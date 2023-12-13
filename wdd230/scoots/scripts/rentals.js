// Fetch and display data from the JSON file
fetch("data/pricingData.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.getElementById("pricingTableBody");

    // Iterate through rental types and add rows to the table
    data.maxRentalPricing.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
       <td>${entry.type}</td>
       <td>${entry.persons}</td>
       <td>${entry.reservation.halfDay}</td>
       <td>${entry.reservation.fullDay}</td>
       <td>${entry.walkIn.halfDay}</td>
       <td>${entry.walkIn.fullDay}</td>
     `;
      tableBody.appendChild(row);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
