import { FunctionalComponent } from "@stencil/core";

export const FnCompSample: FunctionalComponent<{ name: string }> = (props) => (
  <div>
    <p>I'm functional component. My name is {props.name} :)</p>
  </div>
);
