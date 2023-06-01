import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./more-menu.css"

export default function MoreMenuButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const myStyleMenuItem = {
    li: {
      '&:hover': {
        backgroundColor: "rgb(13, 37, 63)",
      }
    },
  }
  
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: "seashell",
          textTransform: "capitalize",
          fontSize: "1rem",
          '&:hover': {
            color: "#01b4e4",
          },
        }}
      >
        More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem sx={myStyleMenuItem.li} onClick={handleClose}>
          <Link to={"about"} className="text-decoration-none more-menu-link">
            About Us
          </Link>
        </MenuItem>
        <MenuItem sx={myStyleMenuItem.li} onClick={handleClose}>
          <Link to={"contacts"} className="text-decoration-none more-menu-link">
            Contact Us
          </Link>
        </MenuItem>
        <MenuItem sx={myStyleMenuItem.li} onClick={handleClose}>
          <Link to={"updated"} className="text-decoration-none more-menu-link">
            Support
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}