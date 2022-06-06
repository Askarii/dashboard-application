import React from 'react'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/system'
import { theme } from './assets/styles/Globals'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        App
      </Box>
    </ThemeProvider>

  )
}

export default App