import Navbar1 from "./navbar1";

const menuItems = [
  { label: "Home", href: "/" },
  {
    label: "Dropdown",
    href: "/dropdown",
    subItems: [
      { label: "Item 1", href: "/dropdown/item1" },
      { label: "Item 2", href: "/dropdown/item2" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  // Add more menu items as needed
];

const MenuItems: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Menu Example</h1>
    </div>
  );
};

export default MenuItems;
