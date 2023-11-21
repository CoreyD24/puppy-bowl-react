import { useState } from 'react'
import './App.css'
import PuppyDetails from './PuppyDetails'
import PuppyList from './PuppyList'

const App = () => {
  const [showDetails, setShowDetails] = useState(false)
  const [puppyList, setPuppyList] = useState([])
  return (
    <>
    <h1>List of Puppies</h1>
    {showDetails ? <PuppyDetails setShowDetails={setShowDetails} puppyList={puppyList}/> : <PuppyList setShowDetails={setShowDetails}/>}
    </>
  )
}

export default App
