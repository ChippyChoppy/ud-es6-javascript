/*
 * Notes
 * 
 * What ES6 means?
 * ECMAScript 6 --> standard; description of scripting language, JS is implementation of it
 * Consider a new version of JS
 * 
 * ES4 was axed and never actually released.
 * 
 * ES5 2008ish 5.1 2011ish 
 * 
 * ES6 (ES2015) --> newest implementation of JS
 *  moving away from counters and into years with idea of releasing new version every year
 * 
 * ES7
 */

/**
 * How we actually make use of ES6 inside of our browser?
 * 
 * Write    -->     "translate" --> Show in Browser
 * ES6 Code -->     Babel       --> ES5 Code
 *                        Safe to run in your Browser!
 * has to be implemented by browser it's running on in order to run properly. Vast majority of users may not have support for ES6 standard.
 * 
 * So we write code, run it through babel to translate it to ES5, because we can assume almost every browser in the world runs ES5.
 * 
 * What happens when everyone should have a browser that supports ES6? We'll probably continue to use babel to transpile our future versions into previous versions of ES. Kind of locked into Babel
 */