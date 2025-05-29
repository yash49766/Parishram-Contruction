import React, { useEffect, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css/navigation';
import Img1 from '../../assets/home/img1.webp';
import Img2 from '../../assets/home/img2.jpg';
import Img3 from '../../assets/home/img3.jpg';
import Img4 from '../../assets/home/img4.jpg';
import Img5 from '../../assets/home/img5.jpg';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Workshowcase = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const imageRefs = useRef([]);

    const images = [Img1, Img2, Img3, Img4, Img5];

    useEffect(() => {
        imageRefs.current.forEach((el, i) => {
            if (!el) return;

            gsap.fromTo(
                el,
                {
                    opacity: 0,
                    y: 50,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
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
        <Box sx={{ backgroundColor: '#fff', py: 6, px: 4 }}>
            <Container maxWidth={'xl'}>
                <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        textAlign: 'center',
                        fontSize: { xs: '24px', sm: '32px', md: '45px' },
                        fontWeight: 600,
                        mb: 4,
                        mt: 4,
                        color: '#000',
                        lineHeight: 1.3,
                    }}
                >
                    Our Portfolio
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: '500',
                            mb: 4,
                            fontSize: { xs: '28px', md: '38px' },
                            alignItems: 'center',
                        }}
                    >
                        Works Showcase
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/gallery')}
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
                        View gallery
                        <ArrowForwardIcon sx={{ fontSize: 20 }} />
                    </Button>
                </Box>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={16}
                    slidesPerView={isMobile ? 1 : 4}
                    breakpoints={{
                        600: {
                            slidesPerView: 1,
                        },
                        900: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                        1536: {
                            slidesPerView: 4,
                        },
                    }}
                    style={{ paddingBottom: '40px' }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                ref={(el) => (imageRefs.current[index] = el)}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    height: '300px',
                                    cursor: 'pointer',
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                        filter: 'brightness(1.1)',
                                    },
                                    '&:hover::after': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        background: 'rgba(0, 0, 0, 0.2)',
                                        borderRadius: '12px',
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={img}
                                    alt={`Work ${index}`}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease, filter 0.3s ease',
                                    }}
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default Workshowcase;
