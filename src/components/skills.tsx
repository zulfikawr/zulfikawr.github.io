import React from 'react';
import {
  SiPython,
  SiRstudio,
  SiMicrosoftexcel,
  SiMicrosoftsqlserver,
  SiJupyter,
  SiGooglebigquery,
  SiPowerbi,
  SiTableau,
  SiGooglecloud,
  SiLinux,
  SiNotion,
  SiCanva,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiVuedotjs,
  SiFirebase,
  SiGit,
  SiVisualstudiocode,
  SiWindowsterminal,
} from 'react-icons/si';

const Skills: React.FC = () => (
  <div className="col-span-3 flex items-center justify-center rounded-2xl p-6 md:col-span-2 custom-card">
    <div className="grid w-full grid-cols-4 grid-rows-4 gap-4 [&>svg]:w-full [&>svg]:text-center [&>svg]:text-gray-700 dark:[&>svg]:text-gray-100">
      <SiPython size={24} />
      <SiRstudio size={24} />
      <SiJupyter size={24} />
      <SiMicrosoftexcel size={24} />
      <SiMicrosoftsqlserver size={24} />
      <SiGooglebigquery size={24} />
      <SiGooglecloud size={24} />
      <SiPowerbi size={24} />
      <SiTableau size={24} />
      <SiLinux size={24} />
      <SiHtml5 size={24} />
      <SiCss3 size={24} />
      <SiJavascript size={24} />
      <SiVuedotjs size={24} />
      <SiFirebase size={24} />
      <SiGit size={24} />
      <SiVisualstudiocode size={24} />
      <SiWindowsterminal size={24} />
      <SiNotion size={24} />
      <SiCanva size={24} />
    </div>
  </div>
);

export default Skills;
