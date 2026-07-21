export interface SubMenuItem {
  name: string;
  path: string;
}

export interface MenuItem {
  name: string;
  path: string;
  submenu?: SubMenuItem[];
}

export const menuData: MenuItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About us",
    path: "/about",
  },
  {
    name: "IT Services",
    path: "/services",
  },
  {
    name: "Case Studies",
    path: "/case-study",
  },
  {
    name: "Solution",
    path: "/solution",
    submenu: [
      {
        name: "E-Commerce",
        path: "/solution/ecommerce",
      },
      {
        name: "Education",
        path: "/solution/education",
      },
      {
        name: "Travel & Hospitality",
        path: "/solution/travel-hospitality",
      },
      {
        name: "Social Networking",
        path: "/solution/social-networking",
      },
      {
        name: "Healthcare",
        path: "/solution/healthcare",
      },
      {
        name: "Real Estate",
        path: "/solution/real-estate",
      },
      {
        name: "Construction",
        path: "/solution/construction",
      },
      {
        name: "Logistics",
        path: "/solution/logistics",
      },
      {
        name: "Manufacturing",
        path: "/solution/manufacturing",
      },
      {
        name: "Media & Entertainment",
        path: "/solution/media-entertainment",
      },
    ],
  },
  {
    name: "Portfolio",
    path: "/portfolio",
  },
  {
    name: "Career",
    path: "/career",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];