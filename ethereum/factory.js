import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0a4D2A800bd091e5f0a0c9BEA711E6807236EA72'
);

export default instance;
