import React from 'react'
import { useEffect, useState } from 'react'
import { getCurrentUrl, getCurrentProduct, formatPrice } from './utils'
import VariantBadge from './VariantBadge'
import Quantity from './Quantity'
import Spinner from './Spinner'

function Form({ addVariantToCart, size, setSize, quantity, setQuantity, enabled, isSuccess, loading }) {
  const [product, setProduct] = useState(null)
  const [productPrice, setProductPrice] = useState('')

  useEffect(() => {
    const fetchProduct = async () => {
      const currentProduct = await getCurrentProduct()
      setProduct(currentProduct)
      setProductPrice(currentProduct.price)
    }
    fetchProduct()
  }, [])

  if (!product) return <h1>Loading...</h1>

  const variants = product.variants

  const price = formatPrice(productPrice, quantity)

  return (
    <div className='w-full sm:w-1/2 flex flex-col gap-4 sm:gap-8 bg-bg-primary text-txt-primary py-12'>
      <h3 className='text-txt-primary text-center sm:text-start text-4xl invisible absolute sm:relative sm:visible'>Custom Decal</h3>
      <span className='text-3xl font-black text-center sm:text-start'>{price}</span>
      <label htmlFor='size'>Size</label>
      <div className='flex flex-wrap gap-2'>
        {variants.map((variant) => (
          <VariantBadge key={variant.id} variant={variant} size={size} setSize={setSize} setProductPrice={setProductPrice} />
        ))}
      </div>
      <Quantity quantity={quantity} setQuantity={setQuantity} />
      {isSuccess && <p className='text-accent text-4xl'>Item added to cart</p>}
      <button className={`bg-white text-black p-4 ${!enabled && 'opacity-30 cursor-default'}`} onClick={addVariantToCart}>
        {loading ? 'Adding To Cart...' : 'Add To Cart'}
      </button>
    </div>
  )
}

export default Form
