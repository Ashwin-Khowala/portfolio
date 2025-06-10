"use client";
import DevelopersDetails from "@/components/DevelopersDetails";
import LoadingPage from "@/components/LoadingPage.t/LoadingPage";
import ProfileBanner from "@/components/ProfileBanner";
import { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { isFirstLoading, isLoadingAtom, shouldShowLoadingAtom } from "@/atoms/IsLoading";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const setIsLoading = useSetAtom(isLoadingAtom);
  const setShouldShowLoading = useSetAtom(shouldShowLoadingAtom);
  const isLoading = useAtomValue(isLoadingAtom);
  const shouldShowLoading = useAtomValue(shouldShowLoadingAtom);
  const searchParams = useSearchParams();

  const isFirstLoad = useAtomValue(isFirstLoading);
  const setIsFirstLoad = useSetAtom(isFirstLoading);

  useEffect(() => {
    
      const hasVisited = sessionStorage.getItem('hasVisitedSite');
      if (!hasVisited) {
        setShouldShowLoading(true);
        setIsLoading(true);
        setIsFirstLoad(false);

        sessionStorage.setItem('hasVisitedSite', 'true');

        const timer = setTimeout(() => {
          setIsLoading(false);
          setShouldShowLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
      } else {
        // Not first visit and not from navbar - don't show loading
        setIsLoading(false);
        setShouldShowLoading(false);
        // setHasInitialized(true);
      }
  }, [setIsLoading, setShouldShowLoading, searchParams]);

  return (
    <div className="min-h-screen">
      <div className="w-full">
        {((isLoading && shouldShowLoading)||isFirstLoad) ? <LoadingPage /> : <DashBoard />}
      </div>
    </div>
  );
}

function DashBoard() {
  return (
    <div className="w-full max-w-none">
      <ProfileBanner />
      <DevelopersDetails />
    </div>
  );
}