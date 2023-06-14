import CountDown from './CountDown'

function App() {
  function callback() {
    console.log('callback')
  }

  return (
    <>
      <div>hi</div>
      <CountDown callback={callback} />
    </>
  )
}

export default App
