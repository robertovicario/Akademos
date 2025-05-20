import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
    {
        title: 'Computer Science',
        Svg: require('@site/static/img/illustrations/home/1.svg').default,
        description: (
            <>
                Computer Science is the backbone of technology. I enjoy exploring algorithms and system design.
            </>
        ),
    },
    {
        title: 'Artificial Intelligence',
        Svg: require('@site/static/img/illustrations/home/2.svg').default,
        description: (
            <>
                Artificial Intelligence is transforming industries. I specialize in creating innovative AI solutions.
            </>
        ),
    },
    {
        title: 'Cybersecurity',
        Svg: require('@site/static/img/illustrations/home/3.svg').default,
        description: (
            <>
                Understanding systems deeply and creatively solving problems to secure technology.
            </>
        ),
    },
];

function Feature({ Svg, title, description }) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={clsx(styles.featureSvg, 'home-illustration')} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
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
