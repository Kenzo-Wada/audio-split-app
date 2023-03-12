import Button from '@mui/material/Button';
import {memo, ReactNode} from 'react';
import styled  from '@mui/system/styled';

interface Props {
  children: ReactNode;
}

const StyledButton = styled(Button)({
});

const ContainedButton = memo((props: Props) => {
  const {children} = props;

  return (
    <StyledButton variant="contained">{children}</StyledButton>
  );
});

ContainedButton.displayName = 'ContainedButton';

export default ContainedButton;
