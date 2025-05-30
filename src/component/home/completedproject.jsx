import React, { useEffect, useRef, useState } from 'react';
import {Box, Typography, Button, Container} from '@mui/material';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import img1 from '../../assets/home/two-specialists-inspect-commercial-industrial-600nw-1712804020.webp';
import img2 from '../../assets/home/portfolio-1.jpg';
import img3 from '../../assets/home/service-1.jpg';
import img4 from '../../assets/home/banner-1.jpg';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {useNavigate} from "react-router-dom";

const images = [img1, img2, img3, img4];

const CompletedProject = () => {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const options = {
            root: containerRef.current,
            threshold: 0.5,
        };

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute('data-index'));
                    setActiveIndex(index);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);
        const images = containerRef.current.querySelectorAll('.image');

        images.forEach((img) => observer.observe(img));

        return () => observer.disconnect();
    }, []);

    return (
        <>
        <Container maxWidth={'xl'}>
            <Box
                display="flex"
                sx={{
                    // height: '100vh',
                    overflow: 'hidden',
                    flexDirection: { xs: 'column', md: 'row' },
                }}
            >
                {/* Left Side Content */}
                <Box
                    flex="1"
                    maxWidth={{ xs: '100%', md: '40%' }}
                    p={{ xs: 2, md: 4 }}
                    zIndex={2}
                >
                    <Button
                        variant="outlined"
                        sx={{
                            borderRadius: '9999px',
                            fontSize: '14px',
                            textTransform: 'none',
                            padding: '6px 12px',
                            borderColor: '#D1D1D1',
                            color: '#000',
                            mb: 2,
                        }}
                    >
                        LATEST CREATIONS
                    </Button>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 600,
                            fontSize: { xs: '2rem', md: '3rem' },
                            lineHeight: 1.2,
                            mb: 4,
                        }}
                    >
                        View Our <br /> Completed Projects
                    </Typography>
                    <Button
                        onClick={()=> navigate('/gallery')}
                        variant="contained"
                        sx={{
                            backgroundColor: '#FF5722',
                            color: '#fff',
                            textTransform: 'uppercase',
                            fontWeight: 600,
                            borderRadius: '9999px',
                            border: "2px solid #FF5722",
                            padding: '12px 24px',
                            fontSize: '14px',
                            position: 'relative',
                            overflow: 'visible',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#FF5722',

                                '& .arrow-icon': {
                                    backgroundColor: '#fff',
                                    color: '#FF5722',
                                    border: '1px solid #FF5722',
                                }
                            },
                        }}
                    >
                        ALL PROJECT
                        <Box
                            component="span"
                            className="arrow-icon"
                            sx={{
                                ml: 1,
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                borderRadius: '50%',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                border: '1px solid #fff',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                right: '-12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <ArrowOutwardIcon sx={{ fontSize: 16 }} />
                        </Box>
                    </Button>
                </Box>

                {/* Right Side Image Scroll */}
                <Box
                    flex="1"
                    maxWidth={{ xs: '100%', md: '60%' }}
                    position="relative"
                    overflow="hidden"
                    height="100vh"
                >
                    <Box
                        ref={containerRef}
                        sx={{
                            height: '80%',
                            overflowY: 'scroll',
                            scrollBehavior: 'smooth',
                            '&::-webkit-scrollbar': { display: 'none' },
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                        }}
                    >
                        {images.map((img, index) => (
                            <Box
                                key={index}
                                data-index={index}
                                className={`image ${activeIndex === index ? 'active' : ''}`}
                                component="img"
                                src={img}
                                alt={`Project ${index + 1}`}
                                sx={{
                                    width: '100%',
                                    height: '100vh',
                                    objectFit: 'cover',
                                    display: 'block',
                                    marginTop: index === 0 ? 0 : '-80px',
                                    transition: 'transform 0.5s ease-in-out',
                                    transform: activeIndex === index ? 'translateY(0)' : 'translateY(80px)',
                                    zIndex: activeIndex === index ? 2 : 1,
                                    position: 'relative',
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Container>
        </>
    );
};

export default CompletedProject;
