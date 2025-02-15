
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-black text-white px-3 md:px-8 py-3 flex justify-between md:justify-around items-center">


            <Logo />
            <Navbar/>
        </header>
    );
};

export default Header;
