import { useEffect, useState } from 'react'
import Nodecomp from './components/Nodecomp'
import Results from './components/Results'
import Wrapper, { Getvaluesglobal } from './components/Wrapper'
import axios from 'axios'
import { serverURL } from './apicall'

function App() {
  const [all, setAll] = useState([])
  const { result, setResult, loading, setLoading, input, setInput } = Getvaluesglobal()
  const Getall = async () => {

    try {

      const res = await axios.get(`${serverURL}/api/history`)
      console.log(res);

      if (res.status == 200) {
        setAll(res.data)



      } else {
        alert("error fetching data")
      }

    } catch (error) {
      console.log(error);

    }

  }

  useEffect(() => {
    Getall()

  }, [])

  return (
    <>



      <Nodecomp setAll={setAll} />
      <Results all={all} />





    </>
  )
}

export default App
