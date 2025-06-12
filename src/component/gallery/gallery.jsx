"use client"

import React, { useState, useEffect, useRef } from "react"
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    Chip,
    Tabs,
    Tab,
    Paper,
    useTheme,
    useMediaQuery,
} from "@mui/material"
import {
    Visibility,
    LocationOn,
    CalendarToday,
    Business,
    Home,
    Engineering,
    Apartment,
    Close,
} from "@mui/icons-material"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Img1 from '../../assets/home/portfolio-1.jpg'
import Img2 from '../../assets/home/img5.jpg'
import Img3 from '../../assets/home/img2.jpg'
import Img4 from '../../assets/home/img3.jpg'
import Img5 from '../../assets/home/img1.webp'
import Img6 from '../../assets/home/empty-parking-lot-parking-lane-outdoor-public-park_1127-3378.avif'
import Img7 from '../../assets/home/Screenshot 2025-06-12 101457.png'
import Img8 from '../../assets/home/rightImage.jpg'

gsap.registerPlugin(ScrollTrigger)

const projects = [
    {
        id: 1,
        title: "Urban Road Construction Project",
        description:
            "Completed a 4-lane city road with stormwater drainage, footpath, and street lighting for smoother urban mobility.",
        image: Img2,
        category: "Infrastructure",
        location: "Surat City",
        year: "2023",
        type: "Road Construction",
    },
    {
        id: 2,
        title: "Commercial Complex Site Development",
        description:
            "Site preparation, paver block installation, and utility connections for a high-traffic commercial complex.",
        image: Img1,
        category: "Commercial",
        location: "Dahej",
        year: "2023",
        type: "Site Work",
    },
    {
        id: 3,
        title: "Industrial Estate Site Work",
        description:
            "Handled earthwork, compound wall, drainage and road laying for a new industrial estate zone.",
        image: Img3,
        category: "Industrial",
        location: "GIDC",
        year: "2024",
        type: "Site Development",
    },
    {
        id: 4,
        title: "Asphalt Road Resurfacing Project",
        description:
            "Successfully resurfaced and widened a key city road with asphalt layering, road marking, and proper side slope finishing.",
        image: Img4,
        category: "Infrastructure",
        location: "Surat City",
        year: "2023",
        type: "Road Resurfacing",
    },
    {
        id: 5,
        title: "City Road Development",
        description:
            "Upgraded inner city road networks with asphalt topping, side drains, and pedestrian walkways.",
        image: Img5,
        category: "Urban Development",
        location: "Surat",
        year: "2024",
        type: "City Road Work",
    },
    {
        id: 6,
        title: "Paver Block Commercial Layout",
        description:
            "Installed heavy-duty paver blocks and drainage line for a commercial complex with high foot traffic.",
        image: Img6,
        category: "Commercial",
        location: "Palsana",
        year: "2023",
        type: "Paver Block",
    },
    {
        id: 7,
        title: "50 ML RESERVOIR WORK",
        description:
            "Laid underground drainage and sewer system across multiple lanes in a densely populated area.",
        image: Img7,
        category: "Commercial",
        location: "Dahej",
        year: "2024",
        type: "Drainage",
    },
    {
        id: 8,
        title: "Grading & Earthwork for Factory Plot",
        description:
            "Completed site grading, leveling, and soil filling for a manufacturing company’s upcoming factory construction.",
        image: Img8,
        category: "Industrial",
        location: "Shapar-Veraval",
        year: "2023",
        type: "Earthwork",
    }

]

const categories = ["All", "Commercial", "Industrial", "Infrastructure"]

const categoryIcons = {
    All: <Business />,
    Commercial: <Business />,
    Residential: <Home />,
    Industrial: <Engineering />,
    Infrastructure: <Apartment />,
}

