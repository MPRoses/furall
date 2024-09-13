import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useGesture } from 'react-use-gesture';
import './App.css';

const PaintballText = () => {
  const [transform, setTransform] = useState({ scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 });

  const bind = useGesture({
    onMove: ({ xy: [x, y], event }) => {
      const svgElement = document.getElementById('section3');
      const rect = svgElement.getBoundingClientRect();
      const relativeX = x - rect.left;
      const relativeY = y - rect.top;

      const scaleX = 1 + (relativeX / rect.width) * 0.1;
      const scaleY = 1 + (relativeY / rect.height) * 0.1;
      const translateX = (relativeX - rect.width / 2) * 0.05;
      const translateY = (relativeY - rect.height / 2) * 0.05;

      setTransform({ scaleX, scaleY, translateX, translateY });
    },
    onHover: ({ hovering }) => {
      if (!hovering) {
        setTransform({ scaleX: 1, scaleY: 1, translateX: 0, translateY: 0 });
      }
    },
  });

  const springProps = useSpring({
    transform: `scale(${transform.scaleX}, ${transform.scaleY}) translate(${transform.translateX}px, ${transform.translateY}px)`,
  });

  return (
    <div className="title-work" {...bind()}>
      <animated.svg
        id="title-svg"
        width="750"
        height="241"
        viewBox="0 0 750 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={springProps}
      >
        <path
          d="M58.2575 237L0.977501 69L34.2575 68.68L75.2175 194.44L67.8575 193.8L112.338 95.56H132.178L176.978 194.12L168.338 194.76L209.618 69H242.898L186.258 237H163.538L116.818 130.12L124.178 131.08L80.6575 237H58.2575ZM343.748 240.2C327.321 240.2 312.601 236.467 299.588 229C286.788 221.32 276.654 210.973 269.188 197.96C261.721 184.733 257.988 169.693 257.988 152.84C257.988 135.987 261.721 121.053 269.188 108.04C276.654 94.8133 286.788 84.4667 299.588 77C312.601 69.32 327.321 65.48 343.748 65.48C359.961 65.48 374.468 69.32 387.268 77C400.281 84.4667 410.521 94.8133 417.988 108.04C425.454 121.053 429.188 135.987 429.188 152.84C429.188 169.693 425.454 184.733 417.988 197.96C410.521 210.973 400.281 221.32 387.268 229C374.468 236.467 359.961 240.2 343.748 240.2ZM343.748 210.12C353.774 210.12 362.734 207.667 370.628 202.76C378.521 197.64 384.708 190.813 389.188 182.28C393.668 173.533 395.801 163.72 395.588 152.84C395.801 141.747 393.668 131.933 389.188 123.4C384.708 114.653 378.521 107.827 370.628 102.92C362.734 98.0133 353.774 95.56 343.748 95.56C333.721 95.56 324.654 98.12 316.548 103.24C308.654 108.147 302.468 114.973 297.988 123.72C293.508 132.253 291.374 141.96 291.588 152.84C291.374 163.72 293.508 173.533 297.988 182.28C302.468 190.813 308.654 197.64 316.548 202.76C324.654 207.667 333.721 210.12 343.748 210.12ZM465.103 237V69H498.383V121.8L495.183 109C497.529 100.893 501.476 93.5333 507.023 86.92C512.783 80.3067 519.289 75.08 526.542 71.24C534.009 67.4 541.689 65.48 549.583 65.48C553.209 65.48 556.623 65.8 559.823 66.44C563.236 67.08 565.903 67.8267 567.823 68.68L559.183 104.52C556.623 103.453 553.743 102.6 550.543 101.96C547.556 101.107 544.569 100.68 541.583 100.68C535.823 100.68 530.276 101.853 524.943 104.2C519.823 106.333 515.236 109.427 511.183 113.48C507.343 117.32 504.249 121.907 501.903 127.24C499.556 132.36 498.383 138.013 498.383 144.2V237H465.103ZM624.245 184.52L622.645 148.68L702.965 69H747.445L624.245 184.52ZM594.165 237V0.199997H627.125V237H594.165ZM707.445 237L644.085 163.08L667.445 141.64L749.685 237H707.445Z"
          fill="white"
        />
      </animated.svg>
    </div>
  );
};

export default PaintballText;
