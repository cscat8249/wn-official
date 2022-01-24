(function($) {
    $(document).ready(function() {

        new Movie();

        (function(){//header
            function scrollHandler() {
                var scrollTop = win.scrollTop();
                if (fixed === false && scrollTop > offset) {
                    $topElement.addClass('is-fixed');
                    fixed = true;
                } else if (fixed === true && scrollTop <= offset) {
                    $topElement.removeClass('is-fixed');
                    fixed = false;
                }
            }

            var $topElement = $('.header_wrap'),
            offset,
            fixed = false;

            try {
                offset = 0;
            } catch (e) {
                offset = 0;
            }

            win.load(scrollHandler).scroll(scrollHandler);
            scrollHandler();
        }());

        (function(){//best

            new FlowSlider($('.best_flow .swiper-container'), {
                pps: 120
            });

            var slide1DimensionFix = new DimensionFix($('.best_sl_video'), {
                fixElem: $('.best_sl_video iframe'), w: 1920, h: 1080
            }).fix();
            function VideoController(player, $soundBtn){
                var _this = this;
                this.play = function(){
                    _this.pausedCheck(true, function(){
                        player.setCurrentTime(0)
                        player.play();
                    })
                }
                this.return = function(){
                    _this.pausedCheck(false, function(){
                        _this.soundOff();
                        player.setCurrentTime(0)
                        player.pause();
                    })
                }
                this.pausedCheck = function(isPaused, callback){
                    player.getPaused().then(function(paused) {
                        if(paused === isPaused){
                            callback();
                        }
                    })
                }
                this.soundOff = function(){
                    $soundBtn.addClass('muted')
                    player.setVolume(0)
                }
                $soundBtn.click(function(e){
                    e.preventDefault();
                    if($(this).hasClass('muted')){

                        player.setVolume(1).then(function(volume) {
                            player.getPaused().then(function(paused) {
                                if(paused){
                                    player.play().catch(function(error){
                                        console.log(error)
                                    });
                                }
                            });
                        }).catch(function(error) {
                          console.log(error)
                        });

                        $(this).removeClass('muted')
                    }else{
                        _this.soundOff();
                    }
                });
            }
            var slide1VideoController = new VideoController(new Vimeo.Player($('.best_sl_video iframe')), $('.slide1 .btn_sound'))

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.video_visual',
                    start: '-1px top',
                },
            })
            .add([
                TweenMax.fromTo('.scroll_arr3', {y: -10}, {y: 0, ease: 'power1.in', repeat: -1, yoyo: true}),
                TweenMax.fromTo('.scroll_arr2', {y: -10}, {y: 0, ease: 'power1.in', repeat: -1, yoyo: true, delay: 0.1}),
                TweenMax.fromTo('.scroll_arr1', {y: -10}, {y: 0, ease: 'power1.in', repeat: -1, yoyo: true, delay: 0.2})
            ]);

            var mainBanner = new SwiperBannerMotion(
                '.best_slide > .swiper-container',
                [
                    [],
                    [
                        {el: '.best_sl01_subtitle', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5},
                        {el: '.best_sl01_title', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5, t: '-=0.3'},
                        {el: '.best_sl01_text', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5, t: '-=0.3'},
                        {el: '.best_sl01_img', set: {x: 100, opacity:0}, to: {x: 0, opacity:1}, d: 0.5},
                        {el: '.best_circle01', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5},
                        {el: '.best_circle02', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5, t: '-=0.3'},
                        {el: '.best_circle03', set: {y: 50, opacity:0}, to: {y: 0, opacity:1}, d: 0.5, t: '-=0.3'},
                    ],
                ],
                {
                    autoplay: true,
                    onChangeCallbackBefore: [
                        function(motionIndex, qwe){
                            if(motionIndex === 0){
                                slide1VideoController.return();
                            }
                        },
                    ],
                    onChangeCallbackAfter: [
                        function(motionIndex, qwe){
                            if(motionIndex === 0){
                                slide1VideoController.play();
                            }
                        },
                    ],
                },
                {
                    allowTouchMove: false,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    speed: 500,
                    pagination: {
                        el: '.best_paging',
                        type: 'bullets',
                        clickable: true,
                        renderBullet: function(index, className){
                        	return '<li class="' + className + '"><a href="#none"></a></li>';
                        }
                    },
                    navigation: {
                        prevEl: '.best_prev',
                        nextEl: '.best_next',
                    },
                }
            )

            ScrollTrigger.create({
                trigger: '.best',
                start: 'top top',
                end: 'bottom top',
                pin: '.best',
                pinSpacing: false,
                onRefresh: function(){
                    mainBanner.getSwiper().update();
                    slide1DimensionFix.setDimension()
                }
            });
        }());

        (function(){//commu
            new DimensionFix($('.commu_box02_video'),{
                fixElem: $('.commu_box02_video iframe'), w: 622, h: 338
            }).fix();

            gsap.timeline({
                scrollTrigger: {
                    trigger: '.commu_boxs',
                    start: 'top 70%',
                }
            })
            .fromTo('.commu_box01', {opacity: 0, y: 100}, {opacity: 1, y: 0})
            .fromTo('.commu_box02', {opacity: 0, y: 100}, {opacity: 1, y: 0})
        }());

        (function(){ //reason
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.reason',
                    start: 'top top',
                    end: '+=2000',
                    pin: '.reason',
                    scrub: true,
                }
            })
            .fromTo('.reason_cont_wrap', {y: -320}, {y: -870, ease: 'power1.out', duration: 1, delay: 1})
            .to('.reason_cont_wrap', {y: -1000, ease: 'power1.inOut', duration: 0.5, delay: 1})
            .to('.reason_cont01_active', {opacity: 1, duration: 0.1}, 0)
            .fromTo('.reason_img01', {opacity: 0}, {opacity: 1, duration: 0.1}, 0)
            .to('.reason_cont01_active', {opacity: 0, duration: 0.1}, 1.5)
            .to('.reason_img01', {opacity: 0, duration: 0.2}, 1.5)
            .to('.reason_cont02_active', {opacity: 1, duration: 0.1}, 1.5)
            .fromTo('.reason_img02', {opacity: 0}, {opacity: 1, duration: 0.1}, 1.5)
            .to('.reason_cont02_active', {opacity: 0, duration: 0.1}, 2.5)
            .to('.reason_img02', {opacity: 0, duration: 0.1}, 2.5)
        }());

        $('body').on('click','.menu_tabs a',function(e){
            var sca = $(this).data('sca');
            $.post(location.href,{menu_sca: sca},function(res){
                $('.menu_inn').html($(res).find('.menu_inn').html());
                new Swiper('.menu_slide01 > .swiper-container', {
                    spaceBetween: 30,
                    slidesPerView: 3,
                    navigation: {
                        prevEl: '.menu_prev',
                        nextEl: '.menu_next',
                    },
                });
            });
            e.preventDefault();
        });
        (function(){ //story
            var storySlide = new Swiper('.story_slide  > .swiper-container', {
                spaceBetween: 200,
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 3000,
                },
                navigation: {
                    prevEl: '.story_prev',
                    nextEl: '.story_next',
                },
            });
        }());
        (function(){//sns
            // var $maxWidthEl = $('.sns_slide');
            // var $swiperContainer = $('.sns_slide > .swiper-container');
            // var $swiperWrapper = $swiperContainer.children('.swiper-wrapper')
            // var $swiperSlide = $swiperWrapper.children('.swiper-slide')
            // var cloneSlide = $swiperWrapper.html();
            // var firstWidth = 0;
            // var maxWidth = 0;
            // var count = 1;
            // $swiperContainer.find('.swiper-slide').each(function(i){
            //     firstWidth+=$(this).outerWidth();
            // })
            // var snsSlide;
            // function setState(){
            //     maxWidth = $maxWidthEl.width();
            //     var currentCount = getCount(maxWidth, firstWidth);
            //     if(currentCount > count){
            //         if(typeof snsSlide == 'object'){
            //             snsSlide.destroy();
            //         }
            //         for (var i = 0; i < currentCount - count; i++) {
            //             $swiperWrapper.append(cloneSlide)
            //         }
            //         count = currentCount;
            //         creatSlide()
            //     }
            // }
            // function creatSlide(){
            //     snsSlide = new Swiper('.sns_slide .swiper-container', {
            //         loop: true,
            //         centeredSlides: true,
            //         slidesPerView: 'auto',
            //         spaceBetween: 30,
            //         speed: 500,
            //         autoplay: {
            //             delay: 2500,
            //         },
            //     });
            // }
            // function getCount(maxWidth, firstWidth){
            //     return Math.ceil(maxWidth/firstWidth);
            // }
            // setState();
            // win.resize(function(){
            //     setState()
            // })
        }());

    });
}(jQuery));
