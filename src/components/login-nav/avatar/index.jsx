import React, { useState, Fragment } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Link } from "react-router-dom";

export default function AccountMenu({ onHandlerLogout, responseLogin }) {

    const [anchorEl, setAnchorEl] = useState(null);
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
        }
    }

    return (
        <Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Profile adn Settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 1 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{
                            width: 34,
                            height: 34,
                            bgcolor: "#01D277",
                            fontSize: "1rem",
                        }}>
                            {/* avatar first letter username */}
                            {responseLogin?.username[0]}
                        </Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 34,
                            height: 34,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 16,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    {/* avatar menu username */}
                    <p className='m-0 p-0 fw-bold'>
                        <Link to={`users/account/${responseLogin?.username}`}
                            className="text-decoration-none text-secondary">
                            {responseLogin?.username}
                            <br />
                            <span className='m-0 p-0 pt-3 view-profile'
                                style={{ fontSize: '.75rem' }}>
                                View profile
                            </span>
                        </Link>
                    </p>
                </MenuItem>
                <Divider />
                <MenuItem sx={myStyleMenuItem.li} onClick={handleClose}>
                    <Link to={`settings/${responseLogin?.username}`}
                        className="text-decoration-none link-avatar">
                        Settings
                    </Link>
                </MenuItem>
                <Divider />
                <MenuItem sx={myStyleMenuItem.li} onClick={(() => { onHandlerLogout(); handleClose(); })}>
                    <Link to={'/'} className="text-decoration-none link-avatar">
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </Fragment >
    );
}