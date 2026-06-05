const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// MIDDLEWARES
app.use(cors()); // Permet l'accès public à l'API pour les autres applications
app.use(express.json());

// INJECTION DES ROUTES
app.use("/api/wird", require("./routes/wirdRoutes"));

// Lancement du serveur
app.listen(port, () => {
    console.log(`L'API Wird Mahfouz est en ligne sur le port ${port}`);
});