webpackJsonp([1],{316:function(e,t,n){"use strict";(function(e,a){function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),d=n(87),f=o(d),s=n(88),l=o(s),p=n(323),h=o(p),w=n(117),y=o(w),v=function(t){function n(){return r(this,n),i(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return u(n,t),c(n,[{key:"start",value:function(){this.addEnvAudio(y.default),this.addPanorama(1e3,h.default),this.addDirectLight()}},{key:"loaded",value:function(){this.envSound.play()}},{key:"addPanorama",value:function(t,n){var o=new e.SphereGeometry(t,50,50),r=new e.MeshBasicMaterial({map:(new e.TextureLoader).load(n),side:e.BackSide}),i=new e.Mesh(o,r);return a.Scene.add(i),i}},{key:"addEnvAudio",value:function(t){var n=this;this.envSound=new e.Audio(a.AudioListener),a.Scene.add(this.envSound);var o=new e.AudioLoader;o.load(t,function(e){n.envSound.setBuffer(e),n.envSound.setLoop(!0)})}},{key:"addDirectLight",value:function(){a.Scene.add(new e.AmbientLight(16777215));var t=new e.DirectionalLight(16777215,.3);return t.position.set(50,50,50),t.castShadow=!0,t.shadow.mapSize.width=2048,t.shadow.mapSize.height=512,t.shadow.camera.near=100,t.shadow.camera.far=1200,t.shadow.camera.left=-1e3,t.shadow.camera.right=1e3,t.shadow.camera.top=350,t.shadow.camera.bottom=-350,a.Scene.add(t),t}},{key:"update",value:function(){l.default.update()}}]),n}(f.default);t.default=function(){return new v}()}).call(t,n(28),n(60))},323:function(e,t,n){e.exports=n.p+"87f578a187e0691b530cef5bc2a7e757.jpg"}});