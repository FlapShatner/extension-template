import React from 'react'
import CloudIcon from './CloudIcon'

function DropzoneStyle({ children, isDragActive }) {
  return (
    <div className=' font-sans text-txt-primary bg-bg-primary border-box '>
      <div className='flex justify-center w-full mx-auto '>
        <div className='flex flex-col items-center justify-center w-full h-auto mb-6 bg-bg-primary md:w-4/5   '>
          <form className='border border-dashed border-bg-secondary relative w-4/5 h-[200px]  mt-8 mb-6 bg-img-bg rounded-lg shadow-inner'>
            {children}
            <label htmlFor='file-upload' className=' flex flex-col items-center justify-center w-full h-full cursor-pointer'>
              {!isDragActive && <p className=' text-sm font-light text-center text-bg-secondary'>Drag 'n' drop an image file here</p>}

              <CloudIcon size={50} className=' text-bg-primary' />
              <p className=' text-sm font-light text-center text-bg-secondary'>{isDragActive ? 'Drop the files here ...' : 'or click to select image'}</p>
            </label>
          </form>
          <div className=' mb-6 text-center'>
            <p className='text-xs text-bg-primary'></p>
            <p className='text-xs text-txt-primary'>File must be .jpg, .png, .bmp, .tiff, or .webp</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DropzoneStyle
