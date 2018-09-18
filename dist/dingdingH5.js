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
/******/ 	var hotCurrentHash = "7085cc863f3f05cb7c68";
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

/***/ "./src/base/pagelife.js":
/*!******************************!*\
  !*** ./src/base/pagelife.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pagelife; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pagelife =
/*#__PURE__*/
function () {
  function Pagelife(param) {
    _classCallCheck(this, Pagelife);

    this.options = {
      el: param.el,
      DOMContentLoaded: param.DOMContentLoaded,
      onload: param.onload
    };
    this.bindEvent();
  }

  _createClass(Pagelife, [{
    key: "DOMContentLoaded",
    value: function DOMContentLoaded() {
      this.options.DOMContentLoaded && this.options.DOMContentLoaded();
    }
  }, {
    key: "onload",
    value: function onload() {
      this.options.onload && this.options.onload();
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      document.addEventListener('DOMContentLoaded', this.DOMContentLoaded.bind(this));
      window.onload = this.onload.bind(this);
    }
  }]);

  return Pagelife;
}();



/***/ }),

/***/ "./src/base/scroll.js":
/*!****************************!*\
  !*** ./src/base/scroll.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scroll; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/base/util.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_util__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Scroll =
/*#__PURE__*/
function () {
  function Scroll(param) {
    _classCallCheck(this, Scroll);

    this.options = {
      content_elems: param.content_elems,
      scroll_elem: param.scroll_elem,
      whenVisible: param.whenVisible,
      whenState: true,
      scrollToTop: param.scrollToTop,
      scrollToBottom: param.scrollToBottom,
      offset: param.offset ? param.offset : [0, 0, 0, 0]
    };
    this.state = {
      topState: FSM.off,
      bottomState: FSM.off
    };
    this.bindEvent();
    this.init();
  } // 指定content_elems_item滚动到可视区域时


  _createClass(Scroll, [{
    key: "isVisible",
    value: function isVisible(event, content_elems_item) {
      //element坐标
      var coords = content_elems_item.getBoundingClientRect(); //当前窗口高度

      var windowHeight = Math.min(this.options.scroll_elem.clientHeight, document.documentElement.clientHeight); //判断element是否在当前窗口的可视区域

      var topVisible = coords.top > 0 && coords.top < windowHeight;
      var bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

      if (Boolean(topVisible || bottomVisible) && this.options.whenVisible) {
        return this.options.whenVisible(event, content_elems_item);
      }
    }
  }, {
    key: "getScrollTop",
    value: function getScrollTop() {
      return Math.max(document.body.scrollTop, document.documentElement.scrollTop, this.options.scroll_elem.scrollTop);
    }
  }, {
    key: "getScrollHeight",
    value: function getScrollHeight() {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, this.options.scroll_elem.scrollHeight);
    }
  }, {
    key: "getWindowHeight",
    value: function getWindowHeight() {
      return document.compatMode === "CSS1Compat" ? document.documentElement.clientHeight : document.body.clientHeight;
    } // 派发滚动事件

  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      // console.log('getScrollTop',this.getScrollTop())
      // console.log('getScrollHeight',this.getScrollHeight())
      // console.log('getWindowHeight',this.getWindowHeight())
      // console.log(this.options.scroll_elem.clientHeight)

      /**
       * @param state
       *
       * state & FSM 状态模式
       * finite-state machine 有限状态机缩写
       * 摘自 曾探.JavaScript设计模式与开发实践[M] p.224
       * **/
      var isOnTop = this.getScrollTop() <= 0 + this.options.offset[0],
          isOnBottom = this.getScrollTop() + this.getWindowHeight() >= this.getScrollHeight() - this.options.offset[2] - 10;
      this.options.scrollToBottom && this.state.bottomState.bottomWasArrivaled.call(this, isOnBottom);
      this.options.scrollToTop && this.state.topState.topWasArrivaled.call(this, isOnTop);
      this.init();
    } // 绑定事件

  }, {
    key: "bindEvent",
    value: function bindEvent() {
      if (this.options.scroll_elem.scrollHeight > this.options.scroll_elem.clientHeight) {
        this.options.scroll_elem.addEventListener('scroll', Object(_util__WEBPACK_IMPORTED_MODULE_0__["debounce"])(this.dispatchEvent.bind(this), 500));
      } else {
        window.addEventListener('scroll', Object(_util__WEBPACK_IMPORTED_MODULE_0__["debounce"])(this.dispatchEvent.bind(this), 500));
      }
    } // 初始化

  }, {
    key: "init",
    value: function init() {
      !!this.options.content_elems && this.options.content_elems.forEach(function (item) {
        this.isVisible(event, item);
      }.bind(this));
    }
  }]);

  return Scroll;
}();


var FSM = {
  off: {
    topWasArrivaled: function topWasArrivaled(isOnTop) {
      if (!isOnTop) {
        this.state.topState = FSM.on;
      }
    },
    bottomWasArrivaled: function bottomWasArrivaled(isOnBottom) {
      if (!isOnBottom) {
        this.state.bottomState = FSM.on;
      }
    }
  },
  on: {
    topWasArrivaled: function topWasArrivaled(isOnTop) {
      if (isOnTop) {
        this.state.topState = FSM.off;
        return this.options.scrollToTop(event);
      }
    },
    bottomWasArrivaled: function bottomWasArrivaled(isOnBottom) {
      if (isOnBottom) {
        this.state.bottomState = FSM.off;
        return this.options.scrollToBottom(event);
      }
    }
  }
};
/**
 * @native 其他原生功能 - 暂不封装或使用polyfill
 *
 * 1.滚动到指定位置
 * [window.scrollTo()](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
 *
 *
 * 2.粘性-根据滚动方向动态地定住元素
 * 使用css新特性：postion:sticky
 * 开源兼容库：https://github.com/filamentgroup/fixed-sticky
 *
 * 3.元素可见不可见判断 IntersectionObserver
 * 开源兼容库 https://github.com/w3c/IntersectionObserver/tree/master/polyfill
 *
 * 4.Loren Brichter - Pull-to-Refresh交互技术创建者
 * **/

/***/ }),

/***/ "./src/base/touch.js":
/*!***************************!*\
  !*** ./src/base/touch.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Touch; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Touch =
/*#__PURE__*/
function () {
  function Touch(param) {
    _classCallCheck(this, Touch);

    this.options = {
      el: param.el,
      touchStart: param.touchStart,
      touchMove: param.touchMove,
      touchEnd: param.touchEnd
    };
    this.state = {
      x1: 0,
      x2: 0,
      y1: 0,
      y2: 0
    };
    this.bindEvent();
  }
  /**
   * 判断移动的方向,结果是Left, Right, Up, Down中的一个
   * @param  {} x1 起点的横坐标
   * @param  {} x2 终点的横坐标
   * @param  {} y1 起点的纵坐标
   * @param  {} y2 终点的纵坐标
   *
   */
  // Direction


  _createClass(Touch, [{
    key: "horizontalDirection",
    value: function horizontalDirection(_ref) {
      var x1 = _ref.x1,
          x2 = _ref.x2;
      return x1 - x2 > 0 ? 'Left' : x1 - x2 < 0 ? 'Right' : false;
    }
  }, {
    key: "verticalDirection",
    value: function verticalDirection(_ref2) {
      var y1 = _ref2.y1,
          y2 = _ref2.y2;
      return y1 - y2 > 0 ? 'Up' : y1 - y2 < 0 ? 'Down' : false;
    }
  }, {
    key: "direction",
    value: function direction(_ref3) {
      var x1 = _ref3.x1,
          x2 = _ref3.x2,
          y1 = _ref3.y1,
          y2 = _ref3.y2;
      return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
    } //触摸时间

  }, {
    key: "TapTime",
    value: function TapTime(last) {
      var endTime = performance.now();
      return endTime - last;
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      return this.options.touchStart(e);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      return this.options.touchMove(e);
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      return this.options.touchEnd(e);
    }
  }, {
    key: "bindEvent",
    value: function bindEvent() {
      this.options.el.addEventListener('touchstart', this.onTouchStart.bind(this));
      this.options.el.addEventListener('touchmove', this.onTouchMove.bind(this));
      this.options.el.addEventListener('touchend', this.onTouchEnd.bind(this)); //feature 添加鼠标事件
      // this.options.el.addEventListener('mousedown',this.onTouchStart.bind(this))
      // this.options.el.addEventListener('mousemove',this.onTouchMove.bind(this))
      // this.options.el.addEventListener('mouseup',this.onTouchEnd.bind(this))
    }
  }]);

  return Touch;
}();



/***/ }),

/***/ "./src/base/util.js":
/*!**************************!*\
  !*** ./src/base/util.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 节流 - https://github.com/mqyqingfeng/Blog/issues/26
var throttle = function throttle(action) {
  var isRunning = false;
  return function () {
    var context = this,
        args = arguments;
    if (isRunning) return;
    isRunning = true;
    window.requestAnimationFrame(function () {
      action.apply(context, args);
      isRunning = false;
    });
  };
}; // 防抖 - https://github.com/mqyqingfeng/Blog/issues/22


var debounce = function debounce(func, wait) {
  var timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }

    var context = this,
        args = arguments;
    timeout = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
};

module.exports = {
  throttle: throttle,
  debounce: debounce
};

/***/ }),

/***/ "./src/components/clusterize.js":
/*!**************************************!*\
  !*** ./src/components/clusterize.js ***!
  \**************************************/
/*! exports provided: clusterize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clusterize", function() { return clusterize; });
var clusterize = function clusterize(param) {
  // 基本信息
  this.options = {
    content_elem: param.content_elem,
    scroll_elem: param.scroll_elem,
    item_height: 0,
    top_height: 0,
    bottom_height: 0,
    _html: '',
    density: 20,
    clusterize_scroll: param.clusterize_scroll ? param.clusterize_scroll : 400,
    renderItem: param.renderItem,
    data: param.data
  }; // 闭包参数

  var self = this.options,
      cache = [0],
      show_no_data_row = [],
      _change = 0;
  /**
   * 通过控制<tbody>的头尾<tr>的高度来达到虚拟渲染
   * 灵感来自https://clusterize.js.org/
   * **/
  // 渲染dom函数

  this.render = function (show_no_data_row, cache) {
    self._html = ''; // firstChild 第一个tr的高度

    self.top_height = self.item_height * cache.length; // lastChild 最后一个tr的高度

    self.bottom_height = self.item_height * (self.data.length - cache.length - show_no_data_row.length); // 中间的html内容

    show_no_data_row.forEach(function (item, index) {
      self._html += self.renderItem(item, index);
    });
    self.content_elem.innerHTML = self._html;
    self.content_elem.firstChild.style.height = Math.max(self.item_height, self.top_height) + 'px';
    self.content_elem.lastChild.style.height = self.bottom_height + 'px';
  }; //页面生命周期 - 加载阶段


  document.addEventListener('DOMContentLoaded', function () {
    self.scroll_elem.style.maxHeight = self.clusterize_scroll + 'px'; // 在DOMContentLoaded阶段先获得item高度，以备后续计算密度

    self.content_elem.innerHTML = self.renderItem(aRows1[0], 0);
    self.item_height = self.content_elem.offsetHeight; // 计算密度

    self.density = parseInt((self.clusterize_scroll + self.item_height * 2) / (self.item_height - 2));
    self.top_height = 0;
    self.bottom_height = self.item_height * (self.data.length - self.density * 2);
  }); // 加载完成

  window.onload = function () {
    this.render(self.data.slice(0, self.density * 2), cache, 0);
  }.bind(this); // 监听滚动事件


  self.scroll_elem.addEventListener('scroll', function (event) {
    var len = self.density;
    var i = parseInt(event.srcElement.scrollTop / self.item_height / len); // 滚动高度/（块高度*密度）取整 - 用于判断滚动到一半时启动渲染

    if (_change !== i) {
      _change = i;
      cache = self.data.slice(0, len * i);
      show_no_data_row = self.data.slice(len * i, len * (i + 2));
      this.render(show_no_data_row, cache, i);
    }
  }.bind(this));
};
/**
 * @other 其他相似组件
 *
 * new IntersectionObserver(callback, options)
 * [使用Intersection Observer API构建无限滚动组件](https://www.w3cplus.com/vue/build-an-infinite-scroll-component-using-intersection-observer-api.html)
 *
 * **/

/***/ }),

