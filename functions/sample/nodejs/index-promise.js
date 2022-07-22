/**
 * Get all dealerships
 */

const Cloudant = require('@cloudant/cloudant');

function main(params) {

    const cloudant = Cloudant({
        url: "https://31bf46a4-3f40-4035-bcca-edd199d0c0f0-bluemix.cloudantnosqldb.appdomain.cloud",
        plugins: { iamauth: { iamApiKey: params.azKhoG3QWI5_UBR19Sxc4GLsWJ4WmpddR3HrvM7VI2xk } }
    });


    let dbListPromise = getDbs(cloudant);
    return dbListPromise;
}

function getDbs(cloudant) {
    return new Promise((resolve, reject) => {
        cloudant.db.list()
            .then(body => {
                resolve({ dbs: body });
            })
            .catch(err => {
                reject({ err: err });
            });
    });
}
