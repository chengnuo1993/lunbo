//jquery出让$符号的使用 （也就是说，从这个开始$ 将不是jquery，只能用变量jquery）
jQuery.noConflict();

//zySlide() 只要轮播图的根标签 （任何选择器）
jQuery('.zy-slide').zySlide();
//jQuery('#slide').zySlide();