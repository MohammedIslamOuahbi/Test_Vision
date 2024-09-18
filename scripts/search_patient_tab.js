window.onload = async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');

    if (query) {
        try {
            // Fetch results from the FastAPI endpoint
            const response = await fetch(`/search_patient?query=${encodeURIComponent(query)}`);
            if (!response.ok) {
                throw new Error('Patient not found');
            }

            const results = await response.json();
            const tableBody = document.querySelector('#search-results-table tbody');
            tableBody.innerHTML = ''; // Clear existing rows

            results.forEach((result, index) => {
                const row = document.createElement('tr');
                
                row.innerHTML = `
                        <td>${index + 1}</td>
                        <td>${patient.first_and_last_name}</td>
                        <td>${new Date(patient.birthDay).toLocaleDateString()}</td> 
                        <td><b style="color: ${patient.form_type === 'correction' ? 'red' : 'black'}">${patient.form_type }</b></td>
                        <td>${patient.id}</td>
                        <td>${new Date(patient.created_at).toLocaleDateString()}</td>
                        <td><button onclick="modifyPatient(${patient.id})" class="icon-btn edit-btn"><i class="fas fa-edit"></i></button></td>
                        <td><button onclick="viewDetails(${patient.id})" class="icon-btn view-btn"><i class="fas fa-eye"></i></button></td>
                        <td><button onclick="removePatient(${patient.id})" class="icon-btn remove-btn"><i class="fas fa-trash-alt"></i></button></td>
                        <td><button onclick="viewPDF(${patient.id})" class="icon-btn pdf-btn"><i class="fas fa-file-pdf"></i></button></td>
                    `;
                tableBody.appendChild(row);
            });
        } catch (error) {
            alert(error.message);
        }
    }
};

function viewPdf(patientId) {
    // Implement your logic to view the PDF for the patient
    alert(`Viewing PDF for patient ID: ${patientId}`);
}

function editPatient(patientId) {
    // Implement your logic to edit the patient's information
    alert(`Editing patient ID: ${patientId}`);
}

function removePatient(patientId) {
    // Implement your logic to remove the patient
    alert(`Removing patient ID: ${patientId}`);
}
