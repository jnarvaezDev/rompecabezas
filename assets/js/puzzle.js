
(function () {
    
    $(document).keydown(function (event) {
        if (event.keyCode == 123) { // Prevent F12
            return false;
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) { // Prevent Ctrl+Shift+I        
            return false;
        }
    });

    $(document).bind("contextmenu",function(e){
        return false;
    });
    
    var mov = 0,
        Blank,
        Puzzle,
        Tile,
        Cronometer,
        __bind = function (fn, me) {
            return function () {
                return fn.apply(me, arguments);
            };
        };

    Puzzle = (function () {
        function Puzzle(images) {
            var i,
                image,
                t,
                x,
                y,
                _i,
                _j,
                _len,
                _ref,
                Interval,
                timer,
                _this = this;
            this.images = images;
            this.changeImage = __bind(this.changeImage, this);
            this.switchTwo = __bind(this.switchTwo, this);
            this.renderBoard = __bind(this.renderBoard, this);
            this.blankPosition = __bind(this.blankPosition, this);
            this.startTime = __bind(this.startTime, this);
            this.checkIfWon = __bind(this.checkIfWon, this);
            this.mixup = __bind(this.mixup, this);
            this.places = [];
            this.initialPlaces = [];
            _ref = this.images;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                image = _ref[_i];
                $("#previews").append('<img src="' + image + '" class="mini"/>');
            }
            this.image = this.images[0];
            $(".mini").bind("click", function (event) {
                return _this.changeImage(event.target.src);
            });
            for (i = _j = 0; _j <= 7; i = ++_j) {
                x = Math.floor(i % 3) * 110;
                y = Math.floor(i / 3) * 110;
                t = new Tile(i, 110, 110, x, y, this.image);
                this.places.push(t);
            }

            this.places.push(new Blank(8));
            this.initialPlaces = this.places.slice(0);

            this.mixup();
        }

        Puzzle.prototype.mixup = function () {
            var blankpos, i, randomNum, _i, _results;
            blankpos = 8;
            _results = [];

            
            var num = 0;
            if(sessionStorage.getItem("autosave") === null || sessionStorage.getItem("autosave") < 3){
                num = 1;
            }else{
                num = 3;
            }

            for (i = _i = 0; _i <= 10; i = ++_i) {
                //randomNum = Math.floor(Math.random() * 9);
               randomNum = num;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
            }

            if(sessionStorage.getItem("autosave") === null || sessionStorage.getItem("autosave") == 1){
                sessionStorage.setItem("autosave", 2);
                randomNum = 0;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
                randomNum = 3;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
            }else if(sessionStorage.getItem("autosave") == 3){
                sessionStorage.setItem("autosave", 1);
                randomNum = 0;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
                randomNum = 1;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
            }else if(sessionStorage.getItem("autosave") == 2){
                sessionStorage.setItem("autosave", 3);
                randomNum = 4;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
                randomNum = 3;
                this.switchTwo(randomNum, blankpos);
                _results.push((blankpos = randomNum));
            }
            
            return _results;
        };

        Puzzle.prototype.checkIfWon = function () {
            var i, _i;
            for (i = _i = 0; _i <= 8; i = ++_i) {
                if (this.places[i] === this.initialPlaces[i]) {
                    continue;
                } else {
                    return false;
                }
            }
            return true;
        };

        Puzzle.prototype.blankPosition = function () {
            var place, pos, _i, _len, _ref;
            _ref = this.places;
            for (pos = _i = 0, _len = _ref.length; _i < _len; pos = ++_i) {
                place = _ref[pos];
                if (place["class"] === "Blank") {
                    return pos;
                }
            }
        };

        Puzzle.prototype.renderBoard = function () {
            var blank,
                t,
                _i,
                _len,
                _ref,
                _this = this;
            blank = this.blankPosition();
            
            $("#canvas").html("");
            if (this.checkIfWon()) {
                clearInterval(this.Interval);
				
				var points_game = 1;
				if(mov <= 13){
					points_game = 13;
				}else{
					switch (mov) {
						case '14':
							points_game = 12;
							break;
						case '15':
							points_game = 11;
							break;
						case '16':
							points_game = 10;
							break;
						case '17':
							points_game = 9;
							break;
						case '18':
							points_game = 8;
							break;
						case '19':
							points_game = 7;
							break;
						case '20':
							points_game = 6;
							break;
						case '21':
							points_game = 5;
							break;
						case '22':
							points_game = 4;
							break;
						case '23':
							points_game = 3;
							break;
						case '24':
							points_game = 2;
							break;
					}
				}
				
                $("#canvas").append(
                    '<span id="windiv"><img src="' +
                    this.image +
                    '"/><div class="banner"> Felicitaciones, lograste resolver el Rompecabezas tu puntuación es: '+points_game+' <br /><a href="https://previeneyganaconrayovac.com/#registra-empaques-section">Ir Home</a></div></span>'
                );
                var _id_ = $('#puzzle-ini').attr('data-option-a').substring(2);
                var _key_ = $('#puzzle-ini').attr('data-option-i').substring(2);
                
                var t = timer.split(':');
                /*$.post('https://previeneyganaconrayovac.com/wp-json/puzzle/v1/controller/frontOption',{id:_id_,key:_key_,action:2,_iii:t[2],_ii:t[1],_i:t[0],_iiii:mov},function(data){
                    if(data.response == 'redirect'){
                        window.location = 'https://previeneyganaconrayovac.com/?o=0';
                    }else{
                        /*window.setTimeout( function(){
                            window.location = "https://previeneyganaconrayovac.com/confirmacion/";
                        }, 2000 );*/
                    /*}
                },'json');*/

                return $("#windiv").show("slow");
            } else {
                _ref = this.places;
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    t = _ref[_i];
                    t.show(blank);
                }
                return $(".clickable").bind("click", function (event) {
                    var toSwitch;
                    toSwitch = parseInt(event.target.id);
                    mov += 1;
                    $(".mov").html(mov);
                    _this.startTime(true);
                    return _this.switchTwo(toSwitch, _this.blankPosition());
                });
            }
        };

        Puzzle.prototype.startTime = function (sw) {
            var hours = 0;
            var minutes = 0;
            var seconds = 0;
          
            if(this.Interval === undefined ){
                this.Interval = setInterval(function () {
                    seconds++;
                    
                    if (seconds <= 9 && seconds !== "00") {
                        $("#seconds").html("0" + seconds);
                    }
                    if (minutes <= 9 && minutes !== "00") {
                        $("#minutes").html("0" + minutes);
                    }
                    if (hours <= 9 && hours !== "00") {
                        $("#hours").html("0" + hours);
                    }
                    if (seconds > 9) {
                        $("#seconds").html(seconds);
                    }
                    if (minutes > 9) {
                        $("#minutes").html(minutes);
                    }
                    if (hours > 9) {
                        $("#hours").html(hours);
                    }
        
                    if (seconds >= 60) {
                        minutes++;
                        $("#minutes").html("0" + minutes);
                        seconds = 0;
                    }
        
                    if (minutes >= 60) {
                        hours++;
                        $("#hours").html("0" + hours);
                        minutes = 0;
                        seconds = 0;
                    }
                    this.timer = hours+':'+minutes+':'+seconds;
                }, 1000);
                var _id_ = $('#puzzle-ini').attr('data-option-a').substring(2);
                var _key_ = $('#puzzle-ini').attr('data-option-i').substring(2);
               
                /*$.post('https://previeneyganaconrayovac.com/wp-json/puzzle/v1/controller/frontOption',{id:_id_,key:_key_,action:1},function(data){
                    if(data.response == 'redirect'){
                        window.location = 'https://previeneyganaconrayovac.com/?o=0';
                    }
                },'json');*/
            }
            
        };

        Puzzle.prototype.switchTwo = function (pos1, pos2) {
            var x, y;
            x = this.places[pos1];
            y = this.places[pos2];
            this.places[pos2] = x;
            this.places[pos1] = y;
            this.places[pos2].position = pos2;
            return this.renderBoard();
        };

        Puzzle.prototype.changeImage = function (image) {
            var panel, _i, _len, _ref;
            this.image = image;
            _ref = this.places;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                panel = _ref[_i];
                if (panel["class"] !== "Blank") {
                    panel.image = image;
                }
            }
            return this.renderBoard();
        };

        return Puzzle;
    })();

    Tile = (function () {
        function Tile(position, width, height, x, y, image) {
            this.position = position;
            this.width = width;
            this.height = height;
            this.x = x;
            this.y = y;
            this.image = image;
            this["class"] = "Tile";
        }

        Tile.prototype.show = function (blankPosition) {
            if (this.isAdjacent(blankPosition)) {
                $("#canvas").append(
                    '<div id="' +
                    this.position +
                    '" class="innerSquare imageSquare clickable"></div>'
                );
            } else {
                $("#canvas").append(
                    '<div id="' +
                    this.position +
                    '" class="innerSquare imageSquare"></div>'
                );
            }
            $("#" + this.position).css(
                "background-position",
                "-" + this.x + "px -" + this.y + "px"
            );
            return $("#" + this.position).css(
                "background-image",
                "url(" + this.image + ")"
            );
        };

        Tile.prototype.isAdjacent = function (blanksPosition) {
            if (
                (blanksPosition - 1 === this.position && blanksPosition % 3 > 0) ||
                (blanksPosition + 1 === this.position && blanksPosition % 3 < 2) ||
                (blanksPosition + 3 === this.position && blanksPosition / 3 < 2) ||
                (blanksPosition - 3 === this.position && blanksPosition / 3 > 0)
            ) {
                return true;
            }
            return false;
        };

        Tile.prototype.setImage = function (image) {
            return (this.image = image);
        };

        return Tile;
    })();

    Blank = (function () {
        function Blank(position) {
            this.position = position;
            this["class"] = "Blank";
        }

        Blank.prototype.show = function () {
            return $("#canvas").append('<div class="innerSquare blank"></div>');
        };

        return Blank;
    })();

    $(document).ready(function () {
        var _id_ = $('#puzzle-ini').attr('data-option-a').substring(2);
        var _key_ = $('#puzzle-ini').attr('data-option-i').substring(2);
        
        //$.post('https://previeneyganaconrayovac.com/wp-json/puzzle/v1/controller/frontOption',{id:_id_,key:_key_,action:0},function(data){
        //    if(data.response == 'OK'){
                var imgs, puzzle;
                imgs = [
                    "assets/img/img-001.png",
                    "assets/img/img-004.jpg",
                    "assets/img/img-005.png"
                ];
                img = imgs.sort(()=> Math.random() - 0.5).splice(0, 1);
                return (puzzle = new Puzzle(img));
         /*   }else{
                window.location = 'https://previeneyganaconrayovac.com/?o=0';
            }
        },'json');*/
    });
}.call(this));
