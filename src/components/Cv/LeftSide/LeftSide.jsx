import React from "react";
import ProfilePhoto from "./ProfilePhoto";
import ContactSection from "./ContactSection";
import LinksSection from "./LinksSection";
import Languages from "./Languages";
import TechnicalSkills from "./TechnicalSkills";
import SoftSkills from "./SoftSkills";

export default function LeftSide() {
  return (
    <div>
      <ProfilePhoto />
      <ContactSection />
      <LinksSection />
      <Languages />
      <TechnicalSkills />
      <SoftSkills />
    </div>
  );
}