export default function Galleryy() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [hoveredCard, setHoveredCard] = useState(null)
    const [zoomedImage, setZoomedImage] = useState(null)
    const [zoomTitle, setZoomTitle] = useState("")
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("md"))
    const cardsRef = useRef([])

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory)

    const handleCategoryChange = (event, newValue) => {
        setSelectedCategory(newValue)
    }

    useEffect(() => {
        if (!cardsRef.current) return

        gsap.fromTo(
            cardsRef.current,
            { y: 60, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.15,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0]?.parentNode,
                    start: "top 85%",
                },
            }
        )
    }, [selectedCategory])

    return (
        <Box sx={{ minHeight: "100vh", background: "#000", py: 4 }}>
            <Container maxWidth="xl">
                {/* Header */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant={isMobile ? "h3" : "h1"}
                        sx={{
                            fontWeight: 800,
                            mb: 3,
                            background: 'linear-gradient(45deg, #FFFFFF 30%, #FF6600 70%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textShadow: '0 0 30px rgba(255, 102, 0, 0.3)',
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }
                        }}
                    >
                        Our Project Gallery
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            maxWidth: 800,
                            color: "#bbb",
                            mx: "auto",
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            lineHeight: 1.6,
                        }}
                    >
                        Explore our portfolio of exceptional construction projects that showcase
                        innovation, quality, and architectural excellence across various sectors.
                    </Typography>
                </Box>

                {/* Filter Tabs */}
                <Paper
                    elevation={3}
                    sx={{
                        mb: 4,
                        borderRadius: 3,
                        overflow: "hidden",
                        backgroundColor: "#111",
                    }}
                >
                    <Tabs
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        variant={isMobile ? "scrollable" : "fullWidth"}
                        scrollButtons="auto"
                        sx={{
                            backgroundColor: "#fff",
                            "& .MuiTab-root": {
                                minHeight: 64,
                                fontSize: "1rem",
                                color: "#000",
                                fontWeight: 600,
                                textTransform: "none",
                                "&.Mui-selected": { color: "#000" },
                            },
                            "& .MuiTabs-indicator": {
                                height: 3,
                                backgroundColor: "#FF5A00",
                            },
                        }}
                    >
                        {categories.map((category) => (
                            <Tab
                                key={category}
                                label={
                                    <Box display="flex" alignItems="center" gap={1}>
                                        {categoryIcons[category]}
                                        {category}
                                    </Box>
                                }
                                value={category}
                            />
                        ))}
                    </Tabs>
                </Paper>

                {/* Project Cards */}
                <Grid container spacing={3}>
                    {filteredProjects.map((project, index) => (
                        <Grid
                            item size={{xs:12,sm:6,lg:4,xl:3}}
                            key={project.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                        >
                            <Card
                                onMouseEnter={() => setHoveredCard(project.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                sx={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    backgroundColor: "#1a1a1a",
                                    color: "#fff",
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    transition: "all 0.3s",
                                    boxShadow:
                                        hoveredCard === project.id
                                            ? "0 20px 40px rgba(0,0,0,0.15)"
                                            : "0 4px 20px rgba(0,0,0,0.08)",
                                    "&:hover .project-image": {
                                        transform: "scale(1.05)",
                                    },
                                }}
                            >
                                <Box sx={{ position: "relative", overflow: "hidden" }}>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={project.image}
                                        alt={project.title}
                                        className="project-image"
                                        sx={{ transition: "transform 0.3s ease-in-out" }}
                                    />
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 12,
                                            right: 12,
                                            opacity: isMobile || hoveredCard === project.id ? 1 : 0,
                                            transition: "opacity 0.3s ease",
                                        }}
                                    >
                                        <IconButton
                                            onClick={() => {
                                                setZoomedImage(project.image)
                                                setZoomTitle(project.title)
                                            }}
                                            sx={{
                                                backgroundColor: "#2c3e50",
                                                color: "#ffffff",
                                                "&:hover": {
                                                    backgroundColor: "#ffffff",
                                                    color: "#2c3e50",
                                                    border: "1px solid #2c3e50",
                                                },
                                            }}
                                        >
                                            <Visibility />
                                        </IconButton>
                                    </Box>
                                    <Chip
                                        label={project.category}
                                        size="small"
                                        sx={{
                                            position: "absolute",
                                            top: 12,
                                            left: 12,
                                            backgroundColor: "#FF5A00",
                                            color: "#fff",
                                            fontWeight: 600,
                                        }}
                                    />
                                </Box>

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        sx={{ fontWeight: 700, color: "#fff", mb: 1.5 }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 2,
                                            color: "#ccc",
                                            lineHeight: 1.6,
                                            display: "-webkit-box",
                                            WebkitLineClamp: 3,
                                            WebkitBoxOrient: "vertical",
                                            overflow: "hidden",
                                        }}
                                    >
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <LocationOn sx={{ fontSize: 16, color: "#888" }} />
                                            <Typography variant="caption" sx={{ color: "#aaa" }}>
                                                {project.location}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <CalendarToday sx={{ fontSize: 16, color: "#888" }} />
                                            <Typography variant="caption" sx={{ color: "#aaa" }}>
                                                Completed {project.year}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Zoom Overlay */}
                {zoomedImage && (
                    <Box
                        sx={{
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100vw",
                            height: "100vh",
                            backgroundColor: "rgba(0, 0, 0, 0.95)",
                            zIndex: 1500,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onClick={() => setZoomedImage(null)}
                    >
                        <IconButton
                            onClick={() => setZoomedImage(null)}
                            sx={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                color: "#fff",
                                backgroundColor: "rgba(255,255,255,0.1)",
                                "&:hover": {
                                    backgroundColor: "rgba(255,255,255,0.2)",
                                },
                            }}
                        >
                            <Close />
                        </IconButton>
                        <Typography variant="h5" sx={{ color: "#fff", mb: 2 }}>
                            {zoomTitle}
                        </Typography>
                        <Box
                            component="img"
                            src={zoomedImage}
                            alt="Zoomed"
                            sx={{
                                width: { xs: "90%", sm: "80%", md: "750px" },
                                height: "auto",
                                maxHeight: "80vh",
                                objectFit: "contain",
                                borderRadius: 3,
                                boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
                                backgroundColor: "#111",
                                padding: "10px",
                            }}
                        />
                    </Box>
                )}
            </Container>
        </Box>
    )
}
