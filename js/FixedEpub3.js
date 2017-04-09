var imgfile= [];
//テスト用
var k=[];

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // Loop through the FileList and render image files as thumbnails.
    for (var i = 0, f; f = files[i]; i++) {
//テスト用
k.push(f);

      // Only process image files.
      if (!f.type.match('image.*')) {
        continue;
      }

      var reader = new FileReader();

      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          var span = document.createElement('span');
          span.innerHTML = ['<img class="thumb" src="', e.target.result,
                            '" title="', escape(theFile.name), '"/>'].join('');
          document.getElementById('list').insertBefore(span, null);
          imgfile.push( e.target.result);
        };
      })(f);

      // Read in the image file as a data URL.
      reader.readAsDataURL(f);
    }
  }
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById('files').addEventListener('change', handleFileSelect, false);});


//EPUB３テンプレート
var containerXML ='<?xml version="1.0" encoding="UTF-8"?>\n<container xmlns="urn:oasis:names:tc:opendocument:xmlns:container" version="1.0">\n<rootfiles>\n<rootfile full-path="item/standard.opf" media-type="application/oebps-package+xml"/>\n</rootfiles>\n</container>';
var standardOPF = '<?xml version="1.0" encoding="utf-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="ja" unique-identifier="unique-id" prefix="rendition: http://www.idpf.org/vocab/rendition/# ebpaj: http://www.ebpaj.jp/" >\n<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n<!-- 作品名 -->\n<dc:title id="title">作品名１</dc:title>\n<meta refines="#title" property="file-as">セイレツヨウサクヒンメイカナ01</meta>\n<!-- 著者名 -->\n<dc:creator id="creator01">著作者名１</dc:creator>\n<meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>\n<meta refines="#creator01" property="file-as"> セイレツヨウチョサクシャメイカナ 01</meta>\n<meta refines="#creator01" property="display-seq">1</meta>\n<dc:creator id="creator02">著作者名２</dc:creator>\n<meta refines="#creator02" property="role" scheme="marc:relators">aut</meta>\n<meta refines="#creator02" property="file-as"> セイレツヨウチョサクシャメイカナ 02</meta>\n<meta refines="#creator02" property="display-seq">2</meta>\n<!-- 出版社名 -->\n<dc:publisher id="publisher">出版社名</dc:publisher>\n<meta refines="#publisher" property="file-as"> セイレツヨウシュッパンシャメイカナ</meta>\n<!-- 言語 -->\n<dc:language>ja</dc:language>\n<!-- ファイルid -->\n<dc:identifier id="unique-id">urn:uuid:860ddf31-55a4-449a-8cc9-3c1837657a15</dc:identifier>\n<!-- 更新日 -->\n<meta property="dcterms:modified">2012-01-01T00:00:00Z</meta>\n<!-- Fixed-Layout Documents指定 -->\n<meta property="rendition:layout">pre-paginated</meta>\n<meta property="rendition:spread">landscape</meta>\n<!-- etc. -->\n<meta property="ebpaj:guide-version">1.1</meta>\n</metadata>\n<manifest>\n<!-- navigation -->\n<item media-type="application/xhtml+xml" id="toc" href="nav.xhtml" properties="nav"/>\n<!-- style -->\n<item media-type="text/css" id="fixed-layout-jp" href="style/fixed-layout-jp.css"/>\n<!-- image -->\n<item media-type="image/jpeg" id="cover" href="image/cover.jpg" properties="cover-image"/>\n<item media-type="image/jpeg" id="i-001" href="image/i-001.jpg"/>\n<!-- xhtml -->\n<item media-type="application/xhtml+xml" id="p-cover" href="xhtml/p-cover.xhtml" properties="svg" fallback="cover"/>\n<item media-type="application/xhtml+xml" id="p-001" href="xhtml/p-001.xhtml" properties="svg" fallback="i-001"/>\n</manifest>\n<spine page-progression-direction="rtl">\n<itemref linear="yes" idref="p-cover" properties="rendition:page-spread-center"/>\n<itemref linear="yes" idref="p-001" properties="page-spread-right"/>\n</spine>\n</package>';
var kindleOPF ='<?xml version="1.0" encoding="utf-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="ja" unique-identifier="unique-id" prefix="rendition: http://www.idpf.org/vocab/rendition/# ebpaj: http://www.ebpaj.jp/" >\n<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">\n<!-- 作品名 -->\n<dc:title id="title">作品名１</dc:title>\n<meta refines="#title" property="file-as">セイレツヨウサクヒンメイカナ01</meta>\n<!-- 著者名 -->\n<dc:creator id="creator01">著作者名１</dc:creator>\n<meta refines="#creator01" property="role" scheme="marc:relators">aut</meta>\n<meta refines="#creator01" property="file-as"> セイレツヨウチョサクシャメイカナ 01</meta>\n<meta refines="#creator01" property="display-seq">1</meta>\n<dc:creator id="creator02">著作者名２</dc:creator>\n<meta refines="#creator02" property="role" scheme="marc:relators">aut</meta>\n<meta refines="#creator02" property="file-as"> セイレツヨウチョサクシャメイカナ 02</meta>\n<meta refines="#creator02" property="display-seq">2</meta>\n<!-- 出版社名 -->\n<dc:publisher id="publisher">出版社名</dc:publisher>\n<meta refines="#publisher" property="file-as"> セイレツヨウシュッパンシャメイカナ</meta>\n<!-- 言語 -->\n<dc:language>ja</dc:language>\n<!-- ファイルid -->\n<dc:identifier id="unique-id">urn:uuid:860ddf31-55a4-449a-8cc9-3c1837657a15</dc:identifier>\n<!-- 更新日 -->\n<meta property="dcterms:modified">2012-01-01T00:00:00Z</meta>\n<!-- Fixed-Layout Documents指定 -->\n<meta name="original-resolution" content="600x837" />\n<meta name="primary-writing-mode" content="horizontal-rl" />\n<meta name="book-type" content="comic" />\n<meta content="true" name="zero-gutter" />\n<meta content="true" name="zero-margin" />\n<meta content="none" name="orientation-lock" />\n<meta content="true" name="fixed-layout" />\n<meta content="false" name="region-mag" />\n<!-- etc. -->\n<meta property="ebpaj:guide-version">1.1</meta>\n</metadata>\n<manifest>\n<!-- navigation -->\n<item media-type="application/xhtml+xml" id="toc" href="nav.xhtml" properties="nav"/>\n<!-- style -->\n<item media-type="text/css" id="fixed-layout-jp" href="style/fixed-layout-jp.css"/>\n<!-- image -->\n<item media-type="image/jpeg" id="cover" href="image/cover.jpg" properties="cover-image"/>\n<item media-type="image/jpeg" id="i-001" href="image/i-001.jpg"/>\n<!-- xhtml -->\n<item media-type="application/xhtml+xml" id="p-cover" href="xhtml/p-cover.xhtml" properties="svg" fallback="cover"/>\n<item media-type="application/xhtml+xml" id="p-001" href="xhtml/p-001.xhtml" properties="svg" fallback="i-001"/>\n</manifest>\n<spine page-progression-direction="rtl">\n<itemref linear="yes" idref="p-cover" properties="rendition:page-spread-center"/>\n<itemref linear="yes" idref="p-001" properties="page-spread-right"/>\n</spine>\n</package>';
//ナビゲーション
var navigation= '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ja" >\n<head>\n<meta charset="UTF-8"/>\n<title>Navigation</title>\n</head>\n<body>\n<nav epub:type="toc" id="toc">\n<h1>Navigation</h1>\n<ol>\n<li><a href="xhtml/p-cover.xhtml">表紙</a></li>\n<li><a href="xhtml/p-001.xhtml">目次</a></li>\n<li><a href="xhtml/p-colophon.xhtml">奥付</a></li>\n</ol>\n</nav>\n</body>\n</html>';
//カバーHTML
var coverxhtml='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ja" >\n<head>\n<meta charset="UTF-8"/>\n<title>作品名</title>\n<link rel="stylesheet" type="text/css" href="../style/fixed-layout-jp.css"/>\n<meta name="viewport" content="width=848, height=1200"/>\n</head>\n<body epub:type="cover">\n<div class="main">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 848 1200">\n<image width="848" height="1200" xlink:href="../image/cover.jpg"/>\n</svg>\n</div>\n</body>\n</html>';
//ページHTML
var pagexhtml='<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="ja" >\n<head>\n<meta charset="UTF-8"/>\n<title>作品名</title>\n<link rel="stylesheet" type="text/css" href="../style/fixed-layout-jp.css"/>\n<meta name="viewport" content="width=848, height=1200"/>\n</head>\n<body>\n<div class="main">\n<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 848 1200">\n<image width="848" height="1200" xlink:href="../image/i-002.jpg"/>\n</svg>\n</div>\n</body>\n</html>';
//NCX
var ncx="";
var layout='@charset "UTF-8";\n\nhtml,\nbody {\n  margin:    0;\n  padding:   0;\n  font-size: 0;\n}\nsvg {\n  margin:    0;\n  padding:   0;\n}\n';

//EPUB3テンプレートの書換え　DOMParserを使って書き換える。
//OPFファイルの書換
function rewrite(){
var standardOPFxml = (new DOMParser()).parseFromString(standardOPF, 'text/xml');
//タイトル
standardOPFxml.getElementById('title').textContent=$("#title").val();
var sttitle=standardOPFxml.querySelector("meta[refines='#title']");
//sttitle.parentNode.removeChild(sttitle);
//著者１
standardOPFxml.getElementById('creator01').textContent=$("#author1").val();
var metaall = standardOPFxml.querySelectorAll("meta[refines='#creator01']");
for  (i = 0; i < metaall.length; i++){
metaall[i].parentNode.removeChild(metaall[i]);}
//著者２
standardOPFxml.getElementById('creator02').textContent=$("#author2").val();
var metaall = standardOPFxml.querySelectorAll("meta[refines='#creator02']");
for  (i = 0; i < metaall.length; i++){
metaall[i].parentNode.removeChild(metaall[i]);}
//出版社
//ファイルID、uuid
//日時
var today = new Date();
standardOPFxml.querySelector("meta[property='dcterms:modified']").textContent=today.toISOString();
//XMLシリアライズ
standardOPF = (new XMLSerializer()).serializeToString(standardOPFxml);
console.log(standardOPFxml);

//ナビゲーションファイル
var navigationXml = (new DOMParser()).parseFromString(navigation, 'text/xml');

navigation = (new XMLSerializer()).serializeToString(navigationXml);


//表紙XHTML　coverxhtml
var coverxhtmlXml = (new DOMParser()).parseFromString(coverxhtml, 'text/xml');
coverxhtmlXml.querySelector('title').textContent=$("#title").val();
var viewport = coverxhtmlXml.querySelector("meta[content]");
var svg = coverxhtmlXml.querySelector("svg[viewBox]");
var imagesize = coverxhtmlXml.querySelector("image");
viewport.setAttribute("content", 'width='+$("#imgwidth").val() +' ,'+'height='+$("#imgheight").val());
svg.setAttribute("viewBox", '0 0 '+$("#imgwidth").val() +' '+$("#imgheight").val());
imagesize.setAttribute("width",$("#imgwidth").val());
imagesize.setAttribute("height",$("#imgheight").val());
//画像ファイル名の設定
//imagesize.setAttributeNS("http://www.w3.org/1999/xlink","href","../image/"+"test.jpg");

coverxhtml = (new XMLSerializer()).serializeToString(coverxhtmlXml);
console.log(viewport.content);
console.log(coverxhtmlXml);
console.log(imagesize.getAttributeNS("http://www.w3.org/1999/xlink","href"));

//ページXHTML　pagexhtml
var pagexhtmlXml = (new DOMParser()).parseFromString(pagexhtml, 'text/xml');

pagexhtml = (new XMLSerializer()).serializeToString(pagexhtmlXml);
}

//zip圧縮
jQuery(function($) {
  if(!JSZip.support.blob) {
      $("#demo-not-supported").removeClass("hidden");
      $("#demo").hide();
      return;
  }
  $("#demo").click(function () {
rewrite();
var zip = new JSZip();
zip.file("mimetype", "application/epub+zip");
var meta = zip.folder("META-INF");
meta.file("container.xml", containerXML);
var item = zip.folder("item");
item.file("standard.opf", standardOPF);
item.file("nav.xhtml", navigation);
item.file("toc.ncx", ncx);
var img = zip.folder("item/images");
var style = zip.folder("item/style");
style.file("fixed-layout-jp.css",layout)
var xhtml = zip.folder("item/xhtml");
xhtml.file("cover.xhtml",coverxhtml);
xhtml.file("001.xhtml",pagexhtml);
for (j = 0; j < imgfile.length; j++){
img.file(( '0000' + j ).slice( -4 )+".png", imgfile[j].split('base64,')[1], {base64: true});
}
zip.generateAsync({type:"blob"})
.then(function(content) {
// see FileSaver.js
saveAs(content, "example.epub");
});
  });
});
