import React from "react"
import Home from "./home_page/Home"

function App() {
  const [display, setDisplay] = React.useState("Main")

  return (
    display ? (
      <Home />
    ) : (
      <>Something else</>
    )
  )
}

export default App
