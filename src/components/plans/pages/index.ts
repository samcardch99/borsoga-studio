// One component per funnel page, keyed the same as ROUTES. The catch-all route
// picks from here, so adding a page means adding a route key and an entry.
import type { RouteKey } from "../../../plans/config";

import Home from "./Home.astro";
import Interior from "./Interior.astro";
import Configurator from "./Configurator.astro";
import AvPlans from "./AvPlans.astro";
import AvConfigurator from "./AvConfigurator.astro";
import WebDesign from "./WebDesign.astro";
import GraphicDesign from "./GraphicDesign.astro";
import WebBrief from "./WebBrief.astro";
import GraphicBrief from "./GraphicBrief.astro";
import Privacy from "./Privacy.astro";

export const PAGES = {
  home: Home,
  interior: Interior,
  configurator: Configurator,
  avPlans: AvPlans,
  avConfigurator: AvConfigurator,
  webDesign: WebDesign,
  graphicDesign: GraphicDesign,
  webBrief: WebBrief,
  graphicBrief: GraphicBrief,
  privacy: Privacy,
} satisfies Record<RouteKey, unknown>;
