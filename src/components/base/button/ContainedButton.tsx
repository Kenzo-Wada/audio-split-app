import Button from '@mui/material/Button';
import type { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { memo } from 'react';

type ButtonProps = MUIButtonProps;

const ContainedButton = memo((props: ButtonProps) => {
  return <Button variant="contained" {...props} />;
});

ContainedButton.displayName = 'ContainedButton';

export default ContainedButton;
