const resortsToOptions = (resorts)=>{
  return resorts.map(resort => {
    return {
      label: resort.name,
      value: [resort.latitude,resort.longitude]
    }
  })
  
}
export{
  resortsToOptions
}