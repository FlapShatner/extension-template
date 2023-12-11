import React from 'react'
import Vehicle from './Vehicle'
import Customize from './Customize'

export default function Form() {
  return (
    <div className='bg-bg-secondary p-6 text-txt-primary w-full'>
      <form className='flex flex-col items-start gap-4 w-[900px]'>
        <div className='border border-border p-4'>
          <div className='flex gap-2'>
            <input type='checkbox' name='standard' id='standard' />
            <label htmlFor='standard'>Send standard 18" x 68" size*</label>
          </div>
          <div className='text-sm flex flex-col mt-2 ml-8 text-txt-secondary '>
            <span>*The standard 18" x 68" size will be too large for a mid size truck and you will need to trim off part of your design.</span>
            <span className='ml-2'> We recommend entering correct measurements for the best results.</span>
          </div>
        </div>
        <div className='mt-4'>
          <Vehicle />
          <div className='border border-t-0 border-border p-4'>
            <span className='my-4 '>Window measurements:</span>
            <div className='flex gap-4'>
              <div className='flex flex-col'>
                <label htmlFor='a'>A:</label>
                <input className='w-[100px]' type='string' name='a' id='a' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='b'>B:</label>
                <input className='w-[100px]' type='string' name='b' id='b' />
              </div>
              <div className='flex flex-col'>
                <label htmlFor='c'>C:</label>
                <input className='w-[100px]' type='string' name='c' id='c' />
              </div>
            </div>
          </div>
        </div>
        <Customize />
      </form>
    </div>
  )
}
