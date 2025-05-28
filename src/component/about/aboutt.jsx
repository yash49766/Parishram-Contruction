import React from 'react';
import {Box, Card, CardContent, Chip, Container, Grid, Typography} from "@mui/material";
import {
    Star,
    Verified,
    CheckCircle,
    AttachMoney,
} from '@mui/icons-material';


function Aboutt() {
    const whyChooseUs = [
        {
            title: '15+ Years Experience',
            description: 'Over a decade and a half of proven excellence in construction.',
            icon: <Star sx={{ fontSize: 40, color: '#ff9800' }} />,
            stat: '500+ Projects Completed'
        },
        {
            title: 'Certified Professionals',
            description: 'Licensed contractors and skilled craftsmen with industry certifications.',
            icon: <Verified sx={{ fontSize: 40, color: '#4caf50' }} />,
            stat: '100% Licensed Team'
        },
        {
            title: 'Quality Standards',
            description: 'Adherence to the highest safety protocols and building standards.',
            icon: <CheckCircle sx={{ fontSize: 40, color: '#2196f3' }} />,
            stat: 'Zero Safety Incidents'
        },
        {
            title: 'Transparent Pricing',
            description: 'Clear, competitive pricing with detailed estimates and no hidden costs.',
            icon: <AttachMoney sx={{ fontSize: 40, color: '#4caf50' }} />,
            stat: '100% Price Transparency'
        }
    ];
    return (
        <>
            <Box sx={{ py: 8, bgcolor: '#f8f9fa' }} >
                <Container maxWidth="lg">
                    <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
                        Why Choose BuildMaster
                    </Typography>
                    <Grid container spacing={4}>
                        {whyChooseUs.map((item, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    // ref={addToCardsRef}
                                    sx={{
                                        height: '100%',
                                        textAlign: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: 6
                                        }
                                    }}
                                >
                                    <CardContent sx={{ p: 4 }}>
                                        <Box sx={{ mb: 2 }}>
                                            {item.icon}
                                        </Box>
                                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                                            {item.description}
                                        </Typography>
                                        <Chip
                                            label={item.stat}
                                            color="primary"
                                            variant="outlined"
                                            size="small"
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default Aboutt;