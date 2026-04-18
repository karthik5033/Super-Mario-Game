import { GAME_CONFIG } from "@/lib/gameConfig";

// Helper for smooth shapes
function rRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    ctx.beginPath();
    if (ctx.roundRect) {
        ctx.roundRect(x, y, w, h, r);
    } else {
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.arcTo(x + w, y, x + w, y + r, r);
        ctx.lineTo(x + w, y + h - r);
        ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
        ctx.lineTo(x + r, y + h);
        ctx.arcTo(x, y + h, x, y + h - r, r);
        ctx.lineTo(x, y + r);
        ctx.arcTo(x, y, x + r, y, r);
    }
}

export function drawMario(ctx: CanvasRenderingContext2D, w: number, h: number, frames: number, isGrounded: boolean, isMoving: boolean = true) {
    const stride = isGrounded && isMoving ? Math.sin(frames * 0.25) * 4 : (isGrounded ? 0 : 2);
    const cx = w / 2;
    
    // Add subtle shadow for 3D effect
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    // Legs & Boots
    ctx.fillStyle = '#0043bb';
    rRect(ctx, cx - 8 - stride, 26, 6, 8, 2); ctx.fill();
    rRect(ctx, cx + 2 + stride, 26, 6, 8, 2); ctx.fill();
    ctx.fillStyle = '#5c3a21'; // Brown boots
    rRect(ctx, cx - 10 - stride, 32, 9, 6, 3); ctx.fill();
    rRect(ctx, cx + 1 + stride, 32, 9, 6, 3); ctx.fill();

    ctx.shadowColor = 'transparent'; // Reset shadow for inner parts

    // Body (Shirt & Overalls)
    const shirtGrad = ctx.createLinearGradient(0, 15, 0, 25);
    shirtGrad.addColorStop(0, '#ff3b30');
    shirtGrad.addColorStop(1, '#cc1208');
    ctx.fillStyle = shirtGrad;
    rRect(ctx, cx - 10, 16, 20, 12, 4); ctx.fill();
    
    // Overalls
    const overallGrad = ctx.createLinearGradient(0, 18, 0, 30);
    overallGrad.addColorStop(0, '#0a63fa');
    overallGrad.addColorStop(1, '#0043bb');
    ctx.fillStyle = overallGrad;
    rRect(ctx, cx - 8, 18, 16, 10, 3); ctx.fill();
    
    // Buttons
    ctx.fillStyle = '#ffd700';
    ctx.beginPath(); ctx.arc(cx - 4, 21, 2, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 4, 21, 2, 0, Math.PI*2); ctx.fill();

    // Hands (White Gloves)
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(cx - 12, 24, 4, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 12, 24, 4, 0, Math.PI*2); ctx.fill();

    // Head
    const skinGrad = ctx.createLinearGradient(0, 2, 0, 15);
    skinGrad.addColorStop(0, '#ffdfc4');
    skinGrad.addColorStop(1, '#d8a986');
    ctx.fillStyle = skinGrad;
    rRect(ctx, cx - 11, 4, 22, 16, 8); ctx.fill();

    // Nose
    ctx.fillStyle = '#fdbb91';
    ctx.beginPath(); ctx.arc(cx + 3, 13, 3.5, 0, Math.PI*2); ctx.fill();

    // Eyes
    ctx.fillStyle = '#000000';
    rRect(ctx, cx - 4, 8, 3, 4, 1.5); ctx.fill();
    rRect(ctx, cx + 4, 8, 3, 4, 1.5); ctx.fill();
    
    // Eye highlights
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(cx - 3, 9, 1, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 5, 9, 1, 0, Math.PI*2); ctx.fill();

    // Mustache
    ctx.fillStyle = '#3e2723'; // Dark brown
    rRect(ctx, cx - 5, 14, 12, 4, 2); ctx.fill();

    // Hat
    const hatGrad = ctx.createLinearGradient(0, 0, 0, 10);
    hatGrad.addColorStop(0, '#ff3b30');
    hatGrad.addColorStop(1, '#cc1208');
    ctx.fillStyle = hatGrad;
    ctx.beginPath(); ctx.arc(cx, 8, 11, Math.PI, 0); ctx.fill();
    rRect(ctx, cx - 14, 6, 18, 4, 2); ctx.fill(); // Brim
    
    // Hat Logo Badge
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.arc(cx, 3, 3, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#ff3b30';
    ctx.font = 'bold 4px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('M', cx, 4.5);
}

export function drawBill(ctx: CanvasRenderingContext2D, w: number, h: number, frames: number, isGrounded: boolean, isMoving: boolean = true) {
    const stride = isGrounded && isMoving ? Math.sin(frames * 0.25) * 3 : (isGrounded ? 0 : 1);
    const cx = w / 2;

    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    // Legs
    ctx.fillStyle = '#1e3a5f';
    rRect(ctx, cx - 6 - stride, 26, 5, 10, 1); ctx.fill();
    rRect(ctx, cx + 1 + stride, 26, 5, 10, 1); ctx.fill();
    // Shoes
    ctx.fillStyle = '#111111';
    rRect(ctx, cx - 8 - stride, 34, 7, 4, 2); ctx.fill();
    rRect(ctx, cx + 1 + stride, 34, 7, 4, 2); ctx.fill();

    ctx.shadowColor = 'transparent';

    // Suit Jacket
    const suitGrad = ctx.createLinearGradient(0, 14, 0, 28);
    suitGrad.addColorStop(0, '#2c5282');
    suitGrad.addColorStop(1, '#1a365d');
    ctx.fillStyle = suitGrad;
    rRect(ctx, cx - 9, 14, 18, 14, 2); ctx.fill();
    
    // Shirt Collar
    ctx.fillStyle = '#ffffff';
    ctx.beginPath(); ctx.moveTo(cx, 18); ctx.lineTo(cx - 3, 14); ctx.lineTo(cx + 3, 14); ctx.fill();
    
    // Tie
    ctx.fillStyle = '#e53e3e';
    ctx.beginPath(); ctx.moveTo(cx - 1.5, 15); ctx.lineTo(cx + 1.5, 15); ctx.lineTo(cx, 22); ctx.fill();

    // Arms
    ctx.fillStyle = suitGrad;
    rRect(ctx, cx - 12, 15, 4, 10, 2); ctx.fill();
    rRect(ctx, cx + 8, 15, 4, 10, 2); ctx.fill();
    
    // Hands
    ctx.fillStyle = '#ffdfc4';
    ctx.beginPath(); ctx.arc(cx - 10, 26, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 10, 26, 3, 0, Math.PI*2); ctx.fill();

    // Head
    const skinGrad = ctx.createLinearGradient(0, 2, 0, 14);
    skinGrad.addColorStop(0, '#ffe5cf');
    skinGrad.addColorStop(1, '#e5b894');
    ctx.fillStyle = skinGrad;
    rRect(ctx, cx - 8, 2, 16, 14, 6); ctx.fill();

    // Hair (90s swoop)
    ctx.fillStyle = '#4a3f35';
    ctx.beginPath();
    ctx.arc(cx, 6, 9, Math.PI, 0); 
    ctx.fill();
    rRect(ctx, cx + 3, 4, 6, 5, 2); ctx.fill();
    rRect(ctx, cx - 9, 3, 4, 6, 2); ctx.fill();

    // Glasses
    ctx.strokeStyle = '#222';
    ctx.lineWidth = 1.5;
    rRect(ctx, cx - 7, 7, 6, 4, 1); ctx.stroke();
    rRect(ctx, cx + 1, 7, 6, 4, 1); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - 1, 9); ctx.lineTo(cx + 1, 9); ctx.stroke();
    
    // Glass glow
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    rRect(ctx, cx - 7, 7, 6, 4, 1); ctx.fill();
    rRect(ctx, cx + 1, 7, 6, 4, 1); ctx.fill();
}

