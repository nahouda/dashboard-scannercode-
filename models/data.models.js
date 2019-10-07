const mongoose = require('mongoose');

var dataSchema = new mongoose.Schema({
    POLE: String,
    NOMDUTILISATEUR: String,
    PRODUIT: String,
    NDESERIE: String,
    UTILITE: String,
    PROJET: String,
    MAGASIN: String,
    REBUT: String,
    DATEENTREE: String,
    ENCOURSDUTILISATION:String,
    PROVENANCE: String,
    LivraisonPar: String,
    DATESORTIE: String,
    DESTINATION: String,
    PersonnelResponsabledelequipementSortie: String,

});

// Events
dataSchema.pre('save', function (next) {
    next();
});

mongoose.model('Data', dataSchema);