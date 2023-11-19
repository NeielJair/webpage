import { Grid } from '@mui/material';
import NeielJairTextLogo from '../../assets/icons/NeielJairTextLogo';

export default function Homepage() {
  return (
    <Grid container height="100%" direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <NeielJairTextLogo width="400px" height="400px" />
      </Grid>
    </Grid>
  );
}
