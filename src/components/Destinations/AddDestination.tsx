import { css } from '@emotion/css';
import { Box, Button, FormControl, FormControlLabel, Modal, OutlinedInput, Switch, Typography } from '@mui/material';
import { useContext } from 'react';
import Actions from '../shared/Actions';
import { Context as DestinationContext } from './Context';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDestination({ isOpen, onClose }: Props) {
  const { destinations } = useContext(DestinationContext);
  console.log(destinations);
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={style.box}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ajouter une nouvelle destination
        </Typography>
        <OutlinedInput className={style.input} fullWidth placeholder="Nom de la destination" />
        <OutlinedInput className={style.input} fullWidth placeholder="Adresse" />
        <OutlinedInput className={style.input} fullWidth placeholder="Lien de l'image" />
        <div className={style.input}>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              placeholder="Nb Habitants"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              placeholder="Nb. Hôtels"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              placeholder="Revenu Moy"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22 }} variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                'aria-label': 'weight',
              }}
              placeholder="Superficie"
            />
          </FormControl>
          <FormControlLabel className={style.input} control={<Switch />} label="Activer" />
        </div>
        <Actions>
          <Button style={{ color: 'grey', fontWeight: 'bold' }}>Annuler</Button>
          <Button style={{ color: '#19d26f', fontWeight: 'bold' }}>Confirmer</Button>
        </Actions>
      </Box>
    </Modal>
  );
}

const style = {
  box: css`
    width: 600px;
    min-height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #000;
    padding: 32px;
  `,
  input: css`
    margin-top: 15px;
  `,
};
