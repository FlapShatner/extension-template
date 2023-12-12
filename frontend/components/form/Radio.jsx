import React from 'react'
import { cn, defaultValues } from '../utils'

export default function Radio({ children, register, watch, value, isStandard, setValue }) {
  const isSelected = watch('doors') === value
  const handleClick = () => {
    setValue('doors', value)
  }
  return (
    <div onClick={handleClick} className='flex gap-2 items-center'>
      <label className={cn('cursor-pointer', isSelected && !isStandard && 'text-accent border-b border-accent')} htmlFor={value}>
        {children}
      </label>
      <input
        {...register('doors', {
          onChange: () => {
            handleClick()
          },
        })}
        disabled={isStandard}
        type='radio'
        name='doors'
        value={value}
        id={value}
        checked
        className='hidden'
      />
    </div>
  )
}
