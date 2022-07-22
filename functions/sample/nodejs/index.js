/**
 * Get all dealerships
 */

const Cloudant = require('@cloudant/cloudant');

function main(params) {

    const cloudant = Cloudant({
        url: "https://31bf46a4-3f40-4035-bcca-edd199d0c0f0-bluemix.cloudantnosqldb.appdomain.cloud",
        plugins: { iamauth: { iamApiKey: params.azKhoG3QWI5_UBR19Sxc4GLsWJ4WmpddR3HrvM7VI2xk } }
    });



    let dbList = getDbs(cloudant);
    return { dbs: dbList };
}

function getDbs(cloudant) {
    cloudant.db.list().then((body) => {
        body.forEach((db) => {
            dbList.push(db);
        });
    }).catch((err) => { console.log(err); });
}
