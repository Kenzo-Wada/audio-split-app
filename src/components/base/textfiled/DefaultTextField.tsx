import  TextField  from "@mui/material/TextField";
import styled from "@mui/system/styled";
import { CSSProperties, memo } from "react";

const StyledTextField = styled(TextField)((props) => ({
  label: props.label,
  defaultValue: props.defaultValue,
  style: props.style,
}));

interface Props {
  label?: string;
  defaultValue?: string;
  style?: CSSProperties;
}

const DefaultTextField = memo((props: Props) => {
  const { label, defaultValue, style } = props;

  return <StyledTextField variant="standard" label={ label } defaultValue={ defaultValue } style={ style } />;
});

DefaultTextField.displayName = "DefaultTextField";

export default DefaultTextField;
