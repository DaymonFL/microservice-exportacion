const { response } = require("express");
const { scd_casillasMSSQL } = require('../models/mssql/scd_casillas.model');
const { scd_casillasSQLite } = require('../models/sqlite/scd_casillas.model');
const { prep_actasSQLite } = require('../models/sqlite/prep_actas.model');
// const { uniq } = require("underscore");
const MYENVIROMENTWEB = process.env.MYENVIROMENTWEB;
const PORT = process.env.PORT;

const Migracion = async (req, res = response) => {
    let datos =[];
    try {
        const datosMSSQL = await scd_casillasMSSQL.findAll();
        if (datosMSSQL.length == 0){
            return res.status(400).send({
                ok:false,
                msg: 'Sin datos en base de datos'
            });
        }
        datosMSSQL.forEach((element)=>{
            datos.push({
                id_delegacion:element.id_delegacion,  
                id_distrito:element.id_distrito,
                id_seccion:element.id_seccion,
                tipo_casilla:element.tipo_casilla,
                clave_mdc:element.clave_mdc,
                empadronados:element.empadronados,
                lista_nominal:element.lista_nominal,
                id_usuario:element.id_usuario,
                fecha_alta:element.fecha_alta,
                fecha_modif:element.fecha_modif,
                estatus:element.estatus,
                acta_jg:element.acta_jg,
                acta_dmr:element.acta_dmr,
                acta_rp:element.acta_rp,
                acta_alcalde:  element.acta_alcalde
            })
        })
        console.log(datosMSSQL.length,' esto cuenta')
        await Promise.all(datos.map(async element => {
            await scd_casillasSQLite.bulkCreate({
                id_delegacion:element.id_delegacion,  
                id_distrito:element.id_distrito,
                id_seccion:element.id_seccion,
                tipo_casilla:element.tipo_casilla,
                clave_mdc:element.clave_mdc,
                empadronados:element.empadronados,
                lista_nominal:element.lista_nominal,
                id_usuario:element.id_usuario,
                fecha_alta:element.fecha_alta,
                fecha_modif:element.fecha_modif,
                estatus:element.estatus,
                acta_jg:element.acta_jg,
                acta_dmr:element.acta_dmr,
                acta_rp:element.acta_rp,
                acta_alcalde:  element.acta_alcalde
            });
        }));
        // await scd_casillasSQLite.bulkCreate(datos);
        const datosSQLite = await scd_casillasSQLite.findAll();

        return res.send({
            ok: true,
            msg: 'Se ha realizado la migracion',
            datosSQLite,
            //datosSQLite
        });
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            ok: false,
            msg: 'Error crítico en la migracion',
        }); 
    }
    
}

module.exports = {
    Migracion
}