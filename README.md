# three.js-example-comment

对 three.js 库中的 examples 进行注释

***

## 已完成项

- [webgl_test_memory.html](examples/webgl_test_memory.html)
- [canvas_geometry_cube.html](examples/canvas_geometry_cube.html)
- [webgl_geometry_cube.html](examples/webgl_geometry_cube.html)
- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
- [software_geometry_earth.html](examples/canvas_geometry_earth.html)
- [canvas_ascii_effect.html](examples/canvas_ascii_effect.html)
- [misc_uv_tests.html](examples/misc_uv_tests.html)
- [css3d_sandbox.html](examples/css3d_sandbox.html)
- [canvas_particles_floor.html](examples/canvas_particles_floor.html)
- [canvas_geometry_hierarchy.html](examples/canvas_geometry_hierarchy.html)
- [canvas_particles_random.html](examples/canvas_particles_random.html)
- [canvas_lines.html](examples/canvas_lines.html)
- [canvas_camera_orthographic.html](examples/canvas_camera_orthographic.html)

## 当前批阅项
- [canvas_camera_orthographic2.html](examples/canvas_camera_orthographic2.html)
- [webgl_panorama_cube.html](examples/webgl_panorama_cube.html)

***

## 知识点
### WebGLRenderer、CanvasRenderer、SoftwareRenderer的区别
1. WebGLRenderer: The WebGL renderer displays your beautifully crafted scenes using WebGL.
<br>WebGL渲染器使用WebGL展示制作的场景。
2. CanvasRenderer: The Canvas renderer displays your beautifully crafted scenes not using WebGL, but draws it using the (slower) Canvas 2D Context API.
<br>Canvas渲染器不使用WebGL展示制作的场景，而使用稍微慢一点的Canvas 2D Context应用程序接口来绘制它。
3. SoftwareRenderer: The SoftwareRenderer is a drop-in renderer for Three.js that can be used on the server and the client, if you need to be GPU independent.
<br>Software渲染器对于Three.js来说是一种退化的渲染器，在不依赖GPU的情况下，它既可以使用在服务器上也可以使用在客户端上。

	WebGL、Canvas、Software这三种渲染器理论上可以相互替换。
	<br>但是必须注意：WebGL和HTML不同，一般的图片类型（gif，jpg，png等）是不可以直接使用的，也可以把canvas转换成纹理，总之要变换一下方法来进行渲染。
	<br>另外，所使用的图片数据的大小必须是2的阶乘，横竖的像素长度大小必须是32x32，128x128等2的阶乘的形式。

	在渲染速度方面：WebGL > Canvas > Software。

	*参考:* 
	- [WebGLRenderer](https://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderer)
	- [CanvasRenderer](https://threejs.org/docs/index.html#Examples/Renderers/CanvasRenderer)
	- [SoftwareRenderer](https://www.npmjs.com/package/three-software-renderer)

	*范例:* 
	- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
	- [software_geometry_earth.html](examples/canvas_geometry_earth.html)
	
### mesh.applyMatrix( new THREE.Matrix4().makeScale( x, y, z ) )) 的计算过程
```
	- THREE.Matrix4().makeScale(x,y,z) =》
		{ x, 0, 0, 0 }
		{ 0, y, 0, 0 }
		{ 0, 0, z, 0 }
		{ 0, 0, 0, 1 }
		
		如果调用者本身的matrixWorldNeedsUpdate值为真，那么在函数applyMatrix(matrix)中，改变了matrix值后立刻就更新了position，rotation等属性
		但在函数translate(distance,axis)中改变了position等变量（或者直接改变position等属性）后并没有立刻更新matrix值，这时应该手动调用updateMatrix()。

	- 几何对象的原始Matrix(跟side无关) =》
		{ 1, 0, 0, 0 }
		{ 0, 1, 0, 0 }
		{ 0, 0, 1, 0 }
		{ 0, 0, 0, 1 }

	- mesh.applyMatrix之后的值为 =》
		{ x, 0*xyz, 0*xyz,  0*xyz }
		{ 0, y, 	0, 		0 	  }
		{ 0, 0, 	z, 		0 	  }
		{ 0, 0, 	0, 		1	  }
		xyz表示相乘之后的符号位，负号会改变原先的material中的side参数
		
		Error: WebGL: texImage2D: Incurred CPU-side conversion, which is very slow.
		Error: WebGL: texImage2D: Chosen format/type incurred an expensive reformat 0x1908/0x1401

		Multiplies the current matrix by the one specified through the parameters. 
		This is very slow because it will try to calculate the inverse of the transform, so avoid it whenever possible. 
		The equivalent function in OpenGL is glMultMatrix(). 

		通过一个指定的参数乘以当前矩阵，这是非常慢的，因为它会尝试计算逆变换，所以如果可能的话尽量避免使用它
```

   至于 mesh.applyMatrix 中为什么会计算出符号位，这个过程我也还没参透！！！
   
   *范例:*
	- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
	
***

## 相关插件
| 插件 | 功能 |
| :--- | :--- |
| [three.js](build/three.js) 										| JavaScript编写的WebGL第三方库，封装了大部分常用的3D显示功能 |
| [AsciiEffect.js](examples/js/effects/AsciiEffect.js) 				| ASCII文本画渲染效果 |
| [stats.min.js](js/libs/stats.min.js) 								| 统计插件(FPS，渲染时间，chrome内存使用率，而且支持自定义) |
| [dat.gui.min.js](js/libs/dat.gui.min.js)							| 参数控制器，可以向场景中添加控制条，随时调整参数 |
| [Projector.js](examples/js/renderers/Projector.js)				| 将三维的场景投影到二维 |
| [CanvasRenderer.js](examples/js/renderers/CanvasRenderer.js)		| Canvas 2D Context API 进行渲染 |
| [SoftwareRenderer.js](examples/js/renderers/SoftwareRenderer.js)	| 不依赖GPU进行渲染 |
| [OrbitControls.js](js/controls/OrbitControls.js)					| 轨道控制，鼠标左键旋转(与鼠标方向相同，用于非触摸屏上)，右键平移，中键缩放；也可以使用键盘控制 |
| [TrackballControls.js](js/controls/TrackballControls.js)			| 轨迹控制，鼠标左键旋转(与鼠标方向相反，用于触摸屏上)，右键平移，中键缩放；也可以使用键盘控制 |

## [View Examples](examples/index.html)

	*Note:* 如果GitHub的当前页没有index.html的话，GitHub会按设置好的模板加载README.md


