
// 图的生成
class graph {
	constructor() {
		this.vertices = [];
		this.adjList = new map;
	}

	// 添加顶点
	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push(v);
			this.adjList.set(v, []);
			return true;
		} else {
			return false;
		}
	}

	// 添加边
	addEdge(v, w) {
		if (!this.adjList.get(v)) {
			this.addVertex(v);
		}
		if (!this.adjList.get(w)) {
			this.addVertex(w);
		}
		this.adjList.get(v).push(w);
		this.adjList.get(w).push(v);
	}

	// 初始化顶点颜色
	initializeColor() {
		var color = [];
		for (let i = 0; i < this.vertices.length; i++) {
			color[this.vertices[i]] = 'w';
		}
		return color;
	}

	printNode(value) {
		console.log(`Visited vertex:${value}`);
	}

	// 广度优先遍历
	bfs(v, callback) {
		var color = this.initializeColor();
		let q = new queue;
		q.enqueue(v);

		while (!q.isEmpty()) {
			var u = q.dequeue(),
				neighbors = this.adjList.get(u);

			color[u] = 'g';
			for (let i = 0; i < neighbors.length; i++) {
				var w = neighbors[i];
				if (color[w] === 'w') {
					color[w] = 'g'
					q.enqueue(w);
				}
			}
			color[u] = 'b';

			if (callback) {
				callback(u);
			}
		}
	}

	// 改进广度优先遍历，寻找最短路径
	BFS(v) {
		let color = this.initializeColor(),
			q = new queue,  
			d = {},       // v到w的距离
			pred = {};    // 前溯点，用于计算最短路径

		q.enqueue(v);
		for (let i = 0; i < this.vertices.length; i++) {
			d[this.vertices[i]] = 0;
			pred[this.vertices[i]] = null;
		}

		while (!q.isEmpty()) {
			var u = q.dequeue(),
				neighbors = this.adjList.get(u);
			color[u] = 'g';
			for (let i = 0; i < neighbors.length; i++) {
				var x = neighbors[i];
				if (color[x] === 'w') {
					color[x] = 'g';
					d[x] = d[u] + 1;
					pred[x] = u;
					q.enqueue[x];
				}
			}
			color[u] = 'b';
		}
		return {
			distances: d,
			predecessors: pred
		};
	}

	// 深度优先遍历
	dfs(callback) {
		var color = this.initializeColor();
		for (var i = 0; i < this.vertices.length; i++) {
			if (color[this.vertices[i]] === 'w') {
				this.dfsVisit(this.vertices[i], color, callback);
			}
		}
	}

	dfsVisit(u, color, callback) {
		color[u] = 'g';
		if (callback) {
			callback(u);
		}
		var neighbors = this.adjList.get(u);
		for (var i = 0; i < neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'w') {
				this.dfsVisit(w, color, callback);
			}
		}
		color[u] = 'b';
	}

	// 改进深度优先遍历
	DFS() {
		var color = this.initializeColor(),
			d = {},
			f = {},
			p = {},
			time = 0;

		for (let i = 0; i < this.vertices.length; i++) {
			f[vertices[i]] = 0;
			d[vertices[i]] = 0;
			p[vertices[i]] = null;
		}

		for (let i = 0; i < this.vertices.length; i++) {
			if (color[vertices[i]] === 'w') {
				this.DFSVisit(this.vertices[i], color, d, f, p);
			}
		}

		return {
			discovery: d,
			finished: f,
			predecessors: p
		};
	}
	DFSVisit(u, color, d, f, p) {
		console.log(`discovered${u}`);
		color[u] = 'g'
		d[u] = ++time;
		var neighbors = this.adjList.get(u);
		for (let i = 0; i < neighbors.length; i++) {
			var w = neighbors[i];
			if (color[w] === 'w') {
				p[w] = u;
				DFSVisit(w, color, d, f, p);
			}
		}
		d[u] = 'b';
		f[u] = ++time;
		console.log(`explored${u}`);
	}

	toString() {
		let s = '';
		for (let i = 0; i < this.vertices.length; i++) {
			s += `${this.vertices[i]} -> `;
			let neighbors = this.adjList.get(this.vertices[i]);
			for (let j = 0; j < neighbors.length; j++) {
				s += `${neighbors[j]} `;
			}
			s += '\n';
		}

		return s;
	}
}
var g1 = new graph;
var vertices = ['A','B','C','D','E','F','G','H','I'];
for (let i = 0; i < vertices.length; i++) {
	g1.addVertex(vertices[i]);
}
g1.addEdge('A', 'B'); 
g1.addEdge('A', 'C'); 
g1.addEdge('A', 'D');
g1.addEdge('C', 'D');
g1.addEdge('C', 'G');
g1.addEdge('D', 'G');
g1.addEdge('D', 'H');
g1.addEdge('B', 'E');
g1.addEdge('B', 'F');
g1.addEdge('E', 'I');
//console.log(g1.adjList.values());

g1.bfs(g1.vertices[0], g1.printNode);
var shortestPath = g1.BFS(g1.vertices[0]);
console.log(shortestPath);

g1.dfs(g1.printNode);





















