import { useState } from 'react'
import './App.css'

function App() {
  const [screen, setScreen] = useState("")

  const display = (value) => {
    setScreen(screen => screen + value)  // can also use (screen+value) but first taking what in screen into variable screen then updating it is better for async operations
  }
  const clearAll = () => {
    setScreen("")
  }
  const backSpace = () => {
    setScreen(screen => screen.slice(0, -1))
  }
  const evalExpr = () => {
    try {
      setScreen(eval(screen).toString())
    } catch (error) {
      setScreen("ERROR")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="col-lg-5 col-md-1 "></div>
        <div className="col-lg-3 col-md-11 container bg-dark p-4 mt-2 rounded-4 border border-white" style={{ boxShadow: "3px 7px 10px black" }} >
          <h1 className="text-center text-white fw-semibold" >CASIO.</h1>
          <div>
            <input value={screen} className="form-control bg-dark text-white py-4 fs-3" type="text" readOnly />
          </div>
          <div className="row mt-4 ms-2">
            <div className="col-3"><button onClick={clearAll} className="btn btn-success rounded-circle" >AC</button></div>
            <div className="col-3"><button onClick={backSpace} className="btn btn-success rounded-circle" >⌫</button></div>
            <div className="col-3"><button onClick={() => display("%")} className="btn btn-light rounded-circle">%</button></div>
            <div className="col-3"><button onClick={() => display("/")} className="btn btn-light rounded-circle">÷</button></div>
          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("7")} className="btn btn-light rounded-circle">7</button></div>
            <div className="col-3"><button onClick={() => display("8")} className="btn btn-light rounded-circle">8</button></div>
            <div className="col-3"><button onClick={() => display("9")} className="btn btn-light rounded-circle">9</button></div>
            <div className="col-3"><button onClick={() => display("*")} className="btn btn-light rounded-circle">x</button></div>

          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("4")} className="btn btn-light rounded-circle">4</button></div>
            <div className="col-3"><button onClick={() => display("5")} className="btn btn-light rounded-circle">5</button></div>
            <div className="col-3"><button onClick={() => display("6")} className="btn btn-light rounded-circle">6</button></div>
            <div className="col-3"><button onClick={() => display("+")} className="btn btn-light rounded-circle">+</button></div>
          </div>
          <div className="row mt-3 ms-2">
            <div className="col-3"><button onClick={() => display("1")} className="btn btn-light rounded-circle">1</button></div>
            <div className="col-3"><button onClick={() => display("2")} className="btn btn-light rounded-circle">2</button></div>
            <div className="col-3"><button onClick={() => display("3")} className="btn btn-light rounded-circle">3</button></div>
            <div className="col-3"><button onClick={() => display("-")} className="btn btn-light rounded-circle">-</button></div>
          </div>
          <div className="row mt-4 ms-2 mb-5 me-">
            <div className="col-3"><button onClick={() => display(".")} className="btn btn-light rounded-circle">.</button></div>
            <div className="col-3"><button onClick={() => display("0")} className="btn btn-light rounded-circle">0</button></div>
            <div className="col-6"><button onClick={evalExpr} className="btn btn-warning rounded-3 " style={{ width: "80%"}}>=</button></div>
          </div>
        </div>
        <div className="col-lg-5 col-md-1"></div>
      </div>
    </>
  )
}

export default App
