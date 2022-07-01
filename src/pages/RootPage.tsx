import { css, cx } from '@emotion/css';
import Button from '@mui/material/Button';
import React, { FC, useState } from 'react';
import AddDestination from '../components/Destinations/AddDestination';
import Actions from '../components/shared/Actions';
// import logo from '../img/logo.svg';
import './App.css';

// interface Props {}

export const RootPage: FC = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  console.log(isAddOpen);
  return (
    <div className={style.global}>
      <div className={style.title}>Destinations</div>
      <Actions>
        <Button className={cx(style.button, style.addButton)} variant="contained" onClick={() => setIsAddOpen(true)}>
          + Ajouter
        </Button>
      </Actions>
      <AddDestination isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </div>
  );
};

const style = {
  button: css`
    height: 40px;
  `,
  addButton: css`
    background-color: #19d26f !important;
    font-weight: bold !important;
  `,
  global: css`
    padding: 80px;
    background-color: whitesmoke;
    min-height: 800px;
  `,
  title: css`
    font-size: 25px;
    display: inline-block;
  `,
};
