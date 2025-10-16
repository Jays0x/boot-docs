// File: data/sidebarData.ts

export const sidebarData = [
  {
    category: "Boot Dev",
    links: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/installation" },
      { title: "Version", href: "/version" },
      // { title: "Providers", href: "/providers" },
    ],
  },
  {
    category: "Syntax",
    links: [
      { title: "Save", href: "/syntax/save" },
      { title: "Create", href: "/syntax/create" },
      { title: "List", href: "/syntax/list" },
      { title: "Run", href: "/syntax/run" },
      { title: "Remove", href: "/syntax/remove" },
    ],
  },
  {
    category: "Authentication",
    links: [
      { title: "Login", href: "/auth/login" },
      { title: "Push", href: "/auth/push" },
      { title: "Pull", href: "/auth/pull" },
      { title: "Logout", href: "/auth/logout" },
    ],
  },
  {
    category: "Template",
    links: [
      { title: "Add", href: "/template/add" },
      { title: "Edit", href: "/template/edit" },
      { title: "Remove", href: "/template/remove" },
    ],
  },
];
