import gulp from 'gulp';
import browserSync from 'browser-sync';

const dev = console.log('are you gulping?');
const server = browserSync.create();

function serve(done) {
  server.init({
    server: {
      baseDir: './',
    },
  });
  done();
}

export default dev;