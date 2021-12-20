import {
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton,
} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"

const Header = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cotação Hoje
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
