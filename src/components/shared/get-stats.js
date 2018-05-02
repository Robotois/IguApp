const weekDays = {
  1: 'Lun',
  2: 'Mar',
  3: 'Mie',
  4: 'Jue',
  5: 'Vie',
  6: 'Sab',
  7: 'Dom',
};

export const weekChartValues = weekStats =>
  Object.keys(weekDays).map(key => (weekStats[key] ? {
    x: weekDays[key],
    y: weekStats[key],
  } : {
    x: weekDays[key],
    y: 0,
  }));
