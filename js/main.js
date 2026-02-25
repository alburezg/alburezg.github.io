// Dean Attali / Beautiful Jekyll 2016

var main = {

  bigImgEl : null,
  numImgs : null,

  init : function() {
    // Shorten the navbar after scrolling a little bit down
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("top-nav-short");
        } else {
            $(".navbar").removeClass("top-nav-short");
        }
    });
    
    // On mobile, hide the avatar when expanding the navbar menu
    $('#main-navbar').on('show.bs.collapse', function () {
      $(".navbar").addClass("top-nav-expanded");
    });
    $('#main-navbar').on('hidden.bs.collapse', function () {
      $(".navbar").removeClass("top-nav-expanded");
    });
	
    // On mobile, when clicking on a multi-level navbar menu, show the child links
    $('#main-navbar').on("click", ".navlinks-parent", function(e) {
      var target = e.target;
      $.each($(".navlinks-parent"), function(key, value) {
        if (value == target) {
          $(value).parent().toggleClass("show-children");
        } else {
          $(value).parent().removeClass("show-children");
        }
      });
    });
    
    // Ensure nested navbar menus are not longer than the menu header
    var menus = $(".navlinks-container");
    if (menus.length > 0) {
      var navbar = $("#main-navbar ul");
      var fakeMenuHtml = "<li class='fake-menu' style='display:none;'><a></a></li>";
      navbar.append(fakeMenuHtml);
      var fakeMenu = $(".fake-menu");

      $.each(menus, function(i) {
        var parent = $(menus[i]).find(".navlinks-parent");
        var children = $(menus[i]).find(".navlinks-children a");
        var words = [];
        $.each(children, function(idx, el) { words = words.concat($(el).text().trim().split(/\s+/)); });
        var maxwidth = 0;
        $.each(words, function(id, word) {
          fakeMenu.html("<a>" + word + "</a>");
          var width =  fakeMenu.width();
          if (width > maxwidth) {
            maxwidth = width;
          }
        });
        $(menus[i]).css('min-width', maxwidth + 'px')
      });

      fakeMenu.remove();
    }        
    
    // show the big header image	
    main.initImgs();
  },
  
  initImgs : function() {
    // If the page was large images to randomly select from, choose an image
    if ($("#header-big-imgs").length > 0) {
      main.bigImgEl = $("#header-big-imgs");
      main.numImgs = main.bigImgEl.attr("data-num-img");

          // 2fc73a3a967e97599c9763d05e564189
	  // set an initial image
	  var imgInfo = main.getImgInfo();
	  var src = imgInfo.src;
	  var desc = imgInfo.desc;
  	  main.setImg(src, desc);
  	
	  // For better UX, prefetch the next image so that it will already be loaded when we want to show it
  	  var getNextImg = function() {
	    var imgInfo = main.getImgInfo();
	    var src = imgInfo.src;
	    var desc = imgInfo.desc;		  
	    
		var prefetchImg = new Image();
  		prefetchImg.src = src;
		// if I want to do something once the image is ready: `prefetchImg.onload = function(){}`
		
  		setTimeout(function(){
                  var img = $("<div></div>").addClass("big-img-transition").css("background-image", 'url(' + src + ')');
  		  $(".intro-header.big-img").prepend(img);
  		  setTimeout(function(){ img.css("opacity", "1"); }, 50);
		  
		  // after the animation of fading in the new image is done, prefetch the next one
  		  //img.one("transitioned webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
		  setTimeout(function() {
		    main.setImg(src, desc);
			img.remove();
  			getNextImg();
		  }, 1000); 
  		  //});		
  		}, 6000);
  	  };
	  
	  // If there are multiple images, cycle through them
	  if (main.numImgs > 1) {
  	    getNextImg();
	  }
    }
  },
  
  getImgInfo : function() {
  	var randNum = Math.floor((Math.random() * main.numImgs) + 1);
    var src = main.bigImgEl.attr("data-img-src-" + randNum);
	var desc = main.bigImgEl.attr("data-img-desc-" + randNum);
	
	return {
	  src : src,
	  desc : desc
	}
  },
  
  setImg : function(src, desc) {
	$(".intro-header.big-img").css("background-image", 'url(' + src + ')');
	if (typeof desc !== typeof undefined && desc !== false) {
	  $(".img-desc").text(desc).show();
	} else {
	  $(".img-desc").hide();  
	}
  }
};

// 2fc73a3a967e97599c9763d05e564189

document.addEventListener('DOMContentLoaded', main.init);

