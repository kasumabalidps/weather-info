// app/layout.tsx
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className='bg-gray-100'>
        <main className='max-w-7xl mx-auto'>{children}</main>
      </body>
    </html>
  );
}