/*
1.사용자에게 보여줄 프리셋 컬러를 선택하는 모달 창 띄어줌
2.사용자가 색상 선택시 해당 색상코드값을 받아서 color=색상값 형태로 1달 만료기한으로 쿠키 생성
3.브라우저 접속시 해당 쿠키값으로 body의 클래스명을 변경해서 스타일 분기처리
*/

const colors = ['hotpink', 'cornflowerblue', 'violet', '#333'];

const btns = createPickerDOM(colors);
console.log(btns);

function createPickerDOM(arr) {
	const aside = document.createElement('aside');
	aside.classList.add('picker');
	let tags = '';
	arr.forEach((data) => {
		tags += `<span style='background-color:${data}'> ${data} </span>`;
	});

	aside.innerHTML = tags;
	document.body.append(aside);

	return document.querySelectorAll('aside span');
}
