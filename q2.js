const fs = require('fs');
const rp = require('request-promise');
const path = require('path');

const url1 = "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD";
const url2 = "https://data.townofcary.org/api/v2/catalog/datasets/rdu-weather-history";
const url3 = "https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD";
const url4 = "https://api.github.com/users/mralexgray/repos";

(async function() {
  const data1 = rp(url1);
  const data2 = rp(url2);
  const data3 = rp(url3);
  const data4 = rp({
    uri: url4,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
});
  const promiseData = await Promise.all([data1, data2, data3, data4]);
  for (let i in promiseData) {
    console.log(i)
    fs.appendFileSync(path.join(__dirname, './output.txt'), promiseData[i]);
    i < promiseData.length - 1 && fs.appendFileSync(path.join(__dirname, './output.txt'), '\nURL123\n')
  }
}());
