import type { VFC } from "react";
import { countState } from "src/pages/index";

export const About: VFC = () => {
  const handleClick = countState.decrement;

  return (
    <div>
      <button className="p-2" onClick={handleClick}>
        Count down!
      </button>
    </div>
  );
};
