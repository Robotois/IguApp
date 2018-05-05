import gql from 'graphql-tag';

export const GET_DEVICES = gql`
  {
    devices @client {
      id
      iguId
      title
      active
      icon
      groupId
    }
  }
`;

export const GET_GROUPS = gql`
  {
    localGroups @client {
      id
      title
      active
    }
  }
`;

export const GET_ALL = gql`
  {
    localGroups @client {
      id
      title
      active
    }
    devices @client {
      id
      iguId
      title
      active
      icon
      groupId
    }
    stats @client {
      id
      month
      today
      total
      lun
      mar
      mie
      jue
      vie
      sab
      dom
      groupId
    }
  }
`;

export const ADD_GROUP = gql`
  mutation addGroup($group: JSON!) {
    addGroup(group: $group) @client {
      id
      active
    }
  }
`;

export const GET_GROUP_DEVICES = gql`
  query groupDevices($groupId: Int!) {
    groupDevices(groupId: $groupId) @client
  }
`;

export const GET_DEVICE = gql`
  query device($id: String!) {
    device(id: $id) @client {
      id
      iguId
      title
      active
      groupId
    }
  }
`;

export const ADD_DEVICE = gql`
  mutation addDevice($device: JSON!) {
    addDevice(device: $device) @client {
      id
      active
    }
  }
`;

export const UPDATE_DEVICE = gql`
  mutation updateDevice($iguId: String!, $active: Int!) {
    updateDevice(iguId: $iguId, active: $active) @client
  }
`;

export const TOGGLE_DEVICE = gql`
  mutation toggleDevice($id: String!) {
    toggleDevice(id: $id) @client
  }
`;

export const GET_STATS = gql`
  {
    stats @client {
      id
      month
      today
      total
      lun
      mar
      mie
      jue
      vie
      sab
      dom
      groupId
    }
  }
`;

export const ADD_STAT = gql`
  mutation addStat($stat: JSON!, $groupId: Int!) {
    addStat(stat: $stat, groupId: $groupId) @client
  }
`;
