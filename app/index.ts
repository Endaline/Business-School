interface NavLinksProps {
  title: string;
  links: {
    name: string;
    route: string;
    // icon?: React.JSX.Element;
  }[];
}

export const navLinks: NavLinksProps[] = [
  {
    title: "Elements",
    links: [
      {
        name: "Typography",
        route: "/home/pages/typography",
      },

      {
        name: "Buttons",
        route: "/home/pages/buttons",
      },
      {
        name: "Forms",
        route: "/home/pages/forms",
      },

      {
        name: "Tabs and Accordion",
        route: "/home/pages/tabs-and-accordion",
      },
    ],
  },
];
