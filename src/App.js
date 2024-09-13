import React, { useEffect } from 'react';
import './App.css';
import $ from "https://esm.sh/jquery";
import TitleSVGTop from './title-top.svg';
import TitleSVGBottom from './title-bottom.svg';
import PaintballEffect from './PaintballText';
import bg from './bg.png';
import workex1 from './workexample1.png';

function App() {
  useEffect(() => {
    setTimeout(() => {
      $(".border").css("height", "0vh");
    }, 1500);
  
    $(window).on('scroll', function() {
      var scrollTop = $(this).scrollTop();
      var windowHeight = $(this).height();
      var scrollPercent = scrollTop / windowHeight;
  
      if (scrollPercent >= 0 && scrollPercent <= 1) {
        var translateValue = (1 - scrollPercent) * 2.5;
        var opacityValue = 1 - scrollPercent;
  
        $('.titleSVGBottom').css({
          'transform': 'translate(' + translateValue + 'vw, ' + (15 - 15 * scrollPercent) + 'vh)',
          'opacity': opacityValue
        });
  
        $('.titleSVGTop').css({
          'transform': 'translate(' + (-translateValue) + 'vw, ' + (-15 + 15 * scrollPercent) + 'vh)',
          'opacity': opacityValue
        });
      }
  
      // Title-container animations
      var titleTranslateY = 0 * scrollPercent;
      var titleOpacity = 1 - scrollPercent;
      var titleScale = 1; // 1 is cleaner?
  
      $('.title-container').css({
        'transform': 'translateY(' + titleTranslateY + 'px) scale(' + titleScale + ')',
        'opacity': titleOpacity
      });
  
      // Description animations
      var sec2ScrollPercent = (scrollTop - 50 * windowHeight / 100) / (100 * windowHeight / 100);
      var descriptionOpacity = Math.min(Math.max((scrollTop - 50 * windowHeight / 100) / (10 * windowHeight / 100), 0), 1);
  
      if (sec2ScrollPercent >= 0.1 && sec2ScrollPercent <= 1) {
        $('.descriptionpart1').css({
          'transform': 'translateX(' + (5 - 12 * sec2ScrollPercent) + 'vw)',
          'opacity': descriptionOpacity
        });
  
        $('.descriptionpart2').css({
          'transform': 'translateX(' + (-5 + 12 * sec2ScrollPercent) + 'vw)',
          'opacity': descriptionOpacity
        });
      } else if (sec2ScrollPercent < 0.1) {
        $('.descriptionpart1, .descriptionpart2').css("opacity", "0");
      }
  
      if (scrollTop >= 104 * windowHeight / 100) {
        $('.descriptionpart1 p, .descriptionpart2 p').css({
          'opacity': "0",
          'transform': 'scale(1.7)'
        });
      } else {
        $('.descriptionpart1 p, .descriptionpart2 p').css({
          'opacity': "1",
          'transform': 'scale(1)'
        });
      }
  
      // Video-container animations
      var videoWidth = 90 + 10 * sec2ScrollPercent;
      var videoLeft = 5 - 5 * sec2ScrollPercent;
      var videoTop = 40 - 40 * sec2ScrollPercent;
  
      if (sec2ScrollPercent >= 0.1 && sec2ScrollPercent <= 1) {
        $('.video-container').css({
          'opacity': descriptionOpacity,
          'width': videoWidth + 'vw',
          'left': videoLeft + 'vw',
          'top': videoTop + 'vh'
        });
      } else if (sec2ScrollPercent < 0.1) {
        $('.video-container').css("opacity", "0");
      }

      if (scrollTop >= 104 * windowHeight / 100) {
        $('.video-container').css({
          'width': '100vw',
          'left': '0vw',
          'top': '0vh',
          'opacity': '1'
        });

      }

      if (scrollTop >= 160 * windowHeight / 100) {
        $(".title-work").css("opacity", "1");
        $('.video-container').css({
          'width': '100vw',
          'left': '0vw',
          'top': '-50vh',
          'opacity': '0'
        });
      } else {
        $(".title-work").css("opacity", "0");
      }


    }); // onScroll
    $(window).on('scroll', function() {
      updateImagePosition();
  });
  

$(window).on('scroll', function() {
  updateImagePosition();
});

setInterval(function() {
  updateImagePosition();
}, 1);

function updateImagePosition() {
  var $workExample = $('.work-example');
  var $img = $workExample.find('img');
  
  var workExampleTop = $workExample.offset().top;
  var workExampleHeight = $workExample.outerHeight();
  var imgHeight = $img.outerHeight();
  var scrollTop = $(window).scrollTop();
  var windowHeight = $(window).height();
  var imgTop = $img.offset().top - scrollTop;
  
  if (imgTop <= 0 && imgTop >= -imgHeight + windowHeight) {
      $img.css('top', scrollTop - workExampleTop + 'px');
  } else if (imgTop > 0) {
    $img.css('top', scrollTop - workExampleTop + 'px');
  } else if (imgTop < -imgHeight + windowHeight) {
      $img.css('top', workExampleHeight - imgHeight + 'px');
  }
}


  }, []);
  
  return (
    <div className="App">
      <div className="border"></div>
      <section>
          <div className="Spline">
          <spline-viewer url="https://prod.spline.design/H4ADOm1qva0J7s-S/scene.splinecode"></spline-viewer>
          </div>
            <div className="title-container">
              <img src={TitleSVGTop} alt="title text" className="titleSVG titleSVGTop"/>
              <img src={TitleSVGBottom} alt="title text" className="titleSVG titleSVGBottom"/>
              <div className="title">
                <p>FURALL</p>
              </div>
            </div>
        </section>
        <section>
            <div className="description descriptionpart1">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;At Furall we create innovative web experiences for</p>
            </div>
            <div className="description descriptionpart2">
              <p><br></br>ambitious people and businesses desiring a shift.</p>
            </div>
            <div className="video-container">
            </div>
        </section>
        <section id="section3">






          <PaintballEffect />

          <div className="work-example">
            <img src={workex1} class="work-example1" alt="work example 1"/>
          </div>







        </section>






    <img src={bg}  className="bg"  alt="dsbadbas dsuhad ba"/>


    </div>
  );
}

export default App;