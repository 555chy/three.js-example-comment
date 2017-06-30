/**
 * Hilbert Curve: Generates 2D-Coordinates in a very fast way.
 * 希尔伯特曲线
 *
 * @author Dylan Grafmyre
 *
 * Based on work by:
 * @author Thomas Diewald
 * @link http://www.openprocessing.org/sketch/15493
 *
 * @param center     Center of Hilbert curve.
 * @param size       Total width of Hilbert curve.
 * @param iterations Number of subdivisions.
			curve's count -> 4 ^ iterations 个首尾相连的凹线
 * @param v0         Corner index -X, -Z. 从第二象限，以逆时针方向定义各点索引
 * @param v1         Corner index -X, +Z.
 * @param v2         Corner index +X, +Z.
 * @param v3         Corner index +X, -Z.
 */
function hilbert2D ( center, size, iterations, v0, v1, v2, v3 ) {

	// Default Vars
	var center     = undefined !== center ? center : new THREE.Vector3( 0, 0, 0 ),
		size       = undefined !== size ? size : 10,
		half       = size / 2,
		iterations = undefined !== iterations ? iterations : 1,
		v0 = undefined !== v0 ? v0 : 0,
		v1 = undefined !== v1 ? v1 : 1,
		v2 = undefined !== v2 ? v2 : 2,
		v3 = undefined !== v3 ? v3 : 3
	;

	var vec_s = [
		new THREE.Vector3( center.x - half, center.y, center.z - half ),
		new THREE.Vector3( center.x - half, center.y, center.z + half ),
		new THREE.Vector3( center.x + half, center.y, center.z + half ),
		new THREE.Vector3( center.x + half, center.y, center.z - half )
	];

	var vec = [
		vec_s[ v0 ],
		vec_s[ v1 ],
		vec_s[ v2 ],
		vec_s[ v3 ]
	];

	// Recurse iterations, 递归迭代
	if ( 0 <= -- iterations ) {
		var tmp = [];
		/*
		1. Function.apply(obj,args)方法接收两个参数
		obj：这个对象将代替Function类里this对象
		args：这个是数组，它将作为参数传给Function（args-->arguments）

		2. Function.call(obj,[param1[,param2[,…[,paramN]]]])
		obj：这个对象将代替Function类里this对象
		params：这个是一个参数列表

		apply方法能劫持另外一个对象的方法，继承另外一个对象的属性。而call和apply的作用是一样的，只不过是一个传的是数组一个传的是参数列表不一样。

		在这里Array.prototype.push.apply(a, b)的作用是连接数组，相当于a.concat(b)。
		由于concat不用像apply一样去改变数组上下文，所以效率更高
		
		这里希尔伯特2D曲线依次是：左凹、下凹、下凹、右凹
		*/
		Array.prototype.push.apply( tmp, hilbert2D ( vec[ 0 ], half, iterations, v0, v3, v2, v1 ) );
		Array.prototype.push.apply( tmp, hilbert2D ( vec[ 1 ], half, iterations, v0, v1, v2, v3 ) );
		Array.prototype.push.apply( tmp, hilbert2D ( vec[ 2 ], half, iterations, v0, v1, v2, v3 ) );
		Array.prototype.push.apply( tmp, hilbert2D ( vec[ 3 ], half, iterations, v2, v1, v0, v3 ) );

		// Return recursive call
		return tmp;
	}

	// Return complete Hilbert Curve.
	return vec;
}
