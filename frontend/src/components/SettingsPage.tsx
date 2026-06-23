import { useState, useEffect } from "react";
import { SetTheme, SetCustomColor, GetCustomColor } from "../../wailsjs/go/main/App";
import { THEMES, THEME_NAMES, applyTheme } from "../theme";

interface SettingsPageProps {
  currentTheme: string;
  onThemeChange: (name: string) => void;
}

export default function SettingsPage({ currentTheme, onThemeChange }: SettingsPageProps) {
  const [activeSection, setActiveSection] = useState<"megjelenes">("megjelenes");
  const [customColor, setCustomColor] = useState("#2d6a4f");

  useEffect(() => {
    GetCustomColor().then((c) => { if (c) setCustomColor(c); }).catch(() => {});
  }, []);

  const handleTheme = (name: string) => {
    applyTheme(name);
    onThemeChange(name);
    SetTheme(name).catch(() => {});
  };

  const handleSelectEgyedi = () => {
    applyTheme("Egyedi", customColor);
    onThemeChange("Egyedi");
    SetTheme("Egyedi").catch(() => {});
    SetCustomColor(customColor).catch(() => {});
  };

  const handleCustomColor = (color: string) => {
    setCustomColor(color);
    applyTheme("Egyedi", color);
    onThemeChange("Egyedi");
    SetTheme("Egyedi").catch(() => {});
    SetCustomColor(color).catch(() => {});
  };

  return (
    <div className="settings-page">
      <aside className="settings-sidebar">
        <button
          className={`settings-nav-item${activeSection === "megjelenes" ? " active" : ""}`}
          onClick={() => setActiveSection("megjelenes")}
        >
          Megjelenés
        </button>
      </aside>

      <div className="settings-content">
        {activeSection === "megjelenes" && (
          <section className="settings-section">
            <h2 className="settings-section-title">Megjelenés</h2>

            <div className="settings-card">
              <div className="settings-field-label">Színtéma</div>
              <div className="theme-swatches">
                {THEME_NAMES.map((name) => {
                  const theme = THEMES[name];
                  const isActive = name === currentTheme;
                  return (
                    <button
                      key={name}
                      className={`theme-swatch-btn${isActive ? " active" : ""}`}
                      onClick={() => handleTheme(name)}
                      title={name}
                    >
                      <span
                        className="theme-swatch-circle"
                        style={{ background: theme.primary }}
                      />
                      <span className="theme-swatch-label">{name}</span>
                    </button>
                  );
                })}
                <button
                  className={`theme-swatch-btn${currentTheme === "Egyedi" ? " active" : ""}`}
                  onClick={handleSelectEgyedi}
                  title="Egyedi"
                >
                  <span
                    className="theme-swatch-circle theme-swatch-custom"
                    style={currentTheme === "Egyedi" ? { background: customColor } : undefined}
                  />
                  <span className="theme-swatch-label">Egyedi</span>
                </button>
              </div>

              {currentTheme === "Egyedi" && (
                <div className="custom-theme-panel">
                  <div className="settings-field-label">Fő szín</div>
                  <div className="custom-color-row">
                    <label className="custom-color-swatch-wrap">
                      <input
                        type="color"
                        className="custom-color-native"
                        value={customColor}
                        onChange={(e) => handleCustomColor(e.target.value)}
                      />
                      <span
                        className="custom-color-swatch"
                        style={{ background: customColor }}
                      />
                    </label>
                    <span className="custom-color-hex">{customColor.toUpperCase()}</span>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
