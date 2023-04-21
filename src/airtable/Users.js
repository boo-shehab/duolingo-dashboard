import Airtable from 'airtable';

const base = new Airtable({ apiKey: 'pat4pyZS6gErTkeIP.1a9e79f7fba71512a43d9732352288fff1de9d1d630ec85ef62cc8e0190be877' }).base('appmpkyp4MlIeMaS7');

const getUsers = async () => {
  const records = await base('User')
    .select({
      view: 'Daily Leaderboard (by XP)',
    })
    .all();
  return records.map((record) => ({
    ...record.fields,
  }));
};

export default getUsers;
