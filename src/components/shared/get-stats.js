const weekDays = {
  lun: 'Lun',
  mar: 'Mar',
  mie: 'Mie',
  jue: 'Jue',
  vie: 'Vie',
  sab: 'Sab',
  dom: 'Dom',
};

export const weekChartValues = stats =>
  Object.keys(weekDays).map(key => (stats[key] ? {
    x: weekDays[key],
    y: stats[key],
  } : {
    x: weekDays[key],
    y: 0,
  }));
