interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ali',
  lastName: 'Hassan',
  age: 19,
  location: 'Cairo',
}

const student2: Student = {
  firstName: 'Mona',
  lastName: 'Islam',
  age: 21,
  location: 'Alex',
}

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');

const headerRow: HTMLTableRowElement = document.createElement('tr');
const headers: string[] = ['First Name', 'Location'];

headers.forEach((headerText: string) => {
  const header: HTMLTableCellElement = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

studentsList.forEach((rowData: Student) => {
  const row: HTMLTableRowElement = document.createElement('tr');

  Object.keys(rowData).forEach((key: string) => {
    if (key === 'firstName' || key === 'location') {
      const cell: HTMLTableCellElement = document.createElement('td');
      cell.textContent = rowData[key];
      row.appendChild(cell);
    }
  });

  table.appendChild(row);
});

document.body.appendChild(table);
