import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField'; // CUSTOM COMPONENTS

import { H6, Small } from '@/components/typography';
export default function TwoStepVerification() {
  return <Card>
      <Box padding={3}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <H6 fontSize={14}>Two-step verification</H6>
          <Switch defaultChecked />
        </Stack>

        <Small color="text.secondary">
          Start by entering your password so that we know it's you. Then we'll walk you through two
          more simple steps.
        </Small>
      </Box>

      <Divider />

      <Box px={3} py={4} maxWidth={450}>
        <TextField fullWidth label="Account Password" value="Enter Current Password" />

        <Small mt={1.5} display="block" color="text.secondary">
          This is the password you use to log in to your Front account.
        </Small>

        <Stack direction="row" spacing={2} mt={4}>
          <Button variant="contained">Save Changes</Button>
          <Button variant="outlined">Cancel</Button>
        </Stack>
      </Box>
    </Card>;
}