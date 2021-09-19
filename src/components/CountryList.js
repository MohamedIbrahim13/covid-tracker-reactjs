import { NativeSelect, FormControl } from "@material-ui/core"
import useData from "../hooks/useData"

function Countrylist({ handleChange }) {
  const { data, loading, error } = useData()
  //console.log(data)
  return (
    <FormControl className="formControl">
      <NativeSelect
        defaultValue=""
        onChange={e => handleChange(e.target.value)}
      >
        <option value="">United States</option>
        {loading && <option value="">Loading</option>}
        {data?.countries.map((country, i) => (
          <option key={i} value={country.name}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
}

export default Countrylist
