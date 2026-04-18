import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'X FINANCE | Especialistas em Crédito Empresarial',
  description: 'Conectando empresas ao capital que impulsiona crescimento. Estruturação e captação de crédito empresarial.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className="font-sans antialiased text-foreground">{children}</body>
    </html>
  );
}
