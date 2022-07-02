import { Card, CardMedia, CardContent, Typography, Divider, Grid, Switch } from '@mui/material';
import { Destination } from '../../types';

import FALLBACK_IMAGE from '../../img/notFound.png';
import { SyntheticEvent } from 'react';
import { convertNumberToString } from '../../helpers/convertNumbers';

interface Props {
  destinations: Destination[];
}
const onMediaFallback = (event: SyntheticEvent<HTMLImageElement, Event>) => (event.currentTarget.src = FALLBACK_IMAGE);

export default function Destinations({ destinations }: Props) {
  return (
    <Grid container spacing={3}>
      {destinations.map((destination) => (
        <Grid item xs={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={destination.imageUrl}
              alt={destination.name}
              onError={onMediaFallback}
            />
            <CardContent>
              <Grid container spacing={2} alignItems="center" justifyContent="center">
                <Grid item xs={10}>
                  <Typography gutterBottom variant="h5" component="div">
                    {destination.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.address}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <Switch defaultChecked={destination.isActive} />
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <Grid container spacing={2} minHeight="100px" alignItems="center" justifyContent="center">
              <Grid item xs={3}>
                <Typography variant="body2" align="center">
                  {convertNumberToString(destination.citizenCount)}
                </Typography>
                <Typography variant="body2" align="center">
                  Habitants
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" align="center">
                  {convertNumberToString(destination.hotelCount)}
                </Typography>
                <Typography variant="body2" align="center">
                  Hôtels
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" align="center">
                  {convertNumberToString(destination.salaryAverage)} €
                </Typography>
                <Typography variant="body2" align="center">
                  Revenu Moy
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2" align="center">
                  {convertNumberToString(destination.surfaceArea)}
                </Typography>
                <Typography variant="body2" align="center">
                  <>km&sup2;</>
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
