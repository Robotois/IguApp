export const devicesByGroup = (devices, groupId) =>
  devices.filter(dev => dev.groupId === groupId);

export const statsByGroup = (stats, groupId) =>
  stats.find(stat => stat.groupId === groupId) || {};

export const getGroup = (groups, groupId) =>
  groups.find(group => group.id === groupId);

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
