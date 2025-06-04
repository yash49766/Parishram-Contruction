import React, { useEffect, useRef } from 'react';
import {Box, Typography, Button, LinearProgress, Container, useMediaQuery, useTheme} from '@mui/material';
import img1 from '../../assets/home/miniImg2.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Whychoseus() {
    const sectionRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const imgRef = useRef(null);
    const textRef = useRef(null);
    const progressRef = useRef(null);
    const buttonRef = useRef(null);

    const navigate = useNavigate();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(imgRef.current, {
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                x: -100,
                duration: 1,
                ease: 'power2.out',
            });

            gsap.from(textRef.current, {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                delay: 0.4,
                ease: 'power2.out',
            });

            gsap.from(progressRef.current, {
                scrollTrigger: {
                    trigger: progressRef.current,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.5,
                ease: 'power2.out',
            });

            gsap.from(buttonRef.current, {
                scrollTrigger: {
                    trigger: buttonRef.current,
                    start: 'top 90%',
                },
                opacity: 0,
                scale: 0.8,
                duration: 0.3,
                delay: 0.3,
                ease: 'back.out(1.7)',
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box sx={{
            py:3
        }}>
            <Container maxWidth={'xl'}>
                <Typography
                    variant={isMobile ? "h3" : "h1"}
                    sx={{
                        fontWeight: 800,
                        textAlign:"center",
                        mb: 3,
                        background: 'linear-gradient(45deg, #000000 30%, #FF6600 70%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textShadow: '0 0 20px rgba(255, 102, 0, 0.2)',
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '4.5rem' }
                    }}
                >
                    Why Choose Us
                </Typography>
                <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />

                <Box
                    ref={sectionRef}
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 3,
                        backgroundColor: '#fff',
                    }}
                >
                    {/* Left: Image */}
                    <Box
                        sx={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            mb: { xs: 4, md: 0 },
                        }}
                    >
                        <Box
                            ref={imgRef}
                            component="img"
                            src={img1}
                            alt="Construction"
                            sx={{
                                width: '100%',
                                maxWidth: 600,
                                borderRadius: 2,
                                objectFit: 'cover',
                            }}
                        />
                    </Box>

                    {/* Right: Text & Progress */}
                    <Box sx={{ flex: 1, px: { xs: 2, md: 6 } }} ref={textRef}>
                        <Typography
                            variant="caption"
                            sx={{
                                fontWeight: 'bold',
                                backgroundColor: '#F5F5F5',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                mb: 2,
                                mt: { lg: 2, xs: 0 },
                                display: { xs: 'inline-block', md: 'none' },
                            }}
                        >
                            WHY CHOOSE US
                        </Typography>

                        <Typography variant="h4" fontWeight="bold" gutterBottom>
                            Modern Building <br />
                            Challenges & Solutions
                        </Typography>

                        <Typography variant="body2" color="text.secondary" mb={4}>
                            One Significant Challenge Is Managing Project Costs In An Era Of
                            Fluctuating Material Prices And Labor Shortages
                        </Typography>

                        {/* Progress Bars */}
                        <Box mb={3} ref={progressRef}>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography>Building Construction</Typography>
                                <Typography>89%</Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={89}
                                sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: '#f0f0f0',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#FF5722',
                                    },
                                }}
                            />
                        </Box>

                        <Box mb={4}>
                            <Box display="flex" justifyContent="space-between" mb={1}>
                                <Typography>Interiors Design</Typography>
                                <Typography>79%</Typography>
                            </Box>
                            <LinearProgress
                                variant="determinate"
                                value={79}
                                sx={{
                                    height: 8,
                                    borderRadius: 5,
                                    backgroundColor: '#f0f0f0',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: '#FF5722',
                                    },
                                }}
                            />
                        </Box>

                        <Button
                            ref={buttonRef}
                            variant="contained"
                            onClick={() => navigate('/contact')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                border: "2px solid #FF5722",
                                borderRadius: '30px',
                                px: 4,
                                py: 1.5,
                                boxShadow: "none",
                                textTransform: 'none',
                                fontWeight: 'bold',
                                transition: "0.3s",
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: "#FF5722",
                                },
                            }}
                        >
                            START TODAY
                            <ArrowForwardIcon sx={{ fontSize: 20 }} />
                        </Button>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Whychoseus;
