import React from 'react'
import Select from 'react-select';

export default function SearchBar({resortOptions}) {
  return (
<Select
    className="basic-single"
    classNamePrefix="select"
    isClearable={true}
    isSearchable={true}
    name="resorts"
    options={resortOptions}
  />
  )
}
