import React, { useMemo } from 'react'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table'
import '../../styles/table.css'
import TableFilterComponent from './TableFilterComponent'

const TableComponent = ({ COLUMNS, records, open }) => {
  const columns = useMemo(() => COLUMNS, [])
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    page,
    state,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    setGlobalFilter,
    headerGroups,
  } = useTable(
    {
      columns,
      data: records,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )
  return (
    <div style={{ display: open ? 'none' : '' }}>
      <TableFilterComponent
        filter={state.globalFilter}
        setFilter={setGlobalFilter}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((title) => (
                <th {...title.getHeaderProps(title.getSortByToggleProps())}>
                  {title.render('Header')}
                  {title.isSortedDesc ? (
                    <FaArrowDown className='sort' />
                  ) : title.isSorted ? (
                    <FaArrowUp className='sort' />
                  ) : (
                    ''
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='pageBtns'>
        {canPreviousPage ? (
          <button className='pageBtn' onClick={() => previousPage()}>
            {'<<'}
          </button>
        ) : (
          ''
        )}
        {canNextPage ? (
          <button className='pageBtn' onClick={() => nextPage()}>
            {'>>'}
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default TableComponent
