import React, { useRef, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { styled } from '@mui/system';
import Img from '../../assets/home/rightImage.jpg';
import circle from '../../assets/home/images--11-removebg-preview.png';
import { FiPieChart } from 'react-icons/fi';
import { PiCirclesThreeFill } from 'react-icons/pi';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CircleWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: 120,
    height: 120,
    marginTop: theme.spacing(2),
    cursor: 'pointer',
    transition: 'transform 0.5s ease-in-out',
    '&:hover': {
        transform: 'rotate(35deg)',
    },
}));

const CircleImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transform: 'rotate(14deg)',
});

function ExperienceArea() {
    const contentRef = useRef(null);
    const imageRef = useRef(null);
    const animatedItemsRef = useRef([]); // to store refs for each text line + circle image

    useEffect(() => {
        // Select all elements to animate inside content section
        const elements = animatedItemsRef.current;

        gsap.fromTo(
            elements,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );

        // Animate Image Section separately, fade up
        gsap.fromTo(
            imageRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Helper to assign refs
    const addToRefs = (el) => {
        if (el && !animatedItemsRef.current.includes(el)) {
            animatedItemsRef.current.push(el);
        }
    };

    return (
        <Box sx={{ bgcolor: '#1c1c1c', color: '#fff', pb: { xs: 8, md: 10 }, pt: 5 }}>
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={6}
                    alignItems="center"
                    // justifyContent="center"
                    direction={{ xs: 'column', md: 'column', lg: 'row' }}
                >
                    {/* IMAGE SECTION */}
                    <Grid
                        item
                        size={{xs:12,md:12,lg:6}}
                        order={{ xs: 1, md: 1, lg: 2 }}
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'center' },
                            alignItems: 'center',
                        }}
                        ref={imageRef}
                    >
                        <Box
                            sx={{
                                width: { xs: '100%', sm: '600px', md: '850px', lg: '100%' },
                                height: { xs: '400px', sm: '500px', md: '700px', lg: 500 },
                                overflow: 'hidden',
                                borderRadius: { xs: 0, md: 2 },
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Box
                                component="img"
                                src={Img}
                                alt="Construction"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />
                        </Box>
                    </Grid>

                    {/* CONTENT SECTION */}
                    <Grid
                        item
                        size={{xs:12,md:12,lg:6}}
                        order={{ xs: 2, md: 2, lg: 1 }}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'center', md: 'center', lg: 'flex-start' },
                            justifyContent: 'center',
                            textAlign: { xs: 'center', md: 'center', lg: 'left' },
                            px: { xs: 2, sm: 4, md: 4, lg: 6 },
                            py: { xs: 4, md: 4, lg: 0 },
                        }}
                        ref={contentRef}
                    >
                        <Box sx={{ maxWidth: { xs: '100%', md: 600 } }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    bgcolor: '#333',
                                    px: 1.5,
                                    py: 0.5,
                                    borderRadius: '12px',
                                    fontSize: 12,
                                    display: 'inline-block',
                                    marginBottom: 1,
                                }}
                                ref={addToRefs}
                            >
                                EXPERIENCE AREA
                            </Typography>

                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{ mt: 2, fontWeight: 600, lineHeight: 1.3 }}
                                ref={addToRefs}
                            >
                                Techniques for
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h2"
                                sx={{ fontWeight: 600, lineHeight: 1.3 }}
                                ref={addToRefs}
                            >
                                Outstanding Results
                            </Typography>

                            <Box
                                sx={{
                                    pt: 3,
                                    display: 'flex',
                                    justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' },
                                }}
                                ref={addToRefs}
                            >
                                <CircleWrapper>
                                    <CircleImage src={circle} alt="Circle" />
                                </CircleWrapper>
                            </Box>

                            <Grid
                                container
                                spacing={{ xs: 2, sm: 3, md: 5, lg: 7 }}
                                sx={{ mt: 4, height: '100%', justifyContent: { xs: 'center', sm: 'flex-start' } }}
                            >
                                {/* Card 1 */}
                                <Grid
                                    item
                                    size={{xs:10,sm:6}}
                                    ref={addToRefs}
                                    sx={{ maxWidth: { xs: 360, sm: 'none' } }}  // limit maxWidth on mobile to control size
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            height: '100%',
                                            p: 4,
                                            borderRadius: 2,
                                            bgcolor: '#f9f6ef',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            mx: 'auto',  // center inside Grid item
                                        }}
                                    >
                                        <FiPieChart style={{ fontSize: 50, marginBottom: 8, color: '#333' }} />
                                        <Box sx={{ fontSize: 22, fontWeight: 500, color: '#333' }}>
                                            Project Planning
                                        </Box>
                                        <Box sx={{ fontSize: 16, pt: 1, color: '#555' }}>
                                            Ensuring every detail <br /> is considered designing
                                        </Box>
                                    </Paper>
                                </Grid>

                                {/* Card 2 */}
                                <Grid
                                    item
                                    size={{xs:10,sm:6}}
                                    ref={addToRefs}
                                    sx={{ maxWidth: { xs: 360, sm: 'none' } }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            height: '100%',
                                            borderRadius: 2,
                                            bgcolor: '#f9f6ef',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                            mx: 'auto',
                                        }}
                                    >
                                        <PiCirclesThreeFill style={{ fontSize: 50, marginBottom: 8, color: '#333' }} />
                                        <Box sx={{ fontSize: 22, fontWeight: 500, color: '#333' }}>
                                            Labor Preparation
                                        </Box>
                                        <Box sx={{ fontSize: 16, pt: 1, color: '#555' }}>
                                            We take pride in our <br /> quality craftsmanship
                                        </Box>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ExperienceArea;
