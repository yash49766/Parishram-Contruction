import React, { useRef, useEffect } from "react";
import { Box, Typography, Avatar, Rating } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        name: "David Anthony",
        role: "Civil Engineer",
        image: "https://via.placeholder.com/40",
        review:
            "From start to finish, BuildGo delivered exceptional service. They communicated well, met every deadline, and the quality of their work far exceeded our expectations.",
        rating: 5,
    },
    {
        name: "Michael D",
        role: "Site Supervisor",
        image: "https://via.placeholder.com/40",
        review:
            "Working with BuildGo was seamless. They handled everything efficiently, professionally, and I would definitely recommend their services.",
        rating: 5,
    },
    {
        name: "Sarah L",
        role: "Project Manager",
        image: "https://via.placeholder.com/40",
        review:
            "Excellent coordination and follow-through. BuildGo made the entire process stress-free.",
        rating: 5,
    },
];

function Testimonial() {
    const containerRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const cards = containerRef.current.querySelectorAll(".testimonial-card");

        gsap.fromTo(
            containerRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        gsap.fromTo(
            cards,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.3,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Box ref={containerRef} sx={{ maxWidth: "1200px", mx: "auto", px: 2, py: 4 }}>
            {/* Section Title */}
            <Typography
                variant="h4"
                component="h2"
                sx={{
                    display: { xs: "none", md: "block" },
                    textAlign: "center",
                    fontSize: { xs: "24px", sm: "32px", md: "40px" },
                    fontWeight: 600,
                    mb: 4,
                    color: "#000",
                    lineHeight: 1.3,
                }}
            >
                Testimonial
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    fontWeight: "bold",
                    backgroundColor: "#F5F5F5",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 2,
                    mb: 2,
                    mt: { lg: 2, xs: 0 },
                    display: { xs: "inline-block", md: "none" },
                }}
            >
                Testimonial
            </Typography>

            {/* Title and Navigation */}
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                flexWrap="wrap"
                mb={3}
                px={{ xs: 1, sm: 2 }}
            >
                <Typography
                    variant="h4"
                    fontWeight={500}
                    sx={{
                        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                        flex: { xs: "100%", md: "auto" },
                        mb: { xs: 2, md: 0 },
                        textAlign: { xs: "center", md: "left" },
                        whiteSpace: { xs: "normal", md: "nowrap" },
                    }}
                >
                    Client Feedback and <br /> Success Stories
                </Typography>
                {/* Navigation buttons can be added back if needed */}
            </Box>

            {/* Swiper Slider with Autoplay */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation, Autoplay]}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 },
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <Box
                            className="testimonial-card"
                            sx={{
                                border: "1px solid #eee",
                                borderRadius: "16px",
                                p: 3,
                                height: "100%",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Box display="flex" alignItems="center" mb={2}>
                                <Avatar
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    sx={{ mr: 2, width: 56, height: 56 }}
                                />
                                <Box>
                                    <Typography fontWeight={600} fontSize={{ xs: "1rem", sm: "1.1rem" }}>
                                        {testimonial.name}
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                        fontSize={{ xs: "0.8rem", sm: "0.9rem" }}
                                    >
                                        {testimonial.role}
                                    </Typography>
                                </Box>
                            </Box>
                            <Typography
                                variant="body1"
                                color="text.primary"
                                mb={2}
                                sx={{ fontSize: { xs: "0.9rem", sm: "1rem" }, flexGrow: 1 }}
                            >
                                {testimonial.review}
                            </Typography>
                            <Rating value={testimonial.rating} readOnly size="small" />
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}

export default Testimonial;
