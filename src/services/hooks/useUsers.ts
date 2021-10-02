import { useQuery, UseQueryOptions } from 'react-query';
import { api } from '../../services/api';

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
};

type GetUsersReponse = {
  totalCount: number;
  users: User[];
};

export async function getUsers(page: number): Promise<GetUsersReponse> {
  const { data, headers } = await api.get('users', {
    params: {
      page,
    },
  });

  const totalCount = Number(headers['x-total-count']);

  const users = data.users.map(user => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: new Date(user.created_at).toLocaleDateString('pr-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }),
    };
  });

  return { users, totalCount };
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10,
  });
}
