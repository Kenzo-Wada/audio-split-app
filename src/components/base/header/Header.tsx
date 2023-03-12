import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { memo, ReactNode } from 'react';
import styled from '@mui/system/styled';

interface Props {
  children: ReactNode;
}

const StyledAppBar = styled(AppBar)({
  position: 'static',
  backgroundColor: 'white',
  color: 'black',
});

const StyledToolbar = styled(Toolbar)({
});

const Header = memo((props: Props) => {
  const { children } = props;

  return (
    <StyledAppBar>
      <StyledToolbar>
        {children}
      </StyledToolbar>
    </StyledAppBar>
  );
});

Header.displayName = 'Header';

export default Header;