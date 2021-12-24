import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import {
    AppBar, 
    Box, 
    Toolbar, 
    Typography, 
    Button, 
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core'

import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import EuroIcon from '@material-ui/icons/Euro'
import BTCIcon from '@material-ui/icons/AccountBalanceWallet'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const history = useHistory()

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuClick = route => {
    history.push(route)
    handleToggleMenu()
  }

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
              onClick={() => handleToggleMenu()}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cotação Hoje
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={menuOpen} onClose={() => handleToggleMenu()} >
          <List>
            <ListItem button onClick={() => handleMenuClick("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick("/dolarhoje")}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText>Dolar Hoje</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick("/eurohoje")}>
              <ListItemIcon>
                <EuroIcon />
              </ListItemIcon>
              <ListItemText>Euro Hoje</ListItemText>
            </ListItem>

            <ListItem button onClick={() => handleMenuClick("/bitcoinhoje")}>
              <ListItemIcon>
                <BTCIcon />
              </ListItemIcon>
              <ListItemText>Bitcoin Hoje</ListItemText>
            </ListItem>
          </List>

        </Drawer>
      </Box>
    )
}

export default Header
