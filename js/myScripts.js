$(document).ready(function(){

$('#small a').click(function(e){
	$('#big img').hide().attr('src', $(this).attr('href')).load(function(){
		$(this).fadeIn(2000);
	});
	e.preventDefault();
});

});//����� ready

//$('#moto_models').html();-���������� ���� ���������� �������� ���� ������ ���
//$('#div_for_img').width('600').height(); - ���������� ���� ������ �������� ���� ������ ���
//$('a[href*=PDF]').hide().show(2000);$('img[src*=logo]').fadeOut(4000).fadeIn(4000);-������������ � ��������� ��������� �� ��������
//$('#moto_table tr:odd');
//$('#moto_table tr:even');
//$('img:not(#div_for_img img)');
//$('div:has(fieldset)');
//$('p:contains(��������)');
//$('#div_for_img img:first');
//$('#div_for_img img:last');
//$('div:hidden');
//$('div:visibility');
//$('img[src*=moto]');
//$('img[src$=.jpg]');
//$('a[href^=http]');
//$('img[width=200]');
//$('#div_for_img > img');
//$('#main_h1 + p');
//$('#div_for_img img');
//$('.maindiv');
//$('#main_h1');
//$('p');