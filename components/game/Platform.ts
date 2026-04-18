import { GAME_CONFIG, ERAS } from "@/lib/gameConfig";

export class Platform {
  x: number;
  y: number;
  width: number;
  height: number;
  markedForDeletion: boolean = false;
  eraId: number;
  
  // Floating offset animation
  floatOffset: number = 0;

  constructor(canvasWidth: number, canvasHeight: number, eraId: number) {
    this.x = canvasWidth;
    this.width = Math.random() * 80 + 100;
    this.height = 24;

    const groundY = canvasHeight - (canvasHeight * GAME_CONFIG.groundHeightRatio);
    // Platform spawns at a height the player can walk under or jump onto (90-150px above ground)
    this.y = groundY - (Math.random() * 60 + 90); 
    this.eraId = eraId;
  }

  update(currentSpeed: number, frames: number) {
    this.x -= currentSpeed;
    // floatOffset removed to prevent high-frequency vibration
    this.floatOffset = 0; 
    
    if (this.x + this.width < -50) {
      this.markedForDeletion = true;
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y + this.floatOffset);
    
    // Choose color based on era
    const eraColor = ERAS[this.eraId - 1]?.groundAccent || '#8e44ad';
    
    ctx.shadowBlur = 10;
    ctx.shadowColor = 'rgba(0,0,0,0.5)';
    
    // Base block
    ctx.fillStyle = '#2c3e50'; 
    ctx.fillRect(0, 0, this.width, this.height);
    
    // Era specific accent glow top lip
    ctx.shadowBlur = 15;
    ctx.shadowColor = eraColor;
    ctx.fillStyle = eraColor;
    ctx.fillRect(0, 0, this.width, 4);

    // Decorative pixels ("Mario block" vibe)
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    for(let i=0; i < this.width; i+=20) {
       ctx.fillRect(i + 5, 8, 8, 8);
    }
    
    ctx.restore();
  }

  getHitbox() {
    return {
      x: this.x,
      y: this.y + this.floatOffset,
      width: this.width,
      height: this.height
    };
  }
}
