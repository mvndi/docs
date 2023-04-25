import React from 'react';
import clsx from 'clsx';
// templates for features to use later
const FeatureList = [{
    title: ' ',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: ' ',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: ' ',
    description: (
      <>

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
