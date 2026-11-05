export const THEMES = ['Estructura', 'Tiempos', 'Costos', 'Recursos'] as const;
export type Theme = typeof THEMES[number];
export const DIFFICULTIES = ['Fácil', 'Media', 'Difícil'] as const;
export type Difficulty = typeof DIFFICULTIES[number];
export const HELPERS = ['mitad', 'salon', 'aliado', 'pista'] as const;
export type Helper = typeof HELPERS[number];
export type OptionId = string;
export interface Question {
  id: string; team: number; theme: Theme; difficulty: Difficulty; points: number;
  text: string; options: {id: OptionId; text: string}[]; correctId: OptionId;
  explanation: string; hint: string; reference: string; extra: string; image: string;
  demo: boolean; tiebreak?: boolean;
}
export interface Group {id: string; name: string; color: string; avatar: string}
export interface Activity {id: string; name: string; predecessors: string; duration: string; cost: string; resources: string}
export interface Exercise {description: string; activities: Activity[]; image: string}
export interface Config {
  groups: Group[]; minutes: number; seconds: number; questionTimer: boolean;
  sound: boolean; music: boolean; effectVolume: number; musicVolume: number;
  random: boolean; helperCount: number; rebound: boolean; mode: 'rotativo' | 'manual';
  pauseConsult: boolean; values: Record<Difficulty, number>; questions: Question[]; exercise: Exercise;
}
export type Phase = 'configuracion' | 'preparada' | 'activa' | 'seleccionada' | 'confirmada' | 'rebote' | 'revelada' | 'pausa' | 'tiempo' | 'premiacion';
export interface Clock {remaining: number; deadline: number | null; running: boolean}
export interface Attempt {groupId: string; selection: string | null; locked: boolean; timedOut: boolean; rebound: boolean}
export interface Result {questionId: string; team: number; theme: Theme; groupId: string; selection: string | null; correct: boolean; points: number; rebound: boolean; time: string; voided?: boolean}
export interface Event {id: string; time: string; type: string; detail: string; questionId?: string; team?: number; theme?: Theme; groupId?: string}
export interface Consultation {kind: 'salon' | 'aliado' | 'pista'; votes: number[]; ally: string; clock: Clock; resumeQuestion: boolean}
export interface Game {
  version: 1; config: Config; questions: Question[]; index: number; assignments: string[];
  phase: Phase; previousPhase: Phase; clock: Clock; questionClock: Clock;
  attempts: Attempt[]; hidden: string[]; consultation: Consultation | null;
  inventories: Record<string, Record<Helper, number>>; scores: Record<string, number>;
  results: Result[]; history: Event[]; startedAt: string; resolved: boolean;
  resumeQuestion: boolean; winners: string[] | null; tieUsed: string[];
  usedHelpers: string[]; tieContenders?: string[];
  scoringRule?: 'fixed100';
  scoringBeforeUpdate?: {scores:Record<string,number>;results:Result[];values:Record<Difficulty,number>;questionPoints:{id:string;points:number}[]};
}
export interface Archive {version: 1; config: Config; game: Game | null}
