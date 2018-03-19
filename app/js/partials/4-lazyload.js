const lazyLoad = {
	init: function() {
		lazyLoad.whenInView()
		lazyLoad.onClick()
		lazyLoad.onScrollOrResize()
	},
	whenInView: function() {
		$('img[data-src]').each(function(elementTop, elementBottom, screenTop, screenBottom) {
			elementTop = $(this).offset().top - 100;
			elementBottom = $(this).offset().top + $(this).innerHeight();
			screenTop = $(window).scrollTop();
			screenBottom = $(window).scrollTop() + $(window).innerHeight();

			if ((screenBottom > screenTop) && (screenTop < elementBottom)) {
				if ($(this).is(':visible')) {
					$(this).attr('src', $(this).data('src')).removeAttr('data-src')
				} else {
					$(this).attr('src', $(this).data('src')).removeAttr('data-src')
				}
			}
		})
	},
	onClick: function() {
		$(document).click(function() {
			setTimeout(function() {
				lazyLoad.whenInView()
			}, 400)
		});
	},
	onScrollOrResize: function() {
		$(window).on('scroll resize', function() {
			lazyLoad.whenInView()
		})
	}
};
lazyLoad.init()