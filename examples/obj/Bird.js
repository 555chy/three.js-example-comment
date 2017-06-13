var Bird = function () {

	var scope = this;
	
	//使用Geometry对象代替this对象，实现继承
	THREE.Geometry.call( this );

	//顶点，参数是坐标
	v(   5,   0,   0 );
	v( - 5, - 2,   1 );
	v( - 5,   0,   0 );
	v( - 5, - 2, - 1 );

	v(   0,   2, - 6 );
	v(   0,   2,   6 );
	v(   2,   0,   0 );
	v( - 3,   0,   0 );

	//面，参数是顶点的序号
	f3( 0, 2, 1 );
	// f3( 0, 3, 2 );

	f3( 4, 7, 6 );
	f3( 5, 6, 7 );

	//计算面的法向量，geometry.faces[n].normal
	this.computeFaceNormals();

	function v( x, y, z ) {
		scope.vertices.push( new THREE.Vector3( x, y, z ) );
	}

	function f3( a, b, c ) {
		scope.faces.push( new THREE.Face3( a, b, c ) );
	}

}
//使用Object.create实现类式继承，参数是新创建的对象的原型
Bird.prototype = Object.create( THREE.Geometry.prototype );
//每一个函数的Prototype属性指向的对象都包含唯一一个不可枚举属性constructor,该属性的值是这么一个对象：它指向了它所在的构造函数。
Bird.prototype.constructor = Bird;
