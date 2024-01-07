const express = require('express');
const app = express();
const path = require('path');
const promBundle = require('express-prom-bundle')


// Add prometheus middleware
const metricsMiddleware = promBundle({
    includeMethod: true, 
    includePath: true, 
    includeStatusCode: true, 
    includeUp: true,
    customLabels: {project_name: 'test-server', project_type: 'test_metrics_labels'},
    promClient: {
        collectDefaultMetrics: {
        }
      }
});

// Add the prometheus middleware to all routes
app.use(metricsMiddleware)

// Serve static files
app.use(express.static(path.join(__dirname, '')));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});