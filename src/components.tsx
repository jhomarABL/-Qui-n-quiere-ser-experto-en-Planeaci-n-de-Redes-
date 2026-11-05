import { useEffect, useRef, useState, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Orbit, Zap, Diamond, Star, Shield, Triangle, Flame, Hexagon, X, Maximize, Minimize, Network, Clock3, Coins, UsersRound } from 'lucide-react';
import type { Group, Theme } from './schema';
export const avatarNames = ['orbita', 'rayo', 'diamante', 'estrella', 'escudo', 'triangulo', 'llama', 'hexagono'];
export function Avatar({ name, size = 24 }: { name: string; size?: number }) {
  const Icon = ({ orbita: Orbit, rayo: Zap, diamante: Diamond, estrella: Star, escudo: Shield, triangulo: Triangle, llama: Flame, hexagono: Hexagon } as Record<string, typeof Orbit>)[name] || Orbit;
  return <Icon size={size} strokeWidth={1.7} aria-hidden="true" />;
}
export function ThemeIcon({ theme, size = 20 }: { theme: Theme; size?: number }) {
  const Icon = ({ Estructura: Network, Tiempos: Clock3, Costos: Coins, Recursos: UsersRound })[theme]; return <Icon size={size} aria-hidden="true" />;
}
export function Button({ children, variant = '', className = '', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }) {
  return <button type="button" className={`btn ${variant} ${className}`} {...props}>{children}</button>;
}
export function Modal({ title, onClose, children, wide = false }: { title: string; onClose: () => void; children: ReactNode; wide?: boolean }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => { const d = ref.current; d?.showModal(); return () => { d?.close(); }; }, []);
  return <dialog ref={ref} className={`modal ${wide ? 'wide' : ''}`} aria-label={title} onCancel={e => { e.preventDefault(); onClose(); }}>
    <header className="modal-head"><h2>{title}</h2><Button aria-label="Cerrar ventana" className="icon-btn" onClick={onClose}><X size={22} /></Button></header>
    <div className="modal-body">{children}</div>
  </dialog>;
}
export function GroupBadge({ group }: { group: Group }) {
  return <span className="group-badge" style={{ '--group-color': group.color } as React.CSSProperties}><Avatar name={group.avatar} size={22} /><span>{group.name}</span></span>;
}
export async function fullscreen(onError?: (message: string) => void) {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.documentElement.requestFullscreen(); }
  catch { onError?.('Este visor no permite pantalla completa. Abre la aplicación en una pestaña o ejecuta el proyecto local y usa F11.'); }
}
export function FullscreenButton({ onError }: { onError: (message: string) => void }) {
  return <Button className="icon-btn" title="Activar pantalla completa (F)" aria-label="Activar pantalla completa" onClick={() => fullscreen(onError)}><Maximize size={19} /></Button>;
}
export function ImageViewer({ src, alt }: { src: string; alt: string }) {
  const [zoom, setZoom] = useState(1);
  return <div className="image-viewer">
    <div className="row end"><Button onClick={() => setZoom(1)}><Minimize size={16} />Ajustar</Button>
      <label className="zoom-label">Zoom<input aria-label={`Zoom de ${alt}`} type="range" min="0.5" max="3" step="0.1" value={zoom} onChange={e => setZoom(+e.target.value)} /></label></div>
    <div className="image-scroll" style={{ '--zoom': zoom } as React.CSSProperties}><img src={src} alt={alt} onError={e => { e.currentTarget.alt = 'No fue posible mostrar esta imagen. Vuelve a cargarla en la configuración.'; }} /></div>
  </div>;
}
export function imageFile(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) return reject(new Error('Selecciona una imagen PNG, JPEG o WebP.'));
    if (file.size > 5 * 1024 * 1024) return reject(new Error('La imagen supera 5 MB. Usa una imagen más pequeña.'));
    const reader = new FileReader();
    reader.onerror = () => reject(new Error('No se pudo leer la imagen.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('La imagen no es válida.'));
      img.onload = () => {
        const scale = Math.min(1, 1600 / img.width, 1600 / img.height);
        const canvas = document.createElement('canvas'); canvas.width = img.width * scale; canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d'); if (!ctx) return reject(new Error('No se pudo preparar la imagen.'));
        ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.82));
      }; img.src = String(reader.result);
    }; reader.readAsDataURL(file);
  });
}
