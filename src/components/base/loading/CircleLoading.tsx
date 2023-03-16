import CircularProgress from "@mui/material/CircularProgress";
import type { CircularProgressProps as MUICircularProgressProps } from "@mui/material/CircularProgress";
import { memo } from "react";

type CircularProgressProps = MUICircularProgressProps;

export const CircleLoading = memo((props: CircularProgressProps) => {
  return <CircularProgress {...props} />;
});

CircleLoading.displayName = "CircleLoading";

export default CircleLoading;