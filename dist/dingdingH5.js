(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ddH5"] = factory();
	else
		root["ddH5"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdateddH5"];
/******/ 	window["webpackHotUpdateddH5"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "14edc20d33a20ace9d7f";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/index.js")(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/clusterize.js":
/*!**************************************!*\
  !*** ./src/components/clusterize.js ***!
  \**************************************/
/*! exports provided: clusterize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterize", function() { return clusterize; });
const clusterize = function({content_elem,scroll_elem,data,clusterize_scroll}){
    // 基本信息
    this.options = {
        content_elem : document.getElementById(content_elem),
        scroll_elem : document.getElementById(scroll_elem),
        item_height : 0,
        top_height : 0,
        bottom_height : 0,
        _html : '',
        density : 20,
        clusterize_scroll:clusterize_scroll?clusterize_scroll:400,
        start : null,
        end : null,
    };
    // 闭包参数
    var self = this.options,
        cache = [],
        show_no_data_row=[],
        _change = 0

    /**
     * 通过控制<tbody>的头尾<tr>的高度来达到虚拟渲染
     * 灵感来自https://clusterize.js.org/
     * **/
    // 渲染dom函数
    this.render = function(show_no_data_row,cache,i){
        self._html = ''
        // firstChild 第一个tr的高度
        self.top_height = self.item_height * cache.length

        // lastChild 最后一个tr的高度
        self.bottom_height = self.item_height * (data.length-cache.length-show_no_data_row.length)

        // 中间的html内容
        for(var i=0;i<show_no_data_row.length;i++){
            self._html += show_no_data_row[i]
        }
        self.content_elem.innerHTML = self._html
        self.content_elem.firstChild.style.height = self.top_height+'px'
        self.content_elem.lastChild.style.height = self.bottom_height+'px'
    }

    //页面生命周期 - 加载阶段
    document.addEventListener('DOMContentLoaded', function(){
        // 在DOMContentLoaded阶段先获得item高度，以备后续计算密度
        self.content_elem.innerHTML = aRows1[0]
        self.item_height = self.content_elem.querySelector('td').offsetHeight
        // 计算密度
        self.density = parseInt(self.clusterize_scroll/(self.item_height-2))
        self.top_height = 0
        self.bottom_height = self.item_height * (data.length-self.density*2)
        self.start = `<tr style="height:${self.top_height}px"></tr>`
        self.end = `<tr style="height:${self.bottom_height}px"></tr>`

    })

    // 加载完成
    window.onload = function(){
        this.render(data.slice(0,self.density*2),cache,0)
    }.bind(this)

    // 监听滚动事件
    self.scroll_elem.addEventListener('scroll', function(event){
        var len = self.density;
        var i = parseInt(event.srcElement.scrollTop/self.item_height/len)
        // 滚动高度/（块高度*密度）取整 - 用于判断滚动到一半时启动渲染
        if(_change!==i){
            _change = i
            cache = data.slice(0,len*i)
            show_no_data_row = data.slice(len*i,len*(i+2))
            this.render(show_no_data_row,cache,i)
        }
    }.bind(this))
}

/***/ }),

/***/ "./src/components/flatlist.js":
/*!************************************!*\
  !*** ./src/components/flatlist.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FlatList; });
class FlatList {
    constructor(param){
        this.state = {
            ref:document.querySelector(param.ref),
            data:typeof param.data === 'function'? param.data():param.data,
            renderItem:param.renderItem,
        }

        this.render()
    }

    render(){
        var _html = '',state = this.state
        state.data.forEach(function(item,index){
            _html+=state.renderItem(item,index)
        })
        state.ref.innerHTML = _html
    }
}

/***/ }),

/***/ "./src/components/page.js":
/*!********************************!*\
  !*** ./src/components/page.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Page; });
class Page {
    constructor(param){
        this.options = {
            el : param.el,
            DOMContentLoaded : param.willMount,
            onload : param.didMount
        }
        this.bindEvent()
    }

    bindEvent(){
        var opt = this.options
        document.addEventListener('DOMContentLoaded', opt.DOMContentLoaded)
        window.onload = opt.onload
    }
}

/***/ }),

