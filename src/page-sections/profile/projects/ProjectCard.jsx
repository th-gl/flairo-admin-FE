import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress from '@mui/material/LinearProgress';
import { styled, alpha, useTheme } from '@mui/material/styles';
// CUSTOM COMPONENTS
import { H6, Paragraph } from '@/components/typography';
import { FlexBetween, FlexRowAlign } from '@/components/flexbox'; // STYLED COMPONENTS

const IconWrapper = styled(FlexRowAlign)({
  width: 35,
  height: 30,
  borderRadius: '4px'
});
const StyledAvatarGroup = styled(AvatarGroup, {
  shouldForwardProp: prop => prop !== 'type'
})(({
  type
}) => ({
  '& .MuiAvatar-root': {
    width: 30,
    height: 30
  },
  '& .MuiAvatar-colorDefault': {
    color: type,
    fontWeight: 500,
    backgroundColor: alpha(type, 0.1)
  }
})); // =======================================================================

// =======================================================================
export default function ProjectCard({
  title,
  value,
  status,
  description,
  Icon
}) {
  const theme = useTheme();

  const getStatusColor = status => {
    if (status === 'Pending') return theme.palette.primary.main;
    if (status === 'Completed') return theme.palette.success.main;
    return theme.palette.warning.main;
  };

  const color = getStatusColor(status); // FOR CHIP AND LINEAR PROGRESS

  const getColorType = () => {
    if (status === 'Pending') return 'primary';else if (status === 'Completed') return 'success';else return 'warning';
  };

  return <Card className="p-3">
      <FlexBetween>
        <IconWrapper bgcolor={alpha(color, 0.1)}>
          <Icon sx={{
          color
        }} />
        </IconWrapper>

        <Chip label={status} size="small" color={getColorType()} />
      </FlexBetween>

      <H6 fontSize={16} my={2}>
        {title}
      </H6>

      <Paragraph color="text.secondary">{description}</Paragraph>

      <Stack my={2} direction="row" alignItems="center" spacing={2}>
        <LinearProgress value={value} variant="determinate" color={getColorType()} />
        <H6 fontSize={12}>{value}%</H6>
      </Stack>

      <FlexBetween>
        <StyledAvatarGroup max={3} type={color}>
          <Avatar src="/static/user/user-11.png" />
          <Avatar src="/static/user/user-11.png" />
          <Avatar src="/static/user/user-11.png" />
          <Avatar src="/static/user/user-11.png" />
        </StyledAvatarGroup>

        <Paragraph fontWeight={600} color="text.secondary">
          Due In 2 Days
        </Paragraph>
      </FlexBetween>
    </Card>;
}