import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Team',
    paragraph: 'Originated from Taiwan, we are three creators from different industries who are enthusiastic for creating new VR experiences to our audiences.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="team" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image 
                      src={require('./../../assets/images/nien_icon.jpg')}
                      alt="Billy Nien"
                      width={128}
                      height={128} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Billy Nien
                    </h4>
                  <p className="m-0 text-sm">
                   Film director, producer, and screenwriter.<br/>
                    <a className="portfolio-link" target="_blank"  href="https://www.cakeresume.com/s--p3f7T1KQA3io3w0k3sbZjg--/nien-han-wen-film">[ Resume ]</a>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/kiki_icon.jpg')}
                      alt="Kiki Wu"
                      width={128}
                      height={128} 
                      />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Kiki Wu
                    </h4>
                  <p className="m-0 text-sm">
                   Digital Media Artist. 
                    
                    <br/>
                    <a className="portfolio-link" target="_blank"  href="https://uglykiki.com/">[ Portfolio ] </a>
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/tzuhan_icon.jpg')}
                      alt="Tzuhan Hsu"
                      width={128}
                      height={128} 
                     />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Tzuhan Hsu
                    </h4>
                  <p className="m-0 text-sm">
                   Game/Software Developer, 2D/3D artist.<br/>
                    <a className="portfolio-link" target="_blank" href="https://tzuhan.github.io/">[ Protfolio ]</a>
                    </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
