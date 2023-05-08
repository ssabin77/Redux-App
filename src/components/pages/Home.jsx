import React, { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(response=>response.json())
    .then(data=>localStorage.setItem("items",JSON.stringify(data)))
  },[])

  let items = JSON.parse(localStorage.getItem('items'))
  
  return (
    <>
    <div className="container-fluid">
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
{
  items.map(item=>{
    return <div class="col">
    <div class="card">
      <img src={item.image} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{item.title}</h5>
        <h5 class="card-title">Price: ${item.price}</h5>
        <h5 class="card-title">Rating: {item.rating.rate}</h5>
        <h5 class="card-title">Count in Stock: {item.rating.count}</h5>

        <p class="card-text">{item.description}</p>
        <button className='btn btn-warning'>Add to Cart</button>
      </div>
    </div>
  </div>
  })
}

    </div>
    </div>
    </>
  )
}

export default Home
