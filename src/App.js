import React from 'react'
import { Box, CssBaseline, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { theme } from './assets/styles/Globals'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box bgcolor="primary">
        <Typography>App</Typography>
      </Box>
    </ThemeProvider>

  )
}

export default App