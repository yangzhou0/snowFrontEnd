import React from 'react'
import Select from 'react-select';

export default function SearchBar({resortOptions,setViewport}) {
  const handleSelectJob = (e)=>{
    let latitude = e.value[0]
    let longitude = e.value[1]
    console.log('lat',latitude)
    console.log('long',longitude)
  }
  return (
    <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name="resorts"
        options={resortOptions}
        onChange = {handleSelectJob}
      />
  )
}
