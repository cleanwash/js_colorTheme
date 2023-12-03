const colors = ['hotpink', 'cornflowerblue', 'violet', '#333'];
const [btnColors, btnReset] = createPickerDOM(colors);

if (document.cookie.indexOf('color=') < 0) {
	document.body.className = '';
} else {
	const pos = document.cookie.indexOf('color=');
	const restCookie = document.cookie.slice(pos + 6);
	const colorVal = restCookie.split(' ')[0];
	document.body.className = 'theme_' + colorVal;
}

btnColors.forEach((el) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		setCookie('color', color, 1);
		//getComputedStyle(document.body).getPropertyValue('--pointColor');
		document.body.style.setProperty('--pointColor', color);
		document.body.className = 'theme_' + color;
	});
});

btnReset.addEventListener('click', () => {
	const pos = document.cookie.indexOf('color=');
	if (pos >= 0) {
		const restCookie = document.cookie.slice(pos + 6);
		const colorVal = restCookie.split(' ')[0];
		setCookie('color', colorVal, 0);
		document.body.className = '';
		alert('색상 코드값 초기화');
	}
});

function createPickerDOM(arr) {
	const aside = document.createElement('aside');
	aside.classList.add('picker');
	let tags = '';
	arr.forEach((data) => {
		tags += `<span style='background-color:${data}'>${data}</span>`;
	});
	tags += `<button class='btnReset'>컬러 초기화</button>`;

	aside.innerHTML = tags;
	document.body.append(aside);

	return [document.querySelectorAll('aside span'), document.querySelector('aside .btnReset')];
}

function setCookie(name, value, expires) {
	let now = new Date();
	let duedate = now.getTime() + 1000 * 60 * 60 * expires;
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires= ${now.toUTCString()}`;
}
