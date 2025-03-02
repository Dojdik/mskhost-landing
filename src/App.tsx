import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { IndexPage } from './pages/IndexPage'
import { VdsPage } from './pages/VdsPage'
import { WebHostingPage } from './pages/WebHostingPage'
import { useEffect } from 'react'

function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<IndexPage></IndexPage>}></Route>
      <Route path='/vds' element={<VdsPage></VdsPage>}></Route>
      <Route path='/web-hosting' element={<WebHostingPage></WebHostingPage>}></Route>
    </Routes>
  </Router>
}

export default App
