import React, { useEffect, useRef } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Img1 from '../../assets/home/portfolio-1.jpg';
import Img2 from '../../assets/home/banner-1.jpg';
import Img3 from '../../assets/home/Screenshot 2025-05-26 111040.png';
import smallImage from '../../assets/home/service-1.jpg';

function Header() {
    const modernRef = useRef(null);
    const imageRef = useRef(null);
    const buildingRef = useRef(null);
    const yearRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

        tl.from(modernRef.current, { x: -100, opacity: 0 })
            .from(imageRef.current, { scale: 0.5, opacity: 0 }, '-=0.6')
            .from(buildingRef.current, { x: 100, opacity: 0 }, '-=0.5')
            .from(yearRef.current, { y: 50, opacity: 0 }, '-=0.4')
            .from(swiperRef.current, { y: 100, opacity: 0 }, '-=0.3');
    }, []);

    return (
        <Box sx={{ bgcolor: '#1a1a1a', color: 'white', p: 4, pt: 20 }}>
            {/* Title Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography
                    ref={modernRef}
                    sx={{
                        fontWeight: 500,
                        mr: 2,
                        fontSize: { md: "100px", sm: "60px", xs: "40px" },
                        lineHeight: { md: "110px", xs: "40px" }
                    }}
                >
                    Modern
                </Typography>
                <Box
                    ref={imageRef}
                    component="img"
                    src={smallImage}
                    alt="small"
                    sx={{
                        width: { xs: 120, sm: 180, md: 240, lg: 300 },
                        height: 'auto',
                        borderRadius: 15,
                        objectFit: 'cover',
                        mx: 1,
                        maxWidth: '100%',
                    }}
                />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                <Typography
                    ref={buildingRef}
                    sx={{
                        fontWeight: 500,
                        mr: 2,
                        fontSize: { md: "100px", sm: "60px", xs: "40px" },
                        lineHeight: { md: "110px", xs: "50px", sm: '80px' }
                    }}
                >
                    Building <br /> Concepts
                </Typography>
                <Box
                    ref={yearRef}
                    sx={{
                        ml: 'auto',
                        fontSize: { md: '150px', sm: '80px', xs: '40px' },
                        color: 'rgba(255, 255, 255, 0.2)',
                        fontWeight: 500,
                    }}
                >
                    2025
                </Box>
            </Box>

            {/* Swiper with GSAP animation */}
            <Box
                ref={swiperRef}
                sx={{ position: 'relative', mt: 4 }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2, gap: 2 }}>
                    <IconButton className="swiper-button-prev-custom" sx={navButtonStyle}>
                        <ChevronLeft size={24} />
                    </IconButton>
                    <IconButton className="swiper-button-next-custom" sx={navButtonStyle}>
                        <ChevronRight size={24} />
                    </IconButton>
                </Box>

                <Swiper
                    slidesPerView={1.25}
                    spaceBetween={20}
                    loop
                    navigation={{
                        prevEl: '.swiper-button-prev-custom',
                        nextEl: '.swiper-button-next-custom',
                    }}
                    modules={[Navigation, Pagination]}
                    style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                    }}
                >
                    {[Img1, Img2, Img3].map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                component="img"
                                src={img}
                                alt={`slide-${index}`}
                                sx={{
                                    width: '100%',
                                    height: { xs: 250, sm: 350, md: 450 },
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
}

const navButtonStyle = {
    bgcolor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    '&:hover': {
        bgcolor: 'rgba(255, 255, 255, 0.3)',
    },
    width: 48,
    height: 48,
    transition: 'all 0.2s ease',
    zIndex: 10,
};

export default Header;