/***/ "./src/components/dirtycheck.js":
/*!**************************************!*\
  !*** ./src/components/dirtycheck.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dirty; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Dirty =
/*#__PURE__*/
function () {
  function Dirty(obj) {
    _classCallCheck(this, Dirty);

    this.options = {
      el: obj.el,
      onDirty: obj.onDirty,
      onClean: obj.onClean
    };
    this.eles = ['input', 'textarea', 'select'];
    this.isDirty = false;
    this.history = ["clean", "clean"]; //Keep track of last statuses

    this.nodes = [];
    this.init();
  }

  _createClass(Dirty, [{
    key: "init",
    value: function init() {
      var self = this;

      for (var i = 0; i < self.eles.length; i++) {
        var _self$nodes;

        (_self$nodes = self.nodes).push.apply(_self$nodes, _toConsumableArray(self.options.el.querySelectorAll(self.eles[i])));
      }

      for (var _i = 0, node; node = self.nodes[_i++];) {
        self.saveInitialValues(node);
      }

      self.setEvents();
    }
  }, {
    key: "saveInitialValues",
    value: function saveInitialValues(node) {
      if (node.getAttribute('type') === 'checkbox' || node.getAttribute('type') === 'radio') {
        node.setAttribute('data-dirrty-initial-value', node.checked);
      } else {
        node.setAttribute('data-dirrty-initial-value', node.value);
      }
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      var self = this;
      self.options.el.addEventListener('input', function (e) {
        var _value;

        if (e.target.getAttribute('type') === 'checkbox' || e.target.getAttribute('type') === 'radio') {
          _value = e.target.checked + '';
        } else {
          _value = e.target.value + '';
        }

        e.target.setAttribute('data-is-dirrty', _value !== e.target.getAttribute('data-dirrty-initial-value'));
        self.checkValues();
      });
    }
  }, {
    key: "checkValues",
    value: function checkValues() {
      var nodes = this.nodes,
          self = this;
      var isDirty = false;

      for (var i = 0, node; node = nodes[i++];) {
        if (node.getAttribute('data-is-dirrty') === 'true') {
          isDirty = true;
        }
      }

      if (isDirty) {
        self.setDirty();
      } else {
        self.setClean();
      }

      this.fireEvents();
    }
  }, {
    key: "fireEvents",
    value: function fireEvents() {
      if (this.isDirty && this.wasJustClean()) {
        this.options.onDirty();
      }

      if (!this.isDirty && this.wasJustDirty()) {
        this.options.onClean();
      }
    }
  }, {
    key: "setDirty",
    value: function setDirty() {
      this.isDirty = true;
      this.history[0] = this.history[1];
      this.history[1] = "dirty";
    }
  }, {
    key: "setClean",
    value: function setClean() {
      this.isDirty = false;
      this.history[0] = this.history[1];
      this.history[1] = "clean";
    }
  }, {
    key: "wasJustDirty",
    value: function wasJustDirty() {
      return this.history[0] === "dirty";
    }
  }, {
    key: "wasJustClean",
    value: function wasJustClean() {
      return this.history[0] === "clean";
    }
  }]);

  return Dirty;
}();
/**
 *
 * 本库思想来自
 * jQuery版本 https://github.com/rubentd/dirrty
 *
 * **/




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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var FlatList =
/*#__PURE__*/
function () {
  function FlatList(param) {
    _classCallCheck(this, FlatList);

    this.state = {
      ref: document.querySelector(param.ref),
      data: typeof param.data === 'function' ? param.data() : param.data,
      renderItem: param.renderItem
    };
    this.render();
  }

  _createClass(FlatList, [{
    key: "render",
    value: function render() {
      var _html = '',
          state = this.state;
      state.data.forEach(function (item, index) {
        _html += state.renderItem(item, index);
      });
      state.ref.innerHTML = _html;
    }
  }]);

  return FlatList;
}();



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
/* harmony import */ var _base_touch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/touch */ "./src/base/touch.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Swiper =
/*#__PURE__*/
function (_Touch) {
  _inherits(Swiper, _Touch);

  function Swiper(param) {
    var _this;

    _classCallCheck(this, Swiper);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Swiper).call(this, param));
    _this.options = {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      _index: 0,
      last: 0,
      el: param.el,
      slides: param.el.querySelectorAll('.swiper-slide')
    };

    _this.swiperActive();

    return _this;
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


  _createClass(Swiper, [{
    key: "swiperRender",
    value: function swiperRender(i) {
      if (this.horizontalDirection(this.options) === 'Left' && i < this.options.slides.length - 1) {
        this.options.slides[i].classList.remove('swiper-slide-active');
        this.options.slides[i + 1].classList.add('swiper-slide-active');
        this.options._index += 1;
        this.options.el.style.webkitTransform = "translate3d(-".concat(this.options.el.offsetWidth * (i + 1), "px, 0px, 0px)");
      } else if (this.horizontalDirection(this.options) === 'Right' && i >= 1) {
        this.options.slides[i].classList.remove('swiper-slide-active');
        this.options.slides[i - 1].classList.add('swiper-slide-active');
        this.options._index -= 1;
        this.options.el.style.webkitTransform = "translate3d(-".concat(this.options.el.offsetWidth * (i - 1), "px, 0px, 0px)");
      } else {
        this.options.el.style.webkitTransform = "translate3d(-".concat(this.options.el.offsetWidth * i, "px, 0px, 0px)");
      }
    }
  }, {
    key: "swiperActive",
    value: function swiperActive() {
      if (!this.options.el.querySelector('.swiper-slide-active')) {
        this.options.slides[0].classList.add('swiper-slide-active');
      }

      for (var i = 0; i < this.options.slides.length; i++) {
        if (this.options.slides[i].classList.contains('swiper-slide-active')) {
          this.options._index = i;
          this.options.el.style.transitionDuration = '0ms';
          this.options.el.style.webkitTransform = "translate3d(-".concat(this.options.el.offsetWidth * i, "px, 0px, 0px)");
        }
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(e) {
      var coords = e.changedTouches.item(0),
          opt = this.options;
      opt.x1 = coords.pageX;
      opt.y1 = coords.pageY;
      opt.el.style.transitionDuration = '0ms';
      opt.last = performance.now();
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(e) {
      var opt = this.options;
      opt.el.style.webkitTransform = "translate3d(".concat(e.changedTouches.item(0).pageX - opt.x1 // 位移距离
      - opt.el.offsetWidth // el宽度
      * opt._index // 当前屏幕显示的slide所在的索引
      , "px, 0px, 0px)");
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(e) {
      var coords = e.changedTouches.item(0),
          opt = this.options;
      opt.x2 = coords.pageX;
      opt.y2 = coords.pageY;
      opt.el.style.transitionDuration = '300ms';
      opt.el.style.webkitTransform = "translate3d(-".concat(opt.el.offsetWidth * opt._index, "px, 0px, 0px)");
      /**
       * @param TapTime
       *
       * 首先，判断触摸时间
       * 1。短按 - 间隔时间300ms
       *    这种情况直接判断滑动方向进行滚动
       *
       * 2。长按 - 间隔时间大于300ms
       *    这种情况就需要判断滑动了多少距离 - 可自定义
       *    一般为超过第二张的一半时滑动
       *
       * **/

      if (Math.abs(opt.x2 - opt.x1) > opt.el.offsetWidth / 2 || this.TapTime(opt.last) < 300) {
        this.swiperRender(opt._index);
      }
    }
  }]);

  return Swiper;
}(_base_touch__WEBPACK_IMPORTED_MODULE_0__["default"]);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: Swiper, Page, Touch, FlatList, Clusterize, Scroll, Dirty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swiper", function() { return Swiper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlatList", function() { return FlatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clusterize", function() { return Clusterize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scroll", function() { return Scroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dirty", function() { return Dirty; });
/* harmony import */ var _base_pagelife__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/pagelife */ "./src/base/pagelife.js");
/* harmony import */ var _base_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base/touch */ "./src/base/touch.js");
/* harmony import */ var _base_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/scroll */ "./src/base/scroll.js");
/* harmony import */ var _components_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/swiper */ "./src/components/swiper.js");
/* harmony import */ var _components_flatlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/flatlist */ "./src/components/flatlist.js");
/* harmony import */ var _components_dirtycheck_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dirtycheck.js */ "./src/components/dirtycheck.js");
/* harmony import */ var _components_clusterize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/clusterize */ "./src/components/clusterize.js");








var Swiper = function Swiper(obj) {
  return new _components_swiper__WEBPACK_IMPORTED_MODULE_3__["default"](obj);
};

var Page = function Page(obj) {
  return new _base_pagelife__WEBPACK_IMPORTED_MODULE_0__["default"](obj);
};

var Touch = function Touch(obj) {
  return new _base_touch__WEBPACK_IMPORTED_MODULE_1__["default"](obj);
};

var FlatList = function FlatList(obj) {
  return new _components_flatlist__WEBPACK_IMPORTED_MODULE_4__["default"](obj);
};

var Clusterize = function Clusterize(obj) {
  return new _components_clusterize__WEBPACK_IMPORTED_MODULE_6__["clusterize"](obj);
};

var Scroll = function Scroll(obj) {
  return new _base_scroll__WEBPACK_IMPORTED_MODULE_2__["default"](obj);
};

var Dirty = function Dirty(obj) {
  return new _components_dirtycheck_js__WEBPACK_IMPORTED_MODULE_5__["default"](obj);
};



/***/ })

/******/ });
});
//# sourceMappingURL=dingdingH5.js.map