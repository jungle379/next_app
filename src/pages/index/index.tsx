import type { VFC } from "react";
import { proxy, useSnapshot } from "valtio";

const countState = proxy({ count: 0 });

export const Index: VFC = () => {
  const snap = useSnapshot(countState);

  const handleClick = () => {
    countState.count++;
  };

  return (
    <div>
      <h2 className="text-5xl">{snap.count}</h2>
      <button className="p-2" onClick={handleClick}>
        Count up!
      </button>
    </div>
  );
};
