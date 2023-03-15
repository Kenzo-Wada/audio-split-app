import Button from '@mui/material/Button';
import type { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import { memo } from 'react';

type ButtonProps = MUIButtonProps;

const TextButton = memo((props: ButtonProps) => {
  return <Button {...props} />;
});

TextButton.displayName = 'TextButton';

export default TextButton;
