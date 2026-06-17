import {
	Vector3,
	MathUtils,
	RGBAFormat,
	FloatType,
	DataTexture,
	NearestFilter,
} from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';

// Get triangle area (half of parallelogram)
// http://mathworld.wolfram.com/TriangleArea.html

const triangleArea = (() => {
	var vector1 = new Vector3();
	var vector2 = new Vector3();

	return function (vectorA, vectorB, vectorC) {
		vector1.subVectors(vectorB, vectorA);
		vector2.subVectors(vectorC, vectorA);
		vector1.cross(vector2);

		return 0.5 * vector1.length();
	};
})();

const randomPointInTriangle = (() => {
	var vector = new Vector3();

	return function (vectorA, vectorB, vectorC) {
		var point = new Vector3();

		var a = Math.random();
		var b = Math.random();

		if (a + b > 1) {
			a = 1 - a;
			b = 1 - b;
		}

		var c = 1 - a - b;

		point.copy(vectorA);
		point.multiplyScalar(a);

		vector.copy(vectorB);
		vector.multiplyScalar(b);

		point.add(vector);

		vector.copy(vectorC);
		vector.multiplyScalar(c);

		point.add(vector);

		return point;
	};
})();

const randomPointsInBufferGeometry = (geometry, n) => {
	var i,
		vertices = geometry.attributes.position.array,
		totalArea = 0,
		cumulativeAreas = [],
		vA,
		vB,
		vC;

	// precompute face areas
	vA = new Vector3();
	vB = new Vector3();
	vC = new Vector3();

	// geometry._areas = [];
	var il = vertices.length / 9;

	for (i = 0; i < il; i++) {
		vA.set(vertices[i * 9 + 0], vertices[i * 9 + 1], vertices[i * 9 + 2]);
		vB.set(vertices[i * 9 + 3], vertices[i * 9 + 4], vertices[i * 9 + 5]);
		vC.set(vertices[i * 9 + 6], vertices[i * 9 + 7], vertices[i * 9 + 8]);

		totalArea += triangleArea(vA, vB, vC);

		cumulativeAreas.push(totalArea);
	}

	// binary search cumulative areas array

	function binarySearchIndices(value) {
		function binarySearch(start, end) {
			// return closest larger index
			// if exact number is not found

			if (end < start) return start;

			var mid = start + Math.floor((end - start) / 2);

			if (cumulativeAreas[mid] > value) {
				return binarySearch(start, mid - 1);
			} else if (cumulativeAreas[mid] < value) {
				return binarySearch(mid + 1, end);
			} else {
				return mid;
			}
		}

		var result = binarySearch(0, cumulativeAreas.length - 1);
		return result;
	}

	// pick random face weighted by face area

	var r,
		index,
		result = [];

	for (i = 0; i < n; i++) {
		r = Math.random() * totalArea;

		index = binarySearchIndices(r);

		// result[ i ] = THREE.GeometryUtils.randomPointInFace( faces[ index ], geometry, true );
		vA.set(
			vertices[index * 9 + 0],
			vertices[index * 9 + 1],
			vertices[index * 9 + 2]
		);
		vB.set(
			vertices[index * 9 + 3],
			vertices[index * 9 + 4],
			vertices[index * 9 + 5]
		);
		vC.set(
			vertices[index * 9 + 6],
			vertices[index * 9 + 7],
			vertices[index * 9 + 8]
		);
		result[i] = randomPointInTriangle(vA, vB, vC);
	}

	return result;
};

const getRandomData = () => {
	const u = Math.random();
  const v = Math.random();

  const theta = u * 2.0 * Math.PI;
  const phi = Math.acos(2.0 * v - 1.0);
  const r = Math.cbrt(Math.random());

  const sinTheta = Math.sin(theta);
  const cosTheta = Math.cos(theta);

  const sinPhi = Math.sin(phi);
  const cosPhi = Math.cos(phi);

  const vector = new Vector3();

  vector.x = r * sinPhi * cosTheta;
  vector.y = r * sinPhi * sinTheta;
  vector.z = r * cosPhi;

  return vector;
};

const getTextTexture = (text) => {
	const width = 512;
	const height = 512;
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d', { willReadFrequently: true });

	ctx.fillStyle = '#000000';
	ctx.fillRect(0, 0, width, height);

	ctx.fillStyle = '#ffffff';
	ctx.font = 'bold 350px "Microsoft YaHei", sans-serif';
	ctx.textAlign = 'center';
	ctx.textBaseline = 'middle';
	ctx.fillText(text, width / 2, height / 2);

	const imgData = ctx.getImageData(0, 0, width, height).data;
	const validPixels = [];

	for (let i = 0; i < width * height; i++) {
		if (imgData[i * 4] > 128) {
			const x = i % width;
			const y = Math.floor(i / width);
			validPixels.push({ x, y });
		}
	}

	const data = new Float32Array(256 * 256 * 4);
	const numValid = validPixels.length;

	for (let i = 0; i < 256 * 256; i++) {
		let p;
		if (numValid > 0) {
			p = validPixels[Math.floor(Math.random() * numValid)];
		} else {
			p = { x: width / 2, y: height / 2 };
		}
		
		// Distribute randomly within the pixel to make it look smooth and continuous
		const px = p.x + (Math.random() - 0.5);
		const py = p.y + (Math.random() - 0.5);

		// Adjust scaling
		const mappedX = (px / width) * 2.5 - 1.25;
		const mappedY = -((py / height) * 2.5 - 1.25);
		
		const mappedZ = (Math.random() - 0.5) * 0.2;

		const idx = i * 4;
		data[idx] = mappedX;
		data[idx + 1] = mappedY;
		data[idx + 2] = mappedZ;
		data[idx + 3] = 1.0;
	}

	const texture = new DataTexture(data, 256, 256, RGBAFormat, FloatType);
	texture.minFilter = NearestFilter;
	texture.magFilter = NearestFilter;
	texture.needsUpdate = true;

	return texture;
};

const getRandomTexture = () => {
	const data = new Float32Array(256 * 256 * 4);

	for (let i = 0; i < data.length; i += 4) {
		const point = getRandomData();
		data[i] = point.x;
		data[i + 1] = point.y;
		data[i + 2] = point.z;
		data[i + 3] = 1.0;
	}

	const texture = new DataTexture(
		data,
		256,
		256,
		RGBAFormat,
		FloatType
	);

	texture.needsUpdate = true;

	return texture;
}
export { getTextTexture, getRandomTexture };