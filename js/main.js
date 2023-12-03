const colors = ['hotpink', 'cornflowerblue', 'violet', '#333'];
const [btnColors, btnReset] = createPickerDOM(colors);

//처음 로딩시 color= 시작하는 쿠키가 없으면 강제로 body요소의 클래스명을 제거
if (document.cookie.indexOf('color=') < 0) {
	document.body.className = '';
} else {
	//로딩시 color= 로 시작하는 쿠키가 있으면 해당 해당 문자열 다음에 있는 색상문자값만 잘라내기 해서
	//body의 클래스로 지정
	const pos = document.cookie.indexOf('color=');
	const restCookie = document.cookie.slice(pos + 6);
	const colorVal = restCookie.split(' ')[0];
	document.body.className = colorVal;
}

//span버튼 클릭시 해당 색상값으로 cookie='색상값' 형태의 쿠키 생성
btnColors.forEach((el) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		console.log(color);
		setCookie('color', color, 1);
		document.body.className = color;
	});
});

btnReset.addEventListener('click', () => {
	const pos = document.cookie.indexOf('color=');
	if (pos >= 0) {
		console.log(document.cookie);
		const restCookie = document.cookie.slice(pos + 6);
		console.log('rest', restCookie);
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

//미션1 - 각 버튼 클릭시 사용자 컴퓨터에 1시간동안 유지되는 쿠키 생성
//쿠키 형식 : color=클릭한 버튼의 색상 코드
