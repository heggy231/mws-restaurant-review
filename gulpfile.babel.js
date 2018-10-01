import gulp from 'gulp';
import browserSync from 'browser-sync';
import del from 'del';

// const dev = console.log('are you gulping?');
const server = browserSync.create();

function clean(done) {
  del(['cdd']);
  del(['js']);
  done();
}

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: {
      baseDir: './',
    },
  });
  done();
}

function watch() {
  gulp.watch('*.html', reload);
}

const dev = gulp.series(serve, watch);

export default dev;