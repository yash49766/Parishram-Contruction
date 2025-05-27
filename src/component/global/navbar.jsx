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
    Backdrop,
    Divider,
} from '@mui/material';
import { Search, Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../../assets/global/Your paragraph text (2).png'; // Adjust path as needed
import SampleImg from '../../assets/global/logo.png'; // Add sample images
import miniImg1 from '../../assets/home/miniImg1.jpg'
import miniImg2 from '../../assets/home/miniImg2.jpg'
import miniImg3 from '../../assets/home/miniImg3.avif'
import miniImg4 from '../../assets/home/miniImg4.avif'

const images = [miniImg1, miniImg2, miniImg3, miniImg4];

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'];

function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [sidePanelOpen, setSidePanelOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleDrawer = (open) => () => setDrawerOpen(open);
    const toggleSidePanel = (open) => () => setSidePanelOpen(open);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* AppBar */}
            <AppBar
                elevation={0}
                sx={{
                    backgroundColor: scrolled ? 'white' : 'transparent',
                    color: scrolled ? 'black' : 'black',
                    backdropFilter: 'blur(10px)',
                    px: 3,
                    py:scrolled ? 2 : 3,
                    borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                }}
            >
                <Toolbar disableGutters sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    {/* Logo */}
                    <Box display="flex" alignItems="center">
                        <Box component="img" src={Logo} alt="Logo" sx={{ width: 75, height: 75, mr: 2,borderRadius:'50%' }} />
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
                                backgroundColor: scrolled ? 'white' : 'white',
                                borderRadius: 2,
                                px: {md:2.5,lg:8},
                                py: 3,
                                display: 'flex',
                                gap: 4,
                                alignItems: 'center',
                            }}
                        >
                            {navLinks.map((label) => (
                                <MuiLink
                                    key={label}
                                    href="#"
                                    underline="none"
                                    color="black"
                                    sx={{ fontWeight: 600, fontSize: 18 }}
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
                        justifyContent: 'flex-start'
                    },
                }}
            >
                {/* Close Button */}
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
                    {navLinks.map((text) => (
                        <ListItem button key={text} sx={{ px: 3 }}>
                            <ListItemText
                                primary={text}
                                primaryTypographyProps={{ fontWeight: 600 }}
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

                    {/* Logo */}
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

                    {/* Text Content */}
                    <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                        When we go to the office every day, we carry on a time-honored tradition of getting to know our clients on a first-name basis, and personally meeting their insurance needs.
                    </Typography>

                    {/* Image Grid */}
                    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={1} mt={2}>
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Box
                                key={i}
                                component="img"
                                src={images[i % images.length]} // Cycle through images if more boxes than images
                                alt={`Gallery ${i}`}
                                sx={{ width: '100%', height: 90, objectFit: 'cover', borderRadius: 1 }}
                            />
                        ))}
                    </Box>

                    {/* Contact Info */}
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
