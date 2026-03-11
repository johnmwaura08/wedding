export function FloralCornerTopLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large peony — top-left */}
      <g stroke="#b0a08a" strokeWidth="0.7" fill="none" opacity="0.7">
        {/* Outer petals */}
        <path d="M55,95 Q45,55 90,30 Q75,55 70,80 Q65,60 55,95" />
        <path d="M90,30 Q125,15 155,35 Q130,25 90,30" />
        <path d="M70,80 Q85,100 125,90 Q105,100 70,80" />
        <path d="M45,75 Q60,35 110,22 Q80,42 45,75" />
        <path d="M38,105 Q50,80 82,92 Q60,100 38,105" />
        <path d="M55,50 Q78,28 118,20 Q95,38 55,50" />
        {/* Inner petals — layered depth */}
        <path d="M62,68 Q75,42 108,32 Q90,50 62,68" />
        <path d="M50,88 Q68,65 95,65 Q78,78 50,88" />
        <path d="M72,55 Q88,38 115,30 Q98,45 72,55" />
        <path d="M58,78 Q72,58 100,52 Q82,68 58,78" />
        {/* Center detail */}
        <path d="M75,60 Q82,50 92,48 Q85,58 75,60" />
        <path d="M70,70 Q80,60 90,55 Q83,65 70,70" />
      </g>

      {/* Stems and leaves extending down-right */}
      <g stroke="#b0a08a" strokeWidth="0.6" fill="none" opacity="0.55">
        <path d="M125,90 Q165,105 190,140 Q200,165 205,200" />
        <path d="M155,35 Q185,48 210,80 Q225,105 235,145" />
        {/* Leaf on first stem */}
        <path d="M160,110 Q175,100 185,108 Q175,118 160,110" />
        <path d="M170,108 Q175,100 180,108" />
        <path d="M185,135 Q200,122 212,132 Q198,140 185,135" />
        <path d="M196,130 Q202,122 206,132" />
        {/* Leaf on second stem */}
        <path d="M195,62 Q212,52 222,62 Q210,70 195,62" />
        <path d="M206,60 Q212,52 216,62" />
        <path d="M218,95 Q235,82 248,92 Q232,100 218,95" />
        <path d="M230,90 Q236,82 240,92" />
      </g>

      {/* Second smaller flower — left side */}
      <g stroke="#b0a08a" strokeWidth="0.6" fill="none" opacity="0.55">
        <path d="M15,140 Q22,118 48,110 Q35,125 15,140" />
        <path d="M48,110 Q68,100 82,112 Q65,115 48,110" />
        <path d="M15,140 Q18,160 38,175 Q28,160 15,140" />
        <path d="M25,128 Q38,112 58,108 Q45,120 25,128" />
        <path d="M20,150 Q30,140 50,138 Q38,148 20,150" />
        {/* Center */}
        <path d="M38,125 Q45,118 52,120 Q46,128 38,125" />
      </g>

      {/* Trailing stems downward */}
      <g stroke="#b0a08a" strokeWidth="0.5" fill="none" opacity="0.45">
        <path d="M38,175 Q55,195 65,230 Q70,260 72,300" />
        <path d="M205,200 Q215,240 220,280 Q222,310 220,350" />
        <path d="M235,145 Q250,180 255,220 Q258,250 255,290" />
        {/* Tiny buds on trailing stems */}
        <path d="M60,235 Q52,228 55,222 Q62,228 60,235" />
        <path d="M68,270 Q60,262 64,256 Q72,264 68,270" />
        <path d="M218,250 Q210,242 214,236 Q222,244 218,250" />
        <path d="M252,230 Q244,222 248,216 Q256,224 252,230" />
        {/* Small leaves on trailing */}
        <path d="M55,210 Q48,200 55,195 Q60,205 55,210" />
        <path d="M210,225 Q218,215 225,220 Q218,228 210,225" />
      </g>

      {/* Small bud cluster — right edge */}
      <g stroke="#b0a08a" strokeWidth="0.5" fill="none" opacity="0.4">
        <path d="M280,40 Q270,25 280,15 Q290,25 280,40" />
        <path d="M280,15 Q285,8 290,15" />
        <path d="M280,40 Q278,55 275,70" />
        <path d="M310,60 Q300,48 308,38 Q318,48 310,60" />
        <path d="M308,38 Q312,30 318,38" />
        <path d="M310,60 Q308,75 305,90" />
      </g>
    </svg>
  );
}

