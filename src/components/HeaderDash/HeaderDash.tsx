import { Card, CardContent, Grid, Typography } from "@mui/material";
import styles from "./HeaderDash.module.css"; // Import css modules stylesheet as styles

export const HeaderDash = () => {
  const DashCard = (props: { title: string; value: string }) => {
    return (
      <>
        <Card>
          <CardContent>
            <Typography variant="body1" align="center">
              {" "}
              {props.title}
            </Typography>
            <Typography variant="h3" align="center">
              {" "}
              {props.value}
            </Typography>
          </CardContent>
        </Card>
      </>
    );
  };
  return (
    <>
      <Grid container spacing={3} className={styles.header}>
        <Grid item xs={3}>
          <DashCard title="Buyers" value="766" />
        </Grid>
        <Grid item xs={3}>
          <DashCard title="Producs" value="45" />
        </Grid>
        <Grid item xs={3}>
          <DashCard title="Sells" value="76" />
        </Grid>
        <Grid item xs={3}>
          <DashCard title="returns" value="66" />
        </Grid>
      </Grid>
    </>
  );
};
