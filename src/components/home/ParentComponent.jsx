import React, { Suspense } from 'react';

const LazyMedia = React.lazy(() => import('../assets/finalVideo2.mp4')); // Adjust the import path

const ParentComponent = () => {
  // Other logic...

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyMedia image={yourImage} mediaType={yourMediaType} />
    </Suspense>
  );
};

export default ParentComponent;
