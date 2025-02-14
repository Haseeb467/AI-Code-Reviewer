// import { useState, useEffect } from 'react'
// import "prismjs/themes/prism-tomorrow.css"
// import Editor from "react-simple-code-editor"
// import prism from "prismjs"
// import Markdown from "react-markdown"
// import rehypeHighlight from "rehype-highlight";
// import "highlight.js/styles/github-dark.css";
// import axios from 'axios'
// import './App.css'

// function App() {
//   const [code, setCode] = useState(` function sum() {
//   return 1 + 1
// }`)

//   const [review, setReview] = useState(``);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     prism.highlightAll()
//   }, [])

//   async function reviewCode() {
//     setLoading(true);
//     const response = await axios.post('http://localhost:3000/ai/get-review', { code })
//     setReview(response.data)
//   }

//   return (
//     <>

//       <div className="container">
//         <h1>Code Reviewer</h1>
//       </div>
//       <main>

//         <div className="left">
//           <div className="code">
//             <Editor
//               value={code}
//               onValueChange={code => setCode(code)}
//               highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
//               padding={10}
//               style={{
//                 fontFamily: '"Fira code", "Fira Mono", monospace',
//                 fontSize: 16,
//                 border: "1px solid #ddd",
//                 borderRadius: "5px",
//                 height: "100%",
//                 width: "100%"
//               }}
//             />
//           </div>
//           <div
//             onClick={reviewCode}
//             className={`review ${loading ? 'disabled' : ''}`} // Optionally disable button while loading
//             style={{ cursor: loading ? 'not-allowed' : 'pointer' }}>{loading ? "Processing..." : "Review"}</div>
//         </div>
//         <div className="right">
//           <Markdown

//             rehypePlugins={[rehypeHighlight]}

//           >{review}</Markdown>
//         </div>
//       </main>
//     </>
//   )
// }



// export default App



import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false) // State to track loading status

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    if (loading) return; // Prevent multiple clicks while processing

    setLoading(true) // Set loading state
    setReview("Processing...") // Show "Processing..." message

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      setReview(response.data) // Update review with the actual response
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setReview("Failed to fetch review. Please try again.") // Handle errors
    } finally {
      setLoading(false) // Reset loading state after response
    }
  }

  return (
    <div className='root'>
      <div className="container">
        <h1>Code Reviewer</h1>
      </div>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <button
            onClick={reviewCode}
            className="review"
            disabled={loading} // Disable button when loading
            style={{
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Processing..." : "Review"}
          </button>
        </div>
        <div className="right">
          <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
        </div>
      </main>
    </>
  )
}

export default App
