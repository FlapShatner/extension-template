import Form from './form/Form'
export default function App({ home }) {
  console.log('Home', home)

  return (
    <div className='window-form bg-bg-secondary w-full'>
      <Form />
    </div>
  )
}
