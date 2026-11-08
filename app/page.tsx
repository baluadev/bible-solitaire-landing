import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StoreButtons from "@/components/StoreButtons";
import GameMock from "@/components/GameMock";

const marquee = [
  { src: "/images/card-peter.jpg", alt: "St Peter card" },
  { src: "/images/card-mary.jpg", alt: "Our Lady card" },
  { src: "/images/card-spirit.jpg", alt: "Holy Spirit card" },
  { src: "/images/card-joseph.jpg", alt: "St Joseph card" },
];

const steps = [
  { title: "Pick a topic", text: "Drag a topic card, such as The Apostles, onto an empty slot." },
  { title: "Sort the pictures", text: "Drop picture cards that belong to that topic on top of it." },
  { title: "Complete the set", text: "Fill the counter, say Alleluia and free the slot for the next topic." },
  { title: "Clear the board", text: "Sort every topic before your moves run out. Boosters help when you're stuck." },
];

const cardKinds = [
  { kind: "pic", src: "/images/card-peter.jpg", title: "Picture card", text: "Saints and Scripture drawn simply, with dignity." },
  { kind: "topic", title: "Topic card", text: "Pale gold, with a counter. Everything of that topic goes on top." },
  { kind: "joker", title: "Joker", text: "The olive branch fits where you need it." },
  { kind: "back", title: "Card back", text: "The rose window, centred on deep lapis." },
];

const boosters = [
  { img: "/images/booster-candle.png", name: "Candle", text: "Light the way: it suggests a move you can make." },
  { img: "/images/booster-net.png", name: "Fishing Net", text: "Casts out and draws in the cards you need." },
  { img: "/images/booster-book.png", name: "The Book", text: "Open it and choose the topic to work on." },
  { img: "/images/joker-olive.png", name: "Olive Branch", text: "A joker card that fits when nothing else does." },
];

const seasons = [
  { theme: "sanctuary", name: "Sanctuary", when: "Ordinary Time", note: "Lapis blue and gold, like cathedral windows." },
  { theme: "illuminated", name: "Illuminated", when: "Christmas & Easter", note: "Liturgical white and gold on prayer-book vellum." },
  { theme: "cloister", name: "Cloister", when: "Advent & Lent", note: "Liturgical violet and cloister stone." },
];

const features = [
  {
    icon: "I",
    title: "Topics, not suits",
    text: "Sort cards by what they are about: The Apostles, Christmas, All Saints and more. A friendly twist on solitaire for anyone who loves the stories.",
  },
  { icon: "II", title: "A pilgrimage of levels", text: "Walk the Journey level by level, with seasonal paths like the Advent Journey. Locked and veiled cards add new puzzles as you go." },
  { icon: "III", title: "Ranks", text: "Climb the leaderboard and see how your fellow pilgrims are doing." },
  { icon: "IV", title: "Daily gift & Pilgrim Pass", text: "Come back each day for a gift, with a big reward on day 7, and collect rewards on the season pass." },
  { icon: "V", title: "Seasonal events", text: "Win Streak, Vineyard harvest race, Stained Glass quest and more, each with its own prizes." },
  {
    icon: "VI",
    title: "Reverent, never a casino",
    text: "No sacrament names or “grace” on anything you can buy. Pax never holds playing cards, only flowers, candles and lanterns.",
  },
];

function Arches() {
  return (
    <svg className="arches" viewBox="0 0 1440 72" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 72 V48 Q0 24 40 24 T80 48 T120 24 T160 48 T200 24 T240 48 T280 24 T320 48 T360 24 T400 48 T440 24 T480 48 T520 24 T560 48 T600 24 T640 48 T680 24 T720 48 T760 24 T800 48 T840 24 T880 48 T920 24 T960 48 T1000 24 T1040 48 T1080 24 T1120 48 T1160 24 T1200 48 T1240 24 T1280 48 T1320 24 T1360 48 T1400 24 T1440 48 V72 Z"
        style={{ fill: "var(--card-face)" }}
      />
    </svg>
  );
}

function Cross({ s = 34 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 2h4v6h6v4h-6v10h-4V12H4V8h6z" />
    </svg>
  );
}

