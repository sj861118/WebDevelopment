Node.js


Language : Javascript - eventdriven, non-blocking io
Runtime : Webbrower[javascript] / Server[Node.js]


설치 : nodejs.org
설치 후 확인 : cmd -> node --version
실행 : node filename

인터넷 pc와 pc 사이를 연결
클라이언트 요청 -> 서버 응답
도메인 네임. http://a.com과 같음... 쉽게 찾기 위함
실제 접속할때는 도메인과 일치하는 ip로 접속한다.


서버에는 a.com이라는 주소에 데이터베이스, 채팅, 게임, 웹등 다양한 서버가 존재 할 수 있다.
컴퓨터에는 0 ~ 65535개의 포트가 있다.
웹서버를 :80에서 리스닝 할때 http://로접속할때 접속 가능
because http://는 80번 포트를 쓰자고 약속되어 있기 때문

NPM : node package manger
http, os, date, string, array -> Javascript가 제공하는 모듈
nodejs가 제공하는 모듈

npmjs.com
npm install uglify-js -g : -g는 독립적... 컴퓨터 전역에서 사용

npm init : npm 상에서 현재 디렉토리를 패키지로 지정

expressjs.com

get : 라우터, 라우팅 길을 찾는다 / 어떤 요청이 들어왔을 때 길을 찾는거
app.get('/', function(req, res){
	res.send('hello');
});


사용자의 요청을 어떤 컨트롤러에 연결 할 것인가?
컨트롤러 ex -> 회원가입, 홈페이지, 에러화면 등등

query string.. url 패스를 통해 다른 결과를 나타낸다.

시멘틱 url
기존에는 localhost:3000/topic?id=2
시멘틱 url은 localhost:3000/topic/2 이렇게 쿼리스트링 없이 깔끔히

