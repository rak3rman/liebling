$(document).ready(function() {
    'use strict';
    /*-----------------------------------------------------------------------------------*/
    /*	SLIDER REVOLUTION
    /*-----------------------------------------------------------------------------------*/
    $('#slider').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
				hide_under:1024,
                style: 'uranus',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: false,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    $('#slider2').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'uranus',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    $('#slider3').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
	$('#slider4').revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                hide_under:1024,
                style: 'uranus',
                tmp: ''
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    $('#slider5').revolution(
    {
        sliderType: "carousel",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        carousel: {
                    horizontal_align: 'center',
                    vertical_align: 'center',
                    fadeout: 'on',
                    vary_fade: 'on',
                    maxVisibleItems: 3,
                    infinity: 'on',
                    space: 0,
                    stretch: 'on'
                },
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                hide_under:1024,
                style: 'uranus',
                tmp: ''
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 150,
                        height: 90,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        // direction: "vertical",
                        direction: 'horizontal',
                        span: true,
                        position: 'inner',
                        space: 0,
                        // h_align: "right",
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 0
                    },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
    $('#slider6').revolution(
    {
        sliderType: "carousel",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        carousel: {
                    horizontal_align: 'center',
                    vertical_align: 'center',
                    fadeout: 'on',
                    vary_fade: 'on',
                    maxVisibleItems: 3,
                    infinity: 'on',
                    space: 0,
                    stretch: 'on'
                },
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'uranus',
                tmp: ''
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 150,
                        height: 90,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        // direction: "vertical",
                        direction: 'horizontal',
                        span: true,
                        position:"outer-bottom",
                        space: 5,
                        // h_align: "right",
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 0
                    },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
    $('#slider7').revolution({
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
				keyboardNavigation:"on",
				keyboard_direction: "vertical",
				mouseScrollNavigation:"on",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "vertical",
					drag_block_vertical: false
				}
			}
    });

    $('#slider8').revolution(
    {
        sliderType: "standard",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
    $('#slider9').revolution(
    {
        sliderType: "carousel",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        stopLoop: "on",
	    stopAfterLoops: 0,
	    stopAtSlide: 1,
        shadow: 0,
        gridwidth: 1140,
		gridheight: 641,
        carousel: {
                    horizontal_align: 'center',
                    vertical_align: 'center',
                    fadeout: 'on',
                    vary_fade: 'on',
                    maxVisibleItems: 3,
                    infinity: 'on',
                    space: 0,
                    stretch: 'on'
                },
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'uranus',
                tmp: ''
            },
            tabs: {
                        style: 'zeus',
                        enable: true,
                        width: 150,
                        height: 90,
                        min_width: 150,
                        wrapper_padding: 0,
                        wrapper_color: 'none',
                        wrapper_opacity: '0.5',
                        tmp: '<span class="tp-tab-image"></span>',
                        visibleAmount: 20,
                        hide_onmobile: true,
                        hide_onleave: false,
                        hide_delay: 200,
                        // direction: "vertical",
                        direction: 'horizontal',
                        span: true,
                        position:"outer-bottom",
                        space: 5,
                        // h_align: "right",
                        h_align: 'center',
                        v_align: 'bottom',
                        h_offset: 0,
                        v_offset: 0
                    },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
    $('#slider10').revolution(
    {
        sliderType: "standard",
        sliderLayout:"fullscreen",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"on",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"on",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"gyges",
								enable:true,
								hide_onmobile:false,
								hide_over:778,
								hide_onleave:false,
								tmp:'',
								left: {
									h_align:"right",
									v_align:"bottom",
									h_offset:40,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"bottom",
									h_offset:0,
									v_offset:0
								}
							}
							,
							tabs: {
								style:"erinyen",
								enable:true,
								width:250,
								height:50,
								min_width:250,
								wrapper_padding:0,
								wrapper_color:"transparent",
								wrapper_opacity:"0",
								tmp:'<div class="tp-tab-title">{{title}}</div>',
								visibleAmount: 4,
								hide_onmobile: true,
								hide_under:778,
								hide_onleave:false,
								hide_delay:200,
								direction:"vertical",
								span:false,
								position:"inner",
								space:10,
								h_align:"right",
								v_align:"center",
								h_offset:30,
								v_offset:0
							}
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[500,450,400,350],
						lazyType:"none",
						shadow:0,
						spinner: "spinner2",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
    });
    $('#slider11').revolution({
        sliderType:"carousel",
        sliderLayout: "fullscreen",
        fullScreenOffsetContainer: ".navbar:not(.fixed)",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1024, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'uranus',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        },
        carousel: {
							border_radius: "0",
							padding_top: "0",
							padding_bottom: "0",
							maxRotation: 10,
							vary_rotation: "on",
							minScale: 25,
							vary_scale: "on",
							horizontal_align: "center",
							vertical_align: "center",
							fadeout: "on",
							vary_fade: "on",
							maxVisibleItems: 3,
							infinity: "on",
							space: -150,
							stretch: "off"
						}
    });

    if ($("#slider12").length) {
        var tpj = jQuery;
		var slider12 = jQuery('#slider12').show().revolution({

	    sliderType: "standard",
        sliderLayout: "fullwidth",
        spinner:"off",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        gridheight:[600,600,500,400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }

	});
	RsFilmstripAddOn(tpj, slider12, "/assets/revolution/revolution-addons/filmstrip", false);
    }
    $('#slider13').revolution(
    {
        sliderType: "standard",
        sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:true,
					hide_onmobile:true,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth: [1140,1200,1000,480],
			gridheight: [700,900,700,700],
			spinner: "spinner2",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false
    });
    if ($("#slider14").length) {
        var tpj = jQuery;
		var slider14 = jQuery('#slider14').show().revolution({

	    sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth: [1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'uranus',
                tmp: ''
            },
            touch: {
                touchenabled: 'on',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: true
            },
            bullets: {
                enable: true,
                style: 'zeus',
                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span>',
                hide_onleave: true,
                hide_onmobile: true,
                h_align: "center",
                v_align: "bottom",
                space: 8,
                h_offset: 0,
                v_offset: 20
            }
        }

	});
	RsTypewriterAddOn(tpj, slider14);
	}
    $('#slider15').revolution(
    {
        sliderType: "standard",
        sliderLayout: "auto",
        spinner: "spinner2",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
		gridheight:[600, 525, 400, 400],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }
    });
    if ($("#slider16").length) {
        var tpj = jQuery;
		var slider16 = jQuery('#slider16').show().revolution({

	    sliderType: "standard",
        sliderLayout: "fullscreen",
        spinner:"off",
        delay: 9000,
        shadow: 0,
        gridwidth:[1140, 1024, 778, 480],
        responsiveLevels: [1240, 1024, 778, 480],
        navigation: {
            arrows: {
                enable: false
            },
            touch: {
		        touchenabled: 'on',
		        swipe_threshold: 75,
		        swipe_min_touches: 1,
		        swipe_direction: 'horizontal',
		        drag_block_vertical: true
		    },
            bullets: {
                enable: false
            }
        }

	});
	RsFilmstripAddOn(tpj, slider16, "/assets/revolution/revolution-addons/filmstrip", false);
    }
    /*-----------------------------------------------------------------------------------*/
    /*	PRETTIFY
    /*-----------------------------------------------------------------------------------*/
    window.prettyPrint && prettyPrint();
    /*-----------------------------------------------------------------------------------*/
    /*	BACKGROUND IMAGE
    /*-----------------------------------------------------------------------------------*/
    $(".bg-image").css('background-image', function() {
        var bg = ('url(' + $(this).data("image-src") + ')');
        return bg;
    });
});