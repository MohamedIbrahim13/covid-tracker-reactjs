import { Card, CardContent, Typography, Grid } from "@material-ui/core"
import CountUp from "react-countup"
import cx from "classnames"

function SingleCard({ cardTitle, value, lastUpdate, cardSubtitle, className }) {
  return (
    <Grid
      item
      xs={12}
      md={3}
      component={Card}
      className={cx("card", className)}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5" component="h2">
          <CountUp start={0} end={value} duration={2.75} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default SingleCard
