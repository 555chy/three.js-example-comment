/**
 *	@author zz85 / http://twitter.com/blurspline / http://www.lab4games.net/zz85/blog
 *
 *	A general perpose camera, for setting FOV, Lens Focal Length,
 *		and switching between perspective and orthographic views easily.
 *		Use this only if you do not wish to manage
 *		both a Orthographic and Perspective Camera
 *
 *	一个通用的相机，设置视场(Forward Observer Vehicle)，透镜焦距，
 *		并且可以在透视和正交视图中很容易的切换。
 *		只要你不愿意手动管理正交和透视相机，你就可以使用它
 */

//之所以要传递不同的near和far是因为: 透视相机的near必须在相机位置前，而正交相机的near也可以在相机之后
THREE.CombinedCamera = function ( width, height, fov, near, far, orthoNear, orthoFar ) {

	/*
	call: 调用一个对象的一个方法，以另一个对象替换当前对象
	A.call(B)，简单的说就是"B继承了A的所有变量与方法"
	*/
	THREE.Camera.call( this );

	this.fov = fov;

	this.left = - width / 2;
	this.right = width / 2;
	this.top = height / 2;
	this.bottom = - height / 2;

	// We could also handle the projectionMatrix internally, but just wanted to test nested camera objects
	// 你也可以在内部修改该投影矩阵，但只是想测试嵌入相机对象。

	this.cameraO = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 	orthoNear, orthoFar );
	this.cameraP = new THREE.PerspectiveCamera( fov, width / height, near, far );

	this.zoom = 1;

	this.toPerspective();

};

/*
var a = new Object();  				// 创建一个对象，没有父类
var b = Object.create(a.prototype);	// b继承了a的原型
*/
THREE.CombinedCamera.prototype = Object.create( THREE.Camera.prototype );
//下面这句注释掉也不会影响
//THREE.CombinedCamera.prototype.constructor = THREE.CombinedCamera;

THREE.CombinedCamera.prototype.toPerspective = function () {

	// Switches to the Perspective Camera
	// 切换为透视相机

	this.near = this.cameraP.near;
	this.far = this.cameraP.far;

	this.cameraP.fov =  this.fov / this.zoom ;

	//更新透视相机投影矩阵
	this.cameraP.updateProjectionMatrix();

	this.projectionMatrix = this.cameraP.projectionMatrix;

	this.inPerspectiveMode = true;
	this.inOrthographicMode = false;

};

THREE.CombinedCamera.prototype.toOrthographic = function () {

	// Switches to the Orthographic camera estimating viewport from Perspective
	// 切换为正交相机，从投影中估算视口
	
	var fov = this.fov;
	var aspect = this.cameraP.aspect;
	var near = this.cameraP.near;
	var far = this.cameraP.far;

	// The size that we set is the mid plane of the viewing frustum
	// 我们设置的大小是视图锥截体的中心平面

	var hyperfocus = ( near + far ) / 2;

	var halfHeight = Math.tan( fov * Math.PI / 180 / 2 ) * hyperfocus;
	var halfWidth = halfHeight * aspect;

	halfHeight /= this.zoom;
	halfWidth /= this.zoom;

	this.cameraO.left = - halfWidth;
	this.cameraO.right = halfWidth;
	this.cameraO.top = halfHeight;
	this.cameraO.bottom = - halfHeight;

	// this.cameraO.left = -farHalfWidth;
	// this.cameraO.right = farHalfWidth;
	// this.cameraO.top = farHalfHeight;
	// this.cameraO.bottom = -farHalfHeight;

	// this.cameraO.left = this.left / this.zoom;
	// this.cameraO.right = this.right / this.zoom;
	// this.cameraO.top = this.top / this.zoom;
	// this.cameraO.bottom = this.bottom / this.zoom;

	this.cameraO.updateProjectionMatrix();

	this.near = this.cameraO.near;
	this.far = this.cameraO.far;
	this.projectionMatrix = this.cameraO.projectionMatrix;

	this.inPerspectiveMode = false;
	this.inOrthographicMode = true;

};


THREE.CombinedCamera.prototype.setSize = function( width, height ) {

	this.cameraP.aspect = width / height;
	this.left = - width / 2;
	this.right = width / 2;
	this.top = height / 2;
	this.bottom = - height / 2;

};

//视场(Field of View)
THREE.CombinedCamera.prototype.setFov = function( fov ) {

	this.fov = fov;

	if ( this.inPerspectiveMode ) {

		this.toPerspective();

	} else {

		this.toOrthographic();

	}

};

// For maintaining similar API with PerspectiveCamera
// 保持与透视相机相似的API

THREE.CombinedCamera.prototype.updateProjectionMatrix = function() {

	if ( this.inPerspectiveMode ) {

		this.toPerspective();

	} else {
		//由于正交相机的参数均是由透视相机换算过来的，因此这里要先转为透视相机进行计算
		this.toPerspective();
		this.toOrthographic();

	}

};

/*
* Uses Focal Length (in mm) to estimate and set FOV
* 35mm (full frame) camera is used if frame size is not specified;
* Formula based on http://www.bobatkins.com/photography/technical/field_of_view.html
*
* 使用焦距(以毫米为单位)来估算和设置视场(Field of View)
* 如果帧大小没有被指定，默认会采用35毫米(完整帧)的相机;
* 公式基于 http://www.bobatkins.com/photography/technical/field_of_view.html
*/
THREE.CombinedCamera.prototype.setLens = function ( focalLength, filmGauge ) {
	//filmGauge: 薄膜尺寸
	if ( filmGauge === undefined ) filmGauge = 35;

	//Extent(程度)Slope(斜面)
	var vExtentSlope = 0.5 * filmGauge / ( focalLength * Math.max( this.cameraP.aspect, 1 ) );

	//THREE.Math.RAD2DEG: 从弧度转换为角度
	var fov = THREE.Math.RAD2DEG * 2 * Math.atan( vExtentSlope );

	this.setFov( fov );

	return fov;

};


THREE.CombinedCamera.prototype.setZoom = function( zoom ) {

	this.zoom = zoom;

	if ( this.inPerspectiveMode ) {

		this.toPerspective();

	} else {

		this.toOrthographic();

	}

};

THREE.CombinedCamera.prototype.toFrontView = function() {

	this.rotation.x = 0;
	this.rotation.y = 0;
	this.rotation.z = 0;

	// should we be modifing the matrix instead?

};

THREE.CombinedCamera.prototype.toBackView = function() {

	this.rotation.x = 0;
	this.rotation.y = Math.PI;
	this.rotation.z = 0;

};

THREE.CombinedCamera.prototype.toLeftView = function() {

	this.rotation.x = 0;
	this.rotation.y = - Math.PI / 2;
	this.rotation.z = 0;

};

THREE.CombinedCamera.prototype.toRightView = function() {

	this.rotation.x = 0;
	this.rotation.y = Math.PI / 2;
	this.rotation.z = 0;

};

THREE.CombinedCamera.prototype.toTopView = function() {

	this.rotation.x = - Math.PI / 2;
	this.rotation.y = 0;
	this.rotation.z = 0;

};

THREE.CombinedCamera.prototype.toBottomView = function() {

	this.rotation.x = Math.PI / 2;
	this.rotation.y = 0;
	this.rotation.z = 0;

};
