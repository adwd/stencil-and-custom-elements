import { FunctionalComponent, h } from "@stencil/core";

export const FnCompSample: FunctionalComponent<{ name: string, onClick: () => void }> = (props) => (
  <div>
    <p>I'm functional component. My name is {props.name} :)</p>
    <button onClick={() => props.onClick()}>button</button>
  </div>
);
