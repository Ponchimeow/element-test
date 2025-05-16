import o, { createContext as p, useContext as r } from "react";
const n = {
  id: "test123"
}, t = p(n), a = () => r(t), d = ({ appId: s, children: e }) => /* @__PURE__ */ o.createElement(t.Provider, { value: { id: "test" } }, e);
export {
  d as AppProvider,
  a as useApp
};
