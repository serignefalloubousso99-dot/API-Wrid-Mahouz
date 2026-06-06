const wirdData = require("../data/wirdData.json");

module.exports = {
    // Récupérer absolument tout le contenu
    getAllWirds: (req, res) => {
        try {
            res.status(200).json(wirdData);
        } catch (error) {
            res.status(500).json({ message: "Erreur lors de la récupération des données" });
        }
    },

    // Récupérer une variante spécifique (kaamil, khatam ou hafif)
    getWirdByType: (req, res) => {
        try {
            const type = req.params.type.toLowerCase(); // Récupère le paramètre de l'URL

            if (!wirdData[type]) {
                return res.status(404).json({ 
                    message: "Type de wird non trouvé. Utilisez 'kaamil', 'khatam' ou 'hafif'." 
                });
            }

            res.status(200).json({
                type: type,
                total_steps: wirdData[type].length,
                steps: wirdData[type]
            });
        } catch (error) {
            res.status(500).json({ message: "Erreur lors du traitement de la requête" });
        }
    }
};