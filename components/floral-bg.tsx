/**
 * Decorative floral SVGs traced from the wedding invitation.
 * Hand-drawn peonies, wild roses, leaves, and trailing stems.
 * Charcoal line art on transparent background.
 */

export function FloralTopLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Large peony bloom (top-left) ── */}
      <g stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer petals — large, cupping shapes */}
        <path d="M140,95 C120,60 85,35 110,15 C135,0 170,20 175,55 C178,72 165,88 140,95" />
        <path d="M175,55 C190,25 225,10 245,25 C260,38 250,65 230,78 C215,88 195,82 175,55" />
        <path d="M230,78 C258,62 285,55 290,75 C295,95 270,115 245,115 C228,115 220,100 230,78" />
        <path d="M140,95 C115,95 80,105 75,85 C70,62 100,50 120,55 C132,58 140,75 140,95" />
        <path d="M245,115 C260,130 260,155 240,162 C218,168 200,148 205,128 C208,115 225,108 245,115" />
        <path d="M140,95 C125,120 105,140 115,158 C128,178 158,168 162,145 C165,130 155,115 140,95" />
        {/* Mid petals */}
        <path d="M162,145 C175,162 200,168 215,155 C228,142 220,120 205,115 C192,112 172,125 162,145" />
        <path d="M162,80 C152,58 160,35 178,32 C198,30 208,52 200,70 C194,82 175,88 162,80" />
        <path d="M200,70 C218,55 240,55 242,72 C244,90 225,100 210,95 C198,91 195,80 200,70" />
        {/* Inner petals — tighter curls */}
        <path d="M175,90 C168,72 175,55 190,55 C205,55 210,72 200,85 C194,92 182,95 175,90" />
        <path d="M185,105 C175,118 178,135 192,138 C208,140 215,125 208,112 C203,103 192,98 185,105" />
        <path d="M170,108 C158,100 155,82 168,78 C180,75 192,88 188,100 C186,108 178,112 170,108" />
        {/* Centre — tight spiral details */}
        <path d="M185,92 C180,82 185,72 194,75 C202,78 202,90 195,94 C190,96 186,95 185,92" />
        <path d="M190,88 C188,82 192,78 196,82 C200,86 196,92 192,92" />
      </g>

      {/* ── Bud above the peony ── */}
      <g stroke="#3d3d3d" strokeWidth="0.9" fill="none" strokeLinecap="round">
        <path d="M195,32 C192,18 198,5 208,8 C218,12 218,28 210,35 C205,38 198,36 195,32" />
        <path d="M210,35 C218,25 228,22 230,32 C232,42 222,48 215,42 C210,38 210,35 210,35" />
        {/* Bud sepals */}
        <path d="M200,35 C195,42 188,42 188,35 C188,28 195,28 200,35" />
        {/* Stem connecting bud */}
        <path d="M200,38 C198,48 196,55 195,60" />
      </g>

      {/* ── Main stems curving down ── */}
      <g stroke="#3d3d3d" strokeWidth="0.85" fill="none" strokeLinecap="round">
        {/* Long arching stem from peony going down-right */}
        <path d="M205,128 C225,160 248,195 258,240 C268,285 265,330 260,380 C256,420 252,460 250,500" />
        {/* Second stem curving down-left from lower petal */}
        <path d="M115,158 C105,195 85,235 72,280 C60,325 55,375 58,430 C60,470 62,500 62,520" />
      </g>

      {/* ── Leaves along right stem ── */}
      <g stroke="#3d3d3d" strokeWidth="0.8" fill="none" strokeLinecap="round">
        {/* Leaf pair at ~200 */}
        <path d="M252,200 C268,185 288,182 292,195 C296,210 278,220 262,215 C252,212 248,206 252,200" />
        <path d="M270,198 C275,190 282,192" />
        <path d="M252,210 C238,198 228,185 232,175 C238,165 252,172 255,185 C256,192 254,200 252,210" />
        <path d="M245,192 C240,185 242,178" />

        {/* Leaf pair at ~280 */}
        <path d="M262,275 C278,260 298,258 300,272 C302,288 282,296 268,290 C258,286 256,280 262,275" />
        <path d="M278,272 C284,265 290,268" />
        <path d="M260,285 C245,275 236,260 242,250 C250,240 264,250 265,265 C265,272 262,280 260,285" />

        {/* Single leaf at ~350 */}
        <path d="M258,345 C272,330 290,330 290,345 C290,360 272,365 260,358 C254,354 254,350 258,345" />
        <path d="M272,342 C278,335 284,338" />

        {/* Small leaf at ~420 */}
        <path d="M254,415 C265,405 278,408 276,418 C274,428 260,430 255,422" />
      </g>

      {/* ── Leaves along left stem ── */}
      <g stroke="#3d3d3d" strokeWidth="0.8" fill="none" strokeLinecap="round">
        {/* Leaf pair at ~240 */}
        <path d="M78,242 C62,228 58,208 70,200 C82,192 95,208 90,225 C87,235 82,240 78,242" />
        <path d="M82,218 C75,210 72,202" />
        <path d="M72,248 C85,238 100,240 98,255 C96,268 80,270 72,260 C68,255 68,250 72,248" />

        {/* Leaf at ~310 */}
        <path d="M62,305 C48,292 45,272 58,268 C72,264 80,282 74,298 C70,308 65,310 62,305" />
        <path d="M66,282 C58,275 56,270" />

        {/* Leaf at ~380 */}
        <path d="M58,375 C70,362 85,365 82,380 C78,395 62,395 58,382" />
        <path d="M68,372 C75,368 78,372" />
      </g>

      {/* ── Second flower — lower left (smaller peony) ── */}
      <g stroke="#3d3d3d" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M35,210 C22,190 25,168 42,162 C60,156 72,175 65,192 C60,204 45,212 35,210" />
        <path d="M65,192 C78,178 95,178 95,195 C95,212 78,218 68,210 C60,204 60,198 65,192" />
        <path d="M35,210 C25,228 30,248 48,248 C65,248 72,230 62,218 C55,210 42,208 35,210" />
        {/* Inner petals */}
        <path d="M52,195 C48,180 55,170 65,175 C75,180 72,198 62,202 C56,204 52,200 52,195" />
        <path d="M55,205 C50,215 55,228 65,225 C75,222 72,210 65,205 C60,202 56,202 55,205" />
        {/* Centre */}
        <path d="M58,198 C55,190 60,185 65,190 C68,194 64,200 60,200" />
      </g>
    </svg>
  );
}

