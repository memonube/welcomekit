// Sections of the developer welcome microsite.
const { useState, useEffect, useRef } = React;

function Nav() {
  const [t] = window.useT();
  return (
    <nav className="nav">
      <div className="nav__brand">
        <img src="assets/logo-tiendanube.png" alt="Tiendanube" className="nav__logo" />
        <span className="pill">Developers</span>
      </div>
      <div className="nav__links">
        <a href="#quickstart">{t("nav.start")}</a>
        <a href="#api">{t("nav.api")}</a>
        <a href="#docs">{t("nav.docs")}</a>
        <a href="#tools">{t("nav.tools")}</a>
        <a href="#support">{t("nav.support")}</a>
      </div>
      <a className="nav__cta" href="https://partners.tiendanube.com/" target="_blank" rel="noopener">
        {t("nav.cta")} <Ic.ArrowUR width="14" height="14" />
      </a>
    </nav>);
}

function Hero() {
  const [t] = window.useT();
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero__layout">
          <div>
            <div className="hero__eyebrow">
              <span className="dot">→</span>
              <b>{t("hero.eyebrow.kit")}</b>
              <span>{t("hero.eyebrow.tag")}</span>
            </div>
            <h1>
              <span className="sans">{t("hero.title.1")}</span>
              <span className="serif" style={{ fontSize: "100px" }}>{t("hero.title.2")}</span>
              <span className="sans">{t("hero.title.3")}</span>
            </h1>
            <p className="lede">{t("hero.lede")}</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#quickstart">
                {t("hero.cta.primary")} <Ic.Arrow width="16" height="16" />
              </a>
              <a className="btn btn--ghost" href="https://github.com/TiendaNube/api-docs" target="_blank" rel="noopener">
                <Ic.Github width="16" height="16" /> {t("hero.cta.github")}
              </a>
            </div>
          </div>
          <HeroTerminal />
        </div>
      </div>
    </header>);
}

function HeroTerminal() {
  const [t] = window.useT();
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard?.writeText("curl https://api.tiendanube.com/v1/{store_id}/products");
    setCopied(true); setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="terminal" role="figure" aria-label="API request preview">
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: "#FF5F57" }} />
        <span className="terminal__dot" style={{ background: "#FEBC2E" }} />
        <span className="terminal__dot" style={{ background: "#28C840" }} />
        <span className="terminal__title">{t("term.title")}</span>
        <button onClick={onCopy} aria-label="Copy"
        style={{ marginLeft: "auto", background: "transparent", border: 0, color: "rgba(255,255,255,0.55)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "inherit" }}>
          <Ic.Copy width="12" height="12" /> {copied ? "copied" : "copy"}
        </button>
      </div>
      <div className="terminal__body">
        <div><span className="comment">{t("term.comment.auth")}</span></div>
        <div><span className="prompt">$</span> curl https://api.tiendanube.com<span style={{ opacity: .7 }}>/v1/</span><span className="key">{`{store_id}`}</span>/products \</div>
        <div style={{ paddingLeft: "1.6em" }}>-H <span className="str">"Authentication: bearer $TOKEN"</span> \</div>
        <div style={{ paddingLeft: "1.6em" }}>-H <span className="str">"User-Agent: MyApp (dev@myapp.com)"</span></div>
        <div style={{ height: 14 }} />
        <div><span className="comment">{t("term.comment.ok")}</span></div>
        <div>{`{`}</div>
        <div style={{ paddingLeft: "1.4em" }}><span className="key">"id"</span>: <span className="num">12345</span>,</div>
        <div style={{ paddingLeft: "1.4em" }}><span className="key">"name"</span>: <span className="str">"Sneakers retro"</span>,</div>
        <div style={{ paddingLeft: "1.4em" }}><span className="key">"variants"</span>: [<span className="num">3</span>],</div>
        <div style={{ paddingLeft: "1.4em" }}><span className="key">"published"</span>: <span className="ok">true</span></div>
        <div>{`}`}</div>
      </div>
    </div>);
}

