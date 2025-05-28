import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Img from '../../assets/home/banner-1.jpg';

gsap.registerPlugin(ScrollTrigger);

function Headerr({ heading, subtext, buttonText, img = Img, path }) {
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        const elements = contentRef.current.querySelectorAll(".fade-up");

        gsap.fromTo(elements,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                },
            }
        );
    }, []);

    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                px: { xs: 2, sm: 4, md: 6 },
                py: { xs: 4, sm: 6, md: 8 },
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1,
                }}
            />
            {/* Content */}
            <Box
                ref={contentRef}
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: { xs: '90%', sm: '600px', md: '700px' },
                    mx: 'auto',
                }}
            >
                <Typography
                    variant="h2"
                    className="fade-up"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: { xs: '2rem', sm: '2.8rem', md: '4rem' },
                        mb: { xs: 2, sm: 3, md: 4 },
                        lineHeight: 1.2,
                    }}
                >
                    {heading}
                </Typography>
                <Typography
                    variant="h6"
                    className="fade-up"
                    sx={{
                        mb: { xs: 3, sm: 4 },
                        fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' },
                        maxWidth: '100%',
                        mx: 'auto',
                        lineHeight: 1.5,
                    }}
                >
                    {subtext}
                </Typography>
                <Button
                    className="fade-up"
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={() => navigate(path)}
                    sx={{
                        backgroundColor: '#FF5722',
                        color: '#fff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        px: { xs: 3, sm: 4 },
                        py: { xs: 1, sm: 1.5 },
                        borderRadius: '30px',
                        fontSize: { xs: '0.9rem', sm: '1rem' },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color:"#000"
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Box>
        </Box>
    );
}

export default Headerr;
