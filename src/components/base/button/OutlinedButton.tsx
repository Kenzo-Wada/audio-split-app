import Button from '@mui/material/Button';
import styled  from '@mui/system/styled';
import {memo, ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

const StyledButton = styled(Button)({
});

const OutlinedButton = memo((props: Props) => {
  const {children} = props;

  return (
    <StyledButton variant="outlined">{children}</StyledButton>
  );
});

OutlinedButton.displayName = 'OutlinedButton';

export default OutlinedButton;
