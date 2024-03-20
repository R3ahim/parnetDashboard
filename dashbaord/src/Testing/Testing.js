import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const initialData = [
  { date: "2024-01-01", name: "abdurrahim", job: "student" },
  { date: "2024-01-02", name: "abdurRahim", job: "student" },
  { date: "2024-02-03", name: "abdul Korim", job: "student" },
  { date: "2024-04-04", name: "AbdurRofik", job: "student" },
  { date: "2024-04-05", name: "abdurRafi", job: "student" },
];

const Testing = () => {
  const [data, setData] = useState(initialData);

  const printData = () => {
    const tableData = data.map(item => Object.values(item).join('\t'));
    console.log(tableData.join('\n'));
  };

  const exportToExcel = () => {
    try {
      const worksheet = XLSX.utils.json_to_sheet(data);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet 1');
      XLSX.writeFile(workbook, 'data.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.job}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={printData}>Print Data</button>
      <button onClick={exportToExcel}>Export to Excel</button>
    </div>
  );
};

export default Testing;
