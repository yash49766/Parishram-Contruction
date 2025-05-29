import React, { useEffect, useRef } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icon1 from '../../assets/home/Icon-01.png';
import Icon2 from '../../assets/home/Icon-02.png';
import Icon3 from '../../assets/home/Icon-03.png';
import Icon4 from '../../assets/home/Icon-04.png';
import Icon5 from '../../assets/home/Icon-05.png';
import Icon6 from '../../assets/home/Icon-06.png';
import Icon7 from '../../assets/home/Icon-07.png';
import Icon8 from '../../assets/home/Icon-08.png';

gsap.registerPlugin(ScrollTrigger);

const FeatureBox = styled(Box)(({ theme }) => ({
    textAlign: 'center',
    padding: '40px 20px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    background: '#fff',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
        transform: 'translateY(-4px)',
    },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    marginBottom: '16px',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const Description = styled(Typography)(({ theme }) => ({
    maxWidth: '220px',
    margin: '0 auto',
    color: '#666',
}));

const features = [
    { title: 'Integrity', icon: Icon1 },
    { title: 'Construction Skills', icon: Icon2 },
    { title: 'Safety', icon: Icon3 },
    { title: 'Innovation', icon: Icon4 },
    { title: 'Teamwork', icon: Icon5 },
    { title: 'Accountability', icon: Icon6 },
    { title: 'Sustainability', icon: Icon7 },
    { title: 'Excellence', icon: Icon8 },
];

function Features() {
    const featureRefs = useRef([]);

    useEffect(() => {
        featureRefs.current.forEach((el, index) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <Box sx={{ width: '100%', py: { xs: 4, md: 8 }, px: 2 }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Excellence built through passion
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#FF5A00' }}>
                        and commitment
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid
                            key={index}
                            item
                            size={{xs:12,sm:6,md:3}}
                            sx={{ display: 'flex', justifyContent: 'center' }}
                        >
                            <FeatureBox ref={(el) => (featureRefs.current[index] = el)}>
                                <IconWrapper>
                                    <Box
                                        component="img"
                                        src={feature.icon}
                                        alt={feature.title}
                                        sx={{ width: '60px', height: '60px', objectFit: 'contain' }}
                                    />
                                </IconWrapper>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                    {feature.title}
                                </Typography>
                                <Description variant="body2">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                </Description>
                            </FeatureBox>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

export default Features;
