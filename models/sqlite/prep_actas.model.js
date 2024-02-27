const { DataTypes } = require("sequelize");
const { sqliteconnector } = require("../../database/configLite");

const prep_actasSQLite = sqliteconnector.define('prep_actas', {
    id_acta:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    id_delegacion:{ type: DataTypes.INTEGER },  
    id_distrito:{ type: DataTypes.INTEGER },
    id_seccion:{ type: DataTypes.INTEGER },
    tipo_casilla:{ type: DataTypes.STRING },
    clavemdc:{ type: DataTypes.STRING },
    acta_jg:{ type: DataTypes.STRING },
    acta_jd:{ type: DataTypes.STRING},
    acta_dmr:{ type: DataTypes.STRING },
    acta_rp:{ type: DataTypes.STRING },
    archivo_jg:{ type: DataTypes.STRING },
    archivo_jd:{ type: DataTypes.STRING },
    archivo_dmr:{ type: DataTypes.STRING },
    archivo_rp:{ type: DataTypes.STRING },
    jd_md5:{ type: DataTypes.STRING },
    dmr_md5:{ type: DataTypes.STRING },
    rp_md5:{ type: DataTypes.STRING },
    fecha_jd:{ type: DataTypes.STRING },
    fecha_dmr:{ type: DataTypes.STRING },
    fecha_rp:{ type: DataTypes.STRING }
}, 
{
    freezeTableName: true
});

module.exports = {
    prep_actasSQLite
};