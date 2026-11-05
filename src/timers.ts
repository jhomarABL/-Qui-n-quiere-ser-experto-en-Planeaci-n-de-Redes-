import type {Clock} from './schema';
export const clock = (ms: number): Clock => ({remaining: ms, deadline: null, running: false});
export const remaining = (c: Clock, now = Date.now()) => Math.max(0, c.running && c.deadline !== null ? Math.min(c.remaining,c.deadline - now) : c.remaining);
export const run = (c: Clock, now = Date.now()): Clock => c.running || c.remaining <= 0 ? c : ({...c, running: true, deadline: now + c.remaining});
export const stop = (c: Clock, now = Date.now()): Clock => ({remaining: remaining(c, now), running: false, deadline: null});
export const formatTime = (ms: number) => {const s = Math.ceil(Math.max(0, ms) / 1000); return `${Math.floor(s / 60).toString().padStart(2,'0')}:${(s % 60).toString().padStart(2,'0')}`;};
