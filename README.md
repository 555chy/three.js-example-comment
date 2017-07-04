# three.js-example-comment

对 three.js 库中的 examples 进行注释

***

## 已完成项
- [canvas_ascii_effect.html](examples/canvas_ascii_effect.html)
- [canvas_camera_orthographic.html](examples/canvas_camera_orthographic.html)
- [canvas_camera_orthographic2.html](examples/canvas_camera_orthographic2.html)
- [canvas_geometry_cube.html](examples/canvas_geometry_cube.html)
- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
- [canvas_geometry_hierarchy.html](examples/canvas_geometry_hierarchy.html)
- [canvas_geometry_panorama.html](examples/canvas_geometry_panorama.html)
- [canvas_geometry_panorama_fisheye.html](examples/canvas_geometry_panorama_fisheye.html)
- [canvas_geometry_text.html](examples/canvas_geometry_text.html)
- [canvas_geometry_shapes.html](examples/canvas_geometry_shapes.html)
- [canvas_lines.html](examples/canvas_lines.html)
- [canvas_lines_colors.html](examples/canvas_lines_colors.html)
- [canvas_lines_colors_2d.html](examples/canvas_lines_colors_2d.html)
- [canvas_lines_dashed.html](examples/canvas_lines_dashed.html)
- [canvas_lines_sphere.html](examples/canvas_lines_sphere.html)
- [canvas_materials_normal.html](examples/canvas_materials_normal.html)
- [canvas_materials_reflection.html](examples/canvas_materials_reflection.html)
- [canvas_materials_video.html](examples/canvas_materials_video.html)
- [canvas_particles_floor.html](examples/canvas_particles_floor.html)
- [canvas_particles_random.html](examples/canvas_particles_random.html)

- [css3d_panorama.html](examples/css3d_panorama.html)
- [css3d_panorama_deviceorientation.html](examples/css3d_panorama_deviceorientation.html)
- [css3d_sandbox.html](examples/css3d_sandbox.html)
- [css3d_youtube.html](examples/css3d_youtube.html)

- [misc_uv_tests.html](examples/misc_uv_tests.html)

- [software_geometry_earth.html](examples/canvas_geometry_earth.html)

- [webgl_geometry_cube.html](examples/webgl_geometry_cube.html)
- [webgl_geometries.html](examples/webgl_geometries.html)
- [webgl_materials_grass.html](examples/webgl_materials_grass.html)
- [webgl_panorama_cube.html](examples/webgl_panorama_cube.html)
- [webgl_test_memory.html](examples/webgl_test_memory.html)

- [CombinedCamera.js](examples/js/cameras/CombinedCamera.js)
- [hilbert2D.js](examples/js/geometries/hilbert2D.js)	

## 当前批阅项
- [webgl_lights_hemisphere.html](examples/webgl_lights_hemisphere.html)
- [canvas_interactive_cubes.html](examples/canvas_interactive_cubes.html)

***

## 知识点

### 光源
| Name | 名字 | 描述 |
| :--- | :--- | :--- |
| AmbientLight		| 环境光		| 这是一种基础光源，它的颜色会添加到整个场景和所有对象的当前颜色上 |
| PointLight		| 点光源		| 空间中的一点，朝所有方向发射光线 |
| SpotLight			| 聚光灯光源	| 这种光源有聚光效果，类似台灯、天花板上的吊灯、或者手电筒 |
| DirectionLight	| 方向光		| 也称作无限光，这种光源发出的光线可以看作是平行的，例如太阳光 |
| HemisphereLight	| 半球光		| 这是一种特殊的光源，可以用来创建更加自然的室外光线，模拟反光面和光线微弱的天空 |
| AreaLight			| 面光源		| 使用这种光源可以指定散发光线的平面，而不是空间中的一点 |
| LensFlare			| 镜头眩光		| 这不是一种光源，而是通过LensFlare为场景中的光源添加眩光效果 |

### 几何体
| Name | 名字 |
| :--- | :--- |
| PlaneGeometry			| 平面 |
| CircleGeometry		| 圆形 |
| ShapeGeometry			| 塑形 |
| CubeGeometry			| 立方体 |
| SphereGeometry		| 球体 |
| CylinderGeometry		| 圆柱 |
| TorusGeometry			| 圆环 |
| TorusKnotGeometry		| 环面纽结 |
| PolyhedronGeometry	| 多面体 |
| IcosahedronGeometry	| 二十面体 |
| OctahedronGeometry	| 八面体 |
| TetraHedronGeometry	| 四面体 |
| ConvexGeometry		| 凸面体 |
| LatheGeometry			| 扫描面 |
| ExtrudeGeometry		| 拉伸几何 |
| TubeGeometry			| 管状体 |
| ParametricGeometry	| 参数几何体 |
| TextGeometry			| 文本几何体 |

### 材质
| Name | 名字 | 描述 |
| :--- | :--- | :--- |
| MeshBasicMaterial		| 基础材质，可以用它赋予几何体一种简单的颜色，或者显示几何体的线框 |
| MeshDepthMaterial		| 根据网格到相机的距离，这种材质决定如何给网格染色 |
| MeshNormalMaterial	| 这是一种简单的材质，根据物体表面的法向量计算颜色 |
| MeshFaceMaterial		| 这是一个容器，可以在这个容器里为物体的各个表面指定不同的颜色 |
| MeshLambertMaterial	| 这种材质会考虑光照的影响，可以用来创建颜色暗淡的、不光亮的物体 |
| MeshStandardMaterial(原 MeshPhongMaterial) | 这种材质也会考虑光照的影响，而且可以用来创建光亮的物体 |
| ShaderMaterial		| 这种材允许使用自定义的着色器程序，直接控制顶点的放置方式，以及像素的着色方式 |
| LineBasicMaterial		| 这种材质可以用于THREE.Line(直线)几何体，从而创建着色的直线 }
| LineDashedMaterial	| 这种材质跟直线基础材质一样，不过可以用来创建出一种虚线效果 |
| SpriteMaterial		| Sprite(点精灵)的材质标准渲染器 |
| SpriteCanvasMaterial  | 使用canvas渲染器的Sprite(点精灵)的材质 |
} MultiMaterial			| 使用多种材质渲染同一物体 |

### 渲染器
- WebGLRenderer
- CanvasRenderer
- SoftwareRenderer
- CSS3DRenderer

### WebGLRenderer、CanvasRenderer、SoftwareRenderer的区别
1. WebGLRenderer: The WebGL renderer displays your beautifully crafted scenes using WebGL.
<br>WebGL渲染器使用WebGL展示制作的场景。
2. CanvasRenderer: The Canvas renderer displays your beautifully crafted scenes not using WebGL, but draws it using the (slower) Canvas 2D Context API.
Canvas渲染器不使用WebGL展示制作的场景，而使用稍微慢一点的Canvas 2D Context应用程序接口来绘制它。
3. SoftwareRenderer: The SoftwareRenderer is a drop-in renderer for Three.js that can be used on the server and the client, if you need to be GPU independent.
<br>Software渲染器对于Three.js来说是一种退化的渲染器，在不依赖GPU的情况下，它既可以使用在服务器上也可以使用在客户端上。

WebGL需要环境光否则是黑色的，其它两个即使没有环境光也能渲染出材质。
对于粒子系统：CanvasRenderer只能显示THREE.Sprite(原Particle)，WebGLRenderer只能显示THREE.Points(原ParticleSystem)
Sprite和Points都是始终面朝相机的2D图形
AxisHelper(坐标轴)只能在WebGLRenderer下显示，不能在CanvasRenderer下显示
大部分情况下，WebGL、Canvas、Software这三种渲染器理论上可以相互替换。

<br>另外，所使用的图片数据的大小必须是2的阶乘，横竖的像素长度大小必须是32x32，128x128等2的阶乘的形式。

在渲染速度方面：WebGL > Canvas > Software。

**参考:** 
- [WebGLRenderer](https://threejs.org/docs/index.html#api/renderers/WebGLRenderer)
- [CanvasRenderer](https://threejs.org/docs/index.html#examples/renderers/CanvasRenderer)
- [SoftwareRenderer](https://www.npmjs.com/package/three-software-renderer)

**范例:** 
- [canvas_geometry_earth.html](examples/canvas_geometry_earth.html)
- [software_geometry_earth.html](examples/canvas_geometry_earth.html)
	
### mesh.applyMatrix( new THREE.Matrix4().makeScale( x, y, z ) )) 的计算过程
1. THREE.Matrix4().makeScale(x,y,z) =》
```markdown
{ x, 0, 0, 0 }
{ 0, y, 0, 0 }
{ 0, 0, z, 0 }
{ 0, 0, 0, 1 }
```
如果调用者本身的matrixWorldNeedsUpdate值为真，那么在函数applyMatrix(matrix)中，改变了matrix值后立刻就更新了position，rotation等属性
<br>但在函数translate(distance,axis)中改变了position等变量（或者直接改变position等属性）后并没有立刻更新matrix值，这时应该手动调用updateMatrix()。

2. 几何对象的原始Matrix(跟side无关) =》
```markdown
{ 1, 0, 0, 0 }
{ 0, 1, 0, 0 }
{ 0, 0, 1, 0 }
{ 0, 0, 0, 1 }
```

3. mesh.applyMatrix之后的值为 =》
```markdown
{ x, 0*xy, 	0*yz,  	0*xyz }
{ 0, y, 	0, 		0	  }
{ 0, 0*x, 	z, 		0	  }
{ 0, 0, 	0, 		1	  }
```
xyz表示相乘之后的符号位，负号会改变原先的material中的side参数

4. 原始法向量normalMatrix为 =》
```markdown
{  1,   0, 	  -0	 }
{ -0,   1, 	   6.123 }
{  0,  -6.123, 1	 }
```
5. mesh.applyMatrix之后，mesh.normalMatrix的值为 =》
```markdown
{  x,   	 0*x*z,	  -0*x	 	}
{ -0*xy,   	 y, 	   6.123*y 	}
{  0*x*y*z, -6.123*z,  1*z		}
```

Error: WebGL: texImage2D: Incurred CPU-side conversion, which is very slow.
<br>Error: WebGL: texImage2D: Chosen format/type incurred an expensive reformat 0x1908/0x1401

Multiplies the current matrix by the one specified through the parameters. 
<br>This is very slow because it will try to calculate the inverse of the transform, so avoid it whenever possible. 
<br>The equivalent function in OpenGL is glMultMatrix(). 

通过一个指定的参数乘以当前矩阵，这是非常慢的，因为它会尝试计算逆变换，所以如果可能的话尽量避免使用它

至于 mesh.applyMatrix 中为什么会计算出符号位，还有怎么计算的，这个过程我也还没参透！！！

**范例:**
- [webgl_panorama_cube.html](examples/webgl_panorama_cube.html)

### js的apply与call的异同
1. Function.apply(obj,args)方法接收两个参数
obj：这个对象将代替Function类里this对象
args：这个是数组，它将作为参数传给Function（args-->arguments）

2. Function.call(obj,[param1[,param2[,…[,paramN]]]])
obj：这个对象将代替Function类里this对象
params：这个是一个参数列表

apply方法能劫持另外一个对象的方法，继承另外一个对象的属性。而call和apply的作用是一样的，只不过是一个传的是数组一个传的是参数列表不一样。

Array.prototype.push.apply(a, b)的作用是连接数组，相当于a.concat(b)。
由于concat不用像apply一样去改变数组上下文，所以效率更高

**范例:**
- [hilbert2D.js](examples/js/geometries/hilbert2D.js)

### json和array的使用场景
如果频繁添加删除，使用json；如果频繁取数据，使用array。

### Line与LineSegments的区别
THREE.Line使用WebGL中的gl.LINE_STRIP(一系列的连续直线，即折线)渲染
THREE.LineSegments使用WebGL中的gl.LINES(每一对顶点被解释为一条直线，即线段)渲染

**范例:**
- [canvas_lines.html](examples/canvas_lines.html)
- [canvas_lines_dashed.html](examples/canvas_lines_dashed.html)

### 手机上运行webvr
要么安装个谷歌VR支持插件，要么stereoeffect来代替vreffect

### 场景的两种雾化效果
1. scene.fog = new THREE.Fog(color, near, far)
第一个参数是雾化效果或者颜色(0xffffff)，后面两个属性用来调节雾的显示，重什么地方开始到什么地方结束
2. scene.fog = new THREE.Fog(color, concentration)
第一个参数是雾化效果或者颜色(0xffffff)，第二个参数是雾的浓度(0.015)

**setClearColor，字体height就无效了范例:**
- [webgl_geometry_terrain_fog.html](examples/webgl_geometry_terrain_fog.html)

### 样条曲线(CatmullRomCurve3)与贝赛尔曲线的区别(CubicBezierCurve、QuadraticBezier)
贝塞尔曲线只会穿过首尾两个控制点而不过中间的控制点，在某些场合希望曲线穿过所有控制点的话可以使用catmull-rom spline（简称CR-Spline）
CR-Spline需要至少4个控制点，首尾两个控制点为辅助点，曲线不会穿过，其余控制点在t=[0,1]之间平滑地穿过，t=0时值等于第2个顶点，而t=1时值等于倒数第2个顶点
如果传入的控制点首尾相等形成闭合环，那么不用计算，直接取值p0=pN-1，pN=p1就会成为一条光滑的曲线了。

**范例:**
- [canvas_lines_dashed.html](examples/canvas_lines_dashed.html)

***

## 我的疑惑
### [CombinedCamera.js](examples/js/cameras/CombinedCamera.html)中的setLens函数和aspect为什么有关?
### [canvas_materials_reflection.js](examples/js/cameras/canvas_materials_reflection.html)中texture.mapping为什么只能用SphericalReflectionMapping，其它碎片噪音哪里来的?
### [canvas_geometry_shapes.html](examples/canvas_geometry_shapes.html)中WebGLRenderer中的sortElements和sortObjects是怎么用的?
### [canvas_lines_dashed.html](examples/canvas_lines_dashed.html)中geometry.computeLineDistances()有什么用？LineDashedMaterial材质不计算
### [canvas_geometry_text.html](examples/canvas_geometry_text.html)一旦删掉setClearColor，字体height就无效了

## 相关插件
| 插件 | 功能 |
| :--- | :--- |
| [three.js](build/three.js)														| JavaScript编写的WebGL第三方库，封装了大部分常用的3D显示功能 |
|||
| [Detector.js](examples/js/Detector.js)											| 检测支持(canvas，webgl，workers，fileApi) |
| [UVsDebug.js](examples/js/utils/UVsDebug.js)										| 通过给定的几何形状，在Canvas中画出其UV纹理贴图 |
|||
| [stats.min.js](examples/js/libs/stats.min.js) 									| 统计插件(FPS，渲染时间，chrome内存使用率，而且支持自定义) |
| [dat.gui.min.js](examples/js/libs/dat.gui.min.js)									| 参数控制器，可以向场景中添加控制条，随时调整参数 |
|||
| [CombinedCamera.js](examples/js/cameras/CombinedCamera.js)						| 可以在透视和正交相机上切换，默认为透视相机 |
| [Projector.js](examples/js/renderers/Projector.js)								| 将三维的场景投影到二维 |
| [CanvasRenderer.js](examples/js/renderers/CanvasRenderer.js)						| Canvas 2D Context API 进行渲染 |
| [SoftwareRenderer.js](examples/js/renderers/SoftwareRenderer.js)					| 不依赖GPU进行渲染 |
| [CSS3DRenderer.js](examples/js/renderers/CSS3DRenderer.js)						| 使用CSS3渲染3D的DOM元素 |
|||
| [OrbitControls.js](examples/js/controls/OrbitControls.js)							| 轨道控制，鼠标左键旋转(与鼠标方向相同，用于非触摸屏上)，右键平移，中键缩放；也可以使用键盘控制 |
| [TrackballControls.js](examples/js/controls/TrackballControls.js)					| 轨迹控制，鼠标左键旋转(与鼠标方向相反，用于触摸屏上)，右键平移，中键缩放；也可以使用键盘控制 |
| [DeviceOrientationControls.js](examples/js/controls/DeviceOrientationControls.js)	| 设备朝向控制，仅对移动设备有效。根据设备朝向调整被控制元素朝向 |
|||
| [AsciiEffect.js](examples/js/effects/AsciiEffect.js) 								| ASCII文本画渲染效果 |
|||
| [Bird.js](examples/obj/Bird.js) 													| 鸟的形状 |
| [hilbert2D.js](examples/js/geometries/hilbert2D.js)								| 希尔伯特2D曲线 |
## [View Examples](examples/index.html)

**相关博客推荐**
- [three.js 源码注释](http://blog.csdn.net/omni360/article/details/38842291)
- [three.js 实例讲解](http://www.cnblogs.com/amy2011/p/6358527.html)
- [WebGl 中文网](http://www.hewebgl.com/article/articledir/1)

**范例推荐**
- 办公室
https://hypnosnova.github.io/ThreeQuery/lab/office/office.html

**Note:** 如果GitHub的当前页没有index.html的话，GitHub会按设置好的模板加载README.md


