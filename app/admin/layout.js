import AdminShell from '../../src/admin/components/AdminShell';

export const metadata = {
  title: 'Admin | Tropikala Smoothie Co.',
  description: 'Administration dashboard for Tropikala Smoothie Co.',
};

export default function AdminLayout({ children }) {
  return <AdminShell>{children}</AdminShell>;
}
