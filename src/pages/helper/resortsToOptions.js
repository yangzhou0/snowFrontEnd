const resortsToOptions = (resorts)=>{
  return resorts.map(resort => {
    return {
      label: resort.name,
      value: resort
    }
  })
  
}
export{
  resortsToOptions
}