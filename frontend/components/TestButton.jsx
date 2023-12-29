import { useState } from 'react'
export function TestButton() {
  const [data, setData] = useState(null)
  const [formData, setFormData] = useState({ email: '', name: '' })

  const handleClick = async () => {
    console.log('test')
    const res = await fetch('/a/test/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.email, name: formData.name }),
    })

    const result = await res.json()
    if (result.error) return console.log({ error: result.error })
    console.log(result)
    setData(result)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <span>Hi {data ? data.name : ''}</span>
      <input onChange={handleChange} name='name' value={formData.name} type='text' placeholder='name' />
      <input onChange={handleChange} name='email' value={formData.email} type='text' placeholder='email' />
      <button className='text-txt-primary bg-black p-2' onClick={handleClick}>
        test
      </button>
    </div>
  )
}
