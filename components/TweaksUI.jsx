// Tweaks panel — language switcher.
function TweaksApp() {
  const DEFAULTS = /*EDITMODE-BEGIN*/{
    "language": "es"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Apply language: set window.__lang, fire event, sync <html lang>
  React.useEffect(() => {
    window.__lang = tweaks.language;
    document.documentElement.setAttribute("lang", tweaks.language === "pt" ? "pt-BR" : tweaks.language);
    window.dispatchEvent(new CustomEvent("langchange", { detail: tweaks.language }));
  }, [tweaks.language]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Language">
        <TweakRadio
          value={tweaks.language}
          onChange={(v) => setTweak("language", v)}
          options={[
            { value: "es", label: "Español" },
            { value: "en", label: "English" },
            { value: "pt", label: "Português" },
          ]}
        />
        <p style={{margin:"10px 0 0",fontSize:11.5,color:"rgba(255,255,255,0.5)",lineHeight:1.45}}>
          Cambia el idioma del Welcome Kit completo. <br/>
          Latam Spanish · English · Português (BR).
        </p>
      </TweakSection>
    </TweaksPanel>
  );
}
window.TweaksApp = TweaksApp;
