// import Button from "./Button";
import Navbar from "./Navbar";

function HeroSection() {
	return (
		<div className="bg-indigo-600 h-[550px]">
			<div className="container mx-auto">
				<Navbar />
				<div className="text-center mt-16">
					<h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">
						Saya seorang front-end engineer, back-end engineer, juga UI designer, dan juga Editor Video
					</h1>
					<p className="text-white text-lg text-opacity-60 w-4/12 mx-auto leading-relaxed mt-5">
                        Sejak 15 tahun saya memulai programming. Sejak 16 tahun saya memulai Editor Video.
                    </p>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;