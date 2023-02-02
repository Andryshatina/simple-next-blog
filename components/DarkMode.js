export default function DarkMode() {
	return (
		<style jsx global>{`
		/* Dark theme */
		:root {
			--background-color: #161616;
			--color: rgb(223, 217, 217);
			--link-color: rgb(250, 135, 68);
		}
		`}
		</style>
	)
}
