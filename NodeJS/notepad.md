Node.js


Language : Javascript - eventdriven, non-blocking io
Runtime : Webbrower[javascript] / Server[Node.js]


��ġ : nodejs.org
��ġ �� Ȯ�� : cmd -> node --version
���� : node filename

���ͳ� pc�� pc ���̸� ����
Ŭ���̾�Ʈ ��û -> ���� ����
������ ����. http://a.com�� ����... ���� ã�� ����
���� �����Ҷ��� �����ΰ� ��ġ�ϴ� ip�� �����Ѵ�.


�������� a.com�̶�� �ּҿ� �����ͺ��̽�, ä��, ����, ���� �پ��� ������ ���� �� �� �ִ�.
��ǻ�Ϳ��� 0 ~ 65535���� ��Ʈ�� �ִ�.
�������� :80���� ������ �Ҷ� http://�������Ҷ� ���� ����
because http://�� 80�� ��Ʈ�� ���ڰ� ��ӵǾ� �ֱ� ����

NPM : node package manger
http, os, date, string, array -> Javascript�� �����ϴ� ���
nodejs�� �����ϴ� ���

npmjs.com
npm install uglify-js -g : -g�� ������... ��ǻ�� �������� ���

npm init : npm �󿡼� ���� ���丮�� ��Ű���� ����

expressjs.com

get : �����, ����� ���� ã�´� / � ��û�� ������ �� ���� ã�°�
app.get('/', function(req, res){
	res.send('hello');
});


������� ��û�� � ��Ʈ�ѷ��� ���� �� ���ΰ�?
��Ʈ�ѷ� ex -> ȸ������, Ȩ������, ����ȭ�� ���

query string.. url �н��� ���� �ٸ� ����� ��Ÿ����.

�ø�ƽ url
�������� localhost:3000/topic?id=2
�ø�ƽ url�� localhost:3000/topic/2 �̷��� ������Ʈ�� ���� �����

