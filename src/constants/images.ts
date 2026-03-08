// images
import hero_banner from "../../public/images/hero_banner.jpg";
import project_apex from "../../public/images/project_apex.jpg";
import project_forge from "../../public/images/project_forge.jpg";
import project_wild from "../../public/images/project_wild.jpg";
import project_blaze from "../../public/images/project_blaze.jpg";
export const PROJECTS_IMAGES = [
  project_apex,
  project_forge,
  project_wild,
  project_blaze,
];

import brand_strategy from "../../public/images/brand_strategy.jpg";
import website_design from "../../public/images/website_design.jpg";
import ui_design from "../../public/images/ui_design.jpg";

export const SERVICES_IMAGES = [brand_strategy, website_design, ui_design];

export { hero_banner };

// svgs
import acme from "../../public/svgs/ic_acme.svg";
import asgardia from "../../public/svgs/ic_asgardia.svg";
import circle from "../../public/svgs/ic_circle.svg";
import ic_goldline from "../../public/svgs/ic_goldline.svg";
import ic_kanba from "../../public/svgs/ic_kanba.svg";
import ic_utosia from "../../public/svgs/ic_utosia.svg";

export { acme, asgardia, circle, ic_goldline, ic_kanba, ic_utosia };

export const COMPANIES = [
  acme,
  asgardia,
  circle,
  ic_goldline,
  ic_kanba,
  ic_utosia,
];

export const PRELOADER_IMAGES = [hero_banner, ...SERVICES_IMAGES];