function Quickstart() {
  const [t] = window.useT();
  const steps = [
    { n: "01", k: "s1", url: "https://partners.tiendanube.com/" },
    { n: "02", k: "s2", url: "https://github.com/TiendaNube/api-docs" },
    { n: "03", k: "s3", url: "https://github.com/TiendaNube/api-docs" },
    { n: "04", k: "s4", url: "mailto:hola+ecosystem@tiendanube.com" },
  ];
  return (
    <section id="quickstart" className="block quickstart">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> {t("qs.eyebrow")}</div>
        <h2>{t("qs.title.1")}<br /><span className="serif">{t("qs.title.2")}</span></h2>
        <p className="sub">{t("qs.sub")}</p>
        <div className="timeline">
          {steps.map((s) =>
          <article className="step" key={s.n}>
              <div className="step__num">{s.n}</div>
              <div className="step__tag">{t(`qs.${s.k}.tag`)}</div>
              <h3>{t(`qs.${s.k}.title`)}</h3>
              <p>{t(`qs.${s.k}.p`)}</p>
              <a className="step__link" href={s.url} target={s.url.startsWith("mailto") ? "_self" : "_blank"} rel="noopener">
                {t(`qs.${s.k}.link`)} <Ic.Arrow width="14" height="14" />
              </a>
            </article>
          )}
        </div>
      </div>
    </section>);
}

function Capabilities() {
  const [t] = window.useT();
  return (
    <section id="api" className="block capabilities">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> {t("cap.eyebrow")}</div>
        <h2>{t("cap.title.1")}<br /><span className="serif">{t("cap.title.2")}</span></h2>
        <p className="sub">{t("cap.sub")}</p>

        <div className="bento">
          <article className="cap cap--big">
            <Ic.Box className="cap__icon" />
            <div>
              <h3>{t("cap.products.title")}</h3>
              <p>{t("cap.products.p")}</p>
            </div>
            <div className="cap__endpoint"><span className="verb">GET</span> /v1/{`{store_id}`}/products</div>
          </article>

          <article className="cap cap--wide">
            <Ic.Cart className="cap__icon" />
            <h3>{t("cap.orders.title")}</h3>
            <p>{t("cap.orders.p")}</p>
            <div className="cap__endpoint"><span className="verb">GET</span> /v1/{`{store_id}`}/orders</div>
          </article>

          <article className="cap cap--med">
            <Ic.Card className="cap__icon" />
            <h3>{t("cap.payments.title")}</h3>
            <p>{t("cap.payments.p")}</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /payment_providers</div>
          </article>

          <article className="cap cap--med">
            <Ic.Truck className="cap__icon" />
            <h3>{t("cap.shipping.title")}</h3>
            <p>{t("cap.shipping.p")}</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /shipping_carriers</div>
          </article>

          <article className="cap cap--med">
            <Ic.Settings className="cap__icon" />
            <h3>{t("cap.store.title")}</h3>
            <p>{t("cap.store.p")}</p>
            <div className="cap__endpoint"><span className="verb">GET</span> /store</div>
          </article>

          <article className="cap cap--med">
            <Ic.Tag className="cap__icon" />
            <h3>{t("cap.coupons.title")}</h3>
            <p>{t("cap.coupons.p")}</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /coupons</div>
          </article>

          <article className="cap cap--med">
            <Ic.Users className="cap__icon" />
            <h3>{t("cap.partners.title")}</h3>
            <p>{t("cap.partners.p")}</p>
            <div className="cap__endpoint"><span className="verb">→</span> partners.tiendanube.com</div>
          </article>
        </div>
      </div>
    </section>);
}

