//비밀번호 실시간 확인
const urpassword = document.querySelector("#urpassword");
const checkpassword = document.querySelector("#checkpassword");

checkpassword.addEventListener('keyup', checkPwMatchs);
urpassword.addEventListener('change', checkPwMatchs);

function checkPwMatchs() {
    if(urpassword.value !== checkpassword.value){
        checkpwfeed.textContent = "비밀번호가 일치하지 않습니다";
    } else {
        checkpwfeed.textContent = "비밀번호 일치!";
    } 
}

//버튼 클릭시
function validate() {
    let urname = document.querySelector("#urname");
    let genderRadio = document.querySelector('input[name="gender"]:checked');

    let urnamefeed = document.querySelector("#urnamefeed");
    let genderfeed = document.querySelector("#genderfeed");

    if(urname.value === ''){
        urnamefeed.textContent = 'PLEASE PUT UR NAME!';
    } else {
        urnamefeed.textContent = '반갑습니다! ' + urname.value +'님';
    }

    if(genderRadio.value === 'male') {
        genderfeed.textContent = '당신의 성별은 남자군요?!?';
    } else {
        genderfeed.textContent = '당신의 성별은 여자군요?!?';
    }
}