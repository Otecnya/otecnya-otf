import Gulp from 'gulp'
import path from 'path'
import babel from 'gulp-babel'

let Task = Gulp.task.bind( Gulp )
let Src = Gulp.src.bind( Gulp )
let Dest = Gulp.dest.bind( Gulp )

Task( 'build', () => Src( [ 'src/**/*.js' ] )
	.pipe( babel( {
		presets: [ "es2015" ]
	} ) )
	.pipe( Dest( 'lib' ) ) )

Task( 'default', [ 'build' ] )
