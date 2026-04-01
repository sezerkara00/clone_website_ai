export function generateStaticParams() {
  return [{ id: 'm1' }, { id: 'm1pro' }];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