export function FloralTopRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Wild rose / anemone — upper ── */}
      <g stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Five petals radiating out */}
        <path d="M280,75 C262,52 265,28 282,20 C300,12 312,32 305,52 C300,65 290,74 280,75" />
        <path d="M305,52 C322,38 342,38 345,55 C348,72 330,82 315,75 C305,70 302,60 305,52" />
        <path d="M315,75 C335,78 348,95 338,110 C328,125 308,118 305,102 C303,90 308,80 315,75" />
        <path d="M305,102 C298,120 278,128 268,115 C258,102 270,85 285,85 C295,85 302,92 305,102" />
        <path d="M285,85 C268,78 258,58 270,48 C282,38 298,50 295,68 C293,78 288,84 285,85" />
        {/* Centre — stamens */}
        <circle cx="295" cy="80" r="8" strokeWidth="0.6" />
        <path d="M290,76 L288,70" strokeWidth="0.5" />
        <path d="M295,74 L295,68" strokeWidth="0.5" />
        <path d="M300,76 L302,70" strokeWidth="0.5" />
        <path d="M302,82 L308,80" strokeWidth="0.5" />
        <path d="M300,88 L304,92" strokeWidth="0.5" />
        <path d="M290,88 L286,92" strokeWidth="0.5" />
        <path d="M288,82 L282,80" strokeWidth="0.5" />
        {/* Stamen dots */}
        <circle cx="287" cy="69" r="1.2" strokeWidth="0.5" />
        <circle cx="295" cy="67" r="1.2" strokeWidth="0.5" />
        <circle cx="303" cy="69" r="1.2" strokeWidth="0.5" />
        <circle cx="309" cy="79" r="1.2" strokeWidth="0.5" />
        <circle cx="305" cy="93" r="1.2" strokeWidth="0.5" />
        <circle cx="285" cy="93" r="1.2" strokeWidth="0.5" />
        <circle cx="281" cy="79" r="1.2" strokeWidth="0.5" />
      </g>

      {/* ── Wild rose — lower (partially open) ── */}
      <g stroke="#3d3d3d" strokeWidth="0.9" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M340,165 C325,148 330,125 345,120 C362,115 370,135 362,152 C357,162 348,168 340,165" />
        <path d="M362,152 C378,142 395,148 392,165 C389,182 370,185 362,175 C356,168 358,158 362,152" />
        <path d="M362,175 C358,195 340,202 330,190 C320,178 332,162 345,165 C355,167 360,172 362,175" />
        <path d="M345,165 C330,158 322,140 335,132 C348,125 358,142 352,155 C348,162 345,165 345,165" />
        {/* Centre */}
        <circle cx="350" cy="162" r="6" strokeWidth="0.5" />
        <path d="M346,158 L344,153" strokeWidth="0.4" />
        <path d="M354,158 L356,153" strokeWidth="0.4" />
        <path d="M354,167 L358,170" strokeWidth="0.4" />
        <path d="M346,167 L342,170" strokeWidth="0.4" />
        <circle cx="343" cy="152" r="1" strokeWidth="0.4" />
        <circle cx="357" cy="152" r="1" strokeWidth="0.4" />
        <circle cx="359" cy="171" r="1" strokeWidth="0.4" />
        <circle cx="341" cy="171" r="1" strokeWidth="0.4" />
      </g>

      {/* ── Main stem trailing down the right side ── */}
      <g stroke="#3d3d3d" strokeWidth="0.85" fill="none" strokeLinecap="round">
        <path d="M338,110 C348,135 355,155 358,180 C362,210 355,245 345,280 C335,315 330,350 332,390 C334,420 338,450 340,480" />
        {/* Branch to upper flower */}
        <path d="M280,75 C295,90 310,100 325,108 C335,112 342,115 348,120" />
        {/* Small branch off stem */}
        <path d="M355,195 C365,185 375,185" />
      </g>

      {/* ── Leaves along stem ── */}
      <g stroke="#3d3d3d" strokeWidth="0.75" fill="none" strokeLinecap="round">
        {/* Leaf pair ~220 */}
        <path d="M350,225 C365,212 382,215 378,230 C374,245 355,245 350,235 C348,230 348,228 350,225" />
        <path d="M362,222 C370,218 375,222" />
        <path d="M348,232 C332,222 325,205 335,198 C345,192 355,208 352,222 C350,228 348,232 348,232" />
        <path d="M342,212 C338,205 340,198" />

        {/* Leaf pair ~290 */}
        <path d="M340,288 C355,275 372,278 368,292 C364,308 345,308 340,298" />
        <path d="M352,282 C360,278 365,282" />
        <path d="M342,295 C328,285 320,270 330,262 C342,255 350,272 346,288" />

        {/* Single leaf ~350 */}
        <path d="M334,348 C348,338 362,342 358,355 C354,368 338,368 334,358 C332,354 332,350 334,348" />
        <path d="M345,345 C352,340 356,345" />

        {/* Small leaf ~410 */}
        <path d="M335,408 C345,398 356,402 352,412 C348,422 336,420 335,412" />
      </g>

      {/* ── Small bud top ── */}
      <g stroke="#3d3d3d" strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M260,22 C255,10 262,0 272,2 C282,5 282,18 274,25 C268,28 262,26 260,22" />
        <path d="M272,25 C278,18 285,20 282,28 C280,35 274,32 272,25" />
        {/* Stem to main */}
        <path d="M268,28 C272,42 278,55 282,68" />
      </g>

      {/* ── Leaf spray from top ── */}
      <g stroke="#3d3d3d" strokeWidth="0.7" fill="none" strokeLinecap="round">
        <path d="M310,32 C318,18 332,15 335,28 C338,42 322,48 312,40 C308,36 308,34 310,32" />
        <path d="M322,22 C328,18 332,22" />
        <path d="M350,45 C358,30 372,30 372,45 C372,58 358,62 350,55 C346,50 348,46 350,45" />
        <path d="M360,35 C365,32 370,35" />
      </g>
    </svg>
  );
}

