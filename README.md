# ITEA_JS_ADV

Home Work 1.1
    function "shape"
      ✓ should be a function
      ✓ should run without errors
    result of function "shape"
      1) should be an object
      2) should contain all required properties - "type, getS, getP"
    result of calling with parameters
      if called with 4 args
        3) should has rectangle type - when called with 4 args
        4) should return perimeter
        5) should return square
      if called with 3 args
        6) should has triangle type when called with 3 args
        7) should return perimeter
        8) should return square


  2 passing (14ms)
  8 failing

  1) Home Work 1.1
       result of function "shape"
         should be an object:
     AssertionError: expected undefined to be an object
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:83:33)
      at processImmediate (internal/timers.js:456:21)

  2) Home Work 1.1
       result of function "shape"
         should contain all required properties - "type, getS, getP":
     TypeError: Cannot convert undefined or null to object
      at Function.keys (<anonymous>)
      at Object.getOwnEnumerableProperties (node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js:28:17)
      at Proxy.assertKeys (node_modules/chai/lib/chai/core/assertions.js:2347:18)
      at Proxy.methodWrapper (node_modules/chai/lib/chai/utils/addMethod.js:57:25)
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:86:39)
      at processImmediate (internal/timers.js:456:21)

  3) Home Work 1.1
       result of calling with parameters
         if called with 4 args
           should has rectangle type - when called with 4 args:
     TypeError: Cannot read property 'type' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:94:28)
      at processImmediate (internal/timers.js:456:21)

  4) Home Work 1.1
       result of calling with parameters
         if called with 4 args
           should return perimeter:
     TypeError: Cannot read property 'getP' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:97:28)
      at processImmediate (internal/timers.js:456:21)

  5) Home Work 1.1
       result of calling with parameters
         if called with 4 args
           should return square:
     TypeError: Cannot read property 'getS' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:100:28)
      at processImmediate (internal/timers.js:456:21)

  6) Home Work 1.1
       result of calling with parameters
         if called with 3 args
           should has triangle type when called with 3 args:
     TypeError: Cannot read property 'type' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:108:28)
      at processImmediate (internal/timers.js:456:21)

  7) Home Work 1.1
       result of calling with parameters
         if called with 3 args
           should return perimeter:
     TypeError: Cannot read property 'getP' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:111:28)
      at processImmediate (internal/timers.js:456:21)

  8) Home Work 1.1
       result of calling with parameters
         if called with 3 args
           should return square:
     TypeError: Cannot read property 'getS' of undefined
      at Context.<anonymous> (test/IDikeYI/hw1.1.js:114:28)
      at processImmediate (internal/timers.js:456:21)
