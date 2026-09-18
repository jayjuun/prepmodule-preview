// Consent-review only. Bracketed fields are placeholders, not verified credentials.
const tutors = [
 {name:'선생님 A · 예시',initials:'A',school:'학교명 입력 예정',degree:'학위·재학 상태 입력 예정',subjects:['SAT','교과 수업'],experience:'지도 경력 입력 예정',detail:'승인된 정보로 교체 예정'},
 {name:'선생님 B · 예시',initials:'B',school:'학교명 입력 예정',degree:'학위·재학 상태 입력 예정',subjects:['건축·디자인 포트폴리오'],experience:'지도 경력 입력 예정',detail:'승인된 정보로 교체 예정'},
 {name:'선생님 C · 예시',initials:'C',school:'학교명 입력 예정',degree:'학위·재학 상태 입력 예정',subjects:['사회과학','Academic Writing'],experience:'지도 경력 입력 예정',detail:'승인된 정보로 교체 예정'}
];
function tutorCard(t,compact=false){return `<article class="profile-card"><div class="profile-photo"><b aria-hidden="true">${t.initials}</b><small>사진 영역</small></div><p class="profile-kind">선생님 · 학력</p><p class="profile-school">${t.school}</p><p class="profile-role">${t.degree}</p><h3>${t.name}</h3><p class="profile-topics">${t.subjects.join(' · ')}</p><div class="profile-proof">주요 경력 입력 예정</div>${compact?'':`<p class="profile-detail">${t.experience}<br>${t.detail}</p>`}</article>`;}
function tutorCards(compact=false){return `<div class="profile-grid">${tutors.map(t=>tutorCard(t,compact)).join('')}</div>`;}
function tutorInquiry(){return `<div class="tutor-inquiry"><div><h3>찾는 과목이 따로 있으신가요?</h3><p>소개된 선생님 외에도, 학생의 과목과 목표에 맞는 선생님을 문의해 주세요.</p></div><a class="textlink" href="#contact?service=tutoring">선생님 매칭 문의 ↗</a></div>`;}
function tutorSection(){return `<section class="section wrap featured-tutors"><div class="section-heading"><div><p class="eyebrow">MEET YOUR TUTOR</p><h2>이런 선생님을 만나보세요.</h2></div><p>학교 공부부터 새로운 관심 분야까지.</p></div>${tutorCards()}${tutorInquiry()}</section>`;}
