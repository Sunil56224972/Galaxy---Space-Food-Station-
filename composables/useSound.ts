interface SoundMap {
  [key: string]: HTMLAudioElement;
}

const sounds: SoundMap = {};
const isMuted = ref(false);

export function useSound() {
  function init(soundFiles: Record<string, string>) {
    Object.entries(soundFiles).forEach(([key, src]) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      sounds[key] = audio;
    });
  }

  function play(key: string, volume = 0.4) {
    if (isMuted.value || !sounds[key]) return;
    sounds[key].volume = volume;
    sounds[key].currentTime = 0;
    sounds[key].play().catch(() => {});
  }

  function toggleMute() {
    isMuted.value = !isMuted.value;
    return isMuted.value;
  }

  return { init, play, toggleMute, isMuted };
}
