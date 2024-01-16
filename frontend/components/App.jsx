import { useState } from 'react'
import { generate } from './utils'
import { prePrompt } from '../prePrompt'

export default function App({ home }) {
  const [prompt, setPrompt] = useState('')
  const [generated, setGenerated] = useState('')

  const handleChange = (e) => {
    setPrompt(e.target.value)
  }

  const handleClick = () => {
    if (prompt) {
      const fullPrompt = prePrompt + prompt
      generate(fullPrompt).then((res) => {
        setGenerated(res)
      })
    }
  }

  return (
    <div>
      <h1>APP</h1>
      <input id='prompt' value={prompt} onChange={handleChange} type='text' />
      <button onClick={handleClick}>Go</button>
      {generated && <img src={generated} alt='' />}
    </div>
  )
}
