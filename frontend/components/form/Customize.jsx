import React from 'react'
import { cn } from '../utils'

export default function Customize({ isStandard, register }) {
  return (
    <div className={cn('mt-4 w-[423px]')}>
      <span className='text-3xl text-txt-primary'>Customize My Back Window Graphics:</span>
      <div className='flex flex-col border border-border mt-2'>
        <div className='flex flex-col border-b p-4'>
          <div className='flex'>
            <input {...register('customText')} type='checkbox' name='customText' id='customText' />
            <label htmlFor='customText'>Personalize with Text</label>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='customTextField'>Your custom text:</label>
            <input {...register('customTextField')} type='text' name='customTextField' id='customTextField' />
          </div>
        </div>
        <div className='flex p-4 pb-0 '>
          <input {...register('business')} type='checkbox' name='business' id='business' />
          <label htmlFor='business'>Personalize with Business Info</label>
        </div>
        <div className='flex flex-col p-4 '>
          <div className='flex'>
            <input {...register('logo')} type='checkbox' name='logo' id='logo' />
            <label htmlFor='logo'>I have a logo*</label>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='logoFile'>Upload Image</label>
            <input name='logoFile' type='file' />
            <span className='text-sm mt-2'>
              *Logo should be vector art or high resolution .PNG file with no background. Otherwise the logo will be recreated in a printable format and you
              will be charged an extra $85, and you will receive your design either vectorized, or as a high resolution .PNG file with no background.
            </span>
          </div>
        </div>
        <div className='flex flex-col gap-4 p-4'>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col '>
              <label htmlFor='businessName'>Business Name</label>
              <input {...register('businessName')} type='text' name='businessName' id='businessName' />
            </div>
            <div className='flex flex-col '>
              <label htmlFor='slogan'>
                Slogan
                <span className='text-xs ml-3'>Example: "Your 1 stop shop for custom graphics"</span>
              </label>
              <input {...register('slogan')} type='text' name='slogan' id='slogan' />
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor='city'>City</label>
              <input {...register('city')} type='text' name='city' id='city' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='state'>State</label>
              <input {...register('state')} type='text' name='state' id='state' />
            </div>
          </div>

          <div className='flex gap-4'>
            <div className='flex flex-col w-full'>
              <label htmlFor='phone'>Phone</label>
              <input {...register('phone')} type='tel' name='phone' id='phone' />
            </div>
            <div className='flex flex-col w-full'>
              <label htmlFor='website'>Website</label>
              <input {...register('website')} type='url' name='website' id='website' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