/***/ "./src/components/scroll.js":
/*!**********************************!*\
  !*** ./src/components/scroll.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
class Scroll {
    constructor(param){
        this.options = {
            content_elems : param.content_elems,
            scroll_elem : param.scroll_elem,
            whenVisible : param.whenVisible,
            whenState : true,
            scrollToTop : param.scrollToTop,
            scrollToBottom : param.scrollToBottom,
            offset:param.offset?param.offset:[0,0,0,0]
        };
        this.state = {
            topState:FSM.off,
            bottomState:FSM.off
        };

        this.bindEvent();
        this.init()
    }

    // 指定content_elems_item滚动到可视区域时
    isVisible(event,content_elems_item){
        //element坐标
        let coords = content_elems_item.getBoundingClientRect();
        //当前窗口高度
        let windowHeight = Math.min(this.options.scroll_elem.clientHeight,document.documentElement.clientHeight);
        //判断element是否在当前窗口的可视区域
        let topVisible = coords.top > 0 && coords.top < windowHeight;
        let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

        if(Boolean(topVisible || bottomVisible) && this.options.whenVisible){
            return this.options.whenVisible(event,content_elems_item)
        }
    }

    getScrollTop() {
        return Math.max(document.body.scrollTop,document.documentElement.scrollTop,this.options.scroll_elem.scrollTop)
    }

    getScrollHeight(){
        return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,this.options.scroll_elem.scrollHeight)
    }

    getWindowHeight(){
        return document.compatMode === "CSS1Compat"?document.documentElement.clientHeight:document.body.clientHeight;
    }


    // 派发滚动事件
    dispatchEvent(type,event){
        // console.log('getScrollTop',this.getScrollTop())
        // console.log('getScrollHeight',this.getScrollHeight())
        // console.log('getWindowHeight',this.getWindowHeight())
        // console.log(this.options.scroll_elem.clientHeight)
        /**
         * @param type
         *
         * 判断当前监听的滚动element是指定el
         * 还是window即document.body
         *
         *
         * @model FSM
         *
         * state & FSM 状态模式
         * finite-state machine 有限状态机缩写
         * 摘自 曾探.JavaScript设计模式与开发实践[M] p.224
         *
         *
         * @warn 未完成
         * webapp模式下无法监听到`滚动到底部`事件
         * **/
        let isOnTop = this.getScrollTop()<=0+this.options.offset[0],
            isOnBottom = this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - this.options.offset[2];

        if(this.options.scrollToBottom&&type === 'el') {
            this.state.bottomState.bottomWasArrivaled.call(this,isOnBottom)
        }else if(this.options.scrollToBottom&&type === 'window'){
            this.state.bottomState.bottomWasArrivaled.call(this,isOnBottom)
        }

        this.options.scrollToTop&&this.state.topState.topWasArrivaled.call(this,isOnTop);

        this.init()
    }

    // 绑定事件
    bindEvent(){
        if(this.options.scroll_elem.scrollHeight>this.options.scroll_elem.clientHeight){
            this.options.scroll_elem.addEventListener('scroll', this.dispatchEvent.bind(this,'el'))
        }else {
            window.addEventListener('scroll', this.dispatchEvent.bind(this,'window'))
        }
    }

    // 初始化
    init(){
        !!this.options.content_elems&&this.options.content_elems.forEach(function(item){
            this.isVisible(event,item)
        }.bind(this))
    }
}

let FSM = {
    off: {
        topWasArrivaled: function(isOnTop) {
            if(!isOnTop){
                this.state.topState = FSM.on;
            }
        },
        bottomWasArrivaled: function(isOnBottom) {
            if(!isOnBottom){
                this.state.bottomState = FSM.on;
            }
        }
    },
    on: {
        topWasArrivaled: function(isOnTop) {
            if(isOnTop){
                this.state.topState = FSM.off;
                return this.options.scrollToTop(event);
            }

        },
        bottomWasArrivaled: function(isOnBottom) {
            if(isOnBottom){
                this.state.bottomState = FSM.off;
                return this.options.scrollToBottom(event);
            }
        }
    }
};

/**
 * @native 其他原生功能 - 暂不封装
 *
 * 滚动到指定位置
 * [window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
 * **/

/***/ }),

/***/ "./src/components/swiper.js":
/*!**********************************!*\
  !*** ./src/components/swiper.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Swiper; });
/* harmony import */ var _touch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./touch */ "./src/components/touch.js");


class Swiper{
    constructor(el,obj){
        this.options = {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            _index: 0,
            last: 0,
            el: document.querySelector(el),
            slides: document.querySelector(el).querySelectorAll('.swiper-slide')
        }

        this.bindEvent()
        this.swiperActive()
    }

    /**
     * 判断移动的方向,结果是Left, Right, Up, Down中的一个
     * @param  {} x1 起点的横坐标
     * @param  {} x2 终点的横坐标
     * @param  {} y1 起点的纵坐标
     * @param  {} y2 终点的纵坐标
     *
     * 这里直接使用touch类的horizontalDirection
     */
    swiperDirection({x1,x2,y1,y2}){
        return x1 - x2 > 0 ? 'Left' : x1 - x2 < 0? 'Right' : false
        // return Math.abs(x1-x2) >=
        //         Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }

    /**
     * 首先，判断触摸时间
     * 1。短按 - 间隔时间300ms
     *    这种情况直接判断滑动方向进行滚动
     *
     * 2。长按 - 间隔时间大于300ms
     *    这种情况就需要判断滑动了多少距离 - 可自定义
     *    一般为超过第二张的一半时滑动
     *
     * **/
    TapTime(){
        let endTime = performance.now()
        return endTime - this.options.last
    }

    /**
     *  其次，滑动动画的原理
     *  1。坐标
     *     利用webkitTransform: translate3d(change, 0px, 0px)相对定位
     *
     *  2。动画时间
     *     transfrom-duration: 0ms - 300ms
     *     触发滚动事件时设置事件为300ms，结束后设置回原来的0ms
     * **/
    swiperRender(i){
        if(this.swiperDirection(this.options)=='Left'&&i<this.options.slides.length-1) {
            this.options.slides[i].classList.remove('swiper-slide-active')
            this.options.slides[i + 1].classList.add('swiper-slide-active')
            this.options._index += 1
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth * (i + 1)}px, 0px, 0px)`
        }else if(this.swiperDirection(this.options)=='Right'&&i>=1){
            this.options.slides[i].classList.remove('swiper-slide-active')
            this.options.slides[i - 1].classList.add('swiper-slide-active')
            this.options._index-=1
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*(i-1)}px, 0px, 0px)`
        }else {
            this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
        }
    }

    swiperActive(){
        if(!this.options.el.querySelector('.swiper-slide-active')){
            this.options.slides[0].classList.add('swiper-slide-active')
        }
        for(let i=0;i<this.options.slides.length;i++){
            if(this.options.slides[i].classList.contains('swiper-slide-active')){
                this.options._index = i
                this.options.el.style.transitionDuration = '0ms'
                this.options.el.style.webkitTransform = `translate3d(-${this.options.el.offsetWidth*i}px, 0px, 0px)`
            }
        }
    }

    bindEvent(){
        let opt = this.options;
        new _touch__WEBPACK_IMPORTED_MODULE_0__["default"]({
            el:opt.el,
            touchStart: function(e){
                let coords = e.changedTouches.item(0)
                opt.x1 = coords.pageX
                opt.y1 = coords.pageY
                opt.el.style.transitionDuration = '0ms'
                opt.last = performance.now()
            },
            touchMove: function(e){
                opt.el.style.webkitTransform = `translate3d(${
                e.changedTouches.item(0).pageX
                -opt.x1    // 位移距离
                -opt.el.offsetWidth    // el宽度
                *opt._index            // 当前屏幕显示的slide所在的索引
                    }px, 0px, 0px)`
            },
            touchEnd: function(e){
                let coords = e.changedTouches.item(0)
                opt.x2 = coords.pageX
                opt.y2 = coords.pageY
                opt.el.style.transitionDuration = '300ms'
                opt.el.style.webkitTransform = `translate3d(-${opt.el.offsetWidth*opt._index}px, 0px, 0px)`
                if(Math.abs(opt.x2 - opt.x1) > opt.el.offsetWidth/2 || this.TapTime()<300){
                    this.swiperRender(opt._index)
                }
            }.bind(this),
        })
    }
}

