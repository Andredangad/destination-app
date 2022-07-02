import { css } from '@emotion/css';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Modal,
  OutlinedInput,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Destination } from '../../types';
import Actions from '../shared/Actions';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  addDestination: (data: Destination) => void;
}

// function isValidImageUrl(imageUrl: string) {
//   try {
//     new URL(imageUrl);
//   } catch (_) {
//     return false;
//   }
//   return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(imageUrl);
// }

function isDestinationValid(destination: Destination): boolean {
  return (
    destination.address !== '' &&
    destination.name !== '' &&
    destination.imageUrl !== '' &&
    destination.citizenCount >= 0 &&
    destination.hotelCount >= 0 &&
    destination.salaryAverage >= 0 &&
    destination.surfaceArea >= 0
  );
}

export default function AddDestination({ isOpen, onClose, addDestination }: Props) {
  const [data, setData] = useState<Destination>({
    id: 0,
    address: '',
    citizenCount: -1,
    hotelCount: -1,
    imageUrl: '',
    name: '',
    salaryAverage: -1,
    surfaceArea: -1,
    isActive: false,
  });
  const handleSubmit = () => {
    addDestination(data);
    onClose();
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box className={style.box}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Ajouter une nouvelle destination
        </Typography>

        <OutlinedInput
          className={style.input}
          fullWidth
          placeholder="Nom de la destination"
          onInput={(event: ChangeEvent<HTMLInputElement>) => {
            setData({ ...data, name: event.target.value });
          }}
          onFocus={(event) => {
            event.target.select();
          }}
        />
        <OutlinedInput
          className={style.input}
          fullWidth
          placeholder="Adresse"
          onInput={(event: ChangeEvent<HTMLInputElement>) => {
            setData({ ...data, address: event.target.value });
          }}
        />
        <TextField
          style={{ marginTop: '15px' }}
          fullWidth
          placeholder="Lien de l'image"
          onInput={(event: ChangeEvent<HTMLInputElement>) => {
            setData({ ...data, imageUrl: event.target.value });
          }}
          variant="outlined"
        />
        <div className={style.input}>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, citizenCount: parseInt(event.target.value, 10) });
              }}
              placeholder="Nb Habitants"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, hotelCount: parseInt(event.target.value, 10) });
              }}
              placeholder="Nb. Hôtels"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22, paddingRight: 3 }} variant="outlined">
            <OutlinedInput
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, salaryAverage: parseInt(event.target.value, 10) });
              }}
              placeholder="Revenu Moy"
            />
          </FormControl>
          <FormControl sx={{ width: 0.22 }} variant="outlined">
            <OutlinedInput
              onInput={(event: ChangeEvent<HTMLInputElement>) => {
                setData({ ...data, surfaceArea: parseInt(event.target.value, 10) });
              }}
              placeholder="Superficie"
            />
          </FormControl>
          <FormControlLabel
            className={style.input}
            control={
              <Switch
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setData({ ...data, isActive: event.target.checked });
                }}
              />
            }
            label="Activer"
          />
        </div>
        <Actions>
          <Button style={{ color: 'grey', fontWeight: 'bold' }} onClick={onClose}>
            Annuler
          </Button>
          <Button disabled={!isDestinationValid(data)} onClick={handleSubmit}>
            Confirmer
          </Button>
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
