// Original, short synthesized cues. No external audio or official recordings.
export type Cue='inicio'|'pregunta'|'seleccion'|'confirmar'|'suspenso'|'correcta'|'incorrecta'|'comodin'|'cuenta'|'fin'|'premio';
const notes:Record<Cue,number[]>={inicio:[261,329,392,523],pregunta:[220,330],seleccion:[660],confirmar:[330,440],suspenso:[147,156,165],correcta:[523,659,784],incorrecta:[220,164],comodin:[440,660,880],cuenta:[880],fin:[330,220,110],premio:[392,523,659,784,1046]};
class AudioService {
  context:AudioContext|null=null; oscillators:OscillatorNode[]=[]; musicNodes:OscillatorNode[]=[]; musicGain:GainNode|null=null;
  enabled=true; effectVolume=0.4; musicVolume=0.15; last=0;
  async unlock(){try{if(!this.context)this.context=new AudioContext();if(this.context.state==='suspended')await this.context.resume();}catch{/* Audio is optional. */}}
  cue(type:Cue){
    if(!this.enabled||!this.context||this.context.state!=='running')return;
    const now=this.context.currentTime;if(now-this.last<0.07)return;this.last=now;
    this.stopEffects();
    notes[type].forEach((freq,i)=>{
      const o=this.context!.createOscillator(),gain=this.context!.createGain();o.type=type==='incorrecta'?'triangle':'sine';o.frequency.value=freq;
      const start=now+i*0.13;gain.gain.setValueAtTime(0,start);gain.gain.linearRampToValueAtTime(this.effectVolume*0.2,start+0.01);gain.gain.exponentialRampToValueAtTime(0.0001,start+0.22);
      o.connect(gain);gain.connect(this.context!.destination);o.start(start);o.stop(start+0.25);this.oscillators.push(o);
    });
  }
  stopEffects(){this.oscillators.forEach(o=>{try{o.stop();o.disconnect();}catch{}});this.oscillators=[];}
  music(on:boolean){
    this.stopMusic();if(!on||!this.enabled||!this.context)return;
    const gain=this.context.createGain();gain.gain.value=this.musicVolume*0.045;gain.connect(this.context.destination);this.musicGain=gain;
    [110,164.81,220].forEach(f=>{const o=this.context!.createOscillator();o.type='sine';o.frequency.value=f;o.connect(gain);o.start();this.musicNodes.push(o);});
  }
  stopMusic(){this.musicNodes.forEach(o=>{try{o.stop();o.disconnect();}catch{}});this.musicNodes=[];this.musicGain?.disconnect();this.musicGain=null;}
  stop(){this.stopEffects();this.stopMusic();}
}
export const audio=new AudioService();
