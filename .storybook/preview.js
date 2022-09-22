import React from "react";
import { Provider } from "react-redux";
import { setupStore } from "../src/store";

const store = setupStore();

export const decorators = [
  Story => (
    <Provider store={store}>
      <Story />
    </Provider>
  )
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
}