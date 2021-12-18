import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>Hello {title}!</h1>
      <Button color="red" text="Button 1" />
      <Button color="blue" text="Button 2" />
      <Button color="green" text="Button 3" />
    </header>
  );
};

Header.defaultProps = {
  title: "Booyaa",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// const headerStyling = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
