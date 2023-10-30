"use client";

import DrumPad from '@/components/DrumPad';

const clips = [
  { key: 'Q', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', description: 'Heater 1' },
  { key: 'W', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', description: 'Heater 2' },
  { key: 'E', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3', description: 'Heater 3' },
  { key: 'A', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', description: 'Heater 4' },
  { key: 'S', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3', description: 'Clap' },
  { key: 'D', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3', description: 'Open-HH' },
  { key: 'Z', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3', description: "Kick-n'-Hat" },
  { key: 'X', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', description: 'Kick' },
  { key: 'C', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', description: 'Closed-HH' },
];

export default function Page() {
  const playAudio = (e) => {
    const clip = clips.find(clip => clip.key === e.key.toUpperCase())
    if (!clip) return;
    document
      .getElementById(clip.key)
      .play()
      .catch(console.error);

    console.log((clip.key));

    document
      .getElementById("drum-" + clip.key)?.focus();

    document
      .getElementById("display").innerText = clip.description;
  }

  return (
    <div id="drum-machine" onKeyDown={playAudio} className="bg-gray-400 h-screen flex flex-col items-center justify-center">
      <h1 className='text-center text-5xl font-bold py-4'>Drum Machine</h1>
      <div className="whole-drum grid grid-cols-3 gap-4 max-w-2xl mx-auto border-8 border-yellow-400 p-8">
        {clips.map((clip) => (
          <DrumPad
            key={clip.key}
            clip={clip}
          />
        ))}
      </div>
      <div id="display" className='text-xl py-4'></div>
    </div>
  );
}