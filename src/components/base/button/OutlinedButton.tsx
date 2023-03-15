import Button from '@mui/material/Button';
import type { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { memo } from 'react';

type ButtonProps = MUIButtonProps;

const OutlinedButton = memo((props: ButtonProps) => {
  return <Button variant="outlined" {...props} />;
});

OutlinedButton.displayName = 'OutlinedButton';

export default OutlinedButton;