function Docs() {
  const [t] = window.useT();
  const docs = [
    { feature: true, k: "d1", url: "github.com/TiendaNube/api-docs", href: "https://github.com/TiendaNube/api-docs" },
    { k: "d2", urlKey: "docs.guide", href: "https://github.com/TiendaNube/api-docs" },
    { k: "d3", urlKey: "docs.guide", href: "https://drive.google.com/file/d/1XfBHsFBSGqZegcVTqkHcGA75hI1kA0y-/view" },
  ];
  return (
    <section id="docs" className="block docs">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> {t("docs.eyebrow")}</div>
        <h2>{t("docs.title.1")}<br /><span className="serif">{t("docs.title.2")}</span></h2>
        <p className="sub">{t("docs.sub")}</p>
        <div className="docs__grid">
          {docs.map((d, i) =>
          <a className={"doc-card" + (d.feature ? " doc-card--feature" : "")} key={i} href={d.href} target="_blank" rel="noopener">
              <div className="doc-card__tag">{t(`docs.${d.k}.tag`)}</div>
              <h3>{t(`docs.${d.k}.title`)}</h3>
              <p>{t(`docs.${d.k}.p`)}</p>
              <div className="doc-card__list">
                {[1,2,3,4].map(n => <span key={n}><span className="bullet" />{t(`docs.${d.k}.l${n}`)}</span>)}
              </div>
              <div className="doc-card__url">
                <span>{d.url || t(d.urlKey)}</span>
                <span className="arr"><Ic.ArrowUR width="16" height="16" /></span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);
}

function Tools() {
  const [t] = window.useT();
  const tools = [
    { icon: <Ic.Play />, k: "t1", href: "https://www.loom.com/share/49c8a8b6bcab4649a8a46ea76c54f929" },
    { icon: <Ic.Play />, k: "t2", href: "https://drive.google.com/file/d/1vzyXisRftG68j5X40LiA0Y6v0F_co6w4/view" },
    { icon: <Ic.Doc />,  k: "t3", href: "https://drive.google.com/file/d/1XfBHsFBSGqZegcVTqkHcGA75hI1kA0y-/view?usp=sharing" },
    { icon: <Ic.Bolt />, k: "t4", href: "https://github.com/TiendaNube/api-docs/tree/master/utils/postman" },
  ];
  const extras = [
    { tag: "Storefront SDK", title: "Storefront SDK",         pKey: "extras.sdk.p",    href: "https://dev.nuvemshop.com.br/en/docs/applications/nube-sdk/overview" },
    { tag: "Nimbus",         titleKey: "extras.nimbus.title", pKey: "extras.nimbus.p", href: "https://dev.tiendanube.com/docs/developer-tools/nimbus" },
    { tag: "Nexo",           title: "Nexo",                   pKey: "extras.nexo.p",   href: "https://dev.tiendanube.com/docs/developer-tools/nexo" },
  ];
  return (
    <section id="tools" className="block tools">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> {t("tools.eyebrow")}</div>
        <h2>{t("tools.title.1")}<br /><span className="serif">{t("tools.title.2")}</span></h2>
        <p className="sub">{t("tools.sub")}</p>

        <AniaCard />

        <div className="tools__grid">
          {tools.map((tool, i) =>
          <a className="tool" key={i} href={tool.href} target="_blank" rel="noopener">
              <div className="tool__icon">{React.cloneElement(tool.icon, { width: 22, height: 22 })}</div>
              <div className="tool__body">
                <div className="tool__tag">{t(`tools.${tool.k}.tag`)}</div>
                <h3>{t(`tools.${tool.k}.title`)}</h3>
                <p>{t(`tools.${tool.k}.p`)}</p>
              </div>
              <div className="tool__arrow"><Ic.ArrowUR width="20" height="20" /></div>
            </a>
          )}
        </div>

        <div className="extras">
          <div className="extras__head">{t("extras.head")}</div>
          <div className="extras__grid">
            {extras.map((e) =>
            <a className="extra" key={e.tag} href={e.href} target="_blank" rel="noopener">
                <div className="extra__tag">{e.tag}</div>
                <h4>{e.title || t(e.titleKey)}</h4>
                <p>{t(e.pKey)}</p>
                <span className="extra__arr"><Ic.ArrowUR width="14" height="14" /></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);
}

function AniaCard() {
  const [t] = window.useT();
  // {code}, {access_token}, {endpoint} placeholders → render as <code>
  const renderA1 = () => {
    const raw = t("ania.a1");
    const map = { code: "code", access_token: "access_token", endpoint: "/apps/authorize/token" };
    const parts = raw.split(/(\{code\}|\{access_token\}|\{endpoint\})/g);
    return parts.map((p, i) => {
      const m = p.match(/^\{(.+)\}$/);
      return m ? <code key={i}>{map[m[1]]}</code> : <React.Fragment key={i}>{p}</React.Fragment>;
    });
  };
  return (
    <a className="ania" href="https://nube.tienda/ania" target="_blank" rel="noopener">
      <div className="ania__glow" />
      <div className="ania__body">
        <div className="ania__tag">
          <span className="ania__dot" /> {t("ania.tag")}
        </div>
        <h3>{t("ania.title.1")} <span className="serif">anIA.</span></h3>
        <p>{t("ania.p")}</p>
        <div className="ania__url">
          <span className="mono">https://nube.tienda/ania</span>
          <span className="ania__cta">{t("ania.cta")} <Ic.ArrowUR width="16" height="16" /></span>
        </div>
      </div>
      <div className="ania__chat" aria-hidden="true">
        <div className="ania__msg ania__msg--you">{t("ania.q1")}</div>
        <div className="ania__msg ania__msg--ania">
          <span className="ania__avatar">A</span>
          <span>{renderA1()}…</span>
        </div>
        <div className="ania__msg ania__msg--you">{t("ania.q2")}</div>
      </div>
    </a>);
}

function Support() {
  const [t] = window.useT();
  return (
    <section id="support" className="block support">
      <div className="wrap">
        <div className="support__inner">
          <div className="support__layout">
            <div>
              <div className="eyebrow" style={{ color: "var(--ns-highlight-blue)" }}><span className="arrow" /> {t("sup.eyebrow")}</div>
              <h2>{t("sup.title.1")}<br /><span className="serif">{t("sup.title.2")}</span></h2>
              <p className="sub" style={{ marginTop: 24 }}>{t("sup.sub")}</p>
              <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href="https://partners.tiendanube.com/" target="_blank" rel="noopener">
                  {t("sup.cta.partner")} <Ic.Arrow width="16" height="16" />
                </a>
                <a className="btn btn--ghost" href="https://github.com/TiendaNube/api-docs" target="_blank" rel="noopener">
                  <Ic.Book width="16" height="16" /> {t("sup.cta.docs")}
                </a>
              </div>
            </div>
            <aside className="support__contact">
              <div className="label">{t("sup.label")}</div>
              <h3>{t("sup.h")}</h3>
              <p>{t("sup.p")}</p>
              <a className="email" href="mailto:hola+ecosystem@tiendanube.com">
                <Ic.Mail width="16" height="16" /> hola+ecosystem@tiendanube.com
              </a>
            </aside>
          </div>
        </div>
      </div>
    </section>);
}

function Foot() {
  const [t] = window.useT();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__brand">
          <svg width="22" height="16" viewBox="0 0 30.526 22" aria-hidden="true" style={{ color: "var(--ns-nimbus-blue)" }}>
            <path fill="currentColor" d="M 19.551 0 C 16.662 0 13.924 1.129 11.885 3.119 C 10.845 2.679 9.716 2.449 8.556 2.449 C 3.838 2.439 0 6.277 0 10.995 C 0 15.713 3.838 19.551 8.556 19.551 C 9.706 19.551 10.835 19.321 11.875 18.881 C 13.854 20.811 16.562 22 19.531 22 C 25.598 22 30.526 17.072 30.526 11.005 C 30.526 4.938 25.608 0 19.551 0 Z M 19.531 19.551 C 14.813 19.551 10.975 15.713 10.975 10.995 L 8.536 10.995 C 8.536 13.154 9.166 15.163 10.235 16.862 C 9.686 17.022 9.116 17.102 8.546 17.102 C 5.178 17.102 2.739 14.363 2.739 10.995 C 2.739 7.627 5.178 4.888 8.546 4.888 C 9.876 4.888 11.145 5.308 12.214 6.107 C 13.764 7.277 14.663 9.056 14.663 10.995 L 17.102 10.995 C 17.102 8.436 15.993 6.077 14.044 4.448 C 15.573 3.169 17.512 2.449 19.531 2.449 C 24.239 2.449 28.077 6.287 28.077 11.005 C 28.077 15.723 24.239 19.561 19.521 19.561 Z" />
          </svg>
          <span><b>Tiendanube</b> · {t("foot.brand")}</span>
        </div>
        <div className="foot__meta">{t("foot.meta")}</div>
      </div>
    </footer>);
}

Object.assign(window, { Nav, Hero, Quickstart, Capabilities, Docs, Tools, Support, Foot });
