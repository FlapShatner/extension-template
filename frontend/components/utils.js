

export const formatPrice = (price, quantity) => {    
  let result = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price * quantity) / 100)
    return result
}

export const getCart = async () => {
    try {
      const cart = await fetch(window.Shopify.routes.root + 'cart.js')
      const cartJson = await cart.json()
      // console.log("cart", cartJson)
      return cartJson
    } catch {
      console.log('error')
    }
}

export const getCurrentUrl = () => {
    const url = window.location.href
    return url
}    


export const getSelectedVariant =() => {
    const url = getCurrentUrl()
    const variantId = url.split('variant=')[1]
    return variantId
}

export const getCurrentProduct = async () => {
    const url = getCurrentUrl()    
    const productId = url.split('/products/')[1].split('?')[0]
   const product = await fetch(window.Shopify.routes.root + 'products/' + productId + '.js')
    const productJson = await product.json()
    return productJson
}



export const addToCart = async (formData) => {
    
    try {
        const result = await fetch(window.Shopify.routes.root + 'cart/add.js', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        const resultJson = await result.json()
        // console.log("resultJson", resultJson)
        return resultJson
    }
    catch {
        console.log('error')
    }
}


export const uploadImage = async (image) => {
    const CLOUDINARY_UPLOAD_PRESET = 'jt3ld2no'
    const CLOUDINARY_CLOUD_NAME = 'dkxssdk96'
    const data = new FormData()
     data.append('file', image)
     data.append('upload_preset', CLOUDINARY_UPLOAD_PRESET)
     data.append('cloud_name', CLOUDINARY_CLOUD_NAME)
     data.append('folder', 'Cloudinary-React')
    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`, {
        method: 'POST',
        body: data,
      })
      const res = await response.json()
      if(res.error) throw new Error(res.error.message)
      return res.url
    } catch (error) {
      // console.log(error)
      return { error: error }   
    }

  }