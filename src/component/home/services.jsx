import React, { useState } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowRight } from 'lucide-react';
import Img1 from '../../assets/home/img3.jpg';
import Img2 from '../../assets/home/img2.jpg';
import Img3 from '../../assets/home/img1.webp';
import Img4 from '../../assets/home/img5.jpg';
import { useNavigate } from "react-router-dom";

const servicesData = [
    {
        id: 1,
        title: 'Civil infrastructure work ',
        description:
            'We provide expert flooring installation services, ensuring high-quality materials and precise craftsmanship for a beautiful and durable finish in your space.',
        img: Img1,
    },
    {
        id: 2,
        title: 'Commercial Refurbishing',
        description:
            'We offer creative and functional architectural solutions tailored to your needs, blending aesthetics with structural integrity.',
        img: Img2,
    },
    {
        id: 3,
        title: 'Interior design',
        description:
            'Our interior design services transform your spaces with elegance, comfort, and functionality, reflecting your unique style.',
        img: Img3,
    },
    {
        id: 4,
        title: 'Road & Infrastructure Development',
        description:
            'We specialize in house renovations, breathing new life into your property with innovative designs and quality craftsmanship.',
        img: Img4,
    },
];

function Services() {
    const [active, setActive] = useState(1);
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: '#1c1c1c',
                color: 'white',
                minHeight: '100vh',
                py: { xs: 4, md: 8 },
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'flex-start',
                        gap: { xs: 4, md: 8 },
                    }}
                >
                    {/* Left Section */}
                    <Box
                        flex={1}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: '#2c2c2c',
                                color: '#fff',
                                fontSize: '13px',
                                px: 2,
                                py: 0.5,
                                borderRadius: '20px',
                                alignSelf: 'flex-start',
                                mb: 2,
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                            }}
                        >
                            Our Solutions
                        </Button>

                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            mb={3}
                            sx={{
                                fontSize: { xs: '30px', md: '52px' },
                                lineHeight: { xs: '1.2', md: '1.3' },
                            }}
                        >
                            We Ready to <br /> Provide Services
                        </Typography>

                        <Button
                            endIcon={<ArrowRight />}
                            onClick={() => navigate('/services')}
                            sx={{
                                backgroundColor: '#FF5722',
                                color: '#fff',
                                border: "2px solid #FF5722",
                                borderRadius: '30px',
                                px: 3,
                                py: 1.5,
                                mb: 3,
                                fontWeight: '600',
                                width: 'fit-content',
                                mt: 2,
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: "#FF5722",
                                },
                            }}
                        >
                            All Services
                        </Button>
                    </Box>

                    {/* Right Section */}
                    <Box
                        flex={1.5}
                        display="flex"
                        flexDirection="column"
                        gap={2}
                        justifyContent="center"
                        width="100%"
                    >
                        {servicesData.map((service) => (
                            <Box
                                key={service.id}
                                onMouseEnter={() => setActive(service.id)}
                                sx={{
                                    borderBottom: '1px solid #333',
                                    cursor: 'pointer',
                                    pb: active === service.id ? 2 : 0,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: active === service.id ? '600' : '400',
                                        mb: active === service.id ? 1 : 3,
                                        transition: 'color 0.3s ease',
                                        fontSize: { xs: '20px', md: '37px', sm: '25px' },
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                    }}
                                >
                                    <Box component="span" sx={{ color: '#f7931e' }}>
                                        {String(service.id).padStart(2, '0')}
                                    </Box>
                                    <Box
                                        component="span"
                                        sx={{
                                            color: active === service.id ? '#f7931e' : '#fff',
                                        }}
                                    >
                                        {service.title}
                                    </Box>
                                </Typography>

                                <Box
                                    sx={{
                                        opacity: active === service.id ? 1 : 0,
                                        transform: active === service.id ? 'translateY(0)' : 'translateY(20px)',
                                        maxHeight: active === service.id ? '1000px' : '0px',
                                        overflow: 'hidden',
                                        transition: 'opacity 0.5s ease, transform 0.5s ease, max-height 0.5s ease',
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={service.img}
                                        alt={service.title}
                                        sx={{
                                            width: '100%',
                                            borderRadius: '8px',
                                            mb: 1,
                                            objectFit: 'cover',
                                            maxHeight: { xs: '200px', md: '260px' },
                                        }}
                                    />
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontSize: { xs: '16px', md: '18px' },
                                            lineHeight: '1.6',
                                        }}
                                    >
                                        {service.description}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Services;
