// let no = 1;

document.getElementById("isiform").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const usia = document.getElementById("usia").value;
  const alamat = document.getElementById("alamat").value;
  const outlet = document.getElementById("outlet").value;
  const posisi = document.getElementById("posisi").value;

  const tableBody = document.getElementById("tabelbody");
  const row = document.createElement("tr");



  row.innerHTML = `
  <td data-label="No"></td>
  <td data-label="Nama">${nama}</td>
  <td data-label="Usia">${usia}</td>
  <td data-label="Alamat">${alamat}</td>
  <td data-label="Outlet">${outlet}</td>
  <td data-label="Posisi">${posisi}</td>
  <td data-label="Aksi">
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Hapus</button>
  </td>
`;
  
  tableBody.appendChild(row);
  document.getElementById("isiform").reset();
  updateNomor();
});

document.getElementById("tabelbody").addEventListener("click", function (e) {
  const row = e.target.closest("tr");
  if (e.target.classList.contains("delete-btn")) {
    row.remove();
    updateNomor();
  }
  if (e.target.classList.contains("edit-btn")) {
    const cells = row.querySelectorAll("td");
    document.getElementById("nama").value = cells[1].textContent;
    document.getElementById("usia").value = cells[2].textContent;
    document.getElementById("alamat").value = cells[3].textContent;
    document.getElementById("outlet").value = cells[4].textContent;
    document.getElementById("posisi").value = cells[5].textContent;
    row.remove();
    updateNomor();
  }
});

function updateNomor() {
  const rows = document.querySelectorAll("#tabelbody tr");
  rows.forEach((row, idx) => {
    row.querySelector("td").textContent = idx + 1;
  });
}
