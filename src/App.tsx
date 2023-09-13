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

// const data: dataInt[] = [
//   {
//     id: 1,
//     title: 'Beetlejuice',
//     year: '1988',
//   },
//   {
//     id: 2,
//     title: 'Ghostbusters',
//     year: '1984',
//   },
// ]


function makeData(amount: number) {

  let data: dataInt[] = []
  for (let i = 0; i < amount; i++) {
    data.push({
      id: i,
      title: 'Beetlejuice',
      year: (1980 + i).toString(),
    })
  }

  return data
}

function App() {
  return (
    <div className="App">

      <div className="wrapper">
        <DataTable
          columns={columns}
          data={makeData(50)}
          fixedHeader
          fixedHeaderScrollHeight='auto'
          pagination
          paginationPerPage={25}
        />
      </div>
    </div>
  );
}

export default App;
