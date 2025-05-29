import React, { useEffect, useRef } from "react";
import {
    Box,
    Typography,
    Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import bgimg from "../../assets/home/test-bg.webp";
import quoteIcon from "../../assets/home/dots.webp";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "Jesiu Petit",
        role: "Customer",
        image: "https://i.pravatar.cc/80?img=1",
        review:
            "It's very productive to discuss a project with people who have technical background. I forgot how to explain obvious technical things and just get more done.",
    },
    {
        name: "Tom Green",
        role: "Customer",
        image: "https://i.pravatar.cc/80?img=2",
        review:
            "Working with this team was fantastic. Everything was smooth and efficient. I’ll definitely return for future projects.",
    },
    {
        name: "Sandra Cole",
        role: "Customer",
        image: "https://i.pravatar.cc/80?img=3",
        review:
            "Absolutely amazing experience. The quality and attention to detail are top-notch. Highly recommended!",
    },
];

const Testimonial = () => {
    const navigate = useNavigate();
    const testimonialRefs = useRef([]);

    useEffect(() => {
        testimonialRefs.current.forEach((el) => {
            if (!el) return;

            const reviewText = el.querySelector(".review-text");

            const words = reviewText.textContent.split(" ");
            reviewText.innerHTML = words.map(word => `<span class="word">${word}&nbsp;</span>`).join("");

            const wordElements = reviewText.querySelectorAll(".word");

            gsap.fromTo(
                wordElements,
                {
                    opacity: 0,
                    y: 20,
                },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.05,
                    duration: 0.6,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        });
    }, []);

    return (
        <Box
            sx={{
                backgroundImage: `url(${bgimg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                py: { xs: 6, md: 15,sm: 10 },
                px: { xs: 2, sm: 4, md: 10 },
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1400px",
                    mx: "auto",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "flex-start",
                    gap: 6,
                }}
            >
                {/* LEFT SIDE */}
                <Box
                    sx={{
                        flex: { xs: "1 1 100%", md: "0 0 40%" },
                        maxWidth: { xs: "100%", md: "40%" },
                        width: "100%",
                        color: "#fff",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        component="img"
                        src={quoteIcon}
                        alt="Quote Icon"
                        sx={{ width: 80, height: 80, mb: 3 }}
                    />
                    <Typography
                        variant="overline"
                        sx={{
                            letterSpacing: 1.5,
                            color: "#9ca3af",
                            fontWeight: 600,
                            mb: 1,
                        }}
                    >
                        WHAT PEOPLE SAY
                    </Typography>
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "32px", md: "44px" },
                            fontWeight: 700,
                            mb: 3,
                        }}
                    >
                        Client's Talk
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: "16px", md: "18px" },
                            color: "#cbd5e1",
                            maxWidth: "500px",
                        }}
                    >
                        We have a wealth of experience working as main building contractors on all kinds of
                        projects, big and small, from home maintenance and improvements to extensions,
                        refurbishments and new builds.
                    </Typography>

                    <Box
                        onClick={() => navigate('/about')}
                        sx={{
                            mt: 5,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            px: 4,
                            py: 1.5,
                            border: "3px solid #E1E4E65C",
                            borderRadius: "50px",
                            color: "#fff",
                            fontWeight: 600,
                            fontSize: "13px",
                            cursor: "pointer",
                            transition: "all 0.3s",
                            width: "fit-content",
                            "&:hover": {
                                backgroundColor: "#FF6422",
                                color: "#fff",
                                "& span": {
                                    color: "#fff",
                                },
                            },
                        }}
                    >
                        VIEW MORE
                        <Box component="span" sx={{ fontSize: 18, color: "#FF6422" }}>↗</Box>
                    </Box>
                </Box>

                {/* RIGHT SIDE - Swiper */}
                <Box
                    sx={{
                        flex: { xs: "1 1 100%", md: "0 0 60%" },
                        maxWidth: { xs: "100%", md: "60%" },
                        width: "100%",
                        pl: { md: 4 },
                        pt: { xs: 4, md: 0 },
                        overflow: "visible",
                    }}
                >
                    <Swiper
                        loop
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 5000 }}
                        spaceBetween={10}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                            900: { slidesPerView: 1.25 },
                            1200: { slidesPerView: 1 },
                        }}
                        style={{
                            paddingBottom: "40px",
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <Box
                                    sx={{
                                        backgroundColor: "#fff",
                                        p: 5,
                                        position: "relative",
                                        height: 300,
                                        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                                        width: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        // justifyContent: "space-between",
                                    }}
                                    ref={(el) => (testimonialRefs.current[index] = el)}
                                >
                                    <Typography
                                        className="review-text"
                                        sx={{
                                            position: "relative",
                                            fontSize: "1rem",
                                            fontStyle: "italic",
                                            color: "#374151",
                                            zIndex: 1,
                                            mb: 3,
                                            wordBreak: "break-word",
                                        }}
                                    >
                                        {testimonial.review}
                                    </Typography>

                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        gap={2}
                                        mt={2}
                                        zIndex={1}
                                    >
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{ width: 48, height: 48 }}
                                        />
                                        <Box>
                                            <Typography sx={{ fontWeight: 600, color: "#111827" }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography
                                                sx={{ fontSize: "0.85rem", color: "#6b7280" }}
                                            >
                                                {testimonial.role}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 0,
                                            right: -50,
                                            fontSize: "200px",
                                            color: "#e5e7eb",
                                            fontWeight: 700,
                                            lineHeight: 1,
                                            zIndex: 0,
                                            pointerEvents: "none",
                                            opacity: 0.1,
                                        }}
                                    >
                                        &rdquo;
                                    </Box>
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        </Box>
    );
};

export default Testimonial;
