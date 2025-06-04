import React, { useState, useRef, useEffect } from 'react';
import {Box, Tabs, Tab, Typography, Button, Grid, Container, useTheme, useMediaQuery} from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import constructionImg from '../../assets/home/portfolio-1.jpg';
import architectureImg from '../../assets/home/two-specialists-inspect-commercial-industrial-600nw-1712804020.webp';
import renovationImg from '../../assets/home/Screenshot 2025-05-26 111040.png';
import flooringImg from '../../assets/home/rightImage.jpg';

gsap.registerPlugin(ScrollTrigger);

const tabContent = [
    {
        title: 'Complete the entire construction project, ensuring it is completed on time and within budget.',
        description: 'We build multi-family and affordable housing communities, industrial facilities, public and private healthcare facilities, fitness centers and office buildings.',
        features: ['Structural Design', 'Foundation Planning', 'Construction Supervision', 'Budget Management'],
        image: constructionImg
    },
    {
        title: 'Architecture Design Services',
        description: 'We create innovative architectural designs that combine functionality with aesthetic appeal.',
        features: ['Creative Concepts', '3D Modelling', 'Design Development', 'Visualization'],
        image: architectureImg
    },
    {
        title: 'Building Renovation Services',
        description: 'Transform your existing spaces with our comprehensive renovation services.',
        features: ['Interior Remodeling', 'Electrical Upgrades', 'Plumbing Updates', 'Modernization'],
        image: renovationImg
    },
    {
        title: 'Flooring and Roofing Services',
        description: 'Professional flooring and roofing solutions that ensure durability and aesthetic appeal.',
        features: ['Tiling', 'Wood Flooring', 'Roof Repair', 'New Roofing'],
        image: flooringImg
    },
];

function Services() {
    const [activeTab, setActiveTab] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    // Refs for animation targets
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const featuresRefs = useRef([]);
    const buttonRef = useRef(null);

    // Clear features refs on tab change
    useEffect(() => {
        featuresRefs.current = [];
    }, [activeTab]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play reverse play reverse',
                    // markers: true, // Uncomment for debugging scroll trigger positions
                }
            });

            tl.from(titleRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.6,
                ease: 'power3.out',
            })
                .from(descRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: 'power3.out',
                }, "-=0.3")
                .from(featuresRefs.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.5,
                    stagger: 0.15,
                    ease: 'power3.out',
                }, "-=0.4")
                .from(buttonRef.current, {
                    opacity: 0,
                    y: 20,
                    duration: 0.6,
                    ease: 'power3.out',
                }, "-=0.3");

        }, containerRef); // scope selector to containerRef to avoid conflicts

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            ctx.revert();
        };
    }, [activeTab]);

    const handleChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const addFeatureRef = (el) => {
        if (el && !featuresRefs.current.includes(el)) {
            featuresRefs.current.push(el);
        }
    };

    return (
        <Box sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f5f3f1' }}>
            <Container maxWidth="xl">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                        Service We're Offering                    </Typography>
                    <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />
                    <Typography variant="body1" sx={{ color: '#666', maxWidth: '600px', mx: 'auto' }}>
                        Explore our range of professional services tailored to meet all your construction needs.
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="service tabs"
                        sx={{
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 600,
                                fontSize: '1rem',
                                color: '#666',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#fff',
                                border: '1px solid #e0e0e0',
                                borderRadius: '8px 8px 0 0',
                                mr: 1,
                                px: 3,
                                '&.Mui-selected': {
                                    color: '#fff',
                                    backgroundColor: '#ff5722',
                                    borderColor: '#ff5722'
                                }
                            },
                            '& .MuiTabs-indicator': { display: 'none' }
                        }}
                    >
                        <Tab label="Building Construction" />
                        <Tab label="Architecture Design" />
                        <Tab label="Building Renovation" />
                        <Tab label="Flooring and Roofing" />
                    </Tabs>
                </Box>

                <Box
                    sx={{
                        backgroundColor: '#333',
                        color: '#fff',
                        p: { xs: 3, md: 5 },
                        height: '100%',
                    }}
                    ref={containerRef}
                >
                    <Grid container spacing={4} alignItems="stretch">
                        <Grid item size={{xs:12, md:8}}>
                            <Typography
                                variant="h5"
                                component="h3"
                                sx={{ fontWeight: 'bold', mb: 3, width: "70%" }}
                                ref={titleRef}
                            >
                                {tabContent[activeTab].title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ mb: 4, color: '#ccc', width: "70%" }}
                                ref={descRef}
                            >
                                {tabContent[activeTab].description}
                            </Typography>

                            <Grid container spacing={2} sx={{ mb: 4 }}>
                                {tabContent[activeTab].features.map((feature, index) => (
                                    <Grid item size={{xs:12, md:6}} key={index} ref={addFeatureRef}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ff5722',
                                                    color: '#fff',
                                                    mr: 2,
                                                    fontSize: '14px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                ✓
                                            </Box>
                                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                                {feature}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#ff5722',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    px: 4,
                                    py: 1.5,
                                    textTransform: 'none',
                                    '&:hover': { backgroundColor: '#e64a19' },
                                }}
                                ref={buttonRef}
                            >
                                Get A Free Quote
                            </Button>
                        </Grid>

                        <Grid item xs={12} size={{xs:12, md:4}}>
                            <Box
                                component="img"
                                src={tabContent[activeTab].image}
                                alt="Service Image"
                                sx={{
                                    width: '100%',
                                    height: { xs: 'auto', md: '100%' },
                                    objectFit: 'cover',
                                    display: 'block',
                                    borderRadius: 2,
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Services;
