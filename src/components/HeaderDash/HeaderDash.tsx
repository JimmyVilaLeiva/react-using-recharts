import { Card, Grid } from "@mui/material";
import styles from "./HeaderDash.module.css"; // Import css modules stylesheet as styles

export const HeaderDash = () => {
  return (
    <>
      <Grid container spacing={3} className={styles.header}>
        <Grid item xs={3}>
          <Card>1</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>2</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>3</Card>
        </Grid>
        <Grid item xs={3}>
          <Card>4</Card>
        </Grid>
      </Grid>
    </>
  );
};
