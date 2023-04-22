import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import s from "../header/Header.module.css";
import {createTheme, Typography} from "@mui/material";
import {ThemeProvider} from "@mui/material";
import {IconsSocial} from "../iconsSocial/IconsSocial";


const pages = [
    {
        id: 1,
        href: '#Home',
        title: 'Home',
    },
    {
        id: 2,
        href: '#AboutMe',
        title: 'AboutMe',
    },
    {
        id: 3,
        href: '#AboutMe',
        title: 'Skills',
    },
    {
        id: 4,
        href: '#Examples',
        title: 'Examples',
    },
    {
        id: 5,
        href: '#Contact',
        title: 'Contact',
    }
]


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#1976d2"
            }
        }
    });

    return (
        <div className={s.sideHeader2}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',

                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                >
                                    {pages.map(t =>
                                        <div key={t.id}>
                                            <a href={t.href} className={s.linkHeader}>{t.title}</a>
                                        </div>
                                    )}
                                </Menu>

                            </Box>
                            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                                Pavel Ruban
                            </Typography>
                            <Box>
                                <IconsSocial />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}

export default ResponsiveAppBar;