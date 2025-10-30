import { useState, useRef, useEffect } from 'react';

const CameraPreview = ({ onCaptureComplete }) => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isCapturing, setIsCapturing] = useState(false);
  const [error, setError] = useState(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startCamera = async () => {
    try {
      setError(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 640, height: 480 }
      });
      
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraActive(true);
    } catch (err) {
      setError('Unable to access camera. Please check permissions.');
      console.error('Camera access error:', err);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
    setError(null);
  };

  const captureImage = () => {
    if (!videoRef.current || !isCameraActive) return;
    
    setIsCapturing(true);
    
    // Create canvas to capture frame
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);
    
    // Convert to blob and simulate processing
    canvas.toBlob(blob => {
      if (blob) {
        // Simulate API call delay
        setTimeout(() => {
          onCaptureComplete();
          setIsCapturing(false);
        }, 2000);
      }
    }, 'image/jpeg', 0.8);
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800 flex items-center">
          <span className="mr-2">📹</span>
          Camera Detection
        </h3>
        <div className="flex space-x-2">
          {!isCameraActive ? (
            <button
              onClick={startCamera}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg 
                       transition-colors duration-200 flex items-center space-x-2"
            >
              <span>📸</span>
              <span>Enable Camera</span>
            </button>
          ) : (
            <>
              <button
                onClick={captureImage}
                disabled={isCapturing}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white px-4 py-2 
                         rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                {isCapturing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Analyzing...</span>
                  </>
                ) : (
                  <>
                    <span>📊</span>
                    <span>Analyze Mood</span>
                  </>
                )}
              </button>
              <button
                onClick={stopCamera}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg 
                         transition-colors duration-200 flex items-center space-x-2"
              >
                <span>🔴</span>
                <span>Stop</span>
              </button>
            </>
          )}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
          <div className="flex items-center">
            <span className="mr-2">⚠️</span>
            {error}
          </div>
        </div>
      )}

      {isCameraActive && (
        <div className="relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-48 object-cover rounded-lg bg-gray-900"
          />
          <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Live
          </div>
          {isCapturing && (
            <div className="absolute inset-0 bg-white/80 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                <p className="text-blue-700 font-medium">Analyzing your mood...</p>
              </div>
            </div>
          )}
        </div>
      )}

      {!isCameraActive && !error && (
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-4xl mb-2">📷</div>
            <p>Click "Enable Camera" to start mood detection</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CameraPreview;