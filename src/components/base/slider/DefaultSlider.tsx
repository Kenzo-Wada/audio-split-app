import Slider from '@mui/material/Slider';
import styled from '@mui/system/styled';
import { memo } from 'react';

interface Props {}

const StyledSlider = styled(Slider)({});

const DefaultSlider = memo((props: Props) => {
  return <StyledSlider />;
});

DefaultSlider.displayName = 'DefaultSlider';

export default DefaultSlider;
