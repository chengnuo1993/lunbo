//jquery出让$符号的使用 （也就是说，从这个开始$ 将不是jquery，只能用变量jquery）
jQuery.noConflict();

//zySlide() 只要轮播图的根标签 （任何选择器）
jQuery('.slide').zySlide({speed:1000});
jQuery('#slide').zySlide({delay:2000,speed:5000});