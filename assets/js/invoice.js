// $(document).ready(function () {
//     async function fetchBillData() {
//         try {
//             const response = await fetch('api-endpoint'); // API endpoint
//             if (!response.ok) throw new Error('Network response was not ok');
//             return await response.json();
//         } catch (error) {
//             console.error('Fetch error:', error);
//             return [];
//         }
//     }

//     async function renderTable() {
//         const billData = await fetchBillData();
//         const tbody = $(".bill-information table tbody");
//         tbody.empty();

//         billData.forEach(function (item) {
//             const newRow = `
//                 <tr>
//                     <td data-client="name">
//                         <div class="client-name-cell">
//                             <div class="client-initials" style="background-color: ${
//                                 item.icon
//                             };">${item.icon}</div>
//                             <span class="Client Name">${item.clientName}</span>
//                         </div>
//                     </td>
//                     <td data-client="related">${item.relatedTo}</td>
//                     <td data-client="close-date">${item.closeDate}</td>
//                     <td data-client="contact">${item.contactName}</td>
//                     <td data-client="priority">${item.priority}</td>
//                     <td data-client="status" status-data="${item.status
//                         .toLowerCase()
//                         .replace(/\s/g, "-")}">
//                         <span class="status-badge status-${item.status
//                             .toLowerCase()
//                             .replace(/\s/g, "-")}">${item.status}</span>
//                     </td>
//                 </tr>
//             `;
//             tbody.append(newRow);
//         });
//     }

//     renderTable();
// });

$(document).ready(function () {
  const billData = [
    {
      clientName: "Kris Marrier",
      relatedTo: "Commercial Press",
      closeDate: "Jun 29, 2022",
      contactName: "Kris Marrier",
      priority: "Normal",
      status: "Open",
      icon: "K",
    },
    {
      clientName: "Capla Paprocki",
      relatedTo: "Feltz printing service",
      closeDate: "Jul 5, 2022",
      contactName: "Capla Paprocki",
      priority: "High",
      status: "Completed",
      icon: "C",
    },
    {
      clientName: "John",
      relatedTo: "King",
      closeDate: "July 1, 2022",
      contactName: "John",
      priority: "High",
      status: "Not Started",
      icon: "J",
    },
    {
      clientName: "Kris Marrier",
      relatedTo: "Commercial Press",
      closeDate: "Jun 29, 2022",
      contactName: "Kris Marrier",
      priority: "Normal",
      status: "Started",
      icon: "K",
    },
  ];

  const tbody = $(".bill-information table tbody");
  tbody.empty();

  billData.forEach(function (item) {
    const newRow = `
      <tr>
        <td data-client="name">
          <div class="client-name-cell">
             <div class="client-initials" style="background-color: ${
               item.icon
             };">${item.icon}</div>
             <span class="Client Name">${item.clientName}</span>
          </div>
        </td>
        <td data-client="related">${item.relatedTo}</td>
        <td data-client="close-date">${item.closeDate}</td>
        <td data-client="contact">${item.contactName}</td>
        <td data-client="priority">${item.priority}</td>
        <td data-client="status" status-data="${item.status
          .toLowerCase()
          .replace(/\s/g, "-")}">
          <span class="status-badge status-${item.status
            .toLowerCase()
            .replace(/\s/g, "-")}">${item.status}</span>
        </td>
      </tr>
    `;
    tbody.append(newRow);
  });
});

$(document).ready(function () {
  const invoiceData = [
    {
      invoiceNumber: "10204",
      relatedTo: "Commercial Press",
      closeDate: "Jun 29, 2022",
      isChecked: false,
    },
    {
      invoiceNumber: "12945",
      relatedTo: "Feltz printing service",
      closeDate: "July 5, 2022",
      isChecked: true,
    },
    {
      invoiceNumber: "12356",
      relatedTo: "King",
      closeDate: "July 1, 2022",
      isChecked: false,
    },
    {
      invoiceNumber: "19853",
      relatedTo: "Commercial Press",
      closeDate: "Jun 29, 2022",
      isChecked: false,
    },
  ];

  const tbody = $(".invoice-container table tbody");
  tbody.empty(); // Clear existing rows

  invoiceData.forEach(function (item) {
    const checkboxHtml = item.isChecked
      ? '<input type="checkbox" checked>'
      : '<input type="checkbox">';

    const newRow = `
      <tr>
        <td data-invoice="number">
          <div style="display: flex; align-items: center; gap: 8px;">
            ${checkboxHtml}
            <span>${item.invoiceNumber}</span>
          </div>
        </td>
        <td data-invoice="related">${item.relatedTo}</td>
        <td data-invoice="close-date">${item.closeDate}</td>
      </tr>
    `;
    tbody.append(newRow);
  });
});
