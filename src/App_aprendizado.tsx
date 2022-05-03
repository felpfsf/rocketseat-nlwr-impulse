interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  console.log(props.text)
  // return <button className="button">{props.text ?? 'Default'}</button>
  return <button className="bg-violet-500 mt-4 ml-4 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      {/* <h1>Hello World</h1> */}
      <Button text ="Enviar" />
      <Button text = "Ok" />
      <Button />
    </div>
  )
}

export default App
