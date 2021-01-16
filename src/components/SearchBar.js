import React from 'react'
import Select from 'react-select';

export default function SearchBar({resortOptions}) {
  return (
<Select
    className="basic-single"
    classNamePrefix="select"
    isLoading={true}
    isClearable={true}
    isSearchable={true}
    name="resort"
    options={resortOptions}
  />
  )
}
