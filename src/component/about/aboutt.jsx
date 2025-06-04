import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
    Paper,
    LinearProgress,
    useTheme,
    useMediaQuery,
    Button,
    Divider,
    IconButton
} from "@mui/material";
import {
    Construction,
    Engineering,
    Handyman,
    Security,
    Speed,
    Groups,
    Timeline,
    EmojiEvents,
    ArrowForward,
    Phone,
    Email,
    LocationOn,
    Star
} from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';

function Aboutt() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"))
    const navigate = useNavigate()

    const stats = [
        { number: '500+', label: 'Projects Completed', icon: <Construction sx={{ fontSize: { xs: 30, md: 40 } }} />, color: '#FF6600' },
        { number: '15+', label: 'Years Experience', icon: <Timeline sx={{ fontSize: { xs: 30, md: 40 } }} />, color: '#FF6600' },
        { number: '50+', label: 'Expert Team', icon: <Groups sx={{ fontSize: { xs: 30, md: 40 } }} />, color: '#FF6600' },
        { number: '98%', label: 'Client Satisfaction', icon: <EmojiEvents sx={{ fontSize: { xs: 30, md: 40 } }} />, color: '#FF6600' }
    ];

    const services = [
        {
            title: 'Residential Construction',
            description: 'Custom homes and residential projects built with precision and care for your family\'s future',
            icon: <Construction sx={{ fontSize: { xs: 35, md: 45 }, color: '#FF6600' }} />,
            features: ['Custom Design', 'Quality Materials', 'Timely Delivery']
        },
        {
            title: 'Commercial Building',
            description: 'Office complexes, retail spaces, and commercial infrastructure that drives business success',
            icon: <Engineering sx={{ fontSize: { xs: 35, md: 45 }, color: '#FF6600' }} />,
            features: ['Modern Design', 'Safety Compliance', 'Cost Effective']
        },
        {
            title: 'Renovation & Remodeling',
            description: 'Transform existing spaces with modern design and enhanced functionality',
            icon: <Handyman sx={{ fontSize: { xs: 35, md: 45 }, color: '#FF6600' }} />,
            features: ['Space Optimization', 'Modern Upgrades', 'Value Addition']
        },
        {
            title: 'Safety & Quality',
            description: 'Highest standards of safety protocols and quality assurance in every project',
            icon: <Security sx={{ fontSize: { xs: 35, md: 45 }, color: '#FF6600' }} />,
            features: ['Safety First', 'Quality Control', 'Licensed Work']
        }
    ];

    const skills = [
        { name: 'Project Management', value: 95, icon: <Timeline /> },
        { name: 'Quality Control', value: 98, icon: <Star /> },
        { name: 'Safety Standards', value: 100, icon: <Security /> },
        { name: 'Client Satisfaction', value: 96, icon: <Groups /> },
        { name: 'On-time Delivery', value: 92, icon: <Speed /> }
    ];

    const teamMembers = [
        {
            name: 'Chetan Kapadiya',
            role: 'CEO & Founder',
            experience: '20+ Years',
            avatar: 'CK',
            description: 'Visionary leader with expertise in large-scale construction projects'
        },
        {
            name: 'Haresh Kapadiya',
            role: 'Project Manager',
            experience: '15+ Years',
            avatar: 'HK',
            description: 'Expert in coordinating complex construction timelines and resources'
        },
        {
            name: '',
            role: 'Lead Engineer',
            experience: '12+ Years',
            avatar: '',
            description: 'Structural engineer specializing in innovative construction solutions'
        }
    ];
    const features = [
        "Fast Delivery",
        "Quality Assured",
        "Expert Team",
        "24/7 Support",
        "Competitive Pricing",
        "Modern Technology",
        "Eco-Friendly",
        "Licensed & Insured",
    ]

    const achievements = [
        'ISO 9001:2015 Certified',
        'Green Building Council Member',
        'Safety Excellence Award 2023',
        'Best Construction Company 2022'
    ];

    return (
        <Box sx={{
            background: '#000',
            minHeight: '100vh',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255, 102, 0, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255, 102, 0, 0.05) 0%, transparent 50%)`,
                    zIndex: 0
                }}
            />

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, py: { xs: 4, md: 8 } }}>
                {/* Hero Section */}
                <Box sx={{
                    textAlign: 'center',
                    mb: { xs: 6, md: 10 },
                    position: 'relative'
                }}>
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
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }
                        }}
                    >
                        About Our Company
                    </Typography>
                    <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />
                    <Typography
                        variant={isMobile ? "h6" : "h4"}
                        sx={{
                            mb: 6,
                            color: 'rgba(255, 255, 255, 0.9)',
                            maxWidth: '900px',
                            mx: 'auto',
                            lineHeight: 1.8,
                            fontWeight: 300,
                            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem' }
                        }}
                    >
                        Building dreams into reality with over 15 years of excellence in construction.
                        We transform visions into exceptional structures that stand the test of time.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => navigate('/contact')}
                            endIcon={<Phone />}
                            sx={{
                                backgroundColor: '#FF6600',
                                color: 'white',
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                boxShadow: '0 8px 25px rgba(255, 102, 0, 0.4)',
                                '&:hover': {
                                    backgroundColor: '#E55A00',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 12px 35px rgba(255, 102, 0, 0.6)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Contact Us
                        </Button>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/gallery')}
                            endIcon={<ArrowForward />}
                            sx={{
                                borderColor: '#FFFFFF',
                                color: '#FFFFFF',
                                px: 4,
                                py: 1.5,
                                borderRadius: 3,
                                fontSize: '1.1rem',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderWidth: 2,
                                '&:hover': {
                                    borderColor: '#FF6600',
                                    backgroundColor: 'rgba(255, 102, 0, 0.1)',
                                    color: '#FF6600',
                                    transform: 'translateY(-2px)'
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Our Projects
                        </Button>
                    </Box>
                </Box>

                {/* Stats Section */}
                <Grid container spacing={3} sx={{ mb: { xs: 8, md: 12 } }}>
                    {stats.map((stat, index) => (
                        <Grid item size={{xs:6,md:3}} key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, md: 4 },
                                    textAlign: 'center',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(20px)',
                                    borderRadius: 4,
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    '&:hover': {
                                        transform: 'translateY(-8px) scale(1.02)',
                                        boxShadow: '0 20px 40px rgba(255, 102, 0, 0.3)',
                                        '&::before': {
                                            transform: 'translateX(0)'
                                        }
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '4px',
                                        background: 'linear-gradient(90deg, #FF6600, #FF8533)',
                                        transform: 'translateX(-100%)',
                                        transition: 'transform 0.3s ease'
                                    }
                                }}
                            >
                                <Box sx={{ mb: 2, color: stat.color }}>
                                    {stat.icon}
                                </Box>
                                <Typography variant={isMobile ? "h5" : "h3"} sx={{ fontWeight: 'bold', color: '#000000', mb: 1 }}>
                                    {stat.number}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                                    {stat.label}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Main Content Section */}
                <Grid container spacing={4} sx={{ mb: { xs: 8, md: 12 } }}>
                    <Grid item size={{xs:12,lg:6}}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 5 },
                                borderRadius: 4,
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                height: '100%',
                                position: 'relative'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                <Box sx={{
                                    width: 6,
                                    height: 60,
                                    backgroundColor: '#FF6600',
                                    borderRadius: 3,
                                    mr: 3
                                }} />
                                <Typography variant={isMobile ? "h4" : "h3"} sx={{ fontWeight: 'bold', color: '#000000' }}>
                                    Our Story
                                </Typography>
                            </Box>

                            <Typography variant="h6" sx={{ mb: 3, lineHeight: 1.8, color: 'text.primary', fontWeight: 400 }}>
                                Founded in 2008, we began as a small family business with a simple mission:
                                to build exceptional structures that exceed our clients' expectations.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8, color: 'text.secondary' }}>
                                Today, we've grown into a trusted construction company known for our attention to detail,
                                innovative solutions, and unwavering commitment to quality. Every project we undertake
                                is a testament to our dedication to craftsmanship.
                            </Typography>

                            <Divider sx={{ my: 3 }} />

                            <Typography variant="h6" sx={{ mb: 2, color: '#000000', fontWeight: 'bold' }}>
                                Our Achievements
                            </Typography>
                            <Grid container spacing={1}>
                                {achievements.map((achievement, index) => (
                                    <Grid item size={{xs:12,sm:6}} key={index}>
                                        <Chip
                                            icon={<Star sx={{ fontSize: 16 }} />}
                                            label={achievement}
                                            size="small"
                                            sx={{
                                                backgroundColor: 'rgba(255, 102, 0, 0.1)',
                                                color: '#FF6600',
                                                fontWeight: 'medium',
                                                mb: 1,
                                                '& .MuiChip-icon': { color: '#FF6600' }
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid>

                    <Grid item size={{xs:12,lg:6}}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 3, md: 5 },
                                borderRadius: 4,
                                background: 'rgba(255, 255, 255, 0.95)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                height: '100%'
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                                <Box sx={{
                                    width: 6,
                                    height: 60,
                                    backgroundColor: '#FF6600',
                                    borderRadius: 3,
                                    mr: 3
                                }} />
                                <Typography variant={isMobile ? "h4" : "h3"} sx={{ fontWeight: 'bold', color: '#000000' }}>
                                    Our Expertise
                                </Typography>
                            </Box>

                            {skills.map((skill, index) => (
                                <Box key={index} sx={{ mb: 4 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box sx={{ color: '#FF6600', display: 'flex', alignItems: 'center' }}>
                                                {skill.icon}
                                            </Box>
                                            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                                                {skill.name}
                                            </Typography>
                                        </Box>
                                        <Typography variant="h6" sx={{ color: '#FF6600', fontWeight: 'bold' }}>
                                            {skill.value}%
                                        </Typography>
                                    </Box>
                                    <LinearProgress
                                        variant="determinate"
                                        value={skill.value}
                                        sx={{
                                            height: 12,
                                            borderRadius: 6,
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            '& .MuiLinearProgress-bar': {
                                                borderRadius: 6,
                                                backgroundColor: '#FF6600',
                                                backgroundImage: 'linear-gradient(45deg, #FF6600, #FF8533)',
                                                boxShadow: '0 2px 10px rgba(255, 102, 0, 0.3)'
                                            }
                                        }}
                                    />
                                </Box>
                            ))}
                        </Paper>
                    </Grid>
                </Grid>

                {/* Services Section */}
                <Box sx={{ mb: { xs: 8, md: 12 } }}>
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '4.5rem' }
                            }}
                        >
                            Our Services
                        </Typography>
                        <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />
                        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', mx: 'auto' }}>
                            Comprehensive construction solutions tailored to meet your unique needs and exceed expectations
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {services.map((service, index) => (
                            <Grid item size={{xs:12,sm:6,lg:3}} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        borderRadius: 4,
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            transform: 'translateY(-12px)',
                                            boxShadow: '0 25px 50px rgba(255, 102, 0, 0.25)',
                                            '& .service-icon': {
                                                transform: 'scale(1.1) rotate(5deg)'
                                            }
                                        }
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            px: { xs: 2, md: 2 },
                                            py: { xs: 3, md: 4 },
                                            textAlign: 'center',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Box
                                            className="service-icon"
                                            sx={{
                                                mb: 3,
                                                transition: 'transform 0.3s ease',
                                                width: { xs: 64, sm: 72, md: 80 },
                                                height: { xs: 48, sm: 56, md: 60 },
                                                borderRadius: '45%', // elliptical shape
                                                backgroundColor: 'rgba(255, 102, 0, 0.1)',
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto'
                                            }}
                                        >
                                            {service.icon}
                                        </Box>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, color: '#000000' }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, mb: 3, flexGrow: 1 }}>
                                            {service.description}
                                        </Typography>
                                        <Box sx={{ mt: 'auto' }}>
                                            {service.features.map((feature, idx) => (
                                                <Chip
                                                    key={idx}
                                                    label={feature}
                                                    size="small"
                                                    sx={{
                                                        m: 0.5,
                                                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                                        color: 'text.secondary',
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Box>

                {/* Team Section */}
                <Box sx={{ mb: { xs: 8, md: 12 } }}>
                    <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
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
                                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '4.5rem' }
                            }}
                        >
                            Meet Our Team
                        </Typography>
                        <Box sx={{ width: '100px', height: '4px', backgroundColor: '#FF6600', mx: 'auto', mb: 4, borderRadius: 2 }} />
                        <Typography variant="h6" sx={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '600px', mx: 'auto' }}>
                            Experienced professionals dedicated to bringing your construction dreams to life
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {teamMembers.map((member, index) => (
                            <Grid item size={{xs:12,sm:6,lg:4}} key={index}>
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, md: 4 },
                                        textAlign: 'center',
                                        borderRadius: 4,
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                                        }
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: { xs: 80, md: 100 },
                                            height: { xs: 80, md: 100 },
                                            mx: 'auto',
                                            mb: 3,
                                            backgroundColor: '#FF6600',
                                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                                            fontWeight: 'bold',
                                            color: 'white',
                                            boxShadow: '0 8px 25px rgba(255, 102, 0, 0.3)'
                                        }}
                                    >
                                        {member.avatar}
                                    </Avatar>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1, color: '#000000' }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 1, color: '#FF6600', fontWeight: 'medium' }}>
                                        {member.role}
                                    </Typography>
                                    <Chip
                                        label={member.experience}
                                        sx={{
                                            backgroundColor: '#000000',
                                            color: 'white',
                                            fontWeight: 'bold',
                                            mb: 2
                                        }}
                                    />
                                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, mt: 2 }}>
                                        {member.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box
                    sx={{
                        minHeight: "100vh",
                        background: "linear-gradient(135deg, #FFF7ED 0%, #FFFFFF 50%, #FFF7ED 100%)",
                        py: { xs: 4, md: 8 },
                        px: { xs: 2, md: 4 },
                    }}
                >
                    <Container maxWidth="xl">
                        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 6, md: 8 } }}>
                            {/* Why Choose Us Section */}
                            <Paper
                                elevation={0}
                                sx={{
                                    pt: { xs: 4, md: 8, lg: 8 },
                                    pb: { xs: 2 },
                                    px: { xs: 4, md: 8, lg: 8 },
                                    textAlign: "center",
                                    borderRadius: 4,
                                    background: "rgba(255, 255, 255, 0.95)",
                                    backdropFilter: "blur(20px)",
                                    border: "1px solid rgba(255, 255, 255, 0.2)",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <Box sx={{ mb: { xs: 6, md: 8 } }}>
                                    <Typography
                                        variant={isMobile ? "h4" : "h3"}
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 2,
                                            color: "#000000",
                                            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3rem" },
                                        }}
                                    >
                                        Why Choose Parishram Construction?
                                    </Typography>
                                    <Typography
                                        variant={isMobile ? "h6" : "h5"}
                                        sx={{
                                            color: "text.secondary",
                                            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                                        }}
                                    >
                                        Experience the difference that expertise and dedication make
                                    </Typography>
                                </Box>

                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                        gap: { xs: 2, sm: 3, md: 3 },
                                        alignItems: "center",
                                    }}
                                >
                                    {features.map((feature, index) => (
                                        <Chip
                                            key={index}
                                            label={feature}
                                            size={isSmall ? "medium" : "large"}
                                            sx={{
                                                px: { xs: 2, sm: 3, md: 4 },
                                                py: { xs: 1.5, sm: 2, md: 3 },
                                                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                                                fontWeight: "bold",
                                                borderRadius: "50px",
                                                transition: "all 0.3s ease",
                                                cursor: "pointer",
                                                minWidth: { xs: "auto", sm: "120px" },
                                                height: { xs: "40px", sm: "48px", md: "56px" },
                                                ...(index % 3 === 0
                                                    ? {
                                                        backgroundColor: "#FF6600",
                                                        color: "white",
                                                        "&:hover": {
                                                            backgroundColor: "#E55A00",
                                                            transform: "translateY(-4px)",
                                                            boxShadow: "0 8px 25px rgba(255, 102, 0, 0.3)",
                                                        },
                                                    }
                                                    : index % 3 === 1
                                                        ? {
                                                            backgroundColor: "#000000",
                                                            color: "white",
                                                            "&:hover": {
                                                                backgroundColor: "#333333",
                                                                transform: "translateY(-4px)",
                                                                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
                                                            },
                                                        }
                                                        : {
                                                            backgroundColor: "#FFFFFF",
                                                            color: "#000000",
                                                            border: "2px solid #FF6600",
                                                            "&:hover": {
                                                                backgroundColor: "#FF6600",
                                                                color: "white",
                                                                transform: "translateY(-4px)",
                                                                boxShadow: "0 8px 25px rgba(255, 102, 0, 0.3)",
                                                            },
                                                        }),
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Paper>

                            {/* Call to Action Section */}
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 4, md: 8, lg: 7 },
                                    textAlign: "center",
                                    borderRadius: 4,
                                    background: "linear-gradient(135deg, #FF6600 0%, #7D351B 100%)",
                                    position: "relative",
                                    overflow: "hidden",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background:
                                            "linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(255,255,255,0.1) 100%)",
                                        pointerEvents: "none",
                                    },
                                }}
                            >
                                <Box sx={{ position: "relative", zIndex: 1 }}>
                                    <Typography
                                        variant={isMobile ? "h4" : "h3"}
                                        sx={{
                                            fontWeight: "bold",
                                            mb: 2,
                                            color: "white",
                                            fontSize: { xs: "1.75rem", sm: "2.125rem", md: "3rem" },
                                        }}
                                    >
                                        Ready to Start Your Project?
                                    </Typography>
                                    <Typography
                                        variant={isMobile ? "body1" : "h6"}
                                        sx={{
                                            mb: { xs: 4, md: 6 },
                                            opacity: 1,
                                            maxWidth: "600px",

                                            mx: "auto",
                                            fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" },
                                            lineHeight: 1.6,
                                        }}
                                    >
                                        Let's discuss your construction needs and bring your vision to life with our expertise and dedication.
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: { xs: "column", sm: "row" },
                                            gap: { xs: 2, sm: 3, md: 4 },
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            onClick={() => navigate('/contact')}
                                            size={isMobile ? "large" : "large"}
                                            sx={{
                                                backgroundColor: "white",
                                                color: "black",
                                                px: { xs: 4, sm: 6, md: 5 },
                                                py: { xs: 1.5, sm: 2, md: 1.5 },
                                                fontSize: { xs: "1rem", sm: "1.125rem", md: "1rem" },
                                                fontWeight: "bold",
                                                borderRadius: "50px",
                                                minWidth: { xs: "200px", sm: "180px", md: "200px" },
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    backgroundColor: "#f5f5f5",
                                                    transform: "translateY(-4px)",
                                                    boxShadow: "0 12px 30px rgba(255, 255, 255, 0.3)",
                                                },
                                            }}
                                        >
                                            Get Free Quote
                                        </Button>

                                        <Button
                                            variant="outlined"
                                            onClick={() => navigate('/gallery')}
                                            size={isMobile ? "large" : "large"}
                                            sx={{
                                                borderColor: "white",
                                                borderWidth: "2px",
                                                color: "white",
                                                px: { xs: 4, sm: 6, md: 5 },
                                                py: { xs: 1.5, sm: 2, md: 1.3 },
                                                fontSize: { xs: "1rem", sm: "1.125rem", md: "1rem" },
                                                fontWeight: "bold",
                                                borderRadius: "50px",
                                                minWidth: { xs: "200px", sm: "180px", md: "200px" },
                                                transition: "all 0.3s ease",
                                                "&:hover": {
                                                    backgroundColor: "white",
                                                    color: "black",
                                                    borderColor: "white",
                                                    transform: "translateY(-4px)",
                                                    boxShadow: "0 12px 30px rgba(255, 255, 255, 0.3)",
                                                },
                                            }}
                                        >
                                            View Portfolio
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    </Container>
                </Box>
            </Container>
        </Box>
    );
}

export default Aboutt;