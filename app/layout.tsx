import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript, Container } from '@mantine/core';
import { theme } from '../theme';
import { Header } from '@/components/Header/Header';
import { Providers } from '@/components/Providers/Providers';

export const metadata = {
  title: 'Wildstream',
  description: 'We make streaming cozy!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <Providers>
          <MantineProvider theme={theme}>
            <Container>
              <Header />
            </Container>
            {children}
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
