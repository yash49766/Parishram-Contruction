import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    useTheme,
    useMediaQuery,
    Link as MuiLink,
} from '@mui/material';
import { Search, Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../../assets/global/Your paragraph text (2).png'; // Adjust path as needed
import miniImg1 from '../../assets/home/miniImg1.jpg';
import miniImg2 from '../../assets/home/miniImg2.jpg';
import miniImg3 from '../../assets/home/miniImg3.avif';
import miniImg4 from '../../assets/home/miniImg4.avif';
import { useNavigate, Link as RouterLink, useLocation } from 'react-router-dom';

const images = [miniImg1, miniImg2, miniImg3, miniImg4];

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
];

function Navbar() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sidePanelOpen, setSidePanelOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const toggleSidePanel = (open) => () => setSidePanelOpen(open);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const currentPath = location.pathname;
        const matchedLink = navLinks.find(link => link.href === currentPath);
        if (matchedLink) {
            setActiveLink(matchedLink.label);
        }
    }, [location.pathname]);

    return (
        <>
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? 'white' : 'transparent',
                    color: scrolled ? 'black' : 'black',
                    px: 3,
                    py: scrolled ? 2 : 3,
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center', margin: { xl: "0 172px", lg: "0 10px" } }}>
                    <Box display="flex" alignItems="center" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ width: 75, height: 75, mr: 2, borderRadius: '50%' }} />
                        <Box>
                            <Box sx={{ fontWeight: 700, color: scrolled ? 'black' : 'white', fontSize: '30px', lineHeight: 1 }}>
                                Parishram
                            </Box>
                            <Typography variant="caption" sx={{ color: scrolled ? 'black' : 'white', fontSize: 16 }}>
                                Construction
                            </Typography>
                        </Box>
                    </Box>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <Box
                            sx={{
                                backgroundColor: 'transparent',
                                borderRadius: 2,
                                px: { md: 2.5, lg: 8 },
                                py: 3,
                                display: 'flex',
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            {navLinks.map(({ label, href }) => (
                                <MuiLink
                                    key={label}
                                    component={RouterLink}
                                    to={href}
                                    underline="none"
                                    onClick={() => setActiveLink(label)}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: 18,
                                        cursor: 'pointer',
                                        color: scrolled ? "#000" : "#fff",
                                        borderBottom: activeLink === label ? `2px solid ${scrolled ? '#000' : '#fff'}` : 'none',
                                        pb: 0.5,
                                    }}
                                >
                                    {label}
                                </MuiLink>
                            ))}
                        </Box>
                    )}

                    {/* Right Side Icons */}
                    <Box display="flex" alignItems="center" gap={2}>
                        <IconButton sx={{ color: scrolled ? 'black' : 'white' }}>
                            <Search />
                        </IconButton>
                        <IconButton
                            sx={{ color: scrolled ? 'black' : 'white' }}
                            onClick={isMobile ? toggleDrawer(true) : toggleSidePanel(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                ModalProps={{ keepMounted: true }}
                PaperProps={{
                    sx: {
                        width: 330,
                        p: 0,
                        position: 'fixed',
                        right: 0,
                        boxShadow: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                    },
                }}
            >
                <IconButton
                    onClick={toggleDrawer(false)}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: '#f15423',
                        color: 'white',
                        '&:hover': { backgroundColor: '#d4431e' },
                        width: 36,
                        height: 36,
                        fontSize: 18,
                        zIndex: 1,
                    }}
                >
                    ×
                </IconButton>

                <Box display="flex" alignItems="center" mt={6} mb={3} ml={2}>
                    <Box component="img" src={Logo} alt="Logo" sx={{ width: 75, height: 75, mr: 1 }} />
                    <Box>
                        <Box sx={{ fontWeight: 700, color: 'black', fontSize: '30px', lineHeight: 1 }}>
                            Parishram
                        </Box>
                        <Typography variant="caption" sx={{ color: 'black', fontSize: 16 }}>
                            Construction
                        </Typography>
                    </Box>
                </Box>

                <List sx={{ flexGrow: 1, paddingBottom: 0 }}>
                    {navLinks.map(({ label, href }) => (
                        <ListItem
                            button
                            key={label}
                            component={RouterLink}
                            to={href}
                            onClick={() => {
                                setActiveLink(label);
                                toggleDrawer(false)();
                            }}
                            sx={{
                                px: 3,
                                borderLeft: activeLink === label ? '4px solid #f15423' : 'none',
                                backgroundColor: activeLink === label ? 'rgba(0,0,0,0.05)' : 'transparent',
                            }}
                        >
                            <ListItemText
                                primary={label}
                                primaryTypographyProps={{
                                    fontWeight: 600,
                                    color: 'black',
                                }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            {/* Desktop Side Panel */}
            {isDesktop && (
                <Drawer
                    anchor="right"
                    open={sidePanelOpen}
                    onClose={toggleSidePanel(false)}
                    PaperProps={{
                        sx: {
                            width: 430,
                            p: 3,
                        },
                    }}
                >
                    <IconButton
                        onClick={toggleSidePanel(false)}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            backgroundColor: '#f15423',
                            color: 'white',
                            '&:hover': { backgroundColor: '#d4431e' },
                            width: 36,
                            height: 36,
                            fontSize: 18,
                            zIndex: 1,
                        }}
                    >
                        ×
                    </IconButton>

                    <Box display="flex" alignItems="center" mt={4} mb={2}>
                        <Box component="img" src={Logo} alt="Logo" sx={{ width: 85, height: 85, mr: 1 }} />
                        <Box>
                            <Box sx={{ fontWeight: 700, color: 'black', fontSize: '30px', lineHeight: 1 }}>
                                Parishram
                            </Box>
                            <Typography variant="caption" sx={{ color: 'black', fontSize: 16 }}>
                                Construction
                            </Typography>
                        </Box>
                    </Box>

                    <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                        When we go to the office every day, we carry on a time-honored tradition of getting to know our clients on a first-name basis, and personally meeting their insurance needs.
                    </Typography>

                    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mt={2}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={images[i % images.length]}
                                alt={`Gallery ${i}`}
                                sx={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 1 }}
                            />
                        ))}
                    </Box>

                    <Box mt={3}>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            📍 Vadadala Post Office, Plot No. 39, Royal Residency, Vadadla,
                            Vagra, Dahej SIR, Bharuch, Gujarat, 392130
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1.3 }}>
                            📞 99258 41698
                        </Typography>
                        <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}>
                            ✉️ parishramcontruction36@gmail.com
                        </Typography>
                    </Box>
                </Drawer>
            )}
        </>
    );
}

export default Navbar;
