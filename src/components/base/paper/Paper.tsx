import { Paper as MUIPaper } from '@mui/material';
import type { PaperProps as MUIPaperProps } from '@mui/material/Paper';
import { memo } from 'react';

type PaperProps = MUIPaperProps;

const Paper = memo((props: PaperProps) => {
  return <MUIPaper {...props} />;
});

Paper.displayName = 'Paper';

export default Paper;
