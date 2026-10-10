import { i as __toESM } from "../_runtime.mjs";
import { a as require_jsx_runtime, n as Canvas, o as require_react, t as OrbitControls } from "../_libs/@react-three/drei+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Scene3D-Da54OWZm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Building({ position, size, windows }) {
	const panes = (0, import_react.useMemo)(() => {
		const list = [];
		const cols = Math.max(3, Math.round(size[0] * 1.4));
		const rows = Math.max(2, Math.round(size[1] * 1.1));
		const startX = -size[0] / 2 + .45;
		const startY = -size[1] / 2 + .55;
		const stepX = (size[0] - .9) / Math.max(1, cols - 1);
		const stepY = (size[1] - .9) / Math.max(1, rows - 1);
		for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
			if ((r + c) % 5 === 0) continue;
			list.push([
				startX + c * stepX,
				startY + r * stepY,
				size[2] / 2 + .02
			]);
		}
		return list.slice(0, windows);
	}, [size, windows]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: size }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#e6dccb",
				roughness: .62,
				metalness: .04
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: [
					0,
					size[1] / 2 + .08,
					0
				],
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					size[0] + .12,
					.16,
					size[2] + .12
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: "#d7cbb6",
					roughness: .55
				})]
			}),
			panes.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
				position: p,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("boxGeometry", { args: [
					.28,
					.38,
					.04
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
					color: i % 3 === 0 ? "#2a221c" : "#3d4a55",
					emissive: i % 4 === 0 ? "#c9a66b" : "#000000",
					emissiveIntensity: i % 4 === 0 ? .35 : 0,
					roughness: .3
				})]
			}, i))
		]
	});
}
function Tree({ position }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("group", {
		position,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.35,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("cylinderGeometry", { args: [
				.06,
				.08,
				.7,
				6
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#4a3728",
				roughness: .9
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			position: [
				0,
				.95,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dodecahedronGeometry", { args: [.42, 0] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#5c6b46",
				roughness: .8
			})]
		})]
	});
}
function Water() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
		rotation: [
			-Math.PI / 2,
			0,
			0
		],
		position: [
			.2,
			.04,
			.4
		],
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circleGeometry", { args: [1.35, 32] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
			color: "#3a6670",
			metalness: .72,
			roughness: .12,
			envMapIntensity: 1.2
		})]
	});
}
function Courtyard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("color", {
			attach: "background",
			args: ["#1a1612"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("fog", {
			attach: "fog",
			args: [
				"#1a1612",
				12,
				28
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hemisphereLight", { args: [
			"#f0e6d2",
			"#2a241c",
			.85
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("directionalLight", {
			position: [
				6,
				10,
				4
			],
			intensity: 1.7,
			color: "#fff1d6"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pointLight", {
			position: [
				-2,
				2.2,
				1
			],
			intensity: .55,
			color: "#c45a4a"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [28, 28] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#cfc3ae",
				roughness: .95
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				0,
				.01,
				0
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [10, 10] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#d9d0bf",
				roughness: .85
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("mesh", {
			rotation: [
				-Math.PI / 2,
				0,
				0
			],
			position: [
				-1.6,
				.03,
				-.8
			],
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("planeGeometry", { args: [2.4, 1.6] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meshStandardMaterial", {
				color: "#5d6a45",
				roughness: .9
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Water, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
			position: [
				-4.2,
				1.7,
				-1.1
			],
			size: [
				3.4,
				3.4,
				2.2
			],
			windows: 18
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
			position: [
				4.1,
				1.35,
				-.4
			],
			size: [
				2.6,
				2.7,
				2
			],
			windows: 12
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building, {
			position: [
				.2,
				1.1,
				-4.2
			],
			size: [
				6.4,
				2.2,
				2.1
			],
			windows: 16
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-1.5,
			0,
			1.6
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			1.8,
			0,
			1.1
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			-2.4,
			0,
			-1.8
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			2.6,
			0,
			-2.2
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tree, { position: [
			.8,
			0,
			2.4
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrbitControls, {
			enablePan: false,
			minDistance: 6,
			maxDistance: 14,
			minPolarAngle: .7,
			maxPolarAngle: 1.25,
			autoRotate: true,
			autoRotateSpeed: .45,
			target: [
				0,
				.6,
				0
			]
		})
	] });
}
function Scene3D() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Canvas, {
		dpr: [1, 1.6],
		camera: {
			position: [
				7.4,
				4.6,
				8.2
			],
			fov: 38
		},
		gl: {
			antialias: true,
			alpha: false
		},
		className: "h-full w-full touch-none",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Courtyard, {})
	});
}
//#endregion
export { Scene3D as default };
