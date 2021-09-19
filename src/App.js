import { useState } from "react"
import CardContainer from "./components/CardContainer"
import Countrylist from "./components/CountryList"
import image from "./images/covid.png"
import useFetch from "./hooks/useFetch"

function App() {
  const [country, setCountry] = useState("US")
  const { data, loading, error } = useFetch(country)
  //console.log(data)
  const handleChange = name => {
    setCountry(name)
  }
  return (
    <div className="App">
      <img className="image" src={image} alt="COVID-19" />
      <CardContainer data={data} loading={loading} error={error} />
      <Countrylist handleChange={handleChange} />
    </div>
  )
}

export default App
