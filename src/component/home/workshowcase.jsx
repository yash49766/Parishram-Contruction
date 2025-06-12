import React, { useEffect, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css/navigation';
import Img1 from '../../assets/home/Screenshot 2025-06-12 101457.png';
import Img2 from '../../assets/home/img2.jpg';
import Img3 from '../../assets/home/img3.jpg';
import Img4 from '../../assets/home/img4.jpg';
import Img5 from '../../assets/home/img5.jpg';
import { useNavigate } from 'react-router-dom';
import { Autoplay, Navigation } from 'swiper/modules';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const imageData = [
    { src: Img1, title: '50 ML RESERVOIR WORK', location: 'Dahej' },
    { src: Img2, title:'Civil Infrastructure Work', location: 'Surat' },
    { src: Img3, title:'Road & Highway Construction', location: 'Surat' },
    { src: Img4, title: 'Flyover Bridge', location: 'Rajkot' },
    { src: Img5, title: 'Road & Highway Construction', location: 'Surat' }
];

const Workshowcase = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const imageRefs = useRef([]);

    useEffect(() => {
        imageRefs.current.forEach((el) => {
            if (!el) return;
            gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
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
            <Container maxWidth="xl">
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
                    Our Portfolio
                </Typography>
                <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />

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
                            fontWeight: 500,
                            mb: 4,
                            fontSize: { xs: '28px', md: '38px' },
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
                            border: '2px solid #FF5722',
                            borderRadius: '30px',
                            px: 4,
                            mb: 4,
                            py: 1.5,
                            boxShadow: 'none',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#FF5722',
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
                        600: { slidesPerView: 1 },
                        900: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                        1536: { slidesPerView: 4 },
                    }}
                    style={{ paddingBottom: '40px' }}
                >
                    {imageData.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                ref={(el) => (imageRefs.current[index] = el)}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    height: '300px',
                                    cursor: 'pointer',
                                    '&:hover .hover-img': {
                                        filter: 'brightness(0.6)',
                                        transform: 'scale(1.05)',
                                    },
                                    '&:hover .overlay': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                {/* Image */}
                                <Box
                                    component="img"
                                    src={img.src}
                                    alt={`Work ${index}`}
                                    className="hover-img"
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.4s ease, filter 0.3s ease',
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                        borderBottomLeftRadius: '12px',
                                        borderBottomRightRadius: '12px',
                                        py: 2,
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        fontWeight="bold"
                                        sx={{ fontSize: { xs: '18px', sm: '20px', md: '22px' } }}
                                    >
                                        {img.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ fontSize: { xs: '14px', sm: '16px', md: '18px' } }}
                                    >
                                        {img.location}
                                    </Typography>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default Workshowcase;
