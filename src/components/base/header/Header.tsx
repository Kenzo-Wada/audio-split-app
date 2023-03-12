import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { memo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Header = memo((props: Props) => {
  const { children } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        {children}
      </Toolbar>
    </AppBar>
  );
});

Header.displayName = 'Header';

export default Header;