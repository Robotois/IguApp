const groups = [
  { id: 1, title: 'Habitacion', active: 0, __typename: 'GroupItem' },
  { id: 2, title: 'Cocina', active: 1, __typename: 'GroupItem' },
  { id: 3, title: 'Comedor', active: 1, __typename: 'GroupItem' },
  { id: 4, title: 'Estudio', active: 0, __typename: 'GroupItem' },
];

const devices = [
  { id: 1, title: 'Luz Principal', active: 0, groupId: 1, __typename: 'DeviceItem' },
  { id: 2, title: 'Lavandora', active: 1, groupId: 1, __typename: 'DeviceItem' },
  { id: 3, title: 'Horno', active: 1, groupId: 1, __typename: 'DeviceItem' },
  { id: 4, title: 'Aire Acondicionado', groupId: 1, active: 0, __typename: 'DeviceItem' },
  { id: 5, title: 'Ventilador', active: 0, groupId: 1, __typename: 'DeviceItem' },
  { id: 6, title: 'Termostato', active: 0, groupId: 1, __typename: 'DeviceItem' },
];

export default {
  groups,
  devices,
};