export function drawRobot(ctx: CanvasRenderingContext2D, w: number, h: number, frames: number, isGrounded: boolean, isMoving: boolean = true) {
    const cx = w / 2;
    const stride = isGrounded && isMoving ? Math.sin(frames * 0.25) * 2 : 0;
    
    ctx.shadowColor = 'rgba(0,255,255,0.4)';
    ctx.shadowBlur = 8;
    
    // Antennas
    ctx.strokeStyle = '#718096'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(cx - 5, 4); ctx.lineTo(cx - 9, -2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + 5, 4); ctx.lineTo(cx + 9, -2); ctx.stroke();
    ctx.fillStyle = '#ef4444'; ctx.beginPath(); ctx.arc(cx - 9, -2, 2.5, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#10b981'; ctx.beginPath(); ctx.arc(cx + 9, -2, 2.5, 0, Math.PI*2); ctx.fill();

    // Head
    ctx.shadowBlur = 0;
    const headGrad = ctx.createLinearGradient(0, 0, 0, 14);
    headGrad.addColorStop(0, '#e2e8f0');
    headGrad.addColorStop(1, '#94a3b8');
    ctx.fillStyle = headGrad;
    rRect(ctx, cx - 10, 2, 20, 14, 4); ctx.fill();
    
    // Visor
    ctx.fillStyle = '#0f172a';
    rRect(ctx, cx - 8, 5, 16, 8, 2); ctx.fill();
    
    // Digital Eyes (Scanning)
    ctx.shadowColor = '#06b6d4';
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#22d3ee';
    const scanAlpha = Math.abs(Math.sin(frames * 0.1));
    ctx.globalAlpha = 0.5 + scanAlpha * 0.5;
    rRect(ctx, cx - 5, 7, 3, 4, 1); ctx.fill();
    rRect(ctx, cx + 2, 7, 3, 4, 1); ctx.fill();
    ctx.globalAlpha = 1.0;
    ctx.shadowBlur = 0;

    // Body
    const bodyGrad = ctx.createLinearGradient(0, 16, 0, 30);
    bodyGrad.addColorStop(0, '#cbd5e1');
    bodyGrad.addColorStop(1, '#64748b');
    ctx.fillStyle = bodyGrad;
    rRect(ctx, cx - 12, 17, 24, 14, 5); ctx.fill();

    // IEEE core
    ctx.fillStyle = '#1e3a8a';
    rRect(ctx, cx - 6, 20, 12, 8, 2); ctx.fill();
    ctx.fillStyle = '#60a5fa';
    ctx.font = 'bold 5px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('IEEE', cx, 26);

    // Arms
    ctx.fillStyle = '#94a3b8';
    rRect(ctx, cx - 15, 18, 4, 10, 2); ctx.fill();
    rRect(ctx, cx + 11, 18, 4, 10, 2); ctx.fill();
    
    // Hands (Glow)
    ctx.shadowColor = '#d946ef';
    ctx.shadowBlur = 8;
    ctx.fillStyle = '#f0abfc';
    ctx.beginPath(); ctx.arc(cx - 13, 29, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 13, 29, 3, 0, Math.PI*2); ctx.fill();
    ctx.shadowBlur = 0;

    // Treads / Wheels
    ctx.fillStyle = '#334155';
    // Left tread
    rRect(ctx, cx - 11 - stride, 31, 8, 7, 3); ctx.fill();
    // Right tread
    rRect(ctx, cx + 3 + stride, 31, 8, 7, 3); ctx.fill();
    // Wheel accents
    ctx.fillStyle = '#0f172a';
    ctx.beginPath(); ctx.arc(cx - 7 - stride, 34.5, 2, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 7 + stride, 34.5, 2, 0, Math.PI*2); ctx.fill();
}

export function drawAda(ctx: CanvasRenderingContext2D, w: number, h: number, frames: number, isGrounded: boolean, isMoving: boolean = true) {
    const cx = w / 2;
    const stride = isGrounded && isMoving ? Math.sin(frames * 0.25) * 2 : 0;
    
    // Dress Base (Bell shape)
    const dressGrad = ctx.createLinearGradient(0, 12, 0, 38);
    dressGrad.addColorStop(0, '#553c9a');
    dressGrad.addColorStop(1, '#322659');
    ctx.fillStyle = dressGrad;
    
    ctx.shadowColor = 'rgba(0,0,0,0.4)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 3;
    
    ctx.beginPath();
    ctx.moveTo(cx, 12);
    ctx.quadraticCurveTo(cx + 16, 25, cx + 14 + stride, 38);
    ctx.lineTo(cx - 14 - stride, 38);
    ctx.quadraticCurveTo(cx - 16, 25, cx, 12);
    ctx.fill();
    ctx.shadowColor = 'transparent';

    // Dress Frills
    ctx.strokeStyle = '#b794f4';
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(cx - 10, 34); ctx.lineTo(cx + 10, 34); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx - 12 - stride/2, 36); ctx.lineTo(cx + 12 + stride/2, 36); ctx.stroke();

    // Corset / Bodice
    ctx.fillStyle = '#2b154d';
    rRect(ctx, cx - 7, 13, 14, 10, 3); ctx.fill();
    
    // Lace collar
    ctx.fillStyle = '#f3f4f6';
    ctx.beginPath(); ctx.arc(cx, 14, 5, 0, Math.PI); ctx.fill();

    // Head
    const skinGrad = ctx.createLinearGradient(0, 2, 0, 12);
    skinGrad.addColorStop(0, '#fef08a');
    skinGrad.addColorStop(1, '#fcd34d');
    ctx.fillStyle = skinGrad;
    rRect(ctx, cx - 6, 2, 12, 12, 6); ctx.fill();

    // Hair (Victorian Updo)
    ctx.fillStyle = '#271c19';
    ctx.beginPath(); ctx.arc(cx, +4, 8, Math.PI, 0); ctx.fill(); // Top bun
    ctx.beginPath(); ctx.arc(cx - 6, 6, 4, 0, Math.PI*2); ctx.fill(); // Side curls
    ctx.beginPath(); ctx.arc(cx + 6, 6, 4, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx, 0, 4, 0, Math.PI*2); ctx.fill(); // High bun

    // Eyes
    ctx.fillStyle = '#271c19';
    ctx.beginPath(); ctx.arc(cx - 2.5, 8, 1.5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 2.5, 8, 1.5, 0, Math.PI*2); ctx.fill();

    // Note / Parchment scroll
    ctx.shadowColor = 'rgba(217, 119, 6, 0.5)';
    ctx.shadowBlur = 8;
    const noteGrad = ctx.createLinearGradient(0, 15, 0, 25);
    noteGrad.addColorStop(0, '#fef3c7');
    noteGrad.addColorStop(1, '#fde68a');
    ctx.fillStyle = noteGrad;
    rRect(ctx, cx + 4, 15, 8, 11, 1); ctx.fill();
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 0.5;
    ctx.strokeRect(cx + 4, 15, 8, 11);
    
    // Sigma Math symbol
    ctx.fillStyle = '#683cb8';
    ctx.font = 'bold 7px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Σ', cx + 8, 23);
    ctx.shadowBlur = 0;

    // Hands
    ctx.fillStyle = '#fcd34d';
    ctx.beginPath(); ctx.arc(cx - 8, 22, 2.5, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 4, 21, 2.5, 0, Math.PI*2); ctx.fill();
}