export function FloralBottomLeft({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Large peony bloom — bottom left ── */}
      <g stroke="#3d3d3d" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Outer petals */}
        <path d="M120,340 C100,310 105,275 125,265 C148,255 162,280 152,305 C145,322 132,338 120,340" />
        <path d="M152,305 C170,285 195,280 200,300 C205,320 185,335 168,328 C155,323 150,312 152,305" />
        <path d="M168,328 C180,348 175,372 155,378 C135,382 125,362 135,345 C142,335 155,330 168,328" />
        <path d="M120,340 C102,350 82,345 80,325 C78,305 98,295 112,305 C120,312 122,325 120,340" />
        <path d="M200,300 C218,308 225,330 212,345 C198,358 180,348 180,332 C180,320 188,310 200,300" />
        <path d="M135,345 C118,358 100,355 98,338 C96,320 115,312 125,325 C130,332 132,340 135,345" />
        {/* Inner petals */}
        <path d="M145,310 C138,292 145,275 160,278 C175,282 175,302 162,312 C155,318 148,316 145,310" />
        <path d="M158,320 C152,335 158,350 172,348 C185,345 182,328 172,322 C165,318 160,318 158,320" />
        <path d="M140,322 C130,315 128,298 140,295 C152,292 158,308 150,318 C146,322 142,324 140,322" />
        {/* Centre */}
        <path d="M152,312 C148,302 155,295 162,300 C168,305 164,315 158,316 C155,316 152,315 152,312" />
        <path d="M155,308 C154,303 158,300 161,304 C163,308 160,312 157,310" />
      </g>

      {/* ── Stems going up and right ── */}
      <g stroke="#3d3d3d" strokeWidth="0.85" fill="none" strokeLinecap="round">
        <path d="M152,305 C168,270 178,230 182,190 C185,155 182,120 178,80 C175,50 172,20 170,0" />
        <path d="M120,340 C98,360 82,380 70,400 C62,415 58,430 55,450" />
      </g>

      {/* ── Leaves along upward stem ── */}
      <g stroke="#3d3d3d" strokeWidth="0.75" fill="none" strokeLinecap="round">
        {/* Leaf pair ~180 */}
        <path d="M182,185 C198,172 215,175 212,190 C208,205 190,205 184,195 C182,192 182,188 182,185" />
        <path d="M195,178 C202,175 208,178" />
        <path d="M180,192 C165,182 158,165 168,158 C180,152 188,168 185,182 C184,188 182,192 180,192" />

        {/* Single leaf ~130 */}
        <path d="M180,128 C195,115 210,118 208,132 C205,148 188,148 182,138 C180,135 180,130 180,128" />
        <path d="M192,120 C200,118 205,122" />

        {/* Leaf ~70 */}
        <path d="M176,68 C162,58 158,42 168,35 C180,28 190,42 186,58 C184,65 180,70 176,68" />
        <path d="M178,48 C172,42 170,35" />
      </g>

      {/* ── Leaves along lower stem ── */}
      <g stroke="#3d3d3d" strokeWidth="0.75" fill="none" strokeLinecap="round">
        <path d="M78,388 C65,378 58,360 68,352 C80,345 90,360 85,375 C82,382 80,388 78,388" />
        <path d="M72,400 C85,392 98,398 94,410 C90,422 75,420 72,410" />
      </g>

      {/* ── Small bud ── */}
      <g stroke="#3d3d3d" strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M210,255 C205,242 212,230 222,235 C232,240 228,255 220,258 C215,260 212,258 210,255" />
        <path d="M218,258 C215,268 212,278" />
      </g>
    </svg>
  );
}

