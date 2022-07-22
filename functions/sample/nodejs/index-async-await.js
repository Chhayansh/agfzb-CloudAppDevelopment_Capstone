/**
 * Get all dealerships
 */

 const Cloudant = require('@cloudant/cloudant');


 async function main(params) {
    const cloudant = Cloudant({
        url: "https://31bf46a4-3f40-4035-bcca-edd199d0c0f0-bluemix.cloudantnosqldb.appdomain.cloud",
        plugins: { iamauth: { iamApiKey: params.azKhoG3QWI5_UBR19Sxc4GLsWJ4WmpddR3HrvM7VI2xk } }
    });

 
 
     try {
         let dbList = await cloudant.db.list();
         return { "dbs": dbList };
     } catch (error) {
         return { error: error.description };
     }
 
 }