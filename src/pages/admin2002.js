import React, { useState, useEffect } from 'react';

function AdminPortal() {
  const [activeTab, setActiveTab] = useState('Tab1');
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    // Set default tab on load
    setActiveTab('Tab1');

    // Reload the iframe content every 5 minutes (300000 ms)
    const interval = setInterval(() => {
      setIframeLoading(true); // Show the loading spinner when refreshing iframe
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleIframeLoad = () => {
    setIframeLoading(false); // Hide the spinner once the iframe content is loaded
  };

  return (
    <div className="d-flex flex-column align-items-center py-3" style={{ minHeight: '100vh' }}>
      <div className="tab d-flex justify-content-around w-100 max-w-1000 px-3 bg-dark rounded" style={{ position: 'absolute', top: '1em' }}>
        <button
          className={`btn ${activeTab === 'Tab1' ? 'btn-light font-weight-bold' : 'btn-dark text-white'}`}
          onClick={() => handleTabClick('Tab1')}
        >
          CASH ON DELIVERY DATA
        </button>
        <button
          className={`btn ${activeTab === 'Tab2' ? 'btn-light font-weight-bold' : 'btn-dark text-white'}`}
          onClick={() => handleTabClick('Tab2')}
        >
          REQUEST CALL DATA
        </button>
      </div>

      {activeTab === 'Tab1' && (
        <div id="Tab1" className="tabcontent w-100 max-w-1000 mt-5">
          <p className="font-weight-bold">CASH ON DELIVERY DATA</p>
          <div className="iframe-container" style={{ position: 'relative' }}>
            {iframeLoading && (
              <div className="loading-overlay">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" style={{ width: '50px', height: '50px' }}>
                  <circle fill="#fff" cx="6" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                  </circle>
                  <circle fill="#fff" cx="30" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                  </circle>
                  <circle fill="#fff" cx="54" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
                  </circle>
                </svg>
              </div>
            )}
            <iframe
              src="https://script.google.com/macros/s/AKfycbyxhOTrUIJKxe-4Q9wz0URt4xKNssCfbfqajPraST5aR0CuPuxfpjNF1hpbJvbgzRCx/exec"
              width="100%"
              height="1000px"
              style={{ border: 'none' }}
              title="Cash on Delivery Data"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      )}

      {activeTab === 'Tab2' && (
        <div id="Tab2" className="tabcontent w-100 max-w-1000 mt-5">
          <p className="font-weight-bold">REQUEST A CALL DATA</p>
          <div className="iframe-container" style={{ position: 'relative' }}>
            {iframeLoading && (
              <div className="loading-overlay">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" style={{ width: '50px', height: '50px' }}>
                  <circle fill="#fff" cx="6" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 15 ; 0 -15; 0 15" repeatCount="indefinite" begin="0.1" />
                  </circle>
                  <circle fill="#fff" cx="30" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 10 ; 0 -10; 0 10" repeatCount="indefinite" begin="0.2" />
                  </circle>
                  <circle fill="#fff" cx="54" cy="50" r="6">
                    <animateTransform attributeName="transform" dur="1s" type="translate" values="0 5 ; 0 -5; 0 5" repeatCount="indefinite" begin="0.3" />
                  </circle>
                </svg>
              </div>
            )}
            <iframe
              src="https://script.google.com/macros/s/AKfycbyvsMcypP9XB-5uZlFA6CjtMy6KsdR4FwexMKcdmwl0meRun7XTYtjSal43Jxan1V07/exec"
              frameBorder="0"
              width="100%"
              height="1000px"
              style={{ border: 'none' }}
              title="Request Call Data"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPortal;
