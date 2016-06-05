import Gulp from 'gulp'
import path from 'path'
import Browserify from 'browserify'
import Babelify from 'babelify'
import stream from 'vinyl-source-stream'

let Task = Gulp.task.bind( Gulp )
let Src = Gulp.src.bind( Gulp )
let Dest = Gulp.dest.bind( Gulp )

Task( 'build', () => {
	Browserify( {
			entries: [ 'src/OTF.js' ],
			extensions: [ '.js' ],
		} )
		.transform( Babelify, {
			presets: [ 'es2015' ],
		} )
		.bundle()
		.pipe( stream( 'OTF.js' ) )
		.pipe( Gulp.dest( 'lib' ) )
} )

Task( 'default', [ 'build' ] )
