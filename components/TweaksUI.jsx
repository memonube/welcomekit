// Tweaks panel for direction switching.
function TweaksApp() {
  const DEFAULTS = /*EDITMODE-BEGIN*/{
    "direction": "nimbus"
  }/*EDITMODE-END*/;
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Apply direction class to body
  React.useEffect(() => {
    document.body.classList.remove("dir-nimbus", "dir-editorial", "dir-terminal");
    document.body.classList.add("dir-" + tweaks.direction);
  }, [tweaks.direction]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Visual direction">
        <TweakRadio
          value={tweaks.direction}
          onChange={(v) => setTweak("direction", v)}
          options={[
            { value: "nimbus", label: "Nimbus Night" },
            { value: "editorial", label: "Editorial" },
            { value: "terminal", label: "Terminal" },
          ]}
        />
        <p style={{margin:"10px 0 0",fontSize:11.5,color:"rgba(255,255,255,0.5)",lineHeight:1.45}}>
          Nimbus Night · gradiente azul + bento (default)<br/>
          Editorial · blanco, serif italic, mucho aire<br/>
          Terminal · dark + monospace, full developer
        </p>
      </TweakSection>
    </TweaksPanel>
  );
}
window.TweaksApp = TweaksApp;
