import createTheme  from "@mui/system/createTheme"

const useDefaultTheme = () => {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#0f83fd",
      },
    },
  })

  return theme
}

export default useDefaultTheme
