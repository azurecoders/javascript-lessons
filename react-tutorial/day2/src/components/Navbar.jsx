const Navbar = ({ config }) => {
  return (
    <div className="flex justify-between container mx-auto py-8">
      <div>{config.app_name}</div>
      <div>{config.app_slogan}</div>
      <div>{config.loggedin_user_name}</div>
    </div>
  );
};

export default Navbar;
