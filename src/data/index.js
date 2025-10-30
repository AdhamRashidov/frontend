const pngImages = import.meta.glob("../assets/png/*.png", { eager: true, import: 'default' });

const svgImages = import.meta.glob("../assets/svg/*.svg", { eager: true, import: 'default' });

const pngList = Object.values(pngImages);
const svgList = Object.values(svgImages);

export const products1 = [
	{
		image: pngList[0],
		title: '1984',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		image: pngList[1],
		title: 'Rich dad poor dad',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		image: pngList[2],
		title: 'Код 8',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
		image: pngList[3],
		title: 'Даниел КИЗ',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],
		bookIconL: svgList[1]
	},

	{
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
		image: pngList[5],
		title: '1984',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		image: pngList[6],
		title: 'Rich dad poor dad',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		image: pngList[7],
		title: 'Код 8',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		image: pngList[8],
		title: 'Даниел КИЗ',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},

	{
		image: pngList[9],
		title: 'Бепарволикнинг но...',
		janr: "SIYOSAT, FANTASTIKA",
		ratingIcon: svgList[2],
		rating: 4.7,
		audioIcon: svgList[0],

	},
]

