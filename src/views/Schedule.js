import React, { useEffect, useState } from "react";
import GenericSection from "../components/sections/GenericSection";
import Header from "../components/layout/Header";
import FeaturesTiles from "../components/sections/FeaturesTiles";
export default function Schedule() {
  const [isLoadedHeader, setisLoadedHeader] = useState(null);
  const [isLoadedSection, setisLoadedSection] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisLoadedHeader("is-revealed");
    }, 300);
    const timer2 = setTimeout(() => {
      setisLoadedSection("is-revealed");
    }, 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);
  return (
    <>
      <Header
        navPosition="right"
        className={"reveal-from-bottom " + isLoadedHeader}
      />
      <GenericSection
        className={"grid-section reveal-from-bottom " + isLoadedSection}
      >
        <FeaturesTiles reveal={true} />
      </GenericSection>
    </>
  );
}