export function FloralCornerBottomRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Large peony — bottom-right */}
      <g stroke="#b0a08a" strokeWidth="0.7" fill="none" opacity="0.7">
        <path d="M345,305 Q355,345 310,370 Q325,345 330,320 Q335,340 345,305" />
        <path d="M310,370 Q275,385 245,365 Q270,375 310,370" />
        <path d="M330,320 Q315,300 275,310 Q295,300 330,320" />
        <path d="M355,325 Q340,365 290,378 Q320,358 355,325" />
        <path d="M362,295 Q350,320 318,308 Q340,300 362,295" />
        <path d="M345,350 Q322,372 282,380 Q305,362 345,350" />
        {/* Inner petals */}
        <path d="M338,332 Q325,358 292,368 Q310,350 338,332" />
        <path d="M350,312 Q332,335 305,335 Q322,322 350,312" />
        <path d="M328,345 Q312,362 285,370 Q302,355 328,345" />
        <path d="M342,322 Q328,342 300,348 Q318,332 342,322" />
        {/* Center */}
        <path d="M325,340 Q318,350 308,352 Q315,342 325,340" />
        <path d="M330,330 Q320,340 310,345 Q317,335 330,330" />
      </g>

      {/* Stems and leaves extending up-left */}
      <g stroke="#b0a08a" strokeWidth="0.6" fill="none" opacity="0.55">
        <path d="M275,310 Q235,295 210,260 Q200,235 195,200" />
        <path d="M245,365 Q215,352 190,320 Q175,295 165,255" />
        {/* Leaves */}
        <path d="M240,290 Q225,300 215,292 Q225,282 240,290" />
        <path d="M230,292 Q225,300 220,292" />
        <path d="M215,265 Q200,278 188,268 Q202,260 215,265" />
        <path d="M204,270 Q198,278 194,268" />
        <path d="M205,338 Q188,348 178,338 Q190,330 205,338" />
        <path d="M194,340 Q188,348 184,338" />
        <path d="M182,305 Q165,318 152,308 Q168,300 182,305" />
        <path d="M170,310 Q164,318 160,308" />
      </g>

      {/* Second smaller flower — right side */}
      <g stroke="#b0a08a" strokeWidth="0.6" fill="none" opacity="0.55">
        <path d="M385,260 Q378,282 352,290 Q365,275 385,260" />
        <path d="M352,290 Q332,300 318,288 Q335,285 352,290" />
        <path d="M385,260 Q382,240 362,225 Q372,240 385,260" />
        <path d="M375,272 Q362,288 342,292 Q355,280 375,272" />
        <path d="M380,250 Q370,260 350,262 Q362,252 380,250" />
        <path d="M362,278 Q355,282 348,280 Q354,272 362,278" />
      </g>

      {/* Trailing stems upward */}
      <g stroke="#b0a08a" strokeWidth="0.5" fill="none" opacity="0.45">
        <path d="M362,225 Q345,205 335,170 Q330,140 328,100" />
        <path d="M195,200 Q185,160 180,120 Q178,90 180,50" />
        <path d="M165,255 Q150,220 145,180 Q142,150 145,110" />
        {/* Tiny buds */}
        <path d="M340,165 Q348,158 345,152 Q338,158 340,165" />
        <path d="M332,130 Q340,122 336,116 Q328,124 332,130" />
        <path d="M182,150 Q190,142 186,136 Q178,144 182,150" />
        <path d="M148,170 Q156,162 152,156 Q144,164 148,170" />
        {/* Small leaves */}
        <path d="M345,190 Q352,200 345,205 Q340,195 345,190" />
        <path d="M190,175 Q182,185 175,180 Q182,172 190,175" />
      </g>

      {/* Small bud cluster — left edge */}
      <g stroke="#b0a08a" strokeWidth="0.5" fill="none" opacity="0.4">
        <path d="M120,360 Q130,375 120,385 Q110,375 120,360" />
        <path d="M120,385 Q115,392 110,385" />
        <path d="M120,360 Q122,345 125,330" />
        <path d="M90,340 Q100,352 92,362 Q82,352 90,340" />
        <path d="M92,362 Q88,370 82,362" />
        <path d="M90,340 Q92,325 95,310" />
      </g>
    </svg>
  );
}

export function FloralSide({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 60 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#b0a08a" strokeWidth="0.5" fill="none" opacity="0.4">
        {/* Vertical trailing vine */}
        <path d="M30,20 Q25,60 30,100 Q35,140 28,180 Q22,220 30,260 Q38,300 30,340 Q25,360 30,380" />
        {/* Leaves */}
        <path d="M30,60 Q20,50 18,40 Q25,48 30,60" />
        <path d="M30,60 Q40,50 42,40 Q35,48 30,60" />
        <path d="M28,130 Q16,120 14,108 Q22,118 28,130" />
        <path d="M28,130 Q38,118 42,108 Q35,120 28,130" />
        <path d="M30,200 Q18,190 15,178 Q24,188 30,200" />
        <path d="M30,200 Q42,190 45,178 Q36,188 30,200" />
        <path d="M28,270 Q16,260 14,248 Q22,258 28,270" />
        <path d="M28,270 Q38,258 42,248 Q35,260 28,270" />
        <path d="M30,340 Q18,328 15,318 Q24,328 30,340" />
        <path d="M30,340 Q42,328 45,318 Q36,328 30,340" />
        {/* Small buds */}
        <path d="M22,90 Q18,82 22,78 Q26,84 22,90" />
        <path d="M36,160 Q40,152 36,148 Q32,154 36,160" />
        <path d="M22,230 Q18,222 22,218 Q26,224 22,230" />
        <path d="M36,310 Q40,302 36,298 Q32,304 36,310" />
      </g>
    </svg>
  );
}
