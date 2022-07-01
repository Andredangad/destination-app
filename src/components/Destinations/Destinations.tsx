import { Modal } from '@mui/material';
import { useContext } from 'react';
import { Context as DestinationContext } from './Context';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Destinations({ isOpen, onClose }: Props) {
  const { destinations, setDestinations } = useContext(DestinationContext);
  console.log(destinations);
  return (
    <Modal open={isOpen} onClose={onClose}>
      <>test</>
    </Modal>
  );
}
