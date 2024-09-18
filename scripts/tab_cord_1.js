document.getElementById('coordinateTable1').addEventListener('click', function(e) {
    if (e.target.tagName === 'LABEL') {
        const td = e.target.closest('td'); // Get the parent cell of the clicked label
        const table = td.closest('table'); // Get the table element

        // Remove 'selected' class from all cells
        const allCells = table.querySelectorAll('td');
        allCells.forEach(cell => {
            cell.classList.remove('selected');
        });

        // Add 'selected' class to the clicked cell
        td.classList.add('selected');

        // Check the associated radio button
        const radio = td.querySelector('input[type="radio"]');
        if (radio) {
            radio.checked = true;
        }

        console.log(`Selected: ${e.target.textContent} at row ${td.parentElement.rowIndex}, column ${td.cellIndex}`);
    }
});
