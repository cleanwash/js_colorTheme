/*
1.사용자에게 보여줄 프리셋 컬러를 선택하는 모달 창 띄어줌
2.사용자가 색상 선택시 해당 색상코드값을 받아서 color=색상값 형태로 1달 만료기한으로 쿠키 생성
3.브라우저 접속시 해당 쿠키값으로 body의 클래스명을 변경해서 스타일 분기처리
*/

const colors = ['hotpink', 'cornflowerblue', 'violet', '#333'];

const [btnColors, btnStnReset] = createPickerDOM(colors);

btnColors.forEach((el, idx) => {
	el.addEventListener('click', (e) => {
		const color = e.currentTarget.innerText;
		console.log(color);
	});
});

function createPickerDOM(arr) {
	const aside = document.createElement('aside');
	aside.classList.add('picker');
	let tags = '';
	arr.forEach((data) => {
		tags += `<span style='background-color:${data}'> ${data} </span>`;
	});

	tags += `<button class="btnReset">컬러 초기화 </button>`;

	aside.innerHTML = tags;
	document.body.append(aside);

	return [document.querySelectorAll('aside span'), document.querySelector('aside .btnReset')];
}

function setCookie(name, value, expires) {
	let now = new Date();
	let duedate = now.getTime() + 1000 * 60 * 60 * expires; //1시간
	now.setTime(duedate);
	document.cookie = `${name}=${value}; path=/; expires = ${now.toUTCString()}   `;
}

//미션1 = 각 버튼 클릭 시 사용자 컴퓨터에 1시간동안 유지되는 쿠키 생성
//쿠키 형식: color = 클릭한 버튼의 생성 코드
