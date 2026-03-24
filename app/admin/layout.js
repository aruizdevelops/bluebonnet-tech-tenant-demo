import AdminShell from '../../src/admin/components/AdminShell';

export const metadata = {
  title: 'Admin | Fruteria del Sol',
  description: 'Restaurant administration dashboard for Fruteria del Sol.',
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
