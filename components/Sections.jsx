// Sections of the developer welcome microsite.
const { useState, useEffect, useRef } = React;

function Nav() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const onScroll = () => setLight(window.scrollY > 200 && document.body.classList.contains("dir-editorial"));
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={"nav" + (light ? " is-light" : "")}>
      <div className="nav__brand">
        <img src="assets/logo-tiendanube.png" alt="Tiendanube" className="nav__logo" />
        <span className="pill">Developers</span>
      </div>
      <div className="nav__links">
        <a href="#quickstart">Cómo empezar</a>
        <a href="#api">Recursos API</a>
        <a href="#docs">Documentación</a>
        <a href="#tools">Herramientas</a>
        <a href="#support">Soporte</a>
      </div>
      <a className="nav__cta" href="https://partners.tiendanube.com/" target="_blank" rel="noopener">
        Crear cuenta partner <Ic.ArrowUR width="14" height="14" />
      </a>
    </nav>);

}

function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div className="hero__layout">
          <div>
            <div className="hero__eyebrow">
              <span className="dot">→</span>
              <b>Welcome Pack</b>
              <span>· Developers · Tiendanube</span>
            </div>
            <h1>
              <span className="sans">Construye sobre</span>
              <span className="serif" style={{ fontSize: "100px" }}>el ecosistema de e‑commerce</span>
              <span className="sans">más grande de LATAM.</span>
            </h1>
            <p className="lede">Una guía simple y al grano para que tu integración llegue a más de 190 mil tiendas en Argentina, Brasil, Chile, Colombia y México. Conoce qué puedes construir, cómo empezar y dónde encontrar todo lo que necesitas.

            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#quickstart">
                Comenzar en 4 pasos <Ic.Arrow width="16" height="16" />
              </a>
              <a className="btn btn--ghost" href="https://github.com/TiendaNube/api-docs" target="_blank" rel="noopener">
                <Ic.Github width="16" height="16" /> Ver en GitHub
              </a>
            </div>
          </div>
          <HeroTerminal />
        </div>
      </div>
    </header>);

}

