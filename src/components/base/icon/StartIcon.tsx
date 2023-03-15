import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import { memo } from 'react';

interface Props {}

const StartIcon = memo((props: Props) => {
  return <PlayArrowRoundedIcon />;
});

StartIcon.displayName = 'StartIcon';

export default StartIcon;
