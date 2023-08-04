import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

const navigationItems = [
  { name: "About", route: "/" },
  // { name: "Projects", route: "/projects" },
  { name: "Resume", route: "/resume" },
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    const item = navigationItems.find((item) => item.route === pathname);
    if (item) {
      setActiveItem(item.name);
    }
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold text-blue-600 border-b-4 border-blue-800 md:text-2xl">{activeItem}</span>
      <div className="flex space-x-3 text-lg">
        {navigationItems.map((item) => (
          <NavItem
            key={item.route}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            name={item.name}
            route={item.route}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
