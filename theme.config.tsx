import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import SutdLogo from '@components/SutdLogo';
import Footer from '@components/Footer';

const config: DocsThemeConfig = {
  logo: (
    <>
      <SutdLogo />
    </>
  ),
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    // component: <Footer />,
  },
  // remove search bar
  search: { component: <></> },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  nextThemes: {
    defaultTheme: 'light',
    forcedTheme: 'light',
  },
};

export default config;
