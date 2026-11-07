"use client";

import dynamic from "next/dynamic";

const DesignAssistant = dynamic(() => import("@/components/DesignAssistant"), { ssr: false });
const OnboardingWizard = dynamic(() => import("@/components/OnboardingWizard"), { ssr: false });
const MatrixOverlay = dynamic(() => import("@/components/MatrixOverlay"), { ssr: false });

export default function ClientOverlays() {
  return (
    <>
      <OnboardingWizard />
      <MatrixOverlay />
      <DesignAssistant />
    </>
  );
}
