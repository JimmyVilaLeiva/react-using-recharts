import { Grid, Card } from "@mui/material";
import LegendEffectOpacity from "../../charts/LegendEffectOpacity";
import LineChart from "../../charts/LineChart";
import PieChartactiveShape from "../../charts/PieChartActiveShape";
import PieChartPadAngles from "../../charts/PieChartPadAngles";
import style from "./BodyDash.module.css";

export const BodyDash = () => {
  return (
    <>
      <Grid container spacing={2} className={style.mainContainer}>
        <Grid item xs={6}>
          <Card>
            <LineChart />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card>
            <LegendEffectOpacity />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <PieChartPadAngles />
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <PieChartactiveShape />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
