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

export default TextButton;