const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/wirdData.json");

// Fonction utilitaire pour lire le fichier JSON
const getWirdData = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
};

module.exports = {
    // Récupérer absolument tout le contenu
    getAllWirds: (req, res) => {
        try {
            const data = getWirdData();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des données" });
        }
    },

    // Récupérer une variante spécifique (kaamil, khatam ou hafif)
    getWirdByType: (req, res) => {
        try {
            const data = getWirdData();
            const type = req.params.type.toLowerCase(); // Récupère le paramètre de l'URL

            if (!data[type]) {
                return res.status(404).json({ 
                    message: "Type de wird non trouvé. Utilisez 'kaamil', 'khatam' ou 'hafif'." 
                });
            }

            res.status(200).json({
                type: type,
                total_steps: data[type].length,
                steps: data[type]
            });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors du traitement de la requête" });
        }
    }
};