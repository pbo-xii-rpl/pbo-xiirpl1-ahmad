import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection() {
    return (
        <div className="bg-indigo-600">
            <div className="container mx-auto">
                <Navbar/>
                <div className="">
                    <h1>Halo, Saya Ahmad Juaeni Yunus</h1>
                    <p>Hobi Saya adalah Dunia Digital Dan Programer</p>
                    <Button/>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;