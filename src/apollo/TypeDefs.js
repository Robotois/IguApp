const typeDefs = `
  scalar JSON
  type Client {
    connected: Boolean!
  }
  type Group {
    id: Int!
    title: String!
    active: Int!
    devices: [Device]
    monthStats: Int!
    weekStats: JSON
  }
  type Device {
    id: Int!
    iguId: String!
    title: String!
    active: Boolean!
    icon: String!
    group: Group
  }
  type Query {
    groups: [Group]
    group(id: Int!): Group
    devices(id: Int!): [Device]
    globalStats: JSON
  }
`;

export default typeDefs;
