// Small "SCROLL" hint pinned to the bottom of a full-screen section.
export function ScrollCue() {
  return (
    <div className="scrollcue" aria-hidden>
      SCROLL
      <span className="scrollcue__line" />
    </div>
  );
}
