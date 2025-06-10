'use client';
import React from 'react'
import AddToCart from './AddToCart';
import  Styles   from '.ProductCard.module.css';
// Styles.Card
const ProductCard = () => {
  return (
    <div className={Styles.Card}>
      <AddToCart/>
    </div>
  )
} 

export default ProductCard
