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

const customStyles = {
  rows: {
    style: {
      border: '1px solid black !important',
      borderRadius: '15px',
      marginBottom: '15px'
    },
  },
  headRow: {
    style: {
      border: 'none !important',
      backgroundColor: 'rgb(207, 205, 205)'
    },
  },
  table: {
    style: {
      backgroundColor: 'rgb(207, 205, 205)',
      width: '90%',
      border: '1px solid black !important',
    },
  }
};

function App() {
  return (
    <div className="App">
      <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
      />
    </div>
  );
}

export default App;
