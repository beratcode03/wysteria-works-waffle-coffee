const SPRITE = '/assets/home/hero/image.png';

const SPRITE_W = 1536;

const SPRITE_H = 1024;

const PIECES = {

  sprinkle: { w: 460, h: 460, x: -42, y: -92 },

  chocolate: { w: 515, h: 485, x: -505, y: -78 },

  fruit: { w: 475, h: 490, x: -1040, y: -84 },

  cookie: { w: 555, h: 430, x: -195, y: -565 },

  strawberry: { w: 585, h: 405, x: -775, y: -580 },

} as const;

export type WafflePieceName = keyof typeof PIECES;

type Props = {

  piece: WafflePieceName;

  scale?: number;

  className?: string;

  shadow?: boolean;

};

export default function WafflePiece({ piece, scale = 1, className = '', shadow = true }: Props) {

  const p = PIECES[piece];

  return (

    <div

      aria-hidden="true"

      className={className}

      style={{

        width: p.w,

        height: p.h,

        backgroundImage: `url(${SPRITE})`,

        backgroundSize: `${SPRITE_W}px ${SPRITE_H}px`,

        backgroundPosition: `${p.x}px ${p.y}px`,

        backgroundRepeat: 'no-repeat',

        transform: `scale(${scale})`,

        transformOrigin: 'center',

        filter: shadow ? 'drop-shadow(0 22px 26px rgb(44 26 14 / 0.22))' : undefined,

      }}

    />

  );

}
