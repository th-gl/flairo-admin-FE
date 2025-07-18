import Fab from '@mui/material/Fab';
import Stack from '@mui/material/Stack';
import Add from '@mui/icons-material/Add';
export default function ExtendedFab() {
  return <Stack direction="row" flexWrap="wrap" gap={3}>
      <Fab variant="extended" color="primary" aria-label="add">
        <Add /> Primary
      </Fab>

      <Fab variant="extended" color="secondary" aria-label="add">
        <Add /> Secondary
      </Fab>

      <Fab variant="extended" color="warning" aria-label="add">
        <Add /> Warning
      </Fab>

      <Fab variant="extended" color="error" aria-label="add">
        <Add /> Error
      </Fab>

      <Fab variant="extended" color="success" aria-label="add">
        <Add /> Success
      </Fab>

      <Fab variant="extended" color="default" aria-label="add">
        <Add /> Default
      </Fab>
    </Stack>;
}