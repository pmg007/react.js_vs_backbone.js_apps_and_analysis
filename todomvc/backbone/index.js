<!doctype html>
<html lang="en" data-framework="backbonejs">
		<!-- new below -->

		<style>
				#myContainer {
				  width: 200px;
				  height: 200px;
				  position: absolute;
				  background: yellow;
				  float: right;
				  margin: 6cm;
				  /* padding-top: 0%; */
				  margin-top: 0px;
				  /* height: 100vh;
					width: 100vw; */
				}
				#myAnimation {
				  width: 50px;
				  height: 50px;
				  position: absolute;
				  background-color: red;
				  /* float: right; */
				}
				#both {
					margin: 0 auto;
					width: 100%;
				}
	
				/* #circle {
					float: left;
				} */
				</style>
		<!-- new end -->
	<head>
		<meta charset="utf-8">
		<title>Backbone.js • TodoMVC</title>
		<link rel="stylesheet" href="node_modules/todomvc-common/base.css">
		<link rel="stylesheet" href="node_modules/todomvc-app-css/index.css">
	</head>
	<body>
		<!-- new below -->
		<div id="both">
				<div id ="myContainer">
						<div id ="myAnimation"></div>
					</div>
					<div id = "circle"> 
						<!-- New scripts added below -->
					<canvas id="myCanvas" width="200" height="200" style="border:1px solid #d3d3d3;">
							Your browser does not support the HTML5 canvas tag.</canvas>
						<script>
				
							var mainCanvas = document.getElementById("myCanvas");
							var mainContext = mainCanvas.getContext('2d');
							 
							var canvasWidth = mainCanvas.width;
							var canvasHeight = mainCanvas.height;
							 
							var angle = 0;
							 
							var requestAnimationFrame = window.requestAnimationFrame || 
														window.mozRequestAnimationFrame || 
														window.webkitRequestAnimationFrame || 
														window.msRequestAnimationFrame;
							 
							function drawCircle() {
								mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
								 
								// color in the background
								mainContext.fillStyle = "#EEEEEE";
								mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
								 
								// draw the circle
								mainContext.beginPath();
								 
								var radius = 20 + 50 * Math.abs(Math.cos(angle));
								mainContext.arc(100, 100, radius, 0, Math.PI * 2, false);
								mainContext.closePath();
								 
								// color in the circle
								mainContext.fillStyle = "#006699";
								mainContext.fill();
								  
								angle += Math.PI / 64;
								 
								requestAnimationFrame(drawCircle);
							}
							drawCircle();
							</script> 
					
							
					
							<script>
							function myMove() {
							  var elem = document.getElementById("myAnimation");   
							  var pos = 0;
							  var id = setInterval(frame, 10);
							  function frame() {
								if (pos == 153) {
									while (pos != 0) {
									  pos--; 
									  elem.style.top = pos + 'px'; 
									  elem.style.left = pos + 'px'; 			
									}	
								  
								  // clearInterval(id);
								} else {
								  pos++; 
								  elem.style.top = pos + 'px'; 
								  elem.style.left = pos + 'px'; 
								}
							  }
							}
							myMove();
							</script>
							<!--  -->
					</div>
					<!--  new end -->
		</div>
		<!--  -->
		<!-- <div id ="myContainer">
		<div id ="myAnimation"></div>
		</div> -->
		<section class="todoapp">
			<header class="header">
				<h1>todos</h1>
				<input class="new-todo" placeholder="What needs to be done?" autofocus>
			</header>
			<section class="main">
				<input class="toggle-all" id="toggle-all" type="checkbox">
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list"></ul>
			</section>
			<footer class="footer"></footer>
		</section>
		<footer class="info">
			<p>Double-click to edit a todo</p>
			<p>Written by <a href="https://github.com/addyosmani">Addy Osmani</a></p>
			<p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
		</footer>
		<script type="text/template" id="item-template">
			<div class="view">
				<input class="toggle" type="checkbox" <%= completed ? 'checked' : '' %>>
				<label><%- title %></label>
				<button class="destroy"></button>
			</div>
			<input class="edit" value="<%- title %>">
		</script>
		<script type="text/template" id="stats-template">
			<span class="todo-count"><strong><%= remaining %></strong> <%= remaining === 1 ? 'item' : 'items' %> left</span>
			<ul class="filters">
				<li>
					<a class="selected" href="#/">All</a>
				</li>
				<li>
					<a href="#/active">Active</a>
				</li>
				<li>
					<a href="#/completed">Completed</a>
				</li>
			</ul>
			<% if (completed) { %>
			<button class="clear-completed">Clear completed</button>
			<% } %>
		</script>
		<script src="node_modules/todomvc-common/base.js"></script>
		<script src="node_modules/jquery/dist/jquery.js"></script>
		<script src="node_modules/underscore/underscore.js"></script>
		<script src="node_modules/backbone/backbone.js"></script>
		<script src="node_modules/backbone.localstorage/backbone.localStorage.js"></script>
		<script src="js/models/todo.js"></script>
		<script src="js/collections/todos.js"></script>
		<script src="js/views/todo-view.js"></script>
		<script src="js/views/app-view.js"></script>
		<script src="js/routers/router.js"></script>
		<script src="js/app.js"></script>
		<!-- <canvas id="myCanvas" width="450" height="450" style="border:1px solid #d3d3d3;">
		Your browser does not support the HTML5 canvas tag.</canvas>
		<script>

		var mainCanvas = document.getElementById("myCanvas");
		var mainContext = mainCanvas.getContext('2d');
		 
		var canvasWidth = mainCanvas.width;
		var canvasHeight = mainCanvas.height;
		 
		var angle = 0;
		 
		var requestAnimationFrame = window.requestAnimationFrame || 
		                            window.mozRequestAnimationFrame || 
		                            window.webkitRequestAnimationFrame || 
		                            window.msRequestAnimationFrame;
		 
		function drawCircle() {
		    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
		     
		    // color in the background
		    mainContext.fillStyle = "#EEEEEE";
		    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);
		     
		    // draw the circle
		    mainContext.beginPath();
		     
		    var radius = 25 + 150 * Math.abs(Math.cos(angle));
		    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
		    mainContext.closePath();
		     
		    // color in the circle
		    mainContext.fillStyle = "#006699";
		    mainContext.fill();
		      
		    angle += Math.PI / 64;
		     
		    requestAnimationFrame(drawCircle);
		}
		drawCircle();
		</script> 

		

		<script>
		function myMove() {
		  var elem = document.getElementById("myAnimation");   
		  var pos = 0;
		  var id = setInterval(frame, 10);
		  function frame() {
		    if (pos == 350) {
			    while (pos != 0) {
		    	  pos--; 
			      elem.style.top = pos + 'px'; 
			      elem.style.left = pos + 'px'; 			
			    }	
		      
		      // clearInterval(id);
		    } else {
		      pos++; 
		      elem.style.top = pos + 'px'; 
		      elem.style.left = pos + 'px'; 
		    }
		  }
		}
		myMove();
		</script>
		 -->

	</body>
</html>
