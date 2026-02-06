import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';

const App: React.FC = () => {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [barcode, setBarcode] = useState<string | null>(null);

  const handleScanSuccess = (decodedText: string) => {
    setBarcode(decodedText);
    setIsScannerOpen(false);
  };

  const handleScanFailure = (error: any) => {
    console.error(error);
  };

  return (
    <div>
      <button onClick={() => setIsScannerOpen(true)}>Open Camera</button>
      {isScannerOpen && (
        <BarcodeScanner
          onScanSuccess={handleScanSuccess}
          onScanFailure={handleScanFailure}
        />
      )}
      {barcode && (
        <div>
          <p>Scanned Barcode:</p>
          <input type="text" value={barcode} readOnly />
        </div>
      )}
    </div>
  );
};

export default App;
