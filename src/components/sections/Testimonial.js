import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
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
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'News',
    paragraph: 'Latest press news and nominations informations:'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div id="news" className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Participated in the <b>2020 Kaohsiung VR Film Lab Talent workshop</b> and made it to the the final run. <br></br>
                    The final public presentation will be held on 10/18. Followthe VR production Market presentation schedule <a target="_blank"  href="https://vrfilmlab.kktix.cc/events/xr-kff">here.</a><br></br>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high"><a target="_blank"  href="https://www.kff.tw/EN/about/Vr">Kaohsiung VR Film Lab</a></span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a target="_blank"  href="https://vrfilmlab.tw/en/news/2020-kaohsiung-vr-film-lab-workshop2-list/">2020 VR Talent workshop</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Selected in <b>2020 Oculus Launch Pad Program</b> and participated in virtual Bootcamp and Facebook Connect in September.<br></br>We will submit our 6 minutes demo to Oculus in the late January, 2021.
                    <br></br>
                  </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Oculus</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a target="_blank"  href="https://developer.oculus.com/blog/oculus-launch-pad-2020-applications-now-open/?locale=en_US">2020 Launch Pad Program</a>
                  </span>
                </div>
              </div>
            </div>
     

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
