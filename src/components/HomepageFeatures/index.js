import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Build for Speed',
    Svg: require('../../../static/startup-rocket-launch-icon.svg').default,
    description: (
      <>
      Open-Leaked makes use of multiple frameworks to make queries faster!
      </>
    ),
  },
  {
    title: 'Massive amounts of data',
    Svg: require('../../../static/folder-directory-files-icon.svg').default,
    description: (
      <>
      A database conatining +300 million user credentials and more coming!
      </>
    ),
  },
  {
    title: 'Ensure your security',
    Svg: require('../../../static/insurance-protected-icon.svg').default,
    description: (
      <>
      Ensure your online security by checking that your credentials are not freely available on the internet!
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
