/*
ȫ������JS�ű�
*/

function order_end(form_name){
	form_name.ps_mode.value = "write";
	form_name.action = "userinfo_ok.php";
	form_name.submit();
	return true;
}

function order_back(form_name){
	form_name.ps_mode.value = "back";
	form_name.action = "userinfo.php";
	form_name.submit();
	return true;
}

// ID ���
function openoverlap() {
    var m=document.kgogo;

    if (m.id.value == "") {
        alert("������ID.");
        m.id.focus();
        return false;
    }

    if ((m.id.value.length < 4) || (m.id.value.length > 16)) {
        alert("������ID 4-15λӢ����ĸ������.");
        m.id.focus();
        return false;
    }
    window.open("overlap.php?form=kgogo&focus=id&muid="+m.id.value,"overlap","width=420,height=250,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

// POPUP����
function zoomform(zooms){
    if(navigator.appName == 'Netscape') {
        alert("[POPUP����]\n\n��ʹ��IE4.0 ���������.");
        return;
    }

    zooms.rows = zooms.rows+5;

    //if(zooms.rows == 3){zooms.rows =  10;}
    //else if(zooms.rows == 10){zooms.rows =  20;}
    //else if(zooms.rows == 15){zooms.rows =  20;}
    //else if(zooms.rows == 20){zooms.rows =  30;}
    //else if(zooms.rows == 30){zooms.rows =  40;}
    //else {zooms.rows =  3;}
}

// popup
function show_image(uid,img,width,height) {
    newWin = window.open("show_image.php?image="+img+"&uid="+uid,"show","width="+width+",height="+height+",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

function show_mall_image(uid,img,width,height) {
    newWin = window.open("show_image.php?image="+img+"&uid="+uid,"show","width="+width+",height="+height+",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

function show_board_image(img,width,height) {
    newWin = window.open("show_board_image.php?image="+img,"show","width="+width+",height="+height+",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no");
}

var p_sel_num = 0;
function select_radio(num) {
   p_sel_num =  num;
}

function submit_vote() {
   if (p_sel_num == 0) {
      alert('��ѡ��ͶƱѡ��.');
      return;
   }
   winopen("poll_vote.php?num="+p_sel_num,"�ʾ����",400,350);
}

function view_vote() {
   winopen("poll_view.php?","�ʾ����",400,350);
}

function winopen(url,title,w,h) {
		newwin = window.open(url,title,"toolbar=0,location=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + w + ",height=" + h + ",alwaysRadised=0");
		newwin.focus();
}

// ��Ҫ���벿��
function check_main_login() {
    var m=document.kgogo_main_login;

    if (m.login_id.value.length == "") {
       alert("������ID");
       m.login_id.focus();
       return false;
    }

    if (m.login_pass.value.length == "") {
       alert("����������");
       m.login_pass.focus();
      return false;
    }

}

// ����¼����
function check_left_login() {
    var m=document.kgogo_left_login;

    if (m.login_id.value.length == "") {
       alert("������ID");
       m.login_id.focus();
       return false;
    }

    if (m.login_pass.value.length == "") {
       alert("����������");
       m.login_pass.focus();
      return false;
    }

}


// ��ԱID���������
function check_member_loss() {
    var m=document.kgogo_loss;

    if (m.loss_name.value.length == "") {
       alert(" ����������. ");
       m.loss_name.focus();
       return false;
    }

    if (m.loss_email.value.length == "") {
       alert(" ������E-Mail. ");
       m.loss_email.focus();
      return false;
    }

}

// ��Աע��
function check_member_delete() {
    var m=document.kgogo_delete;

    if (m.del_id.value.length == "") {
       alert(" ������ID. ");
       m.del_id.focus();
       return false;
    }

    if (m.del_pass.value.length == "") {
       alert(" ����������. ");
       m.del_pass.focus();
      return false;
    }

    if (m.del_name.value.length == "") {
       alert(" ����������. ");
       m.del_name.focus();
       return false;
    }

    if (m.del_email.value.length == "") {
       alert(" ������E-mail. ");
       m.del_email.focus();
      return false;
    }

}

// �򵥼���
function check_top_search() {
    var m=document.kgogo_top_search;

    if (m.ps_search.value.length == "") {
       alert("������ؼ���");
       m.ps_search.focus();
       return false;
    }
}

// popup�ƶ��ű�

function open_window(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable)
{
  toolbar_str = toolbar ? 'yes' : 'no';
  menubar_str = menubar ? 'yes' : 'no';
  statusbar_str = statusbar ? 'yes' : 'no';
  scrollbar_str = scrollbar ? 'yes' : 'no';
  resizable_str = resizable ? 'yes' : 'no';

  newWin= window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
}

// ��Ա����ȷ����ʽ
function check_license_submit() {
	if(!document.license.accept.checked) {
		alert("[��Ա���������Ϣ��������] \n\nֻ����ȫ�Ķ���ͬ�����ע���Ա..");
		return false;
	}
	return true;
}



// ID����(��Ա)
function open_member_overlap() {
    var m=document.kgogo;

    if (m.id.value == "") {
        alert("������ID.");
        m.id.focus();
        return false;
    }

    if ((m.id.value.length < 4) || (m.id.value.length > 16)) {
        alert("������ID 4-15λӢ����ĸ������.");
        m.id.focus();
        return false;
    }

    window.open("overlap.php?form=kgogo&focus=id&muid="+m.id.value,"overlap","width=350,height=200,toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=no,resizable=no");
}

// ��Աע������ʽ
function check_member_form() {
var m=document.kgogo;

if ((m.id.value.length < 4) || (m.id.value.length > 16)) {
   alert("������ID 4-15λӢ����ĸ������.");
   m.id.focus();
   return false;
}

if (m.pass1.value.length < 4 || (m.id.value.length > 16)) {
   alert("���������� 4-15λӢ����ĸ������.");
   m.pass1.focus();
   return false;
}

if ((m.pass1.value) != (m.pass2.value)) {
    alert("���벻һ�� ����ȷ����. ");
    m.pass1.focus();
    return false;
}

if (m.name.value.length == "") {
    alert("[����]��������.");
    m.name.focus();
    return false;
}

if (m.email.value.length < 4) {
    alert("[E-mail] ��ַ����ȷ. ��ȷ��");
    m.email.focus();
    return false;
}

if (m.jumin1.value.length == "") {
   alert("���֤�����������");
   m.jumin1.focus();
   return false;
}

if (!jumincheck(document.kgogo.jumin1)) { return false; }


if ((m.zip1.value.length == "")) {
alert("��������������");
m.zip1.focus();
return false;
}


if (m.tel1.value.length == "") {
alert("������绰����");
m.tel1.focus();
return false;
}

if (m.address1.value.length == "") {
alert("��������ϵ��ַ");
m.member_address.focus();
return false;
}

}


function check_userinfo() {
var m=document.kgogo;

        if ( m.buyer_name1.value.length == "" ) {
			alert("[����������]��������." );
			m.buyer_name1.focus();
			return false;
		}


		if ( m.buyer_tel1.value.length == "" ) {
			alert( "[�绰����]��������." );
			m.buyer_tel1.focus();
			return false;
		}

	    if ( m.zip1.value.length == "") {
			alert( "[��������]��������." );
			m.zip1.focus();
			return false;
		}

		if ( m.address1.value.length == "" ) {
			alert( "[�����ߵ�ַ]��������." );
			m.address1.focus();
			return false;
  	    }


		if ( m.buyer_email.value.length == "" ) {
			alert( "[�������ʼ�]��������." );
			m.buyer_email.focus();
			return false;
		}

}

// ����
function accept_check(){
   var m = document.kgogo;
   m.buyer_name3.value = m.buyer_name1.value;
   m.buyer_tel3.value = m.buyer_tel1.value;
   m.buyer_tel4.value = m.buyer_tel2.value;
   m.zip3.value = m.zip1.value;
   m.address2.value = m.address1.value;
}

// 
function error (elem,text) {
	window.alert(text);
	elem.select();
	elem.focus();
}


// ����ʱ����
function jumincheck(jumin1) {

		var str_jumin1 = jumin1.value;
		var jumin1_err = jumin1;
		var checkImg='';


		var i3=0
		for (var i=0;i<str_jumin1.length;i++)
		{
		    var ch1 = str_jumin1.substring(i,i+1);
		    if (ch1<'0' || ch1>'9') { i3=i3+1 }
		}
		if ((str_jumin1 == '') || ( i3 != 0 ))
		{
  		  error(jumin1_err,'���֤�������.\n\n����������!');
  		  return false;
		}

		var i9=0

		return true;

}


function check_member_modify() {
var m=document.kgogo;

if ((m.pass1.value) != (m.pass2.value)) {
    alert("���벻һ������ȷ����. ");
    m.pass1.focus();
    return false;
}

if (m.name.value.length == "") {
    alert("[����]��������.");
    m.name.focus();
    return false;
}

if (m.email.value.length < 4) {
    alert("[E-mail] ��ַ����ȷ.");
    m.email.focus();
    return false;
}

if ((m.zip1.value.length == "")) {
alert("��������������");
m.zip1.focus();
return false;
}

if (m.address1.value.length == "") {
alert("��������ϵ��ַ");
m.address1.focus();
return false;
}

if (m.tel1.value.length == "") {
alert("������绰");
m.tel1.focus();
return false;
}


}


// ɾ��ʱѯ�ʽű�
function del_really(){
    if (confirm('\nɾ�������޸�.\n���ݽ�����ȫɾ��.\n\n(���ɾ����?)\n')) return true;
    return false;
}

// E-mail��ʽ
function kgogo_mailer_check() {
    var m=document.kgogo_mailer;

    if (m.mailer_receive_email.value.length == "") {
       alert("���������E-mail.");
       m.mailer_receive_email.focus();
      return false;
    }

    if (m.mailer_subject.value.length == "") {
       alert("�������ʼ�����.");
       m.mailer_subject.focus();
      return false;
    }

    if (m.mailer_body.value.length == "") {
       alert("�������ʼ�����.");
       m.mailer_body.focus();
      return false;
    }

}

// E-mail��ʽ
function kgogo_recommend_check() {
    var m=document.kgogo_mailer;

    if (m.mailer_receive_email.value.length == "") {
       alert("���������E-mail.");
       m.mailer_receive_email.focus();
      return false;
    }
}

function really_all(){
    if (confirm('\nɾ�������޸�.\n���ݽ�����ȫɾ��.\n\n(���ɾ����?)\n')) 
	{ 
	  document.uid_check_form.submit();
	}
    return false;
}
/*-----------------------------
 ʱ����ʾ.
-----------------------------*/
function TOfunc(){
  var s, d;
  var x = new Array(" [��] ", " [һ] ", " [��] ", " [��] "," [��] ", " [��] ", " [��] ");

  window.setTimeout("TOfunc()",1000);
  d = new Date();

  s = d.getFullYear() + ".";
  //if(d.getMonth()<10){ s += "0" };
  s += (d.getMonth() + 1) + ".";
  if(d.getDate()<10){ s += "0" };
  s += d.getDate() + "";
  s += x[d.getDay()] + "";
  if(d.getHours()<10){ s += "0" };
  s += d.getHours() + ":";
  if(d.getMinutes()<10){ s += "0" };
  s += d.getMinutes() + ":";
  if(d.getSeconds()<10){ s += "0" };
  s += d.getSeconds();

  frmTime3.disp.value = s;
}

function discountSeconds(){
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function reculate(num,price,getTargetf){

	var getPrices=parseInt(price)*parseInt(num);
	document.forms.onlineConfirm["price[]"][getTargetf].value=getPrices;
}


var isie=0;

if(window.navigator.appName=="Microsoft Internet Explorer"&&window.navigator.appVersion.substring(window.navigator.appVersion.indexOf("MSIE")+5,window.navigator.appVersion.indexOf("MSIE")+8)>=5.5) {
			
			isie=1;
} else {
			
			isie=0;
}

if(isie) {
      var html="";
      html+='<table border="0" BGCOLOR="#FFFFFF" HEIGHT="150" WIDTH="140" CELLPADDING="0" CELLSPACING="1">';
      html+='<ST'+'YLE TYPE="text/css">\n';
      html+='a:link {text-decoration:none;font-family:Tahoma;font-size:9pt;}\n';
      html+='a:visited {text-decoration:none;font-family:Tahoma;font-size:9pt;}\n';
      html+='td {font-size:9pt;}\n';
      html+='</ST'+'YLE>\n';
      html+='<SC'+'RIPT LANGUAGE="JavaScript">\n';
      html+='\n<'+'!--\n';
      html+='window.onerror=null;\n';
      html+='/'+' -'+'->\n';
      html+='</'+'SCRIPT>\n';
      html+='<tr><td STYLE="border:1pt solid #CCCCCC" ID="i0" ONMOUSEOVER="document.all.i0.style.background=\'#F6F6F6\';document.all.i0.style.border=\'1pt solid #737B92\';" ONMOUSEOUT="document.all.i0.style.background=\'#FFFFFF\';document.all.i0.style.border=\'1pt solid #CCCCCC\';" ONCLICK="window.history.go(-1);">&nbsp;<IMG SRC="images/menuback.gif" WIDTH="12" HEIGHT="12" BORDER="0" HSPACE="0" VSPACE="0" ALIGN="absmiddle">&nbsp;��һҳ</td></tr>';
      
      html+='<tr><td STYLE="border:1pt solid #CCCCCC" ID="i1" ONMOUSEOVER="document.all.i1.style.background=\'#F6F6F6\';document.all.i1.style.border=\'1pt solid #737B92\';" ONMOUSEOUT="document.all.i1.style.background=\'#FFFFFF\';document.all.i1.style.border=\'1pt solid #CCCCCC\';" ONCLICK="window.history.go(1);">&nbsp;<IMG SRC="images/menuforward.gif" WIDTH="12" HEIGHT="12" BORDER="0" HSPACE="0" VSPACE="0" ALIGN="absmiddle">&nbsp;��һҳ</td></tr>';
      
      html+='<tr><td STYLE="border:1pt solid #CCCCCC" ID="i4" ONMOUSEOVER="document.all.i4.style.background=\'#F6F6F6\';document.all.i4.style.border=\'1pt solid #737B92\';" ONMOUSEOUT="document.all.i4.style.background=\'#FFFFFF\';document.all.i4.style.border=\'1pt solid #CCCCCC\';" ONCLICK="window.parent.external.AddFavorite(window.top.location.href,window.top.document.title);">&nbsp;<IMG SRC="images/menufavorite.gif" WIDTH="12" HEIGHT="12" BORDER="0" HSPACE="0" VSPACE="0" ALIGN="absmiddle">&nbsp;�����ղؼ�</td></tr>';
      
      html+='<tr><td STYLE="border:1pt solid #CCCCCC" ID="i7" ONMOUSEOVER="document.all.i7.style.background=\'#F6F6F6\';document.all.i7.style.border=\'1pt solid #737B92\';" ONMOUSEOUT="document.all.i7.style.background=\'#FFFFFF\';document.all.i7.style.border=\'1pt solid #CCCCCC\';" ONCLICK="window.parent.location.href=window.parent.location.href;">&nbsp;<IMG SRC="images/menurefresh.gif" WIDTH="12" HEIGHT="12" BORDER="0" HSPACE="0" VSPACE="0" ALIGN="absmiddle">&nbsp;ˢ��</td></tr>';
      
      html+='<tr><td STYLE="border:1pt solid #CCCCCC" ID="i10" align="center" background="img/logo.gif" HEIGHT="38">&nbsp;</td></tr>';
      
      html+='</table>';
      
      var oPopup = window.createPopup();

}

function dopopup(x,y) {
      if(isie) {
      var oPopupBody = oPopup.document.body;
      oPopupBody.innerHTML = html;
      oPopup.show(x, y, 140, 150, document.body);
      }
}

function click(e) {
  if(isie) {
  	if(document.all) {
  		if(event.button==2||event.button==3) {
  				dopopup(event.x-1,event.y-1);
  		}
  	}
  }
}

if(isie) {
   document.oncontextmenu = function() { dopopup(event.x,event.y);return false; }
   document.onmousedown = click;
}

document.onkeydown=KeyEventHandle;
document.onkeyup=KeyEventHandle;
function KeyEventHandle() {
        if((event.ctrlKey == true && (event.keyCode == 78 || event.keyCode == 82)) || (event.keyCode >= 112 && event.keyCode <= 123)) {
                event.keyCode = 0;
                event.cancelBubble = true;
                event.returnValue = false;
        }
}
function closeIt() 
{
window.close();
}