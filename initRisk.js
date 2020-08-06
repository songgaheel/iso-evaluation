const mongoose = require('mongoose');
const RiskSchema = require('./schema/RiskSchema'); // require default data
const lightrisk = require('./src/risk-data/light.json');

const Risk = mongoose.model('risk', RiskSchema.riskSchema);
const light = new Risk(lightrisk);

async function initrisk() {
    const data = await light.save();
    console.log(data);
}
initrisk();