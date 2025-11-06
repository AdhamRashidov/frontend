const pngImages = import.meta.glob("../assets/png/*.png", { eager: true, import: 'default' });

const svgImages = import.meta.glob("../assets/svg/*.svg", { eager: true, import: 'default' });

const categories = import.meta.glob("../assets/rukunlar/*png", { eager: true, import: 'default' });

const pngList = Object.values(pngImages);
const svgList = Object.values(svgImages);
const categoryList = Object.values(categories);

export const products1 = [
	{
		id: 1,
		image: pngList[0],
		title: '1984',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		id: 2,
		image: pngList[1],
		title: 'Rich dad poor dad',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		id: 3,
		image: pngList[2],
		title: 'Код 8',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		id: 4,
		image: pngList[3],
		title: 'Даниел КИЗ',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		id: 5,
		image: pngList[4],
		title: 'Бепарволикнинг но...',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},
]

export const products2 = [
	{
		id: 6,
		image: pngList[5],
		title: '1984',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		id: 7,
		image: pngList[6],
		title: 'Rich dad poor dad',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		id: 8,
		image: pngList[7],
		title: 'Код 8',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		id: 9,
		image: pngList[8],
		title: 'Даниел КИЗ',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		id: 10,
		image: pngList[9],
		title: 'Бепарволикнинг но...',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

]

export const category = [
	{
		id: 1,
		title: "Жахон адабиёти",
		img: categoryList[0]
	},

	{
		id: 2,
		title: "Узбек адабиёти",
		img: categoryList[1]
	},

	{
		id: 3,
		title: "Бизнес ва психология",
		img: categoryList[2]
	},

	{
		id: 4,
		title: "Болалар адабиёти ",
		img: categoryList[3]
	},

	{
		id: 5,
		title: "Детективлар",
		img: categoryList[4]
	},

	{
		id: 6,
		title: "Фантастика",
		img: categoryList[5]
	}
]

