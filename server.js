const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Explicit route for the home page
app.get('/proposal', (req, res) => {
    res.sendFile(path.join(__dirname, 'DESIGN_ARK_ARCHITECTURAL_PROPOSAL.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

// Explicit route for the about us page
app.get('/about_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about_us.html'));
});

// Explicit route for the contact us page
app.get('/contact_us', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact_us.html'));
});

// Handle form submission for contact us page
app.post('/contact_us', (req, res) => {
    // In a real application, you would handle the form data here (e.g. send an email or save to DB).
    // For now, simply redirect back to the contact page or a thank you page.
    res.redirect('/contact_us');
});

// Explicit route for the portfolio page
app.get('/works', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.get('/portfolio', (req, res) => {
    res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Explicit route for the testimonials page
app.get('/blueprints', (req, res) => {
    res.sendFile(path.join(__dirname, 'testimonials.html'));
});

app.get('/testimonials', (req, res) => {
    res.sendFile(path.join(__dirname, 'testimonials.html'));
});

// 404 handler for any other routes
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
