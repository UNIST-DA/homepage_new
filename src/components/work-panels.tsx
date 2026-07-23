"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { PublicationsConsole } from "./publications-console";
import { ProjectsSpotlight } from "./projects-spotlight";

// One shared timer drives both panels so the project gallery and the
// publications console advance on the exact same beat. Hovering either side
// pauses both; reduced motion freezes on the first item.
export function WorkPanels() {
  const [tick, setTick] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setTick((t) => t + 1), 3000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="work__grid"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="work__col">
        <div className="work__col-head">
          <span className="work__col-label">Projects</span>
          <Link href="/research/" className="work__col-more">
            More <span aria-hidden>→</span>
          </Link>
        </div>
        <ProjectsSpotlight tick={tick} />
      </div>

      <div className="work__col">
        <div className="work__col-head">
          <span className="work__col-label">Publications</span>
          <Link href="/research/publications/" className="work__col-more">
            More <span aria-hidden>→</span>
          </Link>
        </div>
        <PublicationsConsole tick={tick} />
      </div>
    </div>
  );
}
