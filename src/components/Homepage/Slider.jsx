import React from "react";

export default function TextCarousel() {
  const textBlocks = [
    "GXM",
    "GROW LEADS",
    "HUBSPOT",
    "TALIN",
    "BRAINCX",
    "SOCIAL BLOOM",
    "MARKETING BLUEPRINT",
    "AUDIENCX",
    "CoSi (CYCLE OF SUCCESS INSTUTUTE",
    "PIONEER PROPERTY GROUP",
    "StarTok Social",
    "GXM",
    "GROW LEADS",
    "HUBSPOT",
    "TALIN",
    "BRAINCX",
    "SOCIAL BLOOM",
    "MARKETING BLUEPRINT",
    "AUDIENCX",
    "CoSi (CYCLE OF SUCCESS INSTUTUTE",
    "PIONEER PROPERTY GROUP",
    "StarTok Social"
  ];

  const renderTextBlocks = (keyOffset = 0) =>
    textBlocks.map((text, index) => (
      <div
        key={index + keyOffset}
        className="inline-block text-xl font-semibold mx-4"
      ><div className="flex gap-9 text-4xl">

        {text} <span><svg width="40" height="42.67" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.3327 28.5354L28.0051 21.9996L39.3327 15.4637C39.971 15.0953 40.1894 14.2803 39.821 13.642L37.1527 9.02276C36.7843 8.38526 35.9685 8.16609 35.3301 8.53442L24.0025 15.0703V1.99936C24.0025 1.26269 23.405 0.666016 22.6684 0.666016H17.3316C16.595 0.666016 15.9975 1.26269 15.9975 1.99936V15.0712L4.66985 8.53526C4.03151 8.16692 3.21567 8.38609 2.84734 9.02359L0.178978 13.642C-0.189359 14.2795 0.0289766 15.0953 0.667316 15.4637L11.9949 21.9996L0.667316 28.5354C0.0289766 28.9038 -0.189359 29.7196 0.178978 30.3571L2.84734 34.9763C3.21567 35.6138 4.03151 35.8322 4.66985 35.4647L15.9975 28.9288V41.9997C15.9975 42.7364 16.595 43.3331 17.3316 43.3331H22.6684C23.405 43.3331 24.0025 42.7364 24.0025 41.9997V28.928L35.3301 35.4638C35.9685 35.8322 36.7843 35.6138 37.1527 34.9755L39.821 30.3563C40.1894 29.7188 39.971 28.9038 39.3327 28.5354Z" fill="white"></path></svg></span>
      </div>
      </div>
    ));

  return (
    <div className="w-full overflow-hidden bg-gray-900 text-white py-4">
      <div className="marquee whitespace-nowrap">
        {renderTextBlocks()}
        {renderTextBlocks(1000)}
      </div>
    </div>
  );
}
