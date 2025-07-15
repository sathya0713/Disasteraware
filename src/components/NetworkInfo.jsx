import React, { useEffect, useState } from 'react';

function NetworkInfo() {
  const [network, setNetwork] = useState({});

  useEffect(() => {
    const connection = navigator.connection || navigator.webkitConnection || navigator.mozConnection;

    const update = () => {
      if (connection) {
        setNetwork({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
        });
      }
    };

    update();
    connection?.addEventListener('change', update);
    return () => connection?.removeEventListener('change', update);
  }, []);

  return (
    <div className="card" data-aos="fade-up">
      <h2>Network Info</h2>
      {network.effectiveType ? (
        <ul>
          <li><strong>Type:</strong> {network.effectiveType}</li>
          <li><strong>Speed:</strong> {network.downlink} Mbps</li>
          <li><strong>Latency:</strong> {network.rtt} ms</li>
        </ul>
      ) : (
        <p>Network info not supported.</p>
      )}
    </div>
  );
}

export default NetworkInfo;
