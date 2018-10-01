import gulp from 'gulp';
import browserSync from 'browser-sync';

const dev = console.log('are you gulping?');
const server = browserSync.create();

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

export default dev;