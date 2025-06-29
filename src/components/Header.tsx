import placeHolder from "assets/placeholder.svg";

const Header = () => {
  return (
    <div>
      <h1 className="text-white text-3xl font-bold text-center p-4">
        My Website
      </h1>
      <img src={placeHolder} alt="Icon" className="w-8 h-8 mx-auto" />
    </div>
  );
};
export default Header;
