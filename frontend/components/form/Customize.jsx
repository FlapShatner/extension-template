import React from 'react'

export default function Customize() {
  return (
    <div className='flex flex-col gap-4 border border-border'>
      <span>Customize My Back Window Graphics:</span>
      <div className='flex flex-col gap-4'>
        <div className='flex'>
          <input type='checkbox' name='customText' id='customText' />
          <label htmlFor='customText'>Personalize with Text</label>
        </div>
        <input type='text' name='customTextField' id='customTextField' />
      </div>
      <div className='flex gap-4'>
        <input type='checkbox' name='business' id='business' />
        <label htmlFor='business'>Personalize with Business Info</label>
      </div>
      <div className='flex flex-col gap-4'>
        <label htmlFor='logo'>I have a logo</label>
        <div className='flex gap-4'>
          <input type='checkbox' name='logo' id='logo' />
          <input type='file' />
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4'>
          <label htmlFor='businessName'>Business Name</label>
          <input type='text' name='businessName' id='businessName' />
        </div>
        <div className='flex flex-col gap-4'>
          <label htmlFor='slogan'>
            Slogan
            <span className='text-xs ml-3'>Example: Your 1 stop shop for custom graphics</span>
          </label>
          <input type='text' name='slogan' id='slogan' />
        </div>
      </div>
      <div>
        <div className='flex gap-4'>
          <div className='flex flex-col gap-4'>
            <label htmlFor='city'>City</label>
            <input type='text' name='city' id='city' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='state'>State</label>
            <input type='text' name='state' id='state' />
          </div>
        </div>
        <div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='phone'>Phone</label>
            <input type='tel' name='phone' id='phone' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor='website'>Website</label>
            <input type='url' name='website' id='website' />
          </div>
        </div>
      </div>
    </div>
  )
}
