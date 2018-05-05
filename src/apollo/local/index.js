// import { withClientState } from 'apollo-link-state';
import resolvers from './Resolvers';

export { resolvers };

export const typeDefs = `
  scalar JSON
  type LocalGroup {
    id: Int!
    title: String!
    active: Int!
  }
  type Stat {
    id: Int!
    month: Int!
    today: Int!
    total: Int!
    lun: Int!
    mar: Int!
    mie: Int!
    jue: Int!
    vie: Int!
    sab: Int!
    dom: Int!
    groupId: Int!
  }
  type Device {
    id: Int!
    iguId: String!
    title: String!
    active: Int!
    groupId: int!
    icon: String!
  }
  type Query {
    device(id: String!): Device
    groupDevices(groupId: Int!): [Device]
  }
  type Mutation {
    addDevice(device: JSON!): Device
    addStat(stat: JSON!, groupId: Int!): Stat
    addGroup(group: JSON!): LocalGroup
    toggleDevice(id: Int!): Device
    updateDevice(iguId: String!, active: Int!)
  }
`;

export const defaults = {
  stats: [],
  localGroups: [],
  devices: [],
};
