import React from 'react'
import Select from 'react-select';

export default function SearchBar({resortOptions,setViewport}) {
  let viewport = {
    width: "100vw",
    height: "100vh",
    zoom: 5.5
  }
  const handleSelectJob = (e)=>{
    viewport.latitude = e.value[0]
    viewport.longitude = e.value[1]
    setViewport(viewport)
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
