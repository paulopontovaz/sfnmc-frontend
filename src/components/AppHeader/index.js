import logo from "../../assets/images/logo.svg";

const AppHeader = () => {
	return (
		<div className="flex flex-row items-center min-w-full mb-16">
			<img src={logo} alt="logo" className="w-16" />
			<span className="ml-4 text-lg">SFNMC</span>
		</div>
	);
};

export default AppHeader;
