const data = {
	uk: { id: 1, text: 'Привіт!' },
	en: { id: 2, text: 'Hello!' },
	fr: { id: 3, text: 'Salut!' },
	ch: { id: 4, text: 'asdasdas!' },
	ky: null,
	tdd: undefined
};

const expectedResult = [
	{ lang: 'en', id: 2, text: 'Hello!' },
	{ lang: 'uk', id: 1, text: 'Привіт!' },
	{ lang: 'fr', id: 3, text: 'Salut!' },
];


function convertToWorkObj(data) {
	const sortMap = {
		'en': 1,
		'uk': 2,
		'fr': 3,
		'germany': 4,
	}

	const newArr = [];
	for (let lang in data) {
		if (!data[lang] || !sortMap[lang]) {
			continue;
		}
		const newObj = {
			lang: lang,
			id: data[lang].id,
			text: data[lang].text,
		}
		newArr.push(newObj);
	}
	return newArr.sort((a, b) => sortMap[a.lang] - sortMap[b.lang]);
}
let workObj = convertToWorkObj(data);

const dataTwo = [
	{ lang: 'en', id: 2, text: 'Hello!' },
	{ lang: 'uk', id: 1, text: 'Привіт!' },
	{ lang: 'fr', id: 3, text: 'Salut!' },
	{ lang: 'ck', id: null },
	{ lang: 'null', id: 0 },
	{ lang: 'textNull', text: "" },
	{ lang: 'test', text: "123", id: undefined },
];


function convertToOldObj(array) {
	const oldFormatObj = {}
	array.forEach(element => {
		let text = element.text ? element.text : null
		let id = element.id || element.id === 0 ? element.id : null
		oldFormatObj[element.lang] = {
			id: id,
			text: text,
		}
	});
	return oldFormatObj
}

let objofOldFormat = convertToOldObj(dataTwo)