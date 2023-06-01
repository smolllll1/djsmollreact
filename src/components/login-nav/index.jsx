import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountMenu from "./avatar/index";
import SearchIcon from '@mui/icons-material/Search';
import { AuthenticationData } from "../data/authentication-data";
import { connect } from "react-redux";

import './login-nav.css';

const LoginNav = (data) => {

    const {
        onHandlerLogout,
        responseLogout,
        responseLogin,
    } = useContext(AuthenticationData);

    const myStyleNavBtn = {
        btn: {
            color: "seashell",
            textTransform: "capitalize",
            fontSize: "1rem",
            '&:hover': {
                color: "#01b4e4",
            },
        }
    }

    return (
        <Stack direction="row" spacing={0}>
            {!responseLogin && !responseLogout ?
                <Link to={'registration'} className="text-decoration-none">
                    <Button type="button" sx={myStyleNavBtn.btn}>Registration</Button>
                </Link>
                :
                null
            }
            {responseLogin ?
                <Link to={`users/account/${responseLogin?.username}`}>
                    <IconButton
                        size="large"
                        aria-label="show 0 new add movies">
                        <Badge badgeContent={data.movie.length} color="error">
                            <AddCircleOutlinedIcon className="add-movies" />
                        </Badge>
                    </IconButton>
                </Link>
                :
                null
            }
            {responseLogin ?
                <Link to={`events/${responseLogin?.username}`}>
                    <IconButton
                        size="large"
                        aria-label="show 0 new notifications">
                        <Badge badgeContent={0} color="error">
                            <NotificationsIcon className="bell" />
                        </Badge>
                    </IconButton>
                </Link>
                :
                null
            }
            {
                responseLogin ?
                    <AccountMenu
                        responseLogin={responseLogin}
                        onHandlerLogout={onHandlerLogout}
                    />
                    :
                    null
            }
            {
                !responseLogin ?
                    <Link to={'login'} className="text-decoration-none">
                        <Button type="button" sx={myStyleNavBtn.btn}>
                            Login
                        </Button>
                    </Link>
                    :
                    <div className="me-5 px-2"></div>
            }
            <Link to={"search"}>
                <IconButton size="large"
                    aria-label="search"
                    style={{ color: "rgb(1, 180, 228)" }}>
                    <SearchIcon />
                </IconButton>
            </Link>
        </Stack >
    )
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(LoginNav);