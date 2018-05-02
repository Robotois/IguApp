import gql from 'graphql-tag';

export const GET_GROUPS = gql`
  {
    groups @client {
      id
      title
      active
    }
  }
`;

export const GET_GROUP = gql`
  query GetGroup($id: Int!) {
    group(id: $id) @client {
      id
      title
      active
      devices
    }
  }
`;

export const GET_DEVICES = gql`
  query GetDevicesByGroup($groupId: Int!) {
    devices(groupId: $groupId) @client {
      id
      title
      active
    }
  }
`;
