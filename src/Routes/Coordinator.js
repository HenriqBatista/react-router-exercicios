
export const goToHome = (navigate) =>{
    navigate(`/`)
  }
  
  export const goToProfile = (navigate, nome) =>{
    navigate(`/profile/${nome}`)
  }

  export const goToProduct = (navigate, id) =>{
    navigate(`/product/${id}`)
  }

