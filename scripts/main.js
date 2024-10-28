// scripts/main.js
import { series } from './data.js'; // Importar la lista de series

const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
const seriesCount = series.length;
const averageSeasons = totalSeasons / seriesCount;


function createTable(series) {
    let tableHTML = `
        <table class="table">
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
        <td colspan="3">Season average: ${averageSeasons}</td>
    </tr>
`;

    tableHTML += `
            </tbody>
        </table>
    `;
    return tableHTML;
}

function showDetails(serie) {
    const detailContainer = document.getElementById("seriesDetailContainer");
    if (detailContainer) {
        detailContainer.innerHTML = `
            <div class="card">
                <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
                <div class="card-header">
                    <h5>${serie.name}</h5>
                </div>
                <div class="card-body">
                    <p><strong>Channel:</strong> ${serie.channel}</p>
                    <p><strong>Seasons:</strong> ${serie.seasons}</p>
                    <p><strong>Description:</strong> ${serie.description || "No description available."}</p>
                    <a href="${serie.url}" class="btn btn-primary" target="_blank">Watch Now</a>
                </div>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById("seriesTableContainer");
    if (tableContainer) {
        tableContainer.innerHTML = createTable(series);

        const serieRows = document.querySelectorAll('.serie-row');
        serieRows.forEach(row => {
            row.addEventListener('click', () => {
                const serieId = row.getAttribute('data-id');
                const selectedSerie = series.find(serie => serie.id == serieId);
                showDetails(selectedSerie);
            });
        });

    }
});

