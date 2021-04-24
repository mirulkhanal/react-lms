import React from 'react'
import { FaSearch } from 'react-icons/fa'

const TableFilterComponent = ({ filter, setFilter, placeholder }) => {
  const handleSearchChange = (e) => {
    setFilter(e.target.value)
  }
  return (
    <div
      style={{
        display: 'flex',
      }}>
      <FaSearch />
      <input
        type='text'
        placeholder={placeholder}
        value={filter || ''}
        onChange={handleSearchChange}
      />
    </div>
  )
}

export default TableFilterComponent
