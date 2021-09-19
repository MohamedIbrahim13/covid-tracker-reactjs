import { Typography, Grid } from "@material-ui/core"
import SingleCard from "./Card"

function CardContainer({ data, loading, error }) {
  //{ confirmed, recovered, deaths, lastUpdate }
  if (data) {
    const { confirmed, recovered, deaths, lastUpdate } = data
    return (
      <div className="container">
        <Typography gutterBottom variant="h4" component="h2">
          Global
        </Typography>

        <Grid container spacing={3} justify="center">
          <SingleCard
            className="infected"
            cardTitle="Infected"
            value={confirmed.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of active cases from COVID-19."
          />
          <SingleCard
            className="recovered"
            cardTitle="Recovered"
            value={recovered.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of recoveries from COVID-19."
          />
          <SingleCard
            className="deaths"
            cardTitle="Deaths"
            value={deaths.value}
            lastUpdate={lastUpdate}
            cardSubtitle="Number of deaths caused by COVID-19."
          />
        </Grid>
      </div>
    )
  } else {
    return (
      <div className="container">
        <Typography gutterBottom variant="h4" component="h2">
          Global
        </Typography>
        <Typography gutterBottom variant="h4" component="h2">
          Loading...
        </Typography>
      </div>
    )
  }
}

export default CardContainer
