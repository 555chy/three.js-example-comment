# three.js-example-comment

对 three.js 库中的 examples 进行注释

***

## 已完成项

- [webgl_test_memory.html](examples/webgl_test_memory.html)
- [canvas_geometry_cube.html](examples/canvas_geometry_cube.html)
- [webgl_geometry_cube.html](examples/webgl_geometry_cube.html)
- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
- [canvas_ascii_effect.html](examples/canvas_ascii_effect.html)
- [misc_uv_tests.html](examples/misc_uv_tests.html)
- [css3d_sandbox.html](examples/css3d_sandbox.html)
- [canvas_particles_floor.html](examples/canvas_particles_floor.html)
- [canvas_geometry_hierarchy.html](examples/canvas_geometry_hierarchy.html)
- [canvas_particles_random.html](examples/canvas_particles_random.html)
- [canvas_lines.html](examples/canvas_lines.html)

## 当前批阅项

- [canvas_camera_orthographic.html](examples/canvas_camera_orthographic.html)
- [canvas_camera_orthographic2.html](examples/canvas_camera_orthographic2.html)

***

## 知识点
### WebGLRenderer、CanvasRenderer、SoftwareRenderer的区别
1. WebGLRenderer: The WebGL renderer displays your beautifully crafted scenes using WebGL.
WebGL渲染器使用WebGL展示制作的场景。
2. CanvasRenderer: The Canvas renderer displays your beautifully crafted scenes not using WebGL, but draws it using the (slower) Canvas 2D Context API.
Canvas渲染器不使用WebGL展示制作的场景，而使用稍微慢一点的Canvas 2D Context应用程序接口来绘制它。
3. SoftwareRenderer: The SoftwareRenderer is a drop-in renderer for Three.js that can be used on the server and the client, if you need to be GPU independent.
Software渲染器对于Three.js来说是一种退化的渲染器，在不依赖GPU的情况下，它既可以使用在服务器上也可以使用在客户端上。

WebGL、Canvas、Software这三种渲染器理论上可以相互替换。
但是必须注意：WebGL和HTML不同，一般的图片类型（gif，jpg，png等）是不可以直接使用的，也可以把canvas转换成纹理，总之要变换一下方法来进行渲染。
另外，所使用的图片数据的大小必须是2的阶乘，横竖的像素长度大小必须是32x32，128x128等2的阶乘的形式。

在渲染速度方面：WebGL > Canvas > Software。

*参考:* 
- [WebGLRenderer](https://threejs.org/docs/index.html#Reference/Renderers/WebGLRenderer)
- [CanvasRenderer](https://threejs.org/docs/index.html#Examples/Renderers/CanvasRenderer)
- [SoftwareRenderer](https://www.npmjs.com/package/three-software-renderer)

***

## [View Examples](examples/index.html)

*Note:* 如果GitHub的当前页没有index.html的话，GitHub会按设置好的模板加载README.md


