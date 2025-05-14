import React, { useState } from 'react';
import '../../styles/mediagallery.css';

function MediaGallery() {
  const [copiedColor, setCopiedColor] = useState(null);
  
  const brandColors = [
    { name: 'Primary Blue', hex: '#0056b3', rgb: 'rgb(0, 86, 179)' },
    { name: 'Secondary Teal', hex: '#00a0b0', rgb: 'rgb(0, 160, 176)' },
    { name: 'Accent Orange', hex: '#ff7f50', rgb: 'rgb(255, 127, 80)' },
    { name: 'Dark Gray', hex: '#333333', rgb: 'rgb(51, 51, 51)' },
    { name: 'Light Gray', hex: '#f5f5f5', rgb: 'rgb(245, 245, 245)' },
  ];

  const logos = [
    { name: 'Primary Logo', file: 'primary-logo.png', type: 'PNG' },
    { name: 'Horizontal Logo', file: 'horizontal-logo.png', type: 'PNG' },
    { name: 'Icon Only', file: 'icon-logo.png', type: 'PNG' },
    { name: 'Logo Vector', file: 'vector-logo.svg', type: 'SVG' },
  ];

  const typography = [
    { name: 'Heading Font', family: 'Montserrat', weights: '400, 600, 700' },
    { name: 'Body Font', family: 'Open Sans', weights: '400, 600' },
  ];

  const copyToClipboard = (text, colorName) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <div className="media-gallery-container">
      <div className="media-gallery-header">
        <h2>Media Gallery</h2>
        <p>Access and download brand assets, guidelines, and resources.</p>
      </div>

      <div className="brand-guidelines-section">
        <h3>Brand Guidelines</h3>
        
        {/* Color Palette */}
        <div className="guideline-section">
          <h4>Color Palette</h4>
          <p>Click on any color to copy its value to your clipboard.</p>
          
          <div className="color-palette">
            {brandColors.map((color) => (
              <div key={color.name} className="color-item">
                <div 
                  className="color-swatch" 
                  style={{ backgroundColor: color.hex }}
                  onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                >
                  {copiedColor === `${color.name}-hex` && (
                    <div className="copied-indicator">
                      ✓ Copied!
                    </div>
                  )}
                </div>
                <div className="color-info">
                  <h5>{color.name}</h5>
                  <div className="color-values">
                    <button 
                      onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                      className="copy-button"
                    >
                      {color.hex} <span className="copy-icon">Copy</span>
                    </button>
                    <button 
                      onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                      className="copy-button"
                    >
                      {color.rgb} <span className="copy-icon">Copy</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Logo Downloads */}
        <div className="guideline-section">
          <h4>Logo Downloads</h4>
          <p>Download official logos in various formats for different use cases.</p>
          
          <div className="logo-downloads">
            {logos.map((logo) => (
              <div key={logo.name} className="logo-item">
                <div className="logo-preview">
                  {/* Placeholder for actual logo images */}
                  <div className="logo-placeholder"></div>
                </div>
                <div className="logo-info">
                  <h5>{logo.name}</h5>
                  <p>{logo.type} Format</p>
                  <button className="download-button">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Typography */}
        <div className="guideline-section">
          <h4>Typography</h4>
          <p>Our brand fonts and recommended usage guidelines.</p>
          
          <div className="typography-section">
            {typography.map((font) => (
              <div key={font.name} className="font-item">
                <h5 style={{ fontFamily: font.family }}>{font.name}: {font.family}</h5>
                <p>Weights: {font.weights}</p>
                <p className="font-sample" style={{ fontFamily: font.family }}>
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />
                  abcdefghijklmnopqrstuvwxyz<br />
                  0123456789
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Usage Guidelines */}
        <div className="guideline-section">
          <h4>Usage Guidelines</h4>
          <p>Download our comprehensive brand guideline document for detailed usage instructions.</p>
          
          <div className="guideline-download">
            <button className="download-button">
              Download Brand Guidelines (PDF)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaGallery;