export function drawLinus(ctx: CanvasRenderingContext2D, w: number, h: number, frames: number, isGrounded: boolean, isMoving: boolean = true) {
    const cx = w / 2;
    const stride = isGrounded && isMoving ? Math.sin(frames * 0.25) * 3 : (isGrounded ? 0 : 1);
    
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;

    // Jeans
    const jeansGrad = ctx.createLinearGradient(0, 24, 0, 36);
    jeansGrad.addColorStop(0, '#1e3a8a');
    jeansGrad.addColorStop(1, '#172554');
    ctx.fillStyle = jeansGrad;
    rRect(ctx, cx - 8 - stride, 24, 6, 10, 2); ctx.fill();
    rRect(ctx, cx + 2 + stride, 24, 6, 10, 2); ctx.fill();
    
    // Sneakers
    ctx.fillStyle = '#ffffff';
    rRect(ctx, cx - 10 - stride, 34, 8, 4, 2); ctx.fill();
    rRect(ctx, cx + stride, 34, 8, 4, 2); ctx.fill();
    ctx.fillStyle = '#ef4444'; // Red stripe
    rRect(ctx, cx - 10 - stride, 36, 8, 2, 1); ctx.fill();
    rRect(ctx, cx + stride, 36, 8, 2, 1); ctx.fill();

    ctx.shadowColor = 'transparent';

    // Hoodie
    const hoodieGrad = ctx.createLinearGradient(0, 14, 0, 26);
    hoodieGrad.addColorStop(0, '#334155');
    hoodieGrad.addColorStop(1, '#1e293b');
    ctx.fillStyle = hoodieGrad;
    rRect(ctx, cx - 11, 13, 22, 13, 4); ctx.fill();
    
    // Hoodie strings
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(cx - 3, 14); ctx.lineTo(cx - 4, 20); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx + 3, 14); ctx.lineTo(cx + 4, 20); ctx.stroke();

    // Penguin Patch
    ctx.fillStyle = '#f8fafc';
    rRect(ctx, cx - 4, 18, 8, 7, 3); ctx.fill();
    ctx.fillStyle = '#0f172a';
    rRect(ctx, cx - 2, 18.5, 4, 3, 1); ctx.fill();
    ctx.fillStyle = '#facc15';
    ctx.beginPath(); ctx.arc(cx, 23, 1.5, 0, Math.PI*2); ctx.fill();

    // Arms
    ctx.fillStyle = hoodieGrad;
    rRect(ctx, cx - 13, 14, 5, 9, 2); ctx.fill();
    rRect(ctx, cx + 8, 14, 5, 9, 2); ctx.fill();
    
    // Hands
    ctx.fillStyle = '#fdbb91';
    ctx.beginPath(); ctx.arc(cx - 10, 24, 3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 10, 24, 3, 0, Math.PI*2); ctx.fill();

    // Face
    const skinGrad = ctx.createLinearGradient(0, 4, 0, 14);
    skinGrad.addColorStop(0, '#fed7aa');
    skinGrad.addColorStop(1, '#fdba74');
    ctx.fillStyle = skinGrad;
    rRect(ctx, cx - 8, 4, 16, 12, 5); ctx.fill();

    // Specs / Under eye bags
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 0.5;
    ctx.beginPath(); ctx.arc(cx - 3, 10, 2, 0, Math.PI); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx + 3, 10, 2, 0, Math.PI); ctx.stroke();

    // Eyes
    ctx.fillStyle = '#0f172a';
    rRect(ctx, cx - 4, 8, 2, 2, 0.5); ctx.fill();
    rRect(ctx, cx + 2, 8, 2, 2, 0.5); ctx.fill();

    // Hair
    ctx.fillStyle = '#020617';
    ctx.beginPath(); ctx.arc(cx, 4, 8.5, Math.PI, 0); ctx.fill();
    // Messy tufts
    ctx.beginPath(); ctx.moveTo(cx - 8, 5); ctx.lineTo(cx - 10, 2); ctx.lineTo(cx - 5, 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx + 8, 5); ctx.lineTo(cx + 10, 2); ctx.lineTo(cx + 5, 2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(cx, 4); ctx.lineTo(cx - 2, 0); ctx.lineTo(cx + 2, 1); ctx.fill();
}
