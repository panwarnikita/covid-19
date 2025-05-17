

import React from 'react';

const StatsCards = ({ data }) => {
  const { currentStats } = data;

  return (
    <div className="cards">
      <div className="card">Cases: {currentStats?.cases ?? 'N/A'}</div>
      <div className="card">Recovered: {currentStats?.recovered ?? 'N/A'}</div>
      <div className="card">Deaths: {currentStats?.deaths ?? 'N/A'}</div>
    </div>
  );
};

export default StatsCards;
