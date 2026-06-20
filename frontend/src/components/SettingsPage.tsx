import { useState } from "react";
import { SetTheme } from "../../wailsjs/go/main/App";
import { THEMES, THEME_NAMES, applyTheme } from "../theme";

interface SettingsPageProps {
  currentTheme: string;
  onThemeChange: (name: string) => void;
}

export default function SettingsPage({ currentTheme, onThemeChange }: SettingsPageProps) {
  const [activeSection, setActiveSection] = useState<"megjelenes">("megjelenes");

  const handleTheme = (name: string) => {
    applyTheme(name);
    onThemeChange(name);
    SetTheme(name).catch(() => {});
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
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
