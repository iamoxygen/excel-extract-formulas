const XLSX = require('xlsx');
const path = require('path');

function extractFormulas(filePath) {
    const workbook = XLSX.readFile(filePath, { cellFormula: true }); // Enable formula extraction
    const formulas = {}; // Object to hold formulas for each sheet

    workbook.SheetNames.forEach(sheetName => {
        const sheet = workbook.Sheets[sheetName];
        const sheetFormulas = {}; // Object to hold formulas for the current sheet

        // Loop through all cells in the sheet to find formulas
        Object.keys(sheet).forEach(cellAddress => {
            const cell = sheet[cellAddress];
            // Check if the cell contains a formula
            if (cell && cell.f) {
                sheetFormulas[cellAddress] = cell.f;
            }
        });

        formulas[sheetName] = sheetFormulas; // Store formulas for the sheet
    });

    return formulas;
}

module.exports = extractFormulas
