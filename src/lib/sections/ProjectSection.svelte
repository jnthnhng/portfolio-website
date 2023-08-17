<script>
	import githubIcon from '$lib/assets/github-icon.svg';
	import pythonIcon from '$lib/assets/python-icon.svg';
	import javascriptIcon from '$lib/assets/javascript-icon.svg';
	import reactNativeIcon from '$lib/assets/react-native-icon.svg';
	import nodeIcon from '$lib/assets/nodejs-icon.svg';
	import mysqlIcon from '$lib/assets/mysql-icon.svg';
	import htmlIcon from '$lib/assets/html-icon.svg';
	import cssIcon from '$lib/assets/css-icon.svg';
	import cIcon from '$lib/assets/c-icon.svg';
</script>

<section
	id="projects"
	class="flex min-h-screen flex-col items-center justify-center bg-greenCream-navbar/30 bg-[url('$lib/assets/semi_mellow_landscape.png')] bg-cover bg-center p-20 text-black backdrop-brightness-50"
>
	<h2 class="m-10 text-4xl font-bold text-white">Projects</h2>

	<div class="m-5 grid grid-flow-row gap-4 px-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Fitopolis</h2>
				<p>
					A cross-platform application for crowd sourcing fitness challenges. Built with React
					Native.
				</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Harry Potters Movies Database</h2>
				<p>REST application built with JavaScript and MySQL.</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Content Generator</h2>
				<p>
					A Python microservice application that generates a paragraph based on two keywords. Also
					serves as a producer and a consumer.
				</p>
			</div>
		</div>
		<div class="card bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Smallsh</h2>
				<p>A smll Bash shell that handles basic commands and piping.</p>
			</div>
		</div>
	</div>

	<div class="m-10 mx-auto max-w-5xl px-12 pb-10">
		<h2 class="mb-8 text-center text-2xl font-bold">Software technologies I have used:</h2>
		<div class="grid grid-cols-2 justify-center gap-2 sm:grid-cols-2 md:grid-cols-3">
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<i class="fab fa-html5 text-3xl" />
				<img src={pythonIcon} alt="Python Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={cIcon} alt="C Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={javascriptIcon} alt="JavaScript Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={reactNativeIcon} alt="React Native Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={mysqlIcon} alt="MySQL Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={htmlIcon} alt="HTML Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={cssIcon} alt="CSS Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={nodeIcon} alt="Nodejs Icon" height="34px" width="34px" />
			</div>
			<div class="bg-gray flex items-center justify-center rounded-md border-2 p-4 shadow-md">
				<img src={githubIcon} alt="GitHub Icon" height="34px" width="34px" />
			</div>
		</div>
	</div>
</section>
