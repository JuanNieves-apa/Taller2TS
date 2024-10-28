// scripts/main.js
import { series } from './data.js'; // Importar la lista de series

const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
const seriesCount = series.length;
const averageSeasons = totalSeasons / seriesCount;


// Generar el HTML de la tabla con los datos de las series
function generateSeriesTable(series) {
    let tableHTML = `
        <table class="table table-dark-rows">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Channel</th>
                    <th scope="col">Seasons</th>
                </tr>
            </thead>
            <tbody>
    `;
    for (const serie of series) {
        tableHTML += `
            <tr>
                <th scope="row">${serie.id}</th>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            </tr>
        `;
    }
    tableHTML += `
    <tr>
        <td colspan="3">Season average: ${averageSeasons.toFixed(0)}</td>
    </tr>
`;

    tableHTML += `
            </tbody>
        </table>
    `;
    return tableHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById("seriesTableContainer");
    if (tableContainer) {
        tableContainer.innerHTML = generateSeriesTable(series);
    }
});
//finalizado Taller 1