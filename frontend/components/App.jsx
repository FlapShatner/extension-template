import React, { useEffect, useState } from 'react'
import Form from './Form'
import ImageUpload from './Dropzone'
import { addToCart, getCart, uploadImage } from './utils'
import { TestButton } from './TestButton'

export default function App({ home }) {
  //  console.log('Home', home)
  const [size, setSize] = useState('') // size is a variant id
  const [quantity, setQuantity] = useState(1)
  const [isSuccess, setIsSuccess] = useState(false)
  const [userImage, setUserImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  const [preview, setPreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [cart, setCart] = useState(null)

  const formData = {
    id: size,
    quantity: quantity,
    sections: 'ajax-cart',
  }

  const cartCount = document.querySelector('.cart-count')

  useEffect(() => {
    const updateCount = async () => {
      const cart = await getCart()
      setCart(cart)
      if (cartCount) {
        cartCount.innerHTML = cart.item_count
        cartCount.classList.remove('hidden')
      }
    }
    updateCount()
  }, [isSuccess])

  let enabled = userImage != null && size != ''

  const addVariantToCart = async () => {
    setLoading(true)
    const imgUrl = await uploadImage(userImage)
    if (imgUrl) {
      if (imgUrl.error) {
        setLoading(false)
        setPreview(null)
        setUserImage(null)
        setError(imgUrl.error.message)
        console.log(imgUrl.error.message)
        return
      }
      setImageUrl(imgUrl)
      const res = await addToCart({
        ...formData,
        properties: {
          _image: imgUrl,
        },
      })
      if (res) {
        console.log(res)
        const ajaxCart = document.querySelector('.minicart__content')
        ajaxCart.innerHTML = res.sections['ajax-cart']
        setUserImage(null)
        setPreview(null)
        setLoading(false)
        setIsSuccess(true)
        setTimeout(() => {
          setIsSuccess(false)
        }, 3000)
        setSize('')
        setImageUrl(null)
      }
    }
  }

  return (
    <div>
      <div className='w-full bg-bg-primary flex flex-col sm:flex-row gap-8 p-8'>
        <ImageUpload
          preview={preview}
          setPreview={setPreview}
          setUserImage={setUserImage}
          loading={loading}
          setLoading={setLoading}
          error={error}
          setError={setError}
        />
        {/* <TestButton /> */}
        <Form
          size={size}
          setSize={setSize}
          quantity={quantity}
          setQuantity={setQuantity}
          addVariantToCart={addVariantToCart}
          enabled={enabled}
          isSuccess={isSuccess}
          loading={loading}
        />
      </div>
    </div>
  )
}
