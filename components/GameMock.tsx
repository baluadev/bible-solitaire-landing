/** A CSS-built replica of the gameplay screen (390×844 design) shown inside the hero phone. */
const Cross = ({ s = 20 }: { s?: number }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z" />
  </svg>
);
const Star = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 20.9l1.6-7L2 9.2l7.1-.6z" />
  </svg>
);
const Back = ({ x, y }: { x: number; y: number }) => <div className="pcard sm back" style={{ left: x, top: y }} />;
const Pic = ({ x, y, src, children }: { x: number; y: number; src: string; children?: React.ReactNode }) => (
  <div className="pcard sm" style={{ left: x, top: y }}>
    <img src={src} alt="" />
    {children}
  </div>
);

export default function GameMock() {
  return (
    <div className="gm" role="img" aria-label="Bible Solitaire gameplay: picture cards of saints sorted into topic slots, with four boosters along the bottom">
      <div className="gm-screen" aria-hidden="true">
        <div className="gm-moves"><span>MOVES</span><b>81</b></div>
        <div className="gm-level"><span>Level 128</span></div>
        <div className="gm-pause"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M8 5v14M16 5v14" /></svg></div>

        {/* top row */}
        <div className="pcard sm slot" style={{ left: 50, top: 140 }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
        </div>
        <Pic x={125} y={140} src="/images/card-mary.jpg" />
        <Pic x={153} y={140} src="/images/card-spirit.jpg" />
        <Pic x={181} y={140} src="/images/card-joseph.jpg" />
        <div className="gm-deck" style={{ left: 278, top: 136 }}>
          <div className="pcard sm back" style={{ left: 4, top: 4, opacity: 0.75 }} />
          <div className="pcard sm back" style={{ left: 2, top: 2, opacity: 0.9 }} />
          <div className="pcard sm back" style={{ left: 0, top: 0 }} />
          <span className="chip gold">20</span>
        </div>

        {/* second row */}
        <Pic x={50} y={252} src="/images/card-mary.jpg"><span className="chip">4/12</span></Pic>
        <div className="pcard sm topic" style={{ left: 126, top: 252 }}>
          <span className="chip">0/10</span>
          <span className="emb"><Star /></span>
          <span className="band">Christmas</span>
        </div>
        <div className="pcard sm slot" style={{ left: 202, top: 252 }}><Cross s={20} /></div>
        <div className="pcard sm slot" style={{ left: 278, top: 252 }}><Cross s={20} /></div>

        {/* columns */}
        <Back x={50} y={368} /><Back x={50} y={380} />
        <Pic x={50} y={392} src="/images/card-peter.jpg" />
        <Back x={126} y={368} />
        <div className="ring"><Pic x={126} y={380} src="/images/card-spirit.jpg" /></div>
        <Back x={202} y={368} /><Back x={202} y={380} /><Back x={202} y={392} />
        <div className="pcard sm joker" style={{ left: 202, top: 404 }}>
          <img src="/images/joker-olive.png" alt="" /><span>Olive</span>
        </div>
        <Back x={278} y={368} /><Back x={278} y={380} /><Back x={278} y={392} /><Back x={278} y={404} />
        <div className="pcard sm topic" style={{ left: 278, top: 416 }}>
          <span className="chip">5</span>
          <span className="emb"><Cross s={22} /></span>
          <span className="band">St Joseph</span>
        </div>

        {/* boosters */}
        {[
          ["booster-candle.png", "Candle", "3", 20],
          ["booster-net.png", "Fishing Net", "2", 110],
          ["booster-book.png", "The Book", "+", 200],
          ["joker-olive.png", "Olive Branch", "1", 290],
        ].map(([img, name, n, x]) => (
          <div className="gm-boost" key={name as string} style={{ left: x as number }}>
            <img src={`/images/${img}`} alt="" />
            <span className="nm">{name}</span>
            <span className={`ct${n === "+" ? " plus" : ""}`}>{n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
