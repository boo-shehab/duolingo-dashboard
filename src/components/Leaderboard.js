import { useSelector } from 'react-redux';
import RankListItem from './RankListItem';
import RankListUsers from './RankListUsers';
import Top3 from './Top3';

const Leaderboard = () => {
  const {
    users, loading,
  } = useSelector((state) => state.users);
  return (
    <>
      {!loading
        ? <Top3 data={users.slice(0, 3)} />
        : ''}
      <RankListItem typeOfItem="Province" />
      <RankListItem typeOfItem="Neighborhood" />
      <RankListItem typeOfItem="Study Place" />
      <RankListUsers showTop3={false} />
    </>
  );
};

export default Leaderboard;
