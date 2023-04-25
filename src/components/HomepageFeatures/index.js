import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [{
    title: 'Changing Vanilla',
    Svg: require('@site/static/img/logo-old.svg').default,
    description: (
      <>
        Mvndicraft does not require any mods for you to play,
        but plugins change almost every aspect of Vanilla Minecraft
      </>
    ),
  },
  {
    title: 'CVMING SQQN',
    Svg: require('@site/static/img/logo-old.svg').default,
    description: (
      <>
        Stay tuned for updates relating the official release 
        in our Discord. Join here: discord.gg/2BP6h8Ssta
      </>
    ),
  },
  {
    title: 'Towny on Eurasia',
    Svg: require('@site/static/img/logo-old.svg').default,
    description: (
      <>
        Make your settlement anywhere on the Middle East,
        Europe or Africa. You can create a historically 
        accurate nation and go to war with your enemies.
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
