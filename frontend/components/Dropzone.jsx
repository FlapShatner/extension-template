import React, { useState, useCallback } from 'react'
import DropzoneStyle from './DropzoneStyle'
import { useDropzone } from 'react-dropzone'
import Spinner from './Spinner'

const ImageUpload = ({ setUserImage, preview, setPreview, loading, setLoading, error, setError }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0]

      if (file && file.type.startsWith('image/')) {
        setUserImage(file)
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          setPreview(reader.result)
        }
        setError(null) // Reset error on successful image load
      } else {
        setError('Please upload an image file (e.g., jpg, png)')
      }
    },
    [setUserImage, setPreview]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const handleResetClick = () => {
    setPreview(null)
    setUserImage(null)
    setError(null)
    setLoading(false)
  }

  return (
    <div className='bg-bg-primary sm:pb-8 pb-0 w-full sm:w-1/2'>
      {error && <p className='text-red-500 text-center'>{error}</p>}
      {preview ? (
        <div className='flex justify-center items-center mt-12 mb-5 mx-auto md:max-w-md w-full '>
          {loading ? <Spinner /> : <img src={preview} alt='preview' className='w-full' />}
        </div>
      ) : (
        <>
          <h2 className='text-txt-primary text-center text-2xl my-6 font-semibold absolute invisible sm:relative sm:visible'>Upload an image</h2>
          <div {...getRootProps()}>
            <DropzoneStyle isDragActive={isDragActive}>
              <input {...getInputProps()} />
            </DropzoneStyle>
          </div>
        </>
      )}

      <div className='flex gap-4 justify-center'>
        <button className='bg-bg-secondary border border-border text-txt-primary px-4 py-2 ' onClick={handleResetClick}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default ImageUpload
