import gql from 'graphql-tag';

export const GET_GROUPS = gql`
  {
    groups {
      id
      title
      active
      stats
      devices {
        id
        iguId
        title
        active
        icon
      }
    }
  }
`;

export const GET_GLOBAL_STATS = gql`
  {
    globalStats
  }
`;
