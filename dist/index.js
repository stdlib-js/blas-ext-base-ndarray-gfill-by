"use strict";var g=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw (e=0, t)}};};var q=g(function(N,f){
var l=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),x=require('@stdlib/ndarray-base-numel-dimension/dist'),m=require('@stdlib/ndarray-base-stride/dist'),D=require('@stdlib/ndarray-base-offset/dist'),k=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-clip-index/dist'),w=require('@stdlib/blas-ext-base-gfill-by/dist').ndarray;function y(a,e,t){var u,s,i,n,v,r;if(r=a[0],v=x(r,0),i=d(l(a[1]),v),n=d(l(a[2]),v),i>=n)return r;return u=m(r,0),s=D(r)+u*i,w(n-i,k(r),u,s,c,null),r;function c(o,p){return e.call(t,o,p+i,r)}}f.exports=y
});var B=q();module.exports=B;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
