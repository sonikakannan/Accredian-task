import React from 'react'
import { Drawer, List, ListItem, ListItemText,  } from "@mui/material";

const Sidebar = ({open, toggleDrawer}) => {
  return (
<Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <List className="w-64 text-lg font-medium cursor-pointer">
          <ListItem button>
            <ListItemText primary="Refer & Earn" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Resources" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Try for free" />
          </ListItem>
        </List>
      </Drawer>
  )
}

export default Sidebar