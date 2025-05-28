import React from 'react';
import { Link as MuiLink } from '@mui/material';
import {
    Box,
    Typography,
    IconButton,
    Divider,
    Grid
} from '@mui/material';
import {
    Facebook,
    Twitter,
    LinkedIn,
    Instagram,
    Phone,
    Mail,
    LocationOn,
    AccessTime
} from '@mui/icons-material';
import bgImage from '../../assets/global/footer-bg.jpg';
import logo from '../../assets/global/Your paragraph text (2).png';
import {NavLink} from "react-router-dom";

const contactInfo = [
    { icon: <Phone sx={{ mr: 1, mt: 0.3, color: '#B2BDC6' }} fontSize="small" />, text: '+91 99258 41698' },
    { icon: <Mail sx={{ mr: 1, mt: 0.3, color: '#B2BDC6' }} fontSize="small" />, text: 'parishramcontruction36@gmail.com' },
    {
        icon: <LocationOn sx={{ mr: 1, mt: 0.3, color: '#B2BDC6' }} fontSize="small" />,
        text: 'Vadadala Post Office, Plot No. 39, Royal Residency, Vadadla,\n' +
            '                            Vagra, Dahej SIR, Bharuch, Gujarat, 392130'
    },
    {
        icon: <AccessTime sx={{ mr: 1, mt: 0.3, color: '#B2BDC6' }} fontSize="small" />,
        text: 'Mon – Sat: 8 AM – 7 PM\nSun: Closed'
    },
];

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: 'contact' },
];
const services = ['Building Construction', 'Architecture Design', 'Building Renovation', 'Flooring and Roofing'];

const socialLinks = [
    { icon: <Facebook />, href: '#' },
    { icon: <Twitter />, href: '#' },
    { icon: <LinkedIn />, href: '#' },
    { icon: <Instagram />, href: '#' },
];

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                color: '#fff',
                py: { xs: 5, md: 7 },
                px: { xs: 3, sm: 5 },
            }}
        >
            {/* Grid Layout */}
            <Grid
                container
                spacing={4}
                justifyContent={{ xs: 'center', md: 'space-between' }}
                textAlign={{ xs: 'center', md: 'left' }}
            >
                {/* Logo Section */}
                <Grid item size={{ xs: 12, lg: 4 }}>
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                        <Box
                            component="img"
                            src={logo}
                            alt="bygge"
                            sx={{ height: 100, borderRadius: '50%', mb: 2 }}
                        />
                        <Typography sx={{ fontWeight: 700, fontSize: 35, lineHeight: 1, color: 'white' }}>
                            Parishram
                        </Typography>
                        <Typography variant="caption" sx={{ fontSize: 20, color: 'white',mb:3 }}>
                            Construction
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent:'center' , gap: 2 }}>
                        {socialLinks.map((item, i) => (
                            <IconButton
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener"
                                sx={{
                                    padding: "10px 10px",
                                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                                    borderRadius: "50%",
                                    transition: "all 0.3s ease-in-out",
                                    color: "white",
                                    "&:hover": {
                                        backgroundColor: "#FF5722",
                                        color: "white",
                                    },
                                }}
                            >
                                {item.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={6} md={2}>
                    <Typography sx={{ fontSize: 28, fontWeight: 500, pb: 3 }}>
                        Navigate
                    </Typography>
                    {quickLinks.map((link, i) => (
                        <NavLink
                            key={i}
                            to={link.path}
                            style={{
                                display: 'block',
                                marginBottom: 8,
                                color: '#B2BDC6',
                                textDecoration: 'none',
                                transition: 'color 0.3s',
                            }}
                            className={({ isActive }) =>
                                isActive ? 'active-link' : undefined
                            }
                        >
                            <Typography
                                sx={{
                                    '&:hover': { color: '#fff' }
                                }}
                            >
                                {link.label}
                            </Typography>
                        </NavLink>
                    ))}
                </Grid>
                <Grid item size={{ xs: 12, sm: 6,md:2 }}>
                    <Typography sx={{ fontSize: 28, fontWeight: 500, pb: 3 }}>
                        Services
                    </Typography>
                    {services.map((link, i) => (
                        <Typography
                            key={i}
                            sx={{
                                mb: 2,
                                color: '#B2BDC6',
                                cursor: 'pointer',
                                transition: 'color 0.3s',
                                '&:hover': { color: '#fff' }
                            }}
                        >
                            {link}
                        </Typography>
                    ))}

                </Grid>
                {/* Office Info */}
                <Grid item size={{ xs: 12, sm: 6,md:4  }}>
                    <Typography sx={{ fontSize: 28, fontWeight: 500, pb: 3 }}>
                        Contact Info
                    </Typography>
                    {contactInfo.map((item, i) => {
                        let href = '#';
                        if (item.text.includes('@')) {
                            href = `mailto:${item.text}`;
                        } else if (item.text.includes('+91')) {
                            href = `tel:${item.text.replace(/\s+/g, '')}`;
                        }

                        return (
                            <Box
                                key={i}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    mb: 2,
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                    '&:hover svg': { color: '#fff' },
                                    '&:hover .hover-text': { color: '#fff' } // underline removed
                                }}
                            >
                                {item.icon}
                                <MuiLink
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    underline="none"
                                    className="hover-text"
                                    sx={{
                                        whiteSpace: 'pre-line',
                                        color: '#B2BDC6',
                                        cursor: 'pointer',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    {item.text}
                                </MuiLink>
                            </Box>
                        );
                    })}
                </Grid>


            </Grid>
            <Divider sx={{ my: 4, borderColor: '#a39d9d' }} />

            <Typography sx={{ textAlign: 'center', fontSize: '0.85rem', color: '#aaa' }}>
                © 2022, All rights reserved |{' '}
                <Box component="span" sx={{ fontWeight: 'bold', color: '#fff' }}>
                    Codeless
                </Box>
            </Typography>
        </Box>
    );
};

export default Footer;
