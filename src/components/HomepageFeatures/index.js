import React from 'react';
import clsx from 'clsx';

const FeatureList = [{
    title: 'Changing Vanilla',
    description: (
      <>
        Mvndicraft does not require any mods for you to play,
        but plugins change almost every aspect of Vanilla Minecraft
      </>
    ),
  },
  {
    title: 'CVMING SQQN',
    description: (
      <>
        Stay tuned for updates relating the official release 
        in our Discord. Join here: discord.gg/2BP6h8Ssta
      </>
    ),
  },
  {
    title: 'Towny on Eurasia',
    description: (
      <>
        Make your settlement anywhere on the Middle East,
        Europe or Africa. You can create a historically 
        accurate nation and go to war with your enemies.
      </>
    ),
  },

];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
  );
}
