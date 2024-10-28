import { series } from './data';
import { Serie } from './serie';

function createTable(series: Serie[]): string {
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

    for (let serie of series) {
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
            </tbody>
        </table>
    `;
    
    return tableHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const tableContainer = document.getElementById("seriesTableContainer");
    if (tableContainer) {
        tableContainer.innerHTML = createTable(series);
    }
});