function HeroTerminal() {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard?.writeText("curl https://api.tiendanube.com/v1/{store_id}/products");
    setCopied(true);setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="terminal" role="figure" aria-label="API request preview">
      <div className="terminal__bar">
        <span className="terminal__dot" style={{ background: "#FF5F57" }} />
        <span className="terminal__dot" style={{ background: "#FEBC2E" }} />
        <span className="terminal__dot" style={{ background: "#28C840" }} />
        <span className="terminal__title">~/integration · primer request</span>
        <button onClick={onCopy} aria-label="Copy"
        style={{ marginLeft: "auto", background: "transparent", border: 0, color: "rgba(255,255,255,0.55)", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontFamily: "inherit" }}>
          <Ic.Copy width="12" height="12" /> {copied ? "copied" : "copy"}
        </button>
      </div>
      <div className="terminal__body">
        <div><span className="comment"># 1. autentica con tu access token</span></div>
        <div><span className="prompt">$</span> curl https://api.tiendanube.com<span style={{ opacity: .7 }}>/v1/</span><span className="key">{`{store_id}`}</span>/products \</div>
        <div style={{ paddingLeft: "1.6em" }}>-H <span className="str">"Authentication: bearer $TOKEN"</span> \</div>
        <div style={{ paddingLeft: "1.6em" }}>-H <span className="str">"User-Agent: MiApp (dev@miapp.com)"</span></div>
        <div style={{ height: 14 }} />
        <div><span className="comment"># → 200 OK</span></div>
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
  const steps = [
  { n: "01", tag: "Cuenta", title: "Crea una cuenta de partner", p: "Acceso a tu app, tienda de testing y panel de partners. Toma 2 minutos.", link: "partners.tiendanube.com", url: "https://partners.tiendanube.com/" },
  { n: "02", tag: "App", title: "Crea una aplicación", p: "Configura scopes, redirect URI y obtén tus credenciales OAuth para producción y test.", link: "Guía paso a paso", url: "https://github.com/TiendaNube/api-docs" },
  { n: "03", tag: "Build", title: "Conecta la API", p: "Empieza con productos, órdenes o webhooks. Todos los recursos están en la documentación general.", link: "Ver API docs", url: "https://github.com/TiendaNube/api-docs" },
  { n: "04", tag: "Soporte", title: "Habla con Tech Support", p: "Si te atoras, nuestro equipo responde en menos de 24h. También revisamos tu integración antes de salir.", link: "hola+ecosystem@tiendanube.com", url: "mailto:hola+ecosystem@tiendanube.com" }];

  return (
    <section id="quickstart" className="block quickstart">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> Cómo empezar · Quickstart</div>
        <h2>Cuatro pasos<br /><span className="serif">y estás integrando.</span></h2>
        <p className="sub">El proceso de desarrollo en Tiendanube está pensado para ser corto. Estos son los 4 pasos que recorres desde cero hasta tu primer request en producción.</p>
        <div className="timeline">
          {steps.map((s) =>
          <article className="step" key={s.n}>
              <div className="step__num">{s.n}</div>
              <div className="step__tag">{s.tag}</div>
              <h3>{s.title}</h3>
              <p>{s.p}</p>
              <a className="step__link" href={s.url} target={s.url.startsWith("mailto") ? "_self" : "_blank"} rel="noopener">
                {s.link} <Ic.Arrow width="14" height="14" />
              </a>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function Capabilities() {
  return (
    <section id="api" className="block capabilities">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> Recursos disponibles</div>
        <h2>Qué puedes hacer<br /><span className="serif">con nuestra API.</span></h2>
        <p className="sub">REST, JSON y OAuth 2.0. Una sola API cubre todo el ciclo de la tienda — desde el catálogo hasta el checkout, los envíos y el marketing. Estos son los recursos disponibles.</p>

        <div className="bento">
          <article className="cap cap--big">
            <Ic.Box className="cap__icon" />
            <div>
              <h3>Productos &amp; catálogo</h3>
              <p>Crea, lista y actualiza productos, variantes, stock, imágenes y categorías. El recurso más usado del ecosistema — la base de cualquier integración.</p>
            </div>
            <div className="cap__endpoint"><span className="verb">GET</span> /v1/{`{store_id}`}/products</div>
          </article>

          <article className="cap cap--wide">
            <Ic.Cart className="cap__icon" />
            <h3>Gestión de órdenes</h3>
            <p>Lee, modifica y cumple órdenes en tiempo real. Webhooks para cada cambio de estado.</p>
            <div className="cap__endpoint"><span className="verb">GET</span> /v1/{`{store_id}`}/orders</div>
          </article>

          <article className="cap cap--med">
            <Ic.Card className="cap__icon" />
            <h3>Métodos de pago</h3>
            <p>Suma tu pasarela como integrador oficial.</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /payment_providers</div>
          </article>

          <article className="cap cap--med">
            <Ic.Truck className="cap__icon" />
            <h3>Métodos de envío</h3>
            <p>Tarifas, etiquetas y tracking propio.</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /shipping_carriers</div>
          </article>

          <article className="cap cap--med">
            <Ic.Settings className="cap__icon" />
            <h3>Configuración de tienda</h3>
            <p>Datos generales, dominio, idioma y monedas.</p>
            <div className="cap__endpoint"><span className="verb">GET</span> /store</div>
          </article>

          <article className="cap cap--med">
            <Ic.Tag className="cap__icon" />
            <h3>Cupones de descuento</h3>
            <p>Crear, validar y aplicar promociones.</p>
            <div className="cap__endpoint"><span className="verb">POST</span> /coupons</div>
          </article>

          <article className="cap cap--med">
            <Ic.Users className="cap__icon" />
            <h3>Programa de partners</h3>
            <p>Marketplace de apps para llegar a 140k+ tiendas.</p>
            <div className="cap__endpoint"><span className="verb">→</span> partners.tiendanube.com</div>
          </article>
        </div>
      </div>
    </section>);

}

function Docs() {
  const docs = [
  { feature: true, tag: "Docs · GitHub", title: "Documentación general de la API", p: "Toda la referencia de recursos, autenticación, paginación, rate limits y ejemplos.", url: "github.com/TiendaNube/api-docs", href: "https://github.com/TiendaNube/api-docs",
    list: ["Autenticación OAuth 2.0", "Recursos REST + Webhooks", "Ejemplos en múltiples lenguajes", "Changelog público"] },
  { tag: "Vertical · Pagos", title: "Integrador de payments", p: "Guía y recursos específicos para conectar tu pasarela de pagos a las tiendas.", url: "Ver guía completa →", href: "https://github.com/TiendaNube/api-docs",
    list: ["Recursos disponibles", "Guía de desarrollo", "Flujo de checkout", "Eventos y reconciliación"] },
  { tag: "Vertical · Envíos", title: "Integrador de shipping", p: "Todo lo necesario para sumar tu transportadora como opción de envío.", url: "Ver guía completa →", href: "https://drive.google.com/file/d/1XfBHsFBSGqZegcVTqkHcGA75hI1kA0y-/view",
    list: ["Recursos disponibles", "Guía de desarrollo", "Tarifas dinámicas", "Generación de etiquetas"] }];

  return (
    <section id="docs" className="block docs">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> Documentación</div>
        <h2>Todo está documentado.<br /><span className="serif">Con ejemplos de verdad.</span></h2>
        <p className="sub">Mantenemos la documentación pública en GitHub — abierta, versionada y con issues. Si encuentras algo confuso, puedes abrir un PR.</p>
        <div className="docs__grid">
          {docs.map((d, i) =>
          <a className={"doc-card" + (d.feature ? " doc-card--feature" : "")} key={i} href={d.href} target="_blank" rel="noopener">
              <div className="doc-card__tag">{d.tag}</div>
              <h3>{d.title}</h3>
              <p>{d.p}</p>
              <div className="doc-card__list">
                {d.list.map((it) => <span key={it}><span className="bullet" />{it}</span>)}
              </div>
              <div className="doc-card__url">
                <span>{d.url}</span>
                <span className="arr"><Ic.ArrowUR width="16" height="16" /></span>
              </div>
            </a>
          )}
        </div>
      </div>
    </section>);

}

function Tools() {
  const tools = [
  { icon: <Ic.Play />, tag: "Videotutorial", title: "Creación e instalación de una App", p: "Walkthrough en Loom — del registro de partner al primer install. 8 min.", href: "https://www.loom.com/share/49c8a8b6bcab4649a8a46ea76c54f929" },
  { icon: <Ic.Play />, tag: "Video", title: "Flujo de instalación ideal", p: "Cómo se ve un onboarding bien diseñado para tu app.", href: "https://drive.google.com/file/d/1vzyXisRftG68j5X40LiA0Y6v0F_co6w4/view" },
  { icon: <Ic.Doc />, tag: "PDF · Guía", title: "Guía de integración para envíos", p: "Documento detallado con todos los pasos para apps de shipping.", href: "https://drive.google.com/file/d/1XfBHsFBSGqZegcVTqkHcGA75hI1kA0y-/view?usp=sharing" },
  { icon: <Ic.Bolt />, tag: "Postman", title: "Postman Collection", p: "Importa la colección y prueba todos los endpoints sin escribir una línea.", href: "https://github.com/TiendaNube/api-docs/tree/master/utils/postman" }];

  const extras = [
  { tag: "Storefront SDK", title: "Storefront SDK", p: "Personaliza la experiencia del comprador en el frontend de la tienda con hooks y eventos.", href: "https://dev.nuvemshop.com.br/en/docs/applications/nube-sdk/overview" },
  { tag: "Nimbus", title: "Nimbus Design System", p: "Componentes React que usamos internamente — para que tu app se sienta nativa al admin.", href: "https://dev.tiendanube.com/docs/developer-tools/nimbus" },
  { tag: "Nexo", title: "Nexo", p: "Bridge para apps embebidas en el admin: navegación, mensajes y eventos del host.", href: "https://dev.tiendanube.com/docs/developer-tools/nexo" }];

  return (
    <section id="tools" className="block tools">
      <div className="wrap">
        <div className="eyebrow"><span className="arrow" /> Herramientas</div>
        <h2>Recursos para ahorrar<br /><span className="serif">tiempo de desarrollo.</span></h2>
        <p className="sub">Videos, guías y colecciones — el material que usamos internamente para acelerar integraciones, abierto para ti.</p>

        <AniaCard />

        <div className="tools__grid">
          {tools.map((t, i) =>
          <a className="tool" key={i} href={t.href} target="_blank" rel="noopener">
              <div className="tool__icon">{React.cloneElement(t.icon, { width: 22, height: 22 })}</div>
              <div className="tool__body">
                <div className="tool__tag">{t.tag}</div>
                <h3>{t.title}</h3>
                <p>{t.p}</p>
              </div>
              <div className="tool__arrow"><Ic.ArrowUR width="20" height="20" /></div>
            </a>
          )}
        </div>

        <div className="extras">
          <div className="extras__head">Además, para casos específicos</div>
          <div className="extras__grid">
            {extras.map((e) =>
            <a className="extra" key={e.title} href={e.href} target="_blank" rel="noopener">
                <div className="extra__tag">{e.tag}</div>
                <h4>{e.title}</h4>
                <p>{e.p}</p>
                <span className="extra__arr"><Ic.ArrowUR width="14" height="14" /></span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function AniaCard() {
  return (
    <a className="ania" href="https://nube.tienda/ania" target="_blank" rel="noopener">
      <div className="ania__glow" />
      <div className="ania__body">
        <div className="ania__tag">
          <span className="ania__dot" /> Nuevo · Asistente de IA para developers
        </div>
        <h3>Conoce a <span className="serif">anIA.</span></h3>
        <p>Un Gemini entrenado con toda nuestra documentación. Pregúntale cualquier cosa sobre desarrollo de apps, recursos de la API, casos de uso o errores comunes — responde al instante y en tu idioma.</p>
        <div className="ania__url">
          <span className="mono">https://nube.tienda/ania</span>
          <span className="ania__cta">Probar Ania <Ic.ArrowUR width="16" height="16" /></span>
        </div>
      </div>
      <div className="ania__chat" aria-hidden="true">
        <div className="ania__msg ania__msg--you">¿Cómo autentico mi app con OAuth?</div>
        <div className="ania__msg ania__msg--ania">
          <span className="ania__avatar">A</span>
          <span>Tu app recibe un <code>code</code> en el redirect URI, lo cambias por un <code>access_token</code> con un POST a <code>/apps/authorize/token</code>…</span>
        </div>
        <div className="ania__msg ania__msg--you">¿Y cómo lo refresco?</div>
      </div>
    </a>);

}

function Support() {
  return (
    <section id="support" className="block support">
      <div className="wrap">
        <div className="support__inner">
          <div className="support__layout">
            <div>
              <div className="eyebrow" style={{ color: "var(--ns-highlight-blue)" }}><span className="arrow" /> Soporte técnico</div>
              <h2>Si te atoras,<br /><span className="serif">te acompañamos.</span></h2>
              <p className="sub" style={{ marginTop: 24 }}>Nuestro equipo de Tech Support revisa cada integración antes de que salga al marketplace. Escríbenos cuando quieras — respondemos en menos de 24h hábiles.</p>
              <div style={{ marginTop: 36, display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a className="btn btn--primary" href="https://partners.tiendanube.com/" target="_blank" rel="noopener">
                  Crear cuenta de partner <Ic.Arrow width="16" height="16" />
                </a>
                <a className="btn btn--ghost" href="https://github.com/TiendaNube/api-docs" target="_blank" rel="noopener">
                  <Ic.Book width="16" height="16" /> Leer la documentación
                </a>
              </div>
            </div>
            <aside className="support__contact">
              <div className="label">Tech Support</div>
              <h3>Conversemos</h3>
              <p>Dudas técnicas, revisión de tu app, casos especiales — todo en el mismo canal.</p>
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
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__brand">
          <svg width="22" height="16" viewBox="0 0 30.526 22" aria-hidden="true" style={{ color: "var(--ns-nimbus-blue)" }}>
            <path fill="currentColor" d="M 19.551 0 C 16.662 0 13.924 1.129 11.885 3.119 C 10.845 2.679 9.716 2.449 8.556 2.449 C 3.838 2.439 0 6.277 0 10.995 C 0 15.713 3.838 19.551 8.556 19.551 C 9.706 19.551 10.835 19.321 11.875 18.881 C 13.854 20.811 16.562 22 19.531 22 C 25.598 22 30.526 17.072 30.526 11.005 C 30.526 4.938 25.608 0 19.551 0 Z M 19.531 19.551 C 14.813 19.551 10.975 15.713 10.975 10.995 L 8.536 10.995 C 8.536 13.154 9.166 15.163 10.235 16.862 C 9.686 17.022 9.116 17.102 8.546 17.102 C 5.178 17.102 2.739 14.363 2.739 10.995 C 2.739 7.627 5.178 4.888 8.546 4.888 C 9.876 4.888 11.145 5.308 12.214 6.107 C 13.764 7.277 14.663 9.056 14.663 10.995 L 17.102 10.995 C 17.102 8.436 15.993 6.077 14.044 4.448 C 15.573 3.169 17.512 2.449 19.531 2.449 C 24.239 2.449 28.077 6.287 28.077 11.005 C 28.077 15.723 24.239 19.561 19.521 19.561 Z" />
          </svg>
          <span><b>Tiendanube</b> · Platform Development</span>
        </div>
        <div className="foot__meta">Welcome Pack · Developers · v2 · Abril 2026</div>
      </div>
    </footer>);

}

Object.assign(window, { Nav, Hero, Quickstart, Capabilities, Docs, Tools, Support, Foot });