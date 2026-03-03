export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Joes Store",
  description:
    "Find the best products at unbeatable prices. Shop now and save big!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Cart",
      href: "/cart",
    },
    {
      label: "Account",
      href: "/account",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Orders",
      href: "/orders",
    },
    {
      label: "Cart",
      href: "/cart",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
};
