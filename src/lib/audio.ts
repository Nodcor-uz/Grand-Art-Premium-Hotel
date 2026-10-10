let ctx: AudioContext | null = null;
let ambientNodes: { stop: () => void } | null = null;
let enabled = false;

function audioContext() {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!ctx) ctx = new AC();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

export function setSoundEnabled(on: boolean) {
  enabled = on;
  if (on) startAmbient();
  else stopAmbient();
}

export function isSoundEnabled() {
  return enabled;
}

function tone(
  c: AudioContext,
  freq: number,
  type: OscillatorType,
  start: number,
  dur: number,
  gain = 0.04,
) {
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, start);
  g.gain.setValueAtTime(gain, start);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  o.connect(g).connect(c.destination);
  o.start(start);
  o.stop(start + dur + 0.02);
}

export function playClick() {
  if (!enabled) return;
  const c = audioContext();
  if (!c) return;
  tone(c, 740, "triangle", c.currentTime, 0.07, 0.03);
}

export function playHover() {
  if (!enabled) return;
  const c = audioContext();
  if (!c) return;
  tone(c, 520, "sine", c.currentTime, 0.05, 0.012);
}

export function playSuccess() {
  if (!enabled) return;
  const c = audioContext();
  if (!c) return;
  const t = c.currentTime;
  tone(c, 523.25, "sine", t, 0.18, 0.05);
  tone(c, 659.25, "sine", t + 0.1, 0.18, 0.045);
  tone(c, 783.99, "triangle", t + 0.2, 0.32, 0.05);
}

export function startAmbient() {
  if (!enabled) return;
  const c = audioContext();
  if (!c || ambientNodes) return;

  const master = c.createGain();
  master.gain.value = 0.025;
  master.connect(c.destination);

  const filter = c.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 420;
  filter.connect(master);

  const o1 = c.createOscillator();
  o1.type = "sine";
  o1.frequency.value = 110;
  const o2 = c.createOscillator();
  o2.type = "sine";
  o2.frequency.value = 164.8;
  const lfo = c.createOscillator();
  lfo.frequency.value = 0.07;
  const lfoGain = c.createGain();
  lfoGain.gain.value = 12;
  lfo.connect(lfoGain).connect(filter.frequency);
  o1.connect(filter);
  o2.connect(filter);
  o1.start();
  o2.start();
  lfo.start();

  ambientNodes = {
    stop() {
      try {
        o1.stop();
        o2.stop();
        lfo.stop();
      } catch {
        /* already stopped */
      }
      master.disconnect();
    },
  };
}

export function stopAmbient() {
  ambientNodes?.stop();
  ambientNodes = null;
}
