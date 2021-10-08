import React, { Fragment } from "react";
import { TagInput } from "../lib";

const exampleTags = [
  {
    id: 1,
    displayValue: "Shiva",
  },
  {
    id: 2,
    displayValue: "Attitude",
  },
];

const onTagsChanged = (newTags) => {
  console.log("tags changed to: ", newTags);
};

const onInputChanged = (e) => {
  console.log(`input value is now: ${e.target.value}`);
};

const App = () => (
  <Fragment>
    <TagInput
      tags={exampleTags}
      onTagsChanged={onTagsChanged}
      onInputChanged={onInputChanged}
    />
  </Fragment>
);

export default App;
