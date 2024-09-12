----------- watch one specific file
tsc app.ts -w


----------- tell ts to compile our entire project
tsc --init 
  Note: this command generates the "tsconfig.json" file.
  This is the indicator to ts that this project should be watched by ts.
  Now we can just run tsc and ts will compile all .ts files
tsc


---------- tell ts to wach the entire project and keeps compiling it automatically
tsc -w



------------------------  tsconfig.json file analysis
-- exclude
-- include   
-- files
-- "target": "es2016"
  it tells js for what JS version we want to compile.
  es2015 = es6 , from there we have es by year: es2016, es2017, es2018, es2019, es2020, es2021, es2022, es2023, etc
-- "lib"
  target environment
-- "allowJS"
  used to add js files in the compilation. a js file will be compiled by ts.
-- "checkjs"
  ts will not compiled js files but it will report potencial errors.
-- "jsx"
  for react development
-- sourceMap
  helps us with debugging and development. if it is set to true, it will generate the *.js.map file that can be accessed in the browser
-- rootDir
  src folder where the ts files are located
-- outDir
  dist folder there the .js files are generated
-- "removeComments": true
  remove any comment in the js file
-- "noEmit": true
  if we do not want to generate any js file, we just want to check the ts code only
-- "noEmitOnError": true
  this will not generate the js files when there are errors on the code.
-- "strict": true 
  Enable all strict type-checking options. bellow. we can also comment this one, and select the strict options we want to enable