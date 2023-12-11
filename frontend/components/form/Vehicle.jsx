import React from 'react'

export default function Vehicle() {
  return (
    <div className='flex flex-col border border-border p-4'>
      <h2 className='text-txt-primary mb-3'>Vehicle Info:</h2>
      <div>
        <div className='flex gap-4 mb-4'>
          <div className='flex flex-col'>
            <label htmlFor='year'>Year:</label>
            <input type='number' name='year' id='year' min='1950' max='2024' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='make'>Make:</label>
            <input type='text' name='make' id='make' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='model'>Model:</label>
            <input type='text' name='model' id='model' />
          </div>
        </div>
        <div className='flex gap-12 mt-4'>
          <div className='flex gap-2 items-center'>
            <label htmlFor='2door'>2 Door:</label>
            <input type='radio' name='doors' id='2door' />
          </div>
          <div className='flex gap-2 items-center'>
            <label htmlFor='4door'>4 Door:</label>
            <input type='radio' name='doors' id='4door' />
          </div>
          <div className='flex gap-4'>
            <label htmlFor='class'>Truck Class:</label>
            <select className='bg-bg-secondary border border-border' name='class' id='class'>
              <option value='mid'>Mid Size</option>
              <option value='half'>1/2 Ton</option>
              <option value='threequarter'>3/4 Ton</option>
              <option value='one'>1 Ton</option>
              <option value='other'>Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