/**
 * 其他：classList
 *
 * @prop  length    表示元素类名的个数
 * @prop  item(0)   支持一个参数，为类名的索引，返回对应的类名。超出索引返回null
 * @prop  add()     添加一个类名，如果存在则添加忽略.也可以添加多个类add('a','b')
 * @prop  remove()  移除一个类名
 * @prop  toggle()  支持一个类名字字符串，无则加勉，有则移除之意。
 *                  部分现代浏览器支持第2个参数，.toggle(token, switch) switch为boolean,true表示添加，false表示移除。返回boolean值
 * @prop  contains()支持一个类名字字符串，表示是否包含该类名
 *
 * 参考： [HTML5 DOM元素类名相关操作API classList简介 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2013/07/domtokenlist-html5-dom-classlist-类名/)
 *
 * **/


/***/ }),

/***/ "./src/components/touch.js":
/*!*********************************!*\
  !*** ./src/components/touch.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll */ "./src/components/scroll.js");

class Touch {
    constructor(param){
        this.options = {
            el : document.querySelector(param.el),
            touchStart : param.touchStart,
            touchMove : param.touchMove,
            touchEnd : param.touchEnd
        }
        this.state = {
            x1:0,
            x2:0,
            y1:0,
            y2:0
        }
        this.bindEvent()
    }

    // Direction
    horizontalDirection({x1, x2}){
        return x1 - x2 > 0 ? 'Left' : x1 - x2 < 0 ? 'Right' : false
    }

    verticalDirection({y1, y2}) {
        return y1 - y2 > 0 ? 'Up' : y1 - y2 < 0 ? 'Down' : false
    }

    direction({x1, x2, y1, y2}) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ?
            (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down')
    }

    onTouchStart(e){
        let coords = e.changedTouches.item(0)
        this.state.y1 = coords.pageY
        return this.options.touchStart(e)
    }
    onTouchMove(e){
        let coords = e.changedTouches.item(0)
        console.log(coords.pageY)
        // console.log(this.horizontalDirection({x1:coords.pageX,}))
        new _scroll__WEBPACK_IMPORTED_MODULE_0__["default"]({
            scroll_elem:'#list',
            scrollToTop:function(){
                this.state.y2 = coords.pageY
                console.log(this.state.y1,this.state.y2)
            }.bind(this),
        })


        return this.options.touchMove(e)

    }
    onTouchEnd(e){
        return this.options.touchEnd(e)
    }

    bindEvent(){
        this.options.el.addEventListener('touchstart',this.onTouchStart.bind(this))
        this.options.el.addEventListener('touchmove',this.onTouchMove.bind(this))
        this.options.el.addEventListener('touchend',this.onTouchEnd.bind(this))
    }
}

/* harmony default export */ __webpack_exports__["default"] = (Touch);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Swiper, Page, Touch, FlatList, Clusterize, Scroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatList", function() { return FlatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterize", function() { return Clusterize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/swiper */ "./src/components/swiper.js");
/* harmony import */ var _components_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/page */ "./src/components/page.js");
/* harmony import */ var _components_touch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/touch */ "./src/components/touch.js");
/* harmony import */ var _components_flatlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/flatlist */ "./src/components/flatlist.js");
/* harmony import */ var _components_clusterize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clusterize */ "./src/components/clusterize.js");
/* harmony import */ var _components_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/scroll */ "./src/components/scroll.js");







const Swiper = function(obj){return new _components_swiper__WEBPACK_IMPORTED_MODULE_0__["default"](obj)};
const Page = function(obj){return new _components_page__WEBPACK_IMPORTED_MODULE_1__["default"](obj)};
const Touch = function(obj){return new _components_touch__WEBPACK_IMPORTED_MODULE_2__["default"](obj)};
const FlatList = function(obj){return new _components_flatlist__WEBPACK_IMPORTED_MODULE_3__["default"](obj)};
const Clusterize = function(obj){return new _components_clusterize__WEBPACK_IMPORTED_MODULE_4__["clusterize"](obj)};
const Scroll = function(obj){return new _components_scroll__WEBPACK_IMPORTED_MODULE_5__["default"](obj)};



/***/ })

/******/ });
});
//# sourceMappingURL=dingdingH5.js.map