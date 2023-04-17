import Airtable from 'airtable';
import dummyData from './dummyData';

const base = new Airtable({ apiKey: 'pat4pyZS6gErTkeIP.1a9e79f7fba71512a43d9732352288fff1de9d1d630ec85ef62cc8e0190be877' }).base('appmpkyp4MlIeMaS7');

const getUsers = async (filtered = ['City', 'All']) => {
  const filterByFormula = filtered[1] === 'All' ? '' : `{${filtered[0]}} = '${filtered[1]}'`;
  const records = await base('User')
    .select({
      maxRecords: 50,
      view: 'Daily Leaderboard (by XP)',
      filterByFormula,
    })
    .all();
  return records.map((record) => ({
    ...record.fields,
    ...dummyData[Math.floor(Math.random() * dummyData.length)],
  }));
};

export default getUsers;