export function FloralBottomRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Trailing vine with leaves and buds ── */}
      <g stroke="#3d3d3d" strokeWidth="0.85" fill="none" strokeLinecap="round">
        {/* Main stem curving from top-right down to bottom-left */}
        <path d="M280,0 C275,30 268,65 255,100 C240,140 222,175 210,215 C198,255 192,290 190,330 C188,360 188,385 190,400" />
      </g>

      {/* ── Leaves ── */}
      <g stroke="#3d3d3d" strokeWidth="0.75" fill="none" strokeLinecap="round">
        {/* Leaf pair ~60 */}
        <path d="M272,58 C285,45 300,48 298,62 C295,78 278,78 272,68 C270,64 270,60 272,58" />
        <path d="M285,50 C292,48 296,52" />
        <path d="M270,65 C255,55 250,38 260,32 C272,26 280,42 276,58 C274,62 272,65 270,65" />

        {/* Leaf pair ~130 */}
        <path d="M248,128 C262,115 278,118 275,132 C272,148 255,148 250,138 C248,134 248,130 248,128" />
        <path d="M262,120 C268,118 274,122" />
        <path d="M246,135 C232,125 228,108 238,102 C250,96 256,112 252,128" />

        {/* Leaf pair ~200 */}
        <path d="M215,198 C228,185 245,190 240,205 C235,218 218,218 215,208 C214,204 214,200 215,198" />
        <path d="M228,190 C235,188 240,192" />
        <path d="M212,205 C198,195 192,178 202,172 C215,168 220,185 215,198" />

        {/* Single leaf ~270 */}
        <path d="M195,268 C208,258 222,262 218,275 C214,288 198,288 195,278 C194,274 194,270 195,268" />
        <path d="M206,262 C212,260 218,265" />

        {/* Small leaf ~340 */}
        <path d="M190,335 C200,325 212,330 208,342 C204,352 192,350 190,340" />
      </g>

      {/* ── Small bud ── */}
      <g stroke="#3d3d3d" strokeWidth="0.8" fill="none" strokeLinecap="round">
        <path d="M295,25 C290,15 295,5 305,8 C312,12 310,24 302,28 C298,30 295,28 295,25" />
        <path d="M300,28 C298,38 295,48" />
      </g>
    </svg>
  );
}
