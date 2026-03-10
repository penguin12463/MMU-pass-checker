import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PasswordGuide } from "./pages/PasswordGuide";
import { SecurityTips } from "./pages/SecurityTips";
import { BestPractices } from "./pages/BestPractices";
import { FAQ } from "./pages/FAQ";
import { About } from "./pages/About";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "password-guide",
        Component: PasswordGuide,
      },
      {
        path: "security-tips",
        Component: SecurityTips,
      },
      {
        path: "best-practices",
        Component: BestPractices,
      },
      {
        path: "faq",
        Component: FAQ,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
