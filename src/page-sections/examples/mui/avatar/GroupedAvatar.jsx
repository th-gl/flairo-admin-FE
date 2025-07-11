import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
export default function GroupedAvatar() {
  return <Stack direction="row" spacing={2} justifyContent="center">
      <AvatarGroup max={5}>
        <Avatar alt="Remy Sharp" src="/static/user/user-10.png" />
        <Avatar alt="Travis Howard" src="/static/user/user-11.png" />
        <Avatar alt="Cindy Baker" src="/static/user/user-13.png" />
        <Avatar alt="Agnes Walker" src="/static/user/user-15.png" />
        <Avatar alt="Trevor Henderson" src="/static/user/user-14.png" />
        <Avatar alt="Trevor Henderson" src="/static/user/user-14.png" />
        <Avatar alt="Trevor Henderson" src="/static/user/user-14.png" />
      </AvatarGroup>
    </Stack>;
}