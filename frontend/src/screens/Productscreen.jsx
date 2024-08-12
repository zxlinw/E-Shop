import React from 'react';
import {useParams} from 'react-router-dom'
import products from '../products'

const Productscreen = () => {
    const {id} = useParams();
    // const product = products.find((p) => p._id === id);

  return (
    <div>Productscreen</div>
  )
}

export default Productscreen