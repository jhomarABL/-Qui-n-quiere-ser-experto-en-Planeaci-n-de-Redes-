var N1=Object.defineProperty;
var z1=(s,f,r)=>f in s?N1(s,f, {
  enumerable:!0,configurable:!0,writable:!0,value:r
}):s[f]=r;
var Dt=(s,f,r)=>z1(s,typeof f!="symbol"?f+"":f,r);
(function() {
  const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const S of document.querySelectorAll('link[rel="modulepreload"]'))o(S);new MutationObserver(S=> {
    for(const p of S)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)
  }).observe(document, {
    childList:!0,subtree:!0
  });function r(S) {
    const p={};return S.integrity&&(p.integrity=S.integrity),S.referrerPolicy&&(p.referrerPolicy=S.referrerPolicy),S.crossOrigin==="use-credentials"?p.credentials="include":S.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p
  }

  function o(S) {
    if(S.ep)return;S.ep=!0;const p=r(S);fetch(S.href,p)
  }
})();
function T1(s) {
  return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s
}

var sr= {
  exports:{}
},Oi={};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;
function C1() {
  if(Wh)return Oi;
  Wh=1;
  var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");
  function r(o,S,p) {
    var g=null;
    if(p!==void 0&&(g=""+p),S.key!==void 0&&(g=""+S.key),"key"in S) {
      p={};
      for(var O in S)O!=="key"&&(p[O]=S[O])
    } else p=S;
    return S=p.ref, {
      $$typeof:s,type:o,key:g,ref:S!==void 0?S:null,props:p
    }
  }

  return Oi.Fragment=f,Oi.jsx=r,Oi.jsxs=r,Oi
}

var Ph;
function A1() {
  return Ph||(Ph=1,sr.exports=C1()),sr.exports
}

var u=A1(),cr= {
  exports:{}
},ce={};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ep;
function O1() {
  if(ep)return ce;
  ep=1;
  var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),g=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.for("react.view_transition"),I=Symbol.iterator;
  function Q(v) {
    return v===null||typeof v!="object"?null:(v=I&&v[I]||v["@@iterator"],typeof v=="function"?v:null)
  }

  var ie= {
    isMounted:function() {
      return!1
    },enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}
  },ue=Object.assign,U={};
  function W(v,q,K) {
    this.props=v,this.context=q,this.refs=U,this.updater=K||ie
  }

  W.prototype.isReactComponent={},W.prototype.setState=function(v,q) {
    if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this,v,q,"setState")
  },W.prototype.forceUpdate=function(v) {
    this.updater.enqueueForceUpdate(this,v,"forceUpdate")
  };
  function Ue(){}Ue.prototype=W.prototype;
  function he(v,q,K) {
    this.props=v,this.context=q,this.refs=U,this.updater=K||ie
  }

  var P=he.prototype=new Ue;
  P.constructor=he,ue(P,W.prototype),P.isPureReactComponent=!0;
  var B=Array.isArray;
  function C(){}var k= {
    H:null,A:null,T:null,S:null
  },Ce=Object.prototype.hasOwnProperty;
  function Pe(v,q,K) {
    var J=K.ref;
    return {
      $$typeof:s,type:v,key:q,ref:J!==void 0?J:null,props:K
    }
  }

  function Ie(v,q) {
    return Pe(v.type,q,v.props)
  }

  function Qe(v) {
    return typeof v=="object"&&v!==null&&v.$$typeof===s
  }

  function Na(v) {
    var q= {
      "=":"=0",":":"=2"
    };
    return"$"+v.replace(/[=:]/g,function(K) {
      return q[K]
    })
  }

  var Va=/\/+/g;
  function we(v,q) {
    return typeof v=="object"&&v!==null&&v.key!=null?Na(""+v.key):q.toString(36)
  }

  function L(v) {
    switch(v.status) {
      case"fulfilled":return v.value;
      case"rejected":throw v.reason;
      default:switch(typeof v.status=="string"?v.then(C,C):(v.status="pending",v.then(function(q) {
        v.status==="pending"&&(v.status="fulfilled",v.value=q)
      },function(q) {
        v.status==="pending"&&(v.status="rejected",v.reason=q)
      })),v.status) {
        case"fulfilled":return v.value;
        case"rejected":throw v.reason
      }
    }

    throw v
  }

  function ae(v,q,K,J,pe) {
    var be=typeof v;
    (be==="undefined"||be==="boolean")&&(v=null);
    var Ne=!1;
    if(v===null)Ne=!0;
    else switch(be) {
      case"bigint":case"string":case"number":Ne=!0;
      break;
      case"object":switch(v.$$typeof) {
        case s:case f:Ne=!0;
        break;
        case M:return Ne=v._init,ae(Ne(v._payload),q,K,J,pe)
      }
    }

    if(Ne)return pe=pe(v),Ne=J===""?"."+we(v,0):J,B(pe)?(K="",Ne!=null&&(K=Ne.replace(Va,"$&/")+"/"),ae(pe,q,K,"",function(za) {
      return za
    })):pe!=null&&(Qe(pe)&&(pe=Ie(pe,K+(pe.key==null||v&&v.key===pe.key?"":(""+pe.key).replace(Va,"$&/")+"/")+Ne)),q.push(pe)),1;
    Ne=0;
    var X=J===""?".":J+":";
    if(B(v))for(var se=0;se<v.length;se++)J=v[se],be=X+we(J,se),Ne+=ae(J,q,K,be,pe);
    else if(se=Q(v),typeof se=="function")for(v=se.call(v),se=0;!(J=v.next()).done;)J=J.value,be=X+we(J,se++),Ne+=ae(J,q,K,be,pe);
    else if(be==="object") {
      if(typeof v.then=="function")return ae(L(v),q,K,J,pe);
      throw q=String(v),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")
    }

    return Ne
  }

  function te(v,q,K) {
    if(v==null)return v;
    var J=[],pe=0;
    return ae(v,J,"","",function(be) {
      return q.call(K,be,pe++)
    }),J
  }

  function me(v) {
    if(v._status===-1) {
      var q=v._result,K=q();
      K.then(function(J) {
        (v._status===0||v._status===-1)&&(v._status=1,v._result=J,K.status===void 0&&(K.status="fulfilled",K.value=J))
      },function(J) {
        (v._status===0||v._status===-1)&&(v._status=2,v._result=J,K.status===void 0&&(K.status="rejected",K.reason=J))
      }),v._status===-1&&(v._status=0,v._result=K)
    }

    if(v._status===1)return v._result.default;
    throw v._result
  }

  var de=typeof reportError=="function"?reportError:function(v) {
    if(typeof window=="object"&&typeof window.ErrorEvent=="function") {
      var q=new window.ErrorEvent("error", {
        bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v
      });
      if(!window.dispatchEvent(q))return
    } else if(typeof process=="object"&&typeof process.emit=="function") {
      process.emit("uncaughtException",v);
      return
    }

    console.error(v)
  };
  function Ze(v) {
    var q=k.T,K={};
    K.types=q!==null?q.types:null,k.T=K;
    try {
      var J=v(),pe=k.S;
      pe!==null&&pe(K,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(C,de)
    } catch(be) {
      de(be)
    } finally {
      q!==null&&K.types!==null&&(q.types=K.types),k.T=q
    }
  }

  function Ve(v) {
    var q=k.T;
    if(q!==null) {
      var K=q.types;
      K===null?q.types=[v]:K.indexOf(v)===-1&&K.push(v)
    } else Ze(Ve.bind(null,v))
  }

  var Ga= {
    map:te,forEach:function(v,q,K) {
      te(v,function() {
        q.apply(this,arguments)
      },K)
    },count:function(v) {
      var q=0;
      return te(v,function() {
        q++
      }),q
    },toArray:function(v) {
      return te(v,function(q) {
        return q
      })||[]
    },only:function(v) {
      if(!Qe(v))throw Error("React.Children.only expected to receive a single React element child.");
      return v
    }
  };
  return ce.Activity=b,ce.Children=Ga,ce.Component=W,ce.Fragment=r,ce.Profiler=S,ce.PureComponent=he,ce.StrictMode=o,ce.Suspense=z,ce.ViewTransition=A,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,ce.__COMPILER_RUNTIME= {
    __proto__:null,c:function(v) {
      return k.H.useMemoCache(v)
    }
  },ce.addTransitionType=Ve,ce.cache=function(v) {
    return function() {
      return v.apply(null,arguments)
    }
  },ce.cacheSignal=function() {
    return null
  },ce.cloneElement=function(v,q,K) {
    if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");
    var J=ue({},v.props),pe=v.key;
    if(q!=null)for(be in q.key!==void 0&&(pe=""+q.key),q)!Ce.call(q,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&q.ref===void 0||(J[be]=q[be]);
    var be=arguments.length-2;
    if(be===1)J.children=K;
    else if(1<be) {
      for(var Ne=Array(be),X=0;X<be;X++)Ne[X]=arguments[X+2];
      J.children=Ne
    }

    return Pe(v.type,pe,J)
  },ce.createContext=function(v) {
    return v= {
      $$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null
    },v.Provider=v,v.Consumer= {
      $$typeof:p,_context:v
    },v
  },ce.createElement=function(v,q,K) {
    var J,pe={},be=null;
    if(q!=null)for(J in q.key!==void 0&&(be=""+q.key),q)Ce.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(pe[J]=q[J]);
    var Ne=arguments.length-2;
    if(Ne===1)pe.children=K;
    else if(1<Ne) {
      for(var X=Array(Ne),se=0;se<Ne;se++)X[se]=arguments[se+2];
      pe.children=X
    }

    if(v&&v.defaultProps)for(J in Ne=v.defaultProps,Ne)pe[J]===void 0&&(pe[J]=Ne[J]);
    return Pe(v,be,pe)
  },ce.createRef=function() {
    return {
      current:null
    }
  },ce.forwardRef=function(v) {
    return {
      $$typeof:O,render:v
    }
  },ce.isValidElement=Qe,ce.lazy=function(v) {
    return {
      $$typeof:M,_payload: {
        _status:-1,_result:v
      },_init:me
    }
  },ce.memo=function(v,q) {
    return {
      $$typeof:H,type:v,compare:q===void 0?null:q
    }
  },ce.startTransition=Ze,ce.unstable_useCacheRefresh=function() {
    return k.H.useCacheRefresh()
  },ce.use=function(v) {
    return k.H.use(v)
  },ce.useActionState=function(v,q,K) {
    return k.H.useActionState(v,q,K)
  },ce.useCallback=function(v,q) {
    return k.H.useCallback(v,q)
  },ce.useContext=function(v) {
    return k.H.useContext(v)
  },ce.useDebugValue=function(){},ce.useDeferredValue=function(v,q) {
    return k.H.useDeferredValue(v,q)
  },ce.useEffect=function(v,q) {
    return k.H.useEffect(v,q)
  },ce.useEffectEvent=function(v) {
    return k.H.useEffectEvent(v)
  },ce.useId=function() {
    return k.H.useId()
  },ce.useImperativeHandle=function(v,q,K) {
    return k.H.useImperativeHandle(v,q,K)
  },ce.useInsertionEffect=function(v,q) {
    return k.H.useInsertionEffect(v,q)
  },ce.useLayoutEffect=function(v,q) {
    return k.H.useLayoutEffect(v,q)
  },ce.useMemo=function(v,q) {
    return k.H.useMemo(v,q)
  },ce.useOptimistic=function(v,q) {
    return k.H.useOptimistic(v,q)
  },ce.useReducer=function(v,q,K) {
    return k.H.useReducer(v,q,K)
  },ce.useRef=function(v) {
    return k.H.useRef(v)
  },ce.useState=function(v) {
    return k.H.useState(v)
  },ce.useSyncExternalStore=function(v,q,K) {
    return k.H.useSyncExternalStore(v,q,K)
  },ce.useTransition=function() {
    return k.H.useTransition()
  },ce.version="19.3.1",ce
}

var ap;
function br() {
  return ap||(ap=1,cr.exports=O1()),cr.exports
}

var $=br();
const M1=T1($);
var or= {
  exports:{}
},Mi={},rr= {
  exports:{}
},dr={};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;
function _1() {
  return tp||(tp=1,(function(s) {
    function f(L,ae) {
      var te=L.length;L.push(ae);e:for(;0<te;) {
        var me=te-1>>>1,de=L[me];if(0<S(de,ae))L[me]=ae,L[te]=de,te=me;else break e
      }
    }

    function r(L) {
      return L.length===0?null:L[0]
    }

    function o(L) {
      if(L.length===0)return null;var ae=L[0],te=L.pop();if(te!==ae) {
        L[0]=te;e:for(var me=0,de=L.length,Ze=de>>>1;me<Ze;) {
          var Ve=2*(me+1)-1,Ga=L[Ve],v=Ve+1,q=L[v];if(0>S(Ga,te))v<de&&0>S(q,Ga)?(L[me]=q,L[v]=te,me=v):(L[me]=Ga,L[Ve]=te,me=Ve);else if(v<de&&0>S(q,te))L[me]=q,L[v]=te,me=v;else break e
        }
      }

      return ae
    }

    function S(L,ae) {
      var te=L.sortIndex-ae.sortIndex;return te!==0?te:L.id-ae.id
    }

    if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function") {
      var p=performance;s.unstable_now=function() {
        return p.now()
      }
    } else {
      var g=Date,O=g.now();s.unstable_now=function() {
        return g.now()-O
      }
    }

    var z=[],H=[],M=1,b=null,A=3,I=!1,Q=!1,ie=!1,ue=!1,U=typeof setTimeout=="function"?setTimeout:null,W=typeof clearTimeout=="function"?clearTimeout:null,Ue=typeof setImmediate<"u"?setImmediate:null;function he(L) {
      for(var ae=r(H);ae!==null;) {
        if(ae.callback===null)o(H);else if(ae.startTime<=L)o(H),ae.sortIndex=ae.expirationTime,f(z,ae);else break;ae=r(H)
      }
    }

    function P(L) {
      if(ie=!1,he(L),!Q)if(r(z)!==null)Q=!0,B||(B=!0,Qe());else {
        var ae=r(H);ae!==null&&we(P,ae.startTime-L)
      }
    }

    var B=!1,C=-1,k=5,Ce=-1;function Pe() {
      return ue?!0:!(s.unstable_now()-Ce<k)
    }

    function Ie() {
      if(ue=!1,B) {
        var L=s.unstable_now();Ce=L;var ae=!0;try {
          e: {
            Q=!1,ie&&(ie=!1,W(C),C=-1),I=!0;var te=A;try {
              a: {
                for(he(L),b=r(z);b!==null&&!(b.expirationTime>L&&Pe());) {
                  var me=b.callback;if(typeof me=="function") {
                    b.callback=null,A=b.priorityLevel;var de=me(b.expirationTime<=L);if(L=s.unstable_now(),typeof de=="function") {
                      b.callback=de,he(L),ae=!0;break a
                    }

                    b===r(z)&&o(z),he(L)
                  } else o(z);b=r(z)
                }

                if(b!==null)ae=!0;else {
                  var Ze=r(H);Ze!==null&&we(P,Ze.startTime-L),ae=!1
                }
              }

              break e
            } finally {
              b=null,A=te,I=!1
            }

            ae=void 0
          }
        } finally {
          ae?Qe():B=!1
        }
      }
    }

    var Qe;if(typeof Ue=="function")Qe=function() {
      Ue(Ie)
    };else if(typeof MessageChannel<"u") {
      var Na=new MessageChannel,Va=Na.port2;Na.port1.onmessage=Ie,Qe=function() {
        Va.postMessage(null)
      }
    } else Qe=function() {
      U(Ie,0)
    };function we(L,ae) {
      C=U(function() {
        L(s.unstable_now())
      },ae)
    }

    s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(L) {
      L.callback=null
    },s.unstable_forceFrameRate=function(L) {
      0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<L?Math.floor(1e3/L):5
    },s.unstable_getCurrentPriorityLevel=function() {
      return A
    },s.unstable_next=function(L) {
      switch(A) {
        case 1:case 2:case 3:var ae=3;break;default:ae=A
      }

      var te=A;A=ae;try {
        return L()
      } finally {
        A=te
      }
    },s.unstable_requestPaint=function() {
      ue=!0
    },s.unstable_runWithPriority=function(L,ae) {
      switch(L) {
        case 1:case 2:case 3:case 4:case 5:break;default:L=3
      }

      var te=A;A=L;try {
        return ae()
      } finally {
        A=te
      }
    },s.unstable_scheduleCallback=function(L,ae,te) {
      var me=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?me+te:me):te=me,L) {
        case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3
      }

      return de=te+de,L= {
        id:M++,callback:ae,priorityLevel:L,startTime:te,expirationTime:de,sortIndex:-1
      },te>me?(L.sortIndex=te,f(H,L),r(z)===null&&L===r(H)&&(ie?(W(C),C=-1):ie=!0,we(P,te-me))):(L.sortIndex=de,f(z,L),Q||I||(Q=!0,B||(B=!0,Qe()))),L
    },s.unstable_shouldYield=Pe,s.unstable_wrapCallback=function(L) {
      var ae=A;return function() {
        var te=A;A=ae;try {
          return L.apply(this,arguments)
        } finally {
          A=te
        }
      }
    }
  })(dr)),dr
}

var lp;
function D1() {
  return lp||(lp=1,rr.exports=_1()),rr.exports
}

var fr= {
  exports:{}
},ra={};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;
function R1() {
  if(np)return ra;
  np=1;
  var s=br();
  function f(M) {
    var b="https://react.dev/errors/"+M;
    if(1<arguments.length) {
      b+="?args[]="+encodeURIComponent(arguments[1]);
      for(var A=2;A<arguments.length;A++)b+="&args[]="+encodeURIComponent(arguments[A])
    }

    return"Minified React error #"+M+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function r(){}var o= {
    d: {
      f:r,r:function() {
        throw Error(f(522))
      },D:r,C:r,L:r,m:r,X:r,S:r,M:r
    },p:0,findDOMNode:null
  },S=Symbol.for("react.portal"),p=Symbol.for("react.recoverable"),g=Symbol.for("react.optimistic_key");
  function O(M,b,A) {
    var I=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;
    return {
      $$typeof:S,key:I==null?null:I===g?g:""+I,children:M,containerInfo:b,implementation:A
    }
  }

  var z=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function H(M,b) {
    if(M==="font")return"";
    if(typeof b=="string")return b==="use-credentials"?b:""
  }

  return ra.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ra.browser=function(M) {
    return {
      $$typeof:p,_reason:M
    }
  },ra.createPortal=function(M,b) {
    var A=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;
    if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(f(299));
    return O(M,b,null,A)
  },ra.flushSync=function(M) {
    var b=z.T,A=o.p;
    try {
      if(z.T=null,o.p=2,M)return M()
    } finally {
      z.T=b,o.p=A,o.d.f()
    }
  },ra.preconnect=function(M,b) {
    typeof M=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(M,b))
  },ra.prefetchDNS=function(M) {
    typeof M=="string"&&o.d.D(M)
  },ra.preinit=function(M,b) {
    if(typeof M=="string"&&b&&typeof b.as=="string") {
      var A=b.as,I=H(A,b.crossOrigin),Q=typeof b.integrity=="string"?b.integrity:void 0,ie=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;
      A==="style"?o.d.S(M,typeof b.precedence=="string"?b.precedence:void 0, {
        crossOrigin:I,integrity:Q,fetchPriority:ie
      }):A==="script"&&o.d.X(M, {
        crossOrigin:I,integrity:Q,fetchPriority:ie,nonce:typeof b.nonce=="string"?b.nonce:void 0
      })
    }
  },ra.preinitModule=function(M,b) {
    if(typeof M=="string")if(typeof b=="object"&&b!==null) {
      if(b.as==null||b.as==="script") {
        var A=H(b.as,b.crossOrigin);
        o.d.M(M, {
          crossOrigin:A,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0
        })
      }
    } else b==null&&o.d.M(M)
  },ra.preload=function(M,b) {
    if(typeof M=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string") {
      var A=b.as,I=H(A,b.crossOrigin);
      o.d.L(M,A, {
        crossOrigin:I,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0
      })
    }
  },ra.preloadModule=function(M,b) {
    if(typeof M=="string")if(b) {
      var A=H(b.as,b.crossOrigin);
      o.d.m(M, {
        as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:A,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0
      })
    } else o.d.m(M)
  },ra.requestFormReset=function(M) {
    o.d.r(M)
  },ra.unstable_batchedUpdates=function(M,b) {
    return M(b)
  },ra.useFormState=function(M,b,A) {
    return z.H.useFormState(M,b,A)
  },ra.useFormStatus=function() {
    return z.H.useHostTransitionStatus()
  },ra.version="19.3.1",ra
}

var ip;
function U1() {
  if(ip)return fr.exports;
  ip=1;
  function s() {
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
    } catch(f) {
      console.error(f)
    }
  }

  return s(),fr.exports=R1(),fr.exports
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;
function q1() {
  if(up)return Mi;
  up=1;
  var s=D1(),f=br(),r=U1();
  function o(e) {
    var a="https://react.dev/errors/"+e;
    if(1<arguments.length) {
      a+="?args[]="+encodeURIComponent(arguments[1]);
      for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])
    }

    return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }

  function S(e) {
    return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)
  }

  function p(e) {
    for(var a=e,t=a;t&&!t.alternate;)a=t,(a.flags&4098)!==0&&(e=a.return),t=a.return;
    for(;a.return;)a=a.return;
    return a.tag===3?e:null
  }

  function g(e) {
    if(e.tag===13) {
      var a=e.memoizedState;
      if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated
    }

    return null
  }

  function O(e) {
    if(e.tag===31) {
      var a=e.memoizedState;
      if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated
    }

    return null
  }

  function z(e) {
    if(p(e)!==e)throw Error(o(188))
  }

  function H(e) {
    var a=e.alternate;
    if(!a) {
      if(a=p(e),a===null)throw Error(o(188));
      return a!==e?null:e
    }

    for(var t=e,l=a;;) {
      var n=t.return;
      if(n===null)break;
      var i=n.alternate;
      if(i===null) {
        if(l=n.return,l!==null) {
          t=l;
          continue
        }

        break
      }

      if(n.child===i.child) {
        for(i=n.child;i;) {
          if(i===t)return z(n),e;
          if(i===l)return z(n),a;
          i=i.sibling
        }

        throw Error(o(188))
      }

      if(t.return!==l.return)t=n,l=i;
      else {
        for(var c=!1,d=n.child;d;) {
          if(d===t) {
            c=!0,t=n,l=i;
            break
          }

          if(d===l) {
            c=!0,l=n,t=i;
            break
          }

          d=d.sibling
        }

        if(!c) {
          for(d=i.child;d;) {
            if(d===t) {
              c=!0,t=i,l=n;
              break
            }

            if(d===l) {
              c=!0,l=i,t=n;
              break
            }

            d=d.sibling
          }

          if(!c)throw Error(o(189))
        }
      }

      if(t.alternate!==l)throw Error(o(190))
    }

    if(t.tag!==3)throw Error(o(188));
    return t.stateNode.current===t?e:a
  }

  function M(e) {
    var a=e.tag;
    if(a===5||a===26||a===27||a===6)return e;
    for(e=e.child;e!==null;) {
      if(a=M(e),a!==null)return a;
      e=e.sibling
    }

    return null
  }

  function b(e,a,t,l,n,i) {
    for(;e!==null;) {
      if((e.tag===5||e.tag===27||e.tag===6)&&t(e,l,n,i)||(e.tag!==22||e.memoizedState===null)&&(a||e.tag!==5&&e.tag!==27)&&b(e.child,a,t,l,n,i))return!0;
      e=e.sibling
    }

    return!1
  }

  function A(e) {
    for(e=e.return;e!==null;) {
      if(e.tag===3||e.tag===5||e.tag===27)return e;
      e=e.return
    }

    return null
  }

  function I(e) {
    var a=!1;
    for(e=e.return;e!==null&&(e.tag===4&&(a=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;
    return a
  }

  function Q(e) {
    var a=[null,null],t=A(e);
    return t===null||ie(a,e,t.child, {
      foundSelf:!1
    }),a
  }

  function ie(e,a,t,l) {
    for(;t!==null;) {
      if(t===a)l.foundSelf=!0;
      else if(t.tag===5||t.tag===27||t.tag===6) {
        if(l.foundSelf)return e[1]=t,!0;
        e[0]=t
      } else if((t.tag!==22||t.memoizedState===null)&&ie(e,a,t.child,l))return!0;
      t=t.sibling
    }

    return!1
  }

  function ue(e) {
    switch(e.tag) {
      case 5:case 27:case 6:return e.stateNode;
      case 3:return e.stateNode.containerInfo;
      default:throw Error(o(559))
    }
  }

  var U=null,W=null;
  function Ue(e,a,t) {
    return e===t?!0:e===a?(U=e,!0):!1
  }

  function he(e,a,t) {
    return e===t?(W=e,!1):e===a?(W!==null&&(U=e),!0):!1
  }

  function P(e) {
    if(e===null)return null;
    do e=e===null?null:e.return;
    while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);
    return e||null
  }

  function B(e,a,t) {
    for(var l=0,n=e;n;n=t(n))l++;
    n=0;
    for(var i=a;i;i=t(i))n++;
    for(;0<l-n;)e=t(e),l--;
    for(;0<n-l;)a=t(a),n--;
    for(;l--;) {
      if(e===a||a!==null&&e===a.alternate)return e;
      e=t(e),a=t(a)
    }

    return null
  }

  var C=Object.assign,k=Symbol.for("react.element"),Ce=Symbol.for("react.transitional.element"),Pe=Symbol.for("react.portal"),Ie=Symbol.for("react.fragment"),Qe=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Va=Symbol.for("react.consumer"),we=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),de=Symbol.for("react.lazy"),Ze=Symbol.for("react.activity"),Ve=Symbol.for("react.legacy_hidden"),Ga=Symbol.for("react.memo_cache_sentinel"),v=Symbol.for("react.view_transition"),q=Symbol.for("react.recoverable"),K=Symbol.iterator;
  function J(e) {
    return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)
  }

  var pe=Symbol.for("react.client.reference");
  function be(e) {
    if(e==null)return null;
    if(typeof e=="function")return e.$$typeof===pe?null:e.displayName||e.name||null;
    if(typeof e=="string")return e;
    switch(e) {
      case Ie:return"Fragment";
      case Na:return"Profiler";
      case Qe:return"StrictMode";
      case ae:return"Suspense";
      case te:return"SuspenseList";
      case Ze:return"Activity";
      case v:return"ViewTransition"
    }

    if(typeof e=="object")switch(e.$$typeof) {
      case Pe:return"Portal";
      case we:return e.displayName||"Context";
      case Va:return(e._context.displayName||"Context")+".Consumer";
      case L:var a=e.render;
      return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;
      case me:return a=e.displayName||null,a!==null?a:be(e.type)||"Memo";
      case de:a=e._payload,e=e._init;
      try {
        return be(e(a))
      } catch{}
    }

    return null
  }

  var Ne=Array.isArray,X=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,za= {
    pending:!1,data:null,method:null,action:null
  },Wa=[],R=-1;
  function Y(e) {
    return {
      current:e
    }
  }

  function ee(e) {
    0>R||(e.current=Wa[R],Wa[R]=null,R--)
  }

  function Se(e,a) {
    R++,Wa[R]=e.current,e.current=a
  }

  var da=Y(null),dl=Y(null),qt=Y(null),qi=Y(null);
  function Hi(e,a) {
    switch(Se(qt,a),Se(dl,e),Se(da,null),a.nodeType) {
      case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?sh(e):0;
      break;
      default:if(e=a.tagName,a=a.namespaceURI)a=sh(a),e=ch(a,e);
      else switch(e) {
        case"svg":e=1;
        break;
        case"math":e=2;
        break;
        default:e=0
      }
    }

    ee(da),Se(da,e)
  }

  function wl() {
    ee(da),ee(dl),ee(qt)
  }

  function Ts(e) {
    var a=e.memoizedState;
    a!==null&&(Tn._currentValue=a.memoizedState,Se(qi,e)),a=da.current;
    var t=ch(a,e.type);
    a!==t&&(Se(dl,e),Se(da,t))
  }

  function Bi(e) {
    dl.current===e&&(ee(da),ee(dl)),qi.current===e&&(ee(qi),Tn._currentValue=za)
  }

  var Cs,Cr;
  function Ht(e) {
    if(Cs===void 0)try {
      throw Error()
    } catch(t) {
      var a=t.stack.trim().match(/\n( *(at )?)/);
      Cs=a&&a[1]||"",Cr=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""
    }

    return`
`+Cs+e+Cr
  }

  var As=!1;
  function Os(e,a) {
    if(!e||As)return"";
    As=!0;
    var t=Error.prepareStackTrace;
    Error.prepareStackTrace=void 0;
    try {
      var l= {
        DetermineComponentFrameRoot:function() {
          try {
            if(a) {
              var D=function() {
                throw Error()
              };
              if(Object.defineProperty(D.prototype,"props", {
                set:function() {
                  throw Error()
                }
              }),typeof Reflect=="object"&&Reflect.construct) {
                try {
                  Reflect.construct(D,[])
                } catch(w) {
                  var y=w
                }

                Reflect.construct(e,[],D)
              } else {
                try {
                  D.call()
                } catch(w) {
                  y=w
                }

                D=!1;
                try {
                  var N=Object.getOwnPropertyDescriptor(e.prototype,"props");
                  Object.defineProperty(e.prototype,"props", {
                    configurable:!0,set:function() {
                      throw Error()
                    }
                  }),D=!0,new e
                } finally {
                  D&&(N!==void 0?Object.defineProperty(e.prototype,"props",N):delete e.prototype.props)
                }
              }
            } else {
              try {
                throw Error()
              } catch(w) {
                y=w
              }

              (D=e())&&typeof D.catch=="function"&&D.catch(function(){})
            }
          } catch(w) {
            if(w&&y&&typeof w.stack=="string")return[w.stack,y.stack]
          }

          return[null,null]
        }
      };
      l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";
      var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");
      n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name", {
        value:"DetermineComponentFrameRoot"
      });
      var i=l.DetermineComponentFrameRoot(),c=i[0],d=i[1];
      if(c&&d) {
        var m=c.split(`
`),j=d.split(`
`);
        for(n=l=0;l<m.length&&!m[l].includes("DetermineComponentFrameRoot");)l++;
        for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;
        if(l===m.length||n===j.length)for(l=m.length-1,n=j.length-1;1<=l&&0<=n&&m[l]!==j[n];)n--;
        for(;1<=l&&0<=n;l--,n--)if(m[l]!==j[n]) {
          if(l!==1||n!==1)do if(l--,n--,0>n||m[l]!==j[n]) {
            var T=`
`+m[l].replace(" at new "," at ");
            return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T
          } while(1<=l&&0<=n);
          break
        }
      }
    } finally {
      As=!1,Error.prepareStackTrace=t
    }

    return(t=e?e.displayName||e.name:"")?Ht(t):""
  }

  function Ap(e,a) {
    switch(e.tag) {
      case 26:case 27:case 5:return Ht(e.type);
      case 16:return Ht("Lazy");
      case 13:return e.child!==a&&a!==null?Ht("Suspense Fallback"):Ht("Suspense");
      case 19:return Ht("SuspenseList");
      case 0:case 15:return Os(e.type,!1);
      case 11:return Os(e.type.render,!1);
      case 1:return Os(e.type,!0);
      case 31:return Ht("Activity");
      case 30:return Ht("ViewTransition");
      default:return""
    }
  }

  function Ar(e) {
    try {
      var a="",t=null;
      do a+=Ap(e,t),t=e,e=e.return;
      while(e);
      return a
    } catch(l) {
      return`
Error generating stack: `+l.message+`
`+l.stack
    }
  }

  var Ms=Object.prototype.hasOwnProperty,_s=s.unstable_scheduleCallback,Ds=s.unstable_cancelCallback,Op=s.unstable_shouldYield,Mp=s.unstable_requestPaint,Ta=s.unstable_now,_p=s.unstable_getCurrentPriorityLevel,Or=s.unstable_ImmediatePriority,Mr=s.unstable_UserBlockingPriority,wi=s.unstable_NormalPriority,Dp=s.unstable_LowPriority,_r=s.unstable_IdlePriority,Rp=s.log,Up=s.unstable_setDisableYieldValue,Hn=null,Ca=null;
  function Bt(e) {
    if(typeof Rp=="function"&&Up(e),Ca&&typeof Ca.setStrictMode=="function")try {
      Ca.setStrictMode(Hn,e)
    } catch{}
  }

  var Aa=Math.clz32?Math.clz32:Bp,qp=Math.log,Hp=Math.LN2;
  function Bp(e) {
    return e>>>=0,e===0?32:31-(qp(e)/Hp|0)|0
  }

  var Li=256,Vi=262144,Gi=4194304;
  function fl(e) {
    var a=e&42;
    if(a!==0)return a;
    switch(e&-e) {
      case 1:return 1;
      case 2:return 2;
      case 4:return 4;
      case 8:return 8;
      case 16:return 16;
      case 32:return 32;
      case 64:return 64;
      case 128:return 128;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;
      case 262144:case 524288:case 1048576:case 2097152:return e&3932160;
      case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;
      case 67108864:return 67108864;
      case 134217728:return 134217728;
      case 268435456:return 268435456;
      case 536870912:return 536870912;
      case 1073741824:return 0;
      default:return e
    }
  }

  function Yi(e,a,t) {
    var l=e.pendingLanes;
    if(l===0)return 0;
    var n=0,i=e.suspendedLanes,c=e.pingedLanes;
    e=e.warmLanes;
    var d=l&134217727;
    return d!==0?(l=d&~i,l!==0?n=fl(l):(c&=d,c!==0?n=fl(c):t||(t=d&~e,t!==0&&(n=fl(t))))):(d=l&~i,d!==0?n=fl(d):c!==0?n=fl(c):t||(t=l&~e,t!==0&&(n=fl(t)))),n===0?0:a!==0&&a!==n&&(a&i)===0&&(i=n&-n,t=a&-a,i>=t||i===32&&(t&4194048)!==0)?a:n
  }

  function Bn(e,a) {
    return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0
  }

  function Dr(e,a) {
    (a&8)!==0&&(a|=a&32);
    var t=e.entangledLanes;
    if(t!==0)for(e=e.entanglements,t&=a;0<t;) {
      var l=31-Aa(t),n=1<<l;
      a|=e[l],t&=~n
    }

    return a
  }

  function wp(e,a) {
    switch(e) {
      case 1:case 2:case 4:case 8:case 64:return a+250;
      case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;
      case 4194304:case 8388608:case 16777216:case 33554432:return-1;
      case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;
      default:return-1
    }
  }

  function Rr() {
    var e=Gi;
    return Gi<<=1,(Gi&62914560)===0&&(Gi=4194304),e
  }

  function Rs(e) {
    for(var a=[],t=0;31>t;t++)a.push(e);
    return a
  }

  function wn(e,a) {
    e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)
  }

  function Lp(e,a,t,l,n,i) {
    var c=e.pendingLanes;
    e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;
    var d=e.entanglements,m=e.expirationTimes,j=e.hiddenUpdates;
    for(t=c&~t;0<t;) {
      var T=31-Aa(t),D=1<<T;
      d[T]=0,m[T]=-1;
      var y=j[T];
      if(y!==null)for(j[T]=null,T=0;T<y.length;T++) {
        var N=y[T];
        N!==null&&(N.lane&=-536870913)
      }

      t&=~D
    }

    l!==0&&Ur(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~a))
  }

  function Ur(e,a,t) {
    e.pendingLanes|=a,e.suspendedLanes&=~a;
    var l=31-Aa(a);
    e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&261930
  }

  function qr(e,a) {
    var t=e.entangledLanes|=a;
    for(e=e.entanglements;t;) {
      var l=31-Aa(t),n=1<<l;
      n&a|e[l]&a&&(e[l]|=a),t&=~n
    }
  }

  function Hr(e,a) {
    var t=a&-a;
    return t=(t&42)!==0?1:Us(t),(t&(e.suspendedLanes|a))!==0?0:t
  }

  function Us(e) {
    switch(e) {
      case 2:e=1;
      break;
      case 8:e=4;
      break;
      case 32:e=16;
      break;
      case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;
      break;
      case 268435456:e=134217728;
      break;
      default:e=0
    }

    return e
  }

  function qs(e) {
    return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2
  }

  function Br() {
    var e=se.p;
    return e!==0?e:(e=window.event,e===void 0?32:Zh(e.type))
  }

  function wr(e,a) {
    var t=se.p;
    try {
      return se.p=e,a()
    } finally {
      se.p=t
    }
  }

  var gt=Math.random().toString(36).slice(2),na="__reactFiber$"+gt,ya="__reactProps$"+gt,Ll="__reactContainer$"+gt,Lr="__reactEvents$"+gt,Vp="__reactListeners$"+gt,Gp="__reactHandles$"+gt,Vr="__reactResources$"+gt,Ln="__reactMarker$"+gt,Qi="__reactLoad$"+gt;
  function Xi(e) {
    delete e[na],delete e[ya],delete e[Vp],delete e[Gp]
  }

  function ml(e) {
    var a;
    if(a=e[na])return a;
    for(var t=e.parentNode;t;) {
      if(a=t[Ll]||t[na]) {
        if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=zh(e);e!==null;) {
          if(t=e[na])return t;
          e=zh(e)
        }

        return a
      }

      e=t,t=e.parentNode
    }

    return null
  }

  function Vl(e) {
    if(e=e[na]||e[Ll]) {
      var a=e.tag;
      if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e
    }

    return null
  }

  function Vn(e) {
    var a=e.tag;
    if(a===5||a===26||a===27||a===6)return e.stateNode;
    throw Error(o(33))
  }

  function Gl(e) {
    var a=e[Vr];
    return a||(a=e[Vr]= {
      hoistableStyles:new Map,hoistableScripts:new Map
    }),a
  }

  function ea(e) {
    e[Ln]=!0
  }

  function Gr(e) {
    e[Qi]=void 0
  }

  var Yr=new Set,Qr={};
  function hl(e,a) {
    Yl(e,a),Yl(e+"Capture",a)
  }

  function Yl(e,a) {
    for(Qr[e]=a,e=0;e<a.length;e++)Yr.add(a[e])
  }

  var Yp=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Xr={},Zr={};
  function Qp(e) {
    return Ms.call(Zr,e)?!0:Ms.call(Xr,e)?!1:Yp.test(e)?Zr[e]=!0:(Xr[e]=!0,!1)
  }

  var ze=!1;
  function kr() {
    var e=ze;
    return ze=!1,e
  }

  function Zi(e,a,t) {
    if(Qp(a))if(t===null)e.removeAttribute(a);
    else {
      switch(typeof t) {
        case"undefined":case"function":case"symbol":e.removeAttribute(a);
        return;
        case"boolean":var l=a.toLowerCase().slice(0,5);
        if(l!=="data-"&&l!=="aria-") {
          e.removeAttribute(a);
          return
        }
      }

      e.setAttribute(a,t)
    }
  }

  function ki(e,a,t) {
    if(t===null)e.removeAttribute(a);
    else {
      switch(typeof t) {
        case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);
        return
      }

      e.setAttribute(a,t)
    }
  }

  function yt(e,a,t,l) {
    if(l===null)e.removeAttribute(t);
    else {
      switch(typeof l) {
        case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);
        return
      }

      e.setAttributeNS(a,t,l)
    }
  }

  function Oa(e) {
    switch(typeof e) {
      case"bigint":case"boolean":case"number":case"string":case"undefined":return e;
      case"object":return e;
      default:return""
    }
  }

  function Kr(e) {
    var a=e.type;
    return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")
  }

  function Xp(e,a,t) {
    var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);
    if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function") {
      var n=l.get,i=l.set;
      return Object.defineProperty(e,a, {
        configurable:!0,get:function() {
          return n.call(this)
        },set:function(c) {
          t=""+c,i.call(this,c)
        }
      }),Object.defineProperty(e,a, {
        enumerable:l.enumerable
      }), {
        getValue:function() {
          return t
        },setValue:function(c) {
          t=""+c
        },stopTracking:function() {
          e._valueTracker=null,delete e[a]
        }
      }
    }
  }

  function Hs(e) {
    if(!e._valueTracker) {
      var a=Kr(e)?"checked":"value";
      e._valueTracker=Xp(e,a,""+e[a])
    }
  }

  function Jr(e) {
    if(!e)return!1;
    var a=e._valueTracker;
    if(!a)return!0;
    var t=a.getValue(),l="";
    return e&&(l=Kr(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1
  }

  var Zp=/[\n"\\]/g;
  function Ya(e) {
    return e.replace(Zp,function(a) {
      return"\\"+a.charCodeAt(0).toString(16)+" "
    })
  }

  function Bs(e,a,t,l,n,i,c,d) {
    e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),a!=null?c==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Oa(a)):e.value!==""+Oa(a)&&(e.value=""+Oa(a)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),a!=null?c==="number"&&e.value==a?ws(e,Oa(e.value)):ws(e,Oa(a)):t!=null?ws(e,Oa(t)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.name=""+Oa(d):e.removeAttribute("name")
  }

  function $r(e,a,t,l,n,i,c,d) {
    if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),a!=null||t!=null) {
      if(!(i!=="submit"&&i!=="reset"||a!=null)) {
        Hs(e);
        return
      }

      t=t!=null?""+Oa(t):"",a=a!=null?""+Oa(a):t,d||a===e.value||(e.value=a),e.defaultValue=a
    }

    l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=d?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),Hs(e)
  }

  function ws(e,a) {
    e.defaultValue!==""+a&&(e.defaultValue=""+a)
  }

  function Ql(e,a,t,l) {
    if(e=e.options,a) {
      a={};
      for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;
      for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)
    } else {
      for(t=""+Oa(t),a=null,n=0;n<e.length;n++) {
        if(e[n].value===t) {
          e[n].selected=!0,l&&(e[n].defaultSelected=!0);
          return
        }

        a!==null||e[n].disabled||(a=e[n])
      }

      a!==null&&(a.selected=!0)
    }
  }

  function Fr(e,a,t) {
    if(a!=null&&(a=""+Oa(a),a!==e.value&&(e.value=a),t==null)) {
      e.defaultValue!==a&&(e.defaultValue=a);
      return
    }

    e.defaultValue=t!=null?""+Oa(t):""
  }

  function Ir(e,a,t,l) {
    if(a==null) {
      if(l!=null) {
        if(t!=null)throw Error(o(92));
        if(Ne(l)) {
          if(1<l.length)throw Error(o(93));
          l=l[0]
        }

        t=l
      }

      t==null&&(t=""),a=t
    }

    t=Oa(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l),Hs(e)
  }

  function Xl(e,a) {
    if(a) {
      var t=e.firstChild;
      if(t&&t===e.lastChild&&t.nodeType===3) {
        t.nodeValue=a;
        return
      }
    }

    e.textContent=a
  }

  var kp=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Wr(e,a,t) {
    var l=a.indexOf("--")===0;
    t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||kp.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"
  }

  function Pr(e,a,t) {
    if(a!=null&&typeof a!="object")throw Error(o(62));
    if(e=e.style,t!=null) {
      for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="",ze=!0);
      for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&(Wr(e,n,l),ze=!0)
    } else for(var i in a)a.hasOwnProperty(i)&&Wr(e,i,a[i])
  }

  function Ls(e) {
    if(e.indexOf("-")===-1)return!1;
    switch(e) {
      case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;
      default:return!0
    }
  }

  var Kp=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Jp=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ki(e) {
    return Jp.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e
  }

  function ut(){}var Vs=null;
  function Gs(e) {
    return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e
  }

  var Zl=null,kl=null;
  function ed(e) {
    var a=Vl(e);
    if(a&&(e=a.stateNode)) {
      var t=e[ya]||null;
      e:switch(e=a.stateNode,a.type) {
        case"input":if(Bs(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null) {
          for(t=e;t.parentNode;)t=t.parentNode;
          for(t=t.querySelectorAll('input[name="'+Ya(""+a)+'"][type="radio"]'),a=0;a<t.length;a++) {
            var l=t[a];
            if(l!==e&&l.form===e.form) {
              var n=l[ya]||null;
              if(!n)throw Error(o(90));
              Bs(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)
            }
          }

          for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Jr(l)
        }

        break e;
        case"textarea":Fr(e,t.value,t.defaultValue);
        break e;
        case"select":a=t.value,a!=null&&Ql(e,!!t.multiple,a,!1)
      }
    }
  }

  var Ys=!1;
  function ad(e,a,t) {
    if(Ys)return e(a,t);
    Ys=!0;
    try {
      var l=e(a);
      return l
    } finally {
      if(Ys=!1,(Zl!==null||kl!==null)&&(Ku(),Zl&&(a=Zl,e=kl,kl=Zl=null,ed(a),e)))for(a=0;a<e.length;a++)ed(e[a])
    }
  }

  function Gn(e,a) {
    var t=e.stateNode;
    if(t===null)return null;
    var l=t[ya]||null;
    if(l===null)return null;
    t=l[a];
    e:switch(a) {
      case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;
      break e;
      default:e=!1
    }

    if(e)return null;
    if(t&&typeof t!="function")throw Error(o(231,a,typeof t));
    return t
  }

  var xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qs=!1;
  if(xt)try {
    var Yn={};
    Object.defineProperty(Yn,"passive", {
      get:function() {
        Qs=!0
      }
    }),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)
  } catch {
    Qs=!1
  }

  var wt=null,Xs=null,Ji=null;
  function td() {
    if(Ji)return Ji;
    var e,a=Xs,t=a.length,l,n="value"in wt?wt.value:wt.textContent,i=n.length;
    for(e=0;e<t&&a[e]===n[e];e++);
    var c=t-e;
    for(l=1;l<=c&&a[t-l]===n[i-l];l++);
    return Ji=n.slice(e,1<l?1-l:void 0)
  }

  function $i(e) {
    var a=e.keyCode;
    return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0
  }

  function Fi() {
    return!0
  }

  function ld() {
    return!1
  }

  function ma(e) {
    function a(t,l,n,i,c) {
      this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;
      for(var d in e)e.hasOwnProperty(d)&&(t=e[d],this[d]=t?t(i):i[d]);
      return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Fi:ld,this.isPropagationStopped=ld,this
    }

    return C(a.prototype, {
      preventDefault:function() {
        this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Fi)
      },stopPropagation:function() {
        var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Fi)
      },persist:function(){},isPersistent:Fi
    }),a
  }

  var Lt= {
    eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e) {
      return e.timeStamp||Date.now()
    },defaultPrevented:0,isTrusted:0
  },Ii=ma(Lt),Qn=C({},Lt, {
    view:0,detail:0
  }),$p=ma(Qn),Zs,ks,Xn,Wi=C({},Qn, {
    screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Js,button:0,buttons:0,relatedTarget:function(e) {
      return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget
    },movementX:function(e) {
      return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(Zs=e.screenX-Xn.screenX,ks=e.screenY-Xn.screenY):ks=Zs=0,Xn=e),Zs)
    },movementY:function(e) {
      return"movementY"in e?e.movementY:ks
    }
  }),nd=ma(Wi),Fp=C({},Wi, {
    dataTransfer:0
  }),Ip=ma(Fp),Wp=C({},Qn, {
    relatedTarget:0
  }),Ks=ma(Wp),Pp=C({},Lt, {
    animationName:0,elapsedTime:0,pseudoElement:0
  }),e0=ma(Pp),a0=C({},Lt, {
    clipboardData:function(e) {
      return"clipboardData"in e?e.clipboardData:window.clipboardData
    }
  }),t0=ma(a0),l0=C({},Lt, {
    data:0
  }),id=ma(l0),n0= {
    Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"
  },i0= {
    8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"
  },u0= {
    Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"
  };
  function s0(e) {
    var a=this.nativeEvent;
    return a.getModifierState?a.getModifierState(e):(e=u0[e])?!!a[e]:!1
  }

  function Js() {
    return s0
  }

  var c0=C({},Qn, {
    key:function(e) {
      if(e.key) {
        var a=n0[e.key]||e.key;if(a!=="Unidentified")return a
      }

      return e.type==="keypress"?(e=$i(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i0[e.keyCode]||"Unidentified":""
    },code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Js,charCode:function(e) {
      return e.type==="keypress"?$i(e):0
    },keyCode:function(e) {
      return e.type==="keydown"||e.type==="keyup"?e.keyCode:0
    },which:function(e) {
      return e.type==="keypress"?$i(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0
    }
  }),o0=ma(c0),r0=C({},Wi, {
    pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0
  }),ud=ma(r0),d0=C({},Lt, {
    submitter:0
  }),f0=ma(d0),m0=C({},Qn, {
    touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Js
  }),h0=ma(m0),p0=C({},Lt, {
    propertyName:0,elapsedTime:0,pseudoElement:0
  }),v0=ma(p0),g0=C({},Wi, {
    deltaX:function(e) {
      return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0
    },deltaY:function(e) {
      return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0
    },deltaZ:0,deltaMode:0
  }),y0=ma(g0),x0=C({},Lt, {
    newState:0,oldState:0,source:0
  }),j0=ma(x0),b0=[9,13,27,32],$s=xt&&"CompositionEvent"in window,Zn=null;
  xt&&"documentMode"in document&&(Zn=document.documentMode);
  var S0=xt&&"TextEvent"in window&&!Zn,sd=xt&&(!$s||Zn&&8<Zn&&11>=Zn),cd=" ",od=!1;
  function rd(e,a) {
    switch(e) {
      case"keyup":return b0.indexOf(a.keyCode)!==-1;
      case"keydown":return a.keyCode!==229;
      case"keypress":case"mousedown":case"focusout":return!0;
      default:return!1
    }
  }

  function dd(e) {
    return e=e.detail,typeof e=="object"&&"data"in e?e.data:null
  }

  var Kl=!1;
  function E0(e,a) {
    switch(e) {
      case"compositionend":return dd(a);
      case"keypress":return a.which!==32?null:(od=!0,cd);
      case"textInput":return e=a.data,e===cd&&od?null:e;
      default:return null
    }
  }

  function N0(e,a) {
    if(Kl)return e==="compositionend"||!$s&&rd(e,a)?(e=td(),Ji=Xs=wt=null,Kl=!1,e):null;
    switch(e) {
      case"paste":return null;
      case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey) {
        if(a.char&&1<a.char.length)return a.char;
        if(a.which)return String.fromCharCode(a.which)
      }

      return null;
      case"compositionend":return sd&&a.locale!=="ko"?null:a.data;
      default:return null
    }
  }

  var z0= {
    color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0
  };
  function fd(e) {
    var a=e&&e.nodeName&&e.nodeName.toLowerCase();
    return a==="input"?!!z0[e.type]:a==="textarea"
  }

  function md(e,a,t,l) {
    Zl?kl?kl.push(l):kl=[l]:Zl=l,a=Pu(a,"onChange"),0<a.length&&(t=new Ii("onChange","change",null,t,l),e.push( {
      event:t,listeners:a
    }))
  }

  var kn=null,Kn=null;
  function T0(e) {
    ah(e,0)
  }

  function Pi(e) {
    var a=Vn(e);
    if(Jr(a))return e
  }

  function hd(e,a) {
    if(e==="change")return a
  }

  var pd=!1;
  if(xt) {
    var Fs;
    if(xt) {
      var Is="oninput"in document;
      if(!Is) {
        var vd=document.createElement("div");
        vd.setAttribute("oninput","return;"),Is=typeof vd.oninput=="function"
      }

      Fs=Is
    } else Fs=!1;
    pd=Fs&&(!document.documentMode||9<document.documentMode)
  }

  function gd() {
    kn&&(kn.detachEvent("onpropertychange",yd),Kn=kn=null)
  }

  function yd(e) {
    if(e.propertyName==="value"&&Pi(Kn)) {
      var a=[];
      md(a,Kn,e,Gs(e)),ad(T0,a)
    }
  }

  function C0(e,a,t) {
    e==="focusin"?(gd(),kn=a,Kn=t,kn.attachEvent("onpropertychange",yd)):e==="focusout"&&gd()
  }

  function A0(e) {
    if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Kn)
  }

  function O0(e,a) {
    if(e==="click")return Pi(a)
  }

  function M0(e,a) {
    if(e==="input"||e==="change")return Pi(a)
  }

  function _0(e,a) {
    return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a
  }

  var Ma=typeof Object.is=="function"?Object.is:_0;
  function Jn(e,a) {
    if(Ma(e,a))return!0;
    if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;
    var t=Object.keys(e),l=Object.keys(a);
    if(t.length!==l.length)return!1;
    for(l=0;l<t.length;l++) {
      var n=t[l];
      if(!Ms.call(a,n)||!Ma(e[n],a[n]))return!1
    }

    return!0
  }

  function Ws(e) {
    if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;
    try {
      return e.activeElement||e.body
    } catch {
      return e.body
    }
  }

  function xd(e) {
    for(;e&&e.firstChild;)e=e.firstChild;
    return e
  }

  function jd(e,a) {
    var t=xd(e);
    e=0;
    for(var l;t;) {
      if(t.nodeType===3) {
        if(l=e+t.textContent.length,e<=a&&l>=a)return {
          node:t,offset:a-e
        };
        e=l
      }

      e: {
        for(;t;) {
          if(t.nextSibling) {
            t=t.nextSibling;
            break e
          }

          t=t.parentNode
        }

        t=void 0
      }

      t=xd(t)
    }
  }

  function bd(e,a) {
    return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?bd(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1
  }

  function Sd(e) {
    e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;
    for(var a=Ws(e.document);a instanceof e.HTMLIFrameElement;) {
      try {
        var t=typeof a.contentWindow.location.href=="string"
      } catch {
        t=!1
      }

      if(t)e=a.contentWindow;
      else break;
      a=Ws(e.document)
    }

    return a
  }

  function Ps(e) {
    var a=e&&e.nodeName&&e.nodeName.toLowerCase();
    return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")
  }

  var D0=xt&&"documentMode"in document&&11>=document.documentMode,Jl=null,ec=null,$n=null,ac=!1;
  function Ed(e,a,t) {
    var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;
    ac||Jl==null||Jl!==Ws(l)||(l=Jl,"selectionStart"in l&&Ps(l)?l= {
      start:l.selectionStart,end:l.selectionEnd
    }:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l= {
      anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset
    }),$n&&Jn($n,l)||($n=l,l=Pu(ec,"onSelect"),0<l.length&&(a=new Ii("onSelect","select",null,a,t),e.push( {
      event:a,listeners:l
    }),a.target=Jl)))
  }

  function pl(e,a) {
    var t={};
    return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t
  }

  var $l= {
    animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionrun:pl("Transition","TransitionRun"),transitionstart:pl("Transition","TransitionStart"),transitioncancel:pl("Transition","TransitionCancel"),transitionend:pl("Transition","TransitionEnd")
  },tc={},Nd={};
  xt&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete $l.animationend.animation,delete $l.animationiteration.animation,delete $l.animationstart.animation),"TransitionEvent"in window||delete $l.transitionend.transition);
  function vl(e) {
    if(tc[e])return tc[e];
    if(!$l[e])return e;
    var a=$l[e],t;
    for(t in a)if(a.hasOwnProperty(t)&&t in Nd)return tc[e]=a[t];
    return e
  }

  var zd=vl("animationend"),Td=vl("animationiteration"),Cd=vl("animationstart"),R0=vl("transitionrun"),U0=vl("transitionstart"),q0=vl("transitioncancel"),Ad=vl("transitionend"),Od=new Map,lc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  lc.push("scrollEnd");
  function Pa(e,a) {
    Od.set(e,a),hl(a,[e])
  }

  var H0=0;
  function jt(e,a) {
    if(e.name!=null&&e.name!=="auto")return e.name;
    if(a.autoName!==null)return a.autoName;
    e=lt.identifierPrefix;
    var t=H0++;
    return e="_"+e+"t_"+t.toString(32)+"_",a.autoName=e
  }

  function Md(e) {
    if(e==null||typeof e=="string")return e;
    var a=null,t=vn;
    if(t!==null)for(var l=0;l<t.length;l++) {
      var n=e[t[l]];
      if(n!=null) {
        if(n==="none")return"none";
        a=a==null?n:a+(" "+n)
      }
    }

    return a??e.default
  }

  function bt(e,a) {
    return e=Md(e),a=Md(a),a==null?e==="auto"?null:e:a==="auto"?null:a
  }

  var eu=typeof reportError=="function"?reportError:function(e) {
    if(typeof window=="object"&&typeof window.ErrorEvent=="function") {
      var a=new window.ErrorEvent("error", {
        bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e
      });
      if(!window.dispatchEvent(a))return
    } else if(typeof process=="object"&&typeof process.emit=="function") {
      process.emit("uncaughtException",e);
      return
    }

    console.error(e)
  },Qa=[],Fl=0,nc=0;
  function au() {
    for(var e=Fl,a=nc=Fl=0;a<e;) {
      var t=Qa[a];
      Qa[a++]=null;
      var l=Qa[a];
      Qa[a++]=null;
      var n=Qa[a];
      Qa[a++]=null;
      var i=Qa[a];
      if(Qa[a++]=null,l!==null&&n!==null) {
        var c=l.pending;
        c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n
      }

      i!==0&&_d(t,n,i)
    }
  }

  function tu(e,a,t,l) {
    Qa[Fl++]=e,Qa[Fl++]=a,Qa[Fl++]=t,Qa[Fl++]=l,nc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)
  }

  function ic(e,a,t,l) {
    return tu(e,a,t,l),lu(e)
  }

  function gl(e,a) {
    return tu(e,null,null,a),lu(e)
  }

  function _d(e,a,t) {
    e.lanes|=t;
    var l=e.alternate;
    l!==null&&(l.lanes|=t);
    for(var n=!1,i=e.return;i!==null;)i.childLanes|=t,l=i.alternate,l!==null&&(l.childLanes|=t),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;
    return e.tag===3?(i=e.stateNode,n&&a!==null&&(n=31-Aa(t),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),i):null
  }

  function lu(e) {
    if(50<gi)throw gi=0,ku=null,Error(o(185));
    for(var a=e.return;a!==null;)e=a,a=e.return;
    return e.tag===3?e.stateNode:null
  }

  var Il={};
  function B0(e,a,t,l) {
    this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null
  }

  function xa(e,a,t,l) {
    return new B0(e,a,t,l)
  }

  function uc(e) {
    return e=e.prototype,!(!e||!e.isReactComponent)
  }

  function St(e,a) {
    var t=e.alternate;
    return t===null?(t=xa(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&1206910976,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null: {
      lanes:a.lanes,firstContext:a.firstContext
    },t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t
  }

  function Dd(e,a) {
    e.flags&=1206910978;
    var t=e.alternate;
    return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null: {
      lanes:a.lanes,firstContext:a.firstContext
    }),e
  }

  function nu(e,a,t,l,n,i) {
    var c=0;
    if(l=e,typeof l=="function")uc(l)&&(c=1);
    else if(typeof l=="string")c=d1(e,t,da.current)?26:e==="html"||e==="head"||e==="body"?27:5;
    else e:switch(l) {
      case Ze:return e=xa(31,t,a,n),e.elementType=Ze,e.lanes=i,e;
      case Ie:return yl(t.children,n,i,a);
      case Qe:c=8,n|=24;
      break;
      case Na:return e=xa(12,t,a,n|2),e.elementType=Na,e.lanes=i,e;
      case ae:return e=xa(13,t,a,n),e.elementType=ae,e.lanes=i,e;
      case te:return e=xa(19,t,a,n),e.elementType=te,e.lanes=i,e;
      case Ve:case v:return e=n|32,e=xa(30,t,a,e),e.elementType=v,e.lanes=i,e.stateNode= {
        autoName:null,paired:null,clones:null,ref:null
      },e;
      default:if(typeof l=="object"&&l!==null)switch(l.$$typeof) {
        case we:c=10;
        break e;
        case Va:c=9;
        break e;
        case L:c=11;
        break e;
        case me:c=14;
        break e;
        case de:c=16,l=null;
        break e
      }

      c=29,t=Error(o(130,e===null?"null":typeof e,"")),l=null
    }

    return a=xa(c,t,a,n),a.elementType=e,a.type=l,a.lanes=i,a
  }

  function yl(e,a,t,l) {
    return e=xa(7,e,l,a),e.lanes=t,e
  }

  function sc(e,a,t) {
    return e=xa(6,e,null,a),e.lanes=t,e
  }

  function Rd(e) {
    var a=xa(18,null,null,0);
    return a.stateNode=e,a
  }

  function cc(e,a,t) {
    return a=xa(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode= {
      containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation
    },a
  }

  var Ud=new WeakMap;
  function Xa(e,a) {
    if(typeof e=="object"&&e!==null) {
      var t=Ud.get(e);
      return t!==void 0?t:(a= {
        value:e,source:a,stack:Ar(a)
      },Ud.set(e,a),a)
    }

    return {
      value:e,source:a,stack:Ar(a)
    }
  }

  var Wl=[],Pl=0,iu=null,Fn=0,Za=[],ka=0,Vt=null,st=1,ct="";
  function Et(e,a) {
    Wl[Pl++]=Fn,Wl[Pl++]=iu,iu=e,Fn=a
  }

  function qd(e,a,t) {
    Za[ka++]=st,Za[ka++]=ct,Za[ka++]=Vt,Vt=e;
    var l=st;
    e=ct;
    var n=32-Aa(l)-1;
    l&=~(1<<n),t+=1;
    var i=32-Aa(a)+n;
    if(30<i) {
      var c=n-n%5;
      i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,st=1<<32-Aa(a)+n|t<<n|l,ct=i+e
    } else st=1<<i|t<<n|l,ct=e
  }

  function uu(e) {
    e.return!==null&&(Et(e,1),qd(e,1,0))
  }

  function oc(e) {
    for(;e===iu;)iu=Wl[--Pl],Wl[Pl]=null,Fn=Wl[--Pl],Wl[Pl]=null;
    for(;e===Vt;)Vt=Za[--ka],Za[ka]=null,ct=Za[--ka],Za[ka]=null,st=Za[--ka],Za[ka]=null
  }

  function Hd(e,a) {
    Za[ka++]=st,Za[ka++]=ct,Za[ka++]=Vt,st=a.id,ct=a.overflow,Vt=e
  }

  var aa=null,qe=null,fe=!1,Gt=null,Ka=!1,rc=Error(o(519));
  function Yt(e) {
    var a=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));
    throw In(Xa(a,e)),rc
  }

  function Bd(e) {
    var a=e.stateNode,t=e.type,l=e.memoizedProps;
    switch(a[na]=e,a[ya]=l,t) {
      case"dialog":ge("cancel",a),ge("close",a);
      break;
      case"iframe":case"object":case"embed":ge("load",a);
      break;
      case"video":case"audio":for(t=0;t<xi.length;t++)ge(xi[t],a);
      break;
      case"source":ge("error",a);
      break;
      case"img":case"image":case"link":ge("error",a),ge("load",a);
      break;
      case"details":ge("toggle",a);
      break;
      case"input":ge("invalid",a),$r(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);
      break;
      case"select":ge("invalid",a);
      break;
      case"textarea":ge("invalid",a),Ir(a,l.value,l.defaultValue,l.children)
    }

    t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||ih(a.textContent,t)?(l.popover!=null&&(ge("beforetoggle",a),ge("toggle",a)),l.onScroll!=null&&ge("scroll",a),l.onScrollEnd!=null&&ge("scrollend",a),l.onClick!=null&&(a.onclick=ut),a=!0):a=!1,a||Yt(e,!0)
  }

  function su(e) {
    for(aa=e.return;aa;)switch(aa.tag) {
      case 5:case 31:case 13:Ka=!1;
      return;
      case 27:case 3:Ka=!0;
      return;
      default:aa=aa.return
    }
  }

  function en(e) {
    if(e!==aa)return!1;
    if(!fe)return su(e),fe=!0,!1;
    var a=e.tag,t;
    if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Go(e.type,e.memoizedProps)),t=!t),t&&qe&&Yt(e),su(e),a===13) {
      if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));
      qe=Nh(e)
    } else if(a===31) {
      if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));
      qe=Nh(e)
    } else a===27?(a=qe,nl(e.type)?(e=Fo,Fo=null,qe=e):qe=a):qe=aa?$a(e.stateNode.nextSibling):null;
    return!0
  }

  function xl() {
    qe=aa=null,fe=!1
  }

  function dc() {
    var e=Gt;
    return e!==null&&(Sa===null?Sa=e:Sa.push.apply(Sa,e),Gt=null),e
  }

  function In(e) {
    Gt===null?Gt=[e]:Gt.push(e)
  }

  var fc=Y(null),jl=null,Nt=null;
  function Qt(e,a,t) {
    Se(fc,a._currentValue),a._currentValue=t
  }

  function zt(e) {
    e._currentValue=fc.current,ee(fc)
  }

  function cu(e,a,t) {
    for(;e!==null;) {
      var l=e.alternate;
      if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;
      e=e.return
    }
  }

  function mc(e,a,t,l) {
    var n=e.child;
    for(n!==null&&(n.return=e);n!==null;) {
      var i=n.dependencies;
      if(i!==null) {
        var c=n.child;
        i=i.firstContext;
        e:for(;i!==null;) {
          var d=i;
          i=n;
          for(var m=0;m<a.length;m++)if(d.context===a[m]) {
            i.lanes|=t,d=i.alternate,d!==null&&(d.lanes|=t),cu(i.return,t,e),l||(c=null);
            break e
          }

          i=d.next
        }
      } else if(n.tag===18) {
        if(c=n.return,c===null)throw Error(o(341));
        c.lanes|=t,i=c.alternate,i!==null&&(i.lanes|=t),cu(c,t,e),c=null
      } else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=t,c=n.alternate,c!==null&&(c.lanes|=t),cu(n.return,t,e),c=n.child,c=c!==null?c.sibling:null):c=n.child;
      if(c!==null)c.return=n;
      else for(c=n;c!==null;) {
        if(c===e) {
          c=null;
          break
        }

        if(n=c.sibling,n!==null) {
          n.return=c.return,c=n;
          break
        }

        c=c.return
      }

      n=c
    }
  }

  function bl(e,a,t,l) {
    e=null;
    for(var n=a,i=!1;n!==null;) {
      if(!i) {
        if((n.flags&524288)!==0)i=!0;
        else if((n.flags&262144)!==0)break
      }

      if(n.tag===10) {
        var c=n.alternate;
        if(c===null)throw Error(o(387));
        if(c=c.memoizedProps,c!==null) {
          var d=n.type;
          Ma(n.pendingProps.value,c.value)||(e!==null?e.push(d):e=[d])
        }
      } else if(n===qi.current) {
        if(c=n.alternate,c===null)throw Error(o(387));
        c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Tn):e=[Tn])
      }

      n=n.return
    }

    return e!==null&&mc(a,e,t,l),a.flags|=262144,e!==null
  }

  function ou(e) {
    for(e=e.firstContext;e!==null;) {
      if(!Ma(e.context._currentValue,e.memoizedValue))return!0;
      e=e.next
    }

    return!1
  }

  function Sl(e) {
    jl=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)
  }

  function ia(e) {
    return wd(jl,e)
  }

  function ru(e,a) {
    return jl===null&&Sl(e),wd(e,a)
  }

  function wd(e,a) {
    var t=a._currentValue;
    if(a= {
      context:a,memoizedValue:t,next:null
    },Nt===null) {
      if(e===null)throw Error(o(308));
      Nt=a,e.dependencies= {
        lanes:0,firstContext:a
      },e.flags|=524288
    } else Nt=Nt.next=a;
    return t
  }

  var w0=typeof AbortController<"u"?AbortController:function() {
    var e=[],a=this.signal= {
      aborted:!1,addEventListener:function(t,l) {
        e.push(l)
      }
    };
    this.abort=function() {
      a.aborted=!0,e.forEach(function(t) {
        return t()
      })
    }
  },L0=s.unstable_scheduleCallback,V0=s.unstable_NormalPriority,ke= {
    $$typeof:we,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0
  };
  function hc() {
    return {
      controller:new w0,data:new Map,refCount:0
    }
  }

  function Wn(e) {
    e.refCount--,e.refCount===0&&L0(V0,function() {
      e.controller.abort()
    })
  }

  function Ld(e,a) {
    if((e.pendingLanes&4194048)!==0) {
      var t=e.transitionTypes;
      for(t===null&&(t=e.transitionTypes=[]),e=0;e<a.length;e++) {
        var l=a[e];
        t.indexOf(l)===-1&&t.push(l)
      }
    }
  }

  var Pn=null;
  function G0(e) {
    var a=e.transitionTypes;
    return e.transitionTypes=null,a
  }

  var ei=null,pc=0,El=0,an=null;
  function Y0(e,a) {
    if(ei===null) {
      var t=ei=[];
      pc=0,El=Do(),an= {
        status:"pending",value:void 0,then:function(l) {
          t.push(l)
        }
      }
    }

    return pc++,a.then(Vd,Vd),a
  }

  function Vd() {
    if(--pc===0&&(Pn=null,ei!==null)) {
      an!==null&&(an.status="fulfilled");
      var e=ei;
      ei=null,El=0,an=null;
      for(var a=0;a<e.length;a++)(0,e[a])()
    }
  }

  function Q0(e,a) {
    var t=[],l= {
      status:"pending",value:null,reason:null,then:function(n) {
        t.push(n)
      }
    };
    return e.then(function() {
      l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)
    },function(n) {
      for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)
    }),l
  }

  var Gd=X.S;
  X.S=function(e,a) {
    if(Um=Ta(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Y0(e,a),Pn!==null)for(var t=jn;t!==null;)Ld(t,Pn),t=t.next;
    if(t=e.types,t!==null) {
      for(var l=jn;l!==null;)Ld(l,t),l=l.next;
      if(El!==0) {
        l=Pn,l===null&&(l=Pn=[]);
        for(var n=0;n<t.length;n++) {
          var i=t[n];
          l.indexOf(i)===-1&&l.push(i)
        }
      }
    }

    Gd!==null&&Gd(e,a)
  };
  var Nl=Y(null);
  function vc() {
    var e=Nl.current;
    return e!==null?e:Re.pooledCache
  }

  function du(e,a) {
    a===null?Se(Nl,Nl.current):Se(Nl,a.pool)
  }

  function Yd() {
    var e=vc();
    return e===null?null: {
      parent:ke._currentValue,pool:e
    }
  }

  var tn=Error(o(460)),gc=Error(o(474)),fu=Error(o(542)),mu= {
    then:function(){}
  };
  function Qd(e) {
    return e=e.status,e==="fulfilled"||e==="rejected"
  }

  function Xd(e,a,t) {
    switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(ut,ut),a=t),a.status) {
      case"fulfilled":return a.value;
      case"rejected":throw e=a.reason,kd(e),e===void 0&&!("reason"in a)?Error(o(600)):e;
      default:if(typeof a.status=="string")a.then(ut,ut);
      else {
        if(e=Re,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));
        e=a,e.status="pending",e.then(function(l) {
          if(a.status==="pending") {
            var n=a;n.status="fulfilled",n.value=l
          }
        },function(l) {
          if(a.status==="pending") {
            var n=a;n.status="rejected",n.reason=l
          }
        })
      }

      switch(a.status) {
        case"fulfilled":return a.value;
        case"rejected":throw e=a.reason,kd(e),e
      }

      throw Tl=a,tn
    }
  }

  function zl(e) {
    try {
      var a=e._init;
      return a(e._payload)
    } catch(t) {
      throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(Tl=t,tn):t
    }
  }

  var Tl=null;
  function Zd() {
    if(Tl===null)throw Error(o(459));
    var e=Tl;
    return Tl=null,e
  }

  function kd(e) {
    if(e===tn||e===fu)throw Error(o(483))
  }

  var ln=null,ai=0;
  function hu(e) {
    var a=ai;
    return ai+=1,ln===null&&(ln=[]),Xd(ln,e,a)
  }

  function Xt(e,a) {
    a=a.props.ref,e.ref=a!==void 0?a:null
  }

  function pu(e,a) {
    throw a.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(a),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))
  }

  function Kd(e) {
    function a(x,h) {
      if(e) {
        var E=x.deletions;
        E===null?(x.deletions=[h],x.flags|=16):E.push(h)
      }
    }

    function t(x,h) {
      if(!e)return null;
      for(;h!==null;)a(x,h),h=h.sibling;
      return null
    }

    function l(x) {
      for(var h=new Map;x!==null;)x.key===null?h.set(x.index,x):h.set(x.key,x),x=x.sibling;
      return h
    }

    function n(x,h) {
      return x=St(x,h),x.index=0,x.sibling=null,x
    }

    function i(x,h,E) {
      return x.index=E,e?(E=x.alternate,E!==null?(E=E.index,E<h?(x.flags|=2,h):E):(x.flags|=134217730,h)):(x.flags|=1048576,h)
    }

    function c(x) {
      return e&&x.alternate===null&&(x.flags|=134217730),x
    }

    function d(x,h,E,_) {
      return h===null||h.tag!==6?(h=sc(E,x.mode,_),h.return=x,h):(h=n(h,E),h.return=x,h)
    }

    function m(x,h,E,_) {
      var G=E.type;
      return G===Ie?(x=T(x,h,E.props.children,_,E.key),Xt(x,E),x):h!==null&&(h.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===de&&zl(G)===h.type)?(h=n(h,E.props),Xt(h,E),h.return=x,h):(h=nu(E.type,E.key,E.props,null,x.mode,_),Xt(h,E),h.return=x,h)
    }

    function j(x,h,E,_) {
      return h===null||h.tag!==4||h.stateNode.containerInfo!==E.containerInfo||h.stateNode.implementation!==E.implementation?(h=cc(E,x.mode,_),h.return=x,h):(h=n(h,E.children||[]),h.return=x,h)
    }

    function T(x,h,E,_,G) {
      return h===null||h.tag!==7?(h=yl(E,x.mode,_,G),h.return=x,h):(h=n(h,E),h.return=x,h)
    }

    function D(x,h,E) {
      if(typeof h=="string"&&h!==""||typeof h=="number"||typeof h=="bigint")return h=sc(""+h,x.mode,E),h.return=x,h;
      if(typeof h=="object"&&h!==null) {
        switch(h.$$typeof) {
          case Ce:return E=nu(h.type,h.key,h.props,null,x.mode,E),Xt(E,h),E.return=x,E;
          case Pe:return h=cc(h,x.mode,E),h.return=x,h;
          case de:return h=zl(h),D(x,h,E)
        }

        if(Ne(h)||J(h))return h=yl(h,x.mode,E,null),h.return=x,h;
        if(typeof h.then=="function")return D(x,hu(h),E);
        if(h.$$typeof===we)return D(x,ru(x,h),E);
        pu(x,h)
      }

      return null
    }

    function y(x,h,E,_) {
      var G=h!==null?h.key:null;
      if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return G!==null?null:d(x,h,""+E,_);
      if(typeof E=="object"&&E!==null) {
        switch(E.$$typeof) {
          case Ce:return E.key===G?m(x,h,E,_):null;
          case Pe:return E.key===G?j(x,h,E,_):null;
          case de:return E=zl(E),y(x,h,E,_)
        }

        if(Ne(E)||J(E))return G!==null?null:T(x,h,E,_,null);
        if(typeof E.then=="function")return y(x,h,hu(E),_);
        if(E.$$typeof===we)return y(x,h,ru(x,E),_);
        pu(x,E)
      }

      return null
    }

    function N(x,h,E,_,G) {
      if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return x=x.get(E)||null,d(h,x,""+_,G);
      if(typeof _=="object"&&_!==null) {
        switch(_.$$typeof) {
          case Ce:return x=x.get(_.key===null?E:_.key)||null,m(h,x,_,G);
          case Pe:return x=x.get(_.key===null?E:_.key)||null,j(h,x,_,G);
          case de:return _=zl(_),N(x,h,E,_,G)
        }

        if(Ne(_)||J(_))return x=x.get(E)||null,T(h,x,_,G,null);
        if(typeof _.then=="function")return N(x,h,E,hu(_),G);
        if(_.$$typeof===we)return N(x,h,E,ru(h,_),G);
        pu(h,_)
      }

      return null
    }

    function w(x,h,E,_) {
      for(var G=null,je=null,F=h,le=h=0,$e=null;F!==null&&le<E.length;le++) {
        F.index>le?($e=F,F=null):$e=F.sibling;
        var Ee=y(x,F,E[le],_);
        if(Ee===null) {
          F===null&&(F=$e);
          break
        }

        e&&F&&Ee.alternate===null&&a(x,F),h=i(Ee,h,le),je===null?G=Ee:je.sibling=Ee,je=Ee,F=$e
      }

      if(le===E.length)return t(x,F),fe&&Et(x,le),G;
      if(F===null) {
        for(;le<E.length;le++)F=D(x,E[le],_),F!==null&&(h=i(F,h,le),je===null?G=F:je.sibling=F,je=F);
        return fe&&Et(x,le),G
      }

      for(F=l(F);le<E.length;le++)$e=N(F,x,le,E[le],_),$e!==null&&(e&&(Ee=$e.alternate,Ee!==null&&F.delete(Ee.key===null?le:Ee.key)),h=i($e,h,le),je===null?G=$e:je.sibling=$e,je=$e);
      return e&&F.forEach(function(ol) {
        return a(x,ol)
      }),fe&&Et(x,le),G
    }

    function Z(x,h,E,_) {
      if(E==null)throw Error(o(151));
      for(var G=null,je=null,F=h,le=h=0,$e=null,Ee=E.next();F!==null&&!Ee.done;le++,Ee=E.next()) {
        F.index>le?($e=F,F=null):$e=F.sibling;
        var ol=y(x,F,Ee.value,_);
        if(ol===null) {
          F===null&&(F=$e);
          break
        }

        e&&F&&ol.alternate===null&&a(x,F),h=i(ol,h,le),je===null?G=ol:je.sibling=ol,je=ol,F=$e
      }

      if(Ee.done)return t(x,F),fe&&Et(x,le),G;
      if(F===null) {
        for(;!Ee.done;le++,Ee=E.next())Ee=D(x,Ee.value,_),Ee!==null&&(h=i(Ee,h,le),je===null?G=Ee:je.sibling=Ee,je=Ee);
        return fe&&Et(x,le),G
      }

      for(F=l(F);!Ee.done;le++,Ee=E.next())Ee=N(F,x,le,Ee.value,_),Ee!==null&&(e&&($e=Ee.alternate,$e!==null&&F.delete($e.key===null?le:$e.key)),h=i(Ee,h,le),je===null?G=Ee:je.sibling=Ee,je=Ee);
      return e&&F.forEach(function(E1) {
        return a(x,E1)
      }),fe&&Et(x,le),G
    }

    function re(x,h,E,_) {
      if(typeof E=="object"&&E!==null&&E.type===Ie&&E.key===null&&E.props.ref===void 0&&(E=E.props.children),typeof E=="object"&&E!==null) {
        switch(E.$$typeof) {
          case Ce:e: {
            for(var G=E.key;h!==null;) {
              if(h.key===G) {
                if(G=E.type,G===Ie) {
                  if(h.tag===7) {
                    t(x,h.sibling),_=n(h,E.props.children),Xt(_,E),_.return=x,x=_;
                    break e
                  }
                } else if(h.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===de&&zl(G)===h.type) {
                  t(x,h.sibling),_=n(h,E.props),Xt(_,E),_.return=x,x=_;
                  break e
                }

                t(x,h);
                break
              } else a(x,h);
              h=h.sibling
            }

            E.type===Ie?(_=yl(E.props.children,x.mode,_,E.key),Xt(_,E),_.return=x,x=_):(_=nu(E.type,E.key,E.props,null,x.mode,_),Xt(_,E),_.return=x,x=_)
          }

          return c(x);
          case Pe:e: {
            for(G=E.key;h!==null;) {
              if(h.key===G)if(h.tag===4&&h.stateNode.containerInfo===E.containerInfo&&h.stateNode.implementation===E.implementation) {
                t(x,h.sibling),_=n(h,E.children||[]),_.return=x,x=_;
                break e
              } else {
                t(x,h);
                break
              } else a(x,h);
              h=h.sibling
            }

            _=cc(E,x.mode,_),_.return=x,x=_
          }

          return c(x);
          case de:return E=zl(E),re(x,h,E,_)
        }

        if(Ne(E))return w(x,h,E,_);
        if(J(E)) {
          if(G=J(E),typeof G!="function")throw Error(o(150));
          return E=G.call(E),Z(x,h,E,_)
        }

        if(typeof E.then=="function")return re(x,h,hu(E),_);
        if(E.$$typeof===we)return re(x,h,ru(x,E),_);
        pu(x,E)
      }

      return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,h!==null&&h.tag===6?(t(x,h.sibling),_=n(h,E),_.return=x,x=_):(t(x,h),_=sc(E,x.mode,_),_.return=x,x=_),c(x)):t(x,h)
    }

    return function(x,h,E,_) {
      try {
        ai=0;
        var G=re(x,h,E,_);
        return ln=null,G
      } catch(F) {
        if(F===tn||F===fu)throw F;
        var je=xa(29,F,null,x.mode);
        return je.lanes=_,je.return=x,je
      } finally{}
    }
  }

  var Cl=Kd(!0),Jd=Kd(!1),Zt=!1;
  function yc(e) {
    e.updateQueue= {
      baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared: {
        pending:null,lanes:0,hiddenCallbacks:null
      },callbacks:null
    }
  }

  function xc(e,a) {
    e=e.updateQueue,a.updateQueue===e&&(a.updateQueue= {
      baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null
    })
  }

  function kt(e) {
    return {
      lane:e,tag:0,payload:null,callback:null,next:null
    }
  }

  function Kt(e,a,t) {
    var l=e.updateQueue;
    if(l===null)return null;
    if(l=l.shared,(Te&2)!==0) {
      var n=l.pending;
      return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=lu(e),_d(e,null,t),a
    }

    return tu(e,l,a,t),lu(e)
  }

  function ti(e,a,t) {
    if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)) {
      var l=a.lanes;
      l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)
    }
  }

  function jc(e,a) {
    var t=e.updateQueue,l=e.alternate;
    if(l!==null&&(l=l.updateQueue,t===l)) {
      var n=null,i=null;
      if(t=t.firstBaseUpdate,t!==null) {
        do {
          var c= {
            lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null
          };
          i===null?n=i=c:i=i.next=c,t=t.next
        } while(t!==null);
        i===null?n=i=a:i=i.next=a
      } else n=i=a;
      t= {
        baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks
      },e.updateQueue=t;
      return
    }

    e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a
  }

  var bc=!1;
  function li() {
    if(bc) {
      var e=an;
      if(e!==null)throw e
    }
  }

  function ni(e,a,t,l) {
    bc=!1;
    var n=e.updateQueue;
    Zt=!1;
    var i=n.firstBaseUpdate,c=n.lastBaseUpdate,d=n.shared.pending;
    if(d!==null) {
      n.shared.pending=null;
      var m=d,j=m.next;
      m.next=null,c===null?i=j:c.next=j,c=m;
      var T=e.alternate;
      T!==null&&(T=T.updateQueue,d=T.lastBaseUpdate,d!==c&&(d===null?T.firstBaseUpdate=j:d.next=j,T.lastBaseUpdate=m))
    }

    if(i!==null) {
      var D=n.baseState;
      c=0,T=j=m=null,d=i;
      do {
        var y=d.lane&-536870913,N=y!==d.lane;
        if(N?(xe&y)===y:(l&y)===y) {
          y!==0&&y===El&&(bc=!0),T!==null&&(T=T.next= {
            lane:0,tag:d.tag,payload:d.payload,callback:null,next:null
          });
          e: {
            var w=e,Z=d;
            y=a;
            var re=t;
            switch(Z.tag) {
              case 1:if(w=Z.payload,typeof w=="function") {
                D=w.call(re,D,y);
                break e
              }

              D=w;
              break e;
              case 3:w.flags=w.flags&-65537|128;
              case 0:if(w=Z.payload,y=typeof w=="function"?w.call(re,D,y):w,y==null)break e;
              D=C({},D,y);
              break e;
              case 2:Zt=!0
            }
          }

          y=d.callback,y!==null&&(e.flags|=64,N&&(e.flags|=8192),N=n.callbacks,N===null?n.callbacks=[y]:N.push(y))
        } else N= {
          lane:y,tag:d.tag,payload:d.payload,callback:d.callback,next:null
        },T===null?(j=T=N,m=D):T=T.next=N,c|=y;
        if(d=d.next,d===null) {
          if(d=n.shared.pending,d===null)break;
          N=d,d=N.next,N.next=null,n.lastBaseUpdate=N,n.shared.pending=null
        }
      } while(!0);
      T===null&&(m=D),n.baseState=m,n.firstBaseUpdate=j,n.lastBaseUpdate=T,i===null&&(n.shared.lanes=0),el|=c,e.lanes=c,e.memoizedState=D
    }
  }

  function $d(e,a) {
    if(typeof e!="function")throw Error(o(191,e));
    e.call(a)
  }

  function Fd(e,a) {
    var t=e.callbacks;
    if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)$d(t[e],a)
  }

  var Jt=Y(null),vu=Y(0);
  function Id(e,a) {
    e=Mt,Se(vu,e),Se(Jt,a),Mt=e|a.baseLanes
  }

  function Sc() {
    Se(vu,Mt),Se(Jt,Jt.current)
  }

  function Ec() {
    Mt=vu.current,ee(Jt),ee(vu)
  }

  var ua=Y(null),fa=null;
  function $t(e) {
    var a=e.alternate;
    Se(sa,sa.current&1),Se(ua,e),fa===null&&(a===null||Jt.current!==null||a.memoizedState!==null)&&(fa=e)
  }

  function Nc(e) {
    Se(sa,sa.current),Se(ua,e),fa===null&&(fa=e)
  }

  function Wd(e) {
    e.tag===22?(Se(sa,sa.current),Se(ua,e),fa===null&&(fa=e)):Ft()
  }

  function Ft() {
    Se(sa,sa.current),Se(ua,ua.current)
  }

  function _a(e) {
    ee(ua),fa===e&&(fa=null),ee(sa)
  }

  var sa=Y(0);
  function ii(e,a) {
    Se(ua,ua.current),Se(sa,a)
  }

  function zc(e) {
    ee(sa),ee(ua),fa===e&&(fa=null)
  }

  function gu(e) {
    for(var a=e;a!==null;) {
      if(a.tag===13) {
        var t=a.memoizedState;
        if(t!==null&&(t=t.dehydrated,t===null||Jo(t)||$o(t)))return a
      } else if(a.tag===19&&a.memoizedProps.revealOrder!=="independent") {
        if((a.flags&128)!==0)return a
      } else if(a.child!==null) {
        a.child.return=a,a=a.child;
        continue
      }

      if(a===e)break;
      for(;a.sibling===null;) {
        if(a.return===null||a.return===e)return null;
        a=a.return
      }

      a.sibling.return=a.return,a=a.sibling
    }

    return null
  }

  var Tt=0,oe=null,De=null,Ke=null,yu=!1,nn=!1,Al=!1,xu=0,ui=0,un=null,X0=0;
  function Ge() {
    throw Error(o(321))
  }

  function Tc(e,a) {
    if(a===null)return!1;
    for(var t=0;t<a.length&&t<e.length;t++)if(!Ma(e[t],a[t]))return!1;
    return!0
  }

  function Cc(e,a,t,l,n,i) {
    return Tt=i,oe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=e===null||e.memoizedState===null?Hf:Bf,Al=!1,i=t(l,n),Al=!1,nn&&(i=ef(a,t,l,n)),Pd(e),i
  }

  function Pd(e) {
    X.H=Tu;
    var a=De!==null&&De.next!==null;
    if(Tt=0,Ke=De=oe=null,yu=!1,ui=0,un=null,a)throw Error(o(300));
    e===null||Je||(e=e.dependencies,e!==null&&ou(e)&&(Je=!0))
  }

  function ef(e,a,t,l) {
    oe=e;
    var n=0;
    do {
      if(nn&&(un=null),ui=0,nn=!1,25<=n)throw Error(o(301));
      if(n+=1,Ke=De=null,e.updateQueue!=null) {
        var i=e.updateQueue;
        i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)
      }

      X.H=W0,i=a(t,l)
    } while(nn);
    return i
  }

  function Z0() {
    var e=X.H,a=e.useState()[0];
    return a=typeof a.then=="function"?si(a):a,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(oe.flags|=1024),a
  }

  function Ac() {
    var e=xu!==0;
    return xu=0,e
  }

  function Oc(e,a,t) {
    a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t
  }

  function Mc(e) {
    if(yu) {
      for(e=e.memoizedState;e!==null;) {
        var a=e.queue;
        a!==null&&(a.pending=null),e=e.next
      }

      yu=!1
    }

    Tt=0,Ke=De=oe=null,nn=!1,ui=xu=0,un=null
  }

  function ha() {
    var e= {
      memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null
    };
    return Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e,Ke
  }

  function Xe() {
    if(De===null) {
      var e=oe.alternate;
      e=e!==null?e.memoizedState:null
    } else e=De.next;
    var a=Ke===null?oe.memoizedState:Ke.next;
    if(a!==null)Ke=a,De=e;
    else {
      if(e===null)throw oe.alternate===null?Error(o(467)):Error(o(310));
      De=e,e= {
        memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null
      },Ke===null?oe.memoizedState=Ke=e:Ke=Ke.next=e
    }

    return Ke
  }

  function ju() {
    return {
      lastEffect:null,events:null,stores:null,memoCache:null
    }
  }

  function si(e) {
    var a=ui;
    return ui+=1,un===null&&(un=[]),e=Xd(un,e,a),a=oe,(Ke===null?a.memoizedState:Ke.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?Hf:Bf),e
  }

  function bu(e) {
    if(e!==null&&typeof e=="object") {
      if(typeof e.then=="function")return si(e);
      if(e.$$typeof===q)return;
      if(e.$$typeof===we)return ia(e)
    }

    throw Error(o(438,String(e)))
  }

  function _c(e) {
    var a=null,t=oe.updateQueue;
    if(t!==null&&(a=t.memoCache),a==null) {
      var l=oe.alternate;
      l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a= {
        data:l.data.map(function(n) {
          return n.slice()
        }),index:0
      })))
    }

    if(a==null&&(a= {
      data:[],index:0
    }),t===null&&(t=ju(),oe.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Ga;
    return a.index++,t
  }

  function Ct(e,a) {
    return typeof a=="function"?a(e):a
  }

  function Su(e) {
    var a=Xe();
    return Dc(a,De,e)
  }

  function Dc(e,a,t) {
    var l=e.queue;
    if(l===null)throw Error(o(311));
    l.lastRenderedReducer=t;
    var n=e.baseQueue,i=l.pending;
    if(i!==null) {
      if(n!==null) {
        var c=n.next;
        n.next=i.next,i.next=c
      }

      a.baseQueue=n=i,l.pending=null
    }

    if(i=e.baseState,n===null)e.memoizedState=i;
    else {
      a=n.next;
      var d=c=null,m=null,j=a,T=!1;
      do {
        var D=j.lane&-536870913;
        if(D!==j.lane?(xe&D)===D:(Tt&D)===D) {
          var y=j.revertLane;
          if(y===0)m!==null&&(m=m.next= {
            lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null
          }),D===El&&(T=!0);
          else if((Tt&y)===y) {
            j=j.next,y===El&&(T=!0);
            continue
          } else D= {
            lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null
          },m===null?(d=m=D,c=i):m=m.next=D,oe.lanes|=y,el|=y;
          D=j.action,Al&&t(i,D),i=j.hasEagerState?j.eagerState:t(i,D)
        } else y= {
          lane:D,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null
        },m===null?(d=m=y,c=i):m=m.next=y,oe.lanes|=D,el|=D;
        j=j.next
      } while(j!==null&&j!==a);
      if(m===null?c=i:m.next=d,!Ma(i,e.memoizedState)&&(Je=!0,T&&(t=an,t!==null)))throw t;
      e.memoizedState=i,e.baseState=c,e.baseQueue=m,l.lastRenderedState=i
    }

    return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]
  }

  function Rc(e) {
    var a=Xe(),t=a.queue;
    if(t===null)throw Error(o(311));
    t.lastRenderedReducer=e;
    var l=t.dispatch,n=t.pending,i=a.memoizedState;
    if(n!==null) {
      t.pending=null;
      var c=n=n.next;
      do i=e(i,c.action),c=c.next;
      while(c!==n);
      Ma(i,a.memoizedState)||(Je=!0),a.memoizedState=i,a.baseQueue===null&&(a.baseState=i),t.lastRenderedState=i
    }

    return[i,l]
  }

  function af(e,a,t) {
    var l=oe,n=Xe(),i=fe;
    if(i) {
      if(t===void 0)throw Error(o(407));
      t=t()
    } else t=a();
    var c=!Ma((De||n).memoizedState,t);
    if(c&&(n.memoizedState=t,Je=!0),n=n.queue,Hc(nf.bind(null,l,n,e),[e]),e=n.getSnapshot!==a||c||Ke!==null&&(Ke.memoizedState.tag&1)!==0,sn(e?9:8, {
      destroy:void 0
    },lf.bind(null,l,n,t,a),null),e) {
      if(l.flags|=2048,Re===null)throw Error(o(349));
      i||(Tt&127)!==0||tf(l,a,t)
    }

    return t
  }

  function tf(e,a,t) {
    e.flags|=16384,e= {
      getSnapshot:a,value:t
    },a=oe.updateQueue,a===null?(a=ju(),oe.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))
  }

  function lf(e,a,t,l) {
    a.value=t,a.getSnapshot=l,uf(a)&&sf(e)
  }

  function nf(e,a,t) {
    return t(function() {
      uf(a)&&sf(e)
    })
  }

  function uf(e) {
    var a=e.getSnapshot;
    e=e.value;
    try {
      var t=a();
      return!Ma(e,t)
    } catch {
      return!0
    }
  }

  function sf(e) {
    var a=gl(e,2);
    a!==null&&Ea(a,e,2)
  }

  function Uc(e) {
    var a=ha();
    if(typeof e=="function") {
      var t=e;
      if(e=t(),Al) {
        Bt(!0);
        try {
          t()
        } finally {
          Bt(!1)
        }
      }
    }

    return a.memoizedState=a.baseState=e,a.queue= {
      pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:e
    },a
  }

  function cf(e,a,t,l) {
    return e.baseState=t,Dc(e,De,typeof l=="function"?l:Ct)
  }

  function k0(e,a,t,l,n) {
    if(zu(e))throw Error(o(485));
    if(e=a.action,e!==null) {
      var i= {
        payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c) {
          i.listeners.push(c)
        }
      };
      X.T!==null?t(!0):i.isTransition=!1,l(i),t=a.pending,t===null?(i.next=a.pending=i,of(a,i)):(i.next=t.next,a.pending=t.next=i)
    }
  }

  function of(e,a) {
    var t=a.action,l=a.payload,n=e.state;
    if(a.isTransition) {
      var i=X.T,c={};
      c.types=i!==null?i.types:null,X.T=c;
      try {
        var d=t(n,l),m=X.S;
        m!==null&&m(c,d),rf(e,a,d)
      } catch(j) {
        qc(e,a,j)
      } finally {
        i!==null&&c.types!==null&&(i.types=c.types),X.T=i
      }
    } else try {
      i=t(n,l),rf(e,a,i)
    } catch(j) {
      qc(e,a,j)
    }
  }

  function rf(e,a,t) {
    t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l) {
      df(e,a,l)
    },function(l) {
      return qc(e,a,l)
    }):df(e,a,t)
  }

  function df(e,a,t) {
    a.status="fulfilled",a.value=t,ff(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,of(e,t)))
  }

  function qc(e,a,t) {
    var l=e.pending;
    if(e.pending=null,l!==null) {
      l=l.next;
      do a.status="rejected",a.reason=t,ff(a),a=a.next;
      while(a!==l)
    }

    e.action=null
  }

  function ff(e) {
    e=e.listeners;
    for(var a=0;a<e.length;a++)(0,e[a])()
  }

  function mf(e,a) {
    return a
  }

  function hf(e,a) {
    if(fe) {
      var t=Re.formState;
      if(t!==null) {
        e: {
          var l=oe;
          if(fe) {
            if(qe) {
              a: {
                for(var n=qe,i=Ka;n.nodeType!==8;) {
                  if(!i) {
                    n=null;
                    break a
                  }

                  if(n=$a(n.nextSibling),n===null) {
                    n=null;
                    break a
                  }
                }

                i=n.data,n=i==="F!"||i==="F"?n:null
              }

              if(n) {
                qe=$a(n.nextSibling),l=n.data==="F!";
                break e
              }
            }

            Yt(l)
          }

          l=!1
        }

        l&&(a=t[0])
      }
    }

    return t=ha(),t.memoizedState=t.baseState=a,l= {
      pending:null,lanes:0,dispatch:null,lastRenderedReducer:mf,lastRenderedState:a
    },t.queue=l,t=Rf.bind(null,oe,l),l.dispatch=t,l=Uc(!1),i=Gc.bind(null,oe,!1,l.queue),l=ha(),n= {
      state:a,dispatch:null,action:e,pending:null
    },l.queue=n,t=k0.bind(null,oe,n,i,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]
  }

  function pf(e) {
    var a=Xe();
    return vf(a,De,e)
  }

  function vf(e,a,t) {
    if(a=Dc(e,a,mf)[0],e=Su(Ct)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try {
      var l=si(a)
    } catch(c) {
      throw c===tn?fu:c
    } else l=a;
    a=Xe();
    var n=a.queue,i=n.dispatch;
    return t!==a.memoizedState&&(oe.flags|=2048,sn(9, {
      destroy:void 0
    },K0.bind(null,n,t),null)),[l,i,e]
  }

  function K0(e,a) {
    e.action=a
  }

  function gf(e) {
    var a=Xe(),t=De;
    if(t!==null)return vf(a,t,e);
    Xe(),a=a.memoizedState,t=Xe();
    var l=t.queue.dispatch;
    return t.memoizedState=e,[a,l,!1]
  }

  function sn(e,a,t,l) {
    return e= {
      tag:e,create:t,deps:l,inst:a,next:null
    },a=oe.updateQueue,a===null&&(a=ju(),oe.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e
  }

  function yf() {
    return Xe().memoizedState
  }

  function Eu(e,a,t,l) {
    var n=ha();
    oe.flags|=e,n.memoizedState=sn(1|a, {
      destroy:void 0
    },t,l===void 0?null:l)
  }

  function Nu(e,a,t,l) {
    var n=Xe();
    l=l===void 0?null:l;
    var i=n.memoizedState.inst;
    De!==null&&l!==null&&Tc(l,De.memoizedState.deps)?n.memoizedState=sn(a,i,t,l):(oe.flags|=e,n.memoizedState=sn(1|a,i,t,l))
  }

  function xf(e,a) {
    Eu(8390656,8,e,a)
  }

  function Hc(e,a) {
    Nu(2048,8,e,a)
  }

  function J0(e) {
    oe.flags|=4;
    var a=oe.updateQueue;
    if(a===null)a=ju(),oe.updateQueue=a,a.events=[e];
    else {
      var t=a.events;
      t===null?a.events=[e]:t.push(e)
    }
  }

  function jf(e) {
    var a=Xe().memoizedState;
    return J0( {
      ref:a,nextImpl:e
    }),function() {
      if((Te&2)!==0)throw Error(o(440));
      return a.impl.apply(void 0,arguments)
    }
  }

  function bf(e,a) {
    return Nu(4,2,e,a)
  }

  function Sf(e,a) {
    return Nu(4,4,e,a)
  }

  function Ef(e,a) {
    if(typeof a=="function") {
      e=e();
      var t=a(e);
      return function() {
        typeof t=="function"?t():a(null)
      }
    }

    if(a!=null)return e=e(),a.current=e,function() {
      a.current=null
    }
  }

  function Nf(e,a,t) {
    t=t!=null?t.concat([e]):null,Nu(4,4,Ef.bind(null,a,e),t)
  }

  function Bc(){}function zf(e,a) {
    var t=Xe();
    a=a===void 0?null:a;
    var l=t.memoizedState;
    return a!==null&&Tc(a,l[1])?l[0]:(t.memoizedState=[e,a],e)
  }

  function Tf(e,a) {
    var t=Xe();
    a=a===void 0?null:a;
    var l=t.memoizedState;
    if(a!==null&&Tc(a,l[1]))return l[0];
    if(l=e(),Al) {
      Bt(!0);
      try {
        e()
      } finally {
        Bt(!1)
      }
    }

    return t.memoizedState=[l,a],l
  }

  function wc(e,a,t) {
    return t===void 0||(Tt&1073741824)!==0&&(xe&261930)===0?e.memoizedState=a:(e.memoizedState=t,e=Hm(),oe.lanes|=e,el|=e,t)
  }

  function Cf(e,a,t,l) {
    return Ma(t,a)?t:Jt.current!==null?(e=wc(e,t,l),Ma(e,a)||(Je=!0),e):(Tt&106)===0||(Tt&1073741824)!==0&&(xe&261930)===0?(Je=!0,e.memoizedState=t):(e=Hm(),oe.lanes|=e,el|=e,a)
  }

  function Af(e,a,t,l,n) {
    var i=se.p;
    se.p=i!==0&&8>i?i:8;
    var c=X.T,d={};
    d.types=c!==null?c.types:null,X.T=d,Gc(e,!1,a,t);
    try {
      var m=n(),j=X.S;
      if(j!==null&&j(d,m),m!==null&&typeof m=="object"&&typeof m.then=="function") {
        var T=Q0(m,l);
        ci(e,a,T,qa(e))
      } else ci(e,a,l,qa(e))
    } catch(D) {
      ci(e,a, {
        then:function(){},status:"rejected",reason:D
      },qa())
    } finally {
      se.p=i,c!==null&&d.types!==null&&(c.types=d.types),X.T=c
    }
  }

  function $0(){}function Lc(e,a,t,l) {
    if(e.tag!==5)throw Error(o(476));
    var n=Of(e).queue;
    Af(e,n,a,za,t===null?$0:function() {
      return Mf(e),t(l)
    })
  }

  function Of(e) {
    var a=e.memoizedState;
    if(a!==null)return a;
    a= {
      memoizedState:za,baseState:za,baseQueue:null,queue: {
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:za
      },next:null
    };
    var t={};
    return a.next= {
      memoizedState:t,baseState:t,baseQueue:null,queue: {
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ct,lastRenderedState:t
      },next:null
    },e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a
  }

  function Mf(e) {
    var a=Of(e);
    a.next===null&&(a=e.alternate.memoizedState),ci(e,a.next.queue,{},qa())
  }

  function Vc() {
    return ia(Tn)
  }

  function _f() {
    return Xe().memoizedState
  }

  function Df() {
    return Xe().memoizedState
  }

  function F0(e) {
    for(var a=e.return;a!==null;) {
      switch(a.tag) {
        case 24:case 3:var t=qa();
        e=kt(t);
        var l=Kt(a,e,t);
        l!==null&&(Ea(l,a,t),ti(l,a,t)),a= {
          cache:hc()
        },e.payload=a;
        return
      }

      a=a.return
    }
  }

  function I0(e,a,t) {
    var l=qa();
    t= {
      lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null
    },zu(e)?Uf(a,t):(t=ic(e,a,t,l),t!==null&&(Ea(t,e,l),qf(t,a,l)))
  }

  function Rf(e,a,t) {
    var l=qa();
    ci(e,a,t,l)
  }

  function ci(e,a,t,l) {
    var n= {
      lane:l,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null
    };
    if(zu(e))Uf(a,n);
    else {
      var i=e.alternate;
      if(e.lanes===0&&(i===null||i.lanes===0)&&(i=a.lastRenderedReducer,i!==null))try {
        var c=a.lastRenderedState,d=i(c,t);
        if(n.hasEagerState=!0,n.eagerState=d,Ma(d,c))return tu(e,a,n,0),Re===null&&au(),!1
      } catch{}finally{}if(t=ic(e,a,n,l),t!==null)return Ea(t,e,l),qf(t,a,l),!0
    }

    return!1
  }

  function Gc(e,a,t,l) {
    if(l= {
      lane:2,revertLane:Do(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null
    },zu(e)) {
      if(a)throw Error(o(479))
    } else a=ic(e,t,l,2),a!==null&&Ea(a,e,2)
  }

  function zu(e) {
    var a=e.alternate;
    return e===oe||a!==null&&a===oe
  }

  function Uf(e,a) {
    nn=yu=!0;
    var t=e.pending;
    t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a
  }

  function qf(e,a,t) {
    if((t&4194048)!==0) {
      var l=a.lanes;
      l&=e.pendingLanes,t|=l,a.lanes=t,qr(e,t)
    }
  }

  var Tu= {
    readContext:ia,use:bu,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useLayoutEffect:Ge,useInsertionEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useSyncExternalStore:Ge,useId:Ge,useHostTransitionStatus:Ge,useFormState:Ge,useActionState:Ge,useOptimistic:Ge,useMemoCache:Ge,useCacheRefresh:Ge,useEffectEvent:Ge
  },Hf= {
    readContext:ia,use:bu,useCallback:function(e,a) {
      return ha().memoizedState=[e,a===void 0?null:a],e
    },useContext:ia,useEffect:xf,useImperativeHandle:function(e,a,t) {
      t=t!=null?t.concat([e]):null,Eu(4194308,4,Ef.bind(null,a,e),t)
    },useLayoutEffect:function(e,a) {
      return Eu(4194308,4,e,a)
    },useInsertionEffect:function(e,a) {
      Eu(4,2,e,a)
    },useMemo:function(e,a) {
      var t=ha();
      a=a===void 0?null:a;
      var l=e();
      if(Al) {
        Bt(!0);
        try {
          e()
        } finally {
          Bt(!1)
        }
      }

      return t.memoizedState=[l,a],l
    },useReducer:function(e,a,t) {
      var l=ha();
      if(t!==void 0) {
        var n=t(a);
        if(Al) {
          Bt(!0);
          try {
            t(a)
          } finally {
            Bt(!1)
          }
        }
      } else n=a;
      return l.memoizedState=l.baseState=n,e= {
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n
      },l.queue=e,e=e.dispatch=I0.bind(null,oe,e),[l.memoizedState,e]
    },useRef:function(e) {
      var a=ha();
      return e= {
        current:e
      },a.memoizedState=e
    },useState:function(e) {
      e=Uc(e);
      var a=e.queue,t=Rf.bind(null,oe,a);
      return a.dispatch=t,[e.memoizedState,t]
    },useDebugValue:Bc,useDeferredValue:function(e,a) {
      var t=ha();
      return wc(t,e,a)
    },useTransition:function() {
      var e=Uc(!1);
      return e=Af.bind(null,oe,e.queue,!0,!1),ha().memoizedState=e,[!1,e]
    },useSyncExternalStore:function(e,a,t) {
      var l=oe,n=ha();
      if(fe) {
        if(t===void 0)throw Error(o(407));
        t=t()
      } else {
        if(t=a(),Re===null)throw Error(o(349));
        (xe&127)!==0||tf(l,a,t)
      }

      n.memoizedState=t;
      var i= {
        value:t,getSnapshot:a
      };
      return n.queue=i,xf(nf.bind(null,l,i,e),[e]),l.flags|=2048,sn(9, {
        destroy:void 0
      },lf.bind(null,l,i,t,a),null),t
    },useId:function() {
      var e=ha(),a=Re.identifierPrefix;
      if(fe) {
        var t=ct,l=st;
        t=(l&~(1<<32-Aa(l)-1)).toString(32)+t,a="_"+a+"R_"+t,t=xu++,0<t&&(a+="H"+t.toString(32)),a+="_"
      } else t=X0++,a="_"+a+"r_"+t.toString(32)+"_";
      return e.memoizedState=a
    },useHostTransitionStatus:Vc,useFormState:hf,useActionState:hf,useOptimistic:function(e) {
      var a=ha();
      a.memoizedState=a.baseState=e;
      var t= {
        pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null
      };
      return a.queue=t,a=Gc.bind(null,oe,!0,t),t.dispatch=a,[e,a]
    },useMemoCache:_c,useCacheRefresh:function() {
      return ha().memoizedState=F0.bind(null,oe)
    },useEffectEvent:function(e) {
      var a=ha(),t= {
        impl:e
      };
      return a.memoizedState=t,function() {
        if((Te&2)!==0)throw Error(o(440));
        return t.impl.apply(void 0,arguments)
      }
    }
  },Bf= {
    readContext:ia,use:bu,useCallback:zf,useContext:ia,useEffect:Hc,useImperativeHandle:Nf,useInsertionEffect:bf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Su,useRef:yf,useState:function() {
      return Su(Ct)
    },useDebugValue:Bc,useDeferredValue:function(e,a) {
      var t=Xe();
      return Cf(t,De.memoizedState,e,a)
    },useTransition:function() {
      var e=Su(Ct)[0],a=Xe().memoizedState;
      return[typeof e=="boolean"?e:si(e),a]
    },useSyncExternalStore:af,useId:_f,useHostTransitionStatus:Vc,useFormState:pf,useActionState:pf,useOptimistic:function(e,a) {
      var t=Xe();
      return cf(t,De,e,a)
    },useMemoCache:_c,useCacheRefresh:Df,useEffectEvent:jf
  },W0= {
    readContext:ia,use:bu,useCallback:zf,useContext:ia,useEffect:Hc,useImperativeHandle:Nf,useInsertionEffect:bf,useLayoutEffect:Sf,useMemo:Tf,useReducer:Rc,useRef:yf,useState:function() {
      return Rc(Ct)
    },useDebugValue:Bc,useDeferredValue:function(e,a) {
      var t=Xe();
      return De===null?wc(t,e,a):Cf(t,De.memoizedState,e,a)
    },useTransition:function() {
      var e=Rc(Ct)[0],a=Xe().memoizedState;
      return[typeof e=="boolean"?e:si(e),a]
    },useSyncExternalStore:af,useId:_f,useHostTransitionStatus:Vc,useFormState:gf,useActionState:gf,useOptimistic:function(e,a) {
      var t=Xe();
      return De!==null?cf(t,De,e,a):(t.baseState=e,[e,t.queue.dispatch])
    },useMemoCache:_c,useCacheRefresh:Df,useEffectEvent:jf
  };
  function Yc(e,a,t,l) {
    a=e.memoizedState,t=t(l,a),t=t==null?a:C({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)
  }

  var Qc= {
    enqueueSetState:function(e,a,t) {
      e=e._reactInternals;
      var l=qa(),n=kt(l);
      n.payload=a,t!=null&&(n.callback=t),a=Kt(e,n,l),a!==null&&(Ea(a,e,l),ti(a,e,l))
    },enqueueReplaceState:function(e,a,t) {
      e=e._reactInternals;
      var l=qa(),n=kt(l);
      n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=Kt(e,n,l),a!==null&&(Ea(a,e,l),ti(a,e,l))
    },enqueueForceUpdate:function(e,a) {
      e=e._reactInternals;
      var t=qa(),l=kt(t);
      l.tag=2,a!=null&&(l.callback=a),a=Kt(e,l,t),a!==null&&(Ea(a,e,t),ti(a,e,t))
    }
  };
  function wf(e,a,t,l,n,i,c) {
    return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):a.prototype&&a.prototype.isPureReactComponent?!Jn(t,l)||!Jn(n,i):!0
  }

  function Lf(e,a,t,l) {
    e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&Qc.enqueueReplaceState(a,a.state,null)
  }

  function Ol(e,a) {
    var t=a;
    if("ref"in a) {
      t={};
      for(var l in a)l!=="ref"&&(t[l]=a[l])
    }

    if(e=e.defaultProps) {
      t===a&&(t=C({},t));
      for(var n in e)t[n]===void 0&&(t[n]=e[n])
    }

    return t
  }

  function Vf(e) {
    eu(e)
  }

  function Gf(e) {
    console.error(e)
  }

  function Yf(e) {
    eu(e)
  }

  function Cu(e,a) {
    try {
      var t=e.onUncaughtError;
      t(a.value, {
        componentStack:a.stack
      })
    } catch(l) {
      setTimeout(function() {
        throw l
      })
    }
  }

  function Qf(e,a,t) {
    try {
      var l=e.onCaughtError;
      l(t.value, {
        componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null
      })
    } catch(n) {
      setTimeout(function() {
        throw n
      })
    }
  }

  function Xc(e,a,t) {
    return t=kt(t),t.tag=3,t.payload= {
      element:null
    },t.callback=function() {
      Cu(e,a)
    },t
  }

  function Xf(e) {
    return e=kt(e),e.tag=3,e
  }

  function Zf(e,a,t,l) {
    var n=t.type.getDerivedStateFromError;
    if(typeof n=="function") {
      var i=l.value;
      e.payload=function() {
        return n(i)
      },e.callback=function() {
        Qf(a,t,l)
      }
    }

    var c=t.stateNode;
    c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function() {
      Qf(a,t,l),typeof n!="function"&&(al===null?al=new Set([this]):al.add(this));var d=l.stack;this.componentDidCatch(l.value, {
        componentStack:d!==null?d:""
      })
    })
  }

  function P0(e,a,t,l,n) {
    if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function") {
      if(a=t.alternate,a!==null&&bl(a,t,n,!0),t=ua.current,t!==null) {
        switch(t.tag) {
          case 31:case 13:case 19:return fa===null?Ju():t.alternate===null&&Ye===0&&(Ye=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===mu?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),Oo(e,l,n)),!1;
          case 22:return t.flags|=65536,l===mu?t.flags|=16384:(a=t.updateQueue,a===null?(a= {
            transitions:null,markerInstances:null,retryQueue:new Set([l])
          },t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),Oo(e,l,n)),!1
        }

        throw Error(o(435,t.tag))
      }

      return Oo(e,l,n),Ju(),!1
    }

    if(fe)return a=ua.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==rc&&(e=Error(o(422), {
      cause:l
    }),In(Xa(e,t)))):(l!==rc&&(a=Error(o(423), {
      cause:l
    }),In(Xa(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Xa(l,t),n=Xc(e.stateNode,l,n),jc(e,n),Ye!==4&&(Ye=2)),!1;
    var i=Error(o(520), {
      cause:l
    });
    if(i=Xa(i,t),vi===null?vi=[i]:vi.push(i),Ye!==4&&(Ye=2),a===null)return!0;
    l=Xa(l,t),t=a;
    do {
      switch(t.tag) {
        case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Xc(t.stateNode,l,e),jc(t,e),!1;
        case 1:if(a=t.type,i=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(al===null||!al.has(i))))return t.flags|=65536,n&=-n,t.lanes|=n,n=Xf(n),Zf(n,e,t,l),jc(t,n),!1;
        break;
        case 22:if(t.memoizedState!==null)return t.flags|=65536,!1
      }

      t=t.return
    } while(t!==null);
    return!1
  }

  var Zc=Error(o(461)),Je=!1;
  function We(e,a,t,l) {
    a.child=e===null?Jd(a,null,t,l):Cl(a,e.child,t,l)
  }

  function kf(e,a,t,l,n) {
    t=t.render;
    var i=a.ref;
    if("ref"in l) {
      var c={};
      for(var d in l)d!=="ref"&&(c[d]=l[d])
    } else c=l;
    return Sl(a),l=Cc(e,a,t,c,i,n),d=Ac(),e!==null&&!Je?(Oc(e,a,n),At(e,a,n)):(fe&&d&&uu(a),a.flags|=1,We(e,a,l,n),a.child)
  }

  function Kf(e,a,t,l,n) {
    if(e===null) {
      var i=t.type;
      return typeof i=="function"&&!uc(i)&&i.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=i,Jf(e,a,i,l,n)):(e=nu(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)
    }

    if(i=e.child,!Pc(e,n)) {
      var c=i.memoizedProps;
      if(t=t.compare,t=t!==null?t:Jn,t(c,l)&&e.ref===a.ref)return At(e,a,n)
    }

    return a.flags|=1,e=St(i,l),e.ref=a.ref,e.return=a,a.child=e
  }

  function Jf(e,a,t,l,n) {
    if(e!==null) {
      var i=e.memoizedProps;
      if(Jn(i,l)&&e.ref===a.ref)if(Je=!1,a.pendingProps=l=i,Pc(e,n))(e.flags&131072)!==0&&(Je=!0);
      else return a.lanes=e.lanes,At(e,a,n)
    }

    return kc(e,a,t,l,n)
  }

  function $f(e,a,t,l) {
    var n=l.children,i=e!==null?e.memoizedState:null;
    if(e===null&&a.stateNode===null&&(a.stateNode= {
      _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
    }),l.mode==="hidden") {
      if((a.flags&128)!==0) {
        if(i=i!==null?i.baseLanes|t:t,e!==null) {
          for(l=a.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;
          l=n&~i
        } else l=0,a.child=null;
        return Ff(e,a,i,t,l)
      }

      if((t&536870912)!==0)a.memoizedState= {
        baseLanes:0,cachePool:null
      },e!==null&&du(a,i!==null?i.cachePool:null),i!==null?Id(a,i):Sc(),Wd(a);
      else return l=a.lanes=536870912,Ff(e,a,i!==null?i.baseLanes|t:t,t,l)
    } else i!==null?(du(a,i.cachePool),Id(a,i),Ft(),a.memoizedState=null):(e!==null&&du(a,null),Sc(),Ft());
    return We(e,a,n,t),a.child
  }

  function oi(e,a) {
    return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode= {
      _visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null
    }),a.sibling
  }

  function Ff(e,a,t,l,n) {
    var i=vc();
    return i=i===null?null: {
      parent:ke._currentValue,pool:i
    },a.memoizedState= {
      baseLanes:t,cachePool:i
    },e!==null&&du(a,null),Sc(),Wd(a),e!==null&&bl(e,a,l,!0),a.childLanes=n,null
  }

  function Au(e,a) {
    return a=Ou( {
      mode:a.mode,children:a.children
    },e.mode),a.ref=e.ref,e.child=a,a.return=e,a
  }

  function If(e,a,t) {
    return Cl(a,e.child,null,t),e=Au(a,a.pendingProps),e.flags|=2,_a(a),a.memoizedState=null,e
  }

  function ev(e,a,t) {
    var l=a.pendingProps,n=(a.flags&128)!==0;
    if(a.flags&=-129,e===null) {
      if(fe) {
        if(l.mode==="hidden")return e=Au(a,l),a.lanes=536870912,e.memoizedState= {
          baseLanes:0,cachePool:null
        },oi(null,e);
        if(Nc(a),(e=qe)?(e=Eh(e,Ka),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState= {
          dehydrated:e,treeContext:Vt!==null? {
            id:st,overflow:ct
          }:null,retryLane:536870912,hydrationErrors:null
        },t=Rd(e),t.return=a,a.child=t,aa=a,qe=null)):e=null,e===null)throw Yt(a);
        return a.lanes=536870912,null
      }

      return Au(a,l)
    }

    var i=e.memoizedState;
    if(i!==null) {
      var c=i.dehydrated;
      if(Nc(a),n)if(a.flags&256)a.flags&=-257,a=If(e,a,t);
      else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;
      else throw Error(o(558));
      else if(Je||bl(e,a,t,!1),n=(t&e.childLanes)!==0,Je||n) {
        if(Jt.current===null) {
          if(l=Re,l!==null&&(c=Hr(l,t),c!==0&&c!==i.retryLane))throw i.retryLane=c,gl(e,c),Ea(l,e,c),Zc;
          Ju()
        }

        a=If(e,a,t)
      } else e=i.treeContext,qe=$a(c.nextSibling),aa=a,fe=!0,Gt=null,Ka=!1,e!==null&&Hd(a,e),a=Au(a,l),a.flags|=134221824;
      return a
    }

    return e=St(e.child, {
      mode:l.mode,children:l.children
    }),e.ref=a.ref,a.child=e,e.return=a,e
  }

  function cn(e,a) {
    var t=a.ref;
    if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);
    else {
      if(typeof t!="function"&&typeof t!="object")throw Error(o(284));
      (e===null||e.ref!==t)&&(a.flags|=4194816)
    }
  }

  function kc(e,a,t,l,n) {
    return Sl(a),t=Cc(e,a,t,l,void 0,n),l=Ac(),e!==null&&!Je?(Oc(e,a,n),At(e,a,n)):(fe&&l&&uu(a),a.flags|=1,We(e,a,t,n),a.child)
  }

  function Wf(e,a,t,l,n,i) {
    return Sl(a),a.updateQueue=null,t=ef(a,l,t,n),Pd(e),l=Ac(),e!==null&&!Je?(Oc(e,a,i),At(e,a,i)):(fe&&l&&uu(a),a.flags|=1,We(e,a,t,i),a.child)
  }

  function Pf(e,a,t,l,n) {
    if(Sl(a),a.stateNode===null) {
      var i=Il,c=t.contextType;
      typeof c=="object"&&c!==null&&(i=ia(c)),i=new t(l,i),a.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qc,a.stateNode=i,i._reactInternals=a,i=a.stateNode,i.props=l,i.state=a.memoizedState,i.refs={},yc(a),c=t.contextType,i.context=typeof c=="object"&&c!==null?ia(c):Il,i.state=a.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(Yc(a,t,c,l),i.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Qc.enqueueReplaceState(i,i.state,null),ni(a,l,i,n),li(),i.state=a.memoizedState),typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!0
    } else if(e===null) {
      i=a.stateNode;
      var d=a.memoizedProps,m=Ol(t,d);
      i.props=m;
      var j=i.context,T=t.contextType;
      c=Il,typeof T=="object"&&T!==null&&(c=ia(T));
      var D=t.getDerivedStateFromProps;
      T=typeof D=="function"||typeof i.getSnapshotBeforeUpdate=="function",d=a.pendingProps!==d,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d||j!==c)&&Lf(a,i,l,c),Zt=!1;
      var y=a.memoizedState;
      i.state=y,ni(a,l,i,n),li(),j=a.memoizedState,d||y!==j||Zt?(typeof D=="function"&&(Yc(a,t,D,l),j=a.memoizedState),(m=Zt||wf(a,t,m,l,y,j,c))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(a.flags|=4194308)):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=j),i.props=l,i.state=j,i.context=c,l=m):(typeof i.componentDidMount=="function"&&(a.flags|=4194308),l=!1)
    } else {
      i=a.stateNode,xc(e,a),c=a.memoizedProps,T=Ol(t,c),i.props=T,D=a.pendingProps,y=i.context,j=t.contextType,m=Il,typeof j=="object"&&j!==null&&(m=ia(j)),d=t.getDerivedStateFromProps,(j=typeof d=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==D||y!==m)&&Lf(a,i,l,m),Zt=!1,y=a.memoizedState,i.state=y,ni(a,l,i,n),li();
      var N=a.memoizedState;
      c!==D||y!==N||Zt||e!==null&&e.dependencies!==null&&ou(e.dependencies)?(typeof d=="function"&&(Yc(a,t,d,l),N=a.memoizedState),(T=Zt||wf(a,t,T,l,y,N,m)||e!==null&&e.dependencies!==null&&ou(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,N,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,N,m)),typeof i.componentDidUpdate=="function"&&(a.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=N),i.props=l,i.state=N,i.context=m,l=T):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&y===e.memoizedState||(a.flags|=1024),l=!1)
    }

    return i=l,cn(e,a),l=(a.flags&128)!==0,i||l?(i=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:i.render(),a.flags|=1,e!==null&&l?(a.child=Cl(a,e.child,null,n),a.child=Cl(a,null,t,n)):We(e,a,t,n),a.memoizedState=i.state,e=a.child):e=At(e,a,n),e
  }

  function em(e,a,t,l) {
    return xl(),a.flags|=256,We(e,a,t,l),a.child
  }

  var Kc= {
    dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null
  };
  function Jc(e) {
    return {
      baseLanes:e,cachePool:Yd()
    }
  }

  function $c(e,a,t) {
    return e=e!==null?e.childLanes&~t:0,a&&(e|=Ua),e
  }

  function am(e,a,t) {
    var l=a.pendingProps,n=!1,i=(a.flags&128)!==0,c;
    if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(sa.current&2)!==0),c&&(n=!0,a.flags&=-129),c=(a.flags&32)!==0,a.flags&=-33,e===null) {
      if(fe) {
        if(n?$t(a):Ft(),(e=qe)?(e=Eh(e,Ka),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState= {
          dehydrated:e,treeContext:Vt!==null? {
            id:st,overflow:ct
          }:null,retryLane:536870912,hydrationErrors:null
        },t=Rd(e),t.return=a,a.child=t,aa=a,qe=null)):e=null,e===null)throw Yt(a);
        return $o(e)?a.lanes=32:a.lanes=536870912,null
      }

      return i=l.children,l=l.fallback,n?(Ft(),n=a.mode,i=Ou( {
        mode:"hidden",children:i
      },n),l=yl(l,n,t,null),i.return=a,l.return=a,i.sibling=l,a.child=i,l=a.child,l.memoizedState=Jc(t),l.childLanes=$c(e,c,t),a.memoizedState=Kc,oi(null,l)):($t(a),Fc(a,i))
    }

    var d=e.memoizedState;
    if(d!==null) {
      var m=d.dehydrated;
      if(m!==null)return av(e,a,i,c,l,m,d,t)
    }

    return n?(Ft(),n=l.fallback,i=a.mode,d=e.child,m=d.sibling,l=St(d, {
      mode:"hidden",children:l.children
    }),l.subtreeFlags=d.subtreeFlags&1206910976,m!==null?n=St(m,n):(n=yl(n,i,t,null),n.flags|=2),n.return=a,l.return=a,l.sibling=n,a.child=l,oi(null,l),l=a.child,n=e.child.memoizedState,n===null?n=Jc(t):(i=n.cachePool,i!==null?(d=ke._currentValue,i=i.parent!==d? {
      parent:d,pool:d
    }:i):i=Yd(),n= {
      baseLanes:n.baseLanes|t,cachePool:i
    }),l.memoizedState=n,l.childLanes=$c(e,c,t),a.memoizedState=Kc,oi(e.child,l)):($t(a),t=e.child,e=t.sibling,t=St(t, {
      mode:"visible",children:l.children
    }),t.return=a,t.sibling=null,e!==null&&(c=a.deletions,c===null?(a.deletions=[e],a.flags|=16):c.push(e)),a.child=t,a.memoizedState=null,t)
  }

  function Fc(e,a) {
    return a=Ou( {
      mode:"visible",children:a
    },e.mode),a.return=e,e.child=a
  }

  function Ou(e,a) {
    return e=xa(22,e,null,a),e.lanes=0,e
  }

  function Mu(e,a,t) {
    return Cl(a,e.child,null,t),e=Fc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e
  }

  function av(e,a,t,l,n,i,c,d) {
    if(t)return a.flags&256?($t(a),a.flags&=-257,Mu(e,a,d)):a.memoizedState!==null?(Ft(),a.child=e.child,a.flags|=128,null):(Ft(),i=n.fallback,c=a.mode,n=Ou( {
      mode:"visible",children:n.children
    },c),i=yl(i,c,d,null),i.flags|=2,n.return=a,i.return=a,n.sibling=i,a.child=n,Cl(a,e.child,null,d),n=a.child,n.memoizedState=Jc(d),n.childLanes=$c(e,l,d),a.memoizedState=Kc,oi(null,n));
    if($t(a),$o(i)) {
      if(l=i.nextSibling&&i.nextSibling.dataset,l)var m=l.dgst;
      return l=m,l!==""&&(n=Error(o(419)),n.stack="",n.digest=l,In( {
        value:n,source:null,stack:null
      })),Mu(e,a,d)
    }

    if(Je||bl(e,a,d,!1),l=(d&e.childLanes)!==0,Je||l) {
      if(Jt.current!==null)return Mu(e,a,d);
      if(l=Re,l!==null&&(n=Hr(l,d),n!==0&&n!==c.retryLane))throw c.retryLane=n,gl(e,n),Ea(l,e,n),Zc;
      return Jo(i)||Ju(),Mu(e,a,d)
    }

    return Jo(i)?(a.flags|=192,a.child=e.child,null):(e=c.treeContext,qe=$a(i.nextSibling),aa=a,fe=!0,Gt=null,Ka=!1,e!==null&&Hd(a,e),a=Fc(a,n.children),a.flags|=134221824,a)
  }

  function tm(e,a,t) {
    e.lanes|=a;
    var l=e.alternate;
    l!==null&&(l.lanes|=a),cu(e.return,a,t)
  }

  function lm(e) {
    for(var a=null;e!==null;) {
      var t=e.alternate;
      t!==null&&gu(t)===null&&(a=e),e=e.sibling
    }

    return a
  }

  function _u(e,a,t,l,n,i) {
    var c=e.memoizedState;
    c===null?e.memoizedState= {
      isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n,treeForkCount:i
    }:(c.isBackwards=a,c.rendering=null,c.renderingStartTime=0,c.last=l,c.tail=t,c.tailMode=n,c.treeForkCount=i)
  }

  function Ic(e) {
    var a=e.child;
    for(e.child=null;a!==null;) {
      var t=a.sibling;
      a.sibling=e.child,e.child=a,a=t
    }
  }

  function Wc(e,a,t) {
    var l=a.pendingProps,n=l.revealOrder,i=l.tail;
    l=l.children;
    var c=sa.current;
    if(a.flags&128)return ii(a,c),null;
    var d=(c&2)!==0;
    if(d?(c=c&1|2,a.flags|=128):c&=1,ii(a,c),n==="backwards"&&e!==null?(Ic(e),We(e,a,l,t),Ic(e)):We(e,a,l,t),l=fe?Fn:0,!d&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;) {
      if(e.tag===13)e.memoizedState!==null&&tm(e,t,a);
      else if(e.tag===19)tm(e,t,a);
      else if(e.child!==null) {
        e.child.return=e,e=e.child;
        continue
      }

      if(e===a)break e;
      for(;e.sibling===null;) {
        if(e.return===null||e.return===a)break e;
        e=e.return
      }

      e.sibling.return=e.return,e=e.sibling
    }

    switch(n) {
      case"backwards":t=lm(a.child),t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null,Ic(a)),_u(a,!0,n,null,i,l);
      break;
      case"unstable_legacy-backwards":for(t=null,n=a.child,a.child=null;n!==null;) {
        if(e=n.alternate,e!==null&&gu(e)===null) {
          a.child=n;
          break
        }

        e=n.sibling,n.sibling=t,t=n,n=e
      }

      _u(a,!0,t,null,i,l);
      break;
      case"together":_u(a,!1,null,null,void 0,l);
      break;
      case"independent":a.memoizedState=null;
      break;
      default:t=lm(a.child),t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),_u(a,!1,n,t,i,l)
    }

    return a.child
  }

  function nm(e,a,t) {
    var l=a.pendingProps;
    return Qt(a,a.type,l.value),We(e,a,l.children,t),a.child
  }

  function At(e,a,t) {
    if(e!==null&&(a.dependencies=e.dependencies),el|=a.lanes,(t&a.childLanes)===0)if(e!==null) {
      if(bl(e,a,t,!1),(t&a.childLanes)===0)return null
    } else return null;
    if(e!==null&&a.child!==e.child)throw Error(o(153));
    if(a.child!==null) {
      for(e=a.child,t=St(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=St(e,e.pendingProps),t.return=a;
      t.sibling=null
    }

    return a.child
  }

  function Pc(e,a) {
    return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&ou(e)))
  }

  function tv(e,a,t) {
    switch(a.tag) {
      case 3:Hi(a,a.stateNode.containerInfo),Qt(a,ke,e.memoizedState.cache),xl();
      break;
      case 27:case 5:Ts(a);
      break;
      case 4:Hi(a,a.stateNode.containerInfo);
      break;
      case 10:Qt(a,a.type,a.memoizedProps.value);
      break;
      case 31:if(a.memoizedState!==null)return a.flags|=128,Nc(a),null;
      break;
      case 13:var l=a.memoizedState;
      if(l!==null) {
        if(l.dehydrated!==null)return $t(a),a.flags|=128,null;
        l=bl(e,a,t,!1);
        var n=a.child.childLanes;
        return l||(t&n)!==0?am(e,a,t):($t(a),e=At(e,a,t),e!==null?e.sibling:null)
      }

      $t(a);
      break;
      case 19:if(a.flags&128)return Wc(e,a,t);
      if(n=(e.flags&128)!==0,l=(t&a.childLanes)!==0,l||(bl(e,a,t,!1),l=(t&a.childLanes)!==0),n) {
        if(l)return Wc(e,a,t);
        a.flags|=128
      }

      if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),ii(a,sa.current),l)break;
      return null;
      case 22:return a.lanes=0,$f(e,a,t,a.pendingProps);
      case 24:Qt(a,ke,e.memoizedState.cache)
    }

    return At(e,a,t)
  }

  function im(e,a,t) {
    if(e!==null)if(e.memoizedProps!==a.pendingProps)Je=!0;
    else {
      if(!Pc(e,t)&&(a.flags&128)===0)return Je=!1,tv(e,a,t);
      Je=(e.flags&131072)!==0
    } else Je=!1,fe&&(a.flags&1048576)!==0&&qd(a,Fn,a.index);
    switch(a.lanes=0,a.tag) {
      case 16:e: {
        var l=a.pendingProps;
        if(e=zl(a.elementType),a.type=e,typeof e=="function")uc(e)?(l=Ol(e,l),a.tag=1,a=Pf(null,a,e,l,t)):(a.tag=0,a=kc(null,a,e,l,t));
        else {
          if(e!=null) {
            var n=e.$$typeof;
            if(n===L) {
              a.tag=11,a=kf(null,a,e,l,t);
              break e
            } else if(n===me) {
              a.tag=14,a=Kf(null,a,e,l,t);
              break e
            } else if(n===we) {
              a.tag=10,a.type=e,a=nm(null,a,t);
              break e
            }
          }

          throw a=be(e)||e,Error(o(306,a,""))
        }
      }

      return a;
      case 0:return kc(e,a,a.type,a.pendingProps,t);
      case 1:return l=a.type,n=Ol(l,a.pendingProps),Pf(e,a,l,n,t);
      case 3:e: {
        if(Hi(a,a.stateNode.containerInfo),e===null)throw Error(o(387));
        l=a.pendingProps;
        var i=a.memoizedState;
        n=i.element,xc(e,a),ni(a,l,null,t);
        var c=a.memoizedState;
        if(l=c.cache,Qt(a,ke,l),l!==i.cache&&mc(a,[ke],t,!0),li(),l=c.element,i.isDehydrated)if(i= {
          element:l,isDehydrated:!1,cache:c.cache
        },a.updateQueue.baseState=i,a.memoizedState=i,a.flags&256) {
          a=em(e,a,l,t);
          break e
        } else if(l!==n) {
          n=Xa(Error(o(424)),a),In(n),a=em(e,a,l,t);
          break e
        } else {
          switch(e=a.stateNode.containerInfo,e.nodeType) {
            case 9:e=e.body;
            break;
            default:e=e.nodeName==="HTML"?e.ownerDocument.body:e
          }

          for(qe=$a(e.firstChild),aa=a,fe=!0,Gt=null,Ka=!0,t=Jd(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|134221824,t=t.sibling
        } else {
          if(xl(),l===n) {
            a=At(e,a,t);
            break e
          }

          We(e,a,l,t)
        }

        a=a.child
      }

      return a;
      case 26:return cn(e,a),e===null?(t=Mh(a.type,null,a.pendingProps,null))?a.memoizedState=t:fe||(a.stateNode=oh(a.type,a.pendingProps,qt.current,a)):a.memoizedState=Mh(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;
      case 27:return Ts(a),e===null&&fe&&(l=a.stateNode=Th(a.type,a.pendingProps,qt.current),aa=a,Ka=!0,n=qe,nl(a.type)?(Fo=n,qe=$a(l.firstChild)):qe=n),We(e,a,a.pendingProps.children,t),cn(e,a),e===null&&(a.flags|=4194304),a.child;
      case 5:return e===null&&fe&&((n=l=qe)&&(l=Fv(l,a.type,a.pendingProps,Ka),l!==null?(a.stateNode=l,aa=a,qe=$a(l.firstChild),Ka=!1,n=!0):n=!1),n||Yt(a)),Ts(a),n=a.type,i=a.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,Go(n,i)?l=null:c!==null&&Go(n,c)&&(a.flags|=32),a.memoizedState!==null&&(n=Cc(e,a,Z0,null,null,t),Tn._currentValue=n),cn(e,a),We(e,a,l,t),a.child;
      case 6:return e===null&&fe&&((e=t=qe)&&(t=Iv(t,a.pendingProps,Ka),t!==null?(a.stateNode=t,aa=a,qe=null,e=!0):e=!1),e||Yt(a)),null;
      case 13:return am(e,a,t);
      case 4:return Hi(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=Cl(a,null,l,t):We(e,a,l,t),a.child;
      case 11:return kf(e,a,a.type,a.pendingProps,t);
      case 7:return l=a.pendingProps,cn(e,a),We(e,a,l,t),a.child;
      case 8:return We(e,a,a.pendingProps.children,t),a.child;
      case 12:return We(e,a,a.pendingProps.children,t),a.child;
      case 10:return nm(e,a,t);
      case 9:return n=a.type._context,l=a.pendingProps.children,Sl(a),n=ia(n),l=l(n),a.flags|=1,We(e,a,l,t),a.child;
      case 14:return Kf(e,a,a.type,a.pendingProps,t);
      case 15:return Jf(e,a,a.type,a.pendingProps,t);
      case 19:return Wc(e,a,t);
      case 31:return ev(e,a,t);
      case 22:return $f(e,a,t,a.pendingProps);
      case 24:return Sl(a),l=ia(ke),e===null?(n=vc(),n===null&&(n=Re,i=hc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=t),n=i),a.memoizedState= {
        parent:l,cache:n
      },yc(a),Qt(a,ke,n)):((e.lanes&t)!==0&&(xc(e,a),ni(a,null,null,t),li()),n=e.memoizedState,i=a.memoizedState,n.parent!==l?(n= {
        parent:l,cache:l
      },a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),Qt(a,ke,l)):(l=i.cache,Qt(a,ke,l),l!==n.cache&&mc(a,[ke],t,!0))),We(e,a,a.pendingProps.children,t),a.child;
      case 30:return a.stateNode===null&&(a.stateNode= {
        autoName:null,paired:null,clones:null,ref:null
      }),l=a.pendingProps,l.name!=null&&l.name!=="auto"?a.flags|=e===null?18882560:18874368:fe&&uu(a),e!==null&&e.memoizedProps.name!==l.name?a.flags|=4194816:cn(e,a),We(e,a,l.children,t),a.child;
      case 29:throw a.pendingProps
    }

    throw Error(o(156,a.tag))
  }

  function Ot(e) {
    e.flags|=4
  }

  function eo(e,a,t,l,n) {
    var i;
    if((i=(e.mode&32)!==0)&&(i=t===null?Uh(a,l):Uh(a,l)&&(l.src!==t.src||l.srcSet!==t.srcSet)),i) {
      if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;
      else if(Vm())e.flags|=8192;
      else throw Tl=mu,gc
    } else e.flags&=-16777217
  }

  function um(e,a) {
    if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;
    else if(e.flags|=16777216,!qh(a))if(Vm())e.flags|=8192;
    else throw Tl=mu,gc
  }

  function Du(e,a) {
    a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Rr():536870912,e.lanes|=a,mn|=a)
  }

  function ri(e,a) {
    if(!fe)switch(e.tailMode) {
      case"visible":break;
      case"collapsed":for(var t=e.tail,l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;
      l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null;
      break;
      default:for(a=e.tail,t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;
      t===null?e.tail=null:t.sibling=null
    }
  }

  function He(e) {
    var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;
    if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&1206910976,l|=n.flags&1206910976,n.return=e,n=n.sibling;
    else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;
    return e.subtreeFlags|=l,e.childLanes=t,a
  }

  function lv(e,a,t) {
    var l=a.pendingProps;
    switch(oc(a),a.tag) {
      case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(a),null;
      case 1:return He(a),null;
      case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),zt(ke),wl(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(en(a)?Ot(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,dc())),He(a),null;
      case 26:var n=a.type,i=a.memoizedState;
      return e===null?(Ot(a),i!==null?(He(a),um(a,i)):(He(a),eo(a,n,null,l,t))):i?i!==e.memoizedState?(Ot(a),He(a),um(a,i)):(He(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ot(a),He(a),eo(a,n,e,l,t)),null;
      case 27:if(Bi(a),t=qt.current,n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ot(a);
      else {
        if(!l) {
          if(a.stateNode===null)throw Error(o(166));
          return He(a),a.subtreeFlags&=-33554433,null
        }

        e=da.current,en(a)?Bd(a):(e=Th(n,l,t),a.stateNode=e,Ot(a))
      }

      return He(a),a.subtreeFlags&=-33554433,null;
      case 5:if(Bi(a),n=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&Ot(a);
      else {
        if(!l) {
          if(a.stateNode===null)throw Error(o(166));
          return He(a),a.subtreeFlags&=-33554433,null
        }

        if(i=da.current,en(a))Bd(a);
        else {
          var c=bi(qt.current);
          switch(i) {
            case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);
            break;
            case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);
            break;
            default:switch(n) {
              case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);
              break;
              case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);
              break;
              case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);
              break;
              case"select":i=typeof l.is=="string"?c.createElement("select", {
                is:l.is
              }):c.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);
              break;
              default:i=typeof l.is=="string"?c.createElement(n, {
                is:l.is
              }):c.createElement(n)
            }
          }

          i[na]=a,i[ya]=l;
          e:for(c=a.child;c!==null;) {
            if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);
            else if(c.tag!==4&&c.tag!==27&&c.child!==null) {
              c.child.return=c,c=c.child;
              continue
            }

            if(c===a)break e;
            for(;c.sibling===null;) {
              if(c.return===null||c.return===a)break e;
              c=c.return
            }

            c.sibling.return=c.return,c=c.sibling
          }

          a.stateNode=i;
          e:switch(oa(i,n,l),n) {
            case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;
            break e;
            case"img":l=!0;
            break e;
            default:l=!1
          }

          l&&Ot(a)
        }
      }

      return He(a),a.subtreeFlags&=-33554433,eo(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,t),null;
      case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&Ot(a);
      else {
        if(typeof l!="string"&&a.stateNode===null)throw Error(o(166));
        if(e=qt.current,en(a)) {
          if(e=a.stateNode,t=a.memoizedProps,l=null,n=aa,n!==null)switch(n.tag) {
            case 27:case 5:l=n.memoizedProps
          }

          e[na]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||ih(e.nodeValue,t)),e||Yt(a,!0)
        } else e=bi(e).createTextNode(l),e[na]=a,a.stateNode=e
      }

      return He(a),null;
      case 31:if(t=a.memoizedState,e===null||e.memoizedState!==null) {
        if(l=en(a),t!==null) {
          if(e===null) {
            if(!l)throw Error(o(318));
            if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));
            e[na]=a
          } else xl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;
          He(a),e=!1
        } else t=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;
        if(!e)return a.flags&256?(_a(a),a):(_a(a),null);
        if((a.flags&128)!==0)throw Error(o(558))
      }

      return He(a),null;
      case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null) {
        if(n=en(a),l!==null&&l.dehydrated!==null) {
          if(e===null) {
            if(!n)throw Error(o(318));
            if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));
            n[na]=a
          } else xl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;
          He(a),n=!1
        } else n=dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;
        if(!n)return a.flags&256?(_a(a),a):(_a(a),null)
      }

      return _a(a),(a.flags&128)!==0?(a.lanes=t,a):(t=l!==null,e=e!==null&&e.memoizedState!==null,t&&(l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),t!==e&&t&&(a.child.flags|=8192),Du(a,a.updateQueue),He(a),null);
      case 4:return wl(),e===null&&Ho(a.stateNode.containerInfo),a.flags|=67108864,He(a),null;
      case 10:return zt(a.type),He(a),null;
      case 19:if(zc(a),l=a.memoizedState,l===null)return He(a),null;
      if(n=(a.flags&128)!==0,i=l.rendering,i===null)if(n)ri(l,!1);
      else {
        if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;) {
          if(i=gu(e),i!==null) {
            for(a.flags|=128,ri(l,!1),e=i.updateQueue,a.updateQueue=e,Du(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)Dd(t,e),t=t.sibling;
            return ii(a,sa.current&1|2),fe&&Et(a,l.treeForkCount),a.child
          }

          e=e.sibling
        }

        l.tail!==null&&Ta()>Xu&&(a.flags|=128,n=!0,ri(l,!1),a.lanes=4194304)
      } else {
        if(!n)if(e=gu(i),e!==null) {
          if(a.flags|=128,n=!0,e=e.updateQueue,a.updateQueue=e,Du(a,e),ri(l,!0),l.tail===null&&l.tailMode!=="collapsed"&&l.tailMode!=="visible"&&!i.alternate&&!fe)return He(a),null
        } else 2*Ta()-l.renderingStartTime>Xu&&t!==536870912&&(a.flags|=128,n=!0,ri(l,!1),a.lanes=4194304);
        l.isBackwards?(i.sibling=a.child,a.child=i):(e=l.last,e!==null?e.sibling=i:a.child=i,l.last=i)
      }

      if(l.tail!==null) {
        e=l.tail;
        e: {
          for(t=e;t!==null;) {
            if(t.alternate!==null) {
              t=!1;
              break e
            }

            t=t.sibling
          }

          t=!0
        }

        return l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ta(),e.sibling=null,i=sa.current,i=n?i&1|2:i&1,l.tailMode==="visible"||l.tailMode==="collapsed"||!t||fe?ii(a,i):(t=i,Se(ua,a),Se(sa,t),fa===null&&(fa=a)),fe&&Et(a,l.treeForkCount),e
      }

      return He(a),null;
      case 22:case 23:return _a(a),Ec(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(He(a),a.subtreeFlags&6&&(a.flags|=8192)):He(a),t=a.updateQueue,t!==null&&Du(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&ee(Nl),null;
      case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),zt(ke),He(a),null;
      case 25:return null;
      case 30:return a.flags|=33554432,He(a),null
    }

    throw Error(o(156,a.tag))
  }

  function nv(e,a) {
    switch(oc(a),a.tag) {
      case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;
      case 3:return zt(ke),wl(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;
      case 26:case 27:case 5:return Bi(a),null;
      case 31:if(a.memoizedState!==null) {
        if(_a(a),a.alternate===null)throw Error(o(340));
        xl()
      }

      return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;
      case 13:if(_a(a),e=a.memoizedState,e!==null&&e.dehydrated!==null) {
        if(a.alternate===null)throw Error(o(340));
        xl()
      }

      return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;
      case 19:return zc(a),e=a.flags,e&65536?(a.flags=e&-65537|128,e=a.memoizedState,e!==null&&(e.rendering=null,e.tail=null),a.flags|=4,a):null;
      case 4:return wl(),null;
      case 10:return zt(a.type),null;
      case 22:case 23:return _a(a),Ec(),e!==null&&ee(Nl),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;
      case 24:return zt(ke),null;
      case 25:return null;
      default:return null
    }
  }

  function sm(e,a) {
    switch(oc(a),a.tag) {
      case 3:zt(ke),wl();
      break;
      case 26:case 27:case 5:Bi(a);
      break;
      case 4:wl();
      break;
      case 31:a.memoizedState!==null&&_a(a);
      break;
      case 13:_a(a);
      break;
      case 19:zc(a);
      break;
      case 10:zt(a.type);
      break;
      case 22:case 23:_a(a),Ec(),e!==null&&ee(Nl);
      break;
      case 24:zt(ke)
    }
  }

  function di(e,a) {
    try {
      var t=a.updateQueue,l=t!==null?t.lastEffect:null;
      if(l!==null) {
        var n=l.next;
        t=n;
        do {
          if((t.tag&e)===e) {
            l=void 0;
            var i=t.create,c=t.inst;
            l=i(),c.destroy=l
          }

          t=t.next
        } while(t!==n)
      }
    } catch(d) {
      Me(a,a.return,d)
    }
  }

  function It(e,a,t) {
    try {
      var l=a.updateQueue,n=l!==null?l.lastEffect:null;
      if(n!==null) {
        var i=n.next;
        l=i;
        do {
          if((l.tag&e)===e) {
            var c=l.inst,d=c.destroy;
            if(d!==void 0) {
              c.destroy=void 0,n=a;
              var m=t,j=d;
              try {
                j()
              } catch(T) {
                Me(n,m,T)
              }
            }
          }

          l=l.next
        } while(l!==i)
      }
    } catch(T) {
      Me(a,a.return,T)
    }
  }

  function cm(e) {
    var a=e.updateQueue;
    if(a!==null) {
      var t=e.stateNode;
      try {
        Fd(a,t)
      } catch(l) {
        Me(e,e.return,l)
      }
    }
  }

  function om(e,a,t) {
    t.props=Ol(e.type,e.memoizedProps),t.state=e.memoizedState;
    try {
      t.componentWillUnmount()
    } catch(l) {
      Me(e,a,l)
    }
  }

  function ot(e,a) {
    try {
      var t=e.ref;
      if(t!==null) {
        switch(e.tag) {
          case 26:case 27:case 5:var l=e.stateNode;
          break;
          case 30:var n=e.stateNode,i=jt(e.memoizedProps,n);
          (n.ref===null||n.ref.name!==i)&&(n.ref=vh(i)),l=n.ref;
          break;
          case 7:if(e.stateNode===null) {
            var c=new Ha(e);
            b(e.child,!1,Jv,c,void 0,void 0),e.stateNode=c
          }

          l=e.stateNode;
          break;
          default:l=e.stateNode
        }

        typeof t=="function"?e.refCleanup=t(l):t.current=l
      }
    } catch(d) {
      Me(e,a,d)
    }
  }

  function ca(e,a) {
    var t=e.ref,l=e.refCleanup;
    if(t!==null)if(typeof l=="function")try {
      l()
    } catch(n) {
      Me(e,a,n)
    } finally {
      e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)
    } else if(typeof t=="function")try {
      t(null)
    } catch(n) {
      Me(e,a,n)
    } else t.current=null
  }

  function Ru(e,a) {
    if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&a!==null)for(var t=0;t<a.length;t++)Sh(e.stateNode,a[t])
  }

  function rm(e) {
    for(var a=e.return;a!==null&&(to(a)&&Sh(e.stateNode,a.stateNode),!ao(a));)a=a.return
  }

  function fi(e) {
    for(var a=e.return;a!==null&&(to(a)&&$v(e.stateNode,a.stateNode),!ao(a));)a=a.return
  }

  function ao(e) {
    return e.tag===5||e.tag===3||e.tag===27
  }

  function to(e) {
    return e&&e.tag===7&&e.stateNode!==null
  }

  function lo(e) {
    var a=e.type,t=e.memoizedProps,l=e.stateNode;
    try {
      e:switch(a) {
        case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();
        break e;
        case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)
      }
    } catch(n) {
      Me(e,e.return,n)
    }
  }

  function no(e,a,t) {
    try {
      var l=e.stateNode;
      Mv(l,e.type,t,a),l[ya]=a
    } catch(n) {
      Me(e,e.return,n)
    }
  }

  function dm(e) {
    return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&nl(e.type)||e.tag===4
  }

  function io(e) {
    e:for(;;) {
      for(;e.sibling===null;) {
        if(e.return===null||dm(e.return))return null;
        e=e.return
      }

      for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;) {
        if(e.tag===27&&nl(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;
        e.child.return=e,e=e.child
      }

      if(!(e.flags&2))return e.stateNode
    }
  }

  function uo(e,a,t,l) {
    var n=e.tag;
    if(n===5||n===6)n=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(n,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(n),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=ut)),Ru(e,l),ze=!0;
    else if(n!==4&&(n===27&&(Ru(e,l),l=null,nl(e.type)&&(t=e.stateNode,a=null)),e=e.child,e!==null))for(uo(e,a,t,l),e=e.sibling;e!==null;)uo(e,a,t,l),e=e.sibling
  }

  function Uu(e,a,t,l) {
    var n=e.tag;
    if(n===5||n===6)n=e.stateNode,a?t.insertBefore(n,a):t.appendChild(n),Ru(e,l),ze=!0;
    else if(n!==4&&(n===27&&(Ru(e,l),l=null,nl(e.type)&&(t=e.stateNode)),e=e.child,e!==null))for(Uu(e,a,t,l),e=e.sibling;e!==null;)Uu(e,a,t,l),e=e.sibling
  }

  function fm(e) {
    var a=e.stateNode,t=e.memoizedProps;
    try {
      for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);
      oa(a,l,t),a[na]=e,a[ya]=t
    } catch(i) {
      Me(e,e.return,i)
    }
  }

  var qu=!1,Da=null;
  function mm(e) {
    (e.tag===30||(e.subtreeFlags&33554432)!==0)&&(qu=!0)
  }

  var rt=null;
  function hm() {
    var e=rt;
    return rt=null,e
  }

  var ja=0;
  function on(e,a,t,l,n) {
    return ja=0,pm(e.child,a,t,l,n)
  }

  function pm(e,a,t,l,n) {
    for(var i=!1;e!==null;) {
      if(e.tag===5) {
        var c=e.stateNode;
        if(l!==null) {
          var d=Xo(c);
          l.push(d),d.view&&(i=!0)
        } else i||Xo(c).view&&(i=!0);
        qu=!0,hh(c,ja===0?a:a+"_"+ja,t),ja++
      } else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||pm(e.child,a,t,l,n)&&(i=!0));
      e=e.sibling
    }

    return i
  }

  function dt(e,a) {
    for(;e!==null;)e.tag===5?ph(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&a||dt(e.child,a)),e=e.sibling
  }

  function Hu(e) {
    if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;) {
      if((e.tag!==22||e.memoizedState===null)&&(Hu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)) {
        var a=e.memoizedProps;
        if(a.name==null||a.name==="auto")throw Error(o(544));
        var t=a.name;
        a=bt(a.default,a.share),a!=="none"&&(on(e,t,a,null,!1)||dt(e.child,!1))
      }

      e=e.sibling
    }
  }

  function so(e,a) {
    if(e.tag===30) {
      var t=e.stateNode,l=e.memoizedProps,n=jt(l,t),i=bt(l.default,t.paired?l.share:l.enter);
      i!=="none"?on(e,n,i,null,!1)?(Hu(e),t.paired||a||gn(e,l.onEnter)):dt(e.child,!1):Hu(e)
    } else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)so(e,a),e=e.sibling;
    else Hu(e)
  }

  function co(e) {
    if(Da!==null&&Da.size!==0) {
      var a=Da;
      if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;) {
        if(e.tag!==22||e.memoizedState===null) {
          if(e.tag===30&&(e.flags&18874368)!==0) {
            var t=e.memoizedProps,l=t.name;
            if(l!=null&&l!=="auto") {
              var n=a.get(l);
              if(n!==void 0) {
                var i=bt(t.default,t.share);
                if(i!=="none"&&(on(e,l,i,null,!1)?(i=e.stateNode,n.paired=i,i.paired=n,gn(e,t.onShare)):dt(e.child,!1)),a.delete(l),a.size===0)break
              }
            }
          }

          co(e)
        }

        e=e.sibling
      }
    }
  }

  function oo(e) {
    if(e.tag===30) {
      var a=e.memoizedProps,t=jt(a,e.stateNode),l=Da!==null?Da.get(t):void 0,n=bt(a.default,l!==void 0?a.share:a.exit);
      n!=="none"&&(on(e,t,n,null,!1)?l!==void 0?(n=e.stateNode,l.paired=n,n.paired=l,Da.delete(t),gn(e,a.onShare)):gn(e,a.onExit):dt(e.child,!1)),Da!==null&&co(e)
    } else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)oo(e),e=e.sibling;
    else Da!==null&&co(e)
  }

  function vm(e) {
    for(e=e.child;e!==null;) {
      if(e.tag===30) {
        var a=e.memoizedProps,t=jt(a,e.stateNode);
        a=bt(a.default,a.update),e.flags&=-5,a!=="none"&&on(e,t,a,e.memoizedState=[],!1)
      } else(e.subtreeFlags&33554432)!==0&&vm(e);
      e=e.sibling
    }
  }

  function ro(e) {
    if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;) {
      if(e.tag!==22||e.memoizedState===null) {
        if(e.tag===30&&(e.flags&18874368)!==0) {
          var a=e.stateNode;
          a.paired!==null&&(a.paired=null,dt(e.child,!1))
        }

        ro(e)
      }

      e=e.sibling
    }
  }

  function Bu(e) {
    if(e.tag===30)e.stateNode.paired=null,dt(e.child,!1),ro(e);
    else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bu(e),e=e.sibling;
    else ro(e)
  }

  function gm(e) {
    for(e=e.child;e!==null;)e.tag===30?dt(e.child,!1):(e.subtreeFlags&33554432)!==0&&gm(e),e=e.sibling
  }

  function fo(e,a,t,l,n,i,c) {
    for(var d=!1;a!==null;) {
      if(a.tag===5) {
        var m=a.stateNode;
        if(i!==null&&ja<i.length) {
          var j=i[ja],T=Xo(m);
          (j.view||T.view)&&(d=!0);
          var D;
          if(D=(e.flags&4)===0)if(T.clip)D=!0;
          else {
            D=j.rect;
            var y=T.rect;
            D=D.y!==y.y||D.x!==y.x||D.height!==y.height||D.width!==y.width
          }

          D&&(e.flags|=4),T.abs?T=!j.abs:(j=j.rect,T=T.rect,T=j.height!==T.height||j.width!==T.width),T&&(e.flags|=32)
        } else e.flags|=32;
        (e.flags&4)!==0&&hh(m,ja===0?t:t+"_"+ja,n),d&&(e.flags&4)!==0||(rt===null&&(rt=[]),rt.push(m,ja===0?l:l+"_"+ja,a.memoizedProps)),ja++
      } else(a.tag!==22||a.memoizedState===null)&&(a.tag===30&&c?e.flags|=a.flags&32:fo(e,a.child,t,l,n,i,c)&&(d=!0));
      a=a.sibling
    }

    return d
  }

  function ym(e,a) {
    for(e=e.child;e!==null;) {
      if(e.tag===30) {
        var t=e.memoizedProps,l=e.stateNode,n=jt(t,l),i=bt(t.default,t.update),c;
        c=e.memoizedState,e.memoizedState=null,l=e;
        var d=e.child;
        ja=0,n=fo(l,d,n,n,i,c,!1),(e.flags&4)!==0&&n&&gn(e,t.onUpdate)
      } else(e.subtreeFlags&33554432)!==0&&ym(e);
      e=e.sibling
    }
  }

  var ta=!1,Ae=!1,ft=!1,mo=!1,xm=typeof WeakSet=="function"?WeakSet:Set,la=null,mt=!1,mi=!1,wu=!1,ho=!1;
  function iv(e,a,t) {
    if(e=e.containerInfo,Lo=Cn,e=Sd(e),Ps(e)) {
      if("selectionStart"in e)var l= {
        start:e.selectionStart,end:e.selectionEnd
      };
      else e: {
        l=(l=e.ownerDocument)&&l.defaultView||window;
        var n=l.getSelection&&l.getSelection();
        if(n&&n.rangeCount!==0) {
          l=n.anchorNode;
          var i=n.anchorOffset,c=n.focusNode;
          n=n.focusOffset;
          try {
            l.nodeType,c.nodeType
          } catch {
            l=null;
            break e
          }

          var d=0,m=-1,j=-1,T=0,D=0,y=e,N=null;
          a:for(;;) {
            for(var w;y!==l||i!==0&&y.nodeType!==3||(m=d+i),y!==c||n!==0&&y.nodeType!==3||(j=d+n),y.nodeType===3&&(d+=y.nodeValue.length),(w=y.firstChild)!==null;)N=y,y=w;
            for(;;) {
              if(y===e)break a;
              if(N===l&&++T===i&&(m=d),N===c&&++D===n&&(j=d),(w=y.nextSibling)!==null)break;
              y=N,N=y.parentNode
            }

            y=w
          }

          l=m===-1||j===-1?null: {
            start:m,end:j
          }
        } else l=null
      }

      l=l|| {
        start:0,end:0
      }
    } else l=null;
    for(Vo= {
      focusedElem:e,selectionRange:l
    },Cn=!1,t=(t&335544064)===t,la=a,a=t?9270:1024;la!==null;) {
      if(e=la,t&&(l=e.deletions,l!==null))for(i=0;i<l.length;i++)t&&oo(l[i]);
      if(e.alternate===null&&(e.flags&2)!==0)t&&mm(e),Lu(t);
      else {
        if(e.tag===22) {
          if(l=e.alternate,e.memoizedState!==null) {
            l!==null&&l.memoizedState===null&&t&&oo(l),Lu(t);
            continue
          } else if(l!==null&&l.memoizedState!==null) {
            t&&mm(e),Lu(t);
            continue
          }
        }

        l=e.child,(e.subtreeFlags&a)!==0&&l!==null?(l.return=e,la=l):(t&&vm(e),Lu(t))
      }
    }

    Da=null
  }

  function Lu(e) {
    for(;la!==null;) {
      var a=la,t=e,l=a.alternate,n=a.flags;
      switch(a.tag) {
        case 0:case 11:case 15:break;
        case 1:if((n&1024)!==0&&l!==null) {
          t=void 0,n=l.memoizedProps,l=l.memoizedState;
          var i=a.stateNode;
          try {
            var c=Ol(a.type,n);
            t=i.getSnapshotBeforeUpdate(c,l),i.__reactInternalSnapshotBeforeUpdate=t
          } catch(d) {
            Me(a,a.return,d)
          }
        }

        break;
        case 3:if((n&1024)!==0) {
          if(l=a.stateNode.containerInfo,t=l.nodeType,t===9)Ko(l);
          else if(t===1)switch(l.nodeName) {
            case"HEAD":case"HTML":case"BODY":Ko(l);
            break;
            default:l.textContent=""
          }
        }

        break;
        case 5:case 26:case 27:case 6:case 4:case 17:break;
        case 30:t&&l!==null&&(t=jt(l.memoizedProps,l.stateNode),n=a.memoizedProps,n=bt(n.default,n.update),n!=="none"&&on(l,t,n,l.memoizedState=[],!0));
        break;
        default:if((n&1024)!==0)throw Error(o(163))
      }

      if(l=a.sibling,l!==null) {
        l.return=a.return,la=l;
        break
      }

      la=a.return
    }
  }

  function jm(e,a,t) {
    var l=t.flags;
    switch(t.tag) {
      case 0:case 11:case 15:ht(e,t),l&4&&di(5,t);
      break;
      case 1:if(ht(e,t),l&4)if(e=t.stateNode,a===null)try {
        e.componentDidMount()
      } catch(c) {
        Me(t,t.return,c)
      } else {
        var n=Ol(t.type,a.memoizedProps);
        a=a.memoizedState;
        try {
          e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)
        } catch(c) {
          Me(t,t.return,c)
        }
      }

      l&64&&cm(t),l&512&&ot(t,t.return);
      break;
      case 3:if(ht(e,t),l&64&&(e=t.updateQueue,e!==null)) {
        if(a=null,t.child!==null)switch(t.child.tag) {
          case 27:case 5:a=t.child.stateNode;
          break;
          case 1:a=t.child.stateNode
        }

        try {
          Fd(e,a)
        } catch(c) {
          Me(t,t.return,c)
        }
      }

      break;
      case 27:a===null&&l&4&&fm(t);
      case 26:case 5:ht(e,t),a===null&&l&4&&lo(t),l&512&&ot(t,t.return);
      break;
      case 12:ht(e,t);
      break;
      case 31:ht(e,t),l&4&&Nm(e,t);
      break;
      case 13:ht(e,t),l&4&&zm(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=gv.bind(null,t),Wv(e,t))));
      break;
      case 22:if(l=t.memoizedState!==null||ta,!l) {
        var i=a!==null&&a.memoizedState!==null||Ae;
        a=ta,n=Ae,ta=l,(Ae=i)&&!n?(l=2,(t.subtreeFlags&8772)!==0&&(l|=1),tt(e,t,l)):ht(e,t),ta=a,Ae=n
      }

      break;
      case 30:ht(e,t),l&512&&ot(t,t.return);
      break;
      case 7:l&512&&ot(t,t.return);
      default:ht(e,t)
    }
  }

  function po(e,a) {
    for(e=e.child;e!==null;)bm(e,a),e=e.sibling
  }

  function bm(e,a) {
    switch(e.tag) {
      case 5:case 26:try {
        var t=e.stateNode;
        if(a) {
          var l=t.style;
          typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"
        } else {
          var n=e.stateNode,i=e.memoizedProps.style,c=i!=null&&i.hasOwnProperty("display")?i.display:null;
          n.style.display=c==null||typeof c=="boolean"?"":(""+c).trim()
        }
      } catch(m) {
        Me(e,e.return,m)
      }

      vo(e,a);
      break;
      case 6:try {
        e.stateNode.nodeValue=a?"":e.memoizedProps,ze=!0
      } catch(m) {
        Me(e,e.return,m)
      }

      break;
      case 18:try {
        var d=e.stateNode;
        a?mh(d,!0):mh(e.stateNode,!1)
      } catch(m) {
        Me(e,e.return,m)
      }

      break;
      case 22:case 23:e.memoizedState===null&&po(e,a);
      break;
      default:po(e,a)
    }
  }

  function vo(e,a) {
    if(e.subtreeFlags&67108864)for(e=e.child;e!==null;) {
      e: {
        var t=e,l=a;
        switch(t.tag) {
          case 4:bm(t,l);
          break e;
          case 22:t.memoizedState===null&&vo(t,l);
          break e;
          default:vo(t,l)
        }
      }

      e=e.sibling
    }
  }

  function Sm(e) {
    var a=e.alternate;
    a!==null&&(e.alternate=null,Sm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Xi(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null
  }

  var Be=null,ba=!1;
  function et(e,a,t) {
    for(t=t.child;t!==null;)Em(e,a,t),t=t.sibling
  }

  function Em(e,a,t) {
    if(Ca&&typeof Ca.onCommitFiberUnmount=="function")try {
      Ca.onCommitFiberUnmount(Hn,t)
    } catch{}switch(t.tag) {
      case 26:Ae||ca(t,a),et(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&!Ae&&(t=t.stateNode,t.parentNode.removeChild(t));
      break;
      case 27:Ae||ca(t,a),fi(t);
      var l=Be,n=ba;
      nl(t.type)&&(Be=t.stateNode,ba=!1),et(e,a,t),Ch(t.stateNode,t.type,t.memoizedProps),Be=l,ba=n;
      break;
      case 5:Ae||ca(t,a),fi(t);
      case 6:if(t.tag===6&&fi(t),l=Be,n=ba,Be=null,et(e,a,t),Be=l,ba=n,Be!==null)if(ba)try {
        (Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(t.stateNode),ze=!0
      } catch(i) {
        Me(t,a,i)
      } else try {
        Be.removeChild(t.stateNode),ze=!0
      } catch(i) {
        Me(t,a,i)
      }

      break;
      case 18:Be!==null&&(ba?(e=Be,fh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),An(e)):fh(Be,t.stateNode));
      break;
      case 4:l=Be,n=ba,Be=t.stateNode.containerInfo,ba=!0,et(e,a,t),Be=l,ba=n;
      break;
      case 0:case 11:case 14:case 15:It(2,t,a),Ae||It(4,t,a),et(e,a,t);
      break;
      case 1:Ae||(ca(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&om(t,a,l)),et(e,a,t);
      break;
      case 21:et(e,a,t);
      break;
      case 22:Ae=(l=Ae)||t.memoizedState!==null,et(e,a,t),Ae=l;
      break;
      case 30:ca(t,a),et(e,a,t);
      break;
      case 7:Ae||ca(t,a),et(e,a,t);
      break;
      default:et(e,a,t)
    }
  }

  function Nm(e,a) {
    if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))) {
      e=e.dehydrated;
      try {
        An(e)
      } catch(t) {
        Me(a,a.return,t)
      }
    }
  }

  function zm(e,a) {
    if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try {
      An(e)
    } catch(t) {
      Me(a,a.return,t)
    }
  }

  function uv(e) {
    switch(e.tag) {
      case 31:case 13:case 19:var a=e.stateNode;
      return a===null&&(a=e.stateNode=new xm),a;
      case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new xm),a;
      default:throw Error(o(435,e.tag))
    }
  }

  function Vu(e,a) {
    var t=uv(e);
    a.forEach(function(l) {
      if(!t.has(l)) {
        t.add(l);var n=yv.bind(null,e,l);l.then(n,n)
      }
    })
  }

  function pa(e,a,t) {
    var l=a.deletions;
    if(l!==null)for(var n=0;n<l.length;n++) {
      var i=l[n],c=e,d=a,m=d;
      e:for(;m!==null;) {
        switch(m.tag) {
          case 27:if(nl(m.type)) {
            Be=m.stateNode,ba=!1;
            break e
          }

          break;
          case 5:Be=m.stateNode,ba=!1;
          break e;
          case 3:case 4:Be=m.stateNode.containerInfo,ba=!0;
          break e
        }

        m=m.return
      }

      if(Be===null)throw Error(o(160));
      Em(c,d,i),Be=null,ba=!1,c=i.alternate,c!==null&&(c.return=null),i.return=null
    }

    if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Tm(a,e,t),a=a.sibling
  }

  var at=null;
  function Tm(e,a,t) {
    var l=e.alternate,n=e.flags;
    switch(e.tag) {
      case 0:case 11:case 14:case 15:if(n&4&&(l=e.updateQueue,l=l!==null?l.events:null,l!==null))for(var i=0;i<l.length;i++) {
        var c=l[i];
        c.ref.impl=c.nextImpl
      }

      pa(a,e,t),va(e),n&4&&(It(3,e,e.return),di(3,e),It(5,e,e.return));
      break;
      case 1:pa(a,e,t),va(e),n&512&&(Ae||l===null||ca(l,l.return)),n&64&&ta&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));
      break;
      case 26:if(i=at,pa(a,e,t),va(e),n&512&&(Ae||l===null||ca(l,l.return)),n&4)if(n=l!==null?l.memoizedState:null,t=e.memoizedState,l===null)if(t===null)if(e.stateNode===null)if(ta)e.stateNode=oh(e.type,e.memoizedProps,a.containerInfo,e);
      else {
        e: {
          a=e.type,t=e.memoizedProps,n=i.ownerDocument||i;
          a:switch(a) {
            case"title":l=n.getElementsByTagName("title")[0],(!l||l[Ln]||l[na]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(a),n.head.insertBefore(l,n.querySelector("head > title"))),oa(l,a,t),l[na]=e,ea(l),a=l;
            break e;
            case"link":if(i=Rh("link","href",n).get(a+(t.href||""))) {
              for(c=0;c<i.length;c++)if(l=i[c],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)) {
                i.splice(c,1);
                break a
              }
            }

            l=n.createElement(a),oa(l,a,t),n.head.appendChild(l);
            break;
            case"meta":if(i=Rh("meta","content",n).get(a+(t.content||""))) {
              for(c=0;c<i.length;c++)if(l=i[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)) {
                i.splice(c,1);
                break a
              }
            }

            l=n.createElement(a),oa(l,a,t),n.head.appendChild(l);
            break;
            default:throw Error(o(468,a))
          }

          l[na]=e,ea(l),a=l
        }

        e.stateNode=a
      } else ta||er(i,e.type,e.stateNode);
      else e.stateNode=Dh(i,t,e.memoizedProps);
      else n!==t?(n===null?(a=l.stateNode,a===null||Ae||a.parentNode.removeChild(a)):n.count--,t===null?ta||er(i,e.type,e.stateNode):Dh(i,t,e.memoizedProps)):t===null&&e.stateNode!==null&&no(e,e.memoizedProps,l.memoizedProps);
      break;
      case 27:pa(a,e,t),va(e),n&512&&(Ae||l===null||ca(l,l.return)),l!==null&&n&4&&no(e,e.memoizedProps,l.memoizedProps);
      break;
      case 5:if(i=ft,ft=!1,pa(a,e,t),ft=i,va(e),n&512&&(Ae||l===null||ca(l,l.return)),e.flags&32) {
        a=e.stateNode;
        try {
          Xl(a,""),ze=!0
        } catch(T) {
          Me(e,e.return,T)
        }
      }

      n&4&&e.stateNode!=null&&(a=e.memoizedProps,no(e,a,l!==null?l.memoizedProps:a)),n&1024&&(mo=!0);
      break;
      case 6:if(pa(a,e,t),va(e),n&4) {
        if(e.stateNode===null)throw Error(o(162));
        a=e.memoizedProps,t=e.stateNode;
        try {
          t.nodeValue=a,ze=!0
        } catch(T) {
          Me(e,e.return,T)
        }
      }

      break;
      case 3:if(ze=!1,as=null,i=at,at=Si(a.containerInfo),pa(a,e,t),at=i,va(e),n&4&&l!==null&&l.memoizedState.isDehydrated)try {
        An(a.containerInfo)
      } catch(T) {
        Me(e,e.return,T)
      }

      mo&&(mo=!1,Cm(e)),ze=!1;
      break;
      case 4:n=ft,ft=ta,l=kr(),i=at,at=Si(e.stateNode.containerInfo),pa(a,e,t),va(e),at=i,ze&&mi&&(wu=!0),ze=l,ft=n;
      break;
      case 12:pa(a,e,t),va(e);
      break;
      case 31:pa(a,e,t),va(e),n&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vu(e,a)));
      break;
      case 13:pa(a,e,t),va(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Qu=Ta()),n&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vu(e,a)));
      break;
      case 22:i=e.memoizedState!==null,c=l!==null&&l.memoizedState!==null;
      var d=ta,m=Ae,j=ft;
      ta=d||i,ft=j||i,Ae=m||c,pa(a,e,t),Ae=m,ft=j,ta=d,va(e),n&8192&&(a=e.stateNode,a._visibility=i?a._visibility&-2:a._visibility|1,!i||l===null||c||ta||Ae||(a=c||Ae,t=ta,l=Ae,ta=i||ta,Ae=a,Wt(e,2),ta=t,Ae=l),!i&&ft||po(e,i)),n&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Vu(e,t))));
      break;
      case 19:pa(a,e,t),va(e),n&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Vu(e,a)));
      break;
      case 30:n&512&&(Ae||l===null||ca(l,l.return)),n=kr(),i=mi,c=(t&335544064)===t,d=e.memoizedProps,mi=c&&bt(d.default,d.update)!=="none",pa(a,e,t),va(e),c&&l!==null&&ze&&(e.flags|=4),mi=i,ze=n;
      break;
      case 21:break;
      case 7:n&512&&(Ae||l===null||ca(l,l.return)),l&&l.stateNode!==null&&(l.stateNode._fragmentFiber=e);
      default:pa(a,e,t),va(e)
    }
  }

  function va(e) {
    var a=e.flags;
    if(a&2) {
      try {
        for(var t,l=e.return;l!==null;) {
          if(dm(l)) {
            t=l;
            break
          }

          l=l.return
        }

        l=null;
        for(var n=e.return;n!==null;) {
          if(to(n)) {
            var i=n.stateNode;
            l===null?l=[i]:l.push(i)
          }

          if(ao(n))break;
          n=n.return
        }

        var c=l;
        if(t==null)throw Error(o(160));
        switch(t.tag) {
          case 27:var d=t.stateNode,m=io(e);
          Uu(e,m,d,c);
          break;
          case 5:var j=t.stateNode;
          t.flags&32&&(Xl(j,""),t.flags&=-33);
          var T=io(e);
          Uu(e,T,j,c);
          break;
          case 3:case 4:var D=t.stateNode.containerInfo,y=io(e);
          uo(e,y,D,c);
          break;
          default:throw Error(o(161))
        }
      } catch(N) {
        Me(e,e.return,N)
      }

      e.flags&=-3
    }

    a&4096&&(e.flags&=-4097)
  }

  function Cm(e) {
    if(e.subtreeFlags&1024)for(e=e.child;e!==null;) {
      var a=e;
      Cm(a),a.tag===5&&a.flags&1024&&(a=a.stateNode,Cn=!0,a.reset(),Cn=!1),e=e.sibling
    }
  }

  function rn(e,a) {
    if(a.subtreeFlags&9270)for(a=a.child;a!==null;)Am(a,e),a=a.sibling;
    else ym(a)
  }

  function Am(e,a) {
    var t=e.alternate;
    if(t===null)so(e,!1);
    else switch(e.tag) {
      case 3:if(ho=mt=!1,hm(),rn(a,e),!mt&&!wu) {
        if(e=rt,e!==null)for(var l=0;l<e.length;l+=3) {
          t=e[l];
          var n=e[l+1];
          ph(t,e[l+2]),t=t.ownerDocument.documentElement,t!==null&&t.animate( {
            opacity:[0,0],pointerEvents:["none","none"]
          }, {
            duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"
          })
        }

        e=a.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate( {
          opacity:[0,0],pointerEvents:["none","none"]
        }, {
          duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"
        }),e.animate( {
          width:[0,0],height:[0,0]
        }, {
          duration:0,fill:"forwards",pseudoElement:"::view-transition"
        })),ho=!0
      }

      rt=null;
      break;
      case 5:rn(a,e);
      break;
      case 4:l=mt,mt=!1,rn(a,e),mt&&(wu=!0),mt=l;
      break;
      case 22:e.memoizedState===null&&(t.memoizedState!==null?so(e,!1):rn(a,e));
      break;
      case 30:l=mt,n=hm(),mt=!1,rn(a,e),mt&&(e.flags|=4);
      var i=e.memoizedProps,c=e.stateNode;
      a=jt(i,c),c=jt(t.memoizedProps,c);
      var d=bt(i.default,i.update);
      d==="none"?a=!1:(i=t.memoizedState,t.memoizedState=null,t=e.child,ja=0,a=fo(e,t,a,c,d,i,!0),ja!==(i===null?0:i.length)&&(e.flags|=32)),(e.flags&4)!==0&&a?(gn(e,e.memoizedProps.onUpdate),rt=n):n!==null&&(n.push.apply(n,rt),rt=n),mt=(e.flags&32)!==0?!0:l;
      break;
      default:rn(a,e)
    }
  }

  function ht(e,a) {
    if(a.subtreeFlags&8772)for(a=a.child;a!==null;)jm(e,a.alternate,a),a=a.sibling
  }

  function Wt(e,a) {
    for(e=e.child;e!==null;) {
      var t=e,l=a;
      switch(t.tag) {
        case 0:case 11:case 14:case 15:It(4,t,t.return),Wt(t,l);
        break;
        case 1:ca(t,t.return);
        var n=t.stateNode;
        typeof n.componentWillUnmount=="function"&&om(t,t.return,n),Wt(t,l);
        break;
        case 27:(l&2)!==0&&Ch(t.stateNode,t.type,t.memoizedProps);
        case 5:ca(t,t.return),t.tag!==5&&t.tag!==27||fi(t),Wt(t,l);
        break;
        case 6:fi(t);
        break;
        case 26:ca(t,t.return),n=t.stateNode,t.memoizedState!==null||n===null||Ae||n.parentNode.removeChild(n),Wt(t,l);
        break;
        case 22:t.memoizedState===null&&Wt(t,l);
        break;
        case 30:ca(t,t.return),Wt(t,l);
        break;
        case 7:ca(t,t.return);
        default:Wt(t,l)
      }

      e=e.sibling
    }
  }

  function tt(e,a,t) {
    for(t=(a.subtreeFlags&8772)!==0?t:t&-2,a=a.child;a!==null;) {
      var l=a.alternate,n=e,i=a,c=i.flags,d=(t&1)!==0;
      switch(i.tag) {
        case 0:case 11:case 15:tt(n,i,t),di(4,i);
        break;
        case 1:if(tt(n,i,t),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try {
          n.componentDidMount()
        } catch(T) {
          Me(l,l.return,T)
        }

        if(l=i,n=l.updateQueue,n!==null) {
          var m=l.stateNode;
          try {
            var j=n.shared.hiddenCallbacks;
            if(j!==null)for(n.shared.hiddenCallbacks=null,n=0;n<j.length;n++)$d(j[n],m)
          } catch(T) {
            Me(l,l.return,T)
          }
        }

        d&&c&64&&cm(i),ot(i,i.return);
        break;
        case 27:(t&2)!==0&&fm(i);
        case 5:i.tag!==5&&i.tag!==27||rm(i),tt(n,i,t),d&&l===null&&c&4&&lo(i),ot(i,i.return);
        break;
        case 6:rm(i);
        break;
        case 26:m=i.stateNode,i.memoizedState!==null||m===null||ta||er(Si(m.ownerDocument),i.type,m),tt(n,i,t),d&&l===null&&c&4&&lo(i),ot(i,i.return);
        break;
        case 12:tt(n,i,t);
        break;
        case 31:tt(n,i,t),d&&c&4&&Nm(n,i);
        break;
        case 13:tt(n,i,t),d&&c&4&&zm(n,i);
        break;
        case 22:i.memoizedState===null&&tt(n,i,t),ot(i,i.return);
        break;
        case 30:tt(n,i,t),ot(i,i.return);
        break;
        case 7:ot(i,i.return);
        default:tt(n,i,t)
      }

      a=a.sibling
    }
  }

  function go(e,a) {
    var t=null;
    e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Wn(t))
  }

  function yo(e,a) {
    e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Wn(e))
  }

  function Ja(e,a,t,l) {
    var n=(t&335544064)===t;
    if(a.subtreeFlags&(n?10262:10256))for(a=a.child;a!==null;)Om(e,a,t,l),a=a.sibling;
    else n&&gm(a)
  }

  function Om(e,a,t,l) {
    var n=(t&335544064)===t;
    n&&a.alternate===null&&a.return!==null&&a.return.alternate!==null&&Bu(a);
    var i=a.flags;
    switch(a.tag) {
      case 0:case 11:case 15:Ja(e,a,t,l),i&2048&&di(9,a);
      break;
      case 1:Ja(e,a,t,l);
      break;
      case 3:Ja(e,a,t,l),n&&ho&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),i&2048&&(i=null,a.alternate!==null&&(i=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==i&&(a.refCount++,i!=null&&Wn(i)));
      break;
      case 12:if(i&2048) {
        Ja(e,a,t,l),i=a.stateNode;
        try {
          var c=a.memoizedProps,d=c.id,m=c.onPostCommit;
          typeof m=="function"&&m(d,a.alternate===null?"mount":"update",i.passiveEffectDuration,-0)
        } catch(j) {
          Me(a,a.return,j)
        }
      } else Ja(e,a,t,l);
      break;
      case 31:Ja(e,a,t,l);
      break;
      case 13:Ja(e,a,t,l);
      break;
      case 23:break;
      case 22:c=a.stateNode,d=a.alternate,a.memoizedState!==null?(n&&d!==null&&d.memoizedState===null&&Bu(d),c._visibility&2?Ja(e,a,t,l):hi(e,a)):(n&&d!==null&&d.memoizedState!==null&&Bu(a),c._visibility&2?Ja(e,a,t,l):(c._visibility|=2,dn(e,a,t,l,(a.subtreeFlags&10256)!==0||!1))),i&2048&&go(d,a);
      break;
      case 24:Ja(e,a,t,l),i&2048&&yo(a.alternate,a);
      break;
      case 30:n&&(i=a.alternate,i!==null&&(dt(i.child,!0),dt(a.child,!0))),Ja(e,a,t,l);
      break;
      default:Ja(e,a,t,l)
    }
  }

  function dn(e,a,t,l,n) {
    for(n=n&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;) {
      var i=e,c=a,d=t,m=l,j=c.flags;
      switch(c.tag) {
        case 0:case 11:case 15:dn(i,c,d,m,n),di(8,c);
        break;
        case 23:break;
        case 22:var T=c.stateNode;
        c.memoizedState!==null?T._visibility&2?dn(i,c,d,m,n):hi(i,c):(T._visibility|=2,dn(i,c,d,m,n)),n&&j&2048&&go(c.alternate,c);
        break;
        case 24:dn(i,c,d,m,n),n&&j&2048&&yo(c.alternate,c);
        break;
        default:dn(i,c,d,m,n)
      }

      a=a.sibling
    }
  }

  function hi(e,a) {
    if(a.subtreeFlags&10256)for(a=a.child;a!==null;) {
      var t=e,l=a,n=l.flags;
      switch(l.tag) {
        case 22:hi(t,l),n&2048&&go(l.alternate,l);
        break;
        case 24:hi(t,l),n&2048&&yo(l.alternate,l);
        break;
        default:hi(t,l)
      }

      a=a.sibling
    }
  }

  var Ml=8192;
  function _l(e,a,t) {
    if(e.subtreeFlags&Ml)for(e=e.child;e!==null;)Mm(e,a,t),e=e.sibling
  }

  function Mm(e,a,t) {
    switch(e.tag) {
      case 26:_l(e,a,t),e.flags&Ml&&(e.memoizedState!==null?f1(t,at,e.memoizedState,e.memoizedProps):(e=e.stateNode,(a&335544128)===a&&Bh(t,e)));
      break;
      case 5:_l(e,a,t),e.flags&Ml&&(e=e.stateNode,(a&335544128)===a&&Bh(t,e));
      break;
      case 3:case 4:var l=at;
      at=Si(e.stateNode.containerInfo),_l(e,a,t),at=l;
      break;
      case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Ml,Ml=16777216,_l(e,a,t),Ml=l):_l(e,a,t));
      break;
      case 30:if((e.flags&Ml)!==0&&(l=e.memoizedProps.name,l!=null&&l!=="auto")) {
        var n=e.stateNode;
        n.paired=null,Da===null&&(Da=new Map),Da.set(l,n)
      }

      _l(e,a,t);
      break;
      default:_l(e,a,t)
    }
  }

  function _m(e) {
    var a=e.alternate;
    if(a!==null&&(e=a.child,e!==null)) {
      a.child=null;
      do a=e.sibling,e.sibling=null,e=a;
      while(e!==null)
    }
  }

  function pi(e) {
    var a=e.deletions;
    if((e.flags&16)!==0) {
      if(a!==null)for(var t=0;t<a.length;t++) {
        var l=a[t];
        la=l,Rm(l,e)
      }

      _m(e)
    }

    if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dm(e),e=e.sibling
  }

  function Dm(e) {
    switch(e.tag) {
      case 0:case 11:case 15:pi(e),e.flags&2048&&It(9,e,e.return);
      break;
      case 3:pi(e);
      break;
      case 12:pi(e);
      break;
      case 22:var a=e.stateNode;
      e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Gu(e)):pi(e);
      break;
      default:pi(e)
    }
  }

  function Gu(e) {
    var a=e.deletions;
    if((e.flags&16)!==0) {
      if(a!==null)for(var t=0;t<a.length;t++) {
        var l=a[t];
        la=l,Rm(l,e)
      }

      _m(e)
    }

    for(e=e.child;e!==null;) {
      switch(a=e,a.tag) {
        case 0:case 11:case 15:It(8,a,a.return),Gu(a);
        break;
        case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,Gu(a));
        break;
        default:Gu(a)
      }

      e=e.sibling
    }
  }

  function Rm(e,a) {
    for(;la!==null;) {
      var t=la;
      switch(t.tag) {
        case 0:case 11:case 15:It(8,t,a);
        break;
        case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null) {
          var l=t.memoizedState.cachePool.pool;
          l!=null&&l.refCount++
        }

        break;
        case 24:Wn(t.memoizedState.cache)
      }

      if(l=t.child,l!==null)l.return=t,la=l;
      else e:for(t=e;la!==null;) {
        l=la;
        var n=l.sibling,i=l.return;
        if(Sm(l),l===t) {
          la=null;
          break e
        }

        if(n!==null) {
          n.return=i,la=n;
          break e
        }

        la=i
      }
    }
  }

  var sv= {
    getCacheForType:function(e) {
      var a=ia(ke),t=a.data.get(e);
      return t===void 0&&(t=e(),a.data.set(e,t)),t
    },cacheSignal:function() {
      return ia(ke).controller.signal
    }
  },cv=typeof WeakMap=="function"?WeakMap:Map,Te=0,Re=null,ve=null,xe=0,Oe=0,Ra=null,Pt=!1,fn=!1,xo=!1,Mt=0,Ye=0,el=0,Dl=0,Yu=0,Ua=0,mn=0,vi=null,Sa=null,jo=!1,Qu=0,Um=0,Xu=1/0,Zu=null,al=null,Le=0,lt=null,Rl=null,pt=0,bo=0,So=null,qm=null,hn=null,pn=null,vn=null,gi=0,ku=null;
  function qa() {
    return(Te&2)!==0&&xe!==0?xe&-xe:X.T!==null?Do():Br()
  }

  function Hm() {
    if(Ua===0)if((xe&536870912)===0||fe) {
      var e=Vi;
      Vi<<=1,(Vi&3932160)===0&&(Vi=262144),Ua=e
    } else Ua=536870912;
    return e=ua.current,e!==null&&(e.flags|=32),Ua
  }

  function gn(e,a) {
    if(a!=null) {
      var t=e.stateNode,l=t.ref;
      l===null&&(l=t.ref=vh(jt(e.memoizedProps,t))),pn===null&&(pn=[]),pn.push(a.bind(null,l))
    }
  }

  function Ea(e,a,t) {
    (e===Re&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(yn(e,0),tl(e,xe,Ua,!1)),wn(e,t),((Te&2)===0||e!==Re)&&(e===Re&&((Te&2)===0&&(Dl|=t),Ye===4&&tl(e,xe,Ua,!1)),vt(e))
  }

  function Bm(e,a,t) {
    if((Te&6)!==0)throw Error(o(327));
    var l=!t&&(a&127)===0&&(a&e.expiredLanes)===0||Bn(e,a),n=l?dv(e,a):No(e,a,!0),i=l;
    do {
      if(n===0) {
        fn&&!l&&tl(e,a,0,!1);
        break
      } else {
        if(t=e.current.alternate,i&&!ov(t)) {
          n=No(e,a,!1),i=!1;
          continue
        }

        if(n===2) {
          if(i=a,e.errorRecoveryDisabledLanes&i)var c=0;
          else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;
          if(c!==0) {
            a=c;
            e: {
              var d=e;
              n=vi;
              var m=d.current.memoizedState.isDehydrated;
              if(m&&(yn(d,c).flags|=256),c=No(d,c,!1),c!==2&&c!==6) {
                if(xo&&!m) {
                  d.errorRecoveryDisabledLanes|=i,Dl|=i,n=4;
                  break e
                }

                i=Sa,Sa=n,i!==null&&(Sa===null?Sa=i:Sa.push.apply(Sa,i))
              }

              n=c
            }

            if(i=!1,n!==2)continue
          }
        }

        if(n===1) {
          yn(e,0),tl(e,a,0,!0);
          break
        }

        e: {
          switch(l=e,i=n,i) {
            case 0:case 1:throw Error(o(345));
            case 4:if((a&4194048)!==a&&(a&62914560)!==a)break;
            case 6:tl(l,a,Ua,!Pt);
            break e;
            case 2:Sa=null;
            break;
            case 3:case 5:break;
            default:throw Error(o(329))
          }

          if((a&62914560)===a&&(n=Qu+300-Ta(),10<n)) {
            if(tl(l,a,Ua,!Pt),Yi(l,0,!0)!==0)break e;
            pt=a,l.timeoutHandle=Qo(wm.bind(null,l,t,Sa,Zu,jo,a,Ua,Dl,mn,Pt,i,"Throttled",-0,0),n);
            break e
          }

          wm(l,t,Sa,Zu,jo,a,Ua,Dl,mn,Pt,i,null,-0,0)
        }
      }

      break
    } while(!0);
    vt(e)
  }

  function wm(e,a,t,l,n,i,c,d,m,j,T,D,y,N) {
    e.timeoutHandle=-1;
    var w=a.subtreeFlags,Z=(i&335544064)===i;
    if(D=null,(Z||w&8192||(w&16785408)===16785408)&&(D= {
      stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ut
    },Da=null,Mm(a,i,D),Z&&(w=D,Z=e.containerInfo,Z=(Z.nodeType===9?Z:Z.ownerDocument).__reactViewTransition,Z!=null&&(w.count++,w.waitingForViewTransition=!0,w=zi.bind(w),Z.finished.then(w,w))),w=(i&62914560)===i?Qu-Ta():(i&4194048)===i?Um-Ta():0,w=m1(D,w),w!==null)) {
      pt=i,e.cancelPendingCommit=w(km.bind(null,e,a,i,t,l,n,c,d,m,j,T,D,null,y,N)),tl(e,i,c,!j);
      return
    }

    km(e,a,i,t,l,n,c,d,m,j,T,D)
  }

  function ov(e) {
    for(var a=e;;) {
      var t=a.tag;
      if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++) {
        var n=t[l],i=n.getSnapshot;
        n=n.value;
        try {
          if(!Ma(i(),n))return!1
        } catch {
          return!1
        }
      }

      if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;
      else {
        if(a===e)break;
        for(;a.sibling===null;) {
          if(a.return===null||a.return===e)return!0;
          a=a.return
        }

        a.sibling.return=a.return,a=a.sibling
      }
    }

    return!0
  }

  function tl(e,a,t,l) {
    a=Dr(e,a),a&=~Yu,a&=~Dl,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;
    for(var n=a;0<n;) {
      var i=31-Aa(n),c=1<<i;
      l[i]=-1,n&=~c
    }

    t!==0&&Ur(e,t,a)
  }

  function Ku() {
    return(Te&6)===0?(yi(0),!1):!0
  }

  function Eo() {
    if(ve!==null) {
      if(Oe===0)var e=ve.return;
      else e=ve,Nt=jl=null,Mc(e),ln=null,ai=0,e=ve;
      for(;e!==null;)sm(e.alternate,e),e=e.return;
      ve=null
    }
  }

  function yn(e,a) {
    var t=e.timeoutHandle;
    return t!==-1&&(e.timeoutHandle=-1,Rv(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),pt=0,Eo(),Re=e,ve=t=St(e.current,null),xe=a,Oe=0,Ra=null,Pt=!1,fn=Bn(e,a),xo=!1,mn=Ua=Yu=Dl=el=Ye=0,Sa=vi=null,jo=!1,Mt=Dr(e,a),au(),t
  }

  function Lm(e,a) {
    oe=null,X.H=Tu,a===tn||a===fu?(a=Zd(),Oe=3):a===gc?(a=Zd(),Oe=4):Oe=a===Zc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Ra=a,ve===null&&(Ye=1,Cu(e,Xa(a,e.current)))
  }

  function Vm() {
    var e=ua.current;
    return e===null?!0:(xe&4194048)===xe?fa===null:(xe&62914560)===xe||(xe&536870912)!==0?e===fa:!1
  }

  function Gm() {
    var e=X.H;
    return X.H=Tu,e===null?Tu:e
  }

  function Ym() {
    var e=X.A;
    return X.A=sv,e
  }

  function Ju() {
    Ye=4,Pt||(xe&4194048)!==xe&&ua.current!==null||(fn=!0),(el&134217727)===0&&(Dl&134217727)===0||Re===null||tl(Re,xe,Ua,!1)
  }

  function No(e,a,t) {
    var l=Te;
    Te|=2;
    var n=Gm(),i=Ym();
    (Re!==e||xe!==a)&&(Zu=null,yn(e,a)),a=!1;
    var c=Ye;
    e:do try {
      if(Oe!==0&&ve!==null) {
        var d=ve,m=Ra;
        switch(Oe) {
          case 8:Eo(),c=6;
          break e;
          case 3:case 2:case 9:case 6:ua.current===null&&(a=!0);
          var j=Oe;
          if(Oe=0,Ra=null,xn(e,d,m,j),t&&fn) {
            c=0;
            break e
          }

          break;
          default:j=Oe,Oe=0,Ra=null,xn(e,d,m,j)
        }
      }

      rv(),c=Ye;
      break
    } catch(T) {
      Lm(e,T)
    } while(!0);
    return a&&e.shellSuspendCounter++,Nt=jl=null,Te=l,X.H=n,X.A=i,ve===null&&(Re=null,xe=0,au()),c
  }

  function rv() {
    for(;ve!==null;)Qm(ve)
  }

  function dv(e,a) {
    var t=Te;
    Te|=2;
    var l=Gm(),n=Ym();
    Re!==e||xe!==a?(Zu=null,Xu=Ta()+500,yn(e,a)):fn=Bn(e,a);
    e:do try {
      if(Oe!==0&&ve!==null) {
        a=ve;
        var i=Ra;
        a:switch(Oe) {
          case 1:Oe=0,Ra=null,xn(e,a,i,1);
          break;
          case 2:case 9:if(Qd(i)) {
            Oe=0,Ra=null,Xm(a);
            break
          }

          a=function() {
            Oe!==2&&Oe!==9||Re!==e||(Oe=7),vt(e)
          },i.then(a,a);
          break e;
          case 3:Oe=7;
          break e;
          case 4:Oe=5;
          break e;
          case 7:Qd(i)?(Oe=0,Ra=null,Xm(a)):(Oe=0,Ra=null,xn(e,a,i,7));
          break;
          case 5:var c=null;
          switch(ve.tag) {
            case 26:c=ve.memoizedState;
            case 5:case 27:var d=ve;
            if(c?qh(c):d.stateNode.complete) {
              Oe=0,Ra=null;
              var m=d.sibling;
              if(m!==null)ve=m;
              else {
                var j=d.return;
                j!==null?(ve=j,$u(j)):ve=null
              }

              break a
            }
          }

          Oe=0,Ra=null,xn(e,a,i,5);
          break;
          case 6:Oe=0,Ra=null,xn(e,a,i,6);
          break;
          case 8:Eo(),Ye=6;
          break e;
          default:throw Error(o(462))
        }
      }

      fv();
      break
    } catch(T) {
      Lm(e,T)
    } while(!0);
    return Nt=jl=null,X.H=l,X.A=n,Te=t,ve!==null?0:(Re=null,xe=0,au(),Ye)
  }

  function fv() {
    for(;ve!==null&&!Op();)Qm(ve)
  }

  function Qm(e) {
    var a=im(e.alternate,e,Mt);
    e.memoizedProps=e.pendingProps,a===null?$u(e):ve=a
  }

  function Xm(e) {
    var a=e,t=a.alternate;
    switch(a.tag) {
      case 15:case 0:a=Wf(t,a,a.pendingProps,a.type,void 0,xe);
      break;
      case 11:a=Wf(t,a,a.pendingProps,a.type.render,a.ref,xe);
      break;
      case 5:Mc(a);
      var l=a;
      l===aa&&(fe?(su(l),l.tag===5&&l.stateNode!=null&&(qe=l.stateNode)):(su(l),fe=!0));
      default:sm(t,a),a=ve=Dd(a,Mt),a=im(t,a,Mt)
    }

    e.memoizedProps=e.pendingProps,a===null?$u(e):ve=a
  }

  function xn(e,a,t,l) {
    Nt=jl=null,Mc(a),ln=null,ai=0;
    var n=a.return;
    try {
      if(P0(e,n,a,t,xe)) {
        Ye=1,Cu(e,Xa(t,e.current)),ve=null;
        return
      }
    } catch(i) {
      if(n!==null)throw ve=n,i;
      Ye=1,Cu(e,Xa(t,e.current)),ve=null;
      return
    }

    a.flags&32768?(fe||l===1?e=!0:fn||(xe&536870912)!==0?e=!1:(Pt=e=!0,(l===2||l===9||l===3||l===6)&&(l=ua.current,l!==null&&l.tag===13&&(l.flags|=16384))),Zm(a,e)):$u(a)
  }

  function $u(e) {
    var a=e;
    do {
      if((a.flags&32768)!==0) {
        Zm(a,Pt);
        return
      }

      e=a.return;
      var t=lv(a.alternate,a,Mt);
      if(t!==null) {
        ve=t;
        return
      }

      if(a=a.sibling,a!==null) {
        ve=a;
        return
      }

      ve=a=e
    } while(a!==null);
    Ye===0&&(Ye=5)
  }

  function Zm(e,a) {
    do {
      var t=nv(e.alternate,e);
      if(t!==null) {
        t.flags&=32767,ve=t;
        return
      }

      if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)) {
        ve=e;
        return
      }

      ve=e=t
    } while(e!==null);
    Ye=6,ve=null
  }

  function km(e,a,t,l,n,i,c,d,m,j,T,D) {
    e.cancelPendingCommit=null;
    do Fu();
    while(Le!==0);
    if((Te&6)!==0)throw Error(o(327));
    if(a!==null) {
      if(a===e.current)throw Error(o(177));
      e===Re&&(ve=Re=null,xe=0),Rl=a,lt=e,pt=t,So=n,qm=l,mv(e,a,t,c,d,m,D)
    }
  }

  function mv(e,a,t,l,n,i,c) {
    var d=a.lanes|a.childLanes;
    if(bo=d,d|=nc,Lp(e,t,d,l,n,i),pn=null,(t&335544064)===t?(vn=G0(e),l=10262):(vn=null,l=10256),(a.subtreeFlags&l)!==0||(a.flags&l)!==0?(e.callbackNode=null,e.callbackPriority=0,xv(wi,function() {
      return Ao(),null
    })):(e.callbackNode=null,e.callbackPriority=0),qu=!1,l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l) {
      l=X.T,X.T=null,n=se.p,se.p=2,i=Te,Te|=4;
      try {
        iv(e,a,t)
      } finally {
        Te=i,se.p=n,X.T=l
      }
    }

    Le=1,qu?hn=Lv(c,e.containerInfo,vn,zo,To,pv,Co,Ao,hv):(zo(),To(),Co())
  }

  function hv(e) {
    if(Le!==0) {
      var a=lt.onRecoverableError;
      a(e, {
        componentStack:null
      })
    }
  }

  function pv() {
    Le===3&&(Le=0,Am(Rl,lt),Le=4)
  }

  function zo() {
    if(Le===1) {
      Le=0;
      var e=lt,a=Rl,t=pt,l=(a.flags&13878)!==0;
      if((a.subtreeFlags&13878)!==0||l) {
        l=X.T,X.T=null;
        var n=se.p;
        se.p=2;
        var i=Te;
        Te|=4;
        try {
          mi=wu=!1,Tm(a,e,t),t=Vo;
          var c=Sd(e.containerInfo),d=t.focusedElem,m=t.selectionRange;
          if(c!==d&&d&&d.ownerDocument&&bd(d.ownerDocument.documentElement,d)) {
            if(m!==null&&Ps(d)) {
              var j=m.start,T=m.end;
              if(T===void 0&&(T=j),"selectionStart"in d)d.selectionStart=j,d.selectionEnd=Math.min(T,d.value.length);
              else {
                var D=d.ownerDocument||document,y=D&&D.defaultView||window;
                if(y.getSelection) {
                  var N=y.getSelection(),w=d.textContent.length,Z=Math.min(m.start,w),re=m.end===void 0?Z:Math.min(m.end,w);
                  !N.extend&&Z>re&&(c=re,re=Z,Z=c);
                  var x=jd(d,Z),h=jd(d,re);
                  if(x&&h&&(N.rangeCount!==1||N.anchorNode!==x.node||N.anchorOffset!==x.offset||N.focusNode!==h.node||N.focusOffset!==h.offset)) {
                    var E=D.createRange();
                    E.setStart(x.node,x.offset),N.removeAllRanges(),Z>re?(N.addRange(E),N.extend(h.node,h.offset)):(E.setEnd(h.node,h.offset),N.addRange(E))
                  }
                }
              }
            }

            for(D=[],N=d;N=N.parentNode;)N.nodeType===1&&D.push( {
              element:N,left:N.scrollLeft,top:N.scrollTop
            });
            for(typeof d.focus=="function"&&d.focus(),d=0;d<D.length;d++) {
              var _=D[d];
              _.element.scrollLeft=_.left,_.element.scrollTop=_.top
            }
          }

          Cn=!!Lo,Vo=Lo=null
        } finally {
          Te=i,se.p=n,X.T=l
        }
      }

      e.current=a,Le=2
    }
  }

  function To() {
    if(Le===2) {
      Le=0;
      var e=lt,a=Rl,t=(a.flags&8772)!==0;
      if((a.subtreeFlags&8772)!==0||t) {
        t=X.T,X.T=null;
        var l=se.p;
        se.p=2;
        var n=Te;
        Te|=4;
        try {
          jm(e,a.alternate,a)
        } finally {
          Te=n,se.p=l,X.T=t
        }
      }

      Le=3
    }
  }

  function Co() {
    if(Le===4||Le===3) {
      Le=0;
      var e=hn;
      hn=null,Mp();
      var a=lt,t=Rl,l=pt,n=qm,i=(l&335544064)===l?10262:10256;
      if((t.subtreeFlags&i)!==0||(t.flags&i)!==0?Le=5:(Le=0,Rl=lt=null,Km(a,a.pendingLanes)),i=a.pendingLanes,i===0&&(al=null),qs(l),t=t.stateNode,Ca&&typeof Ca.onCommitFiberRoot=="function")try {
        Ca.onCommitFiberRoot(Hn,t,void 0,(t.current.flags&128)===128)
      } catch{}if(n!==null) {
        t=X.T,i=se.p,se.p=2,X.T=null;
        try {
          for(var c=a.onRecoverableError,d=0;d<n.length;d++) {
            var m=n[d];
            c(m.value, {
              componentStack:m.stack
            })
          }
        } finally {
          X.T=t,se.p=i
        }
      }

      if(n=pn,c=vn,vn=null,n!==null&&(pn=null,c===null&&(c=[]),e!==null))for(m=0;m<n.length;m++)t=(0,n[m])(c),t!==void 0&&e.finished.finally(t);
      (pt&3)!==0&&Fu(),vt(a),i=a.pendingLanes,(l&261930)!==0&&(i&42)!==0?a===ku?gi++:(gi=0,ku=a):(gi=0,ku=null),yi(0)
    }
  }

  function Km(e,a) {
    (e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Wn(a)))
  }

  function Fu() {
    return hn!==null&&(hn.skipTransition(),hn=null),zo(),To(),Co(),Ao()
  }

  function Ao() {
    if(Le!==5)return!1;
    var e=lt,a=bo;
    bo=0;
    var t=qs(pt),l=X.T,n=se.p;
    try {
      se.p=32>t?32:t,X.T=null,t=So,So=null;
      var i=lt,c=pt;
      if(Le=0,Rl=lt=null,pt=0,(Te&6)!==0)throw Error(o(331));
      var d=Te;
      if(Te|=4,Dm(i.current),Om(i,i.current,c,t),Te=d,yi(0,!1),Ca&&typeof Ca.onPostCommitFiberRoot=="function")try {
        Ca.onPostCommitFiberRoot(Hn,i)
      } catch{}return!0
    } finally {
      se.p=n,X.T=l,Km(e,a)
    }
  }

  function Jm(e,a,t) {
    a=Xa(t,a),a=Xc(e.stateNode,a,2),e=Kt(e,a,2),e!==null&&(wn(e,2),vt(e))
  }

  function Me(e,a,t) {
    if(e.tag===3)Jm(e,e,t);
    else for(;a!==null;) {
      if(a.tag===3) {
        Jm(a,e,t);
        break
      } else if(a.tag===1) {
        var l=a.stateNode;
        if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(al===null||!al.has(l))) {
          e=Xa(t,e),t=Xf(2),l=Kt(a,t,2),l!==null&&(Zf(t,l,a,e),wn(l,2),vt(l));
          break
        }
      }

      a=a.return
    }
  }

  function Oo(e,a,t) {
    var l=e.pingCache;
    if(l===null) {
      l=e.pingCache=new cv;
      var n=new Set;
      l.set(a,n)
    } else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));
    n.has(t)||(xo=!0,n.add(t),e=vv.bind(null,e,a,t),a.then(e,e))
  }

  function vv(e,a,t) {
    var l=e.pingCache;
    l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,Re===e&&(xe&t)===t&&((Ye===4||Ye===3&&(xe&62914560)===xe&&300>Ta()-Qu)&&(Te&2)===0?yn(e,0):Yu|=t,mn===xe&&(mn=0)),vt(e)
  }

  function $m(e,a) {
    a===0&&(a=Rr()),e=gl(e,a),e!==null&&(wn(e,a),vt(e))
  }

  function gv(e) {
    var a=e.memoizedState,t=0;
    a!==null&&(t=a.retryLane),$m(e,t)
  }

  function yv(e,a) {
    var t=0;
    switch(e.tag) {
      case 31:case 13:var l=e.stateNode,n=e.memoizedState;
      n!==null&&(t=n.retryLane);
      break;
      case 19:l=e.stateNode;
      break;
      case 22:l=e.stateNode._retryCache;
      break;
      default:throw Error(o(314))
    }

    l!==null&&l.delete(a),$m(e,t)
  }

  function xv(e,a) {
    return _s(e,a)
  }

  var jn=null,bn=null,Mo=!1,Iu=!1,_o=!1,ll=0;
  function vt(e) {
    e!==bn&&e.next===null&&(bn===null?jn=bn=e:bn=bn.next=e),Iu=!0,Mo||(Mo=!0,bv())
  }

  function yi(e,a) {
    if(!_o&&Iu) {
      _o=!0;
      do for(var t=!1,l=jn;l!==null;) {
        if(e!==0) {
          var n=l.pendingLanes;
          if(n===0)var i=0;
          else {
            var c=l.suspendedLanes,d=l.pingedLanes;
            i=(1<<31-Aa(42|e)+1)-1,i&=n&~(c&~d),i=i&201326741?i&201326741|1:i?i|2:0
          }

          i!==0&&(t=!0,Pm(l,i))
        } else i=xe,i=Yi(l,l===Re?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Bn(l,i)||(t=!0,Pm(l,i));
        l=l.next
      } while(t);
      _o=!1
    }
  }

  function jv() {
    Fm()
  }

  function Fm() {
    Iu=Mo=!1;
    var e=0;
    ll!==0&&Dv()&&(e=ll);
    for(var a=Ta(),t=null,l=jn;l!==null;) {
      var n=l.next,i=Im(l,a);
      i===0?(l.next=null,t===null?jn=n:t.next=n,n===null&&(bn=t)):(t=l,(e!==0||(i&3)!==0)&&(Iu=!0)),l=n
    }

    Le!==0&&Le!==5||yi(e),ll!==0&&(ll=0)
  }

  function Im(e,a) {
    for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;) {
      var c=31-Aa(i),d=1<<c,m=n[c];
      m===-1?((d&t)===0||(d&l)!==0)&&(n[c]=wp(d,a)):m<=a&&(e.expiredLanes|=d),i&=~d
    }

    if(a=Re,t=xe,t=Yi(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ds(l),e.callbackNode=null,e.callbackPriority=0;
    if((t&3)===0||Bn(e,t)) {
      if(a=t&-t,a===e.callbackPriority)return a;
      switch(l!==null&&Ds(l),qs(t)) {
        case 2:case 8:t=Mr;
        break;
        case 32:t=wi;
        break;
        case 268435456:t=_r;
        break;
        default:t=wi
      }

      return l=Wm.bind(null,e),t=_s(t,l),e.callbackPriority=a,e.callbackNode=t,a
    }

    return l!==null&&l!==null&&Ds(l),e.callbackPriority=2,e.callbackNode=null,2
  }

  function Wm(e,a) {
    if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;
    var t=e.callbackNode;
    if(Fu()&&e.callbackNode!==t)return null;
    var l=xe;
    return l=Yi(e,e===Re?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bm(e,l,a),Im(e,Ta()),e.callbackNode!=null&&e.callbackNode===t?Wm.bind(null,e):null)
  }

  function Pm(e,a) {
    if(Fu())return null;
    Bm(e,a,!0)
  }

  function bv() {
    Uv(function() {
      (Te&6)!==0?_s(Or,jv):Fm()
    })
  }

  function Do() {
    if(ll===0) {
      var e=El;
      e===0&&(e=Li,Li<<=1,(Li&261888)===0&&(Li=256)),ll=e
    }

    return ll
  }

  function eh(e) {
    return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ki(e)
  }

  function Sv(e,a,t,l,n) {
    if(a==="submit"&&t&&t.stateNode===n) {
      var i=eh((n[ya]||null).action),c=l.submitter;
      c&&(a=(a=c[ya]||null)?eh(a.formAction):c.getAttribute("formAction"),a!==null&&(i=a,c=null));
      var d=new Ii("action","action",null,l,n);
      e.push( {
        event:d,listeners:[ {
          instance:null,listener:function() {
            if(l.defaultPrevented) {
              if(ll!==0) {
                var m=new FormData(n,c);Lc(t, {
                  pending:!0,data:m,method:n.method,action:i
                },null,m)
              }
            } else typeof i=="function"&&(d.preventDefault(),m=new FormData(n,c),Lc(t, {
              pending:!0,data:m,method:n.method,action:i
            },i,m))
          },currentTarget:n
        }]
      })
    }
  }

  for(var Ro=0;Ro<lc.length;Ro++) {
    var Uo=lc[Ro],Ev=Uo.toLowerCase(),Nv=Uo[0].toUpperCase()+Uo.slice(1);
    Pa(Ev,"on"+Nv)
  }

  Pa(zd,"onAnimationEnd"),Pa(Td,"onAnimationIteration"),Pa(Cd,"onAnimationStart"),Pa("dblclick","onDoubleClick"),Pa("focusin","onFocus"),Pa("focusout","onBlur"),Pa(R0,"onTransitionRun"),Pa(U0,"onTransitionStart"),Pa(q0,"onTransitionCancel"),Pa(Ad,"onTransitionEnd"),Yl("onMouseEnter",["mouseout","mouseover"]),Yl("onMouseLeave",["mouseout","mouseover"]),Yl("onPointerEnter",["pointerout","pointerover"]),Yl("onPointerLeave",["pointerout","pointerover"]),hl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hl("onBeforeInput",["compositionend","keypress","textInput","paste"]),hl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xi));
  function ah(e,a) {
    a=(a&4)!==0;
    for(var t=0;t<e.length;t++) {
      var l=e[t],n=l.event;
      l=l.listeners;
      e: {
        var i=void 0;
        if(a)for(var c=l.length-1;0<=c;c--) {
          var d=l[c],m=d.instance,j=d.currentTarget;
          if(d=d.listener,m!==i&&n.isPropagationStopped())break e;
          i=d,n.currentTarget=j;
          try {
            i(n)
          } catch(T) {
            eu(T)
          }

          n.currentTarget=null,i=m
        } else for(c=0;c<l.length;c++) {
          if(d=l[c],m=d.instance,j=d.currentTarget,d=d.listener,m!==i&&n.isPropagationStopped())break e;
          i=d,n.currentTarget=j;
          try {
            i(n)
          } catch(T) {
            eu(T)
          }

          n.currentTarget=null,i=m
        }
      }
    }
  }

  function ge(e,a) {
    var t=a[Lr];
    t===void 0&&(t=a[Lr]=new Set);
    var l=e+"__bubble";
    t.has(l)||(th(a,e,2,!1),t.add(l))
  }

  function qo(e,a,t) {
    var l=0;
    a&&(l|=4),th(t,e,l,a)
  }

  var Wu="_reactListening"+Math.random().toString(36).slice(2);
  function Ho(e) {
    if(!e[Wu]) {
      e[Wu]=!0,Yr.forEach(function(t) {
        t!=="selectionchange"&&(zv.has(t)||qo(t,!1,e),qo(t,!0,e))
      });
      var a=e.nodeType===9?e:e.ownerDocument;
      a===null||a[Wu]||(a[Wu]=!0,qo("selectionchange",!1,a))
    }
  }

  function th(e,a,t,l) {
    switch(Zh(a)) {
      case 2:var n=g1;
      break;
      case 8:n=y1;
      break;
      default:n=tr
    }

    t=n.bind(null,a,t,e),n=void 0,!Qs||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t, {
      capture:!0,passive:n
    }):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t, {
      passive:n
    }):e.addEventListener(a,t,!1)
  }

  function Bo(e,a,t,l,n) {
    var i=l;
    if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;) {
      if(l===null)return;
      var c=l.tag;
      if(c===3||c===4) {
        var d=l.stateNode.containerInfo;
        if(d===n)break;
        if(c===4)for(c=l.return;c!==null;) {
          var m=c.tag;
          if((m===3||m===4)&&c.stateNode.containerInfo===n)return;
          c=c.return
        }

        for(;d!==null;) {
          if(c=ml(d),c===null)return;
          if(m=c.tag,m===5||m===6||m===26||m===27) {
            l=i=c;
            continue e
          }

          d=d.parentNode
        }
      }

      l=l.return
    }

    ad(function() {
      var j=i,T=Gs(t),D=[];e: {
        var y=Od.get(e);if(y!==void 0) {
          var N=Ii,w=e;switch(e) {
            case"keypress":if($i(t)===0)break e;case"keydown":case"keyup":N=o0;break;case"focusin":w="focus",N=Ks;break;case"focusout":w="blur",N=Ks;break;case"beforeblur":case"afterblur":N=Ks;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=nd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Ip;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=h0;break;case zd:case Td:case Cd:N=e0;break;case Ad:N=v0;break;case"scroll":case"scrollend":N=$p;break;case"wheel":N=y0;break;case"copy":case"cut":case"paste":N=t0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ud;break;case"submit":N=f0;break;case"toggle":case"beforetoggle":N=j0
          }

          var Z=(a&4)!==0,re=!Z&&(e==="scroll"||e==="scrollend"),x=Z?y!==null?y+"Capture":null:y;Z=[];for(var h=j,E;h!==null;) {
            var _=h;if(E=_.stateNode,_=_.tag,_!==5&&_!==26&&_!==27||E===null||x===null||(_=Gn(h,x),_!=null&&Z.push(ji(h,_,E))),re)break;h=h.return
          }

          0<Z.length&&(y=new N(y,w,null,t,T),D.push( {
            event:y,listeners:Z
          }))
        }
      }

      if((a&7)===0) {
        e: {
          if(N=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",N&&t!==Vs&&(w=t.relatedTarget||t.fromElement)&&(ml(w)||w[Ll]))break e;(y||N)&&(w=T.window===T?T:(N=T.ownerDocument)?N.defaultView||N.parentWindow:window,y?(N=t.relatedTarget||t.toElement,y=j,N=N?ml(N):null,N!==null&&(re=p(N),Z=N.tag,N!==re||Z!==5&&Z!==27&&Z!==6)&&(N=null)):(y=null,N=j),y!==N&&(Z=nd,_="onMouseLeave",x="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(Z=ud,_="onPointerLeave",x="onPointerEnter",h="pointer"),re=y==null?w:Vn(y),E=N==null?w:Vn(N),w=new Z(_,h+"leave",y,t,T),w.target=re,w.relatedTarget=E,_=null,ml(T)===j&&(Z=new Z(x,h+"enter",N,t,T),Z.target=E,Z.relatedTarget=re,_=Z),re=_,Z=y&&N?B(y,N,Tv):null,y!==null&&lh(D,w,y,Z,!1),N!==null&&re!==null&&lh(D,re,N,Z,!0)))
        }

        e: {
          if(y=j?Vn(j):window,N=y.nodeName&&y.nodeName.toLowerCase(),N==="select"||N==="input"&&y.type==="file")var G=hd;else if(fd(y))if(pd)G=M0;else {
            G=A0;var je=C0
          } else N=y.nodeName,!N||N.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?j&&Ls(j.elementType)&&(G=hd):G=O0;if(G&&(G=G(e,j))) {
            md(D,G,t,T);break e
          }

          je&&je(e,y,j)
        }

        switch(je=j?Vn(j):window,e) {
          case"focusin":(fd(je)||je.contentEditable==="true")&&(Jl=je,ec=j,$n=null);break;case"focusout":$n=ec=Jl=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Ed(D,t,T);break;case"selectionchange":if(D0)break;case"keydown":case"keyup":Ed(D,t,T)
        }

        var F;if($s)e: {
          switch(e) {
            case"compositionstart":var le="onCompositionStart";break e;case"compositionend":le="onCompositionEnd";break e;case"compositionupdate":le="onCompositionUpdate";break e
          }

          le=void 0
        } else Kl?rd(e,t)&&(le="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(le="onCompositionStart");le&&(sd&&t.locale!=="ko"&&(Kl||le!=="onCompositionStart"?le==="onCompositionEnd"&&Kl&&(F=td()):(wt=T,Xs="value"in wt?wt.value:wt.textContent,Kl=!0)),je=Pu(j,le),0<je.length&&(le=new id(le,e,null,t,T),D.push( {
          event:le,listeners:je
        }),F?le.data=F:(F=dd(t),F!==null&&(le.data=F)))),(F=S0?E0(e,t):N0(e,t))&&(le=Pu(j,"onBeforeInput"),0<le.length&&(je=new id("onBeforeInput","beforeinput",null,t,T),D.push( {
          event:je,listeners:le
        }),je.data=F)),Sv(D,e,j,t,T)
      }

      ah(D,a)
    })
  }

  function ji(e,a,t) {
    return {
      instance:e,listener:a,currentTarget:t
    }
  }

  function Pu(e,a) {
    for(var t=a+"Capture",l=[];e!==null;) {
      var n=e,i=n.stateNode;
      if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Gn(e,t),n!=null&&l.unshift(ji(e,n,i)),n=Gn(e,a),n!=null&&l.push(ji(e,n,i))),e.tag===3)return l;
      e=e.return
    }

    return[]
  }

  function Tv(e) {
    if(e===null)return null;
    do e=e.return;
    while(e&&e.tag!==5&&e.tag!==27);
    return e||null
  }

  function lh(e,a,t,l,n) {
    for(var i=a._reactName,c=[];t!==null&&t!==l;) {
      var d=t,m=d.alternate,j=d.stateNode;
      if(d=d.tag,m!==null&&m===l)break;
      d!==5&&d!==26&&d!==27||j===null||(m=j,n?(j=Gn(t,i),j!=null&&c.unshift(ji(t,j,m))):n||(j=Gn(t,i),j!=null&&c.push(ji(t,j,m)))),t=t.return
    }

    c.length!==0&&e.push( {
      event:a,listeners:c
    })
  }

  var Cv=/\r\n?/g,Av=/\u0000|\uFFFD/g;
  function nh(e) {
    return(typeof e=="string"?e:""+e).replace(Cv,`
`).replace(Av,"")
  }

  function ih(e,a) {
    return a=nh(a),nh(e)===a
  }

  function _e(e,a,t,l,n,i) {
    switch(t) {
      case"children":if(typeof l=="string")a==="body"||a==="textarea"&&l===""||Xl(e,l);
      else if(typeof l=="number"||typeof l=="bigint")a!=="body"&&Xl(e,""+l);
      else return;
      break;
      case"className":ki(e,"class",l);
      break;
      case"tabIndex":ki(e,"tabindex",l);
      break;
      case"dir":case"role":case"viewBox":case"width":case"height":ki(e,t,l);
      break;
      case"style":Pr(e,l,i);
      return;
      case"data":if(a!=="object") {
        ki(e,"data",l);
        break
      }

      case"src":case"href":if(l===""&&(a!=="a"||t!=="href")) {
        e.removeAttribute(t);
        break
      }

      if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean") {
        e.removeAttribute(t);
        break
      }

      l=Ki(l),e.setAttribute(t,l);
      break;
      case"action":case"formAction":if(typeof l=="function") {
        e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
        break
      } else typeof i=="function"&&(t==="formAction"?(a!=="input"&&_e(e,a,"name",n.name,n,null),_e(e,a,"formEncType",n.formEncType,n,null),_e(e,a,"formMethod",n.formMethod,n,null),_e(e,a,"formTarget",n.formTarget,n,null)):(_e(e,a,"encType",n.encType,n,null),_e(e,a,"method",n.method,n,null),_e(e,a,"target",n.target,n,null)));
      if(l==null||typeof l=="symbol"||typeof l=="boolean") {
        e.removeAttribute(t);
        break
      }

      l=Ki(l),e.setAttribute(t,l);
      break;
      case"onClick":l!=null&&(e.onclick=ut);
      return;
      case"onScroll":l!=null&&ge("scroll",e);
      return;
      case"onScrollEnd":l!=null&&ge("scrollend",e);
      return;
      case"dangerouslySetInnerHTML":if(l!=null) {
        if(typeof l!="object"||!("__html"in l))throw Error(o(61));
        if(t=l.__html,t!=null) {
          if(n.children!=null)throw Error(o(60));
          (i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)
        }
      }

      break;
      case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";
      break;
      case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";
      break;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;
      case"autoFocus":break;
      case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol") {
        e.removeAttribute("xlink:href");
        break
      }

      t=Ki(l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);
      break;
      case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);
      break;
      case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);
      break;
      case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);
      break;
      case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);
      break;
      case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);
      break;
      case"popover":ge("beforetoggle",e),ge("toggle",e),Zi(e,"popover",l);
      break;
      case"xlinkActuate":yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);
      break;
      case"xlinkArcrole":yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);
      break;
      case"xlinkRole":yt(e,"http://www.w3.org/1999/xlink","xlink:role",l);
      break;
      case"xlinkShow":yt(e,"http://www.w3.org/1999/xlink","xlink:show",l);
      break;
      case"xlinkTitle":yt(e,"http://www.w3.org/1999/xlink","xlink:title",l);
      break;
      case"xlinkType":yt(e,"http://www.w3.org/1999/xlink","xlink:type",l);
      break;
      case"xmlBase":yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);
      break;
      case"xmlLang":yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);
      break;
      case"xmlSpace":yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);
      break;
      case"is":Zi(e,"is",l);
      break;
      case"innerText":case"textContent":return;
      default:if(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")t=Kp.get(t)||t,Zi(e,t,l);
      else return
    }

    ze=!0
  }

  function wo(e,a,t,l,n,i) {
    switch(t) {
      case"style":Pr(e,l,i);
      return;
      case"dangerouslySetInnerHTML":if(l!=null) {
        if(typeof l!="object"||!("__html"in l))throw Error(o(61));
        if(t=l.__html,t!=null) {
          if(n.children!=null)throw Error(o(60));
          (i!=null?i.__html:void 0)!==t&&(e.innerHTML=t)
        }
      }

      break;
      case"children":if(typeof l=="string")Xl(e,l);
      else if(typeof l=="number"||typeof l=="bigint")Xl(e,""+l);
      else return;
      break;
      case"onScroll":l!=null&&ge("scroll",e);
      return;
      case"onScrollEnd":l!=null&&ge("scrollend",e);
      return;
      case"onClick":l!=null&&(e.onclick=ut);
      return;
      case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;
      case"innerText":case"textContent":return;
      default:if(!Qr.hasOwnProperty(t))e: {
        if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),i=t.slice(2,n?t.length-7:void 0),a=e[ya]||null,a=a!=null?a[t]:null,typeof a=="function"&&e.removeEventListener(i,a,n),typeof l=="function")) {
          typeof a!="function"&&a!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(i,l,n);
          break e
        }

        ze=!0,t in e?e[t]=l:l===!0?e.setAttribute(t,""):Zi(e,t,l)
      }

      return
    }

    ze=!0
  }

  function oa(e,a,t) {
    switch(a) {
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"img":ge("error",e),ge("load",e);
      var l=!1,n=!1,i;
      for(i in t)if(t.hasOwnProperty(i)) {
        var c=t[i];
        if(c!=null)switch(i) {
          case"src":l=!0;
          break;
          case"srcSet":n=!0;
          break;
          case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));
          default:_e(e,a,i,c,t,null)
        }
      }

      n&&_e(e,a,"srcSet",t.srcSet,t,null),l&&_e(e,a,"src",t.src,t,null);
      return;
      case"input":ge("invalid",e);
      var d=i=c=n=null,m=null,j=null;
      for(l in t)if(t.hasOwnProperty(l)) {
        var T=t[l];
        if(T!=null)switch(l) {
          case"name":n=T;
          break;
          case"type":c=T;
          break;
          case"checked":m=T;
          break;
          case"defaultChecked":j=T;
          break;
          case"value":i=T;
          break;
          case"defaultValue":d=T;
          break;
          case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,a));
          break;
          default:_e(e,a,l,T,t,null)
        }
      }

      $r(e,i,d,m,j,c,n,!1);
      return;
      case"select":ge("invalid",e),l=c=i=null;
      for(n in t)if(t.hasOwnProperty(n)&&(d=t[n],d!=null))switch(n) {
        case"value":i=d;
        break;
        case"defaultValue":c=d;
        break;
        case"multiple":l=d;
        default:_e(e,a,n,d,t,null)
      }

      a=i,t=c,e.multiple=!!l,a!=null?Ql(e,!!l,a,!1):t!=null&&Ql(e,!!l,t,!0);
      return;
      case"textarea":ge("invalid",e),i=n=l=null;
      for(c in t)if(t.hasOwnProperty(c)&&(d=t[c],d!=null))switch(c) {
        case"value":l=d;
        break;
        case"defaultValue":n=d;
        break;
        case"children":i=d;
        break;
        case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));
        break;
        default:_e(e,a,c,d,t,null)
      }

      Ir(e,l,n,i);
      return;
      case"option":for(m in t)if(t.hasOwnProperty(m)&&(l=t[m],l!=null))switch(m) {
        case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";
        break;
        default:_e(e,a,m,l,t,null)
      }

      return;
      case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);
      break;
      case"iframe":case"object":ge("load",e);
      break;
      case"video":case"audio":for(l=0;l<xi.length;l++)ge(xi[l],e);
      break;
      case"image":ge("error",e),ge("load",e);
      break;
      case"details":ge("toggle",e);
      break;
      case"embed":case"source":case"link":ge("error",e),ge("load",e);
      case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in t)if(t.hasOwnProperty(j)&&(l=t[j],l!=null))switch(j) {
        case"children":case"dangerouslySetInnerHTML":throw Error(o(137,a));
        default:_e(e,a,j,l,t,null)
      }

      return;
      default:if(Ls(a)) {
        for(T in t)t.hasOwnProperty(T)&&(l=t[T],l!==void 0&&wo(e,a,T,l,t,void 0));
        return
      }
    }

    for(d in t)t.hasOwnProperty(d)&&(l=t[d],l!=null&&_e(e,a,d,l,t,null))
  }

  var Ov={};
  function Mv(e,a,t,l) {
    switch(a) {
      case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;
      case"input":var n=null,i=null,c=null,d=null,m=null,j=null,T=null;
      for(N in t) {
        var D=t[N];
        if(t.hasOwnProperty(N)&&D!=null)switch(N) {
          case"checked":break;
          case"value":break;
          case"defaultValue":m=D;
          default:l.hasOwnProperty(N)||_e(e,a,N,null,l,D)
        }
      }

      for(var y in l) {
        var N=l[y];
        if(D=t[y],l.hasOwnProperty(y)&&(N!=null||D!=null))switch(y) {
          case"type":N!==D&&(ze=!0),i=N;
          break;
          case"name":N!==D&&(ze=!0),n=N;
          break;
          case"checked":N!==D&&(ze=!0),j=N;
          break;
          case"defaultChecked":N!==D&&(ze=!0),T=N;
          break;
          case"value":N!==D&&(ze=!0),c=N;
          break;
          case"defaultValue":N!==D&&(ze=!0),d=N;
          break;
          case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,a));
          break;
          default:N!==D&&_e(e,a,y,N,l,D)
        }
      }

      Bs(e,c,d,m,j,T,i,n);
      return;
      case"select":N=c=d=y=null;
      for(i in t)if(m=t[i],t.hasOwnProperty(i)&&m!=null)switch(i) {
        case"value":break;
        case"multiple":N=m;
        default:l.hasOwnProperty(i)||_e(e,a,i,null,l,m)
      }

      for(n in l)if(i=l[n],m=t[n],l.hasOwnProperty(n)&&(i!=null||m!=null))switch(n) {
        case"value":i!==m&&(ze=!0),y=i;
        break;
        case"defaultValue":i!==m&&(ze=!0),d=i;
        break;
        case"multiple":i!==m&&(ze=!0),c=i;
        default:i!==m&&_e(e,a,n,i,l,m)
      }

      a=d,t=c,l=N,y!=null?Ql(e,!!t,y,!1):!!l!=!!t&&(a!=null?Ql(e,!!t,a,!0):Ql(e,!!t,t?[]:"",!1));
      return;
      case"textarea":N=y=null;
      for(d in t)if(n=t[d],t.hasOwnProperty(d)&&n!=null&&!l.hasOwnProperty(d))switch(d) {
        case"value":break;
        case"children":break;
        default:_e(e,a,d,null,l,n)
      }

      for(c in l)if(n=l[c],i=t[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c) {
        case"value":n!==i&&(ze=!0),y=n;
        break;
        case"defaultValue":n!==i&&(ze=!0),N=n;
        break;
        case"children":break;
        case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));
        break;
        default:n!==i&&_e(e,a,c,n,l,i)
      }

      Fr(e,y,N);
      return;
      case"option":for(var w in t)if(y=t[w],t.hasOwnProperty(w)&&y!=null&&!l.hasOwnProperty(w))switch(w) {
        case"selected":e.selected=!1;
        break;
        default:_e(e,a,w,null,l,y)
      }

      for(m in l)if(y=l[m],N=t[m],l.hasOwnProperty(m)&&y!==N&&(y!=null||N!=null))switch(m) {
        case"selected":y!==N&&(ze=!0),e.selected=y&&typeof y!="function"&&typeof y!="symbol";
        break;
        default:_e(e,a,m,y,l,N)
      }

      return;
      case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in t)y=t[Z],t.hasOwnProperty(Z)&&y!=null&&!l.hasOwnProperty(Z)&&_e(e,a,Z,null,l,y);
      for(j in l)if(y=l[j],N=t[j],l.hasOwnProperty(j)&&y!==N&&(y!=null||N!=null))switch(j) {
        case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(o(137,a));
        break;
        default:_e(e,a,j,y,l,N)
      }

      return;
      default:if(Ls(a)) {
        for(var re in t)y=t[re],t.hasOwnProperty(re)&&y!==void 0&&!l.hasOwnProperty(re)&&wo(e,a,re,void 0,l,y);
        for(T in l)y=l[T],N=t[T],!l.hasOwnProperty(T)||y===N||y===void 0&&N===void 0||wo(e,a,T,y,l,N);
        return
      }
    }

    for(var x in t)y=t[x],t.hasOwnProperty(x)&&y!=null&&!l.hasOwnProperty(x)&&_e(e,a,x,null,l,y);
    for(D in l)y=l[D],N=t[D],!l.hasOwnProperty(D)||y===N||y==null&&N==null||_e(e,a,D,y,l,N)
  }

  function uh(e) {
    switch(e) {
      case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;
      default:return!1
    }
  }

  function _v() {
    if(typeof performance.getEntriesByType=="function") {
      for(var e=0,a=0,t=performance.getEntriesByType("resource"),l=0;l<t.length;l++) {
        var n=t[l],i=n.transferSize,c=n.initiatorType,d=n.duration;
        if(i&&d&&uh(c)) {
          for(c=0,d=n.responseEnd,l+=1;l<t.length;l++) {
            var m=t[l],j=m.startTime;
            if(j>d)break;
            var T=m.transferSize,D=m.initiatorType;
            T&&uh(D)&&(m=m.responseEnd,c+=T*(m<d?1:(d-j)/(m-j)))
          }

          if(--l,a+=8*(i+c)/(n.duration/1e3),e++,10<e)break
        }
      }

      if(0<e)return a/e/1e6
    }

    return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5
  }

  var Lo=null,Vo=null;
  function bi(e) {
    return e.nodeType===9?e:e.ownerDocument
  }

  function sh(e) {
    switch(e) {
      case"http://www.w3.org/2000/svg":return 1;
      case"http://www.w3.org/1998/Math/MathML":return 2;
      default:return 0
    }
  }

  function ch(e,a) {
    if(e===0)switch(a) {
      case"svg":return 1;
      case"math":return 2;
      default:return 0
    }

    return e===1&&a==="foreignObject"?0:e
  }

  function oh(e,a,t,l) {
    return t=bi(t).createElement(e),t[na]=l,t[ya]=a,oa(t,e,a),ea(t),t
  }

  function Go(e,a) {
    return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null
  }

  var Yo=null;
  function Dv() {
    var e=window.event;
    return e&&e.type==="popstate"?e===Yo?!1:(Yo=e,!0):(Yo=null,!1)
  }

  var Qo=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,rh=typeof Promise=="function"?Promise:void 0,dh=typeof requestAnimationFrame=="function"?requestAnimationFrame:Qo,Uv=typeof queueMicrotask=="function"?queueMicrotask:typeof rh<"u"?function(e) {
    return rh.resolve(null).then(e).catch(qv)
  }:Qo;
  function qv(e) {
    setTimeout(function() {
      throw e
    })
  }

  function nl(e) {
    return e==="head"
  }

  function fh(e,a) {
    var t=a,l=0;
    do {
      var n=t.nextSibling;
      if(e.removeChild(t),n&&n.nodeType===8)if(t=n.data,t==="/$"||t==="/&") {
        if(l===0) {
          e.removeChild(n),An(a);
          return
        }

        l--
      } else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")l++;
      else if(t==="html")Io(e.ownerDocument.documentElement);
      else if(t==="head") {
        t=e.ownerDocument.head,Io(t);
        for(var i=t.firstChild;i;) {
          var c=i.nextSibling,d=i.nodeName;
          i[Ln]||d==="SCRIPT"||d==="STYLE"||d==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c
        }
      } else t==="body"&&Io(e.ownerDocument.body);
      t=n
    } while(t);
    An(a)
  }

  function mh(e,a) {
    var t=e;
    e=0;
    do {
      var l=t.nextSibling;
      if(t.nodeType===1?a?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(a?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),l&&l.nodeType===8)if(t=l.data,t==="/$") {
        if(e===0)break;
        e--
      } else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;
      t=l
    } while(t)
  }

  function hh(e,a,t) {
    if(a=CSS.escape(a)!==a?"r-"+btoa(a).replace(/=/g,""):a,e.style.viewTransitionName=a,t!=null&&(e.style.viewTransitionClass=t),t=getComputedStyle(e),t.display==="inline") {
      if(a=e.getClientRects(),a.length===1)var l=1;
      else for(var n=l=0;n<a.length;n++) {
        var i=a[n];
        0<i.width&&0<i.height&&l++
      }

      l===1&&(e=e.style,e.display=a.length===1?"inline-block":"block",e.marginTop="-"+t.paddingTop,e.marginBottom="-"+t.paddingBottom)
    }
  }

  function ph(e,a) {
    e=e.style,a=a.style;
    var t=a!=null?a.hasOwnProperty("viewTransitionName")?a.viewTransitionName:a.hasOwnProperty("view-transition-name")?a["view-transition-name"]:null:null;
    e.viewTransitionName=t==null||typeof t=="boolean"?"":(""+t).trim(),t=a!=null?a.hasOwnProperty("viewTransitionClass")?a.viewTransitionClass:a.hasOwnProperty("view-transition-class")?a["view-transition-class"]:null:null,e.viewTransitionClass=t==null||typeof t=="boolean"?"":(""+t).trim(),e.display==="inline-block"&&(a==null?e.display=e.margin="":(t=a.display,e.display=t==null||typeof t=="boolean"?"":t,t=a.margin,t!=null?e.margin=t:(t=a.hasOwnProperty("marginTop")?a.marginTop:a["margin-top"],e.marginTop=t==null||typeof t=="boolean"?"":t,a=a.hasOwnProperty("marginBottom")?a.marginBottom:a["margin-bottom"],e.marginBottom=a==null||typeof a=="boolean"?"":a)))
  }

  function Hv(e,a,t) {
    return t=t.ownerDocument.defaultView, {
      rect:e,abs:a.position==="absolute"||a.position==="fixed",clip:a.clipPath!=="none"||a.overflow!=="visible"||a.filter!=="none"||a.mask!=="none"||a.mask!=="none"||a.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=t.innerHeight&&e.left<=t.innerWidth
    }
  }

  function Xo(e) {
    var a=e.getBoundingClientRect(),t=getComputedStyle(e);
    return Hv(a,t,e)
  }

  function Bv(e) {
    return e.documentElement.clientHeight
  }

  function wv(e) {
    this.addEventListener("load",e),this.addEventListener("error",e)
  }

  function Lv(e,a,t,l,n,i,c,d,m) {
    var j=a.nodeType===9?a:a.ownerDocument;
    try {
      var T=j.startViewTransition( {
        update:function() {
          var y=j.defaultView,N=y.navigation&&y.navigation.transition,w=j.fonts.status;l();var Z=[];if(w==="loaded"&&(Bv(j),j.fonts.status==="loading"&&Z.push(j.fonts.ready)),w=Z.length,e!==null)for(var re=e.suspenseyImages,x=0,h=0;h<re.length;h++) {
            var E=re[h];if(!E.complete) {
              var _=E.getBoundingClientRect();if(0<_.bottom&&0<_.right&&_.top<y.innerHeight&&_.left<y.innerWidth) {
                if(x+=Hh(E),x>ts) {
                  Z.length=w;break
                }

                E=new Promise(wv.bind(E)),Z.push(E)
              }
            }
          }

          if(0<Z.length)return y=Promise.race([Promise.all(Z),new Promise(function(G) {
            return setTimeout(G,500)
          })]).then(n,n),(N?Promise.allSettled([N.finished,y]):y).then(i,i);if(n(),N)return N.finished.then(i,i);i()
        },types:t
      });
      j.__reactViewTransition=T;
      var D=[];
      return T.ready.then(function() {
        for(var y=j.documentElement.getAnimations( {
          subtree:!0
        }),N=0;N<y.length;N++) {
          var w=y[N],Z=w.effect,re=Z.pseudoElement;if(re!=null&&re.startsWith("::view-transition")) {
            D.push(w),w=Z.getKeyframes();for(var x=re=void 0,h=!0,E=0;E<w.length;E++) {
              var _=w[E],G=_.width;if(re===void 0)re=G;else if(re!==G) {
                h=!1;break
              }

              if(G=_.height,x===void 0)x=G;else if(x!==G) {
                h=!1;break
              }

              delete _.width,delete _.height,_.transform==="none"&&delete _.transform
            }

            h&&re!==void 0&&x!==void 0&&(Z.setKeyframes(w),h=getComputedStyle(Z.target,Z.pseudoElement),h.width!==re||h.height!==x)&&(h=w[0],h.width=re,h.height=x,h=w[w.length-1],h.width=re,h.height=x,Z.setKeyframes(w))
          }
        }

        c()
      },function(y) {
        j.__reactViewTransition===T&&(j.__reactViewTransition=null);try {
          if(typeof y=="object"&&y!==null)switch(y.name) {
            case"InvalidStateError":(y.message==="View transition was skipped because document visibility state is hidden."||y.message==="Skipping view transition because document visibility state has become hidden."||y.message==="Skipping view transition because viewport size changed."||y.message==="Transition was aborted because of invalid state")&&(y=null)
          }

          y!==null&&m(y)
        } finally {
          l(),n(),c()
        }
      }),T.finished.finally(function() {
        for(var y=0;y<D.length;y++)D[y].cancel();j.__reactViewTransition===T&&(j.__reactViewTransition=null),d()
      }),T
    } catch {
      return l(),n(),c(),null
    }
  }

  function Ul(e,a) {
    this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+a+")"
  }

  Ul.prototype.animate=function(e,a) {
    return a=typeof a=="number"? {
      duration:a
    }:C({},a),a.pseudoElement=this._selector,this._scope.animate(e,a)
  },Ul.prototype.getAnimations=function() {
    for(var e=this._scope,a=this._selector,t=e.getAnimations( {
      subtree:!0
    }),l=[],n=0;n<t.length;n++) {
      var i=t[n].effect;
      i!==null&&i.target===e&&i.pseudoElement===a&&l.push(t[n])
    }

    return l
  },Ul.prototype.getComputedStyle=function() {
    return getComputedStyle(this._scope,this._selector)
  };
  function vh(e) {
    return {
      name:e,group:new Ul("group",e),imagePair:new Ul("image-pair",e),old:new Ul("old",e),new:new Ul("new",e)
    }
  }

  function Ha(e) {
    this._fragmentFiber=e,this._observers=this._eventListeners=null
  }

  Ha.prototype.addEventListener=function(e,a,t) {
    var l=null,n=null;
    if(!(t!=null&&typeof t!="boolean"&&(l=t.signal||null,l!==null&&l.aborted))) {
      this._eventListeners===null&&(this._eventListeners=[]);
      var i=this._eventListeners;
      if(yh(i,e,a,t)===-1) {
        var c=this,d=a;
        t!=null&&typeof t!="boolean"&&t.once===!0&&(d=function(m) {
          c.removeEventListener(e,a,t),typeof a=="function"?a.call(this,m):a.handleEvent(m)
        }),l!==null&&(n=c.removeEventListener.bind(c,e,a,t),l.addEventListener("abort",n, {
          once:!0
        }),n=l.removeEventListener.bind(l,"abort",n)),l=Sn(t),i.push( {
          type:e,listener:a,optionsOrUseCapture:t,attachedListener:d,cleanup:n
        }),b(this._fragmentFiber.child,!1,Vv,e,d,l)
      }

      this._eventListeners=i
    }
  };
  function Vv(e,a,t,l) {
    return ue(e).addEventListener(a,t,l),!1
  }

  Ha.prototype.removeEventListener=function(e,a,t) {
    var l=this._eventListeners;
    if(l!==null&&(a=yh(l,e,a,t),a!==-1)) {
      var n=l[a];
      t=n.attachedListener;
      var i=n.cleanup;
      n=Sn(n.optionsOrUseCapture),b(this._fragmentFiber.child,!1,Gv,e,t,n),l.splice(a,1),i!==null&&i()
    }
  };
  function Gv(e,a,t,l) {
    return ue(e).removeEventListener(a,t,l),!1
  }

  function Sn(e) {
    return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)? {
      capture:e.capture,passive:e.passive
    }:e
  }

  function gh(e) {
    return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")
  }

  function yh(e,a,t,l) {
    if(e.length===0)return-1;
    l=gh(l);
    for(var n=0;n<e.length;n++) {
      var i=e[n];
      if(i.type===a&&i.listener===t&&gh(i.optionsOrUseCapture)===l)return n
    }

    return-1
  }

  Ha.prototype.dispatchEvent=function(e) {
    var a=A(this._fragmentFiber);
    if(a===null)return!0;
    a=ue(a);
    var t=this._eventListeners;
    if(t!==null&&0<t.length||!e.bubbles) {
      var l=a.nodeType===9?a.createComment(""):document.createTextNode("");
      if(t)for(var n=0;n<t.length;n++) {
        var i=t[n];
        l.addEventListener(i.type,i.attachedListener,Sn(i.optionsOrUseCapture))
      }

      if(a.appendChild(l),e=l.dispatchEvent(e),t)for(n=0;n<t.length;n++)i=t[n],l.removeEventListener(i.type,i.attachedListener,Sn(i.optionsOrUseCapture));
      return a.removeChild(l),e
    }

    return a.dispatchEvent(e)
  },Ha.prototype.focus=function(e) {
    b(this._fragmentFiber.child,!0,xh,e,void 0,void 0)
  };
  function xh(e,a) {
    return e.tag===6?!1:(e=ue(e),Pv(e,a))
  }

  Ha.prototype.focusLast=function(e) {
    var a=[];
    b(this._fragmentFiber.child,!0,Zo,a,void 0,void 0);
    for(var t=a.length-1;0<=t&&!xh(a[t],e);t--);
  };
  function Zo(e,a) {
    return a.push(e),!1
  }

  Ha.prototype.blur=function() {
    var e=A(this._fragmentFiber);
    e!==null&&(e=ue(e),e=bi(e).activeElement,e!==null&&b(this._fragmentFiber.child,!1,Yv,e,void 0,void 0))
  };
  function Yv(e,a) {
    return e.tag===6?!1:(e=ue(e),e===a||e.contains(a)?(a.blur(),!0):!1)
  }

  Ha.prototype.observeUsing=function(e) {
    this._observers===null&&(this._observers=new Set),this._observers.add(e),b(this._fragmentFiber.child,!1,Qv,e,void 0,void 0)
  };
  function Qv(e,a) {
    return e.tag===6||(e=ue(e),a.observe(e)),!1
  }

  Ha.prototype.unobserveUsing=function(e) {
    var a=this._observers;
    if(a!==null&&a.has(e)) {
      a.delete(e),b(this._fragmentFiber.child,!1,Xv,e,void 0,void 0);
      for(var t=a=0;t<nt.length;t++) {
        var l=nt[t];
        l.fragmentInstance===this&&l.observer===e?e.unobserve(l.instance):nt[a++]=l
      }

      nt.length=a
    }
  };
  function Xv(e,a) {
    return e.tag===6||(e=ue(e),a.unobserve(e)),!1
  }

  var nt=[],ko=!1;
  function Zv(e,a,t) {
    nt.push( {
      fragmentInstance:e,observer:a,instance:t
    }),ko||(ko=!0,e1(function() {
      ko=!1;var l=nt;nt=[];for(var n=0;n<l.length;n++) {
        var i=l[n];i.observer.unobserve(i.instance)
      }
    }))
  }

  Ha.prototype.getClientRects=function() {
    var e=[];
    return b(this._fragmentFiber.child,!1,kv,e,void 0,void 0),e
  };
  function kv(e,a) {
    if(e.tag===6) {
      e=e.stateNode;
      var t=e.ownerDocument.createRange();
      t.selectNodeContents(e),a.push.apply(a,t.getClientRects())
    } else e=ue(e),a.push.apply(a,e.getClientRects());
    return!1
  }

  Ha.prototype.getRootNode=function(e) {
    var a=A(this._fragmentFiber);
    return a===null?this:ue(a).getRootNode(e)
  },Ha.prototype.compareDocumentPosition=function(e) {
    var a=A(this._fragmentFiber);
    if(a===null)return Node.DOCUMENT_POSITION_DISCONNECTED;
    var t=[];
    b(this._fragmentFiber.child,!1,Zo,t,void 0,void 0);
    var l=ue(a);
    if(t.length===0) {
      if(t=l,I(this._fragmentFiber)) {
        e: {
          for(a=this._fragmentFiber.return;a!==null;) {
            if(a.tag===4) {
              a=a.stateNode.containerInfo;
              break e
            }

            if(a.tag===3||a.tag===5||a.tag===27)break;
            a=a.return
          }

          a=null
        }

        a!=null&&(t=a)
      }

      a=this._fragmentFiber;
      var n=l=t.compareDocumentPosition(e);
      return t===e?n=Node.DOCUMENT_POSITION_CONTAINS:l&Node.DOCUMENT_POSITION_CONTAINED_BY&&(t=Q(a)[1],t===null?n=Node.DOCUMENT_POSITION_PRECEDING:(e=ue(t).compareDocumentPosition(e),n=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    }

    a=ue(t[0]),n=ue(t[t.length-1]);
    var i=I(this._fragmentFiber)?a.parentElement:l;
    if(i==null)return Node.DOCUMENT_POSITION_DISCONNECTED;
    l=i.compareDocumentPosition(a)&Node.DOCUMENT_POSITION_CONTAINED_BY,i=i.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c=a.compareDocumentPosition(e),d=n.compareDocumentPosition(e),m=c&Node.DOCUMENT_POSITION_CONTAINED_BY||d&Node.DOCUMENT_POSITION_CONTAINED_BY;
    return d=l&&i&&c&Node.DOCUMENT_POSITION_FOLLOWING&&d&Node.DOCUMENT_POSITION_PRECEDING,a=l&&a===e||i&&n===e||m||d?Node.DOCUMENT_POSITION_CONTAINED_BY:!l&&a===e||!i&&n===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:c,a&Node.DOCUMENT_POSITION_DISCONNECTED||a&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Kv(a,this._fragmentFiber,t[0],t[t.length-1],e)?a:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
  };
  function Kv(e,a,t,l,n) {
    var i=ml(n);
    if(e&Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if(t=!!i)e: {
        for(;i!==null;) {
          if(i.tag===7&&(i===a||i.alternate===a)) {
            t=!0;
            break e
          }

          i=i.return
        }

        t=!1
      }

      return t
    }

    if(e&Node.DOCUMENT_POSITION_CONTAINS) {
      if(i===null)return i=n.ownerDocument,n===i||n===i.documentElement||n===i.body;
      e: {
        for(i=a,a=A(a);i!==null;) {
          if(!(i.tag!==5&&i.tag!==3&&i.tag!==27||i!==a&&i.alternate!==a)) {
            i=!0;
            break e
          }

          i=i.return
        }

        i=!1
      }

      return i
    }

    return e&Node.DOCUMENT_POSITION_PRECEDING?((a=!!i)&&!(a=i===t)&&(a=B(t,i,P),a===null?a=!1:(b(a,!0,Ue,i,t),i=U,U=null,a=i!==null)),a):e&Node.DOCUMENT_POSITION_FOLLOWING?((a=!!i)&&!(a=i===l)&&(a=B(l,i,P),a===null?a=!1:(b(a,!0,he,i,l),i=U,W=U=null,a=i!==null)),a):!1
  }

  function jh(e,a) {
    var t=e.ownerDocument.createRange();
    t.selectNodeContents(e),e=t.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,a?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)
  }

  Ha.prototype.scrollIntoView=function(e) {
    if(typeof e=="object")throw Error(o(566));
    var a=[];
    b(this._fragmentFiber.child,!1,Zo,a,void 0,void 0);
    var t=e!==!1;
    if(a.length===0) {
      var l=Q(this._fragmentFiber);
      if(l=t?l[1]||l[0]||A(this._fragmentFiber):l[0]||l[1],l===null)return;
      if(l.tag===6) {
        e=ue(l),jh(e,t);
        return
      }

      if(l=ue(l),l.nodeType!==9) {
        if(l.nodeType===11) {
          t="host"in l?l.host:null,t!==null&&t.scrollIntoView(e);
          return
        }

        l.scrollIntoView(e)
      }
    }

    for(l=t?a.length-1:0;l!==(t?-1:a.length);) {
      var n=a[l];
      n.tag===6?(n=ue(n),jh(n,t)):ue(n).scrollIntoView(e),l+=t?-1:1
    }
  };
  function Jv(e,a) {
    return e=ue(e),bh(e,a),!1
  }

  function bh(e,a) {
    e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(a)
  }

  function Sh(e,a) {
    var t=a._eventListeners;
    if(t!==null)for(var l=0;l<t.length;l++) {
      var n=t[l];
      e.addEventListener(n.type,n.attachedListener,Sn(n.optionsOrUseCapture))
    }

    e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(i) {
      for(var c=0,d=0;d<nt.length;d++) {
        var m=nt[d];(m.fragmentInstance!==a||m.observer!==i||m.instance!==e)&&(nt[c++]=m)
      }

      nt.length=c,i.observe(e)
    }),bh(e,a))
  }

  function $v(e,a) {
    var t=a._eventListeners;
    if(t!==null)for(var l=0;l<t.length;l++) {
      var n=t[l];
      e.removeEventListener(n.type,n.attachedListener,Sn(n.optionsOrUseCapture))
    }

    e.nodeType!==3&&(t=a._observers,t!==null&&t.forEach(function(i) {
      typeof i.rootMargin=="string"?Zv(a,i,e):i.unobserve(e)
    }),e.reactFragments!=null&&e.reactFragments.delete(a))
  }

  function Ko(e) {
    var a=e.firstChild;
    for(a&&a.nodeType===10&&(a=a.nextSibling);a;) {
      var t=a;
      switch(a=a.nextSibling,t.nodeName) {
        case"HTML":case"HEAD":case"BODY":Ko(t),Xi(t);
        continue;
        case"SCRIPT":case"STYLE":continue;
        case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue
      }

      e.removeChild(t)
    }
  }

  function Fv(e,a,t,l) {
    for(;e.nodeType===1;) {
      var n=t;
      if(e.nodeName.toLowerCase()!==a.toLowerCase()) {
        if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break
      } else if(l) {
        if(!e[Ln])switch(a) {
          case"meta":if(!e.hasAttribute("itemprop"))break;
          return e;
          case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;
          if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;
          return e;
          case"style":if(e.hasAttribute("data-precedence"))break;
          return e;
          case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;
          return e;
          default:return e
        }
      } else if(a==="input"&&e.type==="hidden") {
        var i=n.name==null?null:""+n.name;
        if(n.type==="hidden"&&e.getAttribute("name")===i)return e
      } else return e;
      if(e=$a(e.nextSibling),e===null)break
    }

    return null
  }

  function Iv(e,a,t) {
    if(a==="")return null;
    for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=$a(e.nextSibling),e===null))return null;
    return e
  }

  function Eh(e,a) {
    for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=$a(e.nextSibling),e===null))return null;
    return e
  }

  function Jo(e) {
    return e.data==="$?"||e.data==="$~"
  }

  function $o(e) {
    return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"
  }

  function Wv(e,a) {
    var t=e.ownerDocument;
    if(e.data==="$~")e._reactRetry=a;
    else if(e.data!=="$?"||t.readyState!=="loading")a();
    else {
      var l=function() {
        a(),t.removeEventListener("DOMContentLoaded",l)
      };
      t.addEventListener("DOMContentLoaded",l),e._reactRetry=l
    }
  }

  function $a(e) {
    for(;e!=null;e=e.nextSibling) {
      var a=e.nodeType;
      if(a===1||a===3)break;
      if(a===8) {
        if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;
        if(a==="/$"||a==="/&")return null
      }
    }

    return e
  }

  var Fo=null;
  function Nh(e) {
    e=e.nextSibling;
    for(var a=0;e;) {
      if(e.nodeType===8) {
        var t=e.data;
        if(t==="/$"||t==="/&") {
          if(a===0)return $a(e.nextSibling);
          a--
        } else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||a++
      }

      e=e.nextSibling
    }

    return null
  }

  function zh(e) {
    e=e.previousSibling;
    for(var a=0;e;) {
      if(e.nodeType===8) {
        var t=e.data;
        if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&") {
          if(a===0)return e;
          a--
        } else t!=="/$"&&t!=="/&"||a++
      }

      e=e.previousSibling
    }

    return null
  }

  function Pv(e,a) {
    function t() {
      l=!0
    }

    if(e.ownerDocument.activeElement===e)return!0;
    var l=!1;
    try {
      e.ownerDocument.addEventListener("focus",t,!0),(e.focus||HTMLElement.prototype.focus).call(e,a)
    } finally {
      e.ownerDocument.removeEventListener("focus",t,!0)
    }

    return l
  }

  function e1(e) {
    dh(function() {
      dh(function(a) {
        return e(a)
      })
    })
  }

  function Th(e,a,t) {
    switch(a=bi(t),e) {
      case"html":if(e=a.documentElement,!e)throw Error(o(452));
      return e;
      case"head":if(e=a.head,!e)throw Error(o(453));
      return e;
      case"body":if(e=a.body,!e)throw Error(o(454));
      return e;
      default:throw Error(o(451))
    }
  }

  function Ch(e,a,t) {
    for(var l in t) {
      var n=t[l];
      t.hasOwnProperty(l)&&n!=null&&_e(e,a,l,null,Ov,n)
    }

    t.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ut&&(e.onclick=null),Xi(e)
  }

  function Io(e) {
    for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);
    Xi(e)
  }

  var Fa=new Map,Ah=new Set;
  function Si(e) {
    if(typeof e.getRootNode=="function") {
      var a=e.getRootNode();
      if(a.nodeType===9||a.nodeType===11)return a
    }

    return e.nodeType===9?e:e.ownerDocument
  }

  var _t=se.d;
  se.d= {
    f:a1,r:t1,D:l1,C:n1,L:i1,m:u1,X:c1,S:s1,M:o1
  };
  function a1() {
    var e=_t.f(),a=Ku();
    return e||a
  }

  function t1(e) {
    var a=Vl(e);
    a!==null&&a.tag===5&&a.type==="form"?Mf(a):_t.r(e)
  }

  var En=typeof document>"u"?null:document;
  function Oh(e,a,t) {
    var l=En;
    if(l&&typeof a=="string"&&a) {
      var n=Ya(a);
      n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),Ah.has(n)||(Ah.add(n),e= {
        rel:e,crossOrigin:t,href:a
      },l.querySelector(n)===null&&(a=l.createElement("link"),oa(a,"link",e),ea(a),l.head.appendChild(a)))
    }
  }

  function l1(e) {
    _t.D(e),Oh("dns-prefetch",e,null)
  }

  function n1(e,a) {
    _t.C(e,a),Oh("preconnect",e,a)
  }

  function i1(e,a,t) {
    _t.L(e,a,t);
    var l=En;
    if(l&&e&&a) {
      var n='link[rel="preload"][as="'+Ya(a)+'"]';
      a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+Ya(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+Ya(t.imageSizes)+'"]')):n+='[href="'+Ya(e)+'"]';
      var i=n;
      switch(a) {
        case"style":i=Nn(e);
        break;
        case"script":i=zn(e)
      }

      if(!(Fa.has(i)||(e=C( {
        rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a
      },t),Fa.set(i,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(Ei(i))||a==="script"&&l.querySelector(Ni(i))))) {
        var c=l.createElement("link");
        oa(c,"link",e),a==="style"&&(c[Qi]=!0,c.onload=c.onerror=function() {
          Gr(c)
        }),ea(c),l.head.appendChild(c)
      }
    }
  }

  function u1(e,a) {
    _t.m(e,a);
    var t=En;
    if(t&&e) {
      var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+Ya(l)+'"][href="'+Ya(e)+'"]',i=n;
      switch(l) {
        case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zn(e)
      }

      if(!Fa.has(i)&&(e=C( {
        rel:"modulepreload",href:e
      },a),Fa.set(i,e),t.querySelector(n)===null)) {
        switch(l) {
          case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Ni(i)))return
        }

        l=t.createElement("link"),oa(l,"link",e),ea(l),t.head.appendChild(l)
      }
    }
  }

  function s1(e,a,t) {
    _t.S(e,a,t);
    var l=En;
    if(l&&e) {
      var n=Gl(l).hoistableStyles,i=Nn(e);
      a=a||"default";
      var c=n.get(i);
      if(!c) {
        var d= {
          loading:0,preload:null
        };
        if(c=l.querySelector(Ei(i)))d.loading=5;
        else {
          e=C( {
            rel:"stylesheet",href:e,"data-precedence":a
          },t),(t=Fa.get(i))&&Wo(e,t);
          var m=c=l.createElement("link");
          ea(m),oa(m,"link",e),m._p=new Promise(function(j,T) {
            m.onload=j,m.onerror=T
          }),m.addEventListener("load",function() {
            d.loading|=1
          }),m.addEventListener("error",function() {
            d.loading|=2
          }),d.loading|=4,es(c,a,l)
        }

        c= {
          type:"stylesheet",instance:c,count:1,state:d
        },n.set(i,c)
      }
    }
  }

  function c1(e,a) {
    _t.X(e,a);
    var t=En;
    if(t&&e) {
      var l=Gl(t).hoistableScripts,n=zn(e),i=l.get(n);
      i||(i=t.querySelector(Ni(n)),i||(e=C( {
        src:e,async:!0
      },a),(a=Fa.get(n))&&Po(e,a),i=t.createElement("script"),ea(i),oa(i,"link",e),t.head.appendChild(i)),i= {
        type:"script",instance:i,count:1,state:null
      },l.set(n,i))
    }
  }

  function o1(e,a) {
    _t.M(e,a);
    var t=En;
    if(t&&e) {
      var l=Gl(t).hoistableScripts,n=zn(e),i=l.get(n);
      i||(i=t.querySelector(Ni(n)),i||(e=C( {
        src:e,async:!0,type:"module"
      },a),(a=Fa.get(n))&&Po(e,a),i=t.createElement("script"),ea(i),oa(i,"link",e),t.head.appendChild(i)),i= {
        type:"script",instance:i,count:1,state:null
      },l.set(n,i))
    }
  }

  function Mh(e,a,t,l) {
    var n=(n=qt.current)?Si(n):null;
    if(!n)throw Error(o(446));
    switch(e) {
      case"meta":case"title":return null;
      case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(t=Nn(t.href),a=Gl(n).hoistableStyles,l=a.get(t),l||(l= {
        type:"style",instance:null,count:0,state:null
      },a.set(t,l)),l): {
        type:"void",instance:null,count:0,state:null
      };
      case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string") {
        e=Nn(t.href);
        var i=Gl(n).hoistableStyles,c=i.get(e);
        if(c||(n=n.ownerDocument||n,c= {
          type:"stylesheet",instance:null,count:0,state: {
            loading:0,preload:null
          }
        },i.set(e,c),(i=n.querySelector(Ei(e)))?i._p||(c.instance=i,c.state.loading=5):(i=Fa.get(e),i||(i= {
          rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy
        },Fa.set(e,i)),r1(n,e,i,c.state))),a&&l===null)throw Error(o(528,""));
        return c
      }

      if(a&&l!==null)throw Error(o(529,""));
      return null;
      case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(t=zn(t),a=Gl(n).hoistableScripts,l=a.get(t),l||(l= {
        type:"script",instance:null,count:0,state:null
      },a.set(t,l)),l): {
        type:"void",instance:null,count:0,state:null
      };
      default:throw Error(o(444,e))
    }
  }

  function Nn(e) {
    return'href="'+Ya(e)+'"'
  }

  function Ei(e) {
    return'link[rel="stylesheet"]['+e+"]"
  }

  function _h(e) {
    return C({},e, {
      "data-precedence":e.precedence,precedence:null
    })
  }

  function r1(e,a,t,l) {
    if(a=e.querySelector('link[rel="preload"][as="style"]['+a+"]")) {
      if(a[Qi]!==!0) {
        l.loading=1;
        return
      }
    } else a=e.createElement("link"),a[Qi]=!0,a.onload=a.onerror=Gr.bind(null,a),oa(a,"link",t),ea(a),e.head.appendChild(a);
    l.preload=a,a.addEventListener("load",function() {
      return l.loading|=1
    }),a.addEventListener("error",function() {
      return l.loading|=2
    })
  }

  function zn(e) {
    return'[src="'+Ya(e)+'"]'
  }

  function Ni(e) {
    return"script[async]"+e
  }

  function Dh(e,a,t) {
    if(a.count++,a.instance===null)switch(a.type) {
      case"style":var l=e.querySelector('style[data-href~="'+Ya(t.href)+'"]');
      if(l)return a.instance=l,ea(l),l;
      var n=C({},t, {
        "data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null
      });
      return l=(e.ownerDocument||e).createElement("style"),ea(l),oa(l,"style",n),es(l,t.precedence,e),a.instance=l;
      case"stylesheet":n=Nn(t.href);
      var i=e.querySelector(Ei(n));
      if(i)return a.state.loading|=4,a.instance=i,ea(i),i;
      l=_h(t),(n=Fa.get(n))&&Wo(l,n),i=(e.ownerDocument||e).createElement("link"),ea(i);
      var c=i;
      return c._p=new Promise(function(d,m) {
        c.onload=d,c.onerror=m
      }),oa(i,"link",l),a.state.loading|=4,es(i,t.precedence,e),a.instance=i;
      case"script":return i=zn(t.src),(n=e.querySelector(Ni(i)))?(a.instance=n,ea(n),n):(l=t,(n=Fa.get(i))&&(l=C({},t),Po(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),ea(n),oa(n,"link",l),e.head.appendChild(n),a.instance=n);
      case"void":return null;
      default:throw Error(o(443,a.type))
    } else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,es(l,t.precedence,e));
    return a.instance
  }

  function es(e,a,t) {
    for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++) {
      var d=l[c];
      if(d.dataset.precedence===a)i=d;
      else if(i!==n)break
    }

    i?i.parentNode.insertBefore(e,i.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))
  }

  function Wo(e,a) {
    e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)
  }

  function Po(e,a) {
    e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)
  }

  var as=null;
  function Rh(e,a,t) {
    if(as===null) {
      var l=new Map,n=as=new Map;
      n.set(t,l)
    } else n=as,l=n.get(t),l||(l=new Map,n.set(t,l));
    if(l.has(e))return l;
    for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++) {
      var i=t[n];
      if(!(i[Ln]||i[na]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg") {
        var c=i.getAttribute(a)||"";
        c=e+c;
        var d=l.get(c);
        d?d.push(i):l.set(c,[i])
      }
    }

    return l
  }

  function er(e,a,t) {
    e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)
  }

  function d1(e,a,t) {
    if(t===1||a.itemProp!=null)return!1;
    switch(e) {
      case"meta":case"title":return!0;
      case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;
      return!0;
      case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;
      switch(a.rel) {
        case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;
        default:return!0
      }

      case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0
    }

    return!1
  }

  function Uh(e,a) {
    return e==="img"&&a.src!=null&&a.src!==""&&a.onLoad==null&&a.loading!=="lazy"
  }

  function qh(e) {
    return!(e.type==="stylesheet"&&(e.state.loading&3)===0)
  }

  function Hh(e) {
    return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25
  }

  function Bh(e,a) {
    typeof a.decode=="function"&&(e.imgCount++,a.complete||(e.imgBytes+=Hh(a),e.suspenseyImages.push(a)),e=h1.bind(e),a.decode().then(e,e))
  }

  function f1(e,a,t,l) {
    if(t.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(t.state.loading&4)===0) {
      if(t.instance===null) {
        var n=Nn(l.href),i=a.querySelector(Ei(n));
        if(i) {
          a=i._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=zi.bind(e),a.then(e,e)),t.state.loading|=4,t.instance=i,ea(i);
          return
        }

        i=a.ownerDocument||a,l=_h(l),(n=Fa.get(n))&&Wo(l,n),i=i.createElement("link"),ea(i);
        var c=i;
        c._p=new Promise(function(d,m) {
          c.onload=d,c.onerror=m
        }),oa(i,"link",l),t.instance=i
      }

      e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,a),(a=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=zi.bind(e),a.addEventListener("load",t),a.addEventListener("error",t))
    }
  }

  var ts=0;
  function m1(e,a) {
    return e.stylesheets&&e.count===0&&ns(e,e.stylesheets),0<e.count||0<e.imgCount?function(t) {
      var l=setTimeout(function() {
        if(e.stylesheets&&ns(e,e.stylesheets),e.unsuspend) {
          var i=e.unsuspend;e.unsuspend=null,i()
        }
      },6e4+a);
      0<e.imgBytes&&ts===0&&(ts=62500*_v());
      var n=setTimeout(function() {
        if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ns(e,e.stylesheets),e.unsuspend)) {
          var i=e.unsuspend;e.unsuspend=null,i()
        }
      },(e.imgBytes>ts?50:800)+a);
      return e.unsuspend=t,function() {
        e.unsuspend=null,clearTimeout(l),clearTimeout(n)
      }
    }:null
  }

  function wh(e) {
    if(e.count===0&&(e.imgCount===0||!e.waitingForImages)) {
      if(e.stylesheets)ns(e,e.stylesheets);
      else if(e.unsuspend) {
        var a=e.unsuspend;
        e.unsuspend=null,a()
      }
    }
  }

  function zi() {
    this.count--,wh(this)
  }

  function h1() {
    this.imgCount--,wh(this)
  }

  var ls=null;
  function ns(e,a) {
    e.stylesheets=null,e.unsuspend!==null&&(e.count++,ls=new Map,a.forEach(p1,e),ls=null,zi.call(e))
  }

  function p1(e,a) {
    if(!(a.state.loading&4)) {
      var t=ls.get(e);
      if(t)var l=t.get(null);
      else {
        t=new Map,ls.set(e,t);
        for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++) {
          var c=n[i];
          (c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(t.set(c.dataset.precedence,c),l=c)
        }

        l&&t.set(null,l)
      }

      n=a.instance,c=n.getAttribute("data-precedence"),i=t.get(c)||l,i===l&&t.set(null,n),t.set(c,n),this.count++,l=zi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4
    }
  }

  var Tn= {
    $$typeof:we,Provider:null,Consumer:null,_currentValue:za,_currentValue2:za,_threadCount:0
  };
  function v1(e,a,t,l,n,i,c,d,m) {
    this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Rs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.hiddenUpdates=Rs(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=m,this.transitionTypes=null,this.incompleteTransitions=new Map
  }

  function Lh(e,a,t,l,n,i,c,d,m,j,T,D) {
    return e=new v1(e,a,t,c,m,j,T,D,d),a=1,i===!0&&(a|=24),i=xa(3,null,null,a),e.current=i,i.stateNode=e,a=hc(),a.refCount++,e.pooledCache=a,a.refCount++,i.memoizedState= {
      element:l,isDehydrated:t,cache:a
    },yc(i),e
  }

  function Vh(e) {
    return e?(e=Il,e):Il
  }

  function Gh(e,a,t,l,n,i) {
    n=Vh(n),l.context===null?l.context=n:l.pendingContext=n,l=kt(a),l.payload= {
      element:t
    },i=i===void 0?null:i,i!==null&&(l.callback=i),t=Kt(e,l,a),t!==null&&(Ea(t,e,a),ti(t,e,a))
  }

  function Yh(e,a) {
    if(e=e.memoizedState,e!==null&&e.dehydrated!==null) {
      var t=e.retryLane;
      e.retryLane=t!==0&&t<a?t:a
    }
  }

  function ar(e,a) {
    Yh(e,a),(e=e.alternate)&&Yh(e,a)
  }

  function Qh(e) {
    if(e.tag===13||e.tag===31) {
      var a=gl(e,67108864);
      a!==null&&Ea(a,e,67108864),ar(e,67108864)
    }
  }

  function Xh(e) {
    if(e.tag===13||e.tag===31) {
      var a=qa();
      a=Us(a);
      var t=gl(e,a);
      t!==null&&Ea(t,e,a),ar(e,a)
    }
  }

  var Cn=!0;
  function g1(e,a,t,l) {
    var n=X.T;
    X.T=null;
    var i=se.p;
    try {
      se.p=2,tr(e,a,t,l)
    } finally {
      se.p=i,X.T=n
    }
  }

  function y1(e,a,t,l) {
    var n=X.T;
    X.T=null;
    var i=se.p;
    try {
      se.p=8,tr(e,a,t,l)
    } finally {
      se.p=i,X.T=n
    }
  }

  function tr(e,a,t,l) {
    if(Cn) {
      var n=lr(l);
      if(n===null)Bo(e,a,l,is,t),kh(e,l);
      else if(j1(n,e,a,t,l))l.stopPropagation();
      else if(kh(e,l),a&4&&-1<x1.indexOf(e)) {
        for(;n!==null;) {
          var i=Vl(n);
          if(i!==null)switch(i.tag) {
            case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated) {
              var c=fl(i.pendingLanes);
              if(c!==0) {
                var d=i;
                for(d.pendingLanes|=2,d.entangledLanes|=2;c;) {
                  var m=1<<31-Aa(c);
                  d.entanglements[1]|=m,c&=~m
                }

                vt(i),(Te&6)===0&&(Xu=Ta()+500,yi(0))
              }
            }

            break;
            case 31:case 13:d=gl(i,2),d!==null&&Ea(d,i,2),Ku(),ar(i,2)
          }

          if(i=lr(l),i===null&&Bo(e,a,l,is,t),i===n)break;
          n=i
        }

        n!==null&&l.stopPropagation()
      } else Bo(e,a,l,null,t)
    }
  }

  function lr(e) {
    return e=Gs(e),nr(e)
  }

  var is=null;
  function nr(e) {
    if(is=null,e=ml(e),e!==null) {
      var a=p(e);
      if(a===null)e=null;
      else {
        var t=a.tag;
        if(t===13) {
          if(e=g(a),e!==null)return e;
          e=null
        } else if(t===31) {
          if(e=O(a),e!==null)return e;
          e=null
        } else if(t===3) {
          if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;
          e=null
        } else a!==e&&(e=null)
      }
    }

    return is=e,null
  }

  function Zh(e) {
    switch(e) {
      case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;
      case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;
      case"message":switch(_p()) {
        case Or:return 2;
        case Mr:return 8;
        case wi:case Dp:return 32;
        case _r:return 268435456;
        default:return 32
      }

      default:return 32
    }
  }

  var ir=!1,il=null,ul=null,sl=null,Ti=new Map,Ci=new Map,cl=[],x1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function kh(e,a) {
    switch(e) {
      case"focusin":case"focusout":il=null;
      break;
      case"dragenter":case"dragleave":ul=null;
      break;
      case"mouseover":case"mouseout":sl=null;
      break;
      case"pointerover":case"pointerout":Ti.delete(a.pointerId);
      break;
      case"gotpointercapture":case"lostpointercapture":Ci.delete(a.pointerId)
    }
  }

  function Ai(e,a,t,l,n,i) {
    return e===null||e.nativeEvent!==i?(e= {
      blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]
    },a!==null&&(a=Vl(a),a!==null&&Qh(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)
  }

  function j1(e,a,t,l,n) {
    switch(a) {
      case"focusin":return il=Ai(il,e,a,t,l,n),!0;
      case"dragenter":return ul=Ai(ul,e,a,t,l,n),!0;
      case"mouseover":return sl=Ai(sl,e,a,t,l,n),!0;
      case"pointerover":var i=n.pointerId;
      return Ti.set(i,Ai(Ti.get(i)||null,e,a,t,l,n)),!0;
      case"gotpointercapture":return i=n.pointerId,Ci.set(i,Ai(Ci.get(i)||null,e,a,t,l,n)),!0
    }

    return!1
  }

  function Kh(e) {
    var a=ml(e.target);
    if(a!==null) {
      var t=p(a);
      if(t!==null) {
        if(a=t.tag,a===13) {
          if(a=g(t),a!==null) {
            e.blockedOn=a,wr(e.priority,function() {
              Xh(t)
            });
            return
          }
        } else if(a===31) {
          if(a=O(t),a!==null) {
            e.blockedOn=a,wr(e.priority,function() {
              Xh(t)
            });
            return
          }
        } else if(a===3&&t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;
          return
        }
      }
    }

    e.blockedOn=null
  }

  function us(e) {
    if(e.blockedOn!==null)return!1;
    for(var a=e.targetContainers;0<a.length;) {
      var t=lr(e.nativeEvent);
      if(t===null) {
        t=e.nativeEvent;
        var l=new t.constructor(t.type,t);
        Vs=l,t.target.dispatchEvent(l),Vs=null
      } else return a=Vl(t),a!==null&&Qh(a),e.blockedOn=t,!1;
      a.shift()
    }

    return!0
  }

  function Jh(e,a,t) {
    us(e)&&t.delete(a)
  }

  function b1() {
    ir=!1,il!==null&&us(il)&&(il=null),ul!==null&&us(ul)&&(ul=null),sl!==null&&us(sl)&&(sl=null),Ti.forEach(Jh),Ci.forEach(Jh)
  }

  function ss(e,a) {
    e.blockedOn===a&&(e.blockedOn=null,ir||(ir=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,b1)))
  }

  var cs=null;
  function $h(e) {
    cs!==e&&(cs=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function() {
      cs===e&&(cs=null);for(var a=0;a<e.length;a+=3) {
        var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function") {
          if(nr(l||t)===null)continue;break
        }

        var i=Vl(t);i!==null&&(e.splice(a,3),a-=3,Lc(i, {
          pending:!0,data:n,method:t.method,action:l
        },l,n))
      }
    }))
  }

  function An(e) {
    function a(m) {
      return ss(m,e)
    }

    il!==null&&ss(il,e),ul!==null&&ss(ul,e),sl!==null&&ss(sl,e),Ti.forEach(a),Ci.forEach(a);
    for(var t=0;t<cl.length;t++) {
      var l=cl[t];
      l.blockedOn===e&&(l.blockedOn=null)
    }

    for(;0<cl.length&&(t=cl[0],t.blockedOn===null);)Kh(t),t.blockedOn===null&&cl.shift();
    if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3) {
      var n=t[l],i=t[l+1],c=n[ya]||null;
      if(typeof i=="function")c||$h(t);
      else if(c) {
        var d=null;
        if(i&&i.hasAttribute("formAction")) {
          if(n=i,c=i[ya]||null)d=c.formAction;
          else if(nr(n)!==null)continue
        } else d=c.action;
        typeof d=="function"?t[l+1]=d:(t.splice(l,3),l-=3),$h(t)
      }
    }
  }

  function Fh() {
    function e(i) {
      i.canIntercept&&i.info==="react-transition"&&i.intercept( {
        handler:function() {
          return new Promise(function(c) {
            return n=c
          })
        },focusReset:"manual",scroll:"manual"
      })
    }

    function a() {
      n!==null&&(n(),n=null),l||setTimeout(t,20)
    }

    function t() {
      if(!l&&!navigation.transition) {
        var i=navigation.currentEntry;
        i&&i.url!=null&&navigation.navigate(i.url, {
          state:i.getState(),info:"react-transition",history:"replace"
        })
      }
    }

    if(typeof navigation=="object") {
      var l=!1,n=null;
      return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(t,100),function() {
        l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),n!==null&&(n(),n=null)
      }
    }
  }

  function ur(e) {
    this._internalRoot=e
  }

  os.prototype.render=ur.prototype.render=function(e) {
    var a=this._internalRoot;
    if(a===null)throw Error(o(409));
    var t=a.current,l=qa();
    Gh(t,l,e,a,null,null)
  },os.prototype.unmount=ur.prototype.unmount=function() {
    var e=this._internalRoot;
    if(e!==null) {
      this._internalRoot=null;
      var a=e.containerInfo;
      Gh(e.current,2,null,e,null,null),Ku(),a[Ll]=null
    }
  };
  function os(e) {
    this._internalRoot=e
  }

  os.prototype.unstable_scheduleHydration=function(e) {
    if(e) {
      var a=Br();
      e= {
        blockedOn:null,target:e,priority:a
      };
      for(var t=0;t<cl.length&&a!==0&&a<cl[t].priority;t++);
      cl.splice(t,0,e),t===0&&Kh(e)
    }
  };
  var Ih=f.version;
  if(Ih!=="19.3.1")throw Error(o(527,Ih,"19.3.1"));
  se.findDOMNode=function(e) {
    var a=e._reactInternals;
    if(a===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));
    return e=H(a),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e
  };
  var S1= {
    bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.3.1"
  };
  if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u") {
    var rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;
    if(!rs.isDisabled&&rs.supportsFiber)try {
      Hn=rs.inject(S1),Ca=rs
    } catch{}
  }

  return Mi.createRoot=function(e,a) {
    if(!S(e))throw Error(o(299));
    var t=!1,l="",n=Vf,i=Gf,c=Yf;
    return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError)),a=Lh(e,1,!1,null,null,t,l,null,n,i,c,Fh),e[Ll]=a.current,Ho(e),new ur(a)
  },Mi.hydrateRoot=function(e,a,t) {
    if(!S(e))throw Error(o(299));
    var l=!1,n="",i=Vf,c=Gf,d=Yf,m=null;
    return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(c=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError),t.formState!==void 0&&(m=t.formState)),a=Lh(e,1,!0,a,t??null,l,n,m,i,c,d,Fh),a.context=Vh(null),t=a.current,l=qa(),l=Us(l),n=kt(l),n.callback=null,Kt(t,n,l),t=l,a.current.lanes=t,wn(a,t),vt(a),e[Ll]=a.current,Ho(e),new os(a)
  },Mi.version="19.3.1",Mi
}

var sp;
function H1() {
  if(sp)return or.exports;
  sp=1;
  function s() {
    if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)
    } catch(f) {
      console.error(f)
    }
  }

  return s(),or.exports=q1(),or.exports
}

var B1=H1();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mp=(...s)=>s.filter((f,r,o)=>!!f&&f.trim()!==""&&o.indexOf(f)===r).join(" ").trim();
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L1= {
  xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=$.forwardRef(( {
  color:s="currentColor",size:f=24,strokeWidth:r=2,absoluteStrokeWidth:o,className:S="",children:p,iconNode:g,...O
},z)=>$.createElement("svg", {
  ref:z,...L1,width:f,height:f,stroke:s,strokeWidth:o?Number(r)*24/Number(f):r,className:mp("lucide",S),...O
},[...g.map(([H,M])=>$.createElement(H,M)),...Array.isArray(p)?p:[p]]));
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=(s,f)=> {
  const r=$.forwardRef(( {
    className:o,...S
  },p)=>$.createElement(V1, {
    ref:p,iconNode:f,className:mp(`lucide-${w1(s)}`,o),...S
  }));
  return r.displayName=`${s}`,r
};
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=ne("ArrowLeft",[["path", {
  d:"m12 19-7-7 7-7",key:"1l729n"
}],["path", {
  d:"M19 12H5",key:"x3x0zl"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=ne("ArrowRight",[["path", {
  d:"M5 12h14",key:"1ays0h"
}],["path", {
  d:"m12 5 7 7-7 7",key:"xquz4c"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=ne("BookOpen",[["path", {
  d:"M12 7v14",key:"1akyts"
}],["path", {
  d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=ne("Check",[["path", {
  d:"M20 6 9 17l-5-5",key:"1gmf2c"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=ne("ChevronRight",[["path", {
  d:"m9 18 6-6-6-6",key:"mthhwq"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=ne("CircleCheck",[["circle", {
  cx:"12",cy:"12",r:"10",key:"1mglay"
}],["path", {
  d:"m9 12 2 2 4-4",key:"dzmm74"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ne("CircleX",[["circle", {
  cx:"12",cy:"12",r:"10",key:"1mglay"
}],["path", {
  d:"m15 9-6 6",key:"1uzhvr"
}],["path", {
  d:"m9 9 6 6",key:"z0biqf"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=ne("Clock3",[["circle", {
  cx:"12",cy:"12",r:"10",key:"1mglay"
}],["polyline", {
  points:"12 6 12 12 16.5 12",key:"1aq6pp"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=ne("Coins",[["circle", {
  cx:"8",cy:"8",r:"6",key:"3yglwk"
}],["path", {
  d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"
}],["path", {
  d:"M7 6h1v4",key:"1obek4"
}],["path", {
  d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=ne("Copy",[["rect", {
  width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"
}],["path", {
  d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=ne("Diamond",[["path", {
  d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=ne("Download",[["path", {
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"
}],["polyline", {
  points:"7 10 12 15 17 10",key:"2ggqvy"
}],["line", {
  x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=ne("Eye",[["path", {
  d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"
}],["circle", {
  cx:"12",cy:"12",r:"3",key:"1v7zrd"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=ne("Flag",[["path", {
  d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"
}],["line", {
  x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=ne("Flame",[["path", {
  d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=ne("Hexagon",[["path", {
  d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=ne("History",[["path", {
  d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"
}],["path", {
  d:"M3 3v5h5",key:"1xhq8a"
}],["path", {
  d:"M12 7v5l4 2",key:"1fdv2h"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=ne("ImagePlus",[["path", {
  d:"M16 5h6",key:"1vod17"
}],["path", {
  d:"M19 2v6",key:"4bpg5p"
}],["path", {
  d:"M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5",key:"1ue2ih"
}],["path", {
  d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"
}],["circle", {
  cx:"9",cy:"9",r:"2",key:"af1f0g"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=ne("Image",[["rect", {
  width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"
}],["circle", {
  cx:"9",cy:"9",r:"2",key:"af1f0g"
}],["path", {
  d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=ne("Info",[["circle", {
  cx:"12",cy:"12",r:"10",key:"1mglay"
}],["path", {
  d:"M12 16v-4",key:"1dtifu"
}],["path", {
  d:"M12 8h.01",key:"e9boi3"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=ne("Keyboard",[["path", {
  d:"M10 8h.01",key:"1r9ogq"
}],["path", {
  d:"M12 12h.01",key:"1mp3jc"
}],["path", {
  d:"M14 8h.01",key:"1primd"
}],["path", {
  d:"M16 12h.01",key:"1l6xoz"
}],["path", {
  d:"M18 8h.01",key:"emo2bl"
}],["path", {
  d:"M6 8h.01",key:"x9i8wu"
}],["path", {
  d:"M7 16h10",key:"wp8him"
}],["path", {
  d:"M8 12h.01",key:"czm47f"
}],["rect", {
  width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=ne("LifeBuoy",[["circle", {
  cx:"12",cy:"12",r:"10",key:"1mglay"
}],["path", {
  d:"m4.93 4.93 4.24 4.24",key:"1ymg45"
}],["path", {
  d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"
}],["path", {
  d:"m14.83 14.83 4.24 4.24",key:"q42g0n"
}],["path", {
  d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"
}],["circle", {
  cx:"12",cy:"12",r:"4",key:"4exip2"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ne("Lightbulb",[["path", {
  d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"
}],["path", {
  d:"M9 18h6",key:"x1upvd"
}],["path", {
  d:"M10 22h4",key:"ceow96"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=ne("LockKeyhole",[["circle", {
  cx:"12",cy:"16",r:"1",key:"1au0dj"
}],["rect", {
  x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"
}],["path", {
  d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=ne("Maximize",[["path", {
  d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"
}],["path", {
  d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"
}],["path", {
  d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"
}],["path", {
  d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=ne("Medal",[["path", {
  d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"
}],["path", {
  d:"M11 12 5.12 2.2",key:"qhuxz6"
}],["path", {
  d:"m13 12 5.88-9.8",key:"hbye0f"
}],["path", {
  d:"M8 7h8",key:"i86dvs"
}],["circle", {
  cx:"12",cy:"17",r:"5",key:"qbz8iq"
}],["path", {
  d:"M12 18v-2h-.5",key:"fawc4q"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=ne("Minimize",[["path", {
  d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"
}],["path", {
  d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"
}],["path", {
  d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"
}],["path", {
  d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=ne("Network",[["rect", {
  x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"
}],["rect", {
  x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"
}],["rect", {
  x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"
}],["path", {
  d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"
}],["path", {
  d:"M12 12V8",key:"2874zd"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=ne("Orbit",[["circle", {
  cx:"12",cy:"12",r:"3",key:"1v7zrd"
}],["circle", {
  cx:"19",cy:"5",r:"2",key:"mhkx31"
}],["circle", {
  cx:"5",cy:"19",r:"2",key:"v8kfzx"
}],["path", {
  d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"
}],["path", {
  d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=ne("Pause",[["rect", {
  x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"
}],["rect", {
  x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=ne("Pencil",[["path", {
  d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"
}],["path", {
  d:"m15 5 4 4",key:"1mk7zo"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=ne("Play",[["polygon", {
  points:"6 3 20 12 6 21 6 3",key:"1oa8hb"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=ne("Plus",[["path", {
  d:"M5 12h14",key:"1ays0h"
}],["path", {
  d:"M12 5v14",key:"s699le"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=ne("RotateCcw",[["path", {
  d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"
}],["path", {
  d:"M3 3v5h5",key:"1xhq8a"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=ne("Search",[["circle", {
  cx:"11",cy:"11",r:"8",key:"4ej97u"
}],["path", {
  d:"m21 21-4.3-4.3",key:"1qie3q"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=ne("Shield",[["path", {
  d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ne("SlidersHorizontal",[["line", {
  x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"
}],["line", {
  x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"
}],["line", {
  x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"
}],["line", {
  x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"
}],["line", {
  x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"
}],["line", {
  x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"
}],["line", {
  x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"
}],["line", {
  x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"
}],["line", {
  x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=ne("Star",[["path", {
  d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ug=ne("Timer",[["line", {
  x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"
}],["line", {
  x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"
}],["circle", {
  cx:"12",cy:"14",r:"8",key:"1e1u0o"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=ne("Trash2",[["path", {
  d:"M3 6h18",key:"d0wm0j"
}],["path", {
  d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"
}],["path", {
  d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"
}],["line", {
  x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"
}],["line", {
  x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=ne("TriangleAlert",[["path", {
  d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"
}],["path", {
  d:"M12 9v4",key:"juzpu7"
}],["path", {
  d:"M12 17h.01",key:"p32p05"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sg=ne("Triangle",[["path", {
  d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=ne("Trophy",[["path", {
  d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"
}],["path", {
  d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"
}],["path", {
  d:"M4 22h16",key:"57wxv0"
}],["path", {
  d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"
}],["path", {
  d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"
}],["path", {
  d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=ne("Upload",[["path", {
  d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"
}],["polyline", {
  points:"17 8 12 3 7 8",key:"t8dd8p"
}],["line", {
  x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cg=ne("UserRound",[["circle", {
  cx:"12",cy:"8",r:"5",key:"1hypcn"
}],["path", {
  d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=ne("UsersRound",[["path", {
  d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"
}],["circle", {
  cx:"10",cy:"8",r:"5",key:"o932ke"
}],["path", {
  d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ne("Volume2",[["path", {
  d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"
}],["path", {
  d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"
}],["path", {
  d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=ne("VolumeX",[["path", {
  d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"
}],["line", {
  x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"
}],["line", {
  x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=ne("X",[["path", {
  d:"M18 6 6 18",key:"1bl5f8"
}],["path", {
  d:"m6 6 12 12",key:"d8bk6v"
}]]);
/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=ne("Zap",[["path", {
  d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"
}]]),Ia=["Estructura","Tiempos","Costos","Recursos"],Es=["Fácil","Media","Difícil"],hs=["mitad","salon","aliado","pista"],rl=s=>( {
  remaining:s,deadline:null,running:!1
}),ga=(s,f=Date.now())=>Math.max(0,s.running&&s.deadline!==null?Math.min(s.remaining,s.deadline-f):s.remaining),it=(s,f=Date.now())=>s.running||s.remaining<=0?s: {
  ...s,running:!0,deadline:f+s.remaining
},Ba=(s,f=Date.now())=>( {
  remaining:ga(s,f),running:!1,deadline:null
}),ps=s=> {
  const f=Math.ceil(Math.max(0,s)/1e3);
  return`${Math.floor(f/60).toString().padStart(2,"0")}:${(f%60).toString().padStart(2,"0")}`
};
let rp=0;
function Ns(s=globalThis.crypto) {
  return typeof(s==null?void 0:s.randomUUID)=="function"?s.randomUUID():(rp++,`local-${Date.now().toString(36)}-${rp.toString(36)}-${Math.random().toString(36).slice(2,12)}`)
}

const Ri=100,jp=s=>( {
  ...s,points:Ri
}),Ui=s=>( {
  ...s,values: {
    Fácil:100,Media:100,Difícil:100
  },questions:s.questions.map(jp)
});
function bp(s,f=Date.now()) {
  if(s.scoringRule==="fixed100")return s;
  const r=structuredClone( {
    scores:s.scores,results:s.results,values:s.config.values,questionPoints:s.questions.map(g=>( {
      id:g.id,points:g.points
    }))
  }),o= {
    ...s.scores
  },S=s.results.map(g=> {
    const O=g.correct&&!g.voided?Ri:0;return o[g.groupId]+=O-g.points, {
      ...g,points:O
    }
  }),p=s.results.some((g,O)=>g.points!==S[O].points);
  return {
    ...s,scoringRule:"fixed100",scoringBeforeUpdate:r,config:Ui(s.config),questions:s.questions.map(jp),scores:o,results:S,winners:p?null:s.winners,tieContenders:p?void 0:s.tieContenders,history:[...s.history, {
      id:Ns(),time:new Date(f).toISOString(),type:"regla_puntuacion",detail:"Puntuación actualizada: cada acierto suma 100 exclusivamente al grupo que respondió, también en rebote. Se conservaron los ajustes manuales y una copia de la puntuación anterior."
    }]
  }
}

const Bl=s=>s.questions[s.index],wa=s=>s.attempts[s.attempts.length-1],ds=(s,f=Date.now())=>["activa","seleccionada","rebote"].includes(s.phase)&&!s.consultation&&ga(s.clock,f)>0&&(!s.config.questionTimer||ga(s.questionClock,f)>0),dg=(s,f,r,o,S)=> {
  var g;
  const p=Bl(s);
  return {
    id:Ns(),time:new Date(o).toISOString(),type:f,detail:r,questionId:p==null?void 0:p.id,team:p==null?void 0:p.team,theme:p==null?void 0:p.theme,groupId:S||((g=wa(s))==null?void 0:g.groupId)
  }
},Fe=(s,f,r,o,S)=>( {
  ...s,history:[...s.history,dg(s,f,r,o,S)]
}),Sp=s=> {
  const f=[...s];
  for(let r=f.length-1;r>0;r--) {
    const o=Math.floor(Math.random()*(r+1));
    [f[r],f[o]]=[f[o],f[r]]
  }

  return f
};
function ql(s) {
  s=Ui(s);
  let f=Ia.flatMap(S=> {
    const p=s.questions.filter(g=>g.theme===S&&!g.tiebreak);return s.random?Sp(p):p
  });
  const r=S=> {
    const p=[0,0,0,0,0];
    return S.forEach((g,O)=>p[O%5]+=g.points),p
  },o=S=> {
    const p=[0,0,0,0,0];
    S.forEach((O,z)=>p[z%5]+=O.difficulty==="Fácil"?1:O.difficulty==="Media"?2:3);
    const g=p.reduce((O,z)=>O+z,0)/5;
    return p.reduce((O,z)=>O+(z-g)**2,0)
  };
  for(let S=0;S<30;S++) {
    let p=!1;
    for(let g=0;g<f.length;g++)for(let O=g+1;O<f.length;O++) {
      if(f[g].theme!==f[O].theme||g%5===O%5)continue;
      const z=o(f);
      [f[g],f[O]]=[f[O],f[g]],o(f)<z?p=!0:[f[g],f[O]]=[f[O],f[g]]
    }

    if(!p)break
  }

  return {
    questions:structuredClone(f),assignments:f.map((S,p)=>s.groups[p%5].id),totals:r(f)
  }
}

function fg(s,f=Date.now()) {
  s=Ui(s);
  const r=ql(s),o=Object.fromEntries(s.groups.map(g=>[g.id,0])),S=Object.fromEntries(s.groups.map(g=>[g.id,Object.fromEntries(hs.map(O=>[O,s.helperCount]))])),p= {
    version:1,config:structuredClone(s),questions:r.questions,index:0,assignments:r.assignments,phase:"preparada",previousPhase:"preparada",clock:it(rl(s.minutes*6e4),f),questionClock:rl(s.seconds*1e3),attempts:[ {
      groupId:r.assignments[0],selection:null,locked:!1,timedOut:!1,rebound:!1
    }],hidden:[],consultation:null,inventories:S,scores:o,results:[],history:[],startedAt:new Date(f).toISOString(),resolved:!1,resumeQuestion:!1,winners:null,tieUsed:[],usedHelpers:[]
  };
  return Fe( {
    ...p,scoringRule:"fixed100"
  },"inicio","Actividad iniciada. Cronómetro general en marcha. Cada acierto suma 100 al grupo que respondió.",f)
}

function vs(s,f=Date.now()) {
  if(["premiacion","pausa"].includes(s.phase))return s;
  if(s.phase!=="tiempo"&&ga(s.clock,f)<=0) {
    const o= {
      ...s,previousPhase:s.phase,phase:"tiempo",clock:Ba(s.clock,f),resumeQuestion:s.questionClock.running,questionClock:Ba(s.questionClock,f),consultation:s.consultation? {
        ...s.consultation,clock:Ba(s.consultation.clock,f)
      }:null
    };
    return Fe(o,"tiempo","Tiempo del taller finalizado.",f)
  }

  const r=wa(s);
  if(s.config.questionTimer&&["activa","seleccionada","rebote"].includes(s.phase)&&!r.locked&&ga(s.questionClock,f)<=0) {
    const o=s.attempts.map((S,p)=>p===s.attempts.length-1? {
      ...S,selection:null,locked:!0,timedOut:!0
    }:S);
    return Fe( {
      ...s,attempts:o,phase:"confirmada",questionClock:Ba(s.questionClock,f),consultation:null
    },"agotado","Tiempo de pregunta agotado. Respuesta bloqueada sin selección.",f)
  }

  return s
}

function hr(s,f) {
  var O;
  const r=f.now??Date.now();
  let o=vs(s,r);
  if(f.type==="TICK")return o;
  const S=Bl(o),p=wa(o),g=z=>o.attempts.map((H,M)=>M===o.attempts.length-1?z:H);
  switch(f.type) {
    case"AUDIO":return {
      ...o,config: {
        ...o.config,...f.settings
      }
    };
    case"BEGIN":return o.phase!=="preparada"?o:Fe( {
      ...o,phase:"activa",questionClock:o.config.questionTimer?it(o.questionClock,r):o.questionClock
    },"pregunta","Pregunta iniciada.",r);
    case"SELECT":return!ds(o,r)||p.locked||o.hidden.includes(f.id)||!S.options.some(z=>z.id===f.id)?o: {
      ...o,phase:p.rebound?"rebote":"seleccionada",attempts:g( {
        ...p,selection:f.id
      })
    };
    case"CONFIRM":return!ds(o,r)||p.locked||!p.selection?o:Fe( {
      ...o,phase:"confirmada",attempts:g( {
        ...p,locked:!0
      }),questionClock:Ba(o.questionClock,r)
    },"confirmacion",`Respuesta definitiva: ${(O=S.options.find(z=>z.id===p.selection))==null?void 0:O.text}.`,r);
    case"REVEAL": {
      if(o.phase!=="confirmada"||o.resolved)return o;
      const z=o.attempts.map(b=>( {
        questionId:S.id,team:S.team,theme:S.theme,groupId:b.groupId,selection:b.selection,correct:!b.timedOut&&b.selection===S.correctId,points:!b.timedOut&&b.selection===S.correctId?Ri:0,rebound:b.rebound,time:new Date(r).toISOString()
      })),H= {
        ...o.scores
      };
      z.forEach(b=>H[b.groupId]+=b.points);
      let M= {
        ...o,phase:"revelada",resolved:!0,questionClock:Ba(o.questionClock,r),results:[...o.results,...z],scores:H
      };
      return z.forEach(b=> {
        M=Fe(M,b.rebound?"resultado_rebote":"resultado",`${b.correct?"Acierto":"Error"} · ${b.points} puntos · Opción ${b.selection??"sin respuesta"} · Autor: equipo ${S.team} · ${S.theme}`,r,b.groupId)
      }),M
    }

    case"NEXT":return o.phase!=="revelada"||!o.resolved||o.index>=o.questions.length-1?o:Fe( {
      ...o,index:o.index+1,phase:"preparada",resolved:!1,hidden:[],consultation:null,questionClock:rl(o.config.seconds*1e3),attempts:[ {
        groupId:o.assignments[o.index+1],selection:null,locked:!1,timedOut:!1,rebound:!1
      }]
    },"avance","Siguiente pregunta preparada.",r,o.assignments[o.index+1]);
    case"GROUP":return o.config.mode!=="manual"||o.phase!=="preparada"||!o.config.groups.some(z=>z.id===f.id)?o:Fe( {
      ...o,attempts:g( {
        ...p,groupId:f.id
      })
    },"turno","Grupo seleccionado manualmente.",r,f.id);
    case"BOUNCE":return!o.config.rebound||o.phase!=="confirmada"||o.attempts.length!==1||o.resolved||p.groupId===f.id||!o.config.groups.some(z=>z.id===f.id)||!p.timedOut&&p.selection===S.correctId?o:Fe( {
      ...o,phase:"rebote",hidden:[],questionClock:o.config.questionTimer?it(rl(o.config.seconds*1e3),r):rl(o.config.seconds*1e3),attempts:[...o.attempts, {
        groupId:f.id,selection:null,locked:!1,timedOut:!1,rebound:!0
      }]
    },"rebote","Rebote concedido antes de revelar. Acierto: 100 puntos para el grupo que responde.",r,f.id);
    case"HELP": {
      const z=`${o.index}:${p.groupId}:${f.helper}`;
      if(!ds(o,r)||p.locked||o.usedHelpers.includes(z)||o.inventories[p.groupId][f.helper]<=0||f.helper==="pista"&&!S.hint.trim())return o;
      const H= {
        ...o.inventories,[p.groupId]: {
          ...o.inventories[p.groupId],[f.helper]:o.inventories[p.groupId][f.helper]-1
        }
      };
      if(f.helper==="mitad") {
        if(o.hidden.length)return o;
        const b=Sp(S.options.filter(A=>A.id!==S.correctId)).slice(0,2).map(A=>A.id);
        return Fe( {
          ...o,inventories:H,usedHelpers:[...o.usedHelpers,z],hidden:b,attempts:g( {
            ...p,selection:b.includes(p.selection||"")?null:p.selection
          })
        },"comodin","50:50 utilizado. Dos alternativas incorrectas eliminadas.",r)
      }

      const M=o.config.pauseConsult&&o.questionClock.running;
      return Fe( {
        ...o,inventories:H,usedHelpers:[...o.usedHelpers,z],questionClock:M?Ba(o.questionClock,r):o.questionClock,consultation: {
          kind:f.helper,votes:[0,0,0,0],ally:"",clock:f.helper==="aliado"?it(rl(3e4),r):rl(3e4),resumeQuestion:M
        }
      },"comodin",`${{salon:"Consulta al salón",aliado:"Consulta a un aliado",pista:"Pista del ejercicio"}[f.helper]} utilizado.`,r)
    }

    case"VOTES":return!o.consultation||o.consultation.kind!=="salon"||o.phase==="pausa"||o.phase==="tiempo"?o: {
      ...o,consultation: {
        ...o.consultation,votes:S.options.map((z,H)=>o.hidden.includes(z.id)?0:Math.max(0,Math.min(1e4,Math.floor(f.votes[H]||0))))
      }
    };
    case"ALLY":return!o.consultation||o.consultation.kind!=="aliado"||o.phase==="pausa"||o.phase==="tiempo"?o: {
      ...o,consultation: {
        ...o.consultation,ally:f.name
      }
    };
    case"CLOSE_CONSULT": {
      if(!o.consultation)return o;
      const z=o.consultation.kind==="salon"?`Votos reales A/B/C/D: ${o.consultation.votes.join("/")}.`:o.consultation.kind==="aliado"?`Aliado: ${o.consultation.ally||"sin nombre registrado"}.`:"Pista consultada.";
      return Fe( {
        ...o,consultation:null,questionClock:o.consultation.resumeQuestion&&o.phase!=="pausa"&&o.phase!=="tiempo"?it(o.questionClock,r):o.questionClock,resumeQuestion:["pausa","tiempo"].includes(o.phase)&&o.consultation.resumeQuestion||o.resumeQuestion
      },"consulta",z,r)
    }

    case"PAUSE":return o.phase==="premiacion"||o.phase==="tiempo"?o:o.phase==="pausa"?Fe( {
      ...o,phase:o.previousPhase,clock:it(o.clock,r),questionClock:o.resumeQuestion&&!o.consultation?it(o.questionClock,r):o.questionClock,consultation:o.consultation? {
        ...o.consultation,clock:o.consultation.kind==="aliado"?it(o.consultation.clock,r):o.consultation.clock
      }:null
    },"reanudar","Actividad reanudada.",r):Fe( {
      ...o,previousPhase:o.phase,phase:"pausa",resumeQuestion:o.questionClock.running,clock:Ba(o.clock,r),questionClock:Ba(o.questionClock,r),consultation:o.consultation? {
        ...o.consultation,clock:Ba(o.consultation.clock,r)
      }:null
    },"pausa","Actividad y temporizadores pausados.",r);
    case"EXTRA": {
      if(!Number.isFinite(f.minutes)||f.minutes<=0||f.minutes>120||o.phase==="premiacion")return o;
      const z=rl(ga(o.clock,r)+f.minutes*6e4),H=o.phase==="tiempo";
      return Fe( {
        ...o,phase:H?o.previousPhase:o.phase,clock:o.phase==="pausa"?z:it(z,r),questionClock:H&&o.resumeQuestion&&!o.consultation?it(o.questionClock,r):o.questionClock,consultation:H&&o.consultation? {
          ...o.consultation,clock:o.consultation.kind==="aliado"?it(o.consultation.clock,r):o.consultation.clock
        }:o.consultation
      },"ampliacion",`Ampliación registrada: +${f.minutes} minutos.`,r)
    }

    case"CORRECT":return!f.reason.trim()||!Number.isFinite(f.points)||Math.abs(f.points)>1e6||!Object.hasOwn(o.scores,f.groupId)?o:Fe( {
      ...o,scores: {
        ...o.scores,[f.groupId]:o.scores[f.groupId]+f.points
      }
    },"correccion",`Ajuste ${f.points>=0?"+":""}${f.points} puntos. Motivo: ${f.reason.trim()}`,r,f.groupId);
    case"VOID":return!f.reason.trim()||o.resolved||["premiacion","tiempo","pausa"].includes(o.phase)?o:Fe( {
      ...o,phase:"revelada",resolved:!0,questionClock:Ba(o.questionClock,r),consultation:null,results:[...o.results, {
        questionId:S.id,team:S.team,theme:S.theme,groupId:o.attempts[0].groupId,selection:null,correct:!1,points:0,rebound:!1,time:new Date(r).toISOString(),voided:!0
      }]
    },"anulacion",`Pregunta anulada: ${f.reason}`,r);
    case"FINISH":return o.phase==="premiacion"?o:Fe( {
      ...o,phase:"premiacion",clock:Ba(o.clock,r),questionClock:Ba(o.questionClock,r),consultation:null
    },"final","Actividad finalizada por el presentador.",r);
    case"SHARED":return o.phase!=="premiacion"?o:Fe( {
      ...o,winners:ys(o).map(z=>z.id)
    },"ganadores","Ganadores compartidos declarados.",r);
    case"TIE": {
      if(o.phase!=="premiacion"||o.winners)return o;
      const z=o.config.questions.find(b=>b.id===f.questionId&&b.tiebreak),H=ys(o);
      if(!z||o.tieUsed.includes(z.id)||H.length<2||H.some(b=>!z.options.some(A=>A.id===f.answers[b.id])))return o;
      const M=H.filter(b=>f.answers[b.id]===z.correctId);
      return Fe( {
        ...o,winners:M.length===1?[M[0].id]:null,tieContenders:(M.length?M:H).map(b=>b.id),tieUsed:[...o.tieUsed,z.id]
      },"desempate",`Pregunta ${z.id}: ${H.map(b=>`${b.name}=${f.answers[b.id]} (${f.answers[b.id]===z.correctId?"acierto":"error"})`).join("; ")}. ${M.length===1?"Ganador definido.":"El empate continúa."}`,r)
    }
  }
}

const gs=(s,f)=>s.winners?s.winners.includes(f)?0:2:s.tieContenders?s.tieContenders.includes(f)?1:2:0,zs=s=>[...s.config.groups].sort((f,r)=>s.scores[r.id]-s.scores[f.id]||gs(s,f.id)-gs(s,r.id)),On=(s,f)=>1+s.config.groups.filter(r=>s.scores[r.id]>s.scores[f]||s.scores[r.id]===s.scores[f]&&gs(s,r.id)<gs(s,f)).length,ys=s=>zs(s).filter(f=>s.tieContenders?s.tieContenders.includes(f.id):s.scores[f.id]===Math.max(...Object.values(s.scores))),zr=(s,f)=> {
  const r=s.results.filter(S=>S.groupId===f&&!S.rebound&&!S.voided),o=s.results.filter(S=>S.groupId===f&&S.rebound);
  return {
    answered:r.length,hits:r.filter(S=>S.correct).length,errors:r.filter(S=>!S.correct).length,rebounds:o.length,reboundsCorrect:o.filter(S=>S.correct).length
  }
};
function Ep(s) {
  const f=s.config.groups.map(S=>zr(s,S.id).answered),r=s.config.groups.map(S=>s.results.filter(p=>p.groupId===S.id&&!p.rebound&&!p.voided).length*Ri),o=ql(s.config);
  return {
    unequal:new Set(f).size>1||new Set(r).size>1,counts:f,maxes:r,scheduled:o
  }
}

const mg=[[6,"Estructura","¿Qué representa una relación de precedencia en una red de actividades?",["El orden lógico entre dos actividades","El costo de una actividad","La cantidad de trabajadores","La fecha de pago del proyecto"],"Una precedencia establece una restricción lógica: una actividad depende de otra, según el tipo de relación definido.","Piensa en qué debe ocurrir antes de iniciar otra actividad."],[6,"Estructura","En una red actividad-en-nodo, ¿qué representa cada nodo?",["Una actividad del proyecto","Únicamente un costo","Un recurso compartido","Una unidad monetaria"],"En una red actividad-en-nodo (AON), los nodos representan actividades y los arcos representan relaciones de precedencia.","El nombre del modelo indica qué se coloca dentro del nodo."],[6,"Estructura","¿Qué condición impide una programación válida en una red de precedencias clásica?",["La existencia de un ciclo dirigido","Tener actividades paralelas","Tener una actividad inicial","Tener diferentes duraciones"],"Un ciclo dirigido genera dependencias circulares. La red clásica de precedencias debe ser acíclica para permitir su programación.","Considera si una actividad podría terminar dependiendo de sí misma."],[6,"Estructura","¿Qué debe verificarse antes de calcular tiempos en una red de proyecto?",["Que las precedencias sean coherentes y completas","Que todas las actividades cuesten igual","Que solo exista una ruta","Que cada actividad use una persona"],"La estructura lógica debe validarse antes del cálculo temporal. Omitir dependencias o introducir ciclos invalida el análisis.","Primero valida la lógica del proyecto."],[7,"Tiempos","¿Qué caracteriza a una ruta crítica en el CPM básico?",["Determina la duración mínima del proyecto","Contiene siempre más actividades","Tiene el costo directo más alto","Usa todos los recursos disponibles"],"Con duraciones y precedencias dadas, sin restricciones adicionales de recursos, la ruta de mayor duración determina la duración mínima del proyecto.","Busca el camino que determina cuándo puede terminar el proyecto."],[7,"Tiempos","Si una actividad puede comenzar en el día 3 y dura 5 días, ¿cuál es su fin temprano?",["Día 8","Día 2","Día 15","Día 5"],"Ejemplo independiente de demostración, con tiempo continuo: fin temprano = inicio temprano + duración = 3 + 5 = 8.","Suma la duración al inicio temprano."],[7,"Tiempos","¿Qué indica una holgura total de cero en el CPM básico?",["Que la actividad es crítica","Que la actividad no tiene duración","Que no tiene predecesoras","Que se puede retrasar sin límite"],"La holgura total nula identifica una actividad crítica en el CPM básico. Un retraso sin compensación afecta la terminación del proyecto.","Compara el inicio tardío con el inicio temprano."],[7,"Tiempos","En el recorrido hacia adelante, ¿cómo se obtiene el inicio temprano con varias predecesoras fin-inicio sin desfase?",["Con el máximo de sus fines tempranos","Con el mínimo de sus inicios","Con el promedio de sus duraciones","Sumando todas sus holguras"],"La actividad debe esperar a que concluyan todas sus predecesoras. Por ello, su inicio temprano es el máximo de los fines tempranos de estas.","La actividad debe esperar a la última predecesora en terminar."],[8,"Costos","¿Qué es un costo directo de una actividad?",["Un costo atribuible a su ejecución","Todo costo administrativo general","Una holgura de tiempo","La duración de la ruta crítica"],"Los costos directos pueden atribuirse a una actividad específica, por ejemplo materiales o mano de obra directamente vinculada con su ejecución.","Piensa en un recurso utilizado específicamente en esa actividad."],[8,"Costos","Una actividad usa 4 horas a 25 unidades por hora. ¿Cuál es su costo en este ejemplo?",["100 unidades","29 unidades","6,25 unidades","400 unidades"],"Ejemplo independiente de demostración: costo = horas × tarifa = 4 × 25 = 100 unidades ficticias. No corresponde al ejercicio real del taller.","Multiplica las horas por la tarifa."],[8,"Costos","¿Qué busca el análisis de compresión tiempo-costo?",["Evaluar el costo de reducir la duración","Eliminar todas las precedencias","Aumentar siempre la holgura","Asignar el mismo costo a cada tarea"],"La compresión evalúa reducciones de duración y sus costos incrementales, atendiendo a las rutas críticas y a los límites de cada actividad.","Acortar una actividad puede requerir más recursos o un método distinto."],[8,"Costos","¿Cómo se calcula la pendiente de costo de compresión en el modelo lineal?",["(Costo intensivo − costo normal) / (Tiempo normal − tiempo intensivo)","Costo normal / costo intensivo","Tiempo normal × costo normal","Holgura / número de recursos"],"Pendiente = (costo intensivo − costo normal) / (tiempo normal − tiempo intensivo), con denominador positivo. Expresa costo incremental por unidad de tiempo reducida.","Relaciona el incremento del costo con la reducción del tiempo."],[9,"Recursos","¿Qué representa un histograma de recursos?",["La demanda de recursos a lo largo del tiempo","Solo las relaciones de precedencia","La probabilidad de cada respuesta","La lista de costos indirectos"],"El histograma muestra la cantidad de recurso requerida en cada intervalo, permitiendo identificar picos y posibles sobreasignaciones.","Sus ejes relacionan cantidad de recurso y tiempo."],[9,"Recursos","¿Cuándo existe sobreasignación de un recurso?",["Cuando la demanda supera su disponibilidad","Cuando la demanda es cero","Cuando toda tarea es crítica","Cuando dos tareas tienen igual costo"],"La sobreasignación ocurre cuando la demanda simultánea excede la capacidad disponible del recurso.","Compara lo requerido con lo disponible en un mismo intervalo."],[9,"Recursos","¿Qué permite desplazar una actividad no crítica sin retrasar el proyecto, bajo supuestos CPM?",["Su holgura disponible","Su identificador","Su costo total","El número de nodos de la red"],"La holgura permite desplazar actividades dentro de ciertos límites temporales. Deben revisarse las dependencias y la disponibilidad de recursos.","Busca el margen temporal de la actividad."],[9,"Recursos","¿Por qué una restricción de recursos puede modificar la fecha final del CPM?",["Porque puede impedir ejecutar actividades simultáneamente","Porque elimina la duración de las tareas","Porque vuelve innecesarias las precedencias","Porque siempre reduce la ruta crítica"],"El CPM básico no limita la disponibilidad de recursos. Al introducir límites, algunas actividades deben reprogramarse, lo que puede ampliar el plazo.","Dos tareas pueden ser lógicamente paralelas, pero necesitar el mismo recurso escaso."],[10,"Recursos","¿Cuál es un objetivo de la nivelación de recursos?",["Resolver conflictos de disponibilidad","Eliminar todos los costos","Convertir toda actividad en hito","Ignorar las dependencias"],"La nivelación ajusta la programación ante limitaciones de recursos. Puede cambiar la duración total y las actividades críticas.","Piensa en qué ocurre cuando hay más trabajo que capacidad."],[10,"Recursos","Si dos tareas simultáneas requieren 3 y 4 personas, ¿cuál es su demanda conjunta?",["7 personas","1 persona","12 personas","4 personas"],"Ejemplo independiente de demostración: demanda conjunta = 3 + 4 = 7 personas, si ambos requerimientos se mantienen en el mismo intervalo.","Suma las demandas que coinciden en el tiempo."],[10,"Recursos","¿Qué diferencia al suavizado de recursos de una nivelación que puede extender el plazo?",["Busca suavizar la demanda respetando la fecha final","No considera las holguras","Siempre elimina la ruta crítica","Exige aumentar todos los costos"],"El suavizado usa márgenes de programación para reducir variaciones de demanda sin modificar la fecha final fijada, cuando es posible.","Se utiliza el margen disponible, no un plazo ilimitado."],[10,"Recursos","Antes de desplazar una actividad para resolver un conflicto, ¿qué se debe revisar?",["Precedencias, holguras y disponibilidad","Solo su nombre","Únicamente el color del nodo","Solo el costo indirecto"],"La decisión debe respetar la lógica, los márgenes temporales y la capacidad de los recursos. Después es necesario recalcular la programación afectada.","Una decisión de recursos también tiene consecuencias temporales."]],hg=mg.map((s,f)=>( {
  id:`demo-${f+1}`,team:s[0],theme:s[1],difficulty:["Fácil","Media","Media","Difícil"][f%4],points:100,text:s[2],options:s[3].map((r,o)=>( {
    id:`${String.fromCharCode(97+o)}`,text:r
  })),correctId:"a",explanation:s[4],hint:s[5],reference:"Demostración conceptual independiente. Reemplazar por el ejercicio del taller.",extra:"",image:"",demo:!0
})),pg=()=>hg.map((s,f)=>( {
  ...s,options:[...s.options.slice(f%4),...s.options.slice(0,f%4)]
})),dp=()=>( {
  groups:["#9677fb","#3fc5dd","#f5ba60","#ed83b5","#62d6ab"].map((s,f)=>( {
    id:`g${f+1}`,name:`Grupo ${f+1}`,color:s,avatar:["orbita","rayo","diamante","estrella","escudo"][f]
  })),minutes:60,seconds:90,questionTimer:!0,sound:!0,music:!1,effectVolume:.4,musicVolume:.15,random:!1,helperCount:1,rebound:!1,mode:"rotativo",pauseConsult:!0,values: {
    Fácil:100,Media:100,Difícil:100
  },questions:pg(),exercise: {
    description:"",activities:[],image:""
  }
}),fp=()=>( {
  id:Ns(),team:6,theme:"Estructura",difficulty:"Fácil",points:100,text:"",options:["a","b","c","d"].map(s=>( {
    id:s,text:""
  })),correctId:"a",explanation:"",hint:"",reference:"",extra:"",image:"",demo:!1
});
function xs(s) {
  const f=[];
  if(!Array.isArray(s)||s.length===0)return["El banco debe ser una lista con al menos una pregunta."];
  if(s.length>500)return["Máximo 500 preguntas por banco."];
  const r=new Set;
  return s.forEach((o,S)=> {
    const p=`Pregunta ${S+1}`;if(!o||typeof o!="object") {
      f.push(`${p}: formato no válido.`);return
    }

    (typeof o.id!="string"||!o.id.trim()||r.has(o.id))&&f.push(`${p}: ID vacío o duplicado.`),r.add(o.id),[6,7,8,9,10].includes(o.team)||f.push(`${p}: equipo organizador no válido (6 a 10).`),Ia.includes(o.theme)||f.push(`${p}: tema no válido.`);const g= {
      6:"Estructura",7:"Tiempos",8:"Costos",9:"Recursos",10:"Recursos"
    }

    [o.team];g&&o.theme!==g&&f.push(`${p}: el tema no corresponde al equipo organizador.`),Es.includes(o.difficulty)||f.push(`${p}: dificultad no válida.`),(typeof o.points!="number"||!Number.isFinite(o.points)||o.points<0||o.points>1e6)&&f.push(`${p}: puntaje numérico entre 0 y 1 000 000 requerido.`);for(const O of["text","explanation","reference"])(typeof o[O]!="string"||!o[O].trim())&&f.push(`${p}: falta ${{text:"enunciado",explanation:"explicación",reference:"referencia al ejercicio"}[O]}.`);if(!Array.isArray(o.options)||o.options.length!==4)f.push(`${p}: se requieren exactamente cuatro opciones.`);else {
      const O=o.options.map(z=>z==null?void 0:z.id);(new Set(O).size!==4||o.options.some(z=>!z||typeof z.id!="string"||!z.id.trim()||typeof z.text!="string"||!z.text.trim()))&&f.push(`${p}: opciones incompletas o IDs de opción duplicados.`),O.includes(o.correctId)||f.push(`${p}: respuesta correcta no válida.`)
    }

    typeof o.demo!="boolean"&&f.push(`${p}: el indicador demo debe ser verdadero o falso.`),o.image&&(typeof o.image!="string"||!/^data:image\/(png|jpeg|webp);base64,/.test(o.image))&&f.push(`${p}: solo se admiten imágenes locales PNG, JPEG o WebP.`);for(const O of["hint","extra","image"])o[O]!==void 0&&typeof o[O]!="string"&&f.push(`${p}: ${O} debe ser texto.`);o.tiebreak!==void 0&&typeof o.tiebreak!="boolean"&&f.push(`${p}: desempate debe ser verdadero o falso.`)
  }),f
}

function vg(s) {
  return s.map(f=>( {
    id:f.id,team:f.team,theme:f.theme,difficulty:f.difficulty,points:100,text:f.text,options:f.options.map(r=>( {
      id:r.id,text:r.text
    })),correctId:f.correctId,explanation:f.explanation,hint:f.hint||"",reference:f.reference,extra:f.extra||"",image:f.image||"",demo:f.demo,tiebreak:!!f.tiebreak
  }))
}

function js(s) {
  if(!s||typeof s!="object"||!Array.isArray(s.groups)||!s.values||!s.exercise||!Array.isArray(s.exercise.activities))return["La configuración está incompleta o no tiene el formato esperado."];
  const f=xs(s.questions);
  (s.groups.length!==5||s.groups.some(r=>!r||typeof r.name!="string"||!r.name.trim()))&&f.push("Configura los nombres de los cinco grupos."),new Set(s.groups.map(r=>String((r==null?void 0:r.name)||"").trim().toLowerCase())).size!==5&&f.push("Los nombres de los grupos deben ser distintos."),(new Set(s.groups.map(r=>r==null?void 0:r.id)).size!==5||s.groups.some(r=>!r||typeof r.id!="string"||!/^g[1-5]$/.test(r.id)||typeof r.color!="string"||!/^#[0-9a-f]{6}$/i.test(r.color)||typeof r.avatar!="string"))&&f.push("Los identificadores, colores o íconos de los grupos no son válidos."),(!Number.isFinite(s.minutes)||s.minutes<1||s.minutes>600)&&f.push("La duración del taller debe estar entre 1 y 600 minutos."),(!Number.isFinite(s.seconds)||s.seconds<5||s.seconds>3600)&&f.push("El tiempo por pregunta debe estar entre 5 y 3600 segundos."),(!Number.isInteger(s.helperCount)||s.helperCount<0||s.helperCount>10)&&f.push("La cantidad de cada comodín debe ser un entero entre 0 y 10."),Es.some(r=>!Number.isFinite(s.values[r])||s.values[r]<0||s.values[r]>1e6)&&f.push("Revisa los valores de puntuación."),(!Array.isArray(s.questions)||!s.questions.some(r=>r&&!r.tiebreak))&&f.push("Agrega al menos una pregunta que no sea de desempate."),["rotativo","manual"].includes(s.mode)||f.push("Modo de turnos no válido.");
  for(const r of["sound","music","questionTimer","random","rebound","pauseConsult"])typeof s[r]!="boolean"&&f.push(`Configuración de ${r} no válida.`);
  for(const r of["effectVolume","musicVolume"])(!Number.isFinite(s[r])||s[r]<0||s[r]>1)&&f.push("Los volúmenes deben estar entre 0 y 1.");
  return(typeof s.exercise.description!="string"||typeof s.exercise.image!="string"||s.exercise.image&&!/^data:image\/(png|jpeg|webp);base64,/.test(s.exercise.image))&&f.push("La descripción o la imagen del ejercicio no es válida."),s.exercise.activities.some(r=>!r||["id","name","predecessors","duration","cost","resources"].some(o=>typeof r[o]!="string"))&&f.push("La tabla de actividades debe contener campos de texto."),f
}

const Np="experto-redes-v1";
function gg() {
  try {
    const s=window.localStorage.getItem(Np);
    if(!s)return {
      archive: {
        version:1,config:dp(),game:null
      },warning:""
    };
    const f=JSON.parse(s);
    zp(f);
    const r=f.game&&!f.game.scoringRule;
    return {
      archive: {
        ...f,config:Ui(f.config),game:f.game?vs(bp(f.game)):null
      },warning:r?"Partida recuperada con la regla corregida: 100 puntos por acierto para cada grupo. Los ajustes manuales se conservaron y la puntuación anterior está en el respaldo.":""
    }
  } catch(s) {
    return {
      archive: {
        version:1,config:dp(),game:null
      },warning:`No se pudo recuperar el guardado local. Puedes seguir y exportar un respaldo JSON. ${s instanceof Error?s.message:""}`
    }
  }
}

function yg(s,f) {
  try {
    return window.localStorage.setItem(Np,JSON.stringify( {
      version:1,config:s,game:f
    })),""
  } catch {
    return"El navegador no permite guardar o el almacenamiento está lleno. La actividad sigue funcionando; exporta un respaldo JSON antes de cerrar. Para guardado local persistente, usa el proyecto descargable en tu navegador."
  }
}

function zp(s) {
  if(!s||s.version!==1||!s.config)throw new Error("El respaldo no corresponde a la versión 1.");
  const f=js(s.config);
  if(f.length)throw new Error(f.slice(0,4).join(" "));
  if(s.game) {
    const r=s.game;
    if(!r.config||!r.clock||!r.questionClock||!Array.isArray(r.questions)||!Array.isArray(r.attempts)||!r.attempts.length||!Array.isArray(r.history)||!r.scores||!r.inventories||!Array.isArray(r.results)||!Array.isArray(r.usedHelpers)||!Array.isArray(r.tieUsed)||!Array.isArray(r.hidden)||!Array.isArray(r.assignments)||!Number.isInteger(r.index)||r.index<0||r.index>=r.questions.length)throw new Error("Estado de partida incompleto.");
    if(js(r.config).length)throw new Error("Configuración de partida inválida.");
    if(!["preparada","activa","seleccionada","confirmada","rebote","revelada","pausa","tiempo","premiacion"].includes(r.phase))throw new Error("Estado de juego no válido.");
    if(xs(r.questions).length)throw new Error("El banco de la partida no es válido.");
    const S=r.config.groups.map(g=>g.id);
    if([r.clock,r.questionClock,...r.consultation?[r.consultation.clock]:[]].some(g=>!g||!Number.isFinite(g.remaining)||g.remaining<0||typeof g.running!="boolean"||g.running&&!Number.isFinite(g.deadline)))throw new Error("Cronómetro inválido.");
    for(const g of r.config.groups)if(!Number.isFinite(r.scores[g.id])||!r.inventories[g.id]||hs.some(O=>!Number.isInteger(r.inventories[g.id][O])||r.inventories[g.id][O]<0))throw new Error("Puntajes o inventarios no válidos.");
    if(r.assignments.length!==r.questions.length||r.assignments.some(g=>!S.includes(g))||r.attempts.length>2||r.attempts.some(g=>!g||!S.includes(g.groupId)||typeof g.locked!="boolean"||typeof g.timedOut!="boolean"||typeof g.rebound!="boolean"||g.selection!==null&&!r.questions[r.index].options.some(O=>O.id===g.selection)))throw new Error("Los turnos o selecciones del respaldo no son válidos.");
    if(r.consultation&&(!["salon","aliado","pista"].includes(r.consultation.kind)||!Array.isArray(r.consultation.votes)||r.consultation.votes.length!==4||r.consultation.votes.some(g=>!Number.isFinite(g)||g<0)||typeof r.consultation.ally!="string"))throw new Error("Consulta no válida.");
    if(r.results.some(g=>!g||!S.includes(g.groupId)||!Number.isFinite(g.points)||!r.questions.some(O=>O.id===g.questionId)))throw new Error("Resultados del respaldo no válidos.");
    if(r.history.some(g=>!g||typeof g.detail!="string"||typeof g.type!="string"||typeof g.time!="string"))throw new Error("Historial del respaldo no válido.")
  }
}

function bs(s,f,r="application/json") {
  const o=new Blob(["\uFEFF",f], {
    type:`${r};charset=utf-8`
  }),S=URL.createObjectURL(o),p=document.createElement("a");
  p.href=S,p.download=s,document.body.appendChild(p),p.click(),p.remove(),setTimeout(()=>URL.revokeObjectURL(S),1e4)
}

const xg=s=> {
  let f=String(s??"");
  return/^[=+\-@\t\r]/.test(f)&&(f="'"+f),`"${f.replaceAll('"','""')}"`
};
function jg(s) {
  const f=[["Clasificación","Grupo","Puntos","Respondidas","Aciertos","Errores","Rebotes"]];
  zs(s).forEach(o=> {
    const S=s.results.filter(p=>p.groupId===o.id&&!p.rebound&&!p.voided);f.push([On(s,o.id),o.name,s.scores[o.id],S.length,S.filter(p=>p.correct).length,S.filter(p=>!p.correct).length,s.results.filter(p=>p.groupId===o.id&&p.rebound).length])
  }),f.push([],["Pregunta","Equipo autor","Tema","Grupo participante","Opción ID","Acierto","Puntos","Rebote","Anulada","Fecha"]),s.results.forEach(o=> {
    var S;return f.push([o.questionId,o.team,o.theme,(S=s.config.groups.find(p=>p.id===o.groupId))==null?void 0:S.name,o.selection,o.correct?"Sí":"No",o.points,o.rebound?"Sí":"No",o.voided?"Sí":"No",o.time])
  }),f.push([],["Historial","Tipo","Detalle","Grupo","Pregunta","Equipo autor","Tema","Fecha"]),s.history.forEach(o=> {
    var S;return f.push(["",o.type,o.detail,(S=s.config.groups.find(p=>p.id===o.groupId))==null?void 0:S.name,o.questionId,o.team,o.theme,o.time])
  }),bs("resultados-planeacion-redes.csv",f.map(o=>o.map(xg).join(";")).join(`\r
`),"text/csv")
}

const bg= {
  inicio:[261,329,392,523],pregunta:[220,330],seleccion:[660],confirmar:[330,440],suspenso:[147,156,165],correcta:[523,659,784],incorrecta:[220,164],comodin:[440,660,880],cuenta:[880],fin:[330,220,110],premio:[392,523,659,784,1046]
};
class Sg {
  constructor() {
    Dt(this,"context",null);
    Dt(this,"oscillators",[]);
    Dt(this,"musicNodes",[]);
    Dt(this,"musicGain",null);
    Dt(this,"enabled",!0);
    Dt(this,"effectVolume",.4);
    Dt(this,"musicVolume",.15);
    Dt(this,"last",0)
  }

  async unlock() {
    try {
      this.context||(this.context=new AudioContext),this.context.state==="suspended"&&await this.context.resume()
    } catch{}
  }

  cue(f) {
    if(!this.enabled||!this.context||this.context.state!=="running")return;
    const r=this.context.currentTime;
    r-this.last<.07||(this.last=r,this.stopEffects(),bg[f].forEach((o,S)=> {
      const p=this.context.createOscillator(),g=this.context.createGain();p.type=f==="incorrecta"?"triangle":"sine",p.frequency.value=o;const O=r+S*.13;g.gain.setValueAtTime(0,O),g.gain.linearRampToValueAtTime(this.effectVolume*.2,O+.01),g.gain.exponentialRampToValueAtTime(1e-4,O+.22),p.connect(g),g.connect(this.context.destination),p.start(O),p.stop(O+.25),this.oscillators.push(p)
    }))
  }

  stopEffects() {
    this.oscillators.forEach(f=> {
      try {
        f.stop(),f.disconnect()
      } catch{}
    }),this.oscillators=[]
  }

  music(f) {
    if(this.stopMusic(),!f||!this.enabled||!this.context)return;
    const r=this.context.createGain();
    r.gain.value=this.musicVolume*.045,r.connect(this.context.destination),this.musicGain=r,[110,164.81,220].forEach(o=> {
      const S=this.context.createOscillator();S.type="sine",S.frequency.value=o,S.connect(r),S.start(),this.musicNodes.push(S)
    })
  }

  stopMusic() {
    var f;
    this.musicNodes.forEach(r=> {
      try {
        r.stop(),r.disconnect()
      } catch{}
    }),this.musicNodes=[],(f=this.musicGain)==null||f.disconnect(),this.musicGain=null
  }

  stop() {
    this.stopEffects(),this.stopMusic()
  }
}

const ye=new Sg,Eg=["orbita","rayo","diamante","estrella","escudo","triangulo","llama","hexagono"];
function Rn( {
  name:s,size:f=24
}) {
  const r= {
    orbita:op,rayo:rg,diamante:Z1,estrella:ig,escudo:ng,triangulo:sg,llama:K1,hexagono:J1
  }

  [s]||op;
  return u.jsx(r, {
    size:f,strokeWidth:1.7,"aria-hidden":"true"
  })
}

function Tr( {
  theme:s,size:f=20
}) {
  const r= {
    Estructura:Un,Tiempos:Mn,Costos:Q1,Recursos:Di
  }

  [s];
  return u.jsx(r, {
    size:f,"aria-hidden":"true"
  })
}

function V( {
  children:s,variant:f="",className:r="",...o
}) {
  return u.jsx("button", {
    type:"button",className:`btn ${f} ${r}`,...o,children:s
  })
}

function La( {
  title:s,onClose:f,children:r,wide:o=!1
}) {
  const S=$.useRef(null);
  return $.useEffect(()=> {
    const p=S.current;return p==null||p.showModal(),()=> {
      p==null||p.close()
    }
  },[]),u.jsxs("dialog", {
    ref:S,className:`modal ${o?"wide":""}`,"aria-label":s,onCancel:p=> {
      p.preventDefault(),f()
    },children:[u.jsxs("header", {
      className:"modal-head",children:[u.jsx("h2", {
        children:s
      }),u.jsx(V, {
        "aria-label":"Cerrar ventana",className:"icon-btn",onClick:f,children:u.jsx(yr, {
          size:22
        })
      })]
    }),u.jsx("div", {
      className:"modal-body",children:r
    })]
  })
}

function Tp( {
  group:s
}) {
  return u.jsxs("span", {
    className:"group-badge",style: {
      "--group-color":s.color
    },children:[u.jsx(Rn, {
      name:s.avatar,size:22
    }),u.jsx("span", {
      children:s.name
    })]
  })
}

async function xr(s) {
  try {
    document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()
  } catch {
    s==null||s("Este visor no permite pantalla completa. Abre la aplicación en una pestaña o ejecuta el proyecto local y usa F11.")
  }
}

function Ng( {
  onError:s
}) {
  return u.jsx(V, {
    className:"icon-btn",title:"Activar pantalla completa (F)","aria-label":"Activar pantalla completa",onClick:()=>xr(s),children:u.jsx(eg, {
      size:19
    })
  })
}

function qn( {
  src:s,alt:f
}) {
  const[r,o]=$.useState(1);
  return u.jsxs("div", {
    className:"image-viewer",children:[u.jsxs("div", {
      className:"row end",children:[u.jsxs(V, {
        onClick:()=>o(1),children:[u.jsx(ag, {
          size:16
        }),"Ajustar"]
      }),u.jsxs("label", {
        className:"zoom-label",children:["Zoom",u.jsx("input", {
          "aria-label":`Zoom de ${f}`,type:"range",min:"0.5",max:"3",step:"0.1",value:r,onChange:S=>o(+S.target.value)
        })]
      })]
    }),u.jsx("div", {
      className:"image-scroll",style: {
        "--zoom":r
      },children:u.jsx("img", {
        src:s,alt:f,onError:S=> {
          S.currentTarget.alt="No fue posible mostrar esta imagen. Vuelve a cargarla en la configuración."
        }
      })
    })]
  })
}

function Cp(s) {
  return new Promise((f,r)=> {
    if(!["image/png","image/jpeg","image/webp"].includes(s.type))return r(new Error("Selecciona una imagen PNG, JPEG o WebP."));if(s.size>5*1024*1024)return r(new Error("La imagen supera 5 MB. Usa una imagen más pequeña."));const o=new FileReader;o.onerror=()=>r(new Error("No se pudo leer la imagen.")),o.onload=()=> {
      const S=new Image;S.onerror=()=>r(new Error("La imagen no es válida.")),S.onload=()=> {
        const p=Math.min(1,1600/S.width,1600/S.height),g=document.createElement("canvas");g.width=S.width*p,g.height=S.height*p;const O=g.getContext("2d");if(!O)return r(new Error("No se pudo preparar la imagen."));O.fillStyle="#ffffff",O.fillRect(0,0,g.width,g.height),O.drawImage(S,0,0,g.width,g.height),f(g.toDataURL("image/jpeg",.82))
      },S.src=String(o.result)
    },o.readAsDataURL(s)
  })
}

function zg( {
  config:s,onChange:f,confirm:r,notify:o
}) {
  const[S,p]=$.useState(""),[g,O]=$.useState(""),[z,H]=$.useState(""),[M,b]=$.useState(""),[A,I]=$.useState(null),[Q,ie]=$.useState(null),[ue,U]=$.useState([]),W=$.useRef(null),Ue=s.questions.filter(B=>(!S||B.theme===S)&&(!g||B.team===+g)&&(!z||B.difficulty===z)&&B.text.toLowerCase().includes(M.toLowerCase())),he=B=> {
    const C=xs([B]);
    if(C.length) {
      U(C);
      return
    }

    f( {
      ...s,questions:s.questions.some(k=>k.id===B.id)?s.questions.map(k=>k.id===B.id?B:k):[...s.questions,B]
    }),I(null),U([]),o("Pregunta guardada en el banco.")
  },P=async B=> {
    if(B) {
      try {
        if(B.size>12*1024*1024)throw new Error("El archivo supera el máximo de 12 MB.");
        const C=JSON.parse((await B.text()).replace(/^\uFEFF/,"")),k=Array.isArray(C)?C:C.questions,Ce=xs(k);
        if(Ce.length) {
          U(Ce);
          return
        }

        r("Reemplazar banco de preguntas",`Se cargarán ${k.length} preguntas y se reemplazará el banco actual. Todas valdrán 100 por acierto, aunque el archivo tenga otros valores. Exporta primero si deseas conservarlo.`,()=> {
          f( {
            ...s,questions:vg(k)
          }),U([]),o("Banco importado y validado: 100 puntos por acierto para el grupo que responde.")
        })
      } catch(C) {
        U([C instanceof Error?C.message:"El archivo no contiene JSON válido."])
      }

      W.current&&(W.current.value="")
    }
  };
  return u.jsxs("section", {
    children:[u.jsxs("div", {
      className:"section-heading",children:[u.jsxs("div", {
        children:[u.jsx("h2", {
          children:"Banco de preguntas"
        }),u.jsx("p", {
          children:"Contenido de los equipos organizadores. No son los grupos que compiten."
        })]
      }),u.jsxs(V, {
        variant:"primary",onClick:()=> {
          I(fp()),U([])
        },children:[u.jsx(Ss, {
          size:18
        }),"Agregar pregunta"]
      })]
    }),u.jsx("div", {
      className:"info-box",children:"Banco inicial: 4 de estructura, 4 de tiempos, 4 de costos y 8 de recursos. Los equipos 9 y 10 conservan su autoría por separado. Puedes eliminar o agregar preguntas para ajustar el reparto."
    }),u.jsxs("div", {
      className:"toolbar wrap",children:[u.jsxs(V, {
        onClick:()=> {
          var B;return(B=W.current)==null?void 0:B.click()
        },children:[u.jsx(xp, {
          size:16
        }),"Importar JSON"]
      }),u.jsx("input", {
        ref:W,hidden:!0,type:"file",accept:".json,application/json",onChange:B=> {
          var C;return P((C=B.target.files)==null?void 0:C[0])
        }
      }),u.jsxs(V, {
        onClick:()=>bs("banco-planeacion-redes.json",JSON.stringify( {
          version:1,questions:s.questions
        },null,2)),children:[u.jsx(_n, {
          size:16
        }),"Exportar banco"]
      }),u.jsx(V, {
        onClick:()=>bs("ejemplo-pregunta.json",JSON.stringify( {
          version:1,questions:[s.questions[0]|| {
            ...fp(),text:"Enunciado de ejemplo",options:["a","b","c","d"].map((B,C)=>( {
              id:B,text:`Opción ${C+1}`
            })),explanation:"Explicación académica",reference:"Referencia al ejercicio",demo:!0
          }]
        },null,2)),children:"Ejemplo JSON"
      })]
    }),ue.length>0&&u.jsxs("div", {
      role:"alert",className:"error-box",children:[u.jsx("strong", {
        children:"Revisa el contenido"
      }),u.jsx("ul", {
        children:ue.slice(0,15).map((B,C)=>u.jsx("li", {
          children:B
        },C))
      })]
    }),u.jsxs("div", {
      className:"filters",children:[u.jsxs("label", {
        className:"search",children:[u.jsx(lg, {
          size:17
        }),u.jsx("input", {
          placeholder:"Buscar enunciado…","aria-label":"Buscar pregunta",value:M,onChange:B=>b(B.target.value)
        })]
      }),u.jsxs("select", {
        "aria-label":"Filtrar por tema",value:S,onChange:B=>p(B.target.value),children:[u.jsx("option", {
          value:"",children:"Todos los temas"
        }),Ia.map(B=>u.jsx("option", {
          children:B
        },B))]
      }),u.jsxs("select", {
        "aria-label":"Filtrar por equipo",value:g,onChange:B=>O(B.target.value),children:[u.jsx("option", {
          value:"",children:"Todos los equipos"
        }),[6,7,8,9,10].map(B=>u.jsxs("option", {
          value:B,children:["Equipo ",B]
        },B))]
      }),u.jsxs("select", {
        "aria-label":"Filtrar por dificultad",value:z,onChange:B=>H(B.target.value),children:[u.jsx("option", {
          value:"",children:"Todas las dificultades"
        }),Es.map(B=>u.jsx("option", {
          children:B
        },B))]
      })]
    }),u.jsxs("div", {
      className:"bank-count",children:[Ue.length," de ",s.questions.length," preguntas · ",s.questions.filter(B=>B.tiebreak).length," reservadas para desempate"]
    }),u.jsx("div", {
      className:"question-list",children:Ue.map((B,C)=>u.jsxs("article", {
        className:"bank-row",children:[u.jsx("span", {
          className:"bank-number",children:String(C+1).padStart(2,"0")
        }),u.jsxs("div", {
          className:"bank-copy",children:[u.jsxs("div", {
            className:"row wrap small",children:[u.jsxs("span", {
              className:"theme-label",children:[u.jsx(Tr, {
                theme:B.theme,size:14
              }),B.theme]
            }),u.jsxs("span", {
              children:["Equipo ",B.team]
            }),u.jsxs("span", {
              children:[B.difficulty," · ",B.points," pts"]
            }),B.demo&&u.jsx("span", {
              className:"tag",children:"Demostración"
            }),B.tiebreak&&u.jsx("span", {
              className:"tag gold",children:"Desempate"
            })]
          }),u.jsx("h3", {
            children:B.text||"Pregunta sin enunciado"
          }),u.jsxs("span", {
            className:"small muted",children:["ID: ",B.id]
          })]
        }),u.jsxs("div", {
          className:"row bank-actions",children:[u.jsx(V, {
            className:"icon-btn",title:"Previsualizar como participante","aria-label":`Previsualizar pregunta ${C+1}`,onClick:()=>ie(B),children:u.jsx(Sr, {
              size:18
            })
          }),u.jsx(V, {
            className:"icon-btn",title:"Editar","aria-label":`Editar pregunta ${C+1}`,onClick:()=> {
              I(structuredClone(B)),U([])
            },children:u.jsx(tg, {
              size:17
            })
          }),u.jsx(V, {
            className:"icon-btn",title:"Duplicar","aria-label":`Duplicar pregunta ${C+1}`,onClick:()=> {
              I( {
                ...structuredClone(B),id:Ns()
              }),U([])
            },children:u.jsx(X1, {
              size:17
            })
          }),u.jsx(V, {
            className:"icon-btn",title:"Eliminar","aria-label":`Eliminar pregunta ${C+1}`,onClick:()=>r("Eliminar pregunta",`¿Eliminar «${B.text}»? Esta acción modifica el banco, no los respaldos exportados.`,()=>f( {
              ...s,questions:s.questions.filter(k=>k.id!==B.id)
            })),children:u.jsx(gp, {
              size:17
            })
          })]
        })]
      },B.id))
    }),!Ue.length&&u.jsxs("div", {
      className:"empty",children:[u.jsx(Rt, {
        size:36
      }),u.jsx("h3", {
        children:"No hay preguntas con estos filtros"
      }),u.jsx("p", {
        children:"Cambia los filtros o agrega una pregunta al banco."
      })]
    }),A&&u.jsx(La, {
      title:s.questions.some(B=>B.id===A.id)?"Editar pregunta":"Agregar pregunta",wide:!0,onClose:()=>I(null),children:u.jsx(Tg, {
        question:A,setQuestion:I,errors:ue,onSave:()=>he( {
          ...A,points:100
        }),notify:o
      })
    }),Q&&u.jsxs(La, {
      title:"Vista del participante",wide:!0,onClose:()=>ie(null),children:[u.jsxs("div", {
        className:"row wrap",children:[u.jsx("span", {
          className:"tag",children:Q.demo?"Demostración":"Taller definitivo"
        }),u.jsxs("span", {
          children:[Q.theme," · ",Q.points," puntos"]
        })]
      }),u.jsx("div", {
        className:"preview-question",children:u.jsx("h2", {
          children:Q.text
        })
      }),Q.image&&u.jsx(qn, {
        src:Q.image,alt:"Apoyo visual de la pregunta"
      }),u.jsx("div", {
        className:"answers preview",children:Q.options.map((B,C)=>u.jsxs("div", {
          className:"answer",children:[u.jsx("span", {
            className:"letter",children:"ABCD"[C]
          }),B.text]
        },B.id))
      }),u.jsx("p", {
        className:"muted small",children:"Previsualización: la solución no se muestra al participante."
      })]
    })]
  })
}

function Tg( {
  question:s,setQuestion:f,errors:r,onSave:o,notify:S
}) {
  const p=(g,O)=>f( {
    ...s,[g]:O
  });
  return u.jsxs("form", {
    onSubmit:g=> {
      g.preventDefault(),o()
    },className:"form-stack",children:[r.length>0&&u.jsx("div", {
      role:"alert",className:"error-box",children:r.map((g,O)=>u.jsx("div", {
        children:g
      },O))
    }),u.jsxs("div", {
      className:"form-grid",children:[u.jsxs("label", {
        children:["ID único",u.jsx("input", {
          required:!0,value:s.id,readOnly:!0
        })]
      }),u.jsxs("label", {
        children:["Equipo organizador",u.jsx("select", {
          value:s.team,onChange:g=>f( {
            ...s,team:+g.target.value,theme: {
              6:"Estructura",7:"Tiempos",8:"Costos",9:"Recursos",10:"Recursos"
            }

            [+g.target.value]
          }),children:[6,7,8,9,10].map(g=>u.jsxs("option", {
            value:g,children:["Equipo ",g]
          },g))
        })]
      }),u.jsxs("label", {
        children:["Tema",u.jsx("input", {
          value:s.theme,readOnly:!0
        })]
      }),u.jsxs("label", {
        children:["Dificultad",u.jsx("select", {
          value:s.difficulty,onChange:g=> {
            const O=g.target.value;f( {
              ...s,difficulty:O,points:100
            })
          },children:Es.map(g=>u.jsx("option", {
            children:g
          },g))
        })]
      }),u.jsxs("label", {
        children:["Puntos por acierto",u.jsx("input", {
          type:"number",value:100,readOnly:!0
        }),u.jsx("span", {
          className:"small muted",children:"Fijo para todas las dificultades. Se suma solo al grupo que responde."
        })]
      }),u.jsxs("label", {
        className:"check",children:[u.jsx("input", {
          type:"checkbox",checked:s.demo,onChange:g=>p("demo",g.target.checked)
        }),"Pregunta de demostración"]
      })]
    }),u.jsxs("label", {
      children:["Enunciado",u.jsx("textarea", {
        "aria-label":"Enunciado",rows:3,required:!0,value:s.text,onChange:g=>p("text",g.target.value)
      })]
    }),u.jsxs("fieldset", {
      children:[u.jsx("legend", {
        children:"Cuatro opciones y una respuesta correcta"
      }),u.jsx("div", {
        className:"form-grid",children:s.options.map((g,O)=>u.jsxs("label", {
          children:["Opción ","ABCD"[O]," (ID: ",g.id,")",u.jsxs("div", {
            className:"option-editor",children:[u.jsx("input", {
              "aria-label":`Marcar ${"ABCD"[O]} como correcta`,type:"radio",name:"correct",checked:s.correctId===g.id,onChange:()=>p("correctId",g.id)
            }),u.jsx("input", {
              "aria-label":`Texto opción ${"ABCD"[O]}`,required:!0,value:g.text,onChange:z=>p("options",s.options.map(H=>H.id===g.id? {
                ...H,text:z.target.value
              }:H))
            })]
          })]
        },g.id))
      })]
    }),u.jsxs("label", {
      children:["Explicación académica",u.jsx("textarea", {
        "aria-label":"Explicación académica",rows:3,required:!0,value:s.explanation,onChange:g=>p("explanation",g.target.value)
      })]
    }),u.jsxs("label", {
      children:["Pista (opcional, sin revelar la respuesta)",u.jsx("textarea", {
        "aria-label":"Pista (opcional, sin revelar la respuesta)",rows:2,value:s.hint,onChange:g=>p("hint",g.target.value)
      })]
    }),u.jsxs("label", {
      children:["Referencia al ejercicio",u.jsx("input", {
        required:!0,value:s.reference,onChange:g=>p("reference",g.target.value)
      })]
    }),u.jsxs("label", {
      children:["Procedimiento, fórmula o datos adicionales (opcional)",u.jsx("textarea", {
        "aria-label":"Procedimiento, fórmula o datos adicionales (opcional)",rows:3,value:s.extra,onChange:g=>p("extra",g.target.value)
      })]
    }),u.jsxs("label", {
      className:"check",children:[u.jsx("input", {
        type:"checkbox",checked:!!s.tiebreak,onChange:g=>p("tiebreak",g.target.checked)
      }),"Reservar exclusivamente para desempate"]
    }),u.jsxs("label", {
      className:"file-label",children:[u.jsx(hp, {
        size:19
      })," Imagen o diagrama opcional (PNG, JPEG o WebP, máx. 5 MB)",u.jsx("input", {
        type:"file",accept:"image/png,image/jpeg,image/webp",onChange:async g=> {
          var z;const O=(z=g.target.files)==null?void 0:z[0];if(O)try {
            p("image",await Cp(O))
          } catch(H) {
            S(String(H))
          }
        }
      })]
    }),s.image&&u.jsxs(u.Fragment, {
      children:[u.jsx(qn, {
        src:s.image,alt:"Imagen de la pregunta"
      }),u.jsx(V, {
        onClick:()=>p("image",""),children:"Quitar imagen"
      })]
    }),u.jsx(V, {
      type:"submit",variant:"primary",children:"Guardar pregunta"
    })]
  })
}

const Cg= {
  id:"ID",name:"Nombre",predecessors:"Predecesoras",duration:"Duración",cost:"Costo",resources:"Recursos"
},Ag=s=> {
  let f=1;
  for(;s.activities.some(r=>r.id===`A${f}`);)f++;
  return`A${f}`
};
function Og( {
  exercise:s
}) {
  return!s.description&&!s.activities.length&&!s.image?u.jsxs("div", {
    className:"empty",children:[u.jsx(Un, {
      size:48
    }),u.jsx("h3", {
      children:"El punto de partida de tu taller"
    }),u.jsx("p", {
      children:"Agrega aquí el ejercicio que servirá de base para las preguntas"
    }),u.jsx("span", {
      className:"muted small",children:"Se configura en «Configurar taller» → «Ejercicio base»."
    })]
  }):u.jsxs("div", {
    className:"form-stack",children:[s.description&&u.jsx("p", {
      className:"pre-line",children:s.description
    }),s.activities.length>0&&u.jsx("div", {
      className:"table-wrap",children:u.jsxs("table", {
        children:[u.jsx("thead", {
          children:u.jsx("tr", {
            children:["ID","Actividad","Predecesoras","Duración","Costo","Recursos"].map(f=>u.jsx("th", {
              children:f
            },f))
          })
        }),u.jsx("tbody", {
          children:s.activities.map(f=>u.jsxs("tr", {
            children:[u.jsx("td", {
              children:f.id
            }),u.jsx("td", {
              children:f.name
            }),u.jsx("td", {
              children:f.predecessors||"Sin predecesoras"
            }),u.jsx("td", {
              children:f.duration||"No definido"
            }),u.jsx("td", {
              children:f.cost||"No definido"
            }),u.jsx("td", {
              children:f.resources||"No definido"
            })]
          },f.id))
        })]
      })
    }),s.image&&u.jsx(qn, {
      src:s.image,alt:"Diagrama de red del ejercicio base"
    })]
  })
}

function Mg( {
  exercise:s,onChange:f,notify:r
}) {
  return u.jsxs("section", {
    className:"form-stack",children:[u.jsxs("div", {
      className:"section-heading",children:[u.jsxs("div", {
        children:[u.jsx("h2", {
          children:"Ejercicio base"
        }),u.jsx("p", {
          children:"Un proyecto común para las preguntas de todos los equipos."
        })]
      }),u.jsx(Un, {
        size:28
      })]
    }),u.jsx("div", {
      className:"info-box",children:"Aún no conocemos tu ejercicio real. Aquí no se incluye un diagrama ni una solución definitiva. Escribe las unidades de duración, costo y recursos en cada celda."
    }),u.jsxs("label", {
      children:["Descripción del proyecto",u.jsx("textarea", {
        "aria-label":"Descripción del proyecto",rows:5,placeholder:"Agrega aquí el ejercicio que servirá de base para las preguntas",value:s.description,onChange:o=>f( {
          ...s,description:o.target.value
        })
      })]
    }),u.jsxs("div", {
      className:"section-heading",children:[u.jsx("h3", {
        children:"Tabla de actividades"
      }),u.jsxs(V, {
        onClick:()=>f( {
          ...s,activities:[...s.activities, {
            id:Ag(s),name:"",predecessors:"",duration:"",cost:"",resources:""
          }]
        }),children:[u.jsx(Ss, {
          size:17
        }),"Agregar actividad"]
      })]
    }),!s.activities.length&&u.jsx("p", {
      className:"muted",children:"Todavía no hay actividades. Agrega la primera fila o carga la imagen del ejercicio."
    }),s.activities.length>0&&u.jsx("div", {
      className:"table-wrap",children:u.jsxs("table", {
        className:"edit-table",children:[u.jsx("thead", {
          children:u.jsx("tr", {
            children:["ID","Actividad","Predecesoras","Duración","Costo","Recursos","Acción"].map(o=>u.jsx("th", {
              children:o
            },o))
          })
        }),u.jsx("tbody", {
          children:s.activities.map((o,S)=>u.jsxs("tr", {
            children:[["id","name","predecessors","duration","cost","resources"].map(p=>u.jsx("td", {
              children:u.jsx("input", {
                "aria-label":`${Cg[p]} de actividad ${S+1}`,value:o[p],onChange:g=>f( {
                  ...s,activities:s.activities.map((O,z)=>S===z? {
                    ...O,[p]:g.target.value
                  }:O)
                })
              })
            },p)),u.jsx("td", {
              children:u.jsx(V, {
                className:"icon-btn","aria-label":`Eliminar actividad ${S+1}`,onClick:()=>f( {
                  ...s,activities:s.activities.filter((p,g)=>g!==S)
                }),children:u.jsx(gp, {
                  size:17
                })
              })
            })]
          },S))
        })]
      })
    }),u.jsxs("label", {
      className:"file-label",children:[u.jsx(hp, {
        size:20
      }),"Cargar diagrama de red",u.jsx("input", {
        type:"file",accept:"image/png,image/jpeg,image/webp",onChange:async o=> {
          var p;const S=(p=o.target.files)==null?void 0:p[0];if(S)try {
            f( {
              ...s,image:await Cp(S)
            })
          } catch(g) {
            r(String(g))
          }
        }
      }),u.jsx("span", {
        className:"small muted",children:"PNG, JPEG o WebP. Máximo 5 MB; se optimiza a 1600 px para el guardado local."
      })]
    }),s.image&&u.jsxs(u.Fragment, {
      children:[u.jsx(qn, {
        src:s.image,alt:"Diagrama de red del ejercicio base"
      }),u.jsx(V, {
        onClick:()=>f( {
          ...s,image:""
        }),children:"Quitar diagrama"
      })]
    })]
  })
}

function _g( {
  config:s,onChange:f,confirm:r,notify:o,onBack:S,onStart:p,locked:g=!1
}) {
  const[O,z]=$.useState("grupos"),H=[["grupos","Grupos participantes",Di],["reglas","Reglas y tiempos",Nr],["preguntas","Banco de preguntas",Rt],["ejercicio","Ejercicio base",Un],["sonido","Sonido y ambiente",ms]],M=(A,I)=>f( {
    ...s,[A]:I
  }),b=ql(s);
  return u.jsxs("main", {
    className:"config-page",children:[u.jsxs("div", {
      className:"page-heading",children:[u.jsxs("div", {
        children:[u.jsxs(V, {
          variant:"text",onClick:S,children:[u.jsx(G1, {
            size:17
          }),"Volver ",g?"a la actividad":"al inicio"]
        }),u.jsx("h1", {
          children:"Prepara el escenario"
        }),u.jsx("p", {
          children:"Un buen taller comienza con las reglas claras."
        })]
      }),!g&&u.jsxs(V, {
        variant:"primary",onClick:p,children:[u.jsx(Ut, {
          size:17
        }),"Revisar e iniciar"]
      })]
    }),g&&u.jsx("div", {
      className:"warning-box",children:"Partida pausada. Los cambios se guardan para la próxima partida y no alteran las preguntas, grupos ni puntajes de la actual. Reanuda desde «Volver a la actividad»."
    }),u.jsxs("div", {
      className:"config-layout",children:[u.jsxs("nav", {
        className:"config-nav","aria-label":"Secciones de configuración",children:[H.map(([A,I,Q])=>u.jsxs("button", {
          "aria-current":O===A?"page":void 0,className:O===A?"active":"",onClick:()=>z(A),children:[u.jsx(Q, {
            size:19
          }),I,O===A&&u.jsx("span", {
            className:"nav-dot"
          })]
        },A)),u.jsxs("div", {
          className:"config-side-note",children:[u.jsx(I1, {
            size:18
          }),u.jsx("p", {
            children:"Todo se guarda en este navegador. Exporta un respaldo antes del taller."
          })]
        })]
      }),u.jsxs("div", {
        className:"config-content",children:[O==="grupos"&&u.jsxs("section", {
          children:[u.jsx("div", {
            className:"section-heading",children:u.jsxs("div", {
              children:[u.jsx("h2", {
                children:"Los cinco protagonistas"
              }),u.jsx("p", {
                children:"Estos grupos compiten. Los equipos 6 a 10 son autores de preguntas."
              })]
            })
          }),u.jsx("div", {
            className:"group-edit-list",children:s.groups.map((A,I)=>u.jsxs("article", {
              className:"group-edit",children:[u.jsx("span", {
                className:"group-avatar large",style: {
                  color:A.color,background:`${A.color}18`
                },children:u.jsx(Rn, {
                  name:A.avatar,size:30
                })
              }),u.jsxs("label", {
                children:["Nombre del grupo ",I+1,u.jsx("input", {
                  maxLength:40,value:A.name,onChange:Q=>M("groups",s.groups.map(ie=>ie.id===A.id? {
                    ...ie,name:Q.target.value
                  }:ie))
                })]
              }),u.jsxs("label", {
                className:"color-label",children:["Color",u.jsx("input", {
                  type:"color",value:A.color,onChange:Q=>M("groups",s.groups.map(ie=>ie.id===A.id? {
                    ...ie,color:Q.target.value
                  }:ie))
                })]
              }),u.jsxs("label", {
                children:["Ícono",u.jsx("select", {
                  value:A.avatar,onChange:Q=>M("groups",s.groups.map(ie=>ie.id===A.id? {
                    ...ie,avatar:Q.target.value
                  }:ie)),children:Eg.map(Q=>u.jsx("option", {
                    value:Q,children:Q[0].toUpperCase()+Q.slice(1)
                  },Q))
                })]
              })]
            },A.id))
          }),u.jsxs("div", {
            className:"saved-note",children:[u.jsx(_i, {
              size:16
            }),"Los cambios se guardan automáticamente."]
          })]
        }),O==="reglas"&&u.jsxs("section", {
          className:"form-stack",children:[u.jsx("div", {
            className:"section-heading",children:u.jsxs("div", {
              children:[u.jsx("h2", {
                children:"Reglas y tiempos"
              }),u.jsx("p", {
                children:"Controla el ritmo sin perder el espacio para explicar."
              })]
            })
          }),u.jsxs("div", {
            className:"form-grid",children:[u.jsxs("label", {
              children:["Duración del taller (minutos)",u.jsx("input", {
                type:"number",min:"1",max:"600",value:s.minutes,onChange:A=>M("minutes",+A.target.value)
              })]
            }),u.jsxs("label", {
              children:["Tiempo por pregunta (segundos)",u.jsx("input", {
                type:"number",min:"5",max:"3600",value:s.seconds,onChange:A=>M("seconds",+A.target.value)
              })]
            }),u.jsxs("label", {
              children:["Modo de turnos",u.jsxs("select", {
                value:s.mode,onChange:A=>M("mode",A.target.value),children:[u.jsx("option", {
                  value:"rotativo",children:"Turnos rotativos"
                }),u.jsx("option", {
                  value:"manual",children:"Selección manual del grupo"
                })]
              })]
            }),u.jsxs("label", {
              children:["Orden de las preguntas",u.jsxs("select", {
                value:String(s.random),onChange:A=>M("random",A.target.value==="true"),children:[u.jsx("option", {
                  value:"false",children:"Fijo por bloques temáticos, equilibrado"
                }),u.jsx("option", {
                  value:"true",children:"Aleatorio dentro de cada tema, equilibrado"
                })]
              })]
            }),u.jsxs("label", {
              children:["Cantidad de cada comodín por grupo",u.jsx("input", {
                type:"number",min:"0",max:"10",value:s.helperCount,onChange:A=>M("helperCount",+A.target.value)
              })]
            })]
          }),u.jsxs("label", {
            className:"toggle-row",children:[u.jsxs("div", {
              children:[u.jsx("strong", {
                children:"Temporizador por pregunta"
              }),u.jsx("p", {
                children:"Comienza solo al presionar «Comenzar pregunta»."
              })]
            }),u.jsx("input", {
              type:"checkbox",checked:s.questionTimer,onChange:A=>M("questionTimer",A.target.checked)
            })]
          }),u.jsxs("label", {
            className:"toggle-row",children:[u.jsxs("div", {
              children:[u.jsx("strong", {
                children:"Habilitar rebotes"
              }),u.jsx("p", {
                children:"Un grupo distinto puede responder antes de revelar. Si acierta, suma 100 a su propio marcador."
              })]
            }),u.jsx("input", {
              type:"checkbox",checked:s.rebound,onChange:A=>M("rebound",A.target.checked)
            })]
          }),u.jsxs("label", {
            className:"toggle-row",children:[u.jsxs("div", {
              children:[u.jsx("strong", {
                children:"Pausar la pregunta durante consultas"
              }),u.jsx("p", {
                children:"El cronómetro general continúa; también se aplica a la pista escrita."
              })]
            }),u.jsx("input", {
              type:"checkbox",checked:s.pauseConsult,onChange:A=>M("pauseConsult",A.target.checked)
            })]
          }),u.jsx("h3", {
            children:"Puntajes individuales por grupo"
          }),u.jsx("div", {
            className:"info-box",children:"Cada respuesta correcta suma 100 puntos únicamente al grupo que respondió. Dos aciertos suman 200; tres, 300. Los errores suman 0. La dificultad no cambia el puntaje y no existe un marcador compartido."
          }),u.jsx("h3", {
            children:"Oportunidades planificadas"
          }),u.jsx("div", {
            className:"table-wrap",children:u.jsxs("table", {
              children:[u.jsx("thead", {
                children:u.jsxs("tr", {
                  children:[u.jsx("th", {
                    children:"Grupo"
                  }),u.jsx("th", {
                    children:"Preguntas"
                  }),u.jsx("th", {
                    children:"Puntaje máximo"
                  })]
                })
              }),u.jsx("tbody", {
                children:s.groups.map((A,I)=>u.jsxs("tr", {
                  children:[u.jsx("td", {
                    children:A.name
                  }),u.jsx("td", {
                    children:b.assignments.filter(Q=>Q===A.id).length
                  }),u.jsxs("td", {
                    children:[b.totals[I]," puntos"]
                  })]
                },A.id))
              })]
            })
          }),u.jsx("div", {
            className:"warning-box",children:"Se planifican bloques de estructura, tiempos, costos y recursos. El banco inicial no permite dar a cada grupo una pregunta de cada tema: hay 4 / 4 / 4 / 8. Se equilibran los puntos disponibles mediante intercambios dentro de cada bloque, siempre que sea posible. En modo manual el presentador administra las oportunidades."
          }),u.jsx("div", {
            className:"row wrap",children:Ia.map(A=>u.jsxs("span", {
              className:"tag",children:[u.jsx(Tr, {
                theme:A,size:15
              }),A,": ",s.questions.filter(I=>I.theme===A&&!I.tiebreak).length]
            },A))
          })]
        }),O==="preguntas"&&u.jsx(zg, {
          config:s,onChange:f,confirm:r,notify:o
        }),O==="ejercicio"&&u.jsx(Mg, {
          exercise:s.exercise,onChange:A=>M("exercise",A),notify:o
        }),O==="sonido"&&u.jsxs("section", {
          className:"form-stack",children:[u.jsx("div", {
            className:"section-heading",children:u.jsxs("div", {
              children:[u.jsx("h2", {
                children:"Sonido y ambiente"
              }),u.jsx("p", {
                children:"Efectos originales sintetizados en tu navegador, sin archivos externos."
              })]
            })
          }),u.jsxs("label", {
            className:"toggle-row",children:[u.jsxs("div", {
              children:[u.jsx("strong", {
                children:"Sonidos de la actividad"
              }),u.jsx("p", {
                children:"Selección, confirmación, comodines, cuenta regresiva y premiación."
              })]
            }),u.jsx("input", {
              type:"checkbox",checked:s.sound,onChange:A=>M("sound",A.target.checked)
            })]
          }),u.jsxs("label", {
            children:["Volumen de efectos: ",Math.round(s.effectVolume*100)," %",u.jsx("input", {
              type:"range",min:"0",max:"1",step:"0.01",value:s.effectVolume,onChange:A=>M("effectVolume",+A.target.value)
            })]
          }),u.jsxs("label", {
            className:"toggle-row",children:[u.jsxs("div", {
              children:[u.jsx("strong", {
                children:"Música ambiental"
              }),u.jsx("p", {
                children:"Ambiente armónico discreto. Desactivado por defecto."
              })]
            }),u.jsx("input", {
              type:"checkbox",checked:s.music,onChange:A=>M("music",A.target.checked)
            })]
          }),u.jsxs("label", {
            children:["Volumen de música: ",Math.round(s.musicVolume*100)," %",u.jsx("input", {
              type:"range",min:"0",max:"1",step:"0.01",value:s.musicVolume,onChange:A=>M("musicVolume",+A.target.value)
            })]
          }),u.jsxs(V, {
            onClick:async()=> {
              await ye.unlock(),ye.enabled=!0,ye.effectVolume=s.effectVolume,ye.cue("inicio")
            },children:[u.jsx(ms, {
              size:18
            }),"Probar sonido"]
          }),u.jsx("div", {
            className:"info-box",children:"El audio solo se activa después de una interacción. El silencio global detiene efectos y música; al salir de la actividad no se mantiene reproducción."
          })]
        })]
      })]
    })]
  })
}

function Dg( {
  onConfigure:s
}) {
  return u.jsxs("div", {
    className:"guide",children:[u.jsx("div", {
      className:"info-box",children:"Planeación de proyectos mediante actividades, precedencias, tiempos, costos y recursos. No es un taller de redes informáticas."
    }),u.jsxs("section", {
      children:[u.jsx(Rt, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Prepara un ejercicio común"
        }),u.jsx("p", {
          children:"En Configurar taller → Ejercicio base escribe el proyecto, agrega actividades y carga el diagrama local. Durante el juego, «Ejercicio base» abre el material con zoom sin iniciar el temporizador de pregunta."
        })]
      })]
    }),u.jsxs("section", {
      children:[u.jsx(Di, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Autores y participantes, por separado"
        }),u.jsx("p", {
          children:"Los equipos 6, 7, 8, 9 y 10 registran sus preguntas en el banco según su tema. Los cinco grupos participantes compiten: personaliza sus nombres, colores e íconos. Reemplaza las 20 preguntas de demostración antes del taller definitivo."
        })]
      })]
    }),u.jsxs("section", {
      children:[u.jsx(ug, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Un turno, una respuesta definitiva"
        }),u.jsx("p", {
          children:"«Iniciar actividad» enciende el cronómetro general. Presenta el ejercicio y pulsa «Comenzar pregunta». El grupo puede cambiar A, B, C o D hasta confirmar. Después queda bloqueada. Solo el presentador revela la solución y decide cuándo avanzar."
        }),u.jsx("p", {
          children:"Cada acierto suma 100 únicamente al grupo que respondió: dos aciertos son 200 y tres son 300 en su propio marcador. Fallar suma 0. La dificultad no cambia el valor. El rebote, si está habilitado, se concede antes de revelar y también suma 100 al grupo que acierta. No hay puntos negativos automáticos."
        })]
      })]
    }),u.jsxs("section", {
      children:[u.jsx(P1, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Cuatro formas de pedir apoyo"
        }),u.jsx("p", {
          children:"50:50 elimina dos opciones incorrectas. Consulta al salón permite ingresar votos reales a mano alzada. Consulta a un aliado da 30 segundos para hablar con un compañero presencial. Pista del ejercicio muestra el texto que registró el organizador. Se usan antes de confirmar y pertenecen a cada grupo."
        }),u.jsx("p", {
          children:"Por defecto, las consultas pausan el tiempo de pregunta, no el del taller. El docente define quién puede ser aliado. La votación refleja opiniones, no garantiza la solución."
        })]
      })]
    }),u.jsxs("section", {
      children:[u.jsx(_n, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Guardar, recuperar y exportar"
        }),u.jsx("p", {
          children:"La aplicación guarda cada acción en localStorage cuando el navegador lo permite. Tras recargar, usa «Continuar partida»: un cronómetro en marcha descuenta el tiempo fuera de la página. Un cronómetro pausado conserva su tiempo."
        }),u.jsx("p", {
          children:"Exporta un respaldo JSON desde el panel o el inicio, e impórtalo para recuperar todo. Al terminar, exporta la clasificación y el historial en CSV. Si el visor bloquea el almacenamiento, el aviso permite seguir trabajando y exportar; ejecuta el proyecto local para persistencia en tu propio navegador."
        })]
      })]
    }),u.jsxs("section", {
      children:[u.jsx(W1, {
        size:23
      }),u.jsxs("div", {
        children:[u.jsx("h3", {
          children:"Atajos del presentador"
        }),u.jsx("div", {
          className:"key-grid",children:[["A B C D","Seleccionar opción"],["Enter","Confirmar respuesta"],["Espacio","Pausar / reanudar"],["N","Siguiente, después de revelar"],["M","Silenciar"],["F","Pantalla completa"],["P","Panel del presentador"]].map(([f,r])=>u.jsxs("div", {
            children:[u.jsx("kbd", {
              children:f
            }),u.jsx("span", {
              children:r
            })]
          },f))
        }),u.jsx("p", {
          children:"Los atajos se desactivan al escribir en campos o mientras hay una ventana abierta. Mantener una tecla presionada no repite acciones."
        })]
      })]
    }),u.jsx("div", {
      className:"warning-box",children:"Si proyectas toda la pantalla del mismo dispositivo, las ventanas de configuración y el panel del presentador también pueden verse. No son una vista privada. Esta versión no abre una segunda ventana de proyección sincronizada."
    }),u.jsxs(V, {
      variant:"primary",onClick:s,children:["Configurar taller",u.jsx(Hl, {
        size:18
      })]
    })]
  })
}

const fs= {
  mitad:"50:50",salon:"Consulta al salón",aliado:"Consulta a un aliado",pista:"Pista del ejercicio"
};
function jr( {
  helper:s,size:f=21
}) {
  if(s==="mitad")return u.jsx("span", {
    className:"half-icon","aria-hidden":"true",children:"50:50"
  });
  const r=s==="salon"?Di:s==="aliado"?cg:pp;
  return u.jsx(r, {
    size:f,"aria-hidden":"true"
  })
}

function Rg( {
  game:s,now:f,dispatch:r,onExercise:o,onPresenter:S,onBounce:p,onImage:g,onFinish:O
}) {
  const z=Bl(s),H=wa(s),M=s.config.groups.find(C=>C.id===H.groupId),b=ds(s,f)&&!H.locked,A=s.phase==="revelada",I=s.results.some(C=>C.questionId===z.id&&C.voided),Q=s.phase==="pausa",ie=s.phase==="tiempo",ue=s.phase!=="preparada"&&!(Q&&s.previousPhase==="preparada")&&!(ie&&s.previousPhase==="preparada"),U=ga(s.questionClock,f),W=ga(s.clock,f),Ue=!!s.results.find(C=>C.questionId===z.id&&C.correct),he=s.scores[M.id],P=Math.max(400,Math.ceil(he/100)*100),B=Array.from( {
    length:Math.min(8,P/100)
  },(C,k)=>P-k*100);
  return u.jsxs("main", {
    className:"game-page",children:[u.jsxs("div", {
      className:"game-intro",children:[u.jsxs("div", {
        className:"row wrap",children:[u.jsx("span", {
          className:"live-dot"
        }),u.jsx("span", {
          className:"eyebrow",children:"EL TALLER ESTÁ EN JUEGO"
        }),u.jsx("span", {
          className:`tag ${s.questions.some(C=>C.demo)?"":"gold"}`,children:s.questions.some(C=>C.demo)?"Modo demostración":"Taller definitivo"
        })]
      }),u.jsxs("div", {
        className:"row",children:[u.jsxs(V, {
          onClick:o,children:[u.jsx(Rt, {
            size:17
          }),"Ejercicio base"]
        }),u.jsxs(V, {
          onClick:S,children:[u.jsx(Nr, {
            size:17
          }),u.jsx("span", {
            children:"Panel del presentador"
          }),u.jsx("kbd", {
            children:"P"
          })]
        })]
      })]
    }),u.jsxs("div", {
      className:"stage-layout",children:[u.jsxs("section", {
        className:"question-stage",children:[u.jsxs("div", {
          className:"stage-meta",children:[u.jsxs("div", {
            children:[u.jsxs("span", {
              className:"small muted",children:["TURNO ",H.rebound?"DE REBOTE":"ACTUAL"]
            }),u.jsx(Tp, {
              group:M
            })]
          }),u.jsxs("div", {
            className:"question-counter",children:[u.jsx("strong", {
              children:String(s.index+1).padStart(2,"0")
            }),u.jsxs("span", {
              children:[" / ",String(s.questions.length).padStart(2,"0"),u.jsx("small", {
                children:"pregunta"
              })]
            })]
          })]
        }),u.jsx("div", {
          className:"theme-progress","aria-label":"Bloques temáticos",children:Ia.map(C=>u.jsxs("span", {
            className:`${C===z.theme?"current":""} ${Ia.indexOf(C)<Ia.indexOf(z.theme)?"done":""}`,children:[Ia.indexOf(C)<Ia.indexOf(z.theme)?u.jsx(_i, {
              size:13
            }):u.jsx("span", {
              className:"progress-dot"
            }),C]
          },C))
        }),u.jsxs("div", {
          className:"question-category",children:[u.jsx("span", {
            children:z.theme.toUpperCase()
          }),u.jsx("span", {
            className:"dot-separator"
          }),u.jsxs("span", {
            children:["Equipo organizador ",z.team]
          }),u.jsx("span", {
            className:"difficulty",children:z.difficulty
          }),u.jsxs("strong", {
            children:[Ri,u.jsx("small", {
              children:" PUNTOS POR ACIERTO"
            })]
          })]
        }),u.jsx("article", {
          className:`question-hex ${A?"is-revealed":""}`,children:u.jsxs("div", {
            className:"hex-inner",children:[u.jsx("span", {
              className:"question-caption",children:z.demo?"PREGUNTA DE DEMOSTRACIÓN":"DESAFÍO DEL TALLER"
            }),u.jsx("h1", {
              children:z.text
            }),z.image&&u.jsxs(V, {
              variant:"text",onClick:()=>g(z),children:[u.jsx(F1, {
                size:17
              }),"Ver apoyo visual"]
            })]
          })
        }),s.config.questionTimer&&u.jsxs("div", {
          className:`question-time ${U<=1e4&&ue&&!A?"urgent":""}`,children:[u.jsxs("span", {
            children:[u.jsx(Mn, {
              size:16
            }),ue?H.timedOut?"Tiempo agotado":s.consultation&&s.config.pauseConsult?"En pausa durante la consulta":Q?"Pregunta en pausa":"Tiempo de pregunta":"El tiempo empieza al comenzar la pregunta"]
          }),u.jsx("strong", {
            children:ps(U)
          }),u.jsx("div", {
            className:"time-track",children:u.jsx("span", {
              style: {
                width:`${Math.max(0,Math.min(100,U/(s.config.seconds*1e3)*100))}%`
              }
            })
          })]
        }),ue&&u.jsx("div", {
          className:"answers",children:z.options.map((C,k)=> {
            const Ce=s.hidden.includes(C.id)&&!A,Pe=A&&!I&&C.id===z.correctId,Ie=A&&!I&&s.attempts.some(Na=>Na.selection===C.id)&&C.id!==z.correctId,Qe=H.selection===C.id;return u.jsxs("button", {
              "data-testid":`answer-${"ABCD"[k]}`,className:`answer ${Qe?"selected":""} ${H.locked&&Qe?"locked":""} ${Pe?"correct":""} ${Ie?"incorrect":""} ${Ce?"eliminated":""}`,disabled:!b||Ce,"aria-pressed":Qe,onClick:()=>r( {
                type:"SELECT",id:C.id
              }),children:[u.jsx("span", {
                className:"letter",children:"ABCD"[k]
              }),u.jsx("span", {
                className:"answer-text",children:Ce?"Opción eliminada":C.text
              }),u.jsx("span", {
                className:"answer-status",children:Pe?u.jsxs(u.Fragment, {
                  children:[u.jsx(vr, {
                    size:20
                  }),u.jsx("span", {
                    children:"Correcta"
                  })]
                }):Ie?u.jsxs(u.Fragment, {
                  children:[u.jsx(cp, {
                    size:20
                  }),u.jsx("span", {
                    children:"Incorrecta"
                  })]
                }):Qe?u.jsxs(u.Fragment, {
                  children:[H.locked?u.jsx(mr, {
                    size:19
                  }):u.jsx(_i, {
                    size:19
                  }),u.jsx("span", {
                    children:H.locked?"Definitiva":"Seleccionada"
                  })]
                }):null
              })]
            },C.id)
          })
        }),!ue&&u.jsxs("div", {
          className:"prepared-panel",children:[u.jsx("span", {
            className:"prepared-symbol",children:u.jsx(Ut, {
              size:21
            })
          }),u.jsxs("div", {
            children:[u.jsx("strong", {
              children:"El escenario está listo"
            }),u.jsx("p", {
              children:"Presenta el ejercicio. Cuando el grupo esté listo, comienza la pregunta."
            })]
          })]
        }),Q&&u.jsxs("div", {
          className:"warning-box row",children:[u.jsx(Er, {
            size:21
          }),u.jsxs("div", {
            children:[u.jsx("strong", {
              children:"Actividad en pausa"
            }),u.jsx("p", {
              children:"Los temporizadores están detenidos. Reanuda para continuar."
            })]
          })]
        }),ie&&u.jsxs("div", {
          className:"error-box",children:[u.jsx("h3", {
            children:"Tiempo del taller finalizado"
          }),u.jsx("p", {
            children:"Se bloquearon las respuestas. El presentador puede agregar tiempo extra o finalizar."
          }),u.jsxs("div", {
            className:"row",children:[u.jsxs(V, {
              onClick:S,children:[u.jsx(Ss, {
                size:17
              }),"Agregar tiempo"]
            }),u.jsx(V, {
              onClick:O,children:"Finalizar taller"
            })]
          })]
        }),A&&u.jsxs("div", {
          className:`solution-panel ${I?"voided":""}`,children:[u.jsxs("div", {
            className:"row",children:[u.jsx("span", {
              className:"solution-icon",children:I?u.jsx(yp, {
                size:25
              }):Ue?u.jsx(vr, {
                size:25
              }):u.jsx(cp, {
                size:25
              })
            }),u.jsx("h2", {
              children:I?"Pregunta anulada":Ue?"¡Respuesta correcta!":"Una oportunidad para aprender"
            }),u.jsx("span", {
              className:"solution-points",children:I?"Sin puntuación":s.results.filter(C=>C.questionId===z.id).map(C=> {
                var k;return`${(k=s.config.groups.find(Ce=>Ce.id===C.groupId))==null?void 0:k.name}: +${C.points}`
              }).join(" · ")
            })]
          }),!I&&u.jsxs(u.Fragment, {
            children:[u.jsx("p", {
              children:z.explanation
            }),z.extra&&u.jsx("div", {
              className:"formula pre-line",children:z.extra
            }),u.jsxs("p", {
              className:"small muted",children:[u.jsx(Rt, {
                size:14
              })," ",z.reference]
            })]
          })]
        }),u.jsxs("div", {
          className:"stage-controls",children:[u.jsx("div", {
            className:"definitive",children:H.locked&&!A?u.jsxs(u.Fragment, {
              children:[u.jsx(mr, {
                size:16
              }),u.jsx("span", {
                children:H.timedOut?"Tiempo agotado. Sin respuesta.":"Respuesta bloqueada. Esperando al presentador."
              })]
            }):b&&H.selection?u.jsx("span", {
              children:"¿Es tu respuesta definitiva?"
            }):A?u.jsx("span", {
              children:"Haz una pausa para explicar antes de avanzar."
            }):u.jsx("span", {
              children:ue?"Elige una de las cuatro opciones.":"El cronómetro general continúa."
            })
          }),u.jsxs("div", {
            className:"row wrap end",children:[s.phase==="preparada"&&u.jsxs(V, {
              variant:"primary",onClick:()=>r( {
                type:"BEGIN"
              }),children:[u.jsx(Ut, {
                size:18
              }),"Comenzar pregunta"]
            }),b&&u.jsxs(V, {
              variant:"primary",disabled:!H.selection,onClick:()=>r( {
                type:"CONFIRM"
              }),children:[u.jsx(mr, {
                size:17
              }),"Confirmar respuesta",u.jsx("kbd", {
                children:"↵"
              })]
            }),s.phase==="confirmada"&&u.jsxs(u.Fragment, {
              children:[s.config.rebound&&s.attempts.length===1&&u.jsxs(V, {
                onClick:p,children:[u.jsx(Dn, {
                  size:17
                }),"Conceder rebote"]
              }),u.jsxs(V, {
                variant:"primary",onClick:()=>r( {
                  type:"REVEAL"
                }),children:[u.jsx(Sr, {
                  size:18
                }),"Revelar solución"]
              })]
            }),A&&(s.index<s.questions.length-1?u.jsxs(V, {
              variant:"primary",onClick:()=>r( {
                type:"NEXT"
              }),children:["Siguiente pregunta",u.jsx(Hl, {
                size:18
              })]
            }):u.jsxs(V, {
              variant:"primary",onClick:O,children:[u.jsx(gr, {
                size:18
              }),"Ir a premiación"]
            })),Q&&u.jsxs(V, {
              variant:"primary",onClick:()=>r( {
                type:"PAUSE"
              }),children:[u.jsx(Ut, {
                size:18
              }),"Reanudar actividad"]
            })]
          })]
        }),u.jsxs("section", {
          className:"lifelines",children:[u.jsxs("div", {
            className:"row between",children:[u.jsxs("span", {
              className:"eyebrow",children:["COMODINES DE ",M.name.toUpperCase()]
            }),u.jsx("span", {
              className:"small muted",children:"Se conservan entre turnos"
            })]
          }),u.jsx("div", {
            className:"helper-grid",children:hs.map(C=>u.jsxs("button", {
              className:`helper ${s.inventories[M.id][C]<=0?"used":""}`,disabled:!b||s.inventories[M.id][C]<=0||s.usedHelpers.includes(`${s.index}:${M.id}:${C}`)||C==="pista"&&!z.hint||C==="mitad"&&s.hidden.length>0,onClick:()=>r( {
                type:"HELP",helper:C
              }),title:C==="pista"&&!z.hint?"Esta pregunta no tiene pista configurada":fs[C],children:[u.jsx(jr, {
                helper:C
              }),u.jsxs("span", {
                children:[fs[C],u.jsx("small", {
                  children:C==="pista"&&!z.hint?"Sin pista disponible":s.usedHelpers.includes(`${s.index}:${M.id}:${C}`)?"Usado en esta pregunta":s.inventories[M.id][C]>0?`${s.inventories[M.id][C]} disponible${s.inventories[M.id][C]===1?"":"s"}`:"Agotado"
                })]
              })]
            },C))
          })]
        })]
      }),u.jsxs("aside", {
        className:"score-sidebar",children:[u.jsxs("section", {
          className:"ranking-card",children:[u.jsxs("div", {
            className:"row between",children:[u.jsxs("h2", {
              children:[u.jsx(gr, {
                size:19
              }),"Clasificación"]
            }),u.jsx("span", {
              className:"small muted",children:"EN VIVO"
            })]
          }),u.jsx("ol", {
            children:zs(s).map((C,k)=>u.jsxs("li", {
              className:C.id===M.id?"current":"",children:[u.jsx("span", {
                className:"rank-no",children:On(s,C.id)
              }),u.jsx("span", {
                className:"rank-avatar",style: {
                  color:C.color
                },children:u.jsx(Rn, {
                  name:C.avatar,size:19
                })
              }),u.jsxs("span", {
                className:"rank-name",children:[C.name,C.id===M.id&&u.jsx("small", {
                  children:"En turno"
                })]
              }),u.jsxs("strong", {
                children:[s.scores[C.id],u.jsx("small", {
                  children:" pts"
                })]
              })]
            },C.id))
          })]
        }),u.jsxs("section", {
          className:"ladder-card",children:[u.jsxs("div", {
            className:"row",children:[u.jsx(vp, {
              size:18
            }),u.jsxs("h2", {
              children:["Progreso de ",M.name]
            })]
          }),u.jsxs("p", {
            children:[he," puntos propios · +100 por acierto"]
          }),u.jsx("ol", {
            children:B.map((C,k)=>u.jsxs("li", {
              className:he>=C?"reached":he<(B[k-1]||1/0)&&he>=C-100?"next":"",children:[u.jsx("span", {
                children:String(B.length-k).padStart(2,"0")
              }),C.toLocaleString("es-CO"),u.jsx("small", {
                children:"pts"
              }),he>=C&&u.jsx(_i, {
                size:14
              })]
            },C))
          }),u.jsxs("span", {
            className:"small muted",children:["Este progreso pertenece solo a ",M.name,". Cada grupo conserva su acumulado independiente."]
          })]
        }),u.jsxs("div", {
          className:`session-note ${W<=6e5?"time-warning":""}`,children:[u.jsx(Mn, {
            size:18
          }),u.jsx("p", {
            children:W<=3e5?"Últimos 5 minutos. Administra las oportunidades.":W<=6e5?"Quedan menos de 10 minutos de taller.":"Tómense el tiempo de pensar. El aprendizaje también cuenta."
          })]
        })]
      })]
    }),u.jsx("section", {
      className:"group-score-grid","aria-label":"Puntajes de los cinco grupos",children:s.config.groups.map(C=> {
        const k=zr(s,C.id);return u.jsxs("article", {
          className:`group-score ${C.id===M.id?"current":""}`,style: {
            "--group-color":C.color
          },children:[u.jsxs("div", {
            className:"row between",children:[u.jsx("span", {
              className:"group-avatar",children:u.jsx(Rn, {
                name:C.avatar,size:23
              })
            }),C.id===M.id?u.jsx("span", {
              className:"tag",children:"En turno"
            }):u.jsxs("span", {
              className:"small muted",children:[k.answered," respondidas"]
            })]
          }),u.jsx("h3", {
            children:C.name
          }),u.jsxs("div", {
            className:"group-points",children:[s.scores[C.id],u.jsx("span", {
              children:"puntos"
            })]
          }),u.jsxs("div", {
            className:"small muted",children:[k.hits," aciertos · ",k.errors," errores · ",k.rebounds," rebotes"]
          }),u.jsx("div", {
            className:"inventory-dots",children:hs.map(Ce=>u.jsxs("span", {
              className:s.inventories[C.id][Ce]?"available":"",title:`${fs[Ce]}: ${s.inventories[C.id][Ce]}`,children:[u.jsx(jr, {
                helper:Ce,size:14
              }),u.jsx("small", {
                children:s.inventories[C.id][Ce]
              })]
            },Ce))
          })]
        },C.id)
      })
    }),u.jsxs("div", {
      className:"game-footer",children:[u.jsxs("span", {
        children:[u.jsx(Un, {
          size:14
        }),"Planeación de proyectos, un desafío a la vez."]
      }),u.jsx("span", {
        children:"Espacio: pausa · P: presentador · M: silencio"
      })]
    })]
  })
}

function Ug( {
  game:s,now:f,dispatch:r
}) {
  const o=s.consultation,S=Bl(s),p=o.votes.reduce((O,z)=>O+z,0),g=["pausa","tiempo"].includes(s.phase);
  return u.jsxs(La, {
    title:fs[o.kind],onClose:()=>r( {
      type:"CLOSE_CONSULT"
    }),children:[u.jsxs("div", {
      className:"consultation-heading",children:[u.jsx(jr, {
        helper:o.kind,size:38
      }),u.jsx("p", {
        children:s.config.pauseConsult?"El tiempo de pregunta está pausado. El cronómetro del taller continúa, salvo pausa general.":"El tiempo de pregunta y el general continúan, salvo pausa general."
      })]
    }),g&&u.jsxs("div", {
      className:"warning-box",children:[s.phase==="pausa"?"Actividad pausada.":"Tiempo del taller finalizado."," Cierra esta ventana para acceder al panel del presentador."]
    }),o.kind==="salon"&&u.jsxs(u.Fragment, {
      children:[u.jsx("p", {
        children:"Votación presencial a mano alzada. Introduce los votos reales del salón."
      }),u.jsx("div", {
        className:"votes",children:S.options.map((O,z)=> {
          const H=s.hidden.includes(O.id),M=p?o.votes[z]/p*100:0;return u.jsxs("div", {
            className:`vote-row ${H?"muted":""}`,children:[u.jsxs("label", {
              children:[u.jsx("strong", {
                children:"ABCD"[z]
              }),u.jsx("span", {
                children:H?"Opción eliminada":O.text
              }),u.jsx("input", {
                "aria-label":`Votos para ${"ABCD"[z]}`,type:"number",min:"0",max:"10000",step:"1",disabled:H||g,value:o.votes[z],onChange:b=>r( {
                  type:"VOTES",votes:o.votes.map((A,I)=>z===I?+b.target.value:A)
                })
              }),u.jsxs("b", {
                children:[M.toFixed(1)," %"]
              })]
            }),u.jsx("div", {
              className:"vote-track",children:u.jsx("span", {
                style: {
                  width:`${M}%`
                }
              })
            })]
          },O.id)
        })
      }),u.jsxs("div", {
        className:"info-box",children:[p," votos registrados. La votación expresa la opinión del salón y no garantiza la respuesta correcta."]
      })]
    }),o.kind==="aliado"&&u.jsxs(u.Fragment, {
      children:[u.jsxs("label", {
        children:["Nombre del aliado presencial",u.jsx("input", {
          placeholder:"Nombre del compañero elegido",value:o.ally,disabled:g,onChange:O=>r( {
            type:"ALLY",name:O.target.value
          })
        })]
      }),u.jsxs("div", {
        className:`ally-clock ${ga(o.clock,f)<=0?"urgent":""}`,children:[ps(ga(o.clock,f)),u.jsx("span", {
          children:ga(o.clock,f)<=0?"Consulta finalizada":"segundos para consultar"
        })]
      }),u.jsx("p", {
        className:"muted",children:"Conversación presencial con un compañero externo al grupo, según las reglas del docente. No hay llamada ni conexión remota y no se genera una respuesta."
      })]
    }),o.kind==="pista"&&u.jsxs("div", {
      className:"hint-panel",children:[u.jsx(pp, {
        size:32
      }),u.jsx("h3", {
        children:"Una dirección, no la solución"
      }),u.jsx("p", {
        children:S.hint
      })]
    }),u.jsx("div", {
      className:"modal-actions",children:u.jsxs(V, {
        variant:"primary",onClick:()=>r( {
          type:"CLOSE_CONSULT"
        }),children:["Volver a la pregunta",u.jsx(Hl, {
          size:17
        })]
      })
    })]
  })
}

function qg( {
  game:s,dispatch:f,onClose:r,onBounce:o,onFinish:S,onReset:p,onHistory:g,onConfigure:O,onBackup:z,notify:H
}) {
  const[M,b]=$.useState(5),[A,I]=$.useState(s.config.groups[0].id),[Q,ie]=$.useState(0),[ue,U]=$.useState(""),[W,Ue]=$.useState(""),he=Bl(s);
  return u.jsxs(La, {
    title:"Panel del presentador",wide:!0,onClose:r,children:[u.jsx("div", {
      className:"warning-box",children:"Este panel puede verse en el proyector si compartes toda la pantalla del dispositivo. No es una vista privada. No muestra soluciones ocultas."
    }),u.jsxs("div", {
      className:"presenter-grid",children:[u.jsxs("section", {
        className:"form-stack",children:[u.jsx("h3", {
          children:"Control de la actividad"
        }),u.jsxs("div", {
          className:"row wrap",children:[u.jsxs(V, {
            variant:"primary",disabled:["tiempo","premiacion"].includes(s.phase),onClick:()=>f( {
              type:"PAUSE"
            }),children:[s.phase==="pausa"?u.jsx(Ut, {
              size:18
            }):u.jsx(Er, {
              size:18
            })," ",s.phase==="pausa"?"Reanudar":"Pausar"]
          }),u.jsxs(V, {
            disabled:s.phase!=="preparada",onClick:()=> {
              f( {
                type:"BEGIN"
              }),r()
            },children:[u.jsx(Ut, {
              size:17
            }),"Comenzar pregunta"]
          }),u.jsxs(V, {
            disabled:s.phase!=="confirmada",onClick:()=> {
              f( {
                type:"REVEAL"
              }),r()
            },children:[u.jsx(Sr, {
              size:17
            }),"Revelar solución"]
          }),u.jsxs(V, {
            disabled:s.phase!=="revelada"||s.index>=s.questions.length-1,onClick:()=> {
              f( {
                type:"NEXT"
              }),r()
            },children:["Siguiente",u.jsx(Y1, {
              size:17
            })]
          }),u.jsxs(V, {
            disabled:!s.config.rebound||s.phase!=="confirmada"||s.attempts.length>1,onClick:o,children:[u.jsx(Dn, {
              size:17
            }),"Habilitar rebote"]
          })]
        }),s.config.mode==="manual"&&u.jsxs("label", {
          children:["Grupo que responde",u.jsx("select", {
            disabled:s.phase!=="preparada",value:wa(s).groupId,onChange:P=>f( {
              type:"GROUP",id:P.target.value
            }),children:s.config.groups.map(P=>u.jsx("option", {
              value:P.id,children:P.name
            },P.id))
          }),u.jsx("span", {
            className:"small muted",children:"Solo se puede cambiar antes de comenzar la pregunta."
          })]
        }),u.jsxs("form", {
          className:"form-stack inset",onSubmit:P=> {
            P.preventDefault(),f( {
              type:"EXTRA",minutes:M
            }),H(`Ampliación de ${M} minutos registrada.`)
          },children:[u.jsx("h3", {
            children:"Agregar tiempo al taller"
          }),u.jsxs("label", {
            children:["Minutos adicionales",u.jsx("input", {
              required:!0,type:"number",min:"1",max:"120",value:M,onChange:P=>b(+P.target.value)
            })]
          }),u.jsxs(V, {
            type:"submit",children:[u.jsx(Ss, {
              size:16
            }),"Agregar tiempo y registrar"]
          })]
        }),u.jsxs("div", {
          className:"row wrap",children:[u.jsxs(V, {
            onClick:g,children:[u.jsx($1, {
              size:17
            }),"Ver historial (",s.history.length,")"]
          }),u.jsxs(V, {
            onClick:z,children:[u.jsx(_n, {
              size:17
            }),"Respaldar JSON"]
          })]
        }),u.jsxs("details", {
          className:"inset",children:[u.jsx("summary", {
            children:"Audio durante la actividad"
          }),u.jsxs("div", {
            className:"form-stack",children:[u.jsxs("label", {
              className:"check",children:[u.jsx("input", {
                type:"checkbox",checked:s.config.sound,onChange:P=>f( {
                  type:"AUDIO",settings: {
                    sound:P.target.checked
                  }
                })
              }),"Activar efectos y audio"]
            }),u.jsxs("label", {
              children:["Volumen de efectos: ",Math.round(s.config.effectVolume*100)," %",u.jsx("input", {
                type:"range",min:"0",max:"1",step:"0.01",value:s.config.effectVolume,onChange:P=>f( {
                  type:"AUDIO",settings: {
                    effectVolume:+P.target.value
                  }
                })
              })]
            }),u.jsxs("label", {
              className:"check",children:[u.jsx("input", {
                type:"checkbox",checked:s.config.music,onChange:P=>f( {
                  type:"AUDIO",settings: {
                    music:P.target.checked
                  }
                })
              }),"Música ambiental"]
            }),u.jsxs("label", {
              children:["Volumen de música: ",Math.round(s.config.musicVolume*100)," %",u.jsx("input", {
                type:"range",min:"0",max:"1",step:"0.01",value:s.config.musicVolume,onChange:P=>f( {
                  type:"AUDIO",settings: {
                    musicVolume:+P.target.value
                  }
                })
              })]
            })]
          })]
        })]
      }),u.jsxs("section", {
        className:"form-stack",children:[u.jsxs("form", {
          className:"form-stack inset",onSubmit:P=> {
            if(P.preventDefault(),!ue.trim()) {
              H("Escribe el motivo de la corrección.");return
            }

            f( {
              type:"CORRECT",groupId:A,points:Q,reason:ue
            }),U(""),H("Corrección registrada en el historial.")
          },children:[u.jsx("h3", {
            children:"Corregir un puntaje"
          }),u.jsxs("label", {
            children:["Grupo",u.jsx("select", {
              value:A,onChange:P=>I(P.target.value),children:s.config.groups.map(P=>u.jsx("option", {
                value:P.id,children:P.name
              },P.id))
            })]
          }),u.jsxs("div", {
            className:"form-grid",children:[u.jsxs("label", {
              children:["Ajuste de puntos (+ o −)",u.jsx("input", {
                type:"number",min:"-1000000",max:"1000000",required:!0,value:Q,onChange:P=>ie(+P.target.value)
              })]
            }),u.jsxs("label", {
              children:["Motivo obligatorio",u.jsx("input", {
                required:!0,value:ue,onChange:P=>U(P.target.value),placeholder:"Explica el ajuste"
              })]
            })]
          }),u.jsx(V, {
            type:"submit",children:"Registrar corrección"
          })]
        }),u.jsxs("details", {
          className:"inset",children:[u.jsx("summary", {
            children:"Anular la pregunta actual"
          }),u.jsxs("form", {
            className:"form-stack",onSubmit:P=> {
              P.preventDefault(),W.trim()&&(f( {
                type:"VOID",reason:W
              }),r())
            },children:[u.jsx("p", {
              className:"small muted",children:"La anulación no asigna puntos ni cuenta como oportunidad respondida. Se registra para auditar el reparto."
            }),u.jsxs("label", {
              children:["Motivo",u.jsx("input", {
                required:!0,value:W,onChange:P=>Ue(P.target.value)
              })]
            }),u.jsxs(V, {
              type:"submit",disabled:s.resolved||["tiempo","pausa"].includes(s.phase),children:["Anular «",he.id,"»"]
            })]
          })]
        }),u.jsxs(V, {
          disabled:s.phase!=="pausa",onClick:O,children:[u.jsx(Rt, {
            size:17
          }),"Editar banco para la próxima partida"]
        })]
      })]
    }),u.jsxs("div", {
      className:"modal-actions between",children:[u.jsxs(V, {
        variant:"danger",onClick:p,children:[u.jsx(Dn, {
          size:17
        }),"Reiniciar con confirmación"]
      }),u.jsxs(V, {
        variant:"primary",onClick:S,children:[u.jsx(k1, {
          size:17
        }),"Finalizar actividad"]
      })]
    })]
  })
}

function Hg( {
  game:s
}) {
  return u.jsx("div", {
    className:"history-list",children:[...s.history].reverse().map(f=> {
      var r;return u.jsxs("article", {
        children:[u.jsxs("div", {
          className:"row between",children:[u.jsx("span", {
            className:"tag",children:f.type.replaceAll("_"," ")
          }),u.jsx("time", {
            children:new Date(f.time).toLocaleString("es-CO")
          })]
        }),u.jsx("p", {
          children:f.detail
        }),u.jsxs("div", {
          className:"small muted",children:[((r=s.config.groups.find(o=>o.id===f.groupId))==null?void 0:r.name)||"Actividad"," ",f.questionId?`· ${f.questionId} · Equipo ${f.team} · ${f.theme}`:""]
        })]
      },f.id)
    })
  })
}

function Bg( {
  game:s,onCSV:f,onBackup:r,onHome:o,onNew:S,onTie:p,onShared:g
}) {
  const O=zs(s),z=ys(s),H=s.winners?s.config.groups.filter(U=>s.winners.includes(U.id)):z,M=!s.winners&&z.length>1,b=Ep(s),A=s.history.filter(U=>U.type==="correccion"),I=s.history.filter(U=>U.type==="ampliacion"),Q=s.config.questions.filter(U=>U.tiebreak&&!s.tieUsed.includes(U.id)),[ie,ue]=$.useState("ranking");
  return u.jsxs("main", {
    className:"awards-page",children:[u.jsx("div", {
      className:"confetti","aria-hidden":"true",children:Array.from( {
        length:48
      },(U,W)=>u.jsx("i", {
        style: {
          left:`${W*17.3%100}%`,animationDelay:`${W%9*.18}s`,background:["#f5cb76","#a98aff","#5ed6c6"][W%3],transform:`rotate(${W*13}deg)`
        }
      },W))
    }),u.jsx("span", {
      className:"eyebrow",children:"EL CONOCIMIENTO ES EL VERDADERO PREMIO"
    }),u.jsx("div", {
      className:"award-trophy",children:u.jsx(gr, {
        size:64,strokeWidth:1.2
      })
    }),u.jsx("h1", {
      children:M?"Empate":H.length>1?"¡Ganadores compartidos!":`¡${H[0].name}, a la cima!`
    }),u.jsxs("p", {
      children:[M?`${z.map(U=>U.name).join(" · ")} comparten el primer lugar.`:H.map(U=>U.name).join(" · "),u.jsx("br",{}),"Gracias por construir el aprendizaje en equipo."]
    }),M&&u.jsxs("div", {
      className:"tie-actions",children:[u.jsx("div", {
        className:"info-box",children:Q.length?`${Q.length} pregunta(s) de desempate cargada(s). Los grupos responden sin ver las selecciones de los demás y la solución se revela al final.`:"No hay preguntas de desempate disponibles. Puedes declarar ganadores compartidos o cargar una pregunta en una nueva actividad; no se elige al primero de la lista."
      }),u.jsxs("div", {
        className:"row center wrap",children:[u.jsx(V, {
          variant:"primary",disabled:!Q.length,onClick:p,children:"Pregunta de desempate"
        }),u.jsx(V, {
          onClick:g,children:"Declarar ganadores compartidos"
        })]
      })]
    }),!M&&u.jsx("div", {
      className:"podium",children:O.slice(0,3).map((U,W)=> {
        const Ue=On(s,U.id);return u.jsxs("article", {
          className:`podium-place place-${W}`,children:[u.jsx("span", {
            className:"podium-avatar",style: {
              color:U.color
            },children:u.jsx(Rn, {
              name:U.avatar,size:35
            })
          }),u.jsx("h2", {
            children:U.name
          }),u.jsxs("strong", {
            children:[s.scores[U.id],u.jsx("small", {
              children:" puntos"
            })]
          }),u.jsxs("div", {
            className:"podium-step",children:[u.jsx(vp, {
              size:22
            }),Ue,O.filter(he=>On(s,he.id)===On(s,U.id)).length>1&&u.jsx("small", {
              children:"compartido"
            })]
          })]
        },U.id)
      })
    }),u.jsxs("section", {
      className:"results-card",children:[u.jsxs("div", {
        className:"result-tabs",children:[u.jsx("button", {
          className:ie==="ranking"?"active":"",onClick:()=>ue("ranking"),children:"Clasificación completa"
        }),u.jsx("button", {
          className:ie==="temas"?"active":"",onClick:()=>ue("temas"),children:"Resumen por tema"
        })]
      }),u.jsx("div", {
        className:"table-wrap",children:ie==="ranking"?u.jsxs("table", {
          children:[u.jsx("thead", {
            children:u.jsx("tr", {
              children:["Puesto","Grupo","Respondidas","Aciertos","Errores","Rebotes","Puntos"].map(U=>u.jsx("th", {
                children:U
              },U))
            })
          }),u.jsx("tbody", {
            children:O.map(U=> {
              const W=zr(s,U.id);return u.jsxs("tr", {
                children:[u.jsx("td", {
                  children:On(s,U.id)
                }),u.jsx("td", {
                  children:u.jsx(Tp, {
                    group:U
                  })
                }),u.jsx("td", {
                  children:W.answered
                }),u.jsx("td", {
                  children:W.hits
                }),u.jsx("td", {
                  children:W.errors
                }),u.jsxs("td", {
                  children:[W.rebounds," (",W.reboundsCorrect," aciertos)"]
                }),u.jsx("td", {
                  className:"gold-text",children:s.scores[U.id]
                })]
              },U.id)
            })
          })]
        }):u.jsxs("table", {
          children:[u.jsx("thead", {
            children:u.jsxs("tr", {
              children:[u.jsx("th", {
                children:"Tema"
              }),u.jsx("th", {
                children:"Oportunidades principales"
              }),u.jsx("th", {
                children:"Aciertos principales"
              }),u.jsx("th", {
                children:"Rebotes"
              }),u.jsx("th", {
                children:"Puntos asignados"
              })]
            })
          }),u.jsx("tbody", {
            children:Ia.map(U=> {
              const W=s.results.filter(he=>he.theme===U&&!he.voided),Ue=W.filter(he=>!he.rebound);return u.jsxs("tr", {
                children:[u.jsx("td", {
                  children:U
                }),u.jsx("td", {
                  children:Ue.length
                }),u.jsx("td", {
                  children:Ue.filter(he=>he.correct).length
                }),u.jsx("td", {
                  children:W.filter(he=>he.rebound).length
                }),u.jsx("td", {
                  children:W.reduce((he,P)=>he+P.points,0)
                })]
              },U)
            })
          })]
        })
      }),b.unequal&&u.jsxs("div", {
        className:"warning-box",children:[u.jsx("strong", {
          children:"Hubo oportunidades desiguales."
        }),u.jsxs("p", {
          children:[s.config.groups.map((U,W)=>`${U.name}: ${b.counts[W]} preguntas / ${b.maxes[W]} puntos disponibles`).join(" · "),". Los rebotes se registran por separado."]
        })]
      }),!!A.length&&u.jsxs("div", {
        className:"info-box",children:[A.length," ajuste(s) manual(es) de puntaje: ",A.map(U=> {
          var W;return`${(W=s.config.groups.find(Ue=>Ue.id===U.groupId))==null?void 0:W.name}: ${U.detail}`
        }).join(" · ")]
      }),!!I.length&&u.jsx("div", {
        className:"info-box",children:I.map(U=>U.detail).join(" ")
      }),u.jsx("p", {
        className:"small muted",children:"Las preguntas anuladas no cuentan como respondidas. El resumen temático no incluye ajustes manuales; estos sí se incluyen en la clasificación. Los desempates no alteran los puntos acumulados."
      })]
    }),u.jsxs("div", {
      className:"row center wrap result-actions",children:[u.jsxs(V, {
        variant:"primary",onClick:f,children:[u.jsx(_n, {
          size:17
        }),"Exportar resultados CSV"]
      }),u.jsxs(V, {
        onClick:r,children:[u.jsx(_n, {
          size:17
        }),"Respaldo completo JSON"]
      }),u.jsxs(V, {
        onClick:S,children:[u.jsx(Dn, {
          size:17
        }),"Nueva partida, mismos grupos"]
      }),u.jsxs(V, {
        variant:"text",onClick:o,children:["Volver al inicio",u.jsx(Hl, {
          size:17
        })]
      })]
    })]
  })
}

const pr=gg();
function wg() {
  const[s,f]=$.useState(pr.archive.config),[r,o]=$.useState(pr.archive.game),S=$.useRef(r);
  S.current=r;
  const[p,g]=$.useState("welcome"),[O,z]=$.useState(null),[H,M]=$.useState(null),[b,A]=$.useState(""),[I,Q]=$.useState(pr.warning),[ie,ue]=$.useState(Date.now()),[U,W]=$.useState(!1),[Ue,he]=$.useState(""),[P,B]=$.useState(null),[C,k]=$.useState([]),[Ce,Pe]=$.useState(!1),[Ie,Qe]=$.useState(!1),[Na,Va]=$.useState(!1),we=$.useRef(null),L=$.useRef(!1),ae=$.useRef([]),te=$.useRef(null),me=$.useRef( {
    minute:!1,questionId:"",second:-1,allyId:""
  }),de=R=>A(R),Ze=(R,Y,ee)=>M( {
    title:R,body:Y,onConfirm:ee
  });
  $.useEffect(()=> {
    if(!b)return;const R=setTimeout(()=>A(""),6500);return()=>clearTimeout(R)
  },[b]),$.useEffect(()=> {
    const R=yg(s,r);R&&Q(R)
  },[s,r]),$.useEffect(()=> {
    const R=setInterval(()=> {
      const Y=Date.now();ue(Y),o(ee=>ee&&vs(ee,Y))
    },200);return()=> {
      clearInterval(R),ae.current.forEach(clearTimeout),ye.stop()
    }
  },[]),$.useEffect(()=> {
    const R=p==="game"&&r?r.config:s;return ye.enabled=R.sound&&!U,ye.effectVolume=R.effectVolume,ye.musicVolume=R.musicVolume,ye.enabled||ye.stopEffects(),ye.music(p==="game"&&!!r&&!["pausa","tiempo","premiacion"].includes(r.phase)&&R.music),()=>ye.stopMusic()
  },[p,r==null?void 0:r.phase,s.sound,s.effectVolume,s.musicVolume,r==null?void 0:r.config.sound,r==null?void 0:r.config.effectVolume,r==null?void 0:r.config.musicVolume,r==null?void 0:r.config.music,U]),$.useEffect(()=> {
    var Y,ee,Se;if(!r||p!=="game") {
      te.current=r;return
    }

    const R=te.current;if(te.current=r,!R||R.startedAt!==r.startedAt) {
      ye.cue("inicio");return
    }

    if(r.phase==="premiacion"&&R.phase!=="premiacion") {
      ye.cue("premio");return
    }

    if(r.phase==="tiempo"&&R.phase!=="tiempo") {
      ye.cue("fin");return
    }

    if(((Y=r.history.at(-1))==null?void 0:Y.id)!==((ee=R.history.at(-1))==null?void 0:ee.id)&&((Se=r.history.at(-1))==null?void 0:Se.type)==="comodin") {
      ye.cue("comodin");return
    }

    if(r.phase==="revelada"&&R.phase!=="revelada") {
      ye.cue(r.results.some(da=>da.questionId===Bl(r).id&&da.correct)?"correcta":"incorrecta");return
    }

    if(r.phase==="confirmada"&&R.phase!=="confirmada") {
      ye.cue(wa(r).timedOut?"fin":"confirmar");return
    }

    if(r.phase==="activa"&&R.phase==="preparada") {
      ye.cue("pregunta");return
    }

    wa(r).selection!==wa(R).selection&&wa(r).selection&&ye.cue("seleccion")
  },[r,p]),$.useEffect(()=> {
    var Se;if(!r||p!=="game"||["pausa","premiacion","tiempo"].includes(r.phase))return;const R=ga(r.clock,ie),Y=Math.ceil(ga(r.questionClock,ie)/1e3);R<=6e4&&!me.current.minute&&(me.current.minute=!0,ye.cue("cuenta"));const ee=`${r.index}:${r.attempts.length}`;me.current.questionId!==ee&&(me.current.questionId=ee,me.current.second=-1),r.questionClock.running&&Y<=10&&Y>0&&Y!==me.current.second&&(me.current.second=Y,ye.cue("cuenta")),((Se=r.consultation)==null?void 0:Se.kind)==="aliado"&&ga(r.consultation.clock,ie)===0&&me.current.allyId!==`${r.index}:${wa(r).groupId}`&&(me.current.allyId=`${r.index}:${wa(r).groupId}`,ye.cue("fin"))
  },[ie,r,p]);
  const Ve=R=> {
    var Y;
    if(R.type==="REVEAL") {
      if(L.current||((Y=S.current)==null?void 0:Y.phase)!=="confirmada")return;
      L.current=!0,ye.cue("suspenso"),ae.current.push(setTimeout(()=> {
        L.current=!1,o(ee=>ee&&hr(ee,R))
      },480))
    } else o(ee=>ee&&hr(ee,R))
  },Ga=()=>bs("respaldo-taller-redes.json",JSON.stringify( {
    version:1,config:s,game:r
  },null,2)),v=()=> {
    k(js(s)),Pe(!1),Qe(!1),z("start")
  },q=async()=> {
    const R=js(s);
    if(R.length) {
      k(R);
      return
    }

    s.questions.some(Y=>Y.demo)&&!Ce||ql(s).questions.length%5!==0&&!Ie||(await ye.unlock(),me.current= {
      minute:!1,questionId:"",second:-1,allyId:""
    },o(fg(s)),g("game"),z(null),Va(!1),ye.cue("inicio"))
  },K=()=> {
    if(!r)return;
    const R=Ep(r),Y=!r.resolved&&r.phase!=="tiempo",ee=`${R.unequal?"ADVERTENCIA: los grupos tuvieron distinta cantidad de preguntas o distintos puntos máximos disponibles. ":""}${Y?"La pregunta actual no está resuelta y no sumará puntos. ":""}Se detendrán los cronómetros y se abrirá la premiación. Puedes exportar el historial completo.`;
    Ze("Finalizar actividad",ee,()=> {
      Ve( {
        type:"FINISH"
      }),z(null)
    })
  },J=()=>Ze("Comenzar una nueva partida","Se reemplazará la partida guardada, incluidos puntajes, comodines e historial. La configuración y los grupos se conservarán. Exporta un respaldo si lo necesitas.",()=> {
    ye.stop(),o(null),g("welcome"),z(null),Va(!1)
  }),pe=()=> {
    p==="game"&&r&&r.phase!=="premiacion"?Ze("Volver al inicio","La actividad quedará pausada y guardada. Puedes retomarla con «Continuar partida».",()=> {
      ["pausa","tiempo"].includes(r.phase)||Ve( {
        type:"PAUSE"
      }),g("welcome"),z(null),ye.stop()
    }):(g("welcome"),z(null),ye.stop())
  },be=()=> {
    r&&(he(r.config.groups.find(R=>R.id!==wa(r).groupId).id),z("bounce"))
  },Ne=()=> {
    if(!r)return;
    const R=hr(r, {
      type:"BOUNCE",id:Ue
    });
    if(R===r||R.attempts.length===r.attempts.length) {
      de("El rebote no procede: solo tras un fallo o tiempo agotado, una vez y antes de revelar. Usa «Revelar solución» para resolver."),z(null);
      return
    }

    o(R),z(null),ye.cue("pregunta")
  },X=()=> {
    if(z(null),p==="game") {
      if((r==null?void 0:r.phase)!=="pausa") {
        de("Primero pausa la actividad para editar.");
        return
      }

      Ze("Editar configuración para la próxima partida","La partida actual mantiene una copia de su banco y de sus reglas para no alterar la competencia. Los cambios no afectan los resultados actuales.",()=> {
        Va(!0),g("config")
      })
    } else Va(!1),g("config")
  },se=async R=> {
    if(R) {
      try {
        if(R.size>15*1024*1024)throw new Error("El respaldo supera 15 MB.");
        const Y=JSON.parse((await R.text()).replace(/^\uFEFF/,""));
        zp(Y),Ze("Importar respaldo completo","Se reemplazarán la configuración y la partida actual. Se aplicarán 100 puntos por acierto a cada grupo conservando los ajustes manuales y la puntuación anterior. Los cronómetros en marcha descontarán el tiempo transcurrido desde el respaldo.",()=> {
          f(Ui(Y.config)),o(Y.game?vs(bp(Y.game)):null),g("welcome"),z(null),de("Respaldo validado y recuperado. Cada acierto suma 100 al grupo correspondiente.")
        })
      } catch(Y) {
        de(`No se importó el respaldo: ${Y instanceof Error?Y.message:"JSON no válido."}`)
      }

      we.current&&(we.current.value="")
    }
  };
  $.useEffect(()=> {
    const R=Y=> {
      var Se,da;if(Y.repeat||Y.ctrlKey||Y.altKey||Y.metaKey||["INPUT","TEXTAREA","SELECT"].includes((Se=Y.target)==null?void 0:Se.tagName)||(da=Y.target)!=null&&da.isContentEditable||O||H||r!=null&&r.consultation)return;const ee=Y.key.toLowerCase();if(ee==="f") {
        Y.preventDefault(),xr(de);return
      }

      if(ee==="m") {
        W(dl=>!dl);return
      }

      if(!(p!=="game"||!r||r.phase==="premiacion")) {
        if(ee==="p") {
          z("presenter");return
        }

        if(ee===" ") {
          Y.preventDefault(),Ve( {
            type:"PAUSE"
          });return
        }

        if("abcd".includes(ee)&&ee.length===1) {
          Ve( {
            type:"SELECT",id:Bl(r).options["abcd".indexOf(ee)].id
          });return
        }

        ee==="enter"&&["seleccionada","rebote"].includes(r.phase)&&wa(r).selection&&(Y.preventDefault(),Ve( {
          type:"CONFIRM"
        })),ee==="n"&&Ve( {
          type:"NEXT"
        })
      }
    };return window.addEventListener("keydown",R),()=>window.removeEventListener("keydown",R)
  },[r,p,O,H]);
  const za=p==="game"&&r?ga(r.clock,ie):s.minutes*6e4,Wa=p==="game"&&r;
  return u.jsxs("div", {
    className:`app-shell ${Wa?"is-game":""}`,onPointerDown:()=> {
      ye.unlock()
    },children:[u.jsx("a", {
      className:"skip-link",href:"#main-content",onClick:R=> {
        var Y;R.preventDefault(),(Y=document.querySelector("main"))==null||Y.focus()
      },children:"Saltar al contenido"
    }),u.jsxs("header", {
      className:"topbar",children:[u.jsxs("button", {
        className:"wordmark","aria-label":"Volver al inicio",onClick:pe,children:[u.jsx(Un, {
          size:24
        }),u.jsxs("span", {
          children:["REDES",u.jsx("span", {
            className:"wordmark-divider"
          }),"EL TALLER"]
        })]
      }),!Wa&&u.jsxs("nav", {
        className:"topnav","aria-label":"Navegación principal",children:[u.jsx("button", {
          className:p==="welcome"?"active":"",onClick:pe,children:"El escenario"
        }),u.jsx("button", {
          className:p==="config"?"active":"",onClick:X,children:"Configuración"
        }),u.jsx("button", {
          onClick:()=>z("guide"),children:"Cómo jugar"
        })]
      }),Wa&&u.jsx("span", {
        className:"topbar-activity",children:"Técnicas de Planeación de Redes"
      }),u.jsxs("div", {
        className:"top-actions",children:[Wa&&u.jsxs("div", {
          className:`global-clock ${za<=3e5?"urgent":za<=6e5?"warning":""}`,role:"timer","aria-label":"Tiempo restante del taller",children:[u.jsx(Mn, {
            size:20
          }),u.jsxs("div", {
            children:[u.jsx("span", {
              children:r.phase==="pausa"?"TALLER EN PAUSA":r.phase==="tiempo"?"TIEMPO FINALIZADO":"TIEMPO DEL TALLER"
            }),u.jsx("strong", {
              "data-testid":"general-clock",children:ps(za)
            })]
          }),u.jsx(V, {
            className:"icon-btn","aria-label":r.phase==="pausa"?"Reanudar actividad":"Pausar actividad",disabled:["tiempo","premiacion"].includes(r.phase),onClick:()=>Ve( {
              type:"PAUSE"
            }),children:r.phase==="pausa"?u.jsx(Ut, {
              size:17
            }):u.jsx(Er, {
              size:17
            })
          })]
        }),u.jsx(V, {
          className:"icon-btn",title:U?"Activar sonido (M)":"Silenciar (M)","aria-label":U?"Activar sonido":"Silenciar",onClick:()=>W(!U),children:U||!(r&&p==="game"?r.config.sound:s.sound)?u.jsx(og, {
            size:19
          }):u.jsx(ms, {
            size:19
          })
        }),u.jsx(Ng, {
          onError:de
        })]
      })]
    }),I&&u.jsxs("div", {
      className:"storage-warning",role:"alert",children:[u.jsx(yp, {
        size:18
      }),u.jsx("p", {
        children:I
      }),u.jsx(V, {
        onClick:Ga,children:"Exportar respaldo"
      }),u.jsx(V, {
        className:"icon-btn","aria-label":"Ocultar advertencia de almacenamiento",onClick:()=>Q(""),children:u.jsx(yr, {
          size:17
        })
      })]
    }),p==="welcome"&&u.jsxs("main", {
      className:"welcome-page",id:"main-content",tabIndex:-1,children:[u.jsxs("div", {
        className:"welcome-eyebrow",children:[u.jsx("span", {
          className:"live-dot"
        }),"UNA CLASE. CINCO GRUPOS. UN GRAN DESAFÍO."]
      }),u.jsxs("div", {
        className:"welcome-layout",children:[u.jsxs("section", {
          className:"welcome-copy",children:[u.jsxs("div", {
            className:"season-label",children:["TÉCNICAS DE PLANEACIÓN DE REDES",u.jsx("span", {
              children:"EDICIÓN UNIVERSITARIA"
            })]
          }),u.jsxs("h1", {
            children:["¿Quién quiere ser",u.jsx("br",{}),"experto en",u.jsx("br",{}),u.jsx("span", {
              children:"Planeación de Redes?"
            })]
          }),u.jsxs("p", {
            className:"welcome-subtitle",children:["Taller interactivo de estructura, tiempos,",u.jsx("br", {
              className:"desktop-break"
            })," costos y recursos."]
          }),u.jsxs("p", {
            className:"welcome-desc",children:["Conecta las ideas. Piensa en equipo.",u.jsx("br",{}),"Y lleva tu conocimiento hasta la cima."]
          }),u.jsxs("div", {
            className:"welcome-primary",children:[u.jsxs(V, {
              variant:"primary hero-button",onClick:r?()=>Ze("Iniciar una nueva actividad","Existe una partida guardada. Iniciar una nueva la reemplazará. Puedes continuarla o exportar un respaldo antes.",v):v,children:[u.jsx(Ut, {
                size:19,fill:"currentColor"
              }),"Iniciar actividad",u.jsx(Hl, {
                size:20
              })]
            }),r&&u.jsxs(V, {
              onClick:async()=> {
                await ye.unlock(),g("game")
              },children:[u.jsx(Dn, {
                size:17
              }),"Continuar partida"]
            })]
          }),u.jsxs("div", {
            className:"welcome-secondary",children:[u.jsxs(V, {
              onClick:X,children:[u.jsx(Nr, {
                size:17
              }),"Configurar taller"]
            }),u.jsxs(V, {
              variant:"text",onClick:()=>z("guide"),children:[u.jsx(Rt, {
                size:17
              }),"Cómo jugar"]
            })]
          }),u.jsxs("div", {
            className:"ready-indicator",children:[u.jsx("span", {
              className:"status-dot"
            }),u.jsx("span", {
              children:"El tiempo empieza cuando tú lo decidas."
            })]
          })]
        }),u.jsxs("aside", {
          className:"welcome-stage",children:[u.jsx("div", {
            className:"stage-beam one"
          }),u.jsx("div", {
            className:"stage-beam two"
          }),u.jsx("div", {
            className:"stage-orbit orbit-one"
          }),u.jsx("div", {
            className:"stage-orbit orbit-two"
          }),u.jsx("div", {
            className:"stage-orbit orbit-three"
          }),u.jsxs("div", {
            className:"welcome-stage-card",children:[u.jsxs("div", {
              className:"stage-card-top",children:[u.jsx("span", {
                className:"eyebrow",children:"TU PRÓXIMO DESAFÍO"
              }),u.jsxs("span", {
                className:"tag",children:["Modo ",s.questions.some(R=>R.demo)?"demostración":"definitivo"]
              })]
            }),u.jsxs("div", {
              className:"lobby-time",children:[u.jsx("span", {
                className:"clock-decoration",children:u.jsx(Mn, {
                  size:28
                })
              }),u.jsxs("div", {
                children:[u.jsx("strong", {
                  children:ps(s.minutes*6e4)
                }),u.jsx("span", {
                  children:"MINUTOS PARA CONECTAR IDEAS"
                })]
              })]
            }),u.jsx("div", {
              className:"stage-divider"
            }),u.jsxs("div", {
              className:"lobby-stat",children:[u.jsxs("div", {
                children:[u.jsx("strong", {
                  children:s.groups.length.toString().padStart(2,"0")
                }),u.jsx("span", {
                  children:"grupos participantes"
                })]
              }),u.jsx("span", {
                className:"stat-slash"
              }),u.jsxs("div", {
                children:[u.jsx("strong", {
                  children:s.questions.filter(R=>!R.tiebreak).length.toString().padStart(2,"0")
                }),u.jsx("span", {
                  children:"preguntas en juego"
                })]
              })]
            }),u.jsx("div", {
              className:"lobby-topics",children:Ia.map((R,Y)=>u.jsxs("div", {
                children:[u.jsx(Tr, {
                  theme:R,size:19
                }),u.jsx("span", {
                  children:R
                }),u.jsx("small", {
                  children:String(s.questions.filter(ee=>ee.theme===R&&!ee.tiebreak).length).padStart(2,"0")
                })]
              },R))
            }),u.jsxs("div", {
              className:"stage-card-bottom",children:[u.jsx("span", {
                className:"status-dot"
              }),s.mode==="rotativo"?"Turnos rotativos":"Selección manual",u.jsx("span", {
                children:"Sin dinero real"
              })]
            })]
          }),u.jsx("div", {
            className:"stage-floor"
          }),u.jsx("div", {
            className:"stage-caption",children:"EL CONOCIMIENTO SE CONSTRUYE EN EQUIPO"
          })]
        })]
      }),u.jsxs("section", {
        className:"lobby-groups",children:[u.jsxs("div", {
          className:"row between",children:[u.jsx("h2", {
            children:"Los protagonistas del taller"
          }),u.jsxs("button", {
            onClick:X,children:["Personalizar grupos",u.jsx(Hl, {
              size:16
            })]
          })]
        }),u.jsx("div", {
          className:"lobby-group-grid",children:s.groups.map((R,Y)=>u.jsxs("article", {
            style: {
              "--group-color":R.color
            },children:[u.jsx("span", {
              className:"group-avatar",children:u.jsx(Rn, {
                name:R.avatar,size:27
              })
            }),u.jsxs("div", {
              children:[u.jsx("h3", {
                children:R.name
              }),u.jsx("span", {
                children:Y===0?"Abre la competencia":`Turno ${Y+1}`
              })]
            }),u.jsx("span", {
              className:"group-number",children:String(Y+1).padStart(2,"0")
            })]
          },R.id))
        })]
      }),u.jsxs("section", {
        className:"lobby-bottom",children:[u.jsxs("div", {
          children:[u.jsxs("span", {
            className:"tag",children:[u.jsx(Rt, {
              size:14
            }),"Antes de empezar"]
          }),u.jsx("p", {
            children:s.questions.some(R=>R.demo)?"El banco contiene preguntas de demostración. Reemplázalas por las del ejercicio de tu clase.":"Revisa el ejercicio base y la distribución de preguntas antes de comenzar."
          })]
        }),u.jsxs("div", {
          className:"row wrap",children:[u.jsxs(V, {
            variant:"text",onClick:async()=> {
              await ye.unlock(),ye.enabled=!0,ye.effectVolume=s.effectVolume,ye.cue("inicio"),de("Prueba de sonido reproducida.")
            },children:[u.jsx(ms, {
              size:17
            }),"Probar sonido"]
          }),u.jsx(V, {
            variant:"text",onClick:()=>xr(de),children:"Activar pantalla completa"
          })]
        })]
      }),u.jsxs("footer", {
        className:"welcome-footer",children:[u.jsx("span", {
          children:"Hecho para aprender, pensado para compartir."
        }),u.jsxs("div", {
          className:"row wrap",children:[u.jsxs(V, {
            variant:"text",onClick:Ga,children:[u.jsx(_n, {
              size:14
            }),"Respaldo JSON"]
          }),u.jsxs(V, {
            variant:"text",onClick:()=> {
              var R;return(R=we.current)==null?void 0:R.click()
            },children:[u.jsx(xp, {
              size:14
            }),"Importar respaldo"]
          })]
        }),u.jsx("span", {
          children:"100 % local · Sin cuentas ni servicios externos"
        })]
      })]
    }),p==="config"&&u.jsx(_g, {
      config:s,onChange:f,confirm:Ze,notify:de,onBack:()=> {
        g(Na?"game":"welcome")
      },onStart:r?()=>Ze("Reemplazar la partida guardada","La nueva actividad reemplazará el progreso guardado. Exporta un respaldo antes si deseas conservarlo.",v):v,locked:Na
    }),Wa&&r.phase!=="premiacion"&&u.jsx(Rg, {
      game:r,now:ie,dispatch:Ve,onExercise:()=>z("exercise"),onPresenter:()=>z("presenter"),onBounce:be,onImage:R=> {
        B(R),z("image")
      },onFinish:K
    }),Wa&&r.phase==="premiacion"&&u.jsx(Bg, {
      game:r,onCSV:()=>jg(r),onBackup:Ga,onHome:pe,onNew:()=> {
        f( {
          ...r.config
        }),J()
      },onTie:()=>z("tie"),onShared:()=>Ve( {
        type:"SHARED"
      })
    }),u.jsx("input", {
      hidden:!0,ref:we,type:"file",accept:".json,application/json","aria-label":"Importar respaldo JSON",onChange:R=> {
        var Y;return se((Y=R.target.files)==null?void 0:Y[0])
      }
    }),O==="guide"&&u.jsx(La, {
      title:"Cómo jugar",wide:!0,onClose:()=>z(null),children:u.jsx(Dg, {
        onConfigure:()=> {
          z(null),X()
        }
      })
    }),O==="start"&&u.jsx(La, {
      title:"Todo listo para el desafío",onClose:()=>z(null),children:C.length>0?u.jsxs(u.Fragment, {
        children:[u.jsxs("div", {
          className:"error-box",role:"alert",children:[u.jsx("h3", {
            children:"La configuración necesita unos ajustes"
          }),u.jsx("ul", {
            children:C.slice(0,16).map((R,Y)=>u.jsx("li", {
              children:R
            },Y))
          })]
        }),u.jsx(V, {
          variant:"primary",onClick:()=> {
            z(null),g("config")
          },children:"Volver a la configuración"
        })]
      }):u.jsxs(u.Fragment, {
        children:[u.jsxs("div", {
          className:"start-summary",children:[u.jsxs("div", {
            children:[u.jsx(Mn, {
              size:23
            }),u.jsxs("strong", {
              children:[s.minutes," min"]
            }),u.jsx("span", {
              children:"Taller completo"
            })]
          }),u.jsxs("div", {
            children:[u.jsx(Di, {
              size:23
            }),u.jsx("strong", {
              children:"5 grupos"
            }),u.jsx("span", {
              children:s.mode==="rotativo"?"Turnos rotativos":"Turnos manuales"
            })]
          }),u.jsxs("div", {
            children:[u.jsx(Rt, {
              size:23
            }),u.jsxs("strong", {
              children:[s.questions.filter(R=>!R.tiebreak).length," preguntas"]
            }),u.jsx("span", {
              children:s.questionTimer?`${s.seconds} s por pregunta`:"Sin límite por pregunta"
            })]
          })]
        }),u.jsxs("ul", {
          className:"rules-summary",children:[u.jsx("li", {
            children:"Una selección, una confirmación definitiva. La solución se revela manualmente."
          }),u.jsx("li", {
            children:"Cada acierto suma 100 puntos solo al grupo que respondió. Cada grupo acumula su puntaje por separado; la dificultad no cambia el valor."
          }),u.jsxs("li", {
            children:[s.helperCount," uso(s) de cada comodín por grupo. ",s.rebound?"Un rebote disponible por pregunta: 100 puntos si acierta.":"Rebotes desactivados."]
          }),u.jsx("li", {
            children:"El cronómetro del taller comienza al presionar el botón inferior. La pregunta comienza por separado."
          })]
        }),u.jsxs("div", {
          className:"info-box",children:["Distribución temática: ",Ia.map(R=>`${s.questions.filter(Y=>Y.theme===R&&!Y.tiebreak).length} de ${R.toLowerCase()}`).join(" · "),". No se garantiza una pregunta de cada tema por grupo."]
        }),u.jsx("div", {
          className:"small distribution",children:s.groups.map((R,Y)=>u.jsxs("span", {
            children:[R.name,": ",ql(s).assignments.filter(ee=>ee===R.id).length," preguntas · ",ql(s).totals[Y]," pts posibles"]
          },R.id))
        }),new Set(ql(s).totals).size>1&&u.jsx("div", {
          className:"warning-box",children:"Los puntajes máximos disponibles no son iguales. Ajusta la cantidad de preguntas para repartir las mismas oportunidades entre los cinco grupos. Cada acierto vale 100."
        }),s.questions.filter(R=>!R.tiebreak).length%5!==0&&u.jsxs("label", {
          className:"check warning-box",children:[u.jsx("input", {
            type:"checkbox",checked:Ie,onChange:R=>Qe(R.target.checked)
          }),"Acepto iniciar con oportunidades desiguales; el banco no es múltiplo de cinco."]
        }),s.questions.some(R=>R.demo)&&u.jsxs("label", {
          className:"check warning-box",children:[u.jsx("input", {
            type:"checkbox",checked:Ce,onChange:R=>Pe(R.target.checked)
          }),"Entiendo que estoy iniciando una demostración, no el taller definitivo."]
        }),!s.exercise.description&&!s.exercise.activities.length&&!s.exercise.image&&u.jsx("p", {
          className:"small muted",children:"No hay ejercicio base cargado. Puedes practicar con las preguntas conceptuales de demostración."
        }),u.jsxs(V, {
          variant:"primary full",disabled:s.questions.some(R=>R.demo)&&!Ce||s.questions.filter(R=>!R.tiebreak).length%5!==0&&!Ie,onClick:q,children:[u.jsx(Ut, {
            size:18
          }),"Iniciar actividad",u.jsx(Hl, {
            size:18
          })]
        })]
      })
    }),O==="exercise"&&r&&u.jsx(La, {
      title:"Ejercicio base",wide:!0,onClose:()=>z(null),children:u.jsx(Og, {
        exercise:r.config.exercise
      })
    }),O==="image"&&P&&u.jsx(La, {
      title:"Apoyo visual de la pregunta",wide:!0,onClose:()=>z(null),children:u.jsx(qn, {
        src:P.image,alt:"Imagen o diagrama de la pregunta"
      })
    }),O==="presenter"&&r&&u.jsx(qg, {
      game:r,dispatch:Ve,onClose:()=>z(null),onBounce:be,onFinish:K,onReset:J,onHistory:()=>z("history"),onConfigure:X,onBackup:Ga,notify:de
    }),O==="history"&&r&&u.jsx(La, {
      title:"Historial de la actividad",wide:!0,onClose:()=>z("presenter"),children:u.jsx(Hg, {
        game:r
      })
    }),O==="bounce"&&r&&u.jsx(La, {
      title:"Conceder un rebote",onClose:()=>z(null),children:u.jsxs("div", {
        className:"form-stack",children:[u.jsx("div", {
          className:"info-box",children:"Solo tras un fallo o tiempo agotado, antes de revelar la solución. Una oportunidad adicional por pregunta. Un acierto suma 100 exclusivamente al grupo del rebote; el grupo original no suma."
        }),u.jsxs("label", {
          children:["Grupo participante",u.jsx("select", {
            value:Ue,onChange:R=>he(R.target.value),children:r.config.groups.filter(R=>R.id!==r.attempts[0].groupId).map(R=>u.jsx("option", {
              value:R.id,children:R.name
            },R.id))
          })]
        }),u.jsx("p", {
          children:"No se mostrará la solución hasta que finalice el rebote. El temporizador de pregunta se reinicia para el nuevo grupo."
        }),u.jsxs(V, {
          variant:"primary",onClick:Ne,children:["Comenzar rebote",u.jsx(Dn, {
            size:17
          })]
        })]
      })
    }),O==="tie"&&r&&u.jsx(Lg, {
      game:r,dispatch:Ve,onClose:()=>z(null)
    }),Wa&&r.consultation&&u.jsx(Ug, {
      game:r,now:ie,dispatch:Ve
    }),H&&u.jsxs(La, {
      title:H.title,onClose:()=>M(null),children:[u.jsx("p", {
        children:H.body
      }),u.jsxs("div", {
        className:"modal-actions",children:[u.jsx(V, {
          onClick:()=>M(null),children:"Cancelar"
        }),u.jsx(V, {
          variant:"primary",onClick:()=> {
            const R=H.onConfirm;M(null),R()
          },children:"Confirmar"
        })]
      })]
    }),b&&u.jsxs("div", {
      className:"toast",role:"status",children:[u.jsx(vr, {
        size:19
      }),u.jsx("p", {
        children:b
      }),u.jsx("button", {
        "aria-label":"Cerrar aviso",onClick:()=>A(""),children:u.jsx(yr, {
          size:17
        })
      })]
    })]
  })
}

function Lg( {
  game:s,dispatch:f,onClose:r
}) {
  var ie,ue;
  const[o]=$.useState(()=>ys(s)),[S,p]=$.useState(((ie=s.config.questions.find(U=>U.tiebreak&&!s.tieUsed.includes(U.id)))==null?void 0:ie.id)||""),[g,O]=$.useState({}),[z,H]=$.useState(""),[M,b]=$.useState(0),[A,I]=$.useState(!1),Q=s.config.questions.find(U=>U.id===S);
  return Q?u.jsx(La, {
    title:"Pregunta de desempate",wide:!0,onClose:r,children:u.jsxs("div", {
      className:"form-stack",children:[u.jsx("div", {
        className:"info-box",children:"Ronda especial sin puntos adicionales. Cada grupo fija su respuesta; no se muestran las selecciones anteriores. Solo se define ganador único si un solo grupo acierta. Si varios aciertan, continúan empatados; si ninguno acierta, se conserva el empate."
      }),M===0&&!A&&u.jsxs("label", {
        children:["Pregunta cargada por el organizador",u.jsx("select", {
          value:S,onChange:U=>p(U.target.value),children:s.config.questions.filter(U=>U.tiebreak&&!s.tieUsed.includes(U.id)).map(U=>u.jsx("option", {
            value:U.id,children:U.text
          },U.id))
        })]
      }),u.jsx("h2", {
        children:Q.text
      }),Q.image&&u.jsx(qn, {
        src:Q.image,alt:"Apoyo visual de la pregunta de desempate"
      }),M<o.length&&!A?u.jsxs(u.Fragment, {
        children:[u.jsxs("h3", {
          children:["Responde: ",o[M].name]
        }),u.jsx("div", {
          className:"answers",children:Q.options.map((U,W)=>u.jsxs("button", {
            className:`answer ${z===U.id?"selected":""}`,onClick:()=>H(U.id),children:[u.jsx("span", {
              className:"letter",children:"ABCD"[W]
            }),U.text]
          },U.id))
        }),u.jsxs(V, {
          variant:"primary",disabled:!z,onClick:()=> {
            O( {
              ...g,[o[M].id]:z
            }),H(""),b(M+1)
          },children:["Confirmar respuesta definitiva",u.jsx(Vg,{})]
        })]
      }):A?u.jsxs(u.Fragment, {
        children:[u.jsxs("div", {
          className:"solution-panel",children:[u.jsxs("h3", {
            children:["Respuesta correcta: ",(ue=Q.options.find(U=>U.id===Q.correctId))==null?void 0:ue.text]
          }),u.jsx("p", {
            children:Q.explanation
          }),Q.extra&&u.jsx("p", {
            className:"pre-line",children:Q.extra
          }),u.jsx("p", {
            className:"small",children:Q.reference
          })]
        }),o.map(U=>u.jsxs("p", {
          children:[U.name,": ",g[U.id]===Q.correctId?"Acierto":"Error","."]
        },U.id)),u.jsx(V, {
          variant:"primary",onClick:r,children:"Volver a la premiación"
        })]
      }):u.jsxs(u.Fragment, {
        children:[u.jsx("p", {
          children:"Todos los grupos fijaron sus respuestas. El presentador puede revelar ahora."
        }),u.jsx(V, {
          variant:"primary",onClick:()=> {
            f( {
              type:"TIE",questionId:Q.id,answers:g
            }),I(!0),ye.cue("premio")
          },children:"Revelar el desempate"
        })]
      })]
    })
  }):u.jsx(La, {
    title:"Desempate",onClose:r,children:u.jsx("p", {
      children:"No hay preguntas de desempate disponibles."
    })
  })
}

function Vg() {
  return u.jsx(_i, {
    size:17
  })
}

B1.createRoot(document.getElementById("root")).render(u.jsx(M1.StrictMode, {
  children:u.jsx(wg,{})
}));

