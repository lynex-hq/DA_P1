'use client';

import dynamic from 'next/dynamic';

// Dynamically load the DoorLoadingScreen only on the client
const DoorLoadingScreen = dynamic(() => import('@/components/DoorLoadingScreen'), {
  ssr: false,
});

export default function ClientDoorLoadingScreen() {
  return <DoorLoadingScreen />;
}
