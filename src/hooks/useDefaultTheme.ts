import {createTheme} from "@mui/material/styles";
import type { Shadows} from "@mui/material/styles"

const useDefaultTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#0f83fd",
      },
    },
    shadows: Array(25).fill("none") as Shadows,
  })


export default useDefaultTheme
