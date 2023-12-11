import React from 'react'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { cn } from '../utils'
import Vehicle from './Vehicle'
import Customize from './Customize'

export default function Form() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)
  const isStandard = watch('standard')

  return (
    <div className='bg-bg-secondary p-6 text-txt-primary w-min m-auto'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-start gap-4 m-auto'>
        <div className={cn('border border-border p-4 w-[423px]', isStandard && 'text-accent')}>
          <div className='flex gap-2'>
            <input type='checkbox' name='standard' id='standard' {...register('standard')} />
            <label htmlFor='standard'>Order standard 18" x 68" size*</label>
          </div>
          <div className='text-sm flex flex-col mt-2 ml-8 text-txt-secondary'>
            <span>
              *The standard 18" x 68" size will be too large for a mid size truck and you will need to trim off part of your design. We recommend entering
              correct measurements for the best results.
            </span>
          </div>
        </div>
        <div className='w-[423px]'>
          <Vehicle isStandard={isStandard} register={register} watch={watch} />
          <div className={cn('border border-t-0 border-border p-4', isStandard && 'opacity-40')}>
            <span className='my-4'>Window measurements:</span>
            <div className='flex gap-4 justify-between'>
              <div className='flex flex-col w-full'>
                <label htmlFor='a'>A:</label>
                <input disabled={isStandard} className='w-full' type='string' name='a' id='a' {...register('a')} />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor='b'>B:</label>
                <input disabled={isStandard} className='w-full' type='string' name='b' id='b' {...register('b')} />
              </div>
              <div className='flex flex-col w-full'>
                <label htmlFor='c'>C:</label>
                <input disabled={isStandard} className='w-full' type='string' name='c' id='c' {...register('c')} />
              </div>
            </div>
          </div>
        </div>
        <Customize register={register} isStandard={isStandard} />
      </form>
      <DevTool control={control} />
    </div>
  )
}
