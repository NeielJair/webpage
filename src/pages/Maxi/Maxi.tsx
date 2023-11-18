import { Grid } from '@mui/material';
import { memo } from 'react';

function Maxi() {
  let fontWeight = 1;

  return (
    <Grid container spacing={2}>
      {Array.from(new Array(1028)).map(() => (
        // eslint-disable-next-line no-plusplus
        <Grid item xs={1} sx={{ fontWeight: fontWeight++ }}>
          MAXI
        </Grid>
      ))}
    </Grid>
  );
}

export default memo(Maxi);
