import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import type { SvgIconProps as MUIIconProps } from '@mui/material';
import { memo } from 'react';

type IconProps = MUIIconProps;

const StartIcon = memo((props: IconProps) => {
  return <PlayArrowRoundedIcon {...props}/>;
});

StartIcon.displayName = 'StartIcon';

export default StartIcon;
