import { Stack } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';
import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

export function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine} href="/dashboard">Dashboard</NavLink>
        <NavLink icon={RiContactsLine} href="/users">Usuários</NavLink>
      </NavSection>

      <Stack spacing="4" mt="8" align="stretch">
        <NavSection title="AUTOMAÇÂO">
          <NavLink icon={RiInputMethodLine} href="/forms">Formulários</NavLink>
          <NavLink icon={RiGitMergeLine} href="/automation">Automação</NavLink>
        </NavSection>
      </Stack>
    </Stack>
  );
}
