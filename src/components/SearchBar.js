import React from 'react'
import Select from 'react-select';

export default function SearchBar({resortOptions,setViewport,setSelectedResort}) {
  let viewport = {
    width: "100vw",
    height: "100vh",
    zoom: 5.5
  }
  let defaultViewport = {
    width: "100vw",
    height: "100vh",
    latitude: 39.8283,
    longitude: -98.5795,
    zoom: 4
  }
  const handleSelectJob = (e)=>{
    if (!e){
      setViewport(defaultViewport)
      setSelectedResort(null)
      return
    }
    viewport.latitude = e.value.latitude
    viewport.longitude = e.value.longitude
    setViewport(viewport)
    setSelectedResort(e.value)
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