document.addEventListener('DOMContentLoaded', function() {
  var copyButtons = document.querySelectorAll('.copy-email-btn');
  if (!copyButtons.length) {
    return;
  }

  function fallbackCopy(text) {
    var helper = document.createElement('textarea');
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand('copy');
      return true;
    } catch (err) {
      return false;
    } finally {
      document.body.removeChild(helper);
    }
  }

  copyButtons.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var user = btn.getAttribute('data-email-user');
      var domain = btn.getAttribute('data-email-domain');
      var email = user + '@' + domain;
      var resetText = btn.textContent;

      var onSuccess = function() {
        btn.textContent = 'Copied';
        setTimeout(function() { btn.textContent = resetText; }, 1400);
      };

      var onFailure = function() {
        btn.textContent = 'Copy failed';
        setTimeout(function() { btn.textContent = resetText; }, 1400);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(onSuccess).catch(function() {
          fallbackCopy(email) ? onSuccess() : onFailure();
        });
      } else {
        fallbackCopy(email) ? onSuccess() : onFailure();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('snake-modal');
  var closeBtn = modal ? modal.querySelector('.snake-close') : null;
  var canvas = document.getElementById('snake-canvas');
  var scoreEl = document.getElementById('snake-score-value');
  var gameLoop = null;
  var tile = 16;
  var grid = 20;
  var snake;
  var food;
  var dir;
  var nextDir;
  var score;
  var gameOver;

  if (!modal || !canvas || !scoreEl) {
    return;
  }

  var ctx = canvas.getContext('2d');

  function resetGame() {
    snake = [{ x: 10, y: 10 }];
    food = { x: 5, y: 5 };
    dir = { x: 1, y: 0 };
    nextDir = { x: 1, y: 0 };
    score = 0;
    gameOver = false;
    scoreEl.textContent = score;
    placeFood();
    draw();
  }

  function placeFood() {
    var valid = false;
    while (!valid) {
      food.x = Math.floor(Math.random() * grid);
      food.y = Math.floor(Math.random() * grid);
      valid = true;
      for (var i = 0; i < snake.length; i++) {
        if (snake[i].x === food.x && snake[i].y === food.y) {
          valid = false;
          break;
        }
      }
    }
  }

  function step() {
    if (gameOver) {
      draw();
      return;
    }

    dir = nextDir;
    var head = {
      x: snake[0].x + dir.x,
      y: snake[0].y + dir.y
    };

    if (head.x < 0 || head.y < 0 || head.x >= grid || head.y >= grid) {
      gameOver = true;
      draw();
      return;
    }

    for (var i = 0; i < snake.length; i++) {
      if (snake[i].x === head.x && snake[i].y === head.y) {
        gameOver = true;
        draw();
        return;
      }
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      score += 1;
      scoreEl.textContent = score;
      placeFood();
    } else {
      snake.pop();
    }

    draw();
  }

  function draw() {
    ctx.fillStyle = '#09111b';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'rgba(255,255,255,0.05)';
    for (var i = 0; i <= grid; i++) {
      ctx.beginPath();
      ctx.moveTo(i * tile, 0);
      ctx.lineTo(i * tile, canvas.height);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * tile);
      ctx.lineTo(canvas.width, i * tile);
      ctx.stroke();
    }

    ctx.fillStyle = '#f97316';
    ctx.fillRect(food.x * tile + 2, food.y * tile + 2, tile - 4, tile - 4);

    for (var j = 0; j < snake.length; j++) {
      ctx.fillStyle = j === 0 ? '#67e8f9' : '#22d3ee';
      ctx.fillRect(snake[j].x * tile + 1, snake[j].y * tile + 1, tile - 2, tile - 2);
    }

    if (gameOver) {
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#f8fafc';
      ctx.textAlign = 'center';
      ctx.font = 'bold 28px Open Sans';
      ctx.fillText('Game Over', canvas.width / 2, canvas.height / 2 - 8);
      ctx.font = '14px Open Sans';
      ctx.fillText('Press Enter to restart', canvas.width / 2, canvas.height / 2 + 20);
    }
  }

  function setDirection(x, y) {
    if (dir.x === -x && dir.y === -y) {
      return;
    }
    nextDir = { x: x, y: y };
  }

  function onKey(e) {
    if (!modal.classList.contains('open')) {
      return;
    }

    var key = e.key.toLowerCase();
    if (key === 'escape') {
      closeModal();
      return;
    }

    if (gameOver && key === 'enter') {
      resetGame();
      return;
    }

    if (key === 'arrowup' || key === 'w') {
      setDirection(0, -1);
    } else if (key === 'arrowdown' || key === 's') {
      setDirection(0, 1);
    } else if (key === 'arrowleft' || key === 'a') {
      setDirection(-1, 0);
    } else if (key === 'arrowright' || key === 'd') {
      setDirection(1, 0);
    } else {
      return;
    }

    e.preventDefault();
  }

  function openModal() {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    resetGame();
    if (gameLoop) {
      clearInterval(gameLoop);
    }
    gameLoop = setInterval(step, 110);
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    if (gameLoop) {
      clearInterval(gameLoop);
      gameLoop = null;
    }
  }

  function avatarClicked(target) {
    return target.closest('.avatar-container a, .avatar-container, .avatar-img-border, .avatar-img');
  }

  document.addEventListener('click', function(e) {
    var hit = avatarClicked(e.target);
    if (!hit) {
      return;
    }
    e.preventDefault();
    openModal();
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', onKey);
});
