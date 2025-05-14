import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../../styles/mediagallery.css';

// Import logo images
import tanwirLogo from '../../assets/tanwir-logo.png';
import tanwirLogoWhite from '../../assets/tanwir-logo-white.png';
import tanwirLogoHorizontal from '../../assets/tanwir-logo-horizontal.png';
import tanwirLogoGrayscale from '../../assets/tanwir-logo-grayscale.png';
import tanwirLogoHorizontalGrayscale from '../../assets/tanwir-logo-horizontal-grayscale.png';

function MediaGallery() {
  const [copiedColor, setCopiedColor] = useState(null);
  
  const brandColors = [
    { name: 'Green', hex: '#009078', rgb: 'rgb(0, 144, 120)' },
    { name: 'Gold', hex: '#CFAD56', rgb: 'rgb(207, 173, 86)' },
    { name: 'Light Gray', hex: '#D3D3D3', rgb: 'rgb(211, 211, 211)' },
  ];

  const logos = [
    { 
      name: 'Primary Logo', 
      file: tanwirLogo, 
      type: 'PNG',
      filename: 'tanwir-logo.png',
      description: 'Standard colored logo for light backgrounds'
    },
    { 
      name: 'White Logo', 
      file: tanwirLogoWhite, 
      type: 'PNG',
      filename: 'tanwir-logo-white.png',
      description: 'White logo for dark backgrounds'
    },
    { 
      name: 'Horizontal Logo', 
      file: tanwirLogoHorizontal, 
      type: 'PNG',
      filename: 'tanwir-logo-horizontal.png',
      description: 'Horizontal version for headers and navigation'
    },
    { 
      name: 'Grayscale Logo', 
      file: tanwirLogoGrayscale, 
      type: 'PNG',
      filename: 'tanwir-logo-grayscale.png',
      description: 'Grayscale version for monochrome applications'
    },
    { 
      name: 'Horizontal Grayscale', 
      file: tanwirLogoHorizontalGrayscale, 
      type: 'PNG',
      filename: 'tanwir-logo-horizontal-grayscale.png',
      description: 'Horizontal grayscale version'
    }
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
                  <img 
                    src={logo.file} 
                    alt={logo.name} 
                    className="logo-image"
                  />
                </div>
                <div className="logo-info">
                  <h5>{logo.name}</h5>
                  <p className="logo-description">{logo.description}</p>
                  <p className="logo-format">{logo.type} Format</p>
                  <a 
                    href={logo.file} 
                    download={logo.filename}
                    className="download-button"
                  >
                    <FontAwesomeIcon icon={faDownload} /> Download
                  </a>
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
