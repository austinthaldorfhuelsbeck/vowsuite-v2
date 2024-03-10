import Navigation from "@/components/site/navigation";
import { type PropsWithChildren } from "react";

const layout = (props: PropsWithChildren) => {
	// Handle theme toggle
	// const [darkMode, setDarkMode] = useState(true);

	// const { isSignedIn } = useUser();

	// useEffect(() => {
	//   const theme = localStorage.getItem("theme");
	//   if (theme === "dark") {
	//     setDarkMode(true);
	//   }
	// }, []);

	// useEffect(() => {
	//   if (darkMode) {
	//     document.documentElement.classList.add("dark");
	//     localStorage.setItem("theme", "dark");
	//   } else {
	//     document.documentElement.classList.remove("dark");
	//     localStorage.setItem("theme", "light");
	//   }
	// }, [darkMode]);

	// const config = { darkMode, setDarkMode };

	return (
		<main className="flex flex-col">
			<Navigation />
			{/* {!isSignedIn && <Navbar {...config} />} */}
			{props.children}
			<div>footer</div>
			{/* <Footer {...config} /> */}
		</main>
	);
};

export default layout;
