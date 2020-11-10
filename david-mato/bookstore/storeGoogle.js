(async () => {
	const response = await fetch(
		'https://www.googleapis.com/books/v1/users/105182753175439470633/bookshelves/1001/volumes?key=AIzaSyAOxJixMdZOn_rVWIJ5Mh2jgOQUAlLVtXI'
	);
	const data = await response.json();
	console.log(data);
})();

https://www.googleapis.com/books/v1/volumes?q=subject:fiction
https://www.googleapis.com/books/v1/volumes?q=intitle:mockinbird
