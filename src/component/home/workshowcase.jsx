import React from 'react';
import { Box, Typography, useTheme, useMediaQuery, Button, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Img1 from '../../assets/home/img1.webp';
import Img2 from '../../assets/home/img2.jpg';
import Img3 from '../../assets/home/img3.jpg';
import Img4 from '../../assets/home/img4.jpg';
import Img5 from '../../assets/home/img5.jpg';
import { useNavigate } from 'react-router-dom';
import {Autoplay, Navigation} from "swiper/modules";

const Workshowcase = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const images = [Img1, Img2, Img3, Img4, Img5];

    return (
        <Box sx={{ backgroundColor: '#fff', py: 6, px: 4 }}>
            <Container maxWidth={'xl'}>
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
                            fontWeight: 'bold',
                            mb: 4,
                            fontSize: { xs: '28px', md: '45px' },
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
                            border: '2px solid #FF5722',
                            borderRadius: '30px',
                            px: 4,
                            mb: 4,
                            alignItems: 'center',
                            py: 1.2,
                            boxShadow: 'none',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            transition: '0.3s',
                            '&:hover': {
                                backgroundColor: '#fff',
                                color: '#FF5722',
                            },
                        }}
                    >
                        View gallery
                    </Button>
                </Box>

                <Swiper
                    modules={[Navigation,Autoplay]}
                    // navigation
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
                    style={{ paddingBottom: '40px' }} // for navigation arrows spacing
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={img}
                                alt={`Work ${index}`}
                                sx={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    borderRadius: '8px',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default Workshowcase;
