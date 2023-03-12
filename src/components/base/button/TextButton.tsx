import Button from '@mui/material/Button';
import {memo, ReactNode} from 'react';
import styled  from '@mui/system/styled';

interface Props {
  children: ReactNode;
}

const StyledButton = styled(Button)({
});

const TextButton = memo((props: Props) => {
  const {children} = props;

  return (
    <StyledButton>{children}</StyledButton>
  );
});

TextButton.displayName = 'TextButton';

export default TextButton;
