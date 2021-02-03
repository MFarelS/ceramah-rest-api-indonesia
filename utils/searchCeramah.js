/**
 * @author Zahir Hadi Athallah <zhirrrstudio@gmail.com>
 * @license MIT
 */

const axios = require('axios');

const searchCeramah = (ustad) => {
   return new Promise( async (resolve, reject) => {
       await axios.get(`https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/ceramah/${ustad}.json`)
           .then(response => {
               if(response.status == 200){
                   const results = response.data

                   data = {}
                   data.code = response.status
                   data.message = "ok"
                   data.ustad = {
                       nama: results.name,
                       ceramah: results.ceramah
                   }

                   data.creator = "Zhirrr"
                   console.log(results)
                   resolve(data)
               }else{
                   reject({
                       code: 500,
                       success: false,
                       message: "Server Sedang Maintance"
                   })
               }
           })
           .catch(err => {
               reject(err)
           })
   })
}

module.exports = searchCeramah
