// import Button from "./Button";
import Button from "./Button";
import Navbar from "./Navbar";
import PP from "../PP.JPG";

function HeroSection() {
	return (
		<div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 h-[650px]">
			<div className="container mx-auto">
				<Navbar/>
				<img src={PP} class="w-20 items-center rounded-full" />
				<div className="text-center mt-16">
					<h1 className="text-white text-3xl w-8/12 leading-relaxed font-semibold font-mono mx-auto">
						Saya seorang front-end engineer, back-end engineer, juga UI designer, dan juga Editor Video
					</h1>
					<p className="text-white text-lg text-opacity-60 w-4/12 mx-auto leading-relaxed mt-5">
                        Sejak 15 tahun saya memulai programming. Sejak 16 tahun saya memulai Editor Video.
                    </p>
					<Button variant="fill-yellow" >Pelajari</Button>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;