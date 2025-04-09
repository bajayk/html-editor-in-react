import { useEffect, useRef, useState } from 'react'
import HTMLEditor from '@bajayk/html-editor';


function App() {
  const htmlRef = useRef();

  const [html, setHtml] = useState('<h1>Hello World</h1>')

  useEffect(() => {
    htmlRef.current.html = html;
  },[html])

  return (
    <>
      <h1>HTML Editor Demo</h1>
      <html-editor ref={htmlRef}></html-editor>
      <br/>
      <button onClick={() => {
        setHtml(htmlRef.current.html)
      }}>Get HTML</button>
      <br/>
      <br/>
      <textarea value={html} style={{width:'100%', height:100}}></textarea>
    </>
  )
}

export default App;
