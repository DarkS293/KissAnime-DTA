/**
  The MIT License (MIT)

  Copyright (c) 2015 Arif Rasyidi

  Permission is hereby granted, free of charge, to any person obtaining a copy of
  this software and associated documentation files (the "Software"), to deal in
  the Software without restriction, including without limitation the rights to
  use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
  the Software, and to permit persons to whom the Software is furnished to do so,
  subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
  FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
  COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
  IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
  CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/
// ==UserScript==
// @name           KissAnime-DTA
// @namespace      http://arasyi/kissanime-dta
// @author         Arif Rasyidi <arasyi@gmail.com>
// @version        1.0
// @description    Display download links for all episodes on KissAnime so we can use DownThemAll! or similar tools to download them.
// @match          *://kissanime.com/Anime/*
// @grant          none
// @updateURL      http://arasyi.github.io/KissAnime-DTA/kissanime-dta.meta.js
// @downloadURL    http://arasyi.github.io/KissAnime-DTA/kissanime-dta.user.js
// ==/UserScript==

(function(){

// asp.js (http://kissanime.com/Scripts/asp.js)
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('l 9={f:\'V+/=\',m:U,M:/H/.z(L.K),D:/H[T]/.z(L.K),W:w(s){l 7=9.A(s),5=-1,c=7.v,o,j,i,8=[,,,];b(9.M){l a=[];n(++5<c){o=7[5];j=7[++5];8[0]=o>>2;8[1]=((o&3)<<4)|(j>>4);b(x(j))8[2]=8[3]=t;d{i=7[++5];8[2]=((j&15)<<2)|(i>>6);8[3]=(x(i))?t:i&e}a.g(9.f.k(8[0]),9.f.k(8[1]),9.f.k(8[2]),9.f.k(8[3]))}u a.E(\'\')}d{l a=\'\';n(++5<c){o=7[5];j=7[++5];8[0]=o>>2;8[1]=((o&3)<<4)|(j>>4);b(x(j))8[2]=8[3]=t;d{i=7[++5];8[2]=((j&15)<<2)|(i>>6);8[3]=(x(i))?t:i&e}a+=9.f[8[0]]+9.f[8[1]]+9.f[8[2]]+9.f[8[3]]}u a}},C:w(s){b(s.v%4)X Q N("P: \'9.C\' R: O S 13 19 18 1a 17 14 Z.");l 7=9.J(s),5=0,c=7.v;b(9.D){l a=[];n(5<c){b(7[5]<r)a.g(p.q(7[5++]));d b(7[5]>F&&7[5]<y)a.g(p.q(((7[5++]&B)<<6)|(7[5++]&e)));d a.g(p.q(((7[5++]&15)<<12)|((7[5++]&e)<<6)|(7[5++]&e)))}u a.E(\'\')}d{l a=\'\';n(5<c){b(7[5]<r)a+=p.q(7[5++]);d b(7[5]>F&&7[5]<y)a+=p.q(((7[5++]&B)<<6)|(7[5++]&e));d a+=p.q(((7[5++]&15)<<12)|((7[5++]&e)<<6)|(7[5++]&e))}u a}},A:w(s){l 5=-1,c=s.v,h,7=[];b(/^[\\10-\\Y]*$/.z(s))n(++5<c)7.g(s.I(5));d n(++5<c){h=s.I(5);b(h<r)7.g(h);d b(h<11)7.g((h>>6)|16,(h&e)|r);d 7.g((h>>12)|y,((h>>6)&e)|r,(h&e)|r)}u 7},J:w(s){l 5=-1,c,7=[],8=[,,,];b(!9.m){c=9.f.v;9.m={};n(++5<c)9.m[9.f.k(5)]=5;5=-1}c=s.v;n(++5<c){8[0]=9.m[s.k(5)];8[1]=9.m[s.k(++5)];7.g((8[0]<<2)|(8[1]>>4));8[2]=9.m[s.k(++5)];b(8[2]==t)G;7.g(((8[1]&15)<<4)|(8[2]>>2));8[3]=9.m[s.k(++5)];b(8[3]==t)G;7.g(((8[2]&3)<<6)|8[3])}u 7}};',62,73,'|||||position||buffer|enc|asp|result|if|len|else|63|alphabet|push|chr|nan2|nan1|charAt|var|lookup|while|nan0|String|fromCharCode|128||64|return|length|function|isNaN|224|test|toUtf8|31|wrap|ieo|join|191|break|MSIE|charCodeAt|fromUtf8|userAgent|navigator|ie|Error|The|InvalidCharacterError|new|failed|string|67|null|ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789|encode|throw|x7f|encoded|x00|2048||to|correctly||192|not|wrapd|be|is'.split('|'),0,{}));

document.addEventListener('DOMContentLoaded', createDownloadButton); 

function createDownloadButton() {
	$('.listing').before('<h1 id="btnGetDownloadLink" style="text-align: center; font-size: 20px;"><a href="#">Get Download Links!</a></h1>');
	$('#btnGetDownloadLink').click(function (e) {
		e.preventDefault();
		$(this).remove();
		generateDownloadLink();
	});
}

function generateDownloadLink() {
	$('.listing a').each(function() {
		var $eps = $(this);
		var link = 'http://kissanime.com' + $eps.attr('href');
		$.get(link, function (data) {
			var mark = 'var wra = asp.wrap("';
			var idx = data.indexOf(mark) + mark.length;
			var idx2 = data.indexOf('"', idx);
			var downloadData = data.substring(idx, idx2);
			downloadData = asp.wrap(downloadData);
			downloadData = downloadData.replace('Mobile / Download (Save link as...): ', '');
			var $downloadData = $('<div>' + downloadData + '</div>');
			$downloadData.find('a').each(function () {
				$(this).text($eps.text() + ' - ' + $(this).text());
			});
			$eps.parent().append('<br>' + $downloadData.html() + '<br><br>');
		});
	});
}

})();
