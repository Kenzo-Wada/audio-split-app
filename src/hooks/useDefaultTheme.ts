import {createTheme, Shadows} from "@mui/material/styles"

const useDefaultTheme = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#0f83fd",
      },
    },
    shadows: Array(25).fill("none") as Shadows,
  })
  return theme
}

export default useDefaultTheme
