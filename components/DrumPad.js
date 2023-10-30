export default function DrumPad({ clip }) {
   const playSound = (clip) => {
      document
         .getElementById(clip.key)
         ?.play()
         .catch(console.error);
         console.log(clip.key);

      
      document
      .getElementById("display").innerText = clip.description;

   }

   return (
      <button
         className="drum-pad bg-gray-200 p-8 text-xl font-semibold"
         id={`drum-${clip.key}`}
         onClick={() => playSound(clip)}
      >
         {clip.key}
         <audio className="clip" id={clip.key} src={clip.url} type="audio/mpeg">
            {clip.key}
         </audio>
      </button>
   );
}
