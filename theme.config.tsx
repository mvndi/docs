import React from 'react'

const styles = {
  pl: {
    paddingLeft: '10%'
  },
  right: {
    textAlign: 'right'
  },
} as const;

const config = {
  head: (
    <React.Fragment>
      <meta name="description" content="Medieval geopolitics in Minecraft" />
      <meta property="og:title" content="Medieval geopolitics in Minecraft" />
      <meta property="og:description" content="Medieval geopolitics in Minecraft" />
      <meta name="apple-mobile-web-app-title" content="Mvndicraft" />
      <link rel="icon" type="image/png" href="/favicon.png"/>
    </React.Fragment>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mvndicraft'
    }
  },
  logo: <><img src="/favicon.png" alt="favicon" width="32"/> <span style={styles.pl}>Mvndicraft</span></>,
  chat: {
    link: 'https://discord.gg/2BP6h8Ssta',
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    text: "MVNDICRAFT @ 2024"
  },
}

export default config