function CardKind({ k }: { k: (typeof cardKinds)[number] }) {
  if (k.kind === "pic")
    return (
      <div className="pcard lg">
        <img src={k.src} alt="St Peter picture card" />
      </div>
    );
  if (k.kind === "topic")
    return (
      <div className="pcard lg topic">
        <span className="chip">12</span>
        <span className="emb"><Cross /></span>
        <span className="band">Apostles</span>
      </div>
    );
  if (k.kind === "joker")
    return (
      <div className="pcard lg joker">
        <img src="/images/joker-olive.png" alt="" />
        <span>Olive Branch</span>
      </div>
    );
  return (
    <div className="pcard lg back">
      <img src="/images/card-back.png" alt="Card back with a rose window" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader variant="home" />

      <section id="top" className="hero">
        <div className="rays" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow hero-eyebrow">Card-sorting solitaire</span>
            <h1>
              Sort by topic. <em>Clear the board.</em>
            </h1>
            <p className="hero-lead">
              Bible Solitaire is card-sorting solitaire with Catholic topics. Drag picture cards of saints and
              Scripture onto their topic, complete the set and cry Alleluia.
            </p>
            <StoreButtons id="download" />
            <div className="hero-facts">
              <span>Sort by topic</span>
              <span>Boosters when you&apos;re stuck</span>
              <span>Colours follow the Church year</span>
            </div>
          </div>

          <div className="hero-stage">
            <img className="pax-sticker" src="/images/pax-wave.png" alt="Pax, a little lamb, waving" />
            <div className="phone">
              <GameMock />
            </div>
            <div className="float-card pic f1"><img src="/images/card-peter.jpg" alt="" /></div>
            <div className="float-card pic f2"><img src="/images/card-spirit.jpg" alt="" /></div>
            <div className="float-card pic f3"><img src="/images/card-mary.jpg" alt="" /></div>
          </div>
        </div>
        <Arches />
      </section>

      <section className="strip" aria-label="Card examples">
        <div className="marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="mq-group" aria-hidden={dup === 1}>
              {[...marquee, ...marquee].map((c, i) => (
                <div className="card" key={`${dup}-${i}`}>
                  <img src={c.src} alt={dup === 0 && i < marquee.length ? c.alt : ""} />
                </div>
              ))}
              <span className="tag">sort by topic, not by suit · saints, Scripture and more ·</span>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="container how">
        <div className="section-head">
          <span className="eyebrow">How to play</span>
          <h2>Easy to learn. Plenty to think about.</h2>
          <p>If you know word-association solitaire, this is the same satisfying sorting, with pictures and topics.</p>
        </div>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step-num">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cards" className="board-section" aria-label="The cards">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The cards</span>
            <h2>Simple shapes, clear at a glance</h2>
            <p>Every card is cream with an ink outline on lapis blue. Readable on a small phone, calm to look at.</p>
          </div>
          <div className="kinds">
            {cardKinds.map((k) => (
              <figure key={k.title} className="kind">
                <CardKind k={k} />
                <figcaption>
                  <b>{k.title}</b>
                  <span>{k.text}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="boosters" className="container boosters">
        <div className="section-head">
          <span className="eyebrow">Boosters</span>
          <h2>A little help when you need it</h2>
          <p>Four helpers sit along the bottom of every board. Earn them from gifts and events, or find more in the Shop.</p>
        </div>
        <div className="boost-grid">
          {boosters.map((b) => (
            <div className="boost" key={b.name}>
              <div className="boost-tile"><img src={b.img} alt="" /></div>
              <h3>{b.name}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="container features">
        <div className="section-head">
          <span className="eyebrow">Why you&apos;ll love it</span>
          <h2>Made for a quiet moment</h2>
          <p>A few minutes with your morning coffee, an evening wind-down, or a pause in the day.</p>
        </div>
        <div className="feats">
          {features.map((f) => (
            <div className="feat" key={f.title}>
              <div className="ico" aria-hidden="true">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="seasons" className="board-section" aria-label="Seasonal themes">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The Church year</span>
            <h2>The colours change with the season</h2>
            <p>The game, and this page, follow the liturgical calendar on their own. Come back in Advent and see.</p>
          </div>
          <div className="seasons">
            {seasons.map((s) => (
              <div className="season" data-theme={s.theme} key={s.theme}>
                <div className="season-board">
                  <div className="pcard sm topic">
                    <span className="chip">12</span>
                    <span className="emb"><Cross s={22} /></span>
                    <span className="band">Saints</span>
                  </div>
                  <span className="season-btn">Continue</span>
                </div>
                <h3>{s.name}</h3>
                <b>{s.when}</b>
                <p>{s.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pax" className="pax">
        <div className="container pax-grid">
          <div className="pax-art">
            <div className="frame">
              <img src="/images/pax-key.jpg" alt="Pax the lamb holding a lantern before a rose window, with lilies on both sides" loading="lazy" />
              <span>Pax, your guide</span>
            </div>
          </div>
          <div className="pax-copy">
            <span className="eyebrow">Meet Pax</span>
            <h2>A little lamb who walks the pilgrimage with you</h2>
            <p>
              Pax is the lamb of the lost-sheep parable. It waves hello, cheers every finished topic and carries a
              lily, a candle or a lantern, never a deck of cards.
            </p>
            <div className="bubble">
              <img src="/images/pax-win.png" alt="" />
              <span>&ldquo;Alleluia! You completed the topic The Apostles.&rdquo;</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="inner">
            <img src="/images/icon.png" alt="" className="icon" width={96} height={96} />
            <h2>Take a quiet moment with the saints</h2>
            <p>Coming soon to Google Play and the App Store.</p>
            <StoreButtons center />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
