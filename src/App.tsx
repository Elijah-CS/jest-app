import React from 'react';
import './App.css';
import DataTable, { TableColumn } from 'react-data-table-component';

interface dataInt {
  id: number
  title: string
  year: string
}

const columns: TableColumn<dataInt>[] = [
  {
    name: 'Title',
    selector: (row: dataInt) => row.title,
  },
  {
    name: 'Year',
    selector: (row: dataInt) => row.year,
  },
];

const data: dataInt[] = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]

function App() {
  return (
    <div className="App">
      Hello
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}

export default App;
