import { Link } from "react-router-dom";

const Navmenu = () => {
  const routes = [
    {
      Name: "Home",
      path: "/home",
    },
    {
      Name: "Category",
      path: "/category",
    },
    {
      Name: "About",
      path: "/about",
    },
    {
      Name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <ul className="flex">
      {routes.map((route, id) => (
        <li className="mr-3" key={id}>
          <Link to={route.path}
            className="text-gray-700 hover:text-green-500 uppercase p-2 font-medium">
            {route.Name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navmenu;
