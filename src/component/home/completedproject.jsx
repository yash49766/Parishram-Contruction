"use client"

import { useEffect, useRef, useState } from "react"
import { Box, Typography, Button, Container, Chip, useTheme, useMediaQuery } from "@mui/material"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import img1 from '../../assets/home/two-specialists-inspect-commercial-industrial-600nw-1712804020.webp';
import img2 from '../../assets/home/portfolio-1.jpg';
import img3 from '../../assets/home/service-1.jpg';
import img4 from '../../assets/home/banner-1.jpg';
import {useNavigate} from "react-router-dom";

const images = [
    img1,img2,img3,img4
]

const CompletedProject = () => {
    const theme = useTheme()
    const navigate = useNavigate()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const containerRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [mounted, setMounted] = useState(false)

    // Handle mounting
    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted || !containerRef.current) return

        const options = {
            root: containerRef.current,
            threshold: 0.5,
        }

        const callback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Number(entry.target.getAttribute("data-index"))
                    setActiveIndex(index)
                }
            })
        }

        const observer = new IntersectionObserver(callback, options)
        const imageElements = containerRef.current?.querySelectorAll(".project-image")

        imageElements?.forEach((img) => observer.observe(img))

        return () => observer.disconnect()
    }, [mounted])

    const handleViewAllProjects = () => {
        console.log("Navigate to gallery")
    }

    const scrollToImage = (index) => {
        if (!containerRef.current) return
        const element = containerRef.current?.querySelector(`[data-index="${index}"]`)
        element?.scrollIntoView({ behavior: "smooth", block: "center" })
    }

    if (!mounted) {
        return (
            <Container
                maxWidth="xl"
                sx={{
                    backgroundColor: "#ffffff",
                    minHeight: "100vh",
                    position: "relative",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "10%",
                        left: "5%",
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#FF572220",
                        borderRadius: "50%",
                        animation: "pulse 3s infinite",
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: "15%",
                        right: "8%",
                        width: "120px",
                        height: "120px",
                        backgroundColor: "#2196F320",
                        borderRadius: "50%",
                        animation: "pulse 3s infinite 1s",
                    },
                    "@keyframes pulse": {
                        "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                        "50%": { opacity: 0.6, transform: "scale(1.1)" },
                    },
                }}
            >
                <Box display="flex" alignItems="center" justifyContent="center" minHeight="100vh">
                    <Typography>Loading...</Typography>
                </Box>
            </Container>
        )
    }

    return (
        <Container
            maxWidth="xl"
            sx={{
                backgroundColor: "#ffffff",
                minHeight: "100vh",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "10%",
                    left: "5%",
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#FF572220",
                    borderRadius: "50%",
                    animation: "pulse 3s infinite",
                },
                "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "15%",
                    right: "8%",
                    width: "120px",
                    height: "120px",
                    backgroundColor: "#2196F320",
                    borderRadius: "50%",
                    animation: "pulse 3s infinite 1s",
                },
                "@keyframes pulse": {
                    "0%, 100%": { opacity: 0.3, transform: "scale(1)" },
                    "50%": { opacity: 0.6, transform: "scale(1.1)" },
                },
            }}
        >
            <Box display="flex" flexDirection={{ xs: "column", md: "row" }} minHeight="100vh" alignItems="center">
                {/* Left Side Content */}
                <Box flex="1" maxWidth={{ xs: "100%", md: "45%" }} p={{ xs: 3, md: 6 }} zIndex={2}>
                    <Box>
                        {/* Badge */}
                        <Chip
                            label="LATEST CREATIONS"
                            sx={{
                                backgroundColor: "#f8f9fa",
                                color: "#495057",
                                fontWeight: 600,
                                fontSize: "12px",
                                height: "36px",
                                borderRadius: "18px",
                                border: "1px solid #e9ecef",
                                mb: 3,
                                "&:hover": {
                                    backgroundColor: "#FF5722",
                                    color: "#fff",
                                    transform: "scale(1.05)",
                                },
                                transition: "all 0.3s ease",
                            }}
                        />

                        {/* Main Heading */}
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                fontSize: { xs: "2.5rem", md: "3.5rem", lg: "4rem" },
                                lineHeight: 1.1,
                                mb: 3,
                                background: "linear-gradient(135deg, #212529 0%, #495057 100%)",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                opacity: 0,
                                animation: "fadeInUp 0.8s ease forwards",
                                "@keyframes fadeInUp": {
                                    "0%": { opacity: 0, transform: "translateY(30px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            View Our{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: "linear-gradient(135deg, #FF5722 0%, #FF7043 100%)",
                                    backgroundClip: "text",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    display: "block",
                                }}
                            >
                                Completed Projects
                            </Box>
                        </Typography>

                        {/* Description */}
                        <Typography
                            variant="h6"
                            sx={{
                                color: "#6c757d",
                                fontWeight: 400,
                                lineHeight: 1.6,
                                mb: 4,
                                maxWidth: "400px",
                                opacity: 0,
                                animation: "fadeInUp 0.8s ease 0.2s forwards",
                                "@keyframes fadeInUp": {
                                    "0%": { opacity: 0, transform: "translateY(30px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            Discover our portfolio of exceptional projects that showcase our expertise and commitment to excellence.
                        </Typography>

                        {/* CTA Button */}
                        <Box
                            sx={{
                                opacity: 0,
                                animation: "fadeInUp 0.8s ease 0.4s forwards",
                                "@keyframes fadeInUp": {
                                    "0%": { opacity: 0, transform: "translateY(30px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            <Button
                                onClick={()=> navigate('/gallery')}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FF5722',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    fontWeight: 600,
                                    borderRadius: '9999px',
                                    border: "2px solid #FF5722",
                                    padding: '12px 24px',
                                    fontSize: '14px',
                                    position: 'relative',
                                    overflow: 'visible',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#fff',
                                        color: '#FF5722',

                                        '& .arrow-icon': {
                                            backgroundColor: '#fff',
                                            color: '#FF5722',
                                            border: '1px solid #FF5722',
                                        }
                                    },
                                }}
                            >
                                ALL PROJECT
                                <Box
                                    component="span"
                                    className="arrow-icon"
                                    sx={{
                                        ml: 1,
                                        backgroundColor: '#FF5722',
                                        color: '#fff',
                                        borderRadius: '50%',
                                        width: '24px',
                                        height: '24px',
                                        display: 'flex',
                                        border: '1px solid #fff',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        position: 'absolute',
                                        right: '-12px',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    <ArrowOutwardIcon sx={{ fontSize: 16 }} />
                                </Box>
                            </Button>
                        </Box>

                        {/* Statistics */}
                        <Box
                            display="flex"
                            gap={2}
                            mt={4}
                            sx={{
                                opacity: 0,
                                animation: "fadeInUp 0.8s ease 0.6s forwards",
                                "@keyframes fadeInUp": {
                                    "0%": { opacity: 0, transform: "translateY(30px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: "center",
                                    padding: theme.spacing(2),
                                    borderRadius: "16px",
                                    backgroundColor: "#f8f9fa",
                                    border: "1px solid #e9ecef",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    },
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 800, color: "#212529", mb: 0.5 }}>
                                    50+
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 500 }}>
                                    Projects
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    padding: theme.spacing(2),
                                    borderRadius: "16px",
                                    backgroundColor: "#f8f9fa",
                                    border: "1px solid #e9ecef",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    },
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 800, color: "#212529", mb: 0.5 }}>
                                    100%
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 500 }}>
                                    Satisfaction
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    textAlign: "center",
                                    padding: theme.spacing(2),
                                    borderRadius: "16px",
                                    backgroundColor: "#f8f9fa",
                                    border: "1px solid #e9ecef",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
                                        backgroundColor: "#fff",
                                    },
                                }}
                            >
                                <Typography variant="h4" sx={{ fontWeight: 800, color: "#212529", mb: 0.5 }}>
                                    5★
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#6c757d", fontWeight: 500 }}>
                                    Rating
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Right Side Image Gallery */}
                <Box
                    flex="1"
                    maxWidth={{ xs: "100%", md: "55%" }}
                    position="relative"
                    height={{ xs: "60vh", md: "100vh" }}
                    display="flex"
                    alignItems="center"
                >
                    <Box position="relative" width="100%" height="80%">
                        <Box
                            ref={containerRef}
                            sx={{
                                height: "80vh",
                                overflowY: "auto",
                                scrollBehavior: "smooth",
                                borderRadius: "24px",
                                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
                                position: "relative",
                                "&::-webkit-scrollbar": { display: "none" },
                                msOverflowStyle: "none",
                                scrollbarWidth: "none",
                            }}
                        >
                            {images.map((img, index) => (
                                <Box
                                    key={index}
                                    data-index={index}
                                    className="project-image"
                                    position="relative"
                                    sx={{
                                        marginTop: index === 0 ? 0 : "-80px",
                                    }}
                                >
                                    <Box
                                        component="img"
                                        src={img || "/placeholder.svg"}
                                        alt={`Project ${index + 1}`}
                                        sx={{
                                            width: "100%",
                                            height: "100vh",
                                            objectFit: "cover",
                                            display: "block",
                                            transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                            transform: activeIndex === index ? "translateY(0) scale(1)" : "translateY(80px) scale(0.95)",
                                            filter: activeIndex === index ? "brightness(1)" : "brightness(0.8)",
                                            position: "relative",
                                            zIndex: activeIndex === index ? 2 : 1,
                                        }}
                                    />

                                    {/* Project Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                                            opacity: 0,
                                            transition: "opacity 0.3s ease",
                                            display: "flex",
                                            alignItems: "flex-end",
                                            padding: theme.spacing(4),
                                            "&:hover": {
                                                opacity: 1,
                                            },
                                        }}
                                    >
                                        <Box color="white">
                                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                                Project {index + 1}
                                            </Typography>
                                            <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                                                Professional construction project showcasing our expertise
                                            </Typography>
                                            <Button
                                                endIcon={<ArrowForwardIcon />}
                                                sx={{
                                                    color: "#fff",
                                                    "&:hover": { color: "#FF7043" },
                                                    textTransform: "none",
                                                    fontWeight: 600,
                                                }}
                                            >
                                                View Details
                                            </Button>
                                        </Box>
                                    </Box>
                                </Box>
                            ))}
                        </Box>

                        {/* Centered Navigation Dots */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: "24px",
                                transform: "translateY(-50%)",
                                display: "flex",
                                flexDirection: "column",
                                gap: "12px",
                                zIndex: 10,
                            }}
                        >
                            {images.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => scrollToImage(index)}
                                    sx={{
                                        width: activeIndex === index ? "16px" : "12px",
                                        height: activeIndex === index ? "16px" : "12px",
                                        borderRadius: "50%",
                                        backgroundColor: activeIndex === index ? "#FF602E" : "rgba(255, 255, 255, 0.5)",
                                        cursor: "pointer",
                                        transition: "all 0.3s ease",
                                        boxShadow: activeIndex === index ? "0 4px 12px rgba(255, 255, 255, 0.3)" : "none",
                                        "&:hover": {
                                            backgroundColor: activeIndex === index ? "#fff" : "rgba(255, 255, 255, 0.8)",
                                            transform: "scale(1.2)",
                                        },
                                    }}
                                />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default CompletedProject