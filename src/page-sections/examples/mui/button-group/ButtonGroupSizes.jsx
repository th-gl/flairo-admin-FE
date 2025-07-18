import { Fragment } from 'react'; // MUI

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function ButtonGroupSizes() {
  return <Fragment>
      <Stack mb={4} alignItems="center" direction="row" flexWrap="wrap" gap={3}>
        <ButtonGroup size="small" variant="contained">
          <Button>Small</Button>
          <Button>Small</Button>
          <Button>Small</Button>
        </ButtonGroup>

        <ButtonGroup size="medium" color="secondary" variant="contained">
          <Button>Medium</Button>
          <Button>Medium</Button>
          <Button>Medium</Button>
        </ButtonGroup>

        <ButtonGroup size="large" color="success" variant="contained">
          <Button>Large</Button>
          <Button>Large</Button>
          <Button>Large</Button>
        </ButtonGroup>
      </Stack>

      <Stack mb={4} alignItems="center" direction="row" flexWrap="wrap" gap={3}>
        <ButtonGroup size="small" variant="outlined">
          <Button>Small</Button>
          <Button>Small</Button>
          <Button>Small</Button>
        </ButtonGroup>

        <ButtonGroup size="medium" color="secondary" variant="outlined">
          <Button>Medium</Button>
          <Button>Medium</Button>
          <Button>Medium</Button>
        </ButtonGroup>

        <ButtonGroup size="large" color="success" variant="outlined">
          <Button>Large</Button>
          <Button>Large</Button>
          <Button>Large</Button>
        </ButtonGroup>
      </Stack>

      <Stack alignItems="center" direction="row" flexWrap="wrap" gap={3}>
        <ButtonGroup size="small" variant="text">
          <Button>Small</Button>
          <Button>Small</Button>
          <Button>Small</Button>
        </ButtonGroup>

        <ButtonGroup size="medium" color="secondary" variant="text">
          <Button>Medium</Button>
          <Button>Medium</Button>
          <Button>Medium</Button>
        </ButtonGroup>

        <ButtonGroup size="large" color="success" variant="text">
          <Button>Large</Button>
          <Button>Large</Button>
          <Button>Large</Button>
        </ButtonGroup>
      </Stack>
    </Fragment>;
}