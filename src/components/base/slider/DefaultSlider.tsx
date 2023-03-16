import Slider from '@mui/material/Slider';
import type { SliderProps as MUISliderProps } from '@mui/material/Slider';
import { memo } from 'react';

type SliderProps = MUISliderProps;

const DefaultSlider = memo((props: SliderProps) => {
  return <Slider {...props}/>;
});

DefaultSlider.displayName = 'DefaultSlider';

export default DefaultSlider;